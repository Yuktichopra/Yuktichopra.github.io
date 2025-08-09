# 🚀 Quick Deploy Instructions

Your website is ready! Follow these steps to deploy to GitHub Pages:

## Option 1: Using GitHub CLI (Recommended)
Open a **new** Command Prompt or PowerShell and run these commands:

```bash
# Navigate to your project
cd C:\Users\Yukti\Documents\Obsidian\Website\yukipedia

# Login to GitHub (follow the prompts)
gh auth login

# Create a public repository and push
gh repo create yukipedia --public --source=. --remote=origin --push

# Enable GitHub Pages
gh repo edit --enable-pages
```

Wait 2-3 minutes, then visit: https://YOUR_USERNAME.github.io/yukipedia

## Option 2: Manual Method

### Step 1: Create Repository
1. Go to https://github.com/new
2. Repository name: `yukipedia` (or `yourusername.github.io` for personal site)
3. Make it **Public**
4. DON'T initialize with README
5. Click "Create repository"

### Step 2: Push Your Code
In Command Prompt or Git Bash:

```bash
cd C:\Users\Yukti\Documents\Obsidian\Website\yukipedia

# Add remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/yukipedia.git

# Push
git push -u origin master
```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click Settings → Pages
3. Source: GitHub Actions
4. Save

## 🎉 Your Site Will Be Live At:
- If repo name is `yourusername.github.io`: https://yourusername.github.io
- If repo name is `yukipedia`: https://yourusername.github.io/yukipedia

## Need to Update the Site Path?

If your repo is NOT named `yourusername.github.io`, edit `next.config.js`:

```javascript
// Change this line:
// basePath: '/repository-name',
// To:
basePath: '/yukipedia',  // or your repo name
```

Then commit and push:
```bash
git add next.config.js
git commit -m "Update base path for GitHub Pages"
git push
```

## Troubleshooting

- **Build fails?** Check Actions tab for errors
- **404 errors?** Wait 5 minutes or check basePath setting
- **Pages not enabled?** Settings → Pages → Source: GitHub Actions

## Making Updates

After any changes:
```bash
git add .
git commit -m "Update description"
git push
```

The site auto-deploys in 2-3 minutes!