const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="py-12 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <div className="text-xl font-semibold mb-2">
              <span className="gemini-gradient-text">Ikeshala Peiris</span>
            </div>
            <p className="text-white/60 text-sm">
              UI/UX Designer crafting digital experiences
            </p>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://www.linkedin.com/in/ikeshala-peiris"
              className="text-white/60 hover:text-white transition-colors"
              aria-label="LinkedIn"
              target="_blank" rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            <a
              href="https://dribbble.com/ikeshala"
              className="text-white/60 hover:text-white transition-colors"
              aria-label="Dribbble"
              target="_blank" rel="noopener noreferrer"
            >
              <i className="fab fa-dribbble text-xl"></i>
            </a>
            <a
              href="https://github.com/Ikeshala"
              className="text-white/60 hover:text-white transition-colors"
              aria-label="GitHub"
              target="_blank" rel="noopener noreferrer"
            >
              <i className="fab fa-github text-xl"></i>
            </a>
          </div>
        </div>
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © {year} Ikeshala Peiris. All rights reserved. | Designed with passion and creativity.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 