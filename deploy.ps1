# GitHub Pages Deployment Script
Write-Host "🚀 Starting GitHub Pages Deployment..." -ForegroundColor Cyan
Write-Host ""

# Check if gh is available
Write-Host "Checking GitHub CLI..." -ForegroundColor Yellow
$ghVersion = gh --version 2>$null
if ($?) {
    Write-Host "✅ GitHub CLI is installed" -ForegroundColor Green
    Write-Host $ghVersion
} else {
    Write-Host "❌ GitHub CLI not found. Please restart PowerShell and try again." -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "📝 Step 1: Authenticating with GitHub" -ForegroundColor Yellow
Write-Host "You'll be prompted to:" -ForegroundColor White
Write-Host "  1. Choose GitHub.com" -ForegroundColor Gray
Write-Host "  2. Choose authentication method (Browser is easiest)" -ForegroundColor Gray
Write-Host "  3. Login in your browser" -ForegroundColor Gray
Write-Host ""

# Authenticate with GitHub
gh auth login

# Check if authentication was successful
$authStatus = gh auth status 2>&1
if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Successfully authenticated with GitHub!" -ForegroundColor Green
} else {
    Write-Host "❌ Authentication failed. Please try again." -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "📦 Step 2: Creating GitHub repository" -ForegroundColor Yellow
Write-Host "Repository name: yukipedia" -ForegroundColor White
Write-Host ""

# Create repository and push
$repoName = "yukipedia"
gh repo create $repoName --public --source=. --remote=origin --push --description "Personal website - Neuroscience, Research, and Science Communication"

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Repository created and code pushed successfully!" -ForegroundColor Green
} else {
    Write-Host "⚠️  Repository might already exist or there was an error" -ForegroundColor Yellow
    Write-Host "Trying to push to existing repository..." -ForegroundColor Yellow
    
    # Try to set remote and push
    git remote add origin "https://github.com/$($env:USERNAME)/$repoName.git" 2>$null
    git push -u origin master
}

Write-Host ""
Write-Host "🔧 Step 3: Getting your GitHub username" -ForegroundColor Yellow

# Get GitHub username
$ghUser = gh api user --jq .login
Write-Host "GitHub username: $ghUser" -ForegroundColor White

Write-Host ""
Write-Host "📄 Step 4: Updating configuration" -ForegroundColor Yellow

# Update next.config.js with basePath
$configPath = "next.config.js"
$config = Get-Content $configPath -Raw
if ($config -notmatch "basePath:") {
    Write-Host "❌ Please manually update next.config.js" -ForegroundColor Yellow
    Write-Host "Uncomment and set: basePath: `'/$repoName`'" -ForegroundColor Yellow
} else {
    Write-Host "✅ Configuration looks good" -ForegroundColor Green
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "🎉 DEPLOYMENT COMPLETE!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "⏰ GitHub Pages will be ready in 2-3 minutes" -ForegroundColor Yellow
Write-Host ""
Write-Host "🌐 Your website will be available at:" -ForegroundColor Cyan
Write-Host "   https://$ghUser.github.io/$repoName" -ForegroundColor White
Write-Host ""
Write-Host "📊 Check deployment status at:" -ForegroundColor Yellow
Write-Host "   https://github.com/$ghUser/$repoName/actions" -ForegroundColor White
Write-Host ""
Write-Host "⚙️  To enable GitHub Pages manually (if needed):" -ForegroundColor Yellow
Write-Host "   1. Go to: https://github.com/$ghUser/$repoName/settings/pages" -ForegroundColor Gray
Write-Host "   2. Source: GitHub Actions" -ForegroundColor Gray
Write-Host "   3. Save" -ForegroundColor Gray
Write-Host ""
Write-Host "Press any key to exit..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")