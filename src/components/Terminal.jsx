import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { projects } from '../data/projects'
import './Terminal.css'

const ASCII_BANNER = `__╱╲╲╲╲╲╲╲╲╲╲╲╲_______________________________________________________╱╲╲╲╲╲╲________╱╲╲╲╲╲╲╲╲╲╲╲_________________________________╱╲╲╲╲________________________         
 _╲╱╲╲╲╱╱╱╱╱╱╱╱╲╲╲____________________________________________________╲╱╱╱╱╲╲╲______╱╲╲╲╱╱╱╱╱╱╱╱╱╲╲╲______________________________╲╱╱╱╲╲________________________        
  _╲╱╲╲╲______╲╱╱╲╲╲_______________________________╱╲╲╲___________________╲╱╲╲╲_____╲╱╱╲╲╲______╲╱╱╱________________________________╱╲╲╱_________________________       
   _╲╱╲╲╲_______╲╱╲╲╲__╱╲╲╲╲╲╲╲╲╲_____╱╲╲╱╲╲╲╲╲╲___╲╱╱╱______╱╲╲╲╲╲╲╲╲_____╲╱╲╲╲______╲╱╱╱╱╲╲╲__________╱╲╲╲╲╲╲╲╲╲_____╱╲╲╱╲╲╲╲╲╲___╲╱╱_____╱╲╲╲╲╲╲╲╲╲╲___________      
    _╲╱╲╲╲_______╲╱╲╲╲_╲╱╱╱╱╱╱╱╱╲╲╲___╲╱╲╲╲╱╱╱╱╲╲╲___╱╲╲╲___╱╲╲╲╱╱╱╱╱╲╲╲____╲╱╲╲╲_________╲╱╱╱╱╲╲╲______╲╱╱╱╱╱╱╱╱╲╲╲___╲╱╲╲╲╱╱╱╱╲╲╲_________╲╱╲╲╲╱╱╱╱╱╱____________     
     _╲╱╲╲╲_______╲╱╲╲╲___╱╲╲╲╲╲╲╲╲╲╲__╲╱╲╲╲__╲╱╱╲╲╲_╲╱╲╲╲__╱╲╲╲╲╲╲╲╲╲╲╲_____╲╱╲╲╲____________╲╱╱╱╱╲╲╲_____╱╲╲╲╲╲╲╲╲╲╲__╲╱╲╲╲__╲╱╱╲╲╲________╲╱╲╲╲╲╲╲╲╲╲╲___________    
      _╲╱╲╲╲_______╱╲╲╲___╱╲╲╲╱╱╱╱╱╲╲╲__╲╱╲╲╲___╲╱╲╲╲_╲╱╲╲╲_╲╱╱╲╲╱╱╱╱╱╱╱______╲╱╲╲╲_____╱╲╲╲______╲╱╱╲╲╲___╱╲╲╲╱╱╱╱╱╲╲╲__╲╱╲╲╲___╲╱╲╲╲________╲╱╱╱╱╱╱╱╱╲╲╲___________   
       _╲╱╲╲╲╲╲╲╲╲╲╲╲╲╱___╲╱╱╲╲╲╲╲╲╲╲╱╲╲_╲╱╲╲╲___╲╱╲╲╲_╲╱╲╲╲__╲╱╱╲╲╲╲╲╲╲╲╲╲__╱╲╲╲╲╲╲╲╲╲_╲╱╱╱╲╲╲╲╲╲╲╲╲╲╲╱___╲╱╱╲╲╲╲╲╲╲╲╱╲╲_╲╱╲╲╲___╲╱╲╲╲_________╱╲╲╲╲╲╲╲╲╲╲___________  
        _╲╱╱╱╱╱╱╱╱╱╱╱╱______╲╱╱╱╱╱╱╱╱╲╱╱__╲╱╱╱____╲╱╱╱__╲╱╱╱____╲╱╱╱╱╱╱╱╱╱╱__╲╱╱╱╱╱╱╱╱╱____╲╱╱╱╱╱╱╱╱╱╱╱______╲╱╱╱╱╱╱╱╱╲╱╱__╲╱╱╱____╲╱╱╱_________╲╱╱╱╱╱╱╱╱╱╱____________ 
 ____________╱╲╲╲╲╲╲╲╲╲╲╲╲╲╲╲╲____________________________________________________╱╲╲╲╲╲________________╱╲╲╲╲╲╲________________________                                    
  ___________╲╱╲╲╲╱╱╱╱╱╱╱╱╱╲╲╲________________________________________________╱╲╲╲╱╱╱________________╲╱╱╱╱╲╲╲________________________                                   
   ___________╲╱╲╲╲_______╲╱╲╲╲_________________________________╱╲╲╲__________╱╲╲╲_______________________╲╱╲╲╲_____╱╲╲╲_______________                                  
    ___________╲╱╲╲╲╲╲╲╲╲╲╲╲╲╲╱______╱╲╲╲╲╲_____╱╲╲╱╲╲╲╲╲╲╲___╱╲╲╲╲╲╲╲╲╲╲╲__╱╲╲╲╲╲╲╲╲╲_______╱╲╲╲╲╲_______╲╱╲╲╲____╲╱╱╱______╱╲╲╲╲╲____                                 
     ___________╲╱╲╲╲╱╱╱╱╱╱╱╱╱______╱╲╲╲╱╱╱╲╲╲__╲╱╲╲╲╱╱╱╱╱╲╲╲_╲╱╱╱╱╲╲╲╱╱╱╱__╲╱╱╱╱╲╲╲╱╱______╱╲╲╲╱╱╱╲╲╲_____╲╱╲╲╲_____╱╲╲╲___╱╲╲╲╱╱╱╲╲╲__                                
      ___________╲╱╲╲╲______________╱╲╲╲__╲╱╱╲╲╲_╲╱╲╲╲___╲╱╱╱_____╲╱╲╲╲_________╲╱╲╲╲_______╱╲╲╲__╲╱╱╲╲╲____╲╱╲╲╲____╲╱╲╲╲__╱╲╲╲__╲╱╱╲╲╲_                               
       ___________╲╱╲╲╲_____________╲╱╱╲╲╲__╱╲╲╲__╲╱╲╲╲____________╲╱╲╲╲_╱╲╲_____╲╱╲╲╲______╲╱╱╲╲╲__╱╲╲╲_____╲╱╲╲╲____╲╱╲╲╲_╲╱╱╲╲╲__╱╲╲╲__                              
        ___________╲╱╲╲╲______________╲╱╱╱╲╲╲╲╲╱___╲╱╲╲╲____________╲╱╱╲╲╲╲╲______╲╱╲╲╲_______╲╱╱╱╲╲╲╲╲╱____╱╲╲╲╲╲╲╲╲╲_╲╱╲╲╲__╲╱╱╱╲╲╲╲╲╱___                             
         ___________╲╱╱╱_________________╲╱╱╱╱╱_____╲╱╱╱______________╲╱╱╱╱╱_______╲╱╱╱__________╲╱╱╱╱╱_____╲╱╱╱╱╱╱╱╱╱__╲╱╱╱_____╲╱╱╱╱╱_____                            `

