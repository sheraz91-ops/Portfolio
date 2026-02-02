# Sheeraz - Developer Portfolio

A modern, responsive portfolio website showcasing projects, experience, and skills.

## 🚀 Quick Start

1. **Clone or download this repository**
2. **Add your project images** to `assets/images/projects/`
3. **Open `index.html`** in a browser to preview
4. **Deploy to GitHub Pages** (instructions below)

## 📁 Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── css/
│   └── styles.css     # All styles and design
├── js/
│   └── script.js      # Interactive features
├── assets/
│   └── images/
│       └── projects/  # Project screenshots go here
├── README.md          # This file
└── .gitignore         # Git ignore rules
```

## 🎨 Customization Guide

### **1. Update Personal Information**

#### Contact Details (in `index.html`)
Search for these sections and update:

```html
<!-- Email -->
<a href="mailto:2024-uam-2006@mnsuam.edu.pk">

<!-- Phone -->
<a href="tel:+923164533887">

<!-- LinkedIn -->
<a href="https://www.linkedin.com/in/muhammed-sheeraz-3a10353a5">

<!-- GitHub -->
<a href="https://github.com/sheraz91-ops">
```

#### Hero Section Text
Find the `<section class="hero">` and update:
- **Name**: `<h1 class="hero-title">`
- **Tagline**: `<p class="hero-tagline">`
- **Description**: `<p class="hero-description">`
- **Badge**: `<div class="hero-badge">`

### **2. Add/Edit Projects**

#### Add a New Project
Duplicate this block in the `<div class="projects-grid">` section:

```html
<article class="project-card">
    <div class="project-image">
        <img src="assets/images/projects/YOUR-IMAGE.png" alt="Project description" loading="lazy">
        <div class="project-overlay">
            <span class="project-status">Live</span>
        </div>
    </div>
    <div class="project-content">
        <h3 class="project-title">Project Name</h3>
        <p class="project-subtitle">Brief tagline</p>
        <p class="project-description">
            Full project description goes here.
        </p>
        <div class="project-tech">
            <span class="tech-tag">HTML</span>
            <span class="tech-tag">CSS</span>
        </div>
        <div class="project-links">
            <a href="https://example.com" target="_blank" class="project-link">
                Live Site
            </a>
        </div>
    </div>
</article>
```

#### Add Project Images
1. Save your screenshot as: `agriverse.png`, `pc-health.png`, etc.
2. Place in: `assets/images/projects/`
3. Update the `src` attribute in HTML

**Recommended image size**: 1200x675px (16:9 ratio)

### **3. Update Experience**

Find `<section id="experience">` and edit the experience items:

```html
<div class="experience-item">
    <div class="experience-meta">
        <span class="experience-period">2024 - Present</span>
    </div>
    <div class="experience-content">
        <h3 class="experience-title">Your Job Title</h3>
        <p class="experience-organization">Company Name</p>
        <p class="experience-description">What you did...</p>
        <div class="experience-skills">
            <span>Skill 1</span>
            <span>Skill 2</span>
        </div>
    </div>
</div>
```

### **4. Update Skills**

Find `<section id="skills">` and edit skill categories:

```html
<div class="skill-category">
    <h3 class="skill-category-title">Category Name</h3>
    <div class="skill-tags">
        <span class="skill-tag">Skill 1</span>
        <span class="skill-tag">Skill 2</span>
    </div>
</div>
```

### **5. Change Colors**

Open `css/styles.css` and edit the `:root` variables at the top:

```css
:root {
    --color-primary: #1e3a8a;        /* Main brand color */
    --color-accent: #10b981;         /* Accent color */
    --color-text-primary: #1f2937;   /* Main text color */
    /* ... more variables */
}
```

**Popular color schemes:**
- **Blue/Green** (current): `#1e3a8a` / `#10b981`
- **Purple/Pink**: `#7c3aed` / `#ec4899`
- **Dark/Orange**: `#111827` / `#f59e0b`

