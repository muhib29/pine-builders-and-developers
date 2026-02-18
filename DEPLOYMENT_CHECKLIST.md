# Pre-Deployment Audit & Checklist

## ✅ Completed Improvements

### Performance
- [x] Hero images: responsive srcset (AVIF/WebP) via `HeroImage` component
- [x] Hero lazy loading: only current + adjacent slides load (2-3 images vs 5)
- [x] Preload LCP image (hero-7.webp)
- [x] Font preconnect (Google Fonts)
- [x] Image cache headers (1 year immutable for /images/*)
- [x] Compress enabled, package imports optimized
- [x] Responsive images script fixed (skips variant files, no nested naming)

### SEO (Google ranking for "Pine Builders" etc.)
- [x] **Brand keywords**: Pine Builders and Developers, Pine Builders & Developers, Pine Developers, Builders and Developers, Karachi
- [x] **JSON-LD Organization + LocalBusiness** with alternateNames for all search variations
- [x] **WebSite schema** for sitelinks
- [x] **H1 on homepage**: "Pine Builders and Developers" (first hero slide)
- [x] **Canonical URLs** on all pages
- [x] **Sitemap.xml** (all pages, projects, blog)
- [x] **Robots.txt** (allow /, disallow /studio/, sitemap URL)
- [x] **metadataBase** for correct Open Graph/Twitter absolute URLs
- [x] **Unified branding** across site (footer, data, contact, blog, services)

### Security & Headers
- [x] X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy

---

## Before You Deploy

1. **Set production URL** in your host (Vercel/etc.):
   ```
   NEXT_PUBLIC_SITE_URL=https://pinebuildersdeveloper.com
   ```

2. **HTTPS**: Ensure the site is served over HTTPS (Vercel does this by default).

3. **Google Search Console** (after deploy):
   - Add property: https://pinebuildersdeveloper.com
   - Submit sitemap: https://pinebuildersdeveloper.com/sitemap.xml

4. **Google Business Profile** (for local search):
   - Create/claim listing for "Pine Builders and Developers"
   - Address: LSA-1 to LSA-12, Gulshan-e-Iqbal, Karachi
   - Link to website

5. **Run responsive images** (optional, for smaller hero files):
   ```bash
   npm run images:responsive
   ```

---

## Post-Deploy: Rank for Brand Searches

To appear at the top for "Pine Builders and Developers", "Pine Builders", etc.:

- **Content**: Keep adding project updates, blog posts, and location-based content
- **Backlinks**: Get listed on construction directories, local business sites
- **Consistency**: Ensure same NAP (name, address, phone) everywhere
- **Speed**: Site is optimized; monitor with Lighthouse after deploy
