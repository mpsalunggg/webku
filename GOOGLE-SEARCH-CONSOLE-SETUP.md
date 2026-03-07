# Google Search Console Setup Guide

## Step 1: Create Account & Add Property

1. Go to: https://search.google.com/search-console
2. Click "Add Property"
3. Choose "URL prefix" method
4. Enter: `https://putrasatria.site`

## Step 2: Verify Ownership

Choose **HTML tag method**:

1. Google will give you a meta tag like:
   ```html
   <meta name="google-site-verification" content="ABC123XYZ..." />
   ```

2. Copy the `content` value (e.g., `ABC123XYZ...`)

3. Open `src/routes/__root.tsx` and find this section:
   ```typescript
   // Uncomment and add your verification codes when ready
   // {
   //   name: 'google-site-verification',
   //   content: 'YOUR_GOOGLE_VERIFICATION_CODE',
   // },
   ```

4. Uncomment and replace with your code:
   ```typescript
   {
     name: 'google-site-verification',
     content: 'ABC123XYZ...',
   },
   ```

5. Deploy your site

6. Go back to Google Search Console and click "Verify"

## Step 3: Submit Sitemap

1. In Google Search Console, go to "Sitemaps" (left sidebar)
2. Enter: `sitemap.xml`
3. Click "Submit"

Google will start crawling your site!

## Step 4: Monitor (After 2-7 days)

Check these in Google Search Console:
- **Performance**: See which keywords bring traffic
- **Coverage**: Check if all pages are indexed
- **Enhancements**: Check for structured data issues
- **Mobile Usability**: Ensure mobile-friendly

## Troubleshooting

### "Site not verified"
- Make sure verification code is in production
- Wait 5-10 minutes after deployment
- Clear browser cache

### "Sitemap not found"
- Check: https://putrasatria.site/sitemap.xml
- Make sure file exists in `public/` folder
- Verify it's deployed

### "No pages indexed"
- Be patient! Can take 1-7 days
- Use "Request Indexing" for important pages
- Check robots.txt isn't blocking Google

## Quick Links

- Search Console: https://search.google.com/search-console
- Rich Results Test: https://search.google.com/test/rich-results
- Mobile-Friendly Test: https://search.google.com/test/mobile-friendly

---

Good luck! 🚀
