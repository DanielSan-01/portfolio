import React, { useState, useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'
import './DarkModeToggle.css'

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Check for saved theme preference or default to system preference
    const savedTheme = localStorage.getItem('theme')
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    let initialTheme = 'dark'
    
    if (savedTheme) {
      initialTheme = savedTheme
    } else if (systemPrefersDark) {
      initialTheme = 'dark'
    }

    setIsDark(initialTheme === 'dark')
    document.documentElement.setAttribute('data-theme', initialTheme)
    
    // Also add/remove the 'dark' class for additional compatibility
    if (initialTheme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark'
    setIsDark(!isDark)
    
    // Update data-theme attribute
    document.documentElement.setAttribute('data-theme', newTheme)
    
    // Update class for additional compatibility
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    
    // Save preference
    localStorage.setItem('theme', newTheme)
    
    // Debug log
    console.log('Theme toggled to:', newTheme)
  }

  return (
    <button
      onClick={toggleTheme}
      className="dark-mode-toggle"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  )
}

export default DarkModeToggle 