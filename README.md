# Simple-Browser
This browser is based on the Chromium kernel and is developed using electron, thank you very much. 

# Steps to compile the source code: 
1. Download node .js, the official website https://nodejs.org/en/ 
2. Download the source code and extract it, then open the terminal, jump to the root directory of the source code, enter npm install electron -g to download electron. 
3. Enter npm init -y in the terminal, and then the content is all defaulted. 
4. To test, enter npm run start in the terminal. 
5. Package, enter npm install electron-packager --save-dev in the terminal to install electron-packager, and then enter electron-packager ./ (custom project name) --platform= (your specified platform, enter all, Windows input win32, macOS input darwin, Linux input linux) --arch=x64 --icon=./sm_sm_logo.ico --out=./out --app-version=0.01 --overwrite 
6. Run SimpleBrowser .exe in the newly generated out folder