const Terminal = () => {
  const navigate = useNavigate()
  // Welcome message
  const welcomeMessage = {
    type: 'output',
    content: [
      '',
      'Hello, my name is Daniel. Welcome to my portfolio.',
      'Frontend Developer, Bergen, Norway',
      { type: 'links', links: [
        { text: 'GitHub', url: 'https://github.com/DanielSan-01' },
        { text: 'Email', url: 'mailto:danielsanprog@gmail.com' },
        { text: 'LinkedIn', url: 'https://www.linkedin.com/in/daniel-%C3%B8stensen-84483ab0/' }
      ]},
      '',
      'Type "help" for possible commands!',
      ''
    ]
  }

  const [commandHistory, setCommandHistory] = useState([welcomeMessage])
  const [executedCommands, setExecutedCommands] = useState([]) // Store executed commands for history
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [currentInput, setCurrentInput] = useState('')
  const [windowWidth, setWindowWidth] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth
    }
    return 1024
  })
  const inputRef = useRef(null)
  const terminalRef = useRef(null)
  const outputRef = useRef(null)
  const bannerRef = useRef(null)
  const cursorRef = useRef(null)

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    handleResize() // Set initial width
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Focus input on mount
  useEffect(() => {
    setTimeout(() => {
      inputRef.current?.focus()
    }, 100)
  }, [])

  // Auto-scroll to bottom when new output is added
  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight
    }
  }, [commandHistory])

  // Update cursor position based on input text width
  useEffect(() => {
    const updateCursorPosition = () => {
      if (inputRef.current && cursorRef.current) {
        const input = inputRef.current
        const canvas = document.createElement('canvas')
        const context = canvas.getContext('2d')
        context.font = getComputedStyle(input).font
        const textWidth = context.measureText(input.value).width
        cursorRef.current.style.left = `${textWidth}px`
      }
    }
    
    updateCursorPosition()
    const input = inputRef.current
    if (input) {
      input.addEventListener('input', updateCursorPosition)
      return () => input.removeEventListener('input', updateCursorPosition)
    }
  }, [currentInput])

  const executeCommand = (cmd) => {
    const command = cmd.trim().toLowerCase()
    let output = []

    switch (command) {
      case 'help':
        output = [
          'DanielSan bash, version 1.0.0',
          'These shell commands are defined internally.',
          "Type 'help' to see this list.",
          '',
          'Available commands:',
          '  help          - Show this help message',
          '  projects      - List all projects',
          '  contact       - How to reach me',
          '  clear         - Clear the terminal',
          '  classic       - Switch to classic layout',
          ''
        ]
        break

      case 'projects':
        output = [
          'Projects I\'ve worked on:',
          ''
        ]
        
        // Project dates mapping
        const projectDates = {
          'cs-inventory-tracker': 'Sept 2024-Present',
          'holidaze': 'May 2024-Jun 2024',
          'agency2-fork': 'Mar 2024-Apr 2024',
          'community-science-museum': 'Jan 2024-Feb 2024'
        }
        
        // Helper function to split description into bullet points
        const splitDescription = (description) => {
          // Split by periods and filter out empty strings
          const sentences = description
            .split(/\.\s+/)
            .filter(s => s.trim().length > 0)
            .map(s => s.trim().replace(/\.$/, '')) // Remove trailing period if any
          
          return sentences
        }
        
        // Helper function to format project
        const formatProject = (project) => {
          const lines = []
          const descriptionPoints = splitDescription(project.shortDescription)
          
          // Title as link to live site (if available), otherwise just title
          if (project.liveUrl) {
            lines.push({ type: 'title-link', title: project.title, url: project.liveUrl })
          } else {
            lines.push(project.title)
          }
          
          // GitHub link
          lines.push(' - ')
          lines.push({ type: 'links', links: [{ text: 'GitHub', url: project.githubUrl }] })
          
          lines.push(`    ${project.technologies.join(', ')}`)
          lines.push('')
          
          // Description as bullet points with 8 spaces indentation (twice)
          descriptionPoints.forEach(point => {
            lines.push(`        • ${point}`)
          })
          lines.push('')
          
          return lines
        }
        
        // Show CS Inventory Tracker first (main project)
        const csTracker = projects.find(p => p.id === 'cs-inventory-tracker')
        if (csTracker) {
          output.push(...formatProject(csTracker))
        }
        
        // Then show earlier projects (excluding auction-house as it's not in the example)
        projects
          .filter(p => p.id !== 'cs-inventory-tracker' && p.id !== 'auction-house')
          .forEach((project) => {
            output.push(...formatProject(project))
          })
        break

      case 'contact':
        output = [
          'How to reach me:',
          '',
          '  • Portfolio: /portofolio-website',
          '  • LinkedIn: https://www.linkedin.com/in/daniel-%C3%B8stensen-84483ab0/',
          '  • GitHub: https://github.com/DanielSan-01',
          '  • Email: danielsanprog@gmail.com',
          ''
        ]
        break

      case 'clear':
        // Clear everything except the welcome message
        setCommandHistory([welcomeMessage])
        return

      case 'classic':
        output = [
          'Switching to classic layout...',
          ''
        ]
        // Add command and output to history before navigating
        setCommandHistory(prev => [
          ...prev,
          { type: 'command', content: cmd },
          { type: 'output', content: output }
        ])

        if (cmd.trim()) {
          setExecutedCommands(prev => {
            const newHistory = [...prev, cmd]
            return newHistory.slice(-50)
          })
        }

        setHistoryIndex(-1)
        // Navigate to classic route after a short delay to show the message
        setTimeout(() => {
          navigate('/classic')
          // Fallback: if navigate doesn't work, use window.location
          setTimeout(() => {
            if (window.location.pathname !== '/portfolio/classic' && window.location.pathname !== '/classic') {
              window.location.href = '/portfolio/classic'
            }
          }, 100)
        }, 500)
        return

      case '':
        // Empty command, just show prompt
        return

      default:
        output = [
          `bash: ${cmd}: command not found`,
          'Type "help" for available commands.',
          ''
        ]
    }

    // Add command and output to history
    setCommandHistory(prev => [
      ...prev,
      { type: 'command', content: cmd },
      { type: 'output', content: output }
    ])
    
    // Add to executed commands history
    if (cmd.trim()) {
      setExecutedCommands(prev => {
        const newHistory = [...prev, cmd]
        // Keep only last 50 commands
        return newHistory.slice(-50)
      })
    }
    setHistoryIndex(-1)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!currentInput.trim()) return

    executeCommand(currentInput)
    setCurrentInput('')
    setHistoryIndex(-1)
    inputRef.current?.focus()
  }

  const handleKeyDown = (e) => {
    // Handle Ctrl+L for clear
    if (e.ctrlKey && e.key === 'l') {
      e.preventDefault()
      // Clear everything except the welcome message
      setCommandHistory([welcomeMessage])
      setExecutedCommands([])
      setHistoryIndex(-1)
      return
    }

    // Handle up/down arrow for command history
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (executedCommands.length > 0) {
        const newIndex = historyIndex === -1 
          ? executedCommands.length - 1 
          : Math.max(0, historyIndex - 1)
        setHistoryIndex(newIndex)
        setCurrentInput(executedCommands[newIndex])
      }
      return
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1
        if (newIndex >= executedCommands.length) {
          setHistoryIndex(-1)
          setCurrentInput('')
        } else {
          setHistoryIndex(newIndex)
          setCurrentInput(executedCommands[newIndex])
        }
      }
      return
    }
  }

  const isMobile = windowWidth < 768

  const handleTerminalClick = (e) => {
    // Don't focus if clicking on a link
    if (e.target.tagName === 'A') {
      return
    }
    // Focus the input when clicking anywhere on the terminal
    inputRef.current?.focus()
  }

  return (
    <div className="terminal-container" ref={terminalRef} onClick={handleTerminalClick}>
      {isMobile ? (
        <div className="mobile-banner">
          <div className="mobile-banner-line">Danielsan's</div>
          <div className="mobile-banner-line">Portfolio</div>
        </div>
      ) : (
        <div className="ascii-banner" ref={bannerRef}>{ASCII_BANNER}</div>
      )}
      <div className="terminal-output" ref={outputRef}>
        {commandHistory.map((item, index) => (
          <div key={index} className={`terminal-line ${item.type}`}>
            {item.type === 'command' ? (
              <>
                <span className="terminal-prompt">
                  <span className="prompt-user">danielsan@portfolio</span>
                  <span className="prompt-separator">:</span>
                  <span className="prompt-path">~</span>
                  <span className="prompt-symbol">$</span>
                </span>
                <span className="command-text">{item.content}</span>
              </>
            ) : (
              item.content.map((line, lineIndex) => {
                // Handle title as link
                if (typeof line === 'object' && line.type === 'title-link') {
                  return (
                    <span key={lineIndex} style={{ display: 'inline' }}>
                      <a
                        href={line.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="terminal-link"
                      >
                        {line.title}
                      </a>
                    </span>
                  )
                }
                
                // Handle special links object - check if previous line ended with " - " or was a title-link
                const prevLine = item.content[lineIndex - 1]
                const nextLine = item.content[lineIndex + 1]
                const isInlineLink = (typeof prevLine === 'string' && prevLine.endsWith(' - ')) || 
                                    (typeof prevLine === 'object' && prevLine.type === 'title-link') ||
                                    (typeof prevLine === 'string' && prevLine === ' - ')
                const shouldRenderInline = typeof line === 'string' && line.endsWith(' - ') && typeof nextLine === 'object' && nextLine.type === 'links'
                
                if (typeof line === 'object' && line.type === 'links') {
                  if (isInlineLink) {
                    // Inline link after title
                    return (
                      <span key={lineIndex} style={{ display: 'inline' }}>
                        {line.links.map((link, linkIndex) => {
                          const isMailto = link.url.startsWith('mailto:')
                          return (
                            <span key={linkIndex}>
                              <a
                                href={link.url}
                                target={isMailto ? '_self' : '_blank'}
                                rel={isMailto ? '' : 'noopener noreferrer'}
                                className="terminal-link"
                              >
                                {link.text}
                              </a>
                              {linkIndex < line.links.length - 1 && ', '}
                            </span>
                          )
                        })}
                      </span>
                    )
                  } else {
                    // Standalone links line
                    return (
                      <div key={lineIndex} className="output-line">
                        {line.links.map((link, linkIndex) => {
                          const isMailto = link.url.startsWith('mailto:')
                          return (
                            <span key={linkIndex}>
                              <a
                                href={link.url}
                                target={isMailto ? '_self' : '_blank'}
                                rel={isMailto ? '' : 'noopener noreferrer'}
                                className="terminal-link"
                              >
                                {link.text}
                              </a>
                              {linkIndex < line.links.length - 1 && ', '}
                            </span>
                          )
                        })}
                      </div>
                    )
                  }
                }
                
                // If this line is " - " and next is links, render inline
                if (line === ' - ' && typeof nextLine === 'object' && nextLine.type === 'links') {
                  return (
                    <span key={lineIndex} style={{ display: 'inline' }}>
                      {line}
                    </span>
                  )
                }
                
                // If this line ends with " - " and next is links, render inline
                if (shouldRenderInline) {
                  return (
                    <span key={lineIndex} style={{ display: 'inline' }}>
                      {line}
                    </span>
                  )
                }
                
                // Check for special link format [LINK:url] or [LINK:url:text]
                const linkRegex = /\[LINK:([^:\]]+)(?::([^\]]+))?\]/g
                const parts = []
                let lastIndex = 0
                let match
                
                while ((match = linkRegex.exec(line)) !== null) {
                  // Add text before the link
                  if (match.index > lastIndex) {
                    parts.push({ type: 'text', content: line.substring(lastIndex, match.index) })
                  }
                  // Add the link
                  const url = match[1]
                  const customText = match[2] // Custom text if provided
                  const linkText = customText || (url.startsWith('mailto:') 
                    ? 'Email' 
                    : url.includes('linkedin.com') 
                    ? 'LinkedIn' 
                    : url.includes('github.com') 
                    ? 'GitHub' 
                    : url)
                  parts.push({ type: 'link', url, text: linkText })
                  lastIndex = match.index + match[0].length
                }
                
                // Add remaining text
                if (lastIndex < line.length) {
                  parts.push({ type: 'text', content: line.substring(lastIndex) })
                }
                
                // If no links found, check for regular URLs
                if (parts.length === 0) {
                  const urlRegex = /(https?:\/\/[^\s]+|mailto:[^\s]+)/g
                  const urlParts = line.split(urlRegex)
                  
                  return (
                    <div key={lineIndex} className="output-line">
                      {urlParts.map((part, partIndex) => {
                        if (urlRegex.test(part)) {
                          const isMailto = part.startsWith('mailto:')
                          return (
                            <a
                              key={partIndex}
                              href={part}
                              target={isMailto ? '_self' : '_blank'}
                              rel={isMailto ? '' : 'noopener noreferrer'}
                              className="terminal-link"
                            >
                              {isMailto ? part.replace('mailto:', '') : part}
                            </a>
                          )
                        }
                        return <span key={partIndex}>{part}</span>
                      })}
                    </div>
                  )
                }
                
                return (
                  <div key={lineIndex} className="output-line">
                    {parts.map((part, partIndex) => {
                      if (part.type === 'link') {
                        const isMailto = part.url.startsWith('mailto:')
                        return (
                          <a
                            key={partIndex}
                            href={part.url}
                            target={isMailto ? '_self' : '_blank'}
                            rel={isMailto ? '' : 'noopener noreferrer'}
                            className="terminal-link"
                          >
                            {part.text}
                          </a>
                        )
                      }
                      return <span key={partIndex}>{part.content}</span>
                    })}
                  </div>
                )
              })
            )}
          </div>
        ))}
        
        <form onSubmit={handleSubmit} className="terminal-input-form">
          <span className="terminal-prompt">
            <span className="prompt-user">danielsan@portfolio</span>
            <span className="prompt-separator">:</span>
            <span className="prompt-path">~</span>
            <span className="prompt-symbol">$</span>
          </span>
          <div className="terminal-input-wrapper">
            <input
              ref={inputRef}
              type="text"
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="terminal-input"
              autoFocus
              autoComplete="off"
              spellCheck="false"
            />
            <span className="terminal-cursor" ref={cursorRef}>█</span>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Terminal
