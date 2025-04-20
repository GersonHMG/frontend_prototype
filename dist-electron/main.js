"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const path = __importStar(require("path"));
function createWindow() {
    const win = new electron_1.BrowserWindow({
        width: 800,
        height: 600,
        resizable: true,
        autoHideMenuBar: true,
        title: "CondorSSL",
        webPreferences: {
            contextIsolation: true,
            nodeIntegration: false,
            preload: path.join(__dirname, "../dist-electron/preload.js"),
        },
    });
    const isDev = !electron_1.app.isPackaged;
    if (isDev) {
        win.loadURL("http://localhost:5173");
    }
    else {
        win.loadFile(path.join(__dirname, "../dist/index.html"));
        win.webContents.on("did-fail-load", (_e, code, desc, validatedURL) => {
            console.error("❌ Page failed to load:", { code, desc, validatedURL });
        });
    }
}
electron_1.app.whenReady().then(createWindow);
/*
ipcMain.handle("start-backend", () => {
  const backendPath = "C:/Robocup/CondorSSL/build/SysmicSoftware.exe";

  console.log("🟡 Launching backend via cmd start...");

  spawn("cmd.exe", ["/c", "start", `"Backend"`, backendPath], {
    windowsHide: false,
  });
});
*/
//# sourceMappingURL=main.js.map