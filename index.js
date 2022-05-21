const {app,BrowserWindow,globalShortcut,Menu} = require('electron');
const shell = require('electron').shell
let win
var full=1;
function createWindow () {
    win = new BrowserWindow({ width: 1200, height: 800 })
    win.loadFile('./sm.html')
    win.on('closed', () => {
        win = null
    })
	const mainMenu = Menu.buildFromTemplate(Menus);
    Menu.setApplicationMenu(mainMenu);
}
function createWhiteWindow () {
    win = new BrowserWindow({ width: 1200, height: 800 })
    win.loadFile('./sm.html')
    win.on('closed', () => {
        win = null
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
app.on('ready', async () => {
    globalShortcut.register('F5', function () {
      win.webContents.openDevTools();
    })
    globalShortcut.register('Command+Shift+f', function () {
      full+=1;
      if(full%2==0){
        win.setFullScreen(true);
      }else{
        win.setFullScreen(false);
      }
    })
    globalShortcut.register('Command+q', function () {
      app.quit()
    })
    createWindow();
})
app.on('window-all-closed', () => {
   if (process.platform !== 'darwin') {
        app.quit()
   }
})

app.on('activate', () => {
    if (win === null) {
      createWindow()
    }
})
try {
  require('electron-reloader')(module,{});
} catch (_) {}
