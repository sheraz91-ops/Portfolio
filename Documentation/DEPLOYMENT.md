# GitHub Pages Deployment Guide

## Step-by-Step Instructions

### 1. Prepare Your Repository

First, make sure you're in the portfolio directory:
```bash
cd portfolio
```

### 2. Initialize Git (if not already done)

```bash
git init
```

### 3. Add All Files

```bash
git add .
```

### 4. Create Your First Commit

```bash
git commit -m "Initial portfolio commit"
```

### 5. Create GitHub Repository

1. Go to [github.com](https://github.com)
2. Click the **+** icon in top right
3. Select **New repository**
4. Name it: `portfolio` (or any name you prefer)
5. **DO NOT** initialize with README (we already have files)
6. Click **Create repository**

### 6. Connect Local to GitHub

Copy the commands from GitHub's "push an existing repository" section, or use:

```bash
git remote add origin https://github.com/sheraz91-ops/portfolio.git
git branch -M main
git push -u origin main
```

**Note**: Replace `sheraz91-ops` with your GitHub username if different.

### 7. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Click **Pages** in the left sidebar
4. Under **Source**:
   - Select branch: **main**
   - Select folder: **/ (root)**
5. Click **Save**

### 8. Wait for Deployment

- GitHub will build your site (takes 1-2 minutes)
- You'll see a green checkmark when ready
- Your site will be at: `https://sheraz91-ops.github.io/portfolio/`

### 9. Custom Domain (Optional)

If you have a custom domain:

1. In **Pages settings**, enter your domain in "Custom domain"
2. Add these DNS records at your domain provider:
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   
   Type: A
   Name: @
   Value: 185.199.109.153
   
   Type: A
   Name: @
   Value: 185.199.110.153
   
   Type: A
   Name: @
   Value: 185.199.111.153
   
   Type: CNAME
   Name: www
   Value: sheraz91-ops.github.io
   ```

## Making Updates

After making changes to your portfolio:

```bash
# 1. Check what changed
git status

# 2. Add changes
git add .

# 3. Commit with a message
git commit -m "Update projects section"

# 4. Push to GitHub
git push

# 5. Wait 1-2 minutes for changes to go live
```

## Common Issues

### Issue: Permission denied (publickey)

**Solution**: You need to set up SSH keys or use HTTPS with personal access token.

For HTTPS (easier):
```bash
git remote set-url origin https://github.com/sheraz91-ops/portfolio.git
```

### Issue: 404 Page Not Found

**Solutions**:
- Wait 2-3 minutes after enabling Pages
- Check that branch is set to **main** in settings
- Verify `index.html` is in root directory (not in subfolder)
- Clear browser cache and try again

### Issue: Images not loading

**Solutions**:
- Check image paths are relative: `assets/images/projects/image.png`
- NOT absolute: `/assets/images/projects/image.png`
- Ensure images were committed: `git status`
- Image filenames are case-sensitive

### Issue: CSS/JS not loading

**Solutions**:
- Check file paths in `index.html`
- Ensure files were committed
- Clear browser cache (Ctrl+Shift+R)

## Testing Locally

Before pushing, test locally:

1. **Simple method**: Just open `index.html` in your browser
2. **With local server** (recommended):
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Then visit: http://localhost:8000
   ```

## Alternative: Netlify Deployment

1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub
3. Click "Add new site" → "Import existing project"
4. Select your repository
5. Deploy settings:
   - Build command: (leave empty)
   - Publish directory: (leave as `/`)
6. Click "Deploy site"
7. Your site will be at: `random-name.netlify.app`
8. You can change the name in Site settings

## Alternative: Vercel Deployment

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click "Add New" → "Project"
4. Import your repository
5. Click "Deploy"
6. Your site will be at: `portfolio-username.vercel.app`

---

**Need help?** Check the main README.md or contact via the portfolio contact form.
