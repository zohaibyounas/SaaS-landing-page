# Quick Setup Guide

## 🔧 Essential Customization

### 1. Update Company Branding

**In `index.html`, find and replace:**

- **Company Name**: Replace all instances of "TaskFlow" with your company name
- **Meta Title**: Change `<title>TaskFlow - Intelligent Task Management...</title>`
- **Meta Description**: Update the description meta tag
- **Logo**: Replace the "T" logo in nav and footer with your branding

### 2. Configure Analytics

#### Google Analytics 4

```html
Find this line in the script section: gtag('config', 'GA_MEASUREMENT_ID');
Replace GA_MEASUREMENT_ID with your actual GA4 ID: gtag('config',
'G-XXXXXXXXXX');
```

#### Mixpanel

```html
Uncomment this block and add your token: (function(f,b){if(!b.__SV){var
e,g,i,h;window.mixpanel=b;b._i=[];b.init=function(e,d,a)... Then uncomment:
mixpanel.init("YOUR_MIXPANEL_TOKEN");
```

#### Hotjar

```html
Uncomment this block and add your site ID:
(function(h,o,t,j,a,r){h.hj=h.hj||function(){... Replace 123456 with your Hotjar
site ID
```

#### Google Tag Manager

```html
Uncomment this block and add your container ID:
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start'... Replace 'GTM_ID'
with your GTM container ID
```

### 3. Update Links and URLs

- **CTA Buttons**: Update `onclick` handlers if not using default tracking
- **Navigation Links**: Ensure anchor links work with your actual pages
- **Footer Links**: Update URLs to your actual pages
- **Social Media**: Update footer social links
- **Logo Link**: Update home page link if needed

### 4. Customize Content

#### Hero Section

- Headline: "Manage tasks with intelligence"
- Subheadline: Update value proposition
- Trust badge: "Trusted by 5,000+ teams worldwide"
- CTA buttons: Update text as needed

#### Features Section

- Update 6 feature titles and descriptions
- Modify icon colors if desired

#### Pricing Section

- Adjust prices: $29 (Starter), $79 (Professional), Custom (Enterprise)
- Update feature lists per tier
- Adjust yearly discount percentage

#### Testimonials

- Replace with real customer quotes
- Update customer names and titles

#### FAQ Section

- Update all questions and answers
- Add/remove FAQ items as needed

### 5. Deploy Instructions

#### Local Testing

1. Open `index.html` in your browser
2. Test all interactive features
3. Check mobile responsiveness (use DevTools)
4. Verify all links work

#### Deployment Options

**Option A: Vercel (Recommended)**

```bash
1. Install Vercel CLI: npm i -g vercel
2. Run: vercel
3. Follow prompts to deploy
```

**Option B: Netlify**

```bash
1. Go to netlify.com
2. Drag and drop the index.html file
3. Site deployed instantly
```

**Option C: GitHub Pages**

```bash
1. Create GitHub repo
2. Add index.html and README.md
3. Go to Settings > Pages
4. Select main branch, save
5. Site deployed at username.github.io/repo-name
```

**Option D: Any Web Server**

```bash
1. Upload index.html to your server
2. Ensure proper MIME types configured
3. Access via your domain
```

### 6. SEO Optimization Checklist

- [ ] Update meta title and description
- [ ] Add company logo URL for og:image
- [ ] Update canonical URL
- [ ] Ensure all links are properly formatted
- [ ] Add internal linking strategy
- [ ] Submit sitemap to Google Search Console
- [ ] Configure Google Analytics
- [ ] Set up Google Tag Manager
- [ ] Monitor Core Web Vitals

### 7. Email Integration

To make the newsletter signup functional:

**Option A: Email Service (Recommended)**

```javascript
Use Mailchimp, ConvertKit, or SendGrid API
Update handleNewsletterSignup() function with API endpoint
```

**Option B: Backend Integration**

```javascript
Send form data to your backend endpoint:
fetch('/api/newsletter', {
  method: 'POST',
  body: JSON.stringify({ email: email })
})
```

