# fmdx-monitor

This is my personal, custom-built HTML/JS dashboard designed to visualize, track, and log long-distance FM radio receptions (FM-DXing). It is tailored specifically for my own radio monitoring station and optimized for capturing propagation events like **Sporadic-E (Es)**, **Tropospheric Ducting (Tropo)**, and **Meteor Scatter**.

> ⚠️ **Note:** This is a personal project built specifically for my local infrastructure and setup. It is not designed as a plug-and-play application for general public use, though the technical documentation below outlines how it operates.

## 📻 Features
- **Live Signal Dashboard:** A clean, structural overview of my currently monitored frequencies, signal levels, and reception parameters.
- **RDS Data Decoding:** Real-time logging of Program Service (PS) names, RadioText (RT), and critical Program Identification (PI) codes for definitive station verification.
- **Static Frontend:** Built entirely with static HTML, CSS, and vanilla JavaScript for lightning-fast loading times via GitHub Pages.

## 🔌 Data Source & Technical Integration
The monitor relies on a custom data pipeline tailored to my specific hardware setup:
- **Backend Compatibility:** The interface is built to display live data from **NoobishSVK's FM-DX Webservers**.
- **API Fetching:** It connects directly to the server's native `/api` endpoint to fetch real-time frequency and RDS streams.
- **Automation Bridge:** Data routing, caching, and logging are handled via a custom **Google Apps Script** integration that bridges the webserver's `/api` directly with this frontend interface.
