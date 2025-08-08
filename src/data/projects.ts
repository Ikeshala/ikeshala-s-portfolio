export interface ProjectLink {
  type: 'figma-design' | 'figma-prototype' | 'wireframe' | 'github' | 'live-site' | 'custom'
  url: string
  label: string
  icon: string
}

export interface Project {
  id: string
  title: string
  description: string
  image: string
  category: string
  links: ProjectLink[]
  tags: string[]
  challenge: string
  solution: string
  results: string
  overview: string
  tools: string[]
  keyFeatures: string[]
  featured?: boolean
  date?: string // added for project ordering
}

export const allProjects: Project[] = [
  {
    id: '1',
    title: 'ThogaKade - Point of Sale System',
    description: 'A desktop-based Point of Sale (POS) system designed to streamline sales operations with an intuitive user interface and scalable architecture.',
    image: 'images/thoga-kade.jpg',
    category: 'Desktop Applications',
    links: [
      {
        type: 'github',
        url: 'https://github.com/Ikeshala/ThogaKade_with_Layered_Architecture.git',
        label: 'View Code',
        icon: 'fab fa-github'
      }
    ],
    tags: ['UI Design', 'JavaFX', 'Desktop Application'],
    challenge: 'Create a seamless POS interface that simplifies daily sales tasks and ensures data integrity across multiple user interactions.',
    solution: 'Implemented a layered architecture with JavaFX and Scene Builder to build a visually clean, user-friendly interface. Integrated JDBC for secure and efficient database connectivity.',
    results: 'Successfully deployed as JAR and EXE files for cross-platform use. The application provides fast, stable performance and improved usability for end users.',
    overview: 'As the UI/UX designer and developer of ThogaKade, I focused on building a smooth user experience for managing transactions. I used JavaFX and Scene Builder for the UI, applied CSS for consistent styling, and integrated JDBC to connect with a MySQL database, ensuring data reliability.',
    tools: ['Java', 'JavaFX', 'CSS', 'Scene Builder', 'JDBC', 'MySQL'],
    keyFeatures: [
      "User-friendly dashboard for quick navigation",
      "Layered architecture for easy maintenance",
      "Modern UI built with JavaFX and CSS",
      "Robust data integration using JDBC with MySQL",
      "Packaged in JAR and EXE formats for easy deployment"
    ],
    featured: false
  },
  {
    id: '2',
    title: 'Friskay - Cat Food Web Page',
    description: 'An engaging cat food landing page designed to combine visual appeal, smooth animations, and responsive design. The layout emphasizes brand personality while ensuring a user-friendly experience through well-structured components and Auto Layout.',
    image: 'images/friskay-cat-food.jpg',
    category: 'Web Solutions',
    links: [
      {
        type: 'figma-design',
        url: 'https://www.figma.com/design/wVzz79jC4ICug9EJaLZyxL/Cat-Food-Web?m=auto&t=xSIqg4hnd4lh8FDn-6',
        label: 'View Design',
        icon: 'fab fa-figma'
      },
      {
        type: 'figma-prototype',
        url: 'https://www.figma.com/proto/wVzz79jC4ICug9EJaLZyxL/Cat-Food-Web?node-id=1-2&t=kQvuAYolTnqPanu2-1&scaling=min-zoom&content-scaling=fixed',
        label: 'View Prototype',
        icon: 'fab fa-figma'
      }
    ],
    tags: ['UI Design', 'Landing Page', 'User Experience', 'Animation', 'Figma'],
    challenge: 'Create a visually appealing, brand-aligned landing page for a cat food brand that engages users, builds trust, and remains fully responsive across devices.',
    solution: 'Designed a modular layout in Figma using components for consistency and Auto Layout for responsiveness. Integrated animated sections, including veterinarian testimonials, to boost trust and create an interactive experience.',
    results: 'Delivered a scalable, and brand-consistent landing page with reusable components, smooth animations, and clear visual hierarchy. Enhanced user engagement and credibility through interactive testimonial sections.',
    overview: 'As the UI/UX designer, I designed the Friskay landing page with a focus on responsiveness, consistency, and engagement. I applied Figma\'s component system, Auto Layout, and animation features to create a modern and visually appealing interface that aligns with the brand identity.',
    tools: ['Figma', 'Auto Layout', 'Prototype Animation', 'Component-Based Design'],
    keyFeatures: [
      'Intuitive header and navigation bar',
      'Reusable design components built in Figma',
      'Responsive layout using Auto Layout',
      'Hero section with compelling visuals and concise copy',
      'Veterinarian testimonial section with animations'
    ],
    featured: false
  },
  {
    id: '3',
    title: 'FurniCraft - Furniture Shop Mobile App',
    description: 'A mobile application designed to deliver a seamless and enjoyable furniture shopping experience. The app features an intuitive interface, well-organized product categorization, smooth cart and checkout flows, and personalized user profiles, all aimed at enhancing user satisfaction.',
    image: 'images/furnicraft.jpg',
    category: 'Mobile Applications',
    links: [
      {
        type: 'figma-design',
        url: 'https://www.figma.com/design/QcPKU2C7jHi87nSYSekCYv/Furniture-Shop-Mobile-App-Design?m=auto&t=xSIqg4hnd4lh8FDn-6',
        label: 'View Design',
        icon: 'fab fa-figma'
      },
      {
        type: 'figma-prototype',
        url: 'https://www.figma.com/proto/QcPKU2C7jHi87nSYSekCYv/Furniture-Shop-Mobile-App-Design?type=design&node-id=1-2&t=eFCEEzBOaRofEKfG-1&scaling=scale-down&page-id=0%3A1',
        label: 'View Prototype',
        icon: 'fab fa-figma'
      }
    ],
    tags: ['UI Design', 'Mobile App', 'E-commerce', 'Interaction Design', 'User Flow Optimization'],
    challenge: 'Design a mobile-first e-commerce platform for a furniture store that provides a visually appealing experience while ensuring intuitive navigation, easy product discovery, and a secure checkout process.',
    solution: 'Developed a clean and engaging mobile interface with clear navigation, organized categories, and detailed product pages. Integrated cart and secure checkout flows, and built a personalized profile section to help users manage orders and preferences.',
    results: 'Delivered a user-centered e-commerce mobile app that enhances product exploration, simplifies purchasing, and improves user retention through personalized features.',
    overview: 'As the UI/UX designer, I focused on crafting a furniture shopping app with smooth user flows, intuitive navigation, and appealing visuals. I incorporated e-commerce best practices, responsive layouts, and interaction design techniques to ensure both usability and visual consistency.',
    tools: ['Figma', 'Prototyping', 'Interaction Design'],
    keyFeatures: [
      'Inviting home screen with featured products and promotions',
      'Organized category-based item browsing',
      'Detailed product pages with cart functionality',
      'Streamlined and secure checkout process',
      'Personalized user profile with order history and preferences'
    ],
    featured: false
  },
  {
    id: '4',
    title: 'Travel Booking App',
    description: 'Modern travel booking application with intuitive search, booking, and itinerary management features.',
    image: 'images/destination-dreamers.jpg',
    category: 'Mobile Apps',
    links: [
      {
        type: 'figma-prototype',
        url: 'https://figma.com/travel-app',
        label: 'View Prototype',
        icon: 'fab fa-figma'
      },
      {
        type: 'live-site',
        url: 'https://example.com/travel-app',
        label: 'Live Demo',
        icon: 'fas fa-external-link-alt'
      }
    ],
    tags: ['Mobile Design', 'UX Research', 'Prototyping'],
    challenge: 'Users found the booking process complex and time-consuming, leading to high abandonment rates.',
    solution: 'Streamlined the booking flow with smart search, one-click booking, and personalized recommendations.',
    results: '55% increase in booking completion, 40% reduction in search time, and 30% improvement in user retention.',
    overview: 'As Product Designer, I led a 3-month travel booking app project. My role involved user research, journey mapping, prototyping the booking flow, and collaborating with product managers to optimize conversion rates.',
    tools: ['Figma', 'InVision', 'Zeplin', 'Amplitude'],
    keyFeatures: [
      'Smart search functionality',
      'One-click booking system',
      'Personalized recommendations',
      'Real-time price tracking',
      'Seamless payment integration'
    ],
    featured: false
  },
  {
    id: '5',
    title: 'Educational Platform',
    description: 'Interactive learning platform with personalized content delivery and progress tracking.',
    image: 'images/community-cleanup-volunteer-sign-up.jpg',
    category: 'Web Applications',
    links: [
      {
        type: 'figma-design',
        url: 'https://figma.com/education-platform',
        label: 'View Design',
        icon: 'fab fa-figma'
      }
    ],
    tags: ['UX Research', 'UI Design', 'User Testing'],
    challenge: 'Students struggled with content discovery and progress tracking, leading to low engagement and completion rates.',
    solution: 'Created an adaptive learning interface with personalized content paths and clear progress indicators.',
    results: '50% increase in course completion, 45% improvement in engagement, and 35% higher satisfaction scores.',
    overview: 'As UX Designer, I worked on a 4-month educational platform project. My responsibilities included user research with students and educators, designing adaptive learning interfaces, and implementing gamification elements to improve engagement.',
    tools: ['Figma', 'Miro', 'UserTesting', 'Google Analytics'],
    keyFeatures: [
      'Adaptive learning paths',
      'Progress tracking dashboard',
      'Interactive assessments',
      'Social learning features',
      'Mobile-responsive design'
    ],
    featured: false
  },
  {
    id: '6',
    title: 'Fitness Tracking App',
    description: 'Comprehensive fitness tracking application with workout planning and progress analytics.',
    image: 'images/kick-kraze.jpg',
    category: 'Mobile Apps',
    links: [
      {
        type: 'figma-prototype',
        url: 'https://figma.com/fitness-app',
        label: 'View Prototype',
        icon: 'fab fa-figma'
      },
      {
        type: 'live-site',
        url: 'https://example.com/fitness-app',
        label: 'Live Demo',
        icon: 'fas fa-external-link-alt'
      }
    ],
    tags: ['Mobile Design', 'Data Visualization', 'UX Research'],
    challenge: 'Users needed motivation and clear progress tracking to maintain their fitness routines effectively.',
    solution: 'Designed an engaging interface with gamification elements, detailed analytics, and social features.',
    results: '60% increase in user retention, 40% improvement in workout completion, and 50% higher engagement.',
    overview: 'As Senior Product Designer, I led a 3-month fitness tracking app project. My role included user research, designing gamification features, and collaborating with developers to integrate analytics and wearable device support.',
    tools: ['Figma', 'Principle', 'Amplitude', 'Hotjar'],
    keyFeatures: [
      'Personalized workout plans',
      'Progress analytics dashboard',
      'Social challenges and sharing',
      'Gamification elements',
      'Integration with wearables'
    ],
    featured: false
  },
  {
    id: '7',
    title: 'Project Management Desktop App',
    description: 'Professional desktop application for team collaboration and project management with advanced features.',
    image: 'images/cargo-jet.jpg',
    category: 'Desktop Applications',
    links: [
      {
        type: 'figma-design',
        url: 'https://figma.com/project-management-app',
        label: 'View Design',
        icon: 'fab fa-figma'
      },
      {
        type: 'github',
        url: 'https://github.com/example/project-management-app',
        label: 'View Code',
        icon: 'fab fa-github'
      }
    ],
    tags: ['Desktop Design', 'UX Research', 'Data Visualization'],
    challenge: 'Teams needed a powerful yet intuitive desktop application for managing complex projects with multiple stakeholders and dependencies.',
    solution: 'Designed a comprehensive desktop interface with advanced project management features, real-time collaboration, and intuitive navigation.',
    results: '70% improvement in project delivery time, 45% reduction in communication overhead, and 80% user satisfaction rate.',
    overview: 'As Lead UX Designer, I designed a comprehensive desktop application for project management. My role involved extensive user research with project managers, designing complex data visualizations, and creating an intuitive interface for managing large-scale projects.',
    tools: ['Figma', 'Adobe XD', 'Sketch', 'UserTesting'],
    keyFeatures: [
      'Advanced project timeline visualization',
      'Real-time team collaboration tools',
      'Resource allocation dashboard',
      'Custom workflow automation',
      'Cross-platform synchronization'
    ],
    featured: false
  }
]

export const getProjectById = (id: string): Project | undefined => {
  return allProjects.find(project => project.id === id)
} 