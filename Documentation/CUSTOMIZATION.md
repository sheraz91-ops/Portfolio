# Portfolio Customization Guide

This guide shows you exactly where to make changes for common updates.

## Table of Contents
- [Quick Edits](#quick-edits)
- [Adding Content](#adding-content)
- [Styling Changes](#styling-changes)
- [Advanced Customization](#advanced-customization)

---

## Quick Edits

### Change Your Name & Title

**Location**: `index.html` - Line ~65

```html
<!-- FIND THIS: -->
<h1 class="hero-title">
    Sheeraz
</h1>

<!-- CHANGE TO: -->
<h1 class="hero-title">
    Your Name
</h1>
```

### Update Contact Information

**Location**: `index.html` - Lines ~450-500

```html
<!-- Email -->
<a href="mailto:your.email@example.com" class="contact-link">

<!-- Phone -->
<a href="tel:+1234567890" class="contact-link">

<!-- LinkedIn -->
<a href="https://linkedin.com/in/yourprofile" target="_blank">

<!-- GitHub -->
<a href="https://github.com/yourusername" target="_blank">
```

### Change Venture Spark Badge

**Location**: `index.html` - Line ~55

```html
<div class="hero-badge">
    <span class="badge-icon">✓</span>
    <span>Your Achievement Here</span>
</div>
```

Or remove it entirely by deleting the entire `<div class="hero-badge">` block.

---

## Adding Content

### Add a New Project

**Location**: `index.html` - Inside `<div class="projects-grid">` (~Line 125)

**Step 1**: Add your project image to `assets/images/projects/`

**Step 2**: Copy this template and paste inside `projects-grid`:

```html
<article class="project-card">
    <div class="project-image">
        <img src="assets/images/projects/your-project.png" alt="Your project name" loading="lazy">
        <div class="project-overlay">
            <span class="project-status">Live</span> <!-- or "Desktop App" or "In Progress" -->
        </div>
    </div>
    <div class="project-content">
        <h3 class="project-title">Your Project Name</h3>
        <p class="project-subtitle">One-line description</p>
        <p class="project-description">
            Detailed description of what the project does, technologies used, 
            and any notable achievements or features. Keep it 2-3 sentences.
        </p>
        <div class="project-tech">
            <span class="tech-tag">React</span>
            <span class="tech-tag">Node.js</span>
            <span class="tech-tag">MongoDB</span>
        </div>
        <div class="project-links">
            <a href="https://your-live-site.com" target="_blank" rel="noopener" class="project-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
                Live Site
            </a>
            <a href="https://github.com/yourusername/repo" target="_blank" rel="noopener" class="project-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
            </a>
        </div>
    </div>
</article>
```

### Add Work Experience

**Location**: `index.html` - Inside `<div class="experience-timeline">` (~Line 235)

```html
<div class="experience-item">
    <div class="experience-meta">
        <span class="experience-period">2024 - Present</span>
    </div>
    <div class="experience-content">
        <h3 class="experience-title">Your Job Title</h3>
        <p class="experience-organization">Company Name</p>
        <p class="experience-description">
            Describe what you did, technologies you used, and impact you made.
            Keep it concise but specific.
        </p>
        <div class="experience-skills">
            <span>Skill 1</span>
            <span>Skill 2</span>
            <span>Skill 3</span>
        </div>
    </div>
</div>
```

### Add a New Skill

**Location**: `index.html` - Inside a `<div class="skill-category">` (~Line 340)

Just add a new `<span>` tag:

```html
<span class="skill-tag">New Skill</span>
```

Or create an entirely new skill category:

```html
<div class="skill-category">
    <h3 class="skill-category-title">New Category</h3>
    <div class="skill-tags">
        <span class="skill-tag">Skill 1</span>
        <span class="skill-tag">Skill 2</span>
        <span class="skill-tag">Skill 3</span>
    </div>
</div>
```

### Update Education

**Location**: `index.html` - Inside `<div class="education-main">` (~Line 390)

```html
<div class="education-item">
    <div class="education-degree">
        <h3>Your Degree Name</h3>
        <p class="education-institution">University Name, City</p>
        <p class="education-period">Year Started - Year Ended</p>
    </div>
</div>
```

### Add Achievement/Award

**Location**: `index.html` - Inside `<ul class="recognition-list">` (~Line 430)

```html
<li>
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
    Your Achievement Name
</li>
```

---

## Styling Changes

### Change Color Scheme

**Location**: `css/styles.css` - Lines ~15-25

```css
:root {
    /* Change these colors */
    --color-primary: #1e3a8a;        /* Main brand color (navy) */
    --color-accent: #10b981;         /* Accent color (green) */
}
```

**Popular Color Palettes**:

```css
/* Professional Blue */
--color-primary: #1e40af;
--color-accent: #3b82f6;

/* Modern Purple */
--color-primary: #7c3aed;
--color-accent: #a78bfa;

/* Vibrant Orange */
--color-primary: #ea580c;
--color-accent: #fb923c;

/* Elegant Dark */
--color-primary: #111827;
--color-accent: #f59e0b;

/* Tech Green */
--color-primary: #059669;
--color-accent: #34d399;
```

### Change Fonts

**Location**: `index.html` - Add in `<head>` section

```html
<!-- Add Google Font -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
```

**Then in** `css/styles.css`:

```css
:root {
    --font-sans: 'Inter', sans-serif;
}
```

**Popular Font Combinations**:

```css
/* Modern & Clean */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
--font-sans: 'Inter', sans-serif;

/* Professional */
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;600;700&display=swap');
--font-sans: 'IBM Plex Sans', sans-serif;

/* Friendly */
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;600;700&display=swap');
--font-sans: 'DM Sans', sans-serif;
```

### Adjust Spacing

**Location**: `css/styles.css` - Lines ~40-50

```css
:root {
    /* Change these to make sections more/less spacious */
    --spacing-xl: 2rem;      /* Between elements */
    --spacing-2xl: 3rem;     /* Between sections */
    --spacing-3xl: 4rem;     /* Large gaps */
    --spacing-4xl: 6rem;     /* Section padding */
}
```

Make sections tighter:
```css
--spacing-4xl: 3rem;  /* Reduces section padding */
```

Make sections more spacious:
```css
--spacing-4xl: 8rem;  /* Increases section padding */
```

---

## Advanced Customization

### Remove a Section

**Example: Remove Leadership Section**

1. Find the section in `index.html`:
```html
<section class="section leadership-section">
    <!-- ... entire section ... -->
</section>
```

2. Delete the entire `<section>` block

3. Remove the nav link:
```html
<!-- DELETE THIS -->
<li><a href="#leadership">Leadership</a></li>
```

### Add a Blog Section

**Location**: `index.html` - Before the contact section

```html
<section id="blog" class="section blog-section">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">Blog</h2>
            <p class="section-subtitle">Thoughts on development and technology</p>
        </div>

        <div class="blog-grid">
            <article class="blog-card">
                <h3>Blog Post Title</h3>
                <p class="blog-date">February 2, 2025</p>
                <p class="blog-excerpt">
                    Brief excerpt from your blog post...
                </p>
                <a href="blog/post-1.html" class="blog-link">Read more →</a>
            </article>
        </div>
    </div>
</section>
```

**Add styling** in `css/styles.css`:

```css
.blog-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--spacing-xl);
}

.blog-card {
    padding: var(--spacing-xl);
    background: var(--color-bg-card);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-md);
    transition: var(--transition);
}

.blog-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-xl);
}

.blog-card h3 {
    margin-bottom: var(--spacing-sm);
    color: var(--color-text-primary);
}

.blog-date {
    font-size: var(--font-size-sm);
    color: var(--color-accent);
    margin-bottom: var(--spacing-md);
}

.blog-excerpt {
    color: var(--color-text-secondary);
    margin-bottom: var(--spacing-md);
}

.blog-link {
    color: var(--color-primary);
    font-weight: 600;
}
```

### Enable Dark Mode (Advanced)

This requires more extensive changes. Create a toggle button and add these styles:

```css
/* Add to styles.css */
body.dark-mode {
    --color-bg: #1f2937;
    --color-bg-alt: #111827;
    --color-bg-card: #374151;
    --color-text-primary: #f9fafb;
    --color-text-secondary: #d1d5db;
    --color-border: #4b5563;
}
```

Add toggle in `index.html` navigation:

```html
<button class="theme-toggle" aria-label="Toggle theme">
    <span class="theme-icon">🌙</span>
</button>
```

Add JavaScript in `script.js`:

```javascript
const themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const icon = themeToggle.querySelector('.theme-icon');
    icon.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});
```

### Add Download Resume Button

**Location**: `index.html` - In hero section actions

```html
<a href="assets/resume.pdf" download class="btn btn-secondary">
    Download Resume
</a>
```

Then add your `resume.pdf` file to the `assets/` folder.

---

## Testing Your Changes

### Local Testing

**Option 1**: Simple (just open file)
- Right-click `index.html`
- Select "Open with" → Your browser

**Option 2**: With local server (recommended)
```bash
# In portfolio directory
python -m http.server 8000

# Visit: http://localhost:8000
```

### Mobile Testing

**In Chrome DevTools**:
1. Press F12
2. Click "Toggle device toolbar" (phone icon)
3. Select device (iPhone, iPad, etc.)
4. Test responsive behavior

---

## Common Mistakes to Avoid

❌ **Don't** use absolute paths: `/assets/image.png`  
✅ **Do** use relative paths: `assets/image.png`

❌ **Don't** forget to commit images: Images in folder but not in Git  
✅ **Do** always: `git add assets/` before pushing

❌ **Don't** edit minified files or generated code  
✅ **Do** edit the source HTML/CSS/JS files

❌ **Don't** remove CSS classes without checking if they're used  
✅ **Do** search entire project before removing classes

---

## Need More Help?

- Check **README.md** for general guidance
- Check **DEPLOYMENT.md** for publishing help
- Review code comments in files
- Test changes locally before pushing

**Remember**: Save → Test → Commit → Push
