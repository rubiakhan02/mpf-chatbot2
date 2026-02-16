# Quick Deployment Checklist

## ✅ What Was Fixed
The chatbot was showing "Error connecting to server" on live deployment because:
- API calls used relative URLs (`/api/chat`) instead of absolute URLs
- No environment configuration for production vs development

## 🔧 Changes Made
1. ✅ Added environment variable support (`NEXT_PUBLIC_API_URL`)
2. ✅ Updated `Chatbot.jsx` to use dynamic API URLs
3. ✅ Created `next.config.js` with CORS headers
4. ✅ Created `.env.local` for local development
5. ✅ Created `.env.production` template

## 🚀 Deploy to Vercel (Recommended)

### Step 1: Set Environment Variable
In Vercel Dashboard → Your Project → Settings → Environment Variables:
- **Key:** `NEXT_PUBLIC_API_URL`
- **Value:** `https://your-project-name.vercel.app` (replace with your actual Vercel URL)
- **Environments:** Check all (Production, Preview, Development)

### Step 2: Deploy
```bash
git add .
git commit -m "Fix chatbot API URLs for production"
git push
```

Vercel will auto-deploy!

## 🧪 Test After Deployment

1. Open your live site
2. Open chatbot
3. Try selecting a property type
4. Check browser console (F12) for any errors

## 🆘 Still Not Working?

### Check 1: Verify Environment Variable
```bash
# In Vercel dashboard, check that NEXT_PUBLIC_API_URL is set correctly
# Should be: https://your-actual-domain.vercel.app
# NO trailing slash!
```

### Check 2: Check Browser Console
- Press F12
- Go to Console tab
- Look for the actual URL being called
- Should be: `https://your-domain.vercel.app/api/chat`

### Check 3: Alternative Fix (No Env Variables)
If your platform doesn't support env variables, edit `Chatbot.jsx` line 6:

```javascript
// Change from:
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '';

// To:
const API_BASE_URL = typeof window !== 'undefined' ? window.location.origin : '';
```

This auto-detects the current domain!

## 📝 Important URLs to Replace

Before deploying, update `.env.production`:
```
NEXT_PUBLIC_API_URL=https://YOUR-ACTUAL-DOMAIN.vercel.app
```

## ✨ That's It!

Your chatbot should now work on both:
- ✅ Localhost (http://localhost:3000)
- ✅ Production (https://your-domain.vercel.app)
