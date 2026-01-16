# Publishing Your Portfolio to GitHub

Follow these steps to publish your portfolio to GitHub:

## Step 1: Download Your Project

Since this is a Figma Make project, you'll need to download all the files to your local machine.

## Step 2: Initialize Git Repository

Open your terminal in the project folder and run:

```bash
git init
git add .
git commit -m "Initial commit: UX Frontend Portfolio"
```

## Step 3: Create GitHub Repository

1. Go to [GitHub](https://github.com) and log in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name it something like `portfolio` or `ux-frontend-portfolio`
5. Choose "Public" visibility
6. **DO NOT** initialize with README (you already have one)
7. Click "Create repository"

## Step 4: Connect and Push to GitHub

GitHub will show you commands. Use these:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repository name.

## Step 5: Deploy Your Portfolio

### Option A: Vercel (Recommended - Easiest)

1. Go to [vercel.com](https://vercel.com)
2. Sign up/log in with GitHub
3. Click "New Project"
4. Import your repository
5. Click "Deploy"
6. Done! Your site will be live at `your-project.vercel.app`

### Option B: Netlify

1. Go to [netlify.com](https://netlify.com)
2. Sign up/log in with GitHub
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub and select your repository
5. Build settings should auto-detect (Vite)
6. Click "Deploy"
7. Your site will be live at `your-project.netlify.app`

### Option C: GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to your `package.json` (under scripts):
```json
"homepage": "https://YOUR_USERNAME.github.io/YOUR_REPO_NAME",
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

3. Update `vite.config.ts` to add base path:
```typescript
export default {
  base: '/YOUR_REPO_NAME/',
  // ... other config
}
```

4. Deploy:
```bash
npm run deploy
```

5. Enable GitHub Pages:
   - Go to your repo → Settings → Pages
   - Source: Deploy from branch
   - Branch: gh-pages
   - Save

Your site will be live at `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`

## Step 6: Customize Your Portfolio

Before publishing, update:

1. **Contact information** in `/components/Contact.tsx`:
   - Replace email placeholder
   - Add your LinkedIn URL
   - Add your GitHub URL

2. **Personal details** in `/components/About.tsx`:
   - Customize the about text if needed

3. **Update README.md**:
   - Add your actual contact information
   - Update the repository URL

## Step 7: Keep Your Portfolio Updated

Whenever you make changes:

```bash
git add .
git commit -m "Description of changes"
git push
```

If using Vercel or Netlify, your site will automatically redeploy!

If using GitHub Pages, run:
```bash
npm run deploy
```

## Troubleshooting

**Issue**: Build fails
- Make sure you have Node.js installed (v16+)
- Run `npm install` to install all dependencies
- Check for any error messages in the console

**Issue**: Images or assets not loading after deployment
- Check that all import paths are correct
- Verify the `base` path in `vite.config.ts` matches your repo name (for GitHub Pages)

**Issue**: Site shows 404 on GitHub Pages
- Make sure GitHub Pages is enabled in repository settings
- Verify the gh-pages branch exists
- Wait a few minutes for DNS to propagate

## Need Help?

- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com)
- [GitHub Pages Documentation](https://docs.github.com/pages)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)

Good luck with your portfolio! 🚀
