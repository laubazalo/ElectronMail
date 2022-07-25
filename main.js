/// In the main process.
const { app, BrowserWindow } = require('electron')

const createWindow=()=>{

    const win = new BrowserWindow({ 
        width: 1024,
        height: 720,
        icon:__dirname + '/icon.png' 
    })
    
    // Load a remote URL
    win.loadURL('https://correo.arba.gov.ar/')
    
    win.once('ready-to-show',()=>{
        win.show()
    })
  
}



app.whenReady().then(()=>{
    createWindow()    
    app.on('activate', () => {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
        
    })
        
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })

