const {app,BrowserWindow,globalShortcut,Menu} = require('electron');
const shell = require('electron').shell
// 创建全局变量并在下面引用，避免被GC
let win
function createWindow () {
    // 创建浏览器窗口并设置宽高
    win = new BrowserWindow({ width: 800, height: 600 })
    
    // 加载页面
    win.loadFile('./sm.html')
    // 打开开发者工具
    //win.webContents.openDevTools()
    
    // 添加window关闭触发事件
    
    win.on('closed', () => {
        win = null  // 取消引用
    })
	const mainMenu = Menu.buildFromTemplate(Menus);
    Menu.setApplicationMenu(mainMenu);
}
function createWhiteWindow () {
    // 创建浏览器窗口并设置宽高
    win = new BrowserWindow({ width: 800, height: 600 })
    
    // 加载页面
    win.loadFile('./sm.html')
    // 打开开发者工具
    //win.webContents.openDevTools()
    
    // 添加window关闭触发事件
    
    win.on('closed', () => {
        win = null  // 取消引用
    })
	const mainMenu = Menu.buildFromTemplate(Menus);
    Menu.setApplicationMenu(mainMenu);
}
const Menus = [
    {
        label:'设置',
        submenu:[
            {
                label: '打开新的标签页',
                role: 'help',
                click: function () {
                    createWhiteWindow();
                }
            },
            {
                label: '重新加载',
                role: 'help',
                click: function () {
					try {
						require('electron-reloader')(module,{});
					} catch (_) {}
                }
            }
        ]
    }
];
// 初始化后 调用函数
app.on('ready', async () => {
    globalShortcut.register('Alt+B', function () {
      win.webContents.openDevTools();
    })
    createWindow();
})
// 当全部窗口关闭时退出。
app.on('window-all-closed', () => {
   // 在 macOS 上，除非用户用 Cmd + Q 确定地退出，
   // 否则绝大部分应用及其菜单栏会保持激活。
   if (process.platform !== 'darwin') {
        app.quit()
   }
})
  
app.on('activate', () => {
// 在macOS上，当单击dock图标并且没有其他窗口打开时，
// 通常在应用程序中重新创建一个窗口。
    if (win === null) {
      createWindow()
    }
})
try {
  require('electron-reloader')(module,{});
} catch (_) {}
