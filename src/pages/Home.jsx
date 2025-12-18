import { useEffect, useRef } from 'react'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import { Code, Palette, Zap } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { staggerScrollReveal } from '../utils/gsapAnimations'
import './Home.css'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const Home = () => {
  // Refs for hero section elements (GSAP needs DOM references)
  const heroTitleRef = useRef(null)
  const heroDescriptionRef = useRef(null)
  const heroFeaturesRef = useRef(null)
  const projectsGridRef = useRef(null)
  const languagesGridRef = useRef(null)
  const aboutSectionRef = useRef(null)
  const featuredProjectRef = useRef(null)
  
  // Get CS Inventory Tracker project
  const csTrackerProject = projects.find(p => p.id === 'cs-inventory-tracker')

  useEffect(() => {
    // Wait for next tick to ensure DOM is ready
    const ctx = gsap.context(() => {
      // Hero section timeline - animates title, description, then features sequentially
      if (heroTitleRef.current && heroDescriptionRef.current && heroFeaturesRef.current) {
        const heroTimeline = gsap.timeline()

        // Animate title first (fade in + slide up)
        heroTimeline.from(heroTitleRef.current, {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: "power2.out"
        })
        // Animate description (starts 0.3s before title animation ends - overlap)
        .from(heroDescriptionRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.8,
          ease: "power2.out"
        }, "-=0.4")  // "-=0.4" means start 0.4s before previous animation ends
        // Animate features with stagger (each feature animates with a delay)
        .from(heroFeaturesRef.current.children, {
          opacity: 0,
          y: 20,
          duration: 0.6,
          stagger: 0.2,  // 0.2s delay between each feature
          ease: "power2.out"
        }, "-=0.3")
      }

      // Animate project cards - always animate, whether scrolling or already visible
      if (projectsGridRef.current) {
        // Use requestAnimationFrame to ensure DOM is ready
        requestAnimationFrame(() => {
          const cards = gsap.utils.toArray(".project-card")
          
          if (cards.length === 0) return // Safety check
          
          // Ensure initial state is set (CSS might not be applied yet)
          gsap.set(cards, { opacity: 0, y: 50 })
          
          // Check if section is already in viewport
          const rect = projectsGridRef.current.getBoundingClientRect()
          const isVisible = rect.top < window.innerHeight * 0.9
          
          if (isVisible) {
            // Already visible - animate after hero animation completes
            gsap.to(cards, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.15,
              ease: "power2.out",
              delay: 1.2  // Wait for hero animation to finish
            })
          } else {
            // Not visible - use scroll trigger
            gsap.to(cards, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.15,
              ease: "power2.out",
              scrollTrigger: {
                trigger: projectsGridRef.current,
                start: "top 85%",
                toggleActions: "play none none none"
              }
            })
          }
        })
      }

      // Animate about section on scroll
      if (aboutSectionRef.current) {
        gsap.from(aboutSectionRef.current, {
          opacity: 0,
          y: 40,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: aboutSectionRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        })
      }

      // Animate language grid items on scroll with stagger
      if (languagesGridRef.current) {
        gsap.from(".language-item", {
          opacity: 0,
          scale: 0.8,
          y: 30,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",  // Bouncy easing effect
          scrollTrigger: {
            trigger: languagesGridRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        })
      }

      // Animate featured project section
      if (featuredProjectRef.current) {
        gsap.from(featuredProjectRef.current, {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: featuredProjectRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        })
      }

      // Refresh ScrollTrigger after a short delay to ensure all elements are registered
      setTimeout(() => {
        ScrollTrigger.refresh()
      }, 100)
    })

    // Cleanup function - kills animations when component unmounts
    return () => {
      ctx.revert() // This kills all animations created in the context
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container-custom">
          <div className="hero-content">
            <h1 ref={heroTitleRef} className="hero-title">
              DanielSan
            </h1>
            <p ref={heroDescriptionRef} className="hero-description">
              Frontend Developer student at Noroff Fagskole, passionate about creating beautiful, 
              functional, and user-friendly web applications using modern technologies and best practices.
            </p>
            <div ref={heroFeaturesRef} className="hero-features">
              <div className="feature">
                <Code size={24} />
                <span>Clean Code</span>
              </div>
              <div className="feature">
                <Palette size={24} />
                <span>Modern Design</span>
              </div>
              <div className="feature">
                <Zap size={24} />
                <span>Performance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project - CS Inventory Tracker */}
      {csTrackerProject && (
        <section ref={featuredProjectRef} className="featured-project-section">
          <div className="container-custom">
            <div className="featured-project-content">
              <div className="featured-project-image">
                <img 
                  src={csTrackerProject.thumbnail} 
                  alt={csTrackerProject.imageCaption}
                  className="featured-project-img"
                />
              </div>
              <div className="featured-project-text">
                <h2 className="featured-project-title">{csTrackerProject.title}</h2>
                <p className="featured-project-description">
                  {csTrackerProject.shortDescription}
                </p>
                <div className="featured-project-tech">
                  <h3>Technologies Used:</h3>
                  <div className="tech-tags">
                    {csTrackerProject.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                <div className="featured-project-links">
                  {csTrackerProject.liveUrl && (
                    <a 
                      href={csTrackerProject.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      View Live Site
                    </a>
                  )}
                  {csTrackerProject.githubUrl && (
                    <a 
                      href={csTrackerProject.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-secondary"
                    >
                      View on GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Projects Section */}
      <section className="projects-section">
        <div className="container-custom">
          <div className="section-header">
            <h2 className="section-title">My School Work</h2>
            <p className="section-description">
              A showcase of my projects from Noroff Fagskole demonstrating skills in React development, 
              modern web technologies, and responsive design principles.
            </p>
          </div>
          
          <div ref={projectsGridRef} className="projects-grid">
            {projects.filter(p => p.id !== 'cs-inventory-tracker').slice(0, 3).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutSectionRef} className="about-section">
        <div className="container-custom">
          <div className="about-content">
            <h2 className="about-title">About This Portfolio</h2>
            <div className="about-text">
              <p>
                This portfolio showcases three key projects from my Frontend Development studies at Noroff Fagskole: 
                Holidaze (venue booking platform), The Spot (event platform website), and Community Science Museum. Each project 
                demonstrates my growth as a developer and includes detailed reflections on the 
                learning process, challenges faced, and improvements made based on feedback.
              </p>
              <p>
                Built with React and modern web technologies, this portfolio itself represents 
                my current skills in creating responsive, accessible, and performant web applications. 
                Currently studying in Bergen, Norway, I'm passionate about frontend development and continuously learning new technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Languages and Tools Section */}
      <section className="languages-section">
        <div className="container-custom">
          <div className="section-header">
            <h2 className="section-title">
              <Code size={32} />
              Languages and Tools
            </h2>
            <p className="section-description">
              Technologies and design tools I use to create modern, responsive web applications from concept to deployment
            </p>
          </div>
          
          <div ref={languagesGridRef} className="languages-grid">
            <div className="language-item">
              <div className="language-icon html">
                <span>HTML5</span>
              </div>
              <span className="language-name">HTML5</span>
            </div>
            
            <div className="language-item">
              <div className="language-icon css">
                <span>CSS</span>
              </div>
              <span className="language-name">CSS</span>
            </div>
            
            <div className="language-item">
              <div className="language-icon js">
                <span>JS</span>
              </div>
              <span className="language-name">JavaScript</span>
            </div>
            
            <div className="language-item">
              <div className="language-icon react">
                <span>⚛️</span>
              </div>
              <span className="language-name">React</span>
            </div>
            
            <div className="language-item">
              <div className="language-icon vite">
                <span>⚡</span>
              </div>
              <span className="language-name">Vite</span>
            </div>
            
            <div className="language-item">
              <div className="language-icon tailwind">
                <span>TW</span>
              </div>
              <span className="language-name">Tailwind CSS</span>
            </div>
            
            <div className="language-item">
              <div className="language-icon figma">
                <span>🎨</span>
              </div>
              <span className="language-name">Figma</span>
            </div>
            
            <div className="language-item">
              <div className="language-icon illustrator">
                <span>Ai</span>
              </div>
              <span className="language-name">Illustrator</span>
            </div>
            
            <div className="language-item">
              <div className="language-icon photoshop">
                <span>Ps</span>
              </div>
              <span className="language-name">Photoshop</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home 