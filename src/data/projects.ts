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
    category: 'Mobile Apps',
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
    title: 'MOS Burger Shop Management System - Web Application',
    description: 'A comprehensive web application designed to streamline and modernize the operations of "MOS Burgers," a local medium-scale business. The system enhances efficiency through organized product management, intuitive order processing, customer management, and robust reporting features.',
    image: 'images/mos-burger-system.jpg',
    category: 'Web Applications',
    links: [
      {
        type: 'figma-design',
        url: 'https://www.figma.com/design/e4ddgFjUWbfdNwb7JzK4yb/MOS-Burger-Shop-Management-System---Web-Application?m=auto&t=xSIqg4hnd4lh8FDn-6',
        label: 'View Design',
        icon: 'fab fa-figma'
      },
      {
        type: 'figma-prototype',
        url: 'https://www.figma.com/proto/e4ddgFjUWbfdNwb7JzK4yb/MOS_Burgers_System-(Prototype)?node-id=1-2&mode=design&t=M7n2EezQE2yuZLGi-1',
        label: 'View Prototype',
        icon: 'fab fa-figma'
      }
    ],
    tags: ['UI Design', 'Web Application', 'Order Processing', 'Report Generation'],
    challenge: 'The business relied on manual transaction processes, leading to inefficiencies in order handling, inventory tracking, and customer record management.',
    solution: 'Developed a fully integrated web-based management system with categorized food listings, advanced search capabilities, store and order management tools, customer data tracking, and automated report generation.',
    results: 'Significantly improved operational efficiency by reducing manual errors, speeding up order processing, and providing valuable business insights through detailed reporting.',
    overview: 'As the UI/UX designer and developer, I created an intuitive interface for both store management and customer-facing functionalities. I implemented user-friendly navigation, automated reporting, and optimized workflows to support business growth and customer satisfaction.',
    tools: ['Figma', 'Auto Layout', 'Components', 'Prototyping', 'Interaction Design'],
    keyFeatures: [
      'Categorized food item display with pricing and availability',
      'Advanced search by name, code, or category',
      'Store management with item add/update/delete functionality',
      'Order management with cart and discount features',
      'Customer management and order history tracking',
      'Automated PDF receipt generation',
      'Monthly, annual, and top-customer sales reports'
    ],
    featured: false
  },
  {
    id: '5',
    title: 'E & E Service Center Management System',
    description: 'Developed a comprehensive management system for an electronic and electrical items repair center, featuring separate interfaces for store employees and the owner. The system supports user management, order tracking, inventory control, and detailed reporting.',
    image: 'images/ene-service-center.jpg',
    category: 'Desktop Applications',
    links: [
      {
        type: 'github',
        url: 'https://github.com/Ikeshala/EE_Service_Center_App.git',
        label: 'View Code',
        icon: 'fab fa-github'
      }
    ],
    tags: ['UI Design', 'Desktop Application', 'Inventory Management', 'Order Management', 'User Authentication'],
    challenge: 'Manual handling of repair orders, inventory, and customer management created inefficiencies and limited visibility over service progress and sales.',
    solution: 'Built a desktop application with role-based user access, detailed order lifecycle management, inventory tracking with process zones, and automated reporting with graphical data visualization.',
    results: 'Streamlined service center operations with clear status tracking, improved customer communication, and accurate sales reporting, reducing errors and improving workflow.',
    overview: 'As UI/UX designer and developer, I crafted a role-based interface using Scene Builder and JavaFX, focusing on intuitive navigation, real-time order updates, secure user authentication, and comprehensive reporting using Jasper Reports.',
    tools: ['Scene Builder', 'JavaFX', 'Jasper Reports', 'MySQL', 'CSS', 'JDBC'],
    keyFeatures: [
      'Role-based user registration and secure authentication',
      'Complete order management with status tracking and email notifications',
      'Item catalog with category-based inventory management',
      'Quantity and process zone tracking with color-coded statuses',
      'Comprehensive reporting: orders, customers, sales with charts'
    ],
    featured: false
  },
  {
    id: '6',
    title: 'LifeTrip - Travel App UI Design',
    description: 'Designed wireframes and high-fidelity UI designs for the LifeTrip travel app, focusing on Stays, Search Rooms, and Search Flights sections. Emphasized clarity, responsiveness, and a vibrant visual style using advanced design techniques.',
    image: 'images/life-trip.jpg',
    category: 'Mobile Apps',
    links: [
      {
        type: 'figma-design',
        url: 'https://www.figma.com/design/ZZQdOhIMmQBoxqm1J6dvWq/LifeTrip---Travel-App?m=auto&t=xSIqg4hnd4lh8FDn-6',
        label: 'View Design',
        icon: 'fab fa-figma'
      }
    ],
    tags: ['UI Design', 'Wireframing', 'Mobile App', 'Figma'],
    challenge: 'Create a visually engaging and easy-to-navigate travel app UI that adapts smoothly to different devices, while incorporating modern and creative design techniques.',
    solution: 'Developed clear wireframes and hi-fi designs with Figma, using Auto Layout for responsiveness, consistent typography and symbols, and creative use of colors, gradients, and neon effects to evoke a travel-friendly atmosphere.',
    results: 'Delivered a visually appealing and structured UI design with seamless responsiveness, consistent iconography, and dynamic styling that enhances user engagement.',
    overview: 'As the UI designer, I applied Figma tools to create detailed wireframes and polished UI designs for key travel app sections. My work combined modern design trends like glassmorphism, neon effects, and angular elements with practical usability principles.',
    tools: ['Figma', 'Auto Layout', 'Typography', 'Color Theory', 'Glassmorphism', 'Component-Based Design'],
    keyFeatures: [
      'Visually rich Stays page with captivating imagery',
      'User-friendly Search Rooms with intuitive filters and consistent iconography',
      'Streamlined Search Flights with modern angular design elements',
      'Responsive layouts using Figma\'s Auto Layout',
      'Creative use of colors, gradients, and neon effects',
      'Consistent typography and symbol usage for design cohesion'
    ],
    featured: true
  },
  {
    id: '7',
    title: 'Community Cleanup Volunteer Sign Up',
    description: 'Designed a user-friendly sign-up interface for a community cleanup event, aimed at encouraging volunteers by evoking a sense of community, environmental responsibility, and engagement through vibrant visuals and clear navigation.',
    image: 'images/community-cleanup-volunteer-sign-up.jpg',
    category: 'Mobile Apps',
    links: [
      {
        type: 'figma-design',
        url: 'https://www.figma.com/design/7dIWTIk1ERBDFUGYkFNph3/Community-Cleanup-Volunteer-Sign-Up?m=auto&t=SNLkgYBvmWN2GBC9-6',
        label: 'View Design',
        icon: 'fab fa-figma'
      },
      {
        type: 'figma-prototype',
        url: 'https://www.figma.com/proto/7dIWTIk1ERBDFUGYkFNph3/Community-Cleanup-Volunteer-Sign-Up?type=design&node-id=2-12&t=MFMzvfRqMa5f9HZj-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=2%3A12&mode=design',
        label: 'View Prototype',
        icon: 'fab fa-figma'
      }
    ],
    tags: ['UI Design', 'Volunteer Sign-Up', 'Community', 'Environmental Design', 'Figma'],
    challenge: 'Create an inviting and engaging interface to motivate users to volunteer for a community cleanup, using friendly visuals and easy navigation.',
    solution: 'Developed a vibrant UI with eco-friendly colors, charming illustrations of environmental themes, and clear calls-to-action for event info and sign-up sections to guide users smoothly through the process.',
    results: 'Delivered a visually appealing and easy-to-use sign-up interface that enhances user engagement and encourages community participation.',
    overview: 'As the UI designer, I leveraged Figma to create a cohesive interface featuring a catchy headline, clear event information, an intuitive sign-up form, and integrated social media buttons—all designed with environmental and community-focused aesthetics.',
    tools: ['Figma', 'Illustration Integration', 'Component-Based Design'],
    keyFeatures: [
      'Catchy home headline with eco-friendly vibrant colors',
      'Event Information section with date, time, location, and illustrations',
      'User-friendly sign-up form collecting essential details',
      'Navigation buttons linking sections smoothly',
      'Social media integration with share and follow buttons'
    ],
    featured: false
  }
]

export const getProjectById = (id: string): Project | undefined => {
  return allProjects.find(project => project.id === id)
} 