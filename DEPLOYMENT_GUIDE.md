# 🚀 Deployment Guide for Vercel

This guide will help you deploy your College ERP application to Vercel.

## Prerequisites

1. A [Vercel account](https://vercel.com/signup)
2. [Vercel CLI](https://vercel.com/docs/cli) installed (optional, but recommended)
   ```bash
   npm i -g vercel
   ```

## Deployment Steps

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub/GitLab/Bitbucket**.
2. Log in to your Vercel Dashboard.
3. Click **"Add New..."** -> **"Project"**.
4. Import your repository.
5. Vercel will automatically detect the **Vite** framework.
6. **Build Settings** (should be auto-detected):
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
7. Click **"Deploy"**.

### Option 2: Deploy via CLI

1. Open your terminal in the project root.
2. Run the deploy command:
   ```bash
   vercel
   ```
3. Follow the prompts:
   - Set up and deploy? **Yes**
   - Which scope? **(Select your account)**
   - Link to existing project? **No**
   - Project name? **college-erp-frontend**
   - In which directory? **./**
   - Want to modify settings? **No** (The `vercel.json` file handles this)

## Configuration Details

We have included a `vercel.json` file to ensure everything runs smoothly:

- **SPA Routing:** Rewrites all requests to `index.html` so React Router works correctly.
- **Caching:** Sets optimal cache headers for static assets.

## Post-Deployment Checks

1. **Verify Routing:** Click around the app (Dashboard, Students, etc.) and refresh the page. It should not 404.
2. **Check Responsiveness:** Open the deployed link on your phone to verify the mobile layout.
3. **Performance:** Vercel automatically optimizes assets.

## Troubleshooting

- **404 on Refresh:** If you see 404 errors when refreshing pages, ensure the `rewrites` rule in `vercel.json` is working.
- **Build Errors:** Check the "Logs" tab in Vercel. Common issues include missing dependencies or linting errors.

---

**Ready to launch!** 🚀
