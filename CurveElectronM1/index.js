const { app, BrowserWindow } = require('electron');

// ==========================================
// Curve Fever M1 Pro Stable Config
// Ziel: stabile 120 FPS auf internem ProMotion-Display
// ==========================================

// GPU / Rendering
app.commandLine.appendSwitch('ignore-gpu-blocklist');
app.commandLine.appendSwitch('enable-gpu-rasterization');
app.commandLine.appendSwitch('enable-oop-rasterization');
app.commandLine.appendSwitch('enable-zero-copy');

// FPS-Anzeige
app.commandLine.appendSwitch('show-fps-counter');

// Gegen Drops durch Hintergrund-/Fenster-Throttling
app.commandLine.appendSwitch('disable-background-timer-throttling');
app.commandLine.appendSwitch('disable-renderer-backgrounding');
app.commandLine.appendSwitch('disable-backgrounding-occluded-windows');

// Erstmal NICHT aktivieren.
// Kann mehr FPS bringen, aber auch wieder instabiler werden.
// app.commandLine.appendSwitch('disable-frame-rate-limit');
// app.commandLine.appendSwitch('disable-gpu-vsync');

function createWindow() {
  const win = new BrowserWindow({
    width: 1400,
    height: 900,
    backgroundColor: '#000000',
    autoHideMenuBar: true,
    title: 'Curve Fever M1',

    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: true,
      backgroundThrottling: false,
      webgl: true,
      spellcheck: false,
    },
  });

  win.setMenuBarVisibility(false);
  win.loadURL('https://curvefever.pro');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  app.quit();
});
