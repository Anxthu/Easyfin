# Easyfin Group Website Source Code

Welcome to the private repository for the **Easyfin Group** website. This codebase contains the main corporate website as well as the bespoke environments for Easyfarm Agro, Easyfin Finance, and Easyfin Strategic.

This guide will walk you through exactly how to download the code, run it on your own computer, and deploy it live to the internet using Vercel.

---

## 📥 Step 1: How to Download this Repository

Since this is a private repository, you need to download the files to your computer.

**Option A: Download as a ZIP file (Easiest)**
1. On the main page of this repository, look for the green **"<> Code"** button near the top right.
2. Click it and select **"Download ZIP"**.
3. Once downloaded, extract (unzip) the folder to a location on your computer (like your Documents or Desktop).

**Option B: Clone via Git (For Developers)**
If you use Git and the command line, open your terminal and run:
```bash
git clone https://github.com/Anxthu/Easyfin.git
```

---

## 💻 Step 2: How to Run it Locally

To preview and edit the website on your own computer, you need to run the local development server.

**1. Install Node.js**
You must have Node.js installed on your computer. If you don't have it, go to [nodejs.org](https://nodejs.org/) and download the "LTS" (Long Term Support) version and install it.

**2. Open the Project Folder**
Open your terminal (Command Prompt or PowerShell on Windows, Terminal on Mac) and navigate to the folder where you extracted the project.
```bash
cd path/to/easyfin-group
```

**3. Install Dependencies**
Run the following command to download all the necessary packages required to run the site:
```bash
npm install
```

**4. Start the Server**
Run the following command to start the website:
```bash
npm run dev
```
The terminal will give you a local link (usually `http://localhost:5173`). Ctrl+Click (or Cmd+Click) that link to view the website in your browser!

---

## 🚀 Step 3: How to Host it on Vercel (Live Deployment)

Vercel is the absolute best place to host this specific type of website (React/Vite). It is extremely fast, highly secure, and automatically handles updates.

**Important Note:** The repository already contains a `vercel.json` file. This is fully pre-configured to ensure all internal links (like `/finance` or `/agro/internship`) work perfectly. **You do not need to configure any routing settings yourself.**

**Deployment Steps:**
1. Go to [vercel.com](https://vercel.com/) and sign up for a free account (using your GitHub account makes this easiest).
2. Once logged in to the Vercel dashboard, click **"Add New..."** and select **"Project"**.
3. In the "Import Git Repository" section, connect your GitHub account.
4. You will see the **Easyfin** repository in the list. Click **"Import"** next to it.
5. Vercel will ask you to configure the project. **Leave all settings exactly as they are** (Vercel automatically detects it's a Vite project).
6. Click the big **"Deploy"** button.

Vercel will now build the website. In about 60 seconds, you will be given a live URL where your site is publicly accessible!

### Updating the Live Site
Whenever you push new changes to the `main` branch of this GitHub repository, Vercel will automatically detect them, rebuild the site, and update the live URL within seconds. You never have to click "Deploy" again.
