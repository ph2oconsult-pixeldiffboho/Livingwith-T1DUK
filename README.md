# Living Brilliantly with T1D — UK edition

> This is the **UK edition** of the app, forked from the Australian version. What changed:
> emergency numbers (999 / NHS 111), UK helplines (Diabetes UK, Samaritans, Childline, Shout), NHS/NICE access
> information (CGM, hybrid closed loop), England school guidance (Individual Healthcare Plans), UK ketone
> thresholds and age-banded hypo treatment, football not soccer, and UK food labels and spelling.
> **Before launch:** see `UK-REVIEW-NOTES.md` — several items need sign-off from a UK paediatric diabetes clinician.
> Replace `REPLACE-WITH-UK-DOMAIN` in `public/sitemap.xml` and `public/robots.txt` once you have a domain.
> The First 90 Days PDF is generated: `node tools/extract_learningpath.cjs tools/learningpath.json && python3 tools/build_90day_pdf.py`.


A learning companion for families navigating life with Type 1 Diabetes.

## Setup

### 1. Install dependencies
```bash
npm install
```

### 2. Add your Anthropic API key

Create a `.env` file in the project root:
```
VITE_ANTHROPIC_API_KEY=sk-ant-your-key-here
```

**For Vercel deployment:**
- Go to your Vercel project → Settings → Environment Variables
- Add: `VITE_ANTHROPIC_API_KEY` = your Anthropic API key
- Redeploy

### 3. Run locally
```bash
npm run dev
```

## Getting an API key

1. Go to [console.anthropic.com](https://console.anthropic.com)
2. Create an account or sign in
3. Go to API Keys → Create Key
4. Copy the key into your `.env` file

## Notes

- The AI explanation feature calls the Anthropic API directly from the browser
- The API key is exposed client-side — for production, consider proxying through a serverless function
- No user data or CGM screenshots are stored beyond the browser session
