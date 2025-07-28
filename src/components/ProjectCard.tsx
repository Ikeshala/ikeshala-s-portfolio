import { Link } from 'react-router-dom'
import { getCategoryColor } from '../utils/categoryColors'

interface ProjectCardProps {
  id: string
  title: string
  description: string
  image: string
  category: string
  figmaLink?: string
  tags: string[]
}

const ProjectCard = ({ id, title, description, image, category, figmaLink, tags }: ProjectCardProps) => {
  return (
    <Link to={`/project/${id}`}>
      <div className="project-card glass-morphism rounded-2xl overflow-hidden cursor-pointer group">
        <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
        
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <span className={`text-xs px-3 py-1 rounded-full border ${getCategoryColor(category)}`}>
              {category}
            </span>
            {figmaLink && (
              <a
                href={figmaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <i className="fab fa-figma"></i>
              </a>
            )}
          </div>
          
          <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-white/90 transition-colors">
            {title}
          </h3>
          
          <p className="text-white/70 text-sm mb-4 line-clamp-2">
            {description}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs bg-white/10 text-white/80 px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProjectCard 