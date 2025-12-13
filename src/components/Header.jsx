import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { FolderOpen, Github, Linkedin, Mail } from 'lucide-react'
import DarkModeToggle from './DarkModeToggle'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Header.css'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const Header = () => {
  const headerRef = useRef(null)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const header = headerRef.current
    if (!header) return

    // Ensure header is visible and positioned correctly initially
    // Don't set opacity here - let CSS handle it, only ensure transform
    gsap.set(header, { y: 0 })

    // Hide header on scroll down, show on scroll up
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > 100) {  // Only animate after scrolling past 100px
        if (currentScrollY > lastScrollY) {
          // Scrolling down - hide header
          gsap.to(header, {
            y: -100,
            duration: 0.3,
            ease: "power2.in"
          })
        } else {
          // Scrolling up - show header
          gsap.to(header, {
            y: 0,
            duration: 0.3,
            ease: "power2.out"
          })
        }
      } else {
        // At top of page - ensure header is visible
        gsap.to(header, {
          y: 0,
          duration: 0.3,
          ease: "power2.out"
        })
      }

      setLastScrollY(currentScrollY)
    }

    // Throttle scroll events for better performance
    let ticking = false
    const throttledScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', throttledScroll, { passive: true })

    // Initial animation - only animate y position, never touch opacity
    // Opacity is controlled by CSS only
    const tl = gsap.fromTo(header, 
      { y: -20 },  // Start position - only y position
      { 
        y: 0,
        duration: 0.6, 
        ease: "power2.out",
        delay: 0.1,
        onComplete: () => {
          // Clear any opacity inline styles GSAP might have set
          if (header.style.opacity) {
            header.style.removeProperty('opacity')
          }
        }
      }
    )

    // Cleanup
    return () => {
      window.removeEventListener('scroll', throttledScroll)
    }
  }, [lastScrollY])

  return (
    <header ref={headerRef} className="header">
      <div className="container-custom">
        <div className="header-content">
          <Link to="/" className="logo">
            <span className="logo-text">DanielSan</span>
          </Link>
          
          <nav className="nav">
            <Link to="/projects" className="nav-link">
              <FolderOpen size={20} />
              <span className="nav-text">Projects</span>
            </Link>
            
            <a 
              href="https://github.com/DanielSan-01" 
              target="_blank" 
              rel="noopener noreferrer"
              className="nav-link"
            >
              <Github size={20} />
              <span className="nav-text">GitHub</span>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/daniel-%C3%B8stensen-84483ab0/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="nav-link"
            >
              <Linkedin size={20} />
              <span className="nav-text">LinkedIn</span>
            </a>
            
            <a 
              href="mailto:danoes00993@stud.noroff.no"
              className="nav-link"
            >
              <Mail size={20} />
              <span className="nav-text">Contact</span>
            </a>

            <DarkModeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header 