### **6. Update Education & Recognition**

Find `<section class="achievements-section">`:

- **Education items**: Edit degrees, institutions, dates
- **Recognition sidebar**: Update scholarships, awards, certifications

## 🖼️ Adding Images

### Required Images

Create these files in `assets/images/projects/`:

1. **agriverse.png** - AgriVerse platform screenshot
2. **pc-health.png** - PC Health Boost Master screenshot
3. **pro-monitor.png** - Pro System Monitor screenshot

### Image Guidelines

- **Format**: PNG or JPG
- **Size**: 1200x675px (16:9 ratio) recommended
- **File size**: Keep under 500KB for fast loading
- **Naming**: Use lowercase, hyphens (e.g., `my-project.png`)

### Optimize Images

Use these free tools to compress images:
- [TinyPNG](https://tinypng.com/)
- [Squoosh](https://squoosh.app/)

## 🌐 Deployment

### Deploy to GitHub Pages (Free)

1. **Create GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   ```

2. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/sheraz91-ops/portfolio.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to repository **Settings**
   - Click **Pages** in sidebar
   - Under **Source**, select **main** branch
   - Click **Save**
   - Your site will be live at: `https://sheraz91-ops.github.io/portfolio/`

### Deploy to Netlify (Alternative)

1. Create account at [netlify.com](https://netlify.com)
2. Drag and drop your `portfolio` folder
3. Site will be live instantly with custom domain option

### Deploy to Vercel (Alternative)

1. Create account at [vercel.com](https://vercel.com)
2. Import GitHub repository
3. Deploy with one click

## 🔧 Common Updates

### Add a New Section

1. Add HTML in `index.html`:
```html
<section id="new-section" class="section">
    <div class="container">
        <h2 class="section-title">Section Title</h2>
        <!-- Your content -->
    </div>
</section>
```

2. Add navigation link:
```html
<li><a href="#new-section">New Section</a></li>
```

### Change Fonts

Add Google Fonts link in `<head>`:
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
```

Update CSS variable:
```css
--font-sans: 'Inter', sans-serif;
```

### Remove a Section

1. Delete the `<section>` block from `index.html`
2. Remove corresponding navigation link

## 📱 Mobile Responsiveness

The portfolio is fully responsive. Test on:
- Desktop (1920px+)
- Laptop (1366px)
- Tablet (768px)
- Mobile (375px)

No changes needed - responsive design is built-in.

## ⚡ Performance Tips

1. **Compress images** before uploading
2. **Remove unused CSS** if you delete sections
3. **Enable Cloudflare** on custom domain for caching
4. **Use WebP format** for modern browsers (optional)

## 🐛 Troubleshooting

### Images not showing
- Check file path is correct: `assets/images/projects/filename.png`
- Ensure filename matches exactly (case-sensitive)
- Verify image file exists in the folder

### Styling looks broken
- Clear browser cache (Ctrl+Shift+R)
- Check `css/styles.css` is in correct folder
- Verify `<link>` tag in HTML points to correct path

### JavaScript not working
- Check browser console for errors (F12)
- Verify `js/script.js` is in correct folder
- Ensure `<script>` tag is before `</body>`

### Mobile menu not appearing
- Mobile menu auto-shows below 768px width
- Test in browser DevTools mobile view
- Clear cache and reload

## 📝 License

Free to use for personal portfolios. No attribution required.

## 🤝 Support

For questions or issues:
1. Check this README first
2. Review code comments in files
3. Contact via email: 2024-uam-2006@mnsuam.edu.pk

## ✨ Features

- ✅ Fully responsive design
- ✅ Modern animations
- ✅ SEO optimized
- ✅ Fast loading
- ✅ Clean code
- ✅ Easy to customize
- ✅ Mobile-friendly navigation
- ✅ Smooth scrolling
- ✅ Professional layout

---

**Built with HTML, CSS, and vanilla JavaScript**  
Last updated: February 2025
