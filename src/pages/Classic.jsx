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
    // Add class to html and body for CSS targeting
    document.documentElement.classList.add('classic-active')
    document.body.classList.add('classic-active')
    const root = document.getElementById('root')
    if (root) {
      root.classList.add('classic-active')
    }
    
    // Force enable scrolling with !important via inline styles
    document.body.style.setProperty('overflow', 'auto', 'important')
    document.body.style.setProperty('height', 'auto', 'important')
    document.body.style.setProperty('max-height', 'none', 'important')
    document.documentElement.style.setProperty('overflow', 'auto', 'important')
    document.documentElement.style.setProperty('height', 'auto', 'important')
    document.documentElement.style.setProperty('max-height', 'none', 'important')
    
    // Also ensure root can grow
    if (root) {
      root.style.setProperty('height', 'auto', 'important')
      root.style.setProperty('overflow', 'visible', 'important')
      root.style.setProperty('max-height', 'none', 'important')
    }
    
    // Force a reflow to ensure styles are applied
    void document.body.offsetHeight
    
    return () => {
      // Cleanup on unmount
      document.documentElement.classList.remove('classic-active')
      document.body.classList.remove('classic-active')
      if (root) {
        root.classList.remove('classic-active')
      }
      document.body.style.removeProperty('overflow')
      document.body.style.removeProperty('height')
      document.body.style.removeProperty('max-height')
      document.documentElement.style.removeProperty('overflow')
      document.documentElement.style.removeProperty('height')
      document.documentElement.style.removeProperty('max-height')
      if (root) {
        root.style.removeProperty('height')
        root.style.removeProperty('overflow')
        root.style.removeProperty('max-height')
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

