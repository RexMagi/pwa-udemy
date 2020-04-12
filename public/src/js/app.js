var deferredPrompt;
if (navigator.serviceWorker) {
    navigator.serviceWorker
        .register('/sw.js')
        .then(() => {
            console.log("Service worker registed")
        });
}


window.addEventListener('beforeInstallprompt', (evt) => {
    console.log('beforeIntallprompt fired')
    evt.preventDefault();
    deferredPrompt = evt;
    return false;
});