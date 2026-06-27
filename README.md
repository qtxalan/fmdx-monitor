# fmdx-monitor

## 📻 Features
- **Live Signal Dashboard:** A clean, structural overview of currently monitored frequencies, signal strengths, and reception parameters.
- **RDS Data Decoding:** Real-time logging of Program Service (PS) names, RadioText (RT), and critical Program Identification (PI) codes for definitive station verification.
- **Static Design:** Built entirely with static HTML, CSS, and vanilla JavaScript—zero backend dependencies or server setup required.
- **Optimized for GitHub Pages:** Fast load times and instant updates with no hosting overhead.

## 🔌 Data Source & Integration
This monitor is designed to seamlessly fetch and display live tuner data:
- **Backend Compatibility:** Fully compatible with **NoobishSVK's FM-DX Webservers**.
- **API Fetching:** It connects directly to the server's native `/api` endpoint to retrieve real-time frequency and RDS streams.
- **Automation:** Can be easily integrated with a simple **Google Apps Script** (or standard client-side JavaScript `fetch`) to bridge, log, or forward the API data directly into your frontend dashboard.
