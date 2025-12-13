import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ExternalLink } from 'lucide-react'
import LazyImage from './LazyImage'
import gsap from 'gsap'
import './ProjectCard.css'

const ProjectCard = ({ project }) => {
  const cardRef = useRef(null)
  const imageRef = useRef(null)
  const titleRef = useRef(null)

  // GSAP hover animations - smoother than CSS transitions
  const handleMouseEnter = () => {
    const card = cardRef.current
    const image = imageRef.current
    const title = titleRef.current

    // Create a timeline for coordinated hover animations
    const hoverTl = gsap.timeline()
    
    hoverTl.to(card, {
      y: -8,  // Lift card slightly
      duration: 0.4,
      ease: "power2.out"
    })
    .to(image, {
      scale: 1.05,  // Zoom image slightly
      duration: 0.5,
      ease: "power2.out"
    }, 0)  // Start at same time as card lift
    .to(title, {
      color: "var(--accent-blue, #3b82f6)",  // Change title color
      duration: 0.3,
      ease: "power2.out"
    }, 0.1)  // Start slightly after
  }

  const handleMouseLeave = () => {
    const card = cardRef.current
    const image = imageRef.current
    const title = titleRef.current

    // Reset all animations
    gsap.to(card, {
      y: 0,
      duration: 0.4,
      ease: "power2.out"
    })
    gsap.to(image, {
      scale: 1,
      duration: 0.5,
      ease: "power2.out"
    })
    gsap.to(title, {
      color: "var(--primary, inherit)",
      duration: 0.3,
      ease: "power2.out"
    })
  }

  return (
    <Link 
      to={`/project/${project.id}`} 
      className="card project-card"
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="project-image" ref={imageRef}>
        <LazyImage 
          src={project.thumbnail} 
          alt={project.title}
          className="project-image"
        />
      </div>
      
      <div className="project-content">
        <h3 ref={titleRef} className="project-title">
          {project.title}
        </h3>
        <p className="project-description">
          {project.shortDescription}
        </p>
        
        <div className="project-technologies">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span key={index} className="tech-badge">
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="tech-more">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>
        
      </div>
    </Link>
  )
}

export default ProjectCard 