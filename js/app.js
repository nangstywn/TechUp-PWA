if ('serviceWorker' in navigator){
    window.addEventListener('load', function(){
            navigator.serviceWorker.register('/sw.js')
        .then((reg) => console.log('Service Worker Registered.', reg))
        .catch((err) => console.log('Service Worker Registered.', err))
    });
    
}