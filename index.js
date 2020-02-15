const { app, BrowserWindow} = require('electron');

let win;

function createWindow() {

  win = new BrowserWindow({
    minWidth: 960,
    minHeight: 530,
    icon: './src/assets/discord-icon.png',
    frame: false,
    
  });

  win.loadURL("http://localhost:3000");
  win.maximize(true);
  win.setMenu (null);

}

app.on('ready', createWindow);