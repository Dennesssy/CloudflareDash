# CloudflareDash

A dashboard to monitor and manage your Cloudflare account and domain statistics — requests, domains, threats blocked, bandwidth saved, and more — with a clean analytics UI.

> Screenshot (place the provided screenshot at `assets/overview.png` in this repo to display it below)

![CloudflareDash Overview Screenshot](assets/overview.png)

Table of contents
- [Overview](#overview)
- [Features](#features)
- [Screenshot](#screenshot)
- [Getting started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment variables](#environment-variables)
  - [Run locally](#run-locally)
- [Configuration](#configuration)
  - [Cloudflare API Credentials](#cloudflare-api-credentials)
  - [Optional integrations](#optional-integrations)
- [Usage](#usage)
  - [Common workflows](#common-workflows)
- [Deployment](#deployment)
  - [Docker](#docker)
  - [Hosting providers](#hosting-providers)
- [Security & Privacy](#security--privacy)
- [Troubleshooting & FAQ](#troubleshooting--faq)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

Overview
--------
CloudflareDash is designed to give a fast, at-a-glance view of your Cloudflare account — total requests, active domains, threats blocked, caching bandwidth saved, and an analytics chart for request traffic across the last 24 hours. The layout mirrors a typical Cloudflare control panel with sections for Domains, DNS Records, Analytics, and Developer tools (Workers, Pages, KV, D1, Durable Objects, etc.).

Features
--------
- Account overview widgets: Total Requests, Domains, Threats Blocked, Bandwidth Saved
- 24-hour request traffic visualization (area/line chart)
- Navigation for managing domains, DNS records, analytics, and developer resources
- Configurable Cloudflare API integration
- Responsive UI suitable for dashboards or admin panels
- Easy to extend with additional panels, charts, and metrics

Screenshot
----------
The screenshot above demonstrates the Overview dashboard and analytics chart. To reproduce the same view in this repository, add the screenshot file to:
- `assets/overview.png`

Getting started
---------------
These instructions will help you get a local copy running for development and testing.

Prerequisites
- Node.js (>= 16) and npm or Yarn OR the stack this repo uses (update based on actual project)
- A Cloudflare account and API access (API Token or Global API key)
- Optional: Docker for containerized runs

Installation
1. Clone the repo
   ```bash
   git clone https://github.com/Dennesssy/CloudflareDash.git
   cd CloudflareDash
   ```
2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

Environment variables
---------------------
Create a `.env` file in the project root (or configure secrets in your host) with at minimum:

- CF_API_TOKEN — A Cloudflare API Token with the necessary permissions (recommended)  
- CF_ACCOUNT_ID — Cloudflare Account ID to scope API requests
- NODE_ENV — `development` or `production` (optional)

Example .env:
```
CF_API_TOKEN=your_cloudflare_api_token_here
CF_ACCOUNT_ID=0123456789abcdef
NODE_ENV=development
```

Important: Use least-privilege API tokens — only grant permissions the dashboard requires (read analytics, list zones, read DNS records, etc.). Do NOT commit your `.env` to source control.

Run locally
-----------
Start the local dev server:
```bash
npm run dev
# or
yarn dev
```
Open http://localhost:3000 (or the port your project uses) in your browser.

Build for production:
```bash
npm run build
npm run start
```

Configuration
-------------
Cloudflare API credentials
- Create an API Token in the Cloudflare dashboard:
  - Recommended permissions: Zone.Zone, Zone.Cache Purge (if needed), Zone.DNS (read if you display DNS), Analytics (read), Account (read) — adjust to your app's needs.
  - Use the token in `CF_API_TOKEN`.
- Cloudflare global API key (not recommended) can be used but is less secure than scoped tokens.

Optional integrations
- Database (for storing user settings or cached metrics)
- OAuth (if you want per-user Cloudflare access rather than a single account token)
- Third-party charting or analytics backends

Usage
-----
Common workflows the dashboard supports:
- View account-wide metrics such as total requests and bandwidth saved
- Inspect request traffic over the last 24 hours using the analytics chart
- Browse and manage domains and DNS records (if implemented)
- Access developer features like Workers, Pages, KV namespaces, and D1 databases (links to Cloudflare or integrated UI)
- Monitor threats blocked and trends over time

Example: Fetching analytics from Cloudflare (conceptual curl)
```bash
curl -X GET "https://api.cloudflare.com/client/v4/zones/<ZONE_ID>/analytics/dashboard" \
  -H "Authorization: Bearer $CF_API_TOKEN" \
  -H "Content-Type: application/json"
```
Note: Replace `<ZONE_ID>` with your zone, or use account-scoped endpoints if your dashboard aggregates multiple zones. See Cloudflare API docs for exact endpoints and parameters.

Deployment
----------
Docker
1. Build
   ```bash
   docker build -t cloudflaredash:latest .
   ```
2. Run
   ```bash
   docker run -e CF_API_TOKEN="$CF_API_TOKEN" -e CF_ACCOUNT_ID="$CF_ACCOUNT_ID" -p 3000:3000 cloudflaredash:latest
   ```

Hosting providers
- Vercel / Netlify / Replit: Provide environment variables via the platform’s secrets/settings panel. Ensure the build command and start command match this project’s scripts.

Security & Privacy
------------------
- Keep API tokens secure. Use environment variables or secret management in your deployment platform.
- Limit token permissions to only what is necessary (read-only where possible).
- If storing any Cloudflare data locally, ensure it is not exposing sensitive DNS records or customer data.
- Use HTTPS in production.

Troubleshooting & FAQ
---------------------
Q: I see no data in the dashboard.
- Verify `CF_API_TOKEN` and `CF_ACCOUNT_ID` are set and correct.
- Check token permissions in the Cloudflare dashboard — ensure analytics and zone read permissions.
- Inspect server logs for API errors or rate-limiting.

Q: Analytics are out of date or incomplete
- Cloudflare analytics may be delayed depending on the plan. Consider caching results and showing the fetch timestamp in the UI.

Contributing
------------
Contributions are welcome! Please follow these steps:
1. Fork the repository
2. Create a branch: `git checkout -b feat/my-feature`
3. Commit your changes: `git commit -m "Add feature"`
4. Push to the branch: `git push origin feat/my-feature`
5. Open a Pull Request

Guidelines:
- Add tests for new features where applicable
- Keep the UI and CSS modular and accessible
- Document any configuration changes in this README

Issues
------
If you find bugs or have feature requests, open an issue on GitHub:
https://github.com/Dennesssy/CloudflareDash/issues

License
-------
Specify your license here (e.g., MIT). If you have not chosen one, consider MIT for open source friendliness.

Acknowledgements
----------------
- Inspired by the Cloudflare dashboard UI and metrics
- Made with Replit (as shown in the screenshot footer)
- Cloudflare API documentation: https://api.cloudflare.com

Notes & Next steps
------------------
- Replace placeholder instructions with exact commands, scripts, and environment variable names used by this repository.
- Commit the provided screenshot image to `assets/overview.png` to render the screenshot in this README.
- If you want, I can generate:
  - A LICENSE file
  - A CONTRIBUTING.md template
  - Example .env.example
  - Dockerfile and docker-compose.yml
  Tell me which of these you'd like next and I will add them.
