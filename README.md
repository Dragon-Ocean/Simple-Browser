# Simple-Browser
This browser is based on the Chromium kernel and is developed using electron, thank you very much. 
该浏览器基于Chromium内核，并使用electron开发，非常感谢。
# Steps to compile the source code: 编译源代码的步骤：
1. Download node .js, the official website https://nodejs.org/en/     1.下载节点.js，官网 https://nodejs.org/en/
2. Download the source code and extract it, then open the terminal, jump to the root directory of the source code, enter npm install electron -g to download electron.  2. 下载源代码并提取，然后打开终端，跳转到源代码的根目录，输入 npm install electron -g 下载 electron。
3. Enter npm init -y in the terminal, and then the content is all defaulted. 3. 在终端中输入 npm init -y，然后全部默认内容。
4. To test, enter npm run start in the terminal.  4. 要进行测试，请在终端中输入 npm run start。
5. Package, enter npm install electron-packager --save-dev in the terminal to install electron-packager, and then enter electron-packager ./ (custom project name) --platform= (your specified platform,all platforms enter all, Windows input win32, macOS input darwin, Linux input linux) --arch=x64 --icon=./sm_sm_logo.ico --out=./out --app-version=0.01 --overwrite 5. 打包，在终端中输入 npm install electron-packager --save-dev 以安装 electron-packager，然后输入 electron-packager ./ （自定义项目名称） --platform= （您指定的平台，所有平台输入all，Windows 输入 win32，macOS 输入darwin，Linux 输入 linux） --arch=x64 --icon=./sm_sm_logo.ico --out=./out --app-version=0.01 --overwrite
6. Run (Step 5 specifies the project name).exe in the newly generated out folder 6. 在新生成的 out 文件夹中运行（第5步指定的项目名）.exe
