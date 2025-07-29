import ProjectCard from '../components/ProjectCard'
import { useState, useEffect, useCallback } from 'react'
import { allProjects } from '../data/projects'

const Works = () => {
  const [activeFilter, setActiveFilter] = useState('All Projects')
  const [displayedProjects, setDisplayedProjects] = useState<typeof allProjects>([])
  const [visibleCount, setVisibleCount] = useState(6)
  const [isLoading, setIsLoading] = useState(false)
  const [projects, setProjects] = useState(allProjects)
  const projectsPerLoad = 6

  // Dynamically generate filter buttons based on categories present in projects
  const allCategories = Array.from(new Set(projects.map(p => p.category)));
  const filterButtons = ['All Projects', ...allCategories];

  // Use static project data directly
  useEffect(() => {
    // Sort by newest first (highest ID first)
    const sortedProjects = allProjects.sort((a, b) => parseInt(b.id) - parseInt(a.id))
    setProjects(sortedProjects)
  }, [])

  const filteredProjects = activeFilter === 'All Projects' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  // Reset and load initial projects when filter changes
  useEffect(() => {
    setVisibleCount(6)
    setDisplayedProjects(filteredProjects.slice(0, 6))
  }, [activeFilter, filteredProjects])

  // Load more projects function
  const loadMoreProjects = useCallback(() => {
    if (isLoading || visibleCount >= filteredProjects.length) return

    setIsLoading(true)
    
    // Simulate loading delay for better UX
    setTimeout(() => {
      const newCount = Math.min(visibleCount + projectsPerLoad, filteredProjects.length)
      setVisibleCount(newCount)
      setDisplayedProjects(filteredProjects.slice(0, newCount))
      setIsLoading(false)
    }, 500)
  }, [visibleCount, filteredProjects.length, isLoading])

  // Infinite scroll handler
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 1000) {
        loadMoreProjects()
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [loadMoreProjects])

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter)
  }

  return (
    <div className="bg-deep-space min-h-screen pt-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 background-effects"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl floating-animation"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl floating-animation" style={{ animationDelay: '2s' }}></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <section className="py-20 px-6 relative">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gemini-gradient-text">My Works</span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Explore my portfolio of digital experiences, each crafted with attention to detail and user-centered design principles.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filterButtons.map((filter) => (
              <button
                key={filter}
                onClick={() => handleFilterChange(filter)}
                className={`glass-button px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeFilter === filter 
                    ? 'gemini-gradient text-white' 
                    : 'glass-morphism text-white hover:bg-white/20'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {displayedProjects.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                category={project.category}
                figmaLink={project.figmaLink}
                tags={project.tags}
              />
            ))}
          </div>

          {/* Loading Indicator */}
          {isLoading && (
            <div className="flex justify-center items-center py-8">
              <div className="flex items-center space-x-3">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
                <span className="text-white/70">Loading more projects...</span>
              </div>
            </div>
          )}

          {/* Load More Button (Alternative to scroll) */}
          {!isLoading && visibleCount < filteredProjects.length && (
            <div className="text-center mb-8">
              <button
                onClick={loadMoreProjects}
                className="gradient-button rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center text-white glow-effect text-lg px-8 py-4"
              >
                <i className="fas fa-plus mr-2"></i>
                Load More Projects
              </button>
            </div>
          )}

          {/* Results Info */}
          <div className="text-center text-white/60 text-sm mb-8">
            Showing {displayedProjects.length} of {filteredProjects.length} projects
            {visibleCount < filteredProjects.length && (
              <span className="block mt-1 text-xs">
                Scroll down or click "Load More" to see more projects
              </span>
            )}
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center pb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            <span className="gemini-gradient-text">Ready to Start a Project?</span>
          </h2>
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            I'm always excited to work on new challenges and create amazing digital experiences. Let's discuss your project!
          </p>
          <a href="mailto:ikeshala.peiris@gmail.com">
            <button className="gradient-button rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center text-white glow-effect text-lg px-8 py-4">
              <i className="fas fa-envelope mr-2"></i>
              Get In Touch
            </button>
          </a>
        </section>
      </div>
    </div>
  )
}

export default Works 