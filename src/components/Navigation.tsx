import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  const isActive = (path: string) => {
    return location.pathname === path
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'p-4' : 'p-6'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className={`glass-morphism rounded-2xl px-4 sm:px-6 py-3 sm:py-4 transition-all duration-300 ${
            scrolled ? 'backdrop-blur-xl bg-white/10' : ''
          }`}>
            <div className="flex items-center justify-between">
              <Link to="/" onClick={closeMobileMenu}>
                <div className="text-lg sm:text-xl font-semibold cursor-pointer">
                  <span className="gemini-gradient-text">Ikeshala Peiris</span>
                </div>
              </Link>
              
              {/* Desktop Navigation */}
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
              
              {/* Mobile Menu Button */}
              <button
                className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center group"
                aria-label="Toggle menu"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''
                }`}></span>
                <span className={`w-6 h-0.5 bg-white transition-all duration-300 mt-1 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}></span>
                <span className={`w-6 h-0.5 bg-white transition-all duration-300 mt-1 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''
                }`}></span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Modern Mobile Menu */}
      <div 
        className={`fixed inset-0 z-40 transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={closeMobileMenu}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
        
        {/* Menu Content */}
        <div className="relative h-full flex items-center justify-center">
          <div className="glass-morphism rounded-3xl p-8 mx-4 max-w-sm w-full transform transition-all duration-500 ease-out ${
            isMobileMenuOpen ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'
          }">
            <div className="text-center space-y-6">
              <Link to="/" onClick={closeMobileMenu} className="block">
                <span className={`nav-link text-xl font-medium transition-colors cursor-pointer ${
                  isActive('/') ? 'text-white active' : 'text-white/80 hover:text-white'
                }`}>
                  Home
                </span>
              </Link>
              
              <Link to="/about" onClick={closeMobileMenu} className="block">
                <span className={`nav-link text-xl font-medium transition-colors cursor-pointer ${
                  isActive('/about') ? 'text-white active' : 'text-white/80 hover:text-white'
                }`}>
                  About
                </span>
              </Link>
              
              <Link to="/works" onClick={closeMobileMenu} className="block">
                <span className={`nav-link text-xl font-medium transition-colors cursor-pointer ${
                  isActive('/works') ? 'text-white active' : 'text-white/80 hover:text-white'
                }`}>
                  Works
                </span>
              </Link>
              
              <div className="pt-6 border-t border-white/20">
                <a
                  href="mailto:ikeshala.peiris@gmail.com"
                  onClick={closeMobileMenu}
                  className="inline-block gradient-button px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 w-full"
                >
                  <i className="fas fa-envelope mr-2"></i>
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Navigation 