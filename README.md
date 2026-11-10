# Franklin — Birthday Celebration

A premium personal birthday website celebrating growth, gratitude, ambition, and the next chapter. Built with HTML5, CSS3, and Vanilla JavaScript.

## Live Demo

[View Live Site](https://franklin-birthday.vercel.app/)

## Project Structure

```
/
├── index.html          # Main HTML file
├── styles.css          # All styles and responsive design
├── script.js           # JavaScript functionality and configuration
├── 404.html            # Custom 404 page
├── README.md           # This file
└── assets/
    ├── images/         # Image assets (photos, previews)
    └── icons/          # Icon assets
```

## Local Preview

### Option 1: Using Python
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Then open [http://localhost:8000](http://localhost:8000) in your browser.

### Option 2: Using Node.js (http-server)
```bash
npx http-server -p 8000
```

### Option 3: Using VS Code Live Server
1. Install the "Live Server" extension in VS Code
2. Right-click `index.html` and select "Open with Live Server"

## Replacing Image Placeholders

### Required Images

Add the following images to `assets/images/`:

| File | Purpose | Dimensions | Notes |
|------|---------|------------|-------|
| `hero-portrait.webp` | Hero section portrait | 600 × 750 px (4:5) | Franklin in black suit |
| `gallery-1.webp` | Gallery - Signature black-suit portrait | 400 × 500 px (4:5) | |
| `gallery-2.webp` | Gallery - Full-body fashion portrait | 400 × 500 px (4:5) | |
| `gallery-3.webp` | Gallery - Developer/workspace portrait | 400 × 500 px (4:5) | |
| `gallery-4.webp` | Gallery - Natural smiling portrait | 400 × 500 px (4:5) | |
| `gallery-5.webp` | Gallery - Lifestyle portrait | 400 × 500 px (4:5) | |
| `gallery-6.webp` | Gallery - Birthday celebration portrait | 400 × 500 px (4:5) | |
| `social-preview-1200x630.png` | Social sharing preview | 1200 × 630 px (16:9) | For Open Graph/Twitter |

### Image Guidelines

- Use WebP format for photos when possible (better compression)
- For social preview, PNG or JPG is fine
- Maintain natural facial proportions
- Use careful cropping
- Add meaningful alt text (already set in HTML)
- Optimize images for web (compress before adding)
- Never use placeholders that look like real photos

## Configuration

### Setting the Birthday Date

1. Open `script.js`
2. Find the `BIRTHDAY_DATE` configuration (around line 15)
3. Set your birthday date. Use local timezone.

```javascript
// Examples:
const BIRTHDAY_DATE = '1995-12-25'; // December 25, midnight local time
const BIRTHDAY_DATE = '1995-12-25T15:30:00'; // December 25 at 3:30 PM local time
```

- If `null` or invalid, shows "A special day is coming"
- The countdown handles the birthday arriving and passing gracefully
- Date is interpreted in the user's local timezone

### Setting Social Profile URLs

1. Open `script.js`
2. Find the `SOCIAL_URLS` configuration (around line 26)
3. Add your profile URLs

```javascript
const SOCIAL_URLS = {
    instagram: 'https://instagram.com/yourusername',
    facebook: 'https://facebook.com/yourusername',
    tiktok: 'https://tiktok.com/@yourusername',
    linkedin: 'https://linkedin.com/in/yourusername'
};
```

- Leave as `'#'` to hide that social link
- Only add real profile URLs you own
- Contact/email: Only add if you have a real address (currently not implemented as requested)

## GitHub Setup and Push Commands

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Franklin — Birthday Edition website"

# Add remote (replace with your repo URL)
git remote add origin https://github.com/yourusername/franklin-birthday.git

# Push to main branch
git branch -M main
git push -u origin main
```

## Vercel Deployment Instructions

### Option 1: Vercel CLI
```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy
vercel
```

Follow the prompts. For a static site, no build configuration needed.

### Option 2: Vercel Dashboard
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will auto-detect it's a static site
5. Click "Deploy"

The site will be live at `your-project-name.vercel.app`

## Custom Domain Configuration

### In Vercel
1. Go to your project → Settings → Domains
2. Add your custom domain (e.g., `franklin.com`)
3. Follow Vercel's DNS instructions

### DNS Configuration
Add the following records with your DNS provider:

**For apex domain (example.com):**
- Type: A, Name: @, Value: 76.76.21.21

**For www subdomain:**
- Type: CNAME, Name: www, Value: cname.vercel-dns.com

Vercel will automatically provision SSL certificates.

## Testing Checklist

### Mobile Testing
- [ ] 320px width - No horizontal overflow, readable text
- [ ] 360px width - Navigation works, buttons don't overflow
- [ ] 390px width - Hero layout stacks properly
- [ ] 430px width - Gallery displays correctly
- [ ] Mobile navigation - Opens/closes, keyboard accessible
- [ ] Touch targets are adequate size

### Tablet Testing
- [ ] Tablet portrait - Layout adapts well
- [ ] Tablet landscape - Hero and sections look good

### Desktop Testing
- [ ] 1280px+ width - Layout uses space well
- [ ] Hero section - Portrait and text balanced
- [ ] All sections display correctly
- [ ] No horizontal scroll

### Navigation
- [ ] All nav links work (Home, My Journey, Gallery, Birthday Message, Connect)
- [ ] Smooth scrolling works
- [ ] Mobile menu opens and closes
- [ ] Keyboard accessible (Tab, Enter, Escape)
- [ ] Focus indicators visible

### Countdown
- [ ] Shows countdown when date is set
- [ ] Shows "A special day is coming" when no date set
- [ ] Shows "Happy Birthday!" when date has passed
- [ ] Handles invalid date gracefully
- [ ] Updates every second
- [ ] Uses local timezone

### Gallery
- [ ] All 6 images display (or placeholders if missing)
- [ ] Click opens lightbox
- [ ] Lightbox closes with X button
- [ ] Lightbox closes with Escape key
- [ ] Lightbox closes by clicking overlay
- [ ] Background scroll locked when lightbox open
- [ ] Keyboard navigation in lightbox
- [ ] Images have alt text

### Sharing
- [ ] WhatsApp share works (or opens WhatsApp)
- [ ] Copy link button works
- [ ] Shows "Copied!" feedback
- [ ] Social links work (if URLs set)
- [ ] Hidden if URLs are '#'

### Accessibility
- [ ] Semantic HTML used
- [ ] Proper heading hierarchy (h1, h2, h3)
- [ ] Keyboard accessible throughout
- [ ] Visible focus indicators
- [ ] Sufficient color contrast
- [ ] Respects prefers-reduced-motion
- [ ] Alt text on all images
- [ ] ARIA labels where needed

### Performance
- [ ] Images lazy-loaded (below fold)
- [ ] Hero image eager-loaded
- [ ] No layout shifts
- [ ] No heavy libraries
- [ ] Fast load time
- [ ] CSS and JS are minimal

### Social Previews
- [ ] Open Graph tags present
- [ ] Twitter Card tags present
- [ ] Social preview image exists
- [ ] Canonical URL set

## Features

- **Luxury Design**: Black and gold color scheme with elegant typography
- **Responsive**: Mobile-first design, works on all screen sizes
- **Countdown Timer**: Configurable birthday countdown with graceful states
- **Photo Gallery**: Elegant grid with accessible lightbox
- **Social Sharing**: WhatsApp share, copy link, Web Share API support
- **Smooth Animations**: Subtle transitions, respects reduced motion
- **Accessible**: Semantic HTML, keyboard navigation, ARIA labels
- **SEO Ready**: Meta tags, Open Graph, Twitter Cards
- **404 Page**: Custom error page

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Notes

- This is a static site - no backend required
- All content is editable in HTML/CSS/JS
- No personal achievements, age, or biographical details are fabricated
- Placeholder images show instructions to replace with real photos
- Social links are hidden by default until configured
- Birthday date must be set in JavaScript

## License

This project is created for personal use.
# birthday
