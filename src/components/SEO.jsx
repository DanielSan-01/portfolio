import { useEffect } from 'react'

const SEO = ({ 
  title = 'DanielSan - Frontend Developer Portfolio',
  description = 'Frontend Developer Portfolio showcasing React projects from Noroff Fagskole. Featuring Holidaze, The Spot, and Community Science Museum.',
  keywords = 'frontend developer, portfolio, react, javascript, web development, projects, noroff, bergen, danielsan',
  image = '/vite.svg',
  url = window.location.href
}) => {
  useEffect(() => {
    // Update document title
    document.title = title

    // Update meta tags
    const updateMetaTag = (name, content, property = false) => {
      const attribute = property ? 'property' : 'name'
      let element = document.querySelector(`meta[${attribute}="${name}"]`)
      
      if (element) {
        element.setAttribute('content', content)
      } else {
        element = document.createElement('meta')
        element.setAttribute(attribute, name)
        element.setAttribute('content', content)
        document.head.appendChild(element)
      }
    }

    // Standard meta tags
    updateMetaTag('description', description)
    updateMetaTag('keywords', keywords)

    // Open Graph tags
    updateMetaTag('og:title', title, true)
    updateMetaTag('og:description', description, true)
    updateMetaTag('og:image', image, true)
    updateMetaTag('og:url', url, true)
    updateMetaTag('og:type', 'website', true)

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image')
    updateMetaTag('twitter:title', title)
    updateMetaTag('twitter:description', description)
    updateMetaTag('twitter:image', image)

    // Additional SEO tags
    updateMetaTag('author', 'DanielSan')
    updateMetaTag('robots', 'index, follow')
    updateMetaTag('language', 'English')
    updateMetaTag('revisit-after', '7 days')

  }, [title, description, keywords, image, url])

  return null
}

export default SEO 