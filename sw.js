let cacheName = "listapdm"
let filesToCache = ["/","/manifest.json", "/index.html","/css/style.css","/js/main.js","/js/script.js","/js/script2.js","/js/script3.js","/js/script4.js","/pages/exercicio1","/pages/exercicio2","/pages/exercicio3","/pages/exercicio4"]

// inicializando a service worker e fazendo o download do conteúdo da aplicação
self.addEventListener("install", (e) =>{
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.addAll(filesToCache)
        })
    )
})

// disponibilizando o conteudo quando estiver offline
self.addEventListener("fetch", (e) =>{
    e.respondWith(
        caches.match(e.request).then((response) =>{
            return response || fetch(e.request)
        })
    )
})