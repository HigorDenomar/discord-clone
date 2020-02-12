const { app, BrowserWindow, Tray } = require('electron');

let win;

function createWindow() {

  const appIcon = new Tray('./src/assets/discord-icon.png')

  win = new BrowserWindow({
    minWidth: 960,
    minHeight: 530,
    frame: false,
    
  });

  win.loadURL("http://localhost:3000");
  win.maximize(true);
  win.setMenu (null);

}

app.on('ready', createWindow);