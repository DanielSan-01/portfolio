import { useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/projects'
import { ArrowLeft, ExternalLink, Github } from 'lucide-react'
import SEO from '../components/SEO'
import LazyImage from '../components/LazyImage'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './ProjectArticle.css'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const ProjectArticle = () => {
  const { projectId } = useParams()
  
  const project = projects.find(p => p.id === projectId)
  
  // Refs for animations
  const backLinkRef = useRef(null)
  const headerRef = useRef(null)
  const imageRef = useRef(null)
  const technologiesRef = useRef(null)
  const contentRef = useRef(null)
  const linksRef = useRef(null)
  const otherProjectsRef = useRef(null)

  useEffect(() => {
    // Use gsap.context for proper cleanup
    const ctx = gsap.context(() => {
      // Page load animation timeline - set initial states first, then animate
      const pageTimeline = gsap.timeline()
      
      if (backLinkRef.current) {
        gsap.set(backLinkRef.current, { opacity: 0, x: -20 })
        pageTimeline.to(backLinkRef.current, {
          opacity: 1,
          x: 0,
          duration: 0.5,
          ease: "power2.out"
        })
      }

      if (headerRef.current && headerRef.current.children.length > 0) {
        const headerChildren = headerRef.current.children
        gsap.set(headerChildren, { opacity: 0, y: 30 })
        pageTimeline.to(headerChildren, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out"
        }, "-=0.2")
      }

      if (imageRef.current) {
        gsap.set(imageRef.current, { opacity: 0, scale: 0.95 })
        pageTimeline.to(imageRef.current, {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power2.out"
        }, "-=0.4")
      }

      // Animate sections on scroll - check if already visible first
      const sections = [
        { ref: technologiesRef, delay: 0.1 },
        { ref: contentRef, delay: 0.2 },
        { ref: linksRef, delay: 0.15 },
        { ref: otherProjectsRef, delay: 0.1 }
      ]

      sections.forEach(({ ref, delay }) => {
        if (ref.current) {
          const children = ref.current.children
          if (children.length === 0) return

          // Check if already in viewport
          const rect = ref.current.getBoundingClientRect()
          const isVisible = rect.top < window.innerHeight * 0.9

          if (isVisible) {
            // Already visible - animate immediately
            gsap.to(children, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.1,
              ease: "power2.out",
              delay: 0.5
            })
          } else {
            // Not visible - use scroll trigger
            gsap.set(children, { opacity: 0, y: 40 })
            gsap.to(children, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: ref.current,
                start: "top 80%",
                toggleActions: "play none none none"
              }
            })
          }
        }
      })

      // Animate technology badges
      if (technologiesRef.current) {
        const badges = gsap.utils.toArray(".tech-badge")
        if (badges.length > 0) {
          const rect = technologiesRef.current.getBoundingClientRect()
          const isVisible = rect.top < window.innerHeight * 0.9

          if (isVisible) {
            gsap.to(badges, {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 0.5,
              stagger: 0.05,
              ease: "back.out(1.7)",
              delay: 0.6
            })
          } else {
            gsap.set(badges, { opacity: 0, scale: 0.8, y: 20 })
            gsap.to(badges, {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 0.5,
              stagger: 0.05,
              ease: "back.out(1.7)",
              scrollTrigger: {
                trigger: technologiesRef.current,
                start: "top 85%",
                toggleActions: "play none none none"
              }
            })
          }
        }
      }

      // Refresh ScrollTrigger after a short delay
      setTimeout(() => {
        ScrollTrigger.refresh()
      }, 100)
    })

    // Cleanup
    return () => {
      ctx.revert()
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [projectId])
  
  if (!project) {
    return (
      <div className="project-not-found">
        <div className="container-custom">
          <h1>Project Not Found</h1>
          <p>The project you're looking for doesn't exist.</p>
          <Link to="/" className="btn-primary">
            <ArrowLeft size={20} />
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <article className="project-article">
      <SEO 
        title={`${project.title} - DanielSan Portfolio`}
        description={project.description}
        keywords={`${project.technologies.join(', ')}, project, portfolio, danielsan`}
      />
      <div className="container-custom">
        {/* Back Navigation */}
        <Link ref={backLinkRef} to="/" className="back-link">
          <ArrowLeft size={20} />
          Back to Portfolio
        </Link>

        {/* Article Header */}
        <header ref={headerRef} className="article-header">
          <h1 className="article-title">{project.title}</h1>
          <p className="article-description">{project.description}</p>
          
          <div className="article-actions">
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <ExternalLink size={20} />
              View Live Site
            </a>
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <Github size={20} />
              View Repository
            </a>
          </div>
        </header>

        {/* Project Image */}
        <div ref={imageRef} className="article-image">
          <div className="image-container">
            <LazyImage 
              src={project.image} 
              alt={project.title}
              className="project-image"
            />
          </div>
          <p className="image-caption">{project.imageCaption}</p>
        </div>

        {/* Technologies */}
        <div ref={technologiesRef} className="technologies-section">
          <h2>Technologies Used</h2>
          <div className="technologies-grid">
            {project.technologies.map((tech, index) => (
              <span key={index} className="tech-badge">{tech}</span>
            ))}
          </div>
        </div>

        {/* Main Content - Reflections */}
        <div ref={contentRef} className="article-content">
          <div 
            className="reflections-content"
            dangerouslySetInnerHTML={{ __html: project.reflections }}
          />
        </div>

        {/* Project Links */}
        <div ref={linksRef} className="project-links">
          <h2>Project Resources</h2>
          <div className="links-grid">
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="resource-link"
            >
              <ExternalLink size={24} />
              <div>
                <h3>Live Website</h3>
                <p>View the deployed application</p>
              </div>
            </a>
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="resource-link"
            >
              <Github size={24} />
              <div>
                <h3>GitHub Repository</h3>
                <p>Explore the source code and README</p>
              </div>
            </a>
          </div>
        </div>

        {/* Navigation to other projects */}
        <div ref={otherProjectsRef} className="other-projects">
          <h2>Other Projects</h2>
          <div className="other-projects-grid">
            {projects
              .filter(p => p.id !== projectId)
              .map(otherProject => (
                <Link 
                  key={otherProject.id}
                  to={`/project/${otherProject.id}`}
                  className="other-project-card"
                >
                  <img 
                    src={otherProject.thumbnail} 
                    alt={otherProject.title}
                  />
                  <div className="other-project-info">
                    <h3>{otherProject.title}</h3>
                    <p>{otherProject.shortDescription}</p>
                  </div>
                </Link>
              ))
            }
          </div>
        </div>
      </div>
    </article>
  )
}

export default ProjectArticle 