# Deployment Guide for MyPropertyFact Chatbot

## Problem Solved
The chatbot was failing on the live server with "Error connecting to server" because it was using relative API URLs that don't work properly in production environments.

## Changes Made

### 1. Environment Variables
Created `.env.local` and `.env.production` files to handle API URLs dynamically.

### 2. Updated Chatbot Component
Modified `components/Chatbot/Chatbot.jsx` to use environment variables for API calls.

### 3. Next.js Configuration
Added `next.config.js` with proper CORS headers for API routes.

---

## Deployment Instructions

### For Vercel Deployment:

1. **Update Environment Variable in Vercel Dashboard:**
   - Go to your Vercel project settings
   - Navigate to "Environment Variables"
   - Add: `NEXT_PUBLIC_API_URL` = `https://your-actual-domain.vercel.app`
   - Make sure to add it for "Production", "Preview", and "Development" environments

2. **Deploy:**
   ```bash
   git add .
   git commit -m "Fix API URL for production deployment"
   git push
   ```

3. **Vercel will automatically redeploy**

### For Other Hosting Platforms (Netlify, Railway, etc.):

1. **Set Environment Variable:**
   - In your hosting platform's dashboard
   - Add: `NEXT_PUBLIC_API_URL` = `https://your-actual-domain.com`

2. **Build and Deploy:**
   ```bash
   npm run build
   npm start
   ```

---

## Testing Locally

The chatbot should still work on localhost. To test:

```bash
npm run dev
```

Open http://localhost:3000 and test the chatbot.

---

## Important Notes

### Environment Variables:
- **Local Development:** Uses `.env.local` → `http://localhost:3000`
- **Production:** Uses platform environment variables → `https://your-domain.com`

### What Changed:
- ✅ API calls now use `${API_BASE_URL}/api/chat` instead of `/api/chat`
- ✅ API calls now use `${API_BASE_URL}/api/enquiry` instead of `/api/enquiry`
- ✅ CORS headers properly configured in `next.config.js`
- ✅ Environment-aware API URL handling

### Troubleshooting:

If the chatbot still doesn't work on production:

1. **Check Browser Console:**
   - Open Developer Tools (F12)
   - Look for network errors
   - Verify the API URL being called

2. **Verify Environment Variable:**
   - Make sure `NEXT_PUBLIC_API_URL` is set correctly in your hosting platform
   - The URL should NOT have a trailing slash
   - Example: `https://myapp.vercel.app` (correct)
   - Example: `https://myapp.vercel.app/` (incorrect)

3. **Check API Routes:**
   - Verify `/api/chat` endpoint is accessible
   - Test: `https://your-domain.com/api/chat` (should return an error but not 404)

4. **Database Connection:**
   - Ensure MySQL connection details are correct in production
   - The app will work even if MySQL fails (it logs the error and continues)

---

## Alternative Solution (If Environment Variables Don't Work)

If your hosting platform doesn't support environment variables properly, you can use this approach:

Edit `components/Chatbot/Chatbot.jsx` and replace line 6:

```javascript
// Instead of:
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '';

// Use:
const API_BASE_URL = typeof window !== 'undefined' ? window.location.origin : '';
```

This will automatically use the current domain as the API base URL.

---

## Files Modified:
1. ✅ `components/Chatbot/Chatbot.jsx` - Updated API calls
2. ✅ `.env.local` - Local development config
3. ✅ `.env.production` - Production template
4. ✅ `next.config.js` - Next.js configuration with CORS

## Files to Update Before Deployment:
1. `.env.production` - Replace `https://your-domain.vercel.app` with your actual domain
2. Or set `NEXT_PUBLIC_API_URL` in your hosting platform's environment variables
