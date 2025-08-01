import Hero from '../components/Hero'
import ProjectCard from '../components/ProjectCard'
import ContactForm from '../components/ContactForm'
import { useState, useEffect } from 'react'
import { allProjects } from '../data/projects'
import { preloadImages } from '../utils/imageUtils'

const Home = () => {
  const [featuredProjects, setFeaturedProjects] = useState(allProjects.slice(0, 3))

  // Use static project data directly and preload images
  useEffect(() => {
    const featuredProjects = allProjects.filter(project => project.featured)
    if (featuredProjects.length >= 3) {
      setFeaturedProjects(featuredProjects.slice(0, 3))
    } else if (featuredProjects.length > 0) {
      // Mix featured and newest projects
      const remainingSlots = 3 - featuredProjects.length
      const newestNonFeatured = allProjects
        .filter(project => !project.featured)
        .slice(0, remainingSlots)
      setFeaturedProjects([...featuredProjects, ...newestNonFeatured])
    } else {
      // No featured projects, show newest 3
      setFeaturedProjects(allProjects.slice(0, 3))
    }

    // Preload the first 6 project images for faster loading
    const firstSixImages = allProjects.slice(0, 6).map(project => project.image)
    preloadImages(firstSixImages).catch(console.error)
  }, [])

  return (
    <div className="bg-deep-space min-h-screen">
      <Hero />
      
      {/* Featured Works Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              <span className="gemini-gradient-text">Featured Works</span>
            </h2>
            <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto">
              A curated selection of my best projects that showcase my design process and problem-solving approach.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {featuredProjects.map((project, index) => (
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
          {/* Removed 'View All Projects' button here */}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              <span className="gemini-gradient-text">Let's Create Something</span>
              <br />
              <span className="text-white">Amazing Together</span>
            </h2>
            <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto">
              Ready to transform your digital presence? I'd love to hear about your project and discuss how we can bring your vision to life.
            </p>
          </div>
          
          <ContactForm />
        </div>
      </section>
    </div>
  )
}

export default Home 