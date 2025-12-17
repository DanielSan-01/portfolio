const CACHE_NAME = 'danielsan-portfolio-v2' // Updated to force cache refresh
const urlsToCache = [
  '/portfolio/',
  '/portfolio/index.html'
]

// Install event - cache resources
self.addEventListener('install', (event) => {
  // Skip waiting to activate immediately
  self.skipWaiting()
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache)
      })
      .catch((error) => {
        console.log('Cache install failed:', error)
      })
  )
})

// Fetch event - network first for CSS/JS, cache for HTML
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url)
  const isAsset = url.pathname.match(/\.(css|js|png|jpg|jpeg|gif|svg|webp|woff|woff2)$/i)
  
  // For CSS/JS/assets: Network first, then cache (ensures fresh CSS)
  if (isAsset) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          // Cache the fresh response
          const responseToCache = response.clone()
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache)
          })
          return response
        })
        .catch(() => {
          // Fallback to cache if network fails
          return caches.match(event.request)
        })
    )
  } else {
    // For HTML: Cache first, then network
    event.respondWith(
      caches.match(event.request)
        .then((response) => {
          return response || fetch(event.request)
        })
        .catch(() => {
          if (event.request.mode === 'navigate') {
            return caches.match('/portfolio/')
          }
        })
    )
  }
})

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName)
            return caches.delete(cacheName)
          }
        })
      )
    }).then(() => {
      // Take control of all clients immediately
      return self.clients.claim()
    })
  )
}) 