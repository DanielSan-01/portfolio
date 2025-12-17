import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import SEO from '../components/SEO'
import SkipLink from '../components/SkipLink'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Home from './Home'
import Projects from './Projects'
import ProjectArticle from './ProjectArticle'
import NotFound from './NotFound'
import './Classic.css'

const Classic = () => {
  // Ensure body and html can scroll when classic layout is active
  useEffect(() => {
    // Add class to html, body, root, and App for CSS targeting
    document.documentElement.classList.add('classic-active')
    document.body.classList.add('classic-active')
    const root = document.getElementById('root')
    const app = root?.querySelector('.App')
    if (root) {
      root.classList.add('classic-active')
    }
    if (app) {
      app.classList.add('classic-active')
    }
    
    // Force enable scrolling with !important via inline styles
    document.body.style.setProperty('overflow-y', 'auto', 'important')
    document.body.style.setProperty('overflow-x', 'hidden', 'important')
    document.body.style.setProperty('height', 'auto', 'important')
    document.body.style.setProperty('max-height', 'none', 'important')
    document.body.style.setProperty('position', 'static', 'important')
    
    document.documentElement.style.setProperty('overflow-y', 'auto', 'important')
    document.documentElement.style.setProperty('overflow-x', 'hidden', 'important')
    document.documentElement.style.setProperty('height', 'auto', 'important')
    document.documentElement.style.setProperty('max-height', 'none', 'important')
    document.documentElement.style.setProperty('position', 'static', 'important')
    
    // Also ensure root and App can grow
    if (root) {
      root.style.setProperty('height', 'auto', 'important')
      root.style.setProperty('overflow', 'visible', 'important')
      root.style.setProperty('max-height', 'none', 'important')
      root.style.setProperty('min-height', 'auto', 'important')
    }
    
    if (app) {
      app.style.setProperty('height', 'auto', 'important')
      app.style.setProperty('overflow', 'visible', 'important')
      app.style.setProperty('max-height', 'none', 'important')
      app.style.setProperty('min-height', 'auto', 'important')
    }
    
    // Force a reflow to ensure styles are applied
    void document.body.offsetHeight
    
    // Ensure touch-action allows scrolling (for mobile)
    document.body.style.setProperty('touch-action', 'pan-y', 'important')
    document.documentElement.style.setProperty('touch-action', 'pan-y', 'important')
    
    // Test if scrolling is possible by checking scrollHeight
    setTimeout(() => {
      const canScroll = document.documentElement.scrollHeight > document.documentElement.clientHeight ||
                        document.body.scrollHeight > document.body.clientHeight
      
      // Debug: log to console to verify this is running
      console.log('Classic layout scroll fix applied', {
        bodyOverflow: getComputedStyle(document.body).overflow,
        htmlOverflow: getComputedStyle(document.documentElement).overflow,
        rootHeight: root?.style.height,
        bodyHeight: getComputedStyle(document.body).height,
        htmlHeight: getComputedStyle(document.documentElement).height,
        scrollHeight: document.documentElement.scrollHeight,
        clientHeight: document.documentElement.clientHeight,
        canScroll: canScroll,
        bodyScrollHeight: document.body.scrollHeight,
        bodyClientHeight: document.body.clientHeight
      })
      
      // If we can't scroll but content is taller, force it
      if (!canScroll && document.documentElement.scrollHeight > document.documentElement.clientHeight) {
        console.warn('Content is taller than viewport but scrolling is blocked. Forcing scroll.')
        // Try to scroll programmatically to test
        window.scrollTo(0, 1)
        setTimeout(() => window.scrollTo(0, 0), 100)
      }
    }, 100)
    
    return () => {
      // Cleanup on unmount
      document.documentElement.classList.remove('classic-active')
      document.body.classList.remove('classic-active')
      if (root) {
        root.classList.remove('classic-active')
      }
      if (app) {
        app.classList.remove('classic-active')
      }
      document.body.style.removeProperty('overflow-y')
      document.body.style.removeProperty('overflow-x')
      document.body.style.removeProperty('height')
      document.body.style.removeProperty('max-height')
      document.body.style.removeProperty('position')
      document.documentElement.style.removeProperty('overflow-y')
      document.documentElement.style.removeProperty('overflow-x')
      document.documentElement.style.removeProperty('height')
      document.documentElement.style.removeProperty('max-height')
      document.documentElement.style.removeProperty('position')
      if (root) {
        root.style.removeProperty('height')
        root.style.removeProperty('overflow')
        root.style.removeProperty('max-height')
        root.style.removeProperty('min-height')
      }
      if (app) {
        app.style.removeProperty('height')
        app.style.removeProperty('overflow')
        app.style.removeProperty('max-height')
        app.style.removeProperty('min-height')
      }
    }
  }, [])

  return (
    <div className="classic-layout">
      <SEO />
      <SkipLink />
      <Header />
      <main id="main-content">
        <Routes>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="project/:projectId" element={<ProjectArticle />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default Classic

