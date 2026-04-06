@echo off
echo ========================================
echo  Push The Dungeon Club to GitHub
echo ========================================
echo.

REM Check if git is installed
git --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Git is not installed!
    echo Please install Git from: https://git-scm.com/download/win
    echo.
    pause
    exit /b 1
)

echo Git detected. Proceeding with push...
echo.

REM Initialize git if not already initialized
if not exist .git (
    echo Initializing git repository...
    git init
    echo.
)

REM Add all files
echo Adding files...
git add .
echo.

REM Commit
echo Committing files...
git commit -m "Initial commit: The Dungeon Club gym website - Next.js 14, Tailwind CSS, Framer Motion"
echo.

REM Add remote if not already added
git remote get-url origin >nul 2>&1
if errorlevel 1 (
    echo Adding remote repository...
    git remote add origin https://github.com/TNT-747/thedungeon.git
    echo.
)

REM Ensure we're on main branch
echo Switching to main branch...
git branch -M main
echo.

REM Push to GitHub
echo Pushing to GitHub...
git push -u origin main
echo.

if errorlevel 0 (
    echo ========================================
    echo  SUCCESS! Project pushed to GitHub
    echo  Repository: https://github.com/TNT-747/thedungeon
    echo ========================================
) else (
    echo ========================================
    echo  ERROR: Push failed
    echo  Check the error messages above
    echo ========================================
)

echo.
pause
