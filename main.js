const {app, BrowserWindow} = require('electron')
const path = require('path')

const createWin = ()=> {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    win.loadFile('index.html')
}

app.whenReady().then(() => {
    createWin()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWin()
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})