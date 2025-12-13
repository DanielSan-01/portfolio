import { useState, useRef, useEffect } from 'react'
import LoadingSpinner from './LoadingSpinner'
import { ImageOff } from 'lucide-react'
import './LazyImage.css'

const LazyImage = ({ 
  src, 
  alt, 
  className = '', 
  placeholder = null,
  fallback = null 
}) => {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const imgRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleLoad = () => {
    setIsLoading(false)
    setHasError(false)
  }

  const handleError = () => {
    setIsLoading(false)
    setHasError(true)
  }

  const renderFallback = () => {
    if (fallback) return fallback
    
    return (
      <div className="lazy-image-fallback">
        <ImageOff size={48} color="#9ca3af" />
        <p>Image unavailable</p>
      </div>
    )
  }

  const renderPlaceholder = () => {
    if (placeholder) return placeholder
    
    return (
      <div className="lazy-image-placeholder">
        <LoadingSpinner size="small" text="" />
      </div>
    )
  }

  return (
    <div ref={imgRef} className={`lazy-image-container ${className}`}>
      {!isInView ? (
        renderPlaceholder()
      ) : hasError ? (
        renderFallback()
      ) : (
        <>
          {isLoading && renderPlaceholder()}
          <img
            src={src}
            alt={alt}
            onLoad={handleLoad}
            onError={handleError}
            className={`lazy-image ${isLoading ? 'lazy-image-loading' : 'lazy-image-loaded'}`}
            loading="lazy"
          />
        </>
      )}
    </div>
  )
}

export default LazyImage 