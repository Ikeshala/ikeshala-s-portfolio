import { useParams, Link } from 'react-router-dom'
import { getCategoryColor } from '../utils/categoryColors'
import { useState, useEffect } from 'react'
import { allProjects } from '../data/projects'
import OptimizedImage from '../components/OptimizedImage'
import ProjectButtons from '../components/ProjectButtons'

const ProjectDetail = () => {
  const { id } = useParams()
  const [projects, setProjects] = useState(allProjects)
  const [project, setProject] = useState<any>(null)

  // Load projects from localStorage on mount
  useEffect(() => {
    const savedProjects = localStorage.getItem('portfolioProjects')
    if (savedProjects) {
      try {
        const parsed = JSON.parse(savedProjects)
        setProjects(parsed)
      } catch (error) {
        console.error('Error loading saved projects:', error)
      }
    }
  }, [])

  // Find project by ID
  useEffect(() => {
    const foundProject = projects.find(p => p.id === id) || projects.find(p => p.id === '1')
    setProject(foundProject)
  }, [id, projects])

  if (!project) {
    return (
      <div className="bg-deep-space min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Project Not Found</h1>
          <Link to="/works" className="text-blue-400 hover:text-blue-300">
            Back to Works
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-deep-space min-h-screen pt-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 background-effects"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl floating-animation"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl floating-animation" style={{ animationDelay: '2s' }}></div>
      
      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        <div className="mb-8">
          <Link to="/works">
            <button className="glass-button glass-morphism px-4 py-2 rounded-lg text-white/70 hover:text-white transition-colors mb-6">
              <i className="fas fa-arrow-left mr-2"></i>
              Back to Works
            </button>
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <span className={`text-xs px-3 py-1 rounded-full border ${getCategoryColor(project.category)}`}>
              {project.category}
            </span>
            <a
              href={project.figmaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors"
            >
              <i className="fab fa-figma text-xl"></i>
            </a>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-white/70 max-w-3xl">
            {project.description}
          </p>
        </div>
        
        <div className="mb-12">
          <div className="relative h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl overflow-hidden">
            <OptimizedImage
              src={project.image}
              alt={project.title}
              className="w-full h-full opacity-80"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="glass-morphism rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-white">
                Challenge
              </h3>
              <p className="text-white/70 leading-relaxed">
                {project.challenge}
              </p>
            </div>
            <div className="glass-morphism rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-white">
                Solution
              </h3>
              <p className="text-white/70 leading-relaxed">
                {project.solution}
              </p>
            </div>
            <div className="glass-morphism rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-white">
                Results
              </h3>
              <p className="text-white/70 leading-relaxed">
                {project.results}
              </p>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="glass-morphism rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-6 text-white">
                Project Overview
              </h3>
              <div className="mb-6">
                <p className="text-white/70 leading-relaxed">
                  This project involved a comprehensive redesign and development process focused on creating an intuitive and engaging user experience. The work encompassed extensive user research, iterative design processes, and careful attention to both functionality and aesthetics to deliver a solution that meets user needs while exceeding business objectives.
                </p>
              </div>
              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-white">
                  Tools Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool: string, index: number) => (
                    <span key={index} className="text-xs bg-white/10 text-white/80 px-3 py-1 rounded-full">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-white">
                  Key Features
                </h4>
                <ul className="text-white/70 text-sm space-y-2">
                  {project.keyFeatures.map((feature: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <i className="fas fa-check text-green-400 mr-2 mt-0.5"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <ProjectButtons links={project.links} />
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10">
          <h3 className="text-lg font-semibold mb-4 text-white">
            Tags
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag: string, index: number) => (
              <span key={index} className="glass-morphism px-3 py-1 rounded-full text-sm text-white/80">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail 