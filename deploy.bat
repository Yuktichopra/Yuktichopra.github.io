@echo off
echo ========================================
echo GitHub Pages Deployment Script
echo ========================================
echo.

REM Add GitHub CLI to PATH
set PATH=%PATH%;C:\Program Files\GitHub CLI

REM Check if gh works
gh --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: GitHub CLI not found
    echo Please install from: https://cli.github.com/
    pause
    exit /b 1
)

echo Step 1: Authenticating with GitHub
echo ----------------------------------------
echo You will be prompted to:
echo   1. Choose GitHub.com
echo   2. Select authentication method (Browser is easiest)
echo   3. Login in your browser
echo.
echo Press any key to continue...
pause >nul

gh auth login

echo.
echo Step 2: Creating repository and pushing code
echo ----------------------------------------

gh repo create yukipedia --public --source=. --remote=origin --push --description "Personal website - Neuroscience, Research, and Science Communication"

if %errorlevel% neq 0 (
    echo.
    echo Repository might already exist. Trying alternative push...
    git remote add origin https://github.com/%USERNAME%/yukipedia.git 2>nul
    git push -u origin master
)

echo.
echo ========================================
echo DEPLOYMENT INITIATED!
echo ========================================
echo.
echo Your website will be available in 2-3 minutes at:
echo https://[YOUR-GITHUB-USERNAME].github.io/yukipedia
echo.
echo Check deployment status:
echo https://github.com/[YOUR-USERNAME]/yukipedia/actions
echo.
echo IMPORTANT: Enable GitHub Pages:
echo 1. Go to your repository Settings
echo 2. Click Pages in the left sidebar
echo 3. Source: GitHub Actions
echo 4. Save
echo.
pause