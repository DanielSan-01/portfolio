import { useEffect, useRef } from 'react'
import { projects } from '../data/projects'
import { Link } from 'react-router-dom'
import { ExternalLink, Github, Calendar, Code, Star } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Projects.css'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const Projects = () => {
  const heroTitleRef = useRef(null)
  const heroDescriptionRef = useRef(null)
  const projectsGridRef = useRef(null)
  const additionalProjectsRef = useRef(null)

  useEffect(() => {
    // Hero section animation
    const heroTimeline = gsap.timeline()
    
    heroTimeline.from(heroTitleRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power2.out"
    })
    .from(heroDescriptionRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.4")

    // Animate project cards with stagger on scroll
    gsap.from(".project-big-card", {
      opacity: 0,
      y: 60,
      scale: 0.95,
      duration: 0.9,
      stagger: 0.15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: projectsGridRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    })

    // Animate additional projects section
    gsap.from(additionalProjectsRef.current, {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: additionalProjectsRef.current,
        start: "top 85%",
        toggleActions: "play none none reverse"
      }
    })

    // Cleanup
    return () => {
      heroTimeline.kill()
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div className="projects-page">
      {/* Hero Section */}
      <section className="projects-hero">
        <div className="container-custom">
          <div className="projects-hero-content">
            <h1 ref={heroTitleRef} className="projects-hero-title">My Projects</h1>
            <p ref={heroDescriptionRef} className="projects-hero-description">
              A comprehensive showcase of my development journey at Noroff Fagskole. 
              Each project represents a milestone in my learning process, demonstrating 
              different technologies, design patterns, and problem-solving approaches.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="projects-showcase">
        <div className="container-custom">
          <div ref={projectsGridRef} className="projects-big-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-big-card">
                <div className="project-big-image">
                  <img 
                    src={project.image} 
                    alt={project.title}
                  />
                </div>
                
                <div className="project-big-content">
                  <div className="project-big-header">
                    <h2 className="project-big-title">{project.title}</h2>
                    <div className="project-big-meta">
                      <span className="project-meta-item">
                        <Code size={16} />
                        {project.technologies.length} Technologies
                      </span>
                      <span className="project-meta-item">
                        <Star size={16} />
                        Featured Project
                      </span>
                    </div>
                  </div>
                  
                  <p className="project-big-description">
                    {project.description}
                  </p>
                  
                  <div className="project-big-technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-badge-big">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="project-big-actions">
                    <Link 
                      to={`/project/${project.id}`}
                      className="btn-primary"
                    >
                      View Details & Reflections
                    </Link>
                    <div className="project-external-links">
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn-secondary"
                      >
                        <ExternalLink size={18} />
                        Live Site
                      </a>
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn-secondary"
                      >
                        <Github size={18} />
                        Repository
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Projects Section */}
      <section ref={additionalProjectsRef} className="additional-projects">
        <div className="container-custom">
          <div className="additional-projects-content">
            <h2 className="additional-projects-title">More Projects Coming Soon</h2>
            <p className="additional-projects-description">
              I'm continuously working on new projects and expanding my skills. 
              Check back regularly to see my latest work, or follow me on GitHub 
              to stay updated with my development journey.
            </p>
            <div className="additional-projects-actions">
              <a 
                href="https://github.com/DanielSan-01" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <Github size={20} />
                Follow on GitHub
              </a>
              <Link to="/classic" className="btn-secondary">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects 