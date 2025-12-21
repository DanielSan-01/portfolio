import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

// Register service worker for caching (only in production and with correct base path)
// TEMPORARILY DISABLED - Unregister all service workers to fix loading issues
if (import.meta.env.PROD && 'serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    try {
      // Unregister ALL existing service workers to fix the loading issue
      const registrations = await navigator.serviceWorker.getRegistrations()
      for (let registration of registrations) {
        await registration.unregister()
        console.log('Unregistered service worker:', registration.scope)
      }
      
      // Clear all caches
      if ('caches' in window) {
        const cacheNames = await caches.keys()
        await Promise.all(cacheNames.map(cacheName => caches.delete(cacheName)))
        console.log('Cleared all caches')
      }
      
      console.log('Service workers disabled - page should load normally now')
      
      // Service worker registration is disabled until we fix the caching strategy
      // Uncomment below to re-enable once the service worker is fixed:
      /*
      const registration = await navigator.serviceWorker.register('/portfolio/sw.js')
      console.log('SW registered: ', registration)
      */
    } catch (error) {
      console.error('Error clearing service workers: ', error)
      // Force unregister on error
      try {
        const registrations = await navigator.serviceWorker.getRegistrations()
        for (let registration of registrations) {
          await registration.unregister()
        }
      } catch (e) {
        console.error('Failed to force unregister:', e)
      }
    }
  })
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/portfolio">
      <App />
    </BrowserRouter>
  </StrictMode>,
)
