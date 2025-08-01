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
    challenge: 'Create a seamless and responsive POS interface that simplifies daily sales tasks and ensures data integrity across multiple user interactions.',
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
    featured: true
  },
  {
    id: '2',
    title: 'Mobile Banking App',
    description: 'Secure and intuitive mobile banking experience with biometric authentication and personalized financial insights.',
    image: 'images/friskay-cat-food.jpg',
    category: 'Mobile Apps',
    links: [
      {
        type: 'figma-prototype',
        url: 'https://figma.com/banking-app',
        label: 'View Prototype',
        icon: 'fab fa-figma'
      },
      {
        type: 'live-site',
        url: 'https://example.com/banking-app',
        label: 'Live Demo',
        icon: 'fas fa-external-link-alt'
      }
    ],
    tags: ['Mobile Design', 'Security UX', 'Prototyping'],
    challenge: 'Users needed a secure yet accessible banking experience with complex financial data presented in an intuitive way.',
    solution: 'Created a mobile-first design with biometric authentication, simplified navigation, and clear financial insights.',
    results: '40% increase in daily active users, 50% reduction in support tickets, and 25% improvement in transaction completion.',
    overview: 'As Senior UX Designer, I led a 4-month mobile banking app project. My role included user research, security UX design, prototyping, and collaborating with development teams to ensure seamless implementation.',
    tools: ['Figma', 'Sketch', 'Principle', 'UserTesting'],
    keyFeatures: [
      'Biometric authentication',
      'Real-time transaction tracking',
      'Personalized financial insights',
      'Secure messaging system',
      'Quick transfer features'
    ],
    featured: true
  },
  {
    id: '3',
    title: 'Healthcare Dashboard',
    description: 'Comprehensive healthcare management system with real-time patient monitoring and analytics dashboard.',
    image: 'images/pure-pettle.png',
    category: 'Web Applications',
    links: [
      {
        type: 'figma-design',
        url: 'https://figma.com/healthcare-dashboard',
        label: 'View Design',
        icon: 'fab fa-figma'
      }
    ],
    tags: ['Dashboard Design', 'Data Visualization', 'UX Research'],
    challenge: 'Healthcare professionals needed to access complex patient data quickly while maintaining accuracy and compliance.',
    solution: 'Designed an intuitive dashboard with clear data hierarchy, real-time updates, and role-based access controls.',
    results: '35% faster data access, 45% reduction in errors, and 60% improvement in user satisfaction.',
    overview: 'As UI/UX Designer, I worked on a 5-month healthcare dashboard project. My responsibilities included user research with healthcare professionals, designing complex data visualizations, and ensuring HIPAA compliance in the interface design.',
    tools: ['Figma', 'Adobe XD', 'Tableau', 'Hotjar'],
    keyFeatures: [
      'Real-time patient monitoring',
      'Interactive data visualization',
      'Role-based access control',
      'Mobile-responsive design',
      'Compliance reporting tools'
    ],
    featured: true
  },
  {
    id: '4',
    title: 'Travel Booking App',
    description: 'Modern travel booking application with intuitive search, booking, and itinerary management features.',
    image: 'images/mos-burger.jpg',
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
    image: 'images/pure-pettle.png',
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
    image: 'images/pure-pettle.png',
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
    image: 'images/pure-pettle.png',
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