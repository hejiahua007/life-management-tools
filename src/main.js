const { app, BrowserWindow } = require('electron');
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

let mainWindow;

const app = createApp(App);
app.use(router);
app.mount("#app");

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  mainWindow.loadURL(`http://localhost:5173`);
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
