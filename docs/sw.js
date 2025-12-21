const CACHE_NAME = 'danielsan-portfolio-v3' // Updated to force cache refresh
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

// Fetch event - Pass through all requests without caching
// This prevents the service worker from blocking requests
self.addEventListener('fetch', (event) => {
  // Always fetch from network, don't use cache
  // This ensures the service worker doesn't block requests
  event.respondWith(
    fetch(event.request).catch((error) => {
      console.error('Fetch failed:', error)
      // If fetch fails, don't try cache - just let it fail naturally
      throw error
    })
  )
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
    }).catch((error) => {
      console.error('Service worker activation error:', error)
    })
  )
}) 