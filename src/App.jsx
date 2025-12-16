import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Terminal from './components/Terminal'
import ErrorBoundary from './components/ErrorBoundary'
import SkipLink from './components/SkipLink'
import Header from './components/Header'
import Footer from './components/Footer'
import SEO from './components/SEO'
import Home from './pages/Home'
import Projects from './pages/Projects'
import ProjectArticle from './pages/ProjectArticle'
import NotFound from './pages/NotFound'
import './App.css'

function App() {
  const [layoutMode, setLayoutMode] = useState('terminal') // 'terminal' | 'classic'

  // Ensure body can scroll when switching to classic layout
  useEffect(() => {
    if (layoutMode === 'classic') {
      document.body.style.overflow = 'auto'
      document.body.style.height = 'auto'
      document.documentElement.style.overflow = 'auto'
      document.documentElement.style.height = 'auto'
    }
  }, [layoutMode])

  return (
    <ErrorBoundary>
      {layoutMode === 'terminal' ? (
        <div className="App">
          <Terminal onSwitchLayout={() => setLayoutMode('classic')} />
        </div>
      ) : (
        <div className="App classic-layout">
          <SEO />
          <SkipLink />
          <Header />
          <main id="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/project/:projectId" element={<ProjectArticle />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      )}
    </ErrorBoundary>
  )
}

export default App
