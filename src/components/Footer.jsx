import { Github, Linkedin, Mail } from 'lucide-react'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="footer">
      <div className="container-custom">
        <div className="footer-content">
          <div className="footer-text">
            <p className="footer-copyright">
              &copy; {currentYear} DanielSan. All rights reserved.
            </p>
            <p className="footer-subtitle">
              Frontend Development Portfolio - Noroff Fagskole
            </p>
          </div>
          
          <div className="footer-links">
            <a 
              href="https://github.com/DanielSan-01" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-link"
              aria-label="GitHub Profile"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/daniel-%C3%B8stensen-84483ab0/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-link"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:danoes00993@stud.noroff.no" 
              className="footer-link"
              aria-label="Email Contact"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 