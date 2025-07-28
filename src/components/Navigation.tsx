import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path: string) => {
    return location.pathname === path
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 p-6 transition-all duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="glass-morphism rounded-2xl px-6 py-4">
            <div className="flex items-center justify-between">
              <Link to="/">
                <div className="text-xl font-semibold cursor-pointer">
                  <span className="gemini-gradient-text">Ikeshala Peiris</span>
                </div>
              </Link>
              
              <div className="hidden md:flex space-x-8">
                <Link to="/">
                  <span className={`nav-link transition-colors cursor-pointer text-white ${isActive('/') ? 'active' : 'text-white/80 hover:text-white'}`}>
                    Home
                  </span>
                </Link>
                <Link to="/about">
                  <span className={`nav-link transition-colors cursor-pointer ${isActive('/about') ? 'text-white active' : 'text-white/80 hover:text-white'}`}>
                    About
                  </span>
                </Link>
                <Link to="/works">
                  <span className={`nav-link transition-colors cursor-pointer ${isActive('/works') ? 'text-white active' : 'text-white/80 hover:text-white'}`}>
                    Works
                  </span>
                </Link>
              </div>
              
              <button
                className="md:hidden text-white"
                aria-label="Toggle menu"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <i className="fas fa-bars"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-40 transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        style={{ backgroundColor: 'rgba(15, 15, 35, 0.95)' }}
      >
        <div className="flex items-center justify-center h-full backdrop-blur-xl">
          <div className="text-center space-y-8">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
              <span className="block text-2xl transition-colors cursor-pointer text-white">
                Home
              </span>
            </Link>
            <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>
              <span className="block text-2xl transition-colors cursor-pointer text-white/80 hover:text-white">
                About
              </span>
            </Link>
            <Link to="/works" onClick={() => setIsMobileMenuOpen(false)}>
              <span className="block text-2xl transition-colors cursor-pointer text-white/80 hover:text-white">
                Works
              </span>
            </Link>
            <div className="pt-8">
              <a
                href="mailto:ikeshala.peiris@gmail.com"
                className="inline-block gradient-button px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300"
              >
                <i className="fas fa-envelope mr-2"></i>
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Navigation 