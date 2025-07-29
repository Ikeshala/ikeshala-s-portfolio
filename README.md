# Ikeshala Peiris - UI/UX Designer Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. This portfolio showcases UI/UX design work with a beautiful glass morphism design and smooth animations.

## ✨ Features

- 🎨 **Modern Design**: Glass morphism effects with gradient colors and smooth animations
- 📱 **Fully Responsive**: Mobile-first design that works seamlessly on all devices
- ⚡ **Fast Performance**: Built with Vite for optimal loading speeds

- 📂 **Project Showcase**: Detailed project pages with design process, challenges, and results
- 🎯 **Interactive Elements**: Smooth transitions, hover effects, and engaging user interactions
- 🔍 **Project Filtering**: Filter projects by category and tags
- 📧 **Contact Form**: Integrated contact form for client inquiries
- 🌐 **SEO Optimized**: Meta tags and structured data for better search visibility

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type safety and enhanced development experience
- **Tailwind CSS** - Utility-first CSS framework for rapid styling
- **React Router DOM** - Client-side routing and navigation
- **Vite** - Fast build tool and development server

### Backend & Services
- **GitHub Pages** - Static site hosting

### Development Tools
- **ESLint** - Code linting and quality assurance
- **PostCSS** - CSS processing and optimization
- **TypeScript** - Static type checking
- **Vite Plugin Imagemin** - Image optimization

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ikeshala/ikeshala-portfolio.git
   cd ikeshala-portfolio
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
   Navigate to `http://localhost:5173` to view your portfolio

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
│   ├── Navigation.tsx      # Main navigation component
│   ├── Hero.tsx           # Hero section with call-to-action
│   ├── ProjectCard.tsx    # Project card component
│   ├── ContactForm.tsx    # Contact form component
│   └── Footer.tsx         # Footer component
├── pages/                  # Page components
│   ├── Home.tsx           # Landing page
│   ├── About.tsx          # About page with skills and experience
│   ├── Works.tsx          # Projects showcase page
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
- **Name and Title**: Update in `src/components/Hero.tsx`
- **About Section**: Modify in `src/pages/About.tsx`
- **Contact Information**: Update in `src/components/Footer.tsx`

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

## 🌐 Deployment

### GitHub Pages (Current Setup)

The project is configured for GitHub Pages deployment:

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

## 🔍 SEO Features

- Meta tags for social sharing
- Structured data for search engines
- Semantic HTML structure
- Fast loading times
- Mobile-friendly design

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with React and TypeScript
- Styled with Tailwind CSS
- Icons from Font Awesome
- Images from Unsplash
- Deployed on GitHub Pages

---

**Note**: This portfolio showcases UI/UX design work with a focus on user experience, accessibility, and modern web standards. 