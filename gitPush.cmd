REM Adding all the files of this directory or its children and pushing them to remote server
git fetch origin
git add .
@echo off
set /p userInput="Enter commit message: "
git commit -m "%userInput%"
git push origin main