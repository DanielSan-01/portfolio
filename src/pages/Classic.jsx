import { Routes, Route } from 'react-router-dom'
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

