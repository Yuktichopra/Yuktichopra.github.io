# GitHub Pages Deployment Instructions

Your website is now ready to be deployed to GitHub Pages! Follow these steps:

## Step 1: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Choose a repository name:
   - For personal site: Use `yourusername.github.io` (e.g., `yuktichopra.github.io`)
   - For project site: Use any name (e.g., `yukipedia` or `personal-website`)
5. Make it **Public** (required for free GitHub Pages)
6. DO NOT initialize with README (we already have one)
7. Click "Create repository"

## Step 2: Connect Your Local Repository

After creating the repository, GitHub will show you commands. Use these:

```bash
# Add the remote repository (replace with your URL)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Rename branch to main (if needed)
git branch -M main

# Push your code
git push -u origin main
```

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Build and deployment":
   - Source: Select "GitHub Actions"
5. The workflow will automatically run when you push

## Step 4: Update Configuration (If Needed)

### For username.github.io repositories:
No changes needed - your site will be at `https://username.github.io`

### For other repository names:
1. Edit `next.config.js`
2. Uncomment and update the basePath:
```javascript
basePath: '/your-repo-name',
```
3. Commit and push the change:
```bash
git add next.config.js
git commit -m "Add basePath for GitHub Pages"
git push
```

## Step 5: Wait for Deployment

1. Go to the "Actions" tab in your repository
2. You'll see the deployment workflow running
3. Wait for it to complete (usually 2-3 minutes)
4. Your site will be available at:
   - `https://YOUR_USERNAME.github.io` (for username.github.io repos)
   - `https://YOUR_USERNAME.github.io/REPO_NAME` (for other repos)

## Troubleshooting

### If the build fails:
1. Check the Actions tab for error messages
2. Make sure all dependencies are in package.json
3. Ensure the build works locally with `npm run build`

### If pages don't load correctly:
1. Check if you need to set basePath in next.config.js
2. Clear your browser cache
3. Wait a few minutes for GitHub Pages to update

## Making Updates

After initial setup, updating is simple:
```bash
# Make your changes
git add .
git commit -m "Your update message"
git push
```

The GitHub Action will automatically rebuild and deploy your site!

## Custom Domain (Optional)

To use a custom domain like `yuktichopra.com`:
1. Add a CNAME file in the public folder with your domain
2. Configure DNS settings with your domain provider
3. Enable HTTPS in GitHub Pages settings

## Need Help?

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Next.js Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- Check the Actions tab for deployment logs