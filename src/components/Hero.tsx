import { Link } from 'react-router-dom'
import { useContent } from '../contexts/ContentContext'

const Hero = () => {
  const { content } = useContent()

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 background-effects"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl floating-animation"></div>
      <div 
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl floating-animation"
        style={{ animationDelay: '2s' }}
      ></div>
      <div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl floating-animation"
        style={{ animationDelay: '4s' }}
      ></div>
      
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1 
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight fade-in"
          style={{ animationDelay: '0.2s' }}
        >
          <span className="gemini-gradient-text">{content.title}</span>
          <br />
          <span className="text-white/90">Crafting Digital Experiences</span>
        </h1>
        
        <p 
          className="text-xl md:text-2xl text-white/70 mb-8 max-w-2xl mx-auto fade-in"
          style={{ animationDelay: '0.4s' }}
        >
          {content.bio}
        </p>
        
        <div 
          className="flex flex-col sm:flex-row gap-4 justify-center fade-in"
          style={{ animationDelay: '0.6s' }}
        >
          <Link to="/works">
            <button className="gradient-button px-8 py-4 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center text-white glow-effect min-w-48">
              <i className="fas fa-eye mr-2"></i>
              View My Work
            </button>
          </Link>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="mailto:ikeshala.peiris@gmail.com" target="_blank" rel="noopener noreferrer">
              <button className="glass-button px-8 py-4 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center text-white hover:bg-white/20 min-w-48">
                <i className="fas fa-envelope mr-2"></i>
                Get in Touch
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 