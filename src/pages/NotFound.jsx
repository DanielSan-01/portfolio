import { Link } from 'react-router-dom'
import { Home, FolderOpen, ArrowLeft } from 'lucide-react'
import SEO from '../components/SEO'
import './NotFound.css'

const NotFound = () => {
  return (
    <div className="not-found">
      <SEO 
        title="Page Not Found - DanielSan Portfolio"
        description="The page you're looking for doesn't exist. Return to the portfolio homepage."
      />
      
      <div className="container-custom">
        <div className="not-found-content">
          <div className="not-found-illustration">
            <div className="error-code">404</div>
            <div className="error-message">Page Not Found</div>
          </div>
          
          <div className="not-found-text">
            <h1>Oops! This page doesn't exist</h1>
            <p>
              The page you're looking for might have been moved, deleted, or you entered the wrong URL. 
              Let's get you back on track!
            </p>
          </div>
          
          <div className="not-found-actions">
            <Link to="/classic" className="btn-primary">
              <Home size={20} />
              Go Home
            </Link>
            <Link to="/classic/projects" className="btn-secondary">
              <FolderOpen size={20} />
              View Projects
            </Link>
            <button 
              onClick={() => window.history.back()} 
              className="btn-secondary"
            >
              <ArrowLeft size={20} />
              Go Back
            </button>
          </div>
          
          <div className="not-found-suggestions">
            <h3>Popular Pages</h3>
            <ul>
              <li><Link to="/classic">Portfolio Home</Link></li>
              <li><Link to="/classic/projects">All Projects</Link></li>
              <li><Link to="/classic/project/holidaze">Holidaze Project</Link></li>
              <li><Link to="/classic/project/agency2-fork">The Spot Project</Link></li>
              <li><Link to="/classic/project/community-science-museum">Science Museum Project</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound 