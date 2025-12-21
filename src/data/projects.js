// Import actual project images
import holidazeImg from '../assets/holidaze.png'
import thespotImg from '../assets/thespot2nd.png'
import cmsImg from '../assets/cms.png'
import auctionHouseImg from '../assets/auction-house.png'

export const projects = [
  {
    id: 'cs-inventory-tracker',
    title: 'CS Inventory Tracker',
    shortDescription: 'My first fullstack application, for CS2 players where they can track and analyse their ingame inventory. The solution also includes item purchase planner and loadout cooker. Using steam API, user can log in and import their inventory. Site is not affiliated with Valve. Taken from Figma designs through deployment with custom domain and Railway hosting.',
    thumbnail: holidazeImg, // Placeholder
    image: holidazeImg,
    imageCaption: 'CS Inventory Tracker - Fullstack application for CS2 inventory management',
    liveUrl: 'https://www.csinvtracker.com',
    githubUrl: 'https://github.com/DanielSan-01/csInvTracker',
    description: `My first fullstack application, for CS2 players where they can track and analyse their ingame inventory. The solution also includes item purchase planner and loadout cooker. Using steam API, user can log in and import their inventory. Site is not affiliated with Valve. Taken from Figma designs through deployment with custom domain and Railway hosting.`,
    reflections: `
      <h3>Core Features</h3>
      <ul>
        <li>Full steam inventory and authentication (avatar and displayname) - tracks skins with float, price, stickers and cost</li>
        <li>Goal Planner - set target and track savings progress</li>
        <li>Loadout builder - create and save custom loadouts</li>
        <li>Analytics of users inventory with piecharts of inv value, best and worst performers</li>
      </ul>
      
      <h3>Tech Stack</h3>
      <p><strong>Frontend:</strong> Next.js, TypeScript, GSAP, Recharts and Jest</p>
      <p><strong>Backend:</strong> .NET 9.0, ASP.NET Core, EF core, PostgressSQL and Swagger</p>
      <p><strong>DevOps:</strong> Railway, Vercel, Docker</p>
    `,
    technologies: ['Next.js', 'TypeScript', 'GSAP', 'Recharts', 'Jest', '.NET 9.0', 'ASP.NET Core', 'EF Core', 'PostgreSQL', 'Swagger', 'Railway', 'Vercel', 'Docker']
  },
  {
    id: 'holidaze',
    title: 'Holidaze - Venue Booking Platform',
    shortDescription: 'A modern venue booking application built with React, Vite, and Tailwind CSS for sharing and booking venues.',
    thumbnail: holidazeImg,
    image: holidazeImg,
    imageCaption: 'Holidaze venue manager dashboard showcasing booking statistics, revenue tracking, and property management features',
    liveUrl: 'https://danielsan-01.github.io/Holidaze/',
    githubUrl: 'https://github.com/DanielSan-01/Holidaze',
    description: `Holidaze is a comprehensive venue booking platform that allows users to book accommodations and venue managers to list their properties. Built with modern React technologies and featuring a clean, responsive design with advanced dashboard functionality.`,
    reflections: `
      <h3>What I Learned</h3>
      <p>This project significantly expanded my skills in modern web development:</p>
      <ul>
        <li>Advanced React patterns with hooks and context</li>
        <li>Tailwind CSS for rapid UI development and responsive design</li>
        <li>API integration and complex data management</li>
        <li>User authentication and role-based authorization flows</li>
        <li>Dashboard development with data visualization</li>
        <li>GitHub Pages deployment with proper routing</li>
      </ul>
      
      <h3>Challenges Faced</h3>
      <p>The main challenges included implementing complex booking logic with date validation, managing different user roles (customers vs venue managers), creating an intuitive dashboard interface, and ensuring data consistency across the application. Working with external APIs and handling various edge cases in the booking flow required careful planning and robust error handling.</p>
      
      <h3>Improvements Made</h3>
      <p>Based on feedback and self-reflection, I enhanced:</p>
      <ul>
        <li>User experience with better loading states and real-time feedback</li>
        <li>Code organization using custom hooks and reusable components</li>
        <li>Comprehensive error handling and form validation</li>
        <li>Mobile responsiveness and accessibility features</li>
        <li>Performance optimization with React best practices and lazy loading</li>
        <li>Dashboard functionality with improved data visualization</li>
      </ul>
      
      <h3>Self-Assessment</h3>
      <p>This project represents a significant milestone in my development journey. I successfully integrated multiple complex features including user management, booking systems, and dashboard analytics while maintaining clean, maintainable code. The use of modern tools like Vite and Tailwind CSS improved my development workflow considerably, and the project demonstrates my ability to create production-ready applications.</p>
    `,
    technologies: ['React', 'Vite', 'Tailwind CSS', 'JavaScript', 'HTML5', 'CSS']
  },
  {
    id: 'agency2-fork',
    title: 'The Spot - Event Platform Website',
    shortDescription: 'A modern event platform website featuring Bergen cityscape, event listings, and interactive user interface.',
    thumbnail: thespotImg,
    image: thespotImg,
    imageCaption: 'The Spot event platform showcasing Bergen cityscape background, upcoming events, and modern navigation design',
    liveUrl: 'https://thespot-agency.netlify.app/',
    githubUrl: 'https://github.com/DanielSan-01/Agency2-fork',
    description: `"The Spot" is a modern event platform website that showcases events in Bergen, Norway. The site features a stunning cityscape background, event cards with detailed information, and a clean, professional navigation system. This project demonstrates advanced CSS layout techniques and responsive design principles.`,
    reflections: `
              <h3>What I Learned</h3>
        <p>This project taught me valuable lessons in modern web development and design:</p>
        <ul>
          <li>Advanced CSS techniques for background overlays and image positioning</li>
          <li>Creating engaging hero sections with cityscape imagery</li>
          <li>Event card design and layout systems</li>
          <li>Navigation design and user experience principles</li>
          <li>Color theory and visual hierarchy in web design</li>
          <li>Responsive design for event-based content</li>
        </ul>
        
        <h3>Challenges Faced</h3>
        <p>Key challenges included creating an immersive background experience with the Bergen cityscape while maintaining readability, designing effective event cards that display information clearly, implementing a clean navigation system, and ensuring the site worked well across different screen sizes. Balancing the visual impact of the background with functional content presentation was particularly challenging.</p>
      
              <h3>Improvements Made</h3>
        <p>Through iterative development and feedback, I improved:</p>
        <ul>
          <li>Background image optimization and loading performance</li>
          <li>Event card accessibility and keyboard navigation</li>
          <li>Color contrast and readability over background images</li>
          <li>Mobile responsiveness for event listings and navigation</li>
          <li>Semantic HTML structure for better SEO and accessibility</li>
          <li>CSS organization for maintainable styling systems</li>
        </ul>
        
        <h3>Self-Assessment</h3>
        <p>This project demonstrated my ability to create visually striking websites that balance aesthetics with functionality. Working with the Bergen cityscape background taught me valuable lessons about image optimization, visual hierarchy, and creating engaging user experiences. The event platform concept helped me understand how to present information in an organized, user-friendly manner.</p>
    `,
    technologies: ['JavaScript', 'CSS', 'HTML5', 'Responsive Design']
  },
  {
    id: 'community-science-museum',
    title: 'Community Science Museum',
    shortDescription: 'A vibrant educational website featuring colorful design, Einstein quotes, and science exhibitions built with HTML and CSS.',
    thumbnail: cmsImg,
    image: cmsImg,
    imageCaption: 'Community Science Museum website featuring colorful exterior design, inspirational Einstein quote, and exhibitions on Cosmology and Evolution',
    liveUrl: 'https://danielsan-01.github.io/Operation-lookingGlass-CSM---SP1-/',
    githubUrl: 'https://github.com/DanielSan-01/Operation-lookingGlass-CSM---SP1-',
    description: `The Community Science Museum website showcases a vibrant, educational platform designed to inspire learning and curiosity. Featuring a colorful museum exterior, inspirational quotes from Albert Einstein, and exhibitions covering topics like Cosmology and Evolution. Built entirely with HTML and CSS, demonstrating creative design solutions and educational content presentation.`,
    reflections: `
              <h3>What I Learned</h3>
        <p>This foundational project taught me essential web development and design principles:</p>
        <ul>
          <li>Color theory and vibrant design implementation</li>
          <li>Typography and inspirational content integration</li>
          <li>CSS layout techniques for educational content</li>
          <li>Creating engaging visual hierarchies with pure CSS</li>
          <li>Semantic HTML structure for educational websites</li>
          <li>Accessibility considerations for diverse audiences</li>
        </ul>
        
        <h3>Challenges Faced</h3>
        <p>Creating an engaging educational website without JavaScript presented unique challenges. Implementing the colorful, modern design while maintaining readability, organizing educational content effectively, ensuring the site appealed to diverse age groups, and creating visual interest through CSS-only solutions required careful planning and creative problem-solving.</p>
      
              <h3>Improvements Made</h3>
        <p>Throughout development, I focused on improving:</p>
        <ul>
          <li>Color contrast and readability across the vibrant design</li>
          <li>Typography hierarchy for educational content presentation</li>
          <li>Navigation design for intuitive user experience</li>
          <li>Mobile responsiveness for the colorful layout</li>
          <li>Content organization for different exhibition topics</li>
          <li>Accessibility features for educational institutions</li>
        </ul>
        
        <h3>Self-Assessment</h3>
        <p>This project demonstrated my ability to create engaging, educational websites that balance visual appeal with functionality. The colorful, modern design challenged me to work with vibrant color schemes while maintaining professionalism and readability. Incorporating inspirational content like Einstein's quote taught me about the importance of meaningful content in educational design. This foundation project proved invaluable for understanding design principles that I've applied to more complex projects.</p>
    `,
    technologies: ['HTML5', 'CSS', 'Responsive Design', 'Web Accessibility']
  },
  {
    id: 'auction-house',
    title: 'Auction House - eCommerce Store',
    shortDescription: 'A fully responsive online auction store built with React and Tailwind CSS featuring product browsing, search, and checkout.',
    thumbnail: auctionHouseImg,
    image: auctionHouseImg,
    imageCaption: 'Auction House eCommerce platform showcasing product listings, search functionality, and shopping cart features',
    liveUrl: 'https://danielsan-js2.netlify.app/',
    githubUrl: 'https://github.com/DanielSan-01/auction-house-1',
    description: `Auction House is a modern eCommerce platform built for the JavaScript Frameworks course assignment. This fully responsive online store features comprehensive product browsing, live search functionality, and a seamless checkout experience. The application demonstrates advanced React patterns and modern web development practices.`,
    reflections: `
      <h3>What I Learned</h3>
      <p>This eCommerce project expanded my understanding of complex web applications:</p>
      <ul>
        <li>React state management for shopping cart functionality</li>
        <li>Tailwind CSS for rapid prototyping and consistent design</li>
        <li>Component-based architecture for scalable applications</li>
        <li>Form validation and user input handling</li>
        <li>Search and filtering functionality implementation</li>
        <li>Responsive design principles for mobile commerce</li>
      </ul>
      
      <h3>Challenges Faced</h3>
      <p>The main challenges included implementing a robust shopping cart system with quantity management, creating an intuitive search experience, handling form validation for the contact form, and ensuring the checkout flow was smooth and user-friendly. Managing state across multiple components while maintaining performance was particularly challenging.</p>
      
      <h3>Improvements Made</h3>
      <p>Based on testing and feedback, I enhanced:</p>
      <ul>
        <li>Search functionality with real-time filtering and suggestions</li>
        <li>Shopping cart persistence and quantity controls</li>
        <li>Form validation with clear error messaging</li>
        <li>Mobile responsiveness for better mobile shopping experience</li>
        <li>Loading states and user feedback throughout the application</li>
        <li>Code organization and component reusability</li>
      </ul>
      
      <h3>Self-Assessment</h3>
      <p>This project successfully demonstrates my ability to build complete eCommerce solutions using modern React development practices. The integration of search, cart management, and checkout functionality showcases my understanding of complex state management and user experience design. The use of Tailwind CSS allowed for rapid development while maintaining a professional, consistent design system.</p>
    `,
    technologies: ['React', 'Tailwind CSS', 'JavaScript', 'HTML5', 'CSS', 'Vite']
  }
] 