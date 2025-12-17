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
  // Ensure scrolling always works - simple and direct
  useEffect(() => {
    // Force enable scrolling - override everything
    document.body.style.overflowY = 'auto'
    document.body.style.height = 'auto'
    document.documentElement.style.overflowY = 'auto'
    document.documentElement.style.height = 'auto'
    
    const root = document.getElementById('root')
    if (root) {
      root.style.height = 'auto'
      root.style.overflow = 'visible'
    }
    
    const app = document.querySelector('.App')
    if (app) {
      app.style.height = 'auto'
      app.style.overflow = 'visible'
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
          <Route path="" element={<Home />} />
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

