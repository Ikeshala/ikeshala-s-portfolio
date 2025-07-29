# Ikeshala Peiris - UI/UX Designer Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. This portfolio showcases UI/UX design work with a beautiful glass morphism design and smooth animations.

## ✨ Features

- 🎨 **Modern Design**: Glass morphism effects with gradient colors and smooth animations
- 📱 **Fully Responsive**: Mobile-first design that works seamlessly on all devices
- ⚡ **Fast Performance**: Built with Vite for optimal loading speeds
- 📂 **Project Showcase**: Detailed project pages with design process, challenges, and results
- 🎯 **Interactive Elements**: Smooth transitions, hover effects, and engaging user interactions
- 🔍 **Smart Filtering**: Horizontal carousel filter system for project categories
- 📧 **Contact Integration**: Direct email contact with professional form design
- 🌐 **SEO Optimized**: Meta tags and structured data for better search visibility
- 📱 **Mobile Navigation**: Modern hamburger menu with smooth animations
- 🎠 **Carousel Components**: Interactive filter carousel for project categories

## 🛠️ Tech Stack

### Design & Development
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type safety and enhanced development experience
- **Tailwind CSS** - Utility-first CSS framework for rapid styling
- **React Router DOM** - Client-side routing and navigation
- **Vite** - Fast build tool and development server

### Backend & Services
- **GitHub Pages** - Static site hosting and deployment
- **Email Integration** - Direct mailto links for client contact

### Development Tools
- **ESLint** - Code linting and quality assurance
- **PostCSS** - CSS processing and optimization
- **TypeScript** - Static type checking
- **Vite Plugin Imagemin** - Image optimization and compression
- **React Router DOM** - Client-side routing with GitHub Pages support

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Ikeshala/ikeshala-s-portfolio.git
   cd ikeshala-s-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173/ikeshala-s-portfolio/` to view your portfolio

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run deploy       # Deploy to GitHub Pages
```

## 📁 Project Structure

```
src/
├── components/              # Reusable React components
│   ├── Navigation.tsx      # Main navigation with mobile menu
│   ├── Hero.tsx           # Hero section with call-to-action
│   ├── ProjectCard.tsx    # Project card component
│   ├── ContactForm.tsx    # Contact form component
│   ├── FilterCarousel.tsx # Horizontal filter carousel
│   └── Footer.tsx         # Footer component
├── pages/                  # Page components
│   ├── Home.tsx           # Landing page with featured projects
│   ├── About.tsx          # About page with skills and timeline
│   ├── Works.tsx          # Projects showcase with filtering
│   └── ProjectDetail.tsx  # Individual project detail page
├── contexts/               # React context providers
│   └── ContentContext.tsx # Content state management
├── data/                   # Static data and content
│   └── projects.ts        # Project data and interfaces
├── utils/                  # Utility functions
│   └── categoryColors.ts  # Category color mapping
├── App.tsx                # Main app component with routing
├── main.tsx              # Application entry point
└── index.css             # Global styles and custom CSS
```

## 🎨 Customization

### Personal Information

Update your personal information in the following components:
- **Name and Title**: Update in `src/contexts/ContentContext.tsx`
- **About Section**: Modify in `src/pages/About.tsx`
- **Contact Information**: Update in `src/components/ContactForm.tsx` and `src/components/Footer.tsx`
- **Email Address**: Update in multiple components for contact functionality

### Projects

Manage your projects in `src/data/projects.ts`:

```typescript
export interface Project {
  id: string
  title: string
  description: string
  image: string
  category: string
  figmaLink: string
  liveSiteUrl?: string
  tags: string[]
  challenge: string
  solution: string
  results: string
  overview: string
  tools: string[]
  keyFeatures: string[]
  featured?: boolean
  date?: string
}
```

### Styling and Theme

The portfolio uses custom CSS variables for consistent theming. Modify colors in `src/index.css`:

```css
:root {
  --deep-space: hsl(240, 28%, 9%);
  --space-blue: hsl(240, 25%, 16%);
  --gemini-blue: hsl(239, 84%, 60%);
  --gemini-purple: hsl(271, 81%, 56%);
  --gemini-pink: hsl(333, 84%, 59%);
  /* Add more custom colors as needed */
}
```

### Images and Assets

- Replace placeholder images in `public/images/`
- Update image URLs in project data
- Optimize images for web performance

#### Image Optimization Guidelines

For optimal performance, follow these guidelines when adding new project images:

1. **Image Format**: Use WebP or optimized PNG/JPG
2. **Image Size**: Keep images under 500KB for project cards
3. **Dimensions**: 
   - Project cards: 800x600px (16:9 ratio)
   - Project details: 1200x800px (3:2 ratio)
4. **Naming**: Use descriptive names like `project-name-cover.png`
5. **Optimization**: Use tools like TinyPNG or ImageOptim before adding

#### Adding New Project Images

1. Add your optimized image to `public/images/`
2. Update the project data in `src/data/projects.ts`:
   ```typescript
   {
     id: '7',
     title: 'Your New Project',
     image: '/images/your-project-image.png',
     // ... other project data
   }
   ```
3. The image will automatically be optimized with lazy loading

## 🌐 Deployment

### GitHub Pages (Current Setup)

The project is configured for GitHub Pages deployment with proper routing:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

3. **Configure GitHub Pages**
   - Go to your repository settings
   - Enable GitHub Pages
   - Set source to `gh-pages` branch
   - Your site will be available at: `https://yourusername.github.io/ikeshala-s-portfolio/`

### Important Configuration Notes

- **Base Path**: Configured for GitHub Pages subdirectory hosting
- **SPA Routing**: Includes 404.html redirect for client-side routing
- **Asset Optimization**: Images and assets are automatically optimized

### Alternative Deployment Options

#### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Deploy automatically on push
3. Custom domain support included

#### Netlify
1. Build: `npm run build`
2. Upload `dist` folder to Netlify
3. Configure custom domain





## 📊 Performance Optimization

- **Image Optimization**: Automatic image compression with Vite Plugin Imagemin
- **Code Splitting**: Automatic route-based code splitting
- **Lazy Loading**: Components load on demand
- **CSS Optimization**: Purged unused CSS in production
- **Bundle Analysis**: Built-in bundle size optimization
- **Mobile Performance**: Optimized for mobile devices with responsive design
- **Loading Speed**: Fast initial load times with optimized assets

## 🔍 SEO Features

- **Meta Tags**: Optimized for social sharing and search engines
- **Structured Data**: Proper HTML semantics for better indexing
- **Fast Loading**: Optimized for Core Web Vitals
- **Mobile-Friendly**: Responsive design for all devices
- **Accessibility**: WCAG compliant design patterns
- **Open Graph**: Social media sharing optimization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **React & TypeScript**: Modern web development stack
- **Tailwind CSS**: Utility-first styling framework
- **Font Awesome**: Professional icon library
- **Vite**: Fast build tool and development server
- **GitHub Pages**: Reliable hosting platform

## 🌐 Live Demo

Visit the live portfolio: **[https://ikeshala.github.io/ikeshala-s-portfolio/](https://ikeshala.github.io/ikeshala-s-portfolio/)**

---

**Note**: This portfolio showcases UI/UX design work with a focus on user experience, accessibility, and modern web standards. The contact form integrates directly with email clients for seamless client communication. 