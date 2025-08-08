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
        url: 'https://www.figma.com/proto/wVzz79jC4ICug9EJaLZyxL/Cat-Food-Web?node-id=1-2&mode=design&t=hFJhqplQpSC5iZi3-1',
        label: 'View Prototype',
        icon: 'fab fa-figma'
      }
    ],
    tags: ['UI Design', 'Landing Page', 'User Experience', 'Animation', 'Figma'],
    challenge: 'Create a visually appealing, brand-aligned landing page for a cat food brand that engages users, builds trust, and remains fully responsive across devices.',
    solution: 'Designed a modular layout in Figma using components for consistency and Auto Layout for responsiveness. Integrated animated sections, including veterinarian testimonials, to boost trust and create an interactive experience.',
    results: 'Delivered a responsive, scalable, and brand-consistent landing page with reusable components, smooth animations, and clear visual hierarchy. Enhanced user engagement and credibility through interactive testimonial sections.',
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
    title: 'MOS Burger Shop Management System - Web Application',
    description: 'A full-featured web application designed to streamline the operations of MOS Burgers, a local food business, by replacing manual processes with a modern, efficient system for managing food items, orders, customers, and reporting.',
    image: 'images/mos-burger-system.jpg',
    category: 'Web Applications',
    links: [
      {
        type: 'figma-design',
        url: 'https://figma.com/mos-burger-system',
        label: 'View Design',
        icon: 'fab fa-figma'
      },
      {
        type: 'github',
        url: 'https://github.com/example/mos-burger-system',
        label: 'View Code',
        icon: 'fab fa-github'
      }
    ],
    tags: ["UI Design", "Web Application", "Inventory Management", "Order Management", "Customer Management"],
    challenge: 'The business relied on manual transaction and inventory methods, which caused inefficiencies, missed sales opportunities, and poor tracking of customer orders and expired items.',
    solution: 'Developed a modular, user-friendly web system covering all operational areas—inventory, ordering, customer handling, and reporting. Designed clear navigation and intuitive interfaces for users to manage daily tasks efficiently.',
    results: 'Significantly improved business efficiency by automating manual processes. Enhanced visibility of inventory and order history. Enabled the business to track monthly and annual sales and build a customer base for future campaigns.',
    overview: 'As the UI/UX Designer and developer, I designed the MOS Burger Management System to simplify business workflows. I created clean, categorized layouts for food listings, streamlined the order flow, and designed interfaces for managing customers, reports, and inventory updates. The project helped modernize day-to-day operations and brought better structure to internal processes.',
    tools: ['Figma', 'HTML', 'CSS', 'JavaScript', 'MySQL', 'PHP'],
    keyFeatures: [
      "Home section with categorized food items and item details",
      "Search functionality by name, code, or category",
      "Inventory management with add, update, delete options",
      "Expiration alerts and removal for outdated items",
      "Order management with cart system, discount logic, and order tracking",
      "Customer management with profile editing and order history",
      "Monthly and annual sales report generation",
      "Customer ranking based on order frequency"
    ],
    featured: true
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