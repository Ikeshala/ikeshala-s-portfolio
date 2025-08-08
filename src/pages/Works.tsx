import ProjectCard from '../components/ProjectCard'
import FilterCarousel from '../components/FilterCarousel'
import { useState, useEffect, useCallback } from 'react'
import { allProjects } from '../data/projects'
import { preloadImages } from '../utils/imageUtils'

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

  // Use static project data directly and preload images
  useEffect(() => {
    // Sort by newest first (highest ID first)
    const sortedProjects = allProjects.sort((a, b) => parseInt(b.id) - parseInt(a.id))
    setProjects(sortedProjects)

    // Preload the first 12 project images for faster loading
    const firstTwelveImages = sortedProjects.slice(0, 12).map(project => project.image)
    preloadImages(firstTwelveImages).catch(console.error)
  }, [])

  const filteredProjects = activeFilter === 'All Projects' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  // Reset and load initial projects when filter changes
  useEffect(() => {
    if (activeFilter === 'All Projects') {
      // For "All Projects", use pagination (show 6 initially)
      setVisibleCount(6)
      setDisplayedProjects(filteredProjects.slice(0, 6))
    } else {
      // For individual categories, show all projects
      setVisibleCount(filteredProjects.length)
      setDisplayedProjects(filteredProjects)
    }
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 relative">
          <div className="text-center mb-12 sm:mb-16 fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              <span className="gemini-gradient-text">My Works</span>
            </h2>
            <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto">
              Explore my portfolio of digital experiences, each crafted with attention to detail and user-centered design principles.
            </p>
          </div>

          {/* Filter Carousel */}
          <div className="mb-10 sm:mb-12">
            <FilterCarousel
              filters={filterButtons}
              activeFilter={activeFilter}
              onFilterChange={handleFilterChange}
            />
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {displayedProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                category={project.category}
                links={project.links}
                tags={project.tags}
                index={index}
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

          {/* Load More Button - Only show for "All Projects" and if there are 3+ more projects to load */}
          {activeFilter === 'All Projects' && !isLoading && visibleCount < filteredProjects.length && (filteredProjects.length - visibleCount) >= 3 && (
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
            {activeFilter === 'All Projects' ? (
              <>
                Showing {displayedProjects.length} of {filteredProjects.length} projects
                {visibleCount < filteredProjects.length && (filteredProjects.length - visibleCount) >= 3 && (
                  <span className="block mt-1 text-xs">
                    Scroll down or click "Load More" to see more projects
                  </span>
                )}
              </>
            ) : (
              `Showing all ${filteredProjects.length} ${activeFilter} projects`
            )}
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center pb-12 sm:pb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">
            <span className="gemini-gradient-text">Ready to Start a Project?</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/70 mb-6 sm:mb-8 max-w-2xl mx-auto">
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