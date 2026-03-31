<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/f389ff31-80c2-4621-96c7-588fe22aa541

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deploy to Vercel

This project is ready to be deployed to [Vercel](https://vercel.com).

1. **Push to GitHub:** Push your code to a GitHub repository.
2. **Import to Vercel:** Go to the Vercel dashboard and import your repository.
3. **Configure Environment Variables:** In the Vercel project settings, add the following environment variable:
   - `GEMINI_API_KEY`: Your Google Gemini API key.
4. **Deploy:** Click "Deploy". Vercel will automatically detect the Vite configuration and build your app.

**Note:** The `vercel.json` file is included to handle client-side routing for Single Page Applications (SPA).
