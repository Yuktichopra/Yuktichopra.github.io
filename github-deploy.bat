@echo off
cd /d C:\Users\Yukti\Documents\Obsidian\Website\yukipedia

echo ====================================
echo    GitHub Pages Deployment
echo ====================================
echo.

REM Use GitHub CLI with full path
set GH="C:\Program Files\GitHub CLI\gh.exe"

echo Checking GitHub CLI...
%GH% --version
echo.

echo Step 1: Login to GitHub
echo ------------------------
echo Choose:
echo - GitHub.com (press Enter)
echo - Login with browser (easiest)
echo.

%GH% auth login

echo.
echo Step 2: Creating repository...
echo ------------------------

%GH% repo create yukipedia --public --source=. --remote=origin --push

echo.
echo ====================================
echo DEPLOYMENT COMPLETE!
echo ====================================
echo.
echo Your site will be live at:
echo https://[YOUR-USERNAME].github.io/yukipedia
echo.
echo Enable GitHub Pages:
echo 1. Go to Settings - Pages
echo 2. Source: GitHub Actions
echo.
pause