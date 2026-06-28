function doGet(e) {
  // Fetches the URL dynamically from the HTML request
  // If nothing is passed, use BirkiDX as the default fallback
  let targetUrl = (e && e.parameter && e.parameter.url) ? e.parameter.url : "https://birkidx.fmtuner.org/api";
  
  // Append cache buster to prevent Google from caching old data
  if (targetUrl.indexOf('?') !== -1) {
    targetUrl += "&_=" + new Date().getTime();
  } else {
    targetUrl += "?_=" + new Date().getTime();
  }
  
  try {
    const response = UrlFetchApp.fetch(targetUrl, { "muteHttpExceptions": true });
    return ContentService.createTextOutput(response.getContentText())
                         .setMimeType(ContentService.MimeType.JSON);
  } catch(err) {
    return ContentService.createTextOutput(JSON.stringify({error: err.toString()}))
                         .setMimeType(ContentService.MimeType.JSON);
  }
}