**Option C: Zapier**

```javascript
Use Zapier webhook to connect any email service
Update fetch URL to your Zapier webhook
```

### 8. Contact Forms

To add actual contact forms:

1. Update form action attributes
2. Add backend endpoint for form submission
3. Implement server-side validation
4. Add CSRF protection
5. Configure email notifications

## 📊 Analytics Event Reference

Events automatically tracked:

| Event               | Trigger               | Value                                   |
| ------------------- | --------------------- | --------------------------------------- |
| `cta_click`         | CTA button click      | "hero_primary", "hero_secondary"        |
| `pricing_click`     | Plan selection        | "starter", "professional", "enterprise" |
| `pricing_toggle`    | Monthly/Yearly switch | "monthly", "yearly"                     |
| `faq_toggle`        | FAQ expansion         | Question text                           |
| `newsletter_signup` | Email signup          | Email address                           |
| `page_load`         | Page loads            | Current path                            |
| `exit_intent`       | Mouse leaves top      | (no value)                              |

## 🎨 Color Customization

To change the color scheme from indigo/purple:

1. Find `gradient-bg` class in styles
2. Update `background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);`
3. Update `gradient-text` class with new gradient
4. Update button hover colors (indigo-600, indigo-700, etc.)
5. Update Tailwind class names throughout HTML

**Color Mapping:**

- Primary: Indigo (#6366f1)
- Secondary: Purple (#8b5cf6)
- Success: Green (#10b981)
- Warning: Orange (#f59e0b)
- Error: Red (#ef4444)

## ⚡ Performance Tips

1. **Image Optimization**
   - Use WebP format for images
   - Compress all images
   - Use lazy loading for off-screen images

2. **Font Optimization**
   - Currently using Google Fonts (Poppins, Inter)
   - Consider system fonts for faster loading

3. **Cache Strategy**
   - Set cache headers on static assets
   - Use CDN for global distribution

4. **Minification**
   - Minify HTML, CSS, and JS in production
   - Use build tools like Terser or cssnano

5. **Core Web Vitals**
   - Monitor Largest Contentful Paint (LCP)
   - Check Cumulative Layout Shift (CLS)
   - Optimize First Input Delay (FID)

## 🐛 Troubleshooting

**Issue: Tailwind styles not loading**

- Check CDN is accessible
- Refresh browser cache (Ctrl+Shift+Delete)
- Check browser console for errors

**Issue: Analytics not tracking**

- Verify analytics ID is correct
- Check browser console for errors
- Ensure Analytics script is loaded
- Check tracker blockers in browser

**Issue: Mobile menu not working**

- Check JavaScript console for errors
- Verify hamburger button is in viewport
- Test on actual mobile device

**Issue: Animations not smooth**

- Check browser hardware acceleration
- Reduce animation complexity
- Test on different browsers

## 📱 Testing Checklist

- [ ] Test on mobile (iPhone, Android)
- [ ] Test on tablet (iPad)
- [ ] Test on desktop (Chrome, Firefox, Safari, Edge)
- [ ] Test all interactive features
- [ ] Verify all links work
- [ ] Check form validation
- [ ] Test animations are smooth
- [ ] Verify images load
- [ ] Check responsive breakpoints
- [ ] Test keyboard navigation
- [ ] Verify accessibility with screen reader

## 🚀 Going Live

1. **Final QA**
   - Test all functionality
   - Check on multiple devices
   - Verify analytics tracking
   - Test email signup

2. **SEO Preparation**
   - Add canonical URL
   - Generate sitemap.xml
   - Create robots.txt
   - Submit to Google Search Console

3. **Security**
   - Enable HTTPS/SSL
   - Set security headers
   - Configure CSP
   - Add privacy policy

4. **Monitoring**
   - Set up uptime monitoring
   - Configure alerts
   - Monitor analytics daily
   - Track user behavior

---

**Need Help?**

- Check the README.md for detailed information
- Review inline comments in index.html
- Check browser DevTools console for errors
