const { app, BrowserWindow, globalShortcut } = require("electron");
const path = require("path");

//================================================
// * @electron/remote/main initialize
//================================================

require("@electron/remote/main").initialize();

//================================================
// * createWindow
//================================================

let mainWindow;
let splash;

function createWindow() {
  splash = new BrowserWindow({
    width: 800,
    height: 800,
    frame: false,
    alwaysOnTop: true,
    show: false,
    transparent: true,
  });
  splash.loadURL(`file://${__dirname}/html/splash.html`);
  splash.webContents.once("ready-to-show", () => splash.show());

  mainWindow = new BrowserWindow({
    icon: "resources/app/style/img/icon.png",
    width: 1200,
    height: 650,
    minWidth: 940,
    minHeight: 600,
    show: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      allowRunningInsecureContent: false,
      enableRemoteModule: true,
    },
  });

  require("@electron/remote/main").enable(mainWindow.webContents);

  mainWindow.loadFile(`html/index.html`);

  mainWindow.webContents.on("render-process-gone", (e, details) => {
    require("fs").writeFileSync(
      "./dbm_crash_info.txt",
      JSON.stringify(details)
    );
    app.quit();
  });

  mainWindow.webContents.once("did-finish-load", function () {
    splash.destroy();
    mainWindow.show();
    // mainWindow.webContents.executeJavaScript("console.clear();");
  });
}

/*
app.on("browser-window-created", (event, window) => {
  window.webContents.openDevTools({ mode: "detach" });
});
*/

//================================================
// * whenReady
//================================================

app.whenReady().then(() => {
  createWindow();

  app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

//================================================
// * window-all-closed
//================================================

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

//================================================
// * globals
//================================================

global.refs = {
  getVarLuist: null,
  TranslationManager: null,
  ThemeManager: null,
};

//================================================
// * getGlobal / setGlobal
//================================================

function setupGlobalSharing() {
  const ipcMain = require("electron").ipcMain;
  ipcMain.on("getGlobal", function (event, arg) {
    event.returnValue = global[arg];
  });
  ipcMain.on("setGlobal", function (event, arg) {
    global[arg.name] = arg.value;
    event.returnValue = true;
  });
}

setupGlobalSharing();

//================================================
// * globalGetTranslations
//================================================

let translateId = 0;

function setupTranslationMessaging() {
  const ipcMain = require("electron").ipcMain;
  ipcMain.on("translate", function (event, arg) {
    const newId = translateId++;
    if (mainWindow) {
      mainWindow.webContents.send("get-translation", {
        id: newId,
        text: arg,
      });
      ipcMain.once("translate-returned", function (_, arg) {
        event.sender.send("translate", arg);
      });
    }
    event.returnValue = newId;
  });
}

setupTranslationMessaging();

//================================================
// * clearBotLog
//================================================

function setupClearBotLog() {
  const ipcMain = require("electron").ipcMain;
  ipcMain.on("clearBotLog", function (event, arg) {
    if (mainWindow) {
      mainWindow.webContents.send("clearBotLog2");
    }
    event.returnValue = true;
  });
}

setupClearBotLog();
