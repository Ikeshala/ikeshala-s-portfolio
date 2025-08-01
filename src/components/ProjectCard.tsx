import { Link } from 'react-router-dom'
import { getCategoryColor } from '../utils/categoryColors'
import OptimizedImage from './OptimizedImage'

import { ProjectLink } from '../data/projects'

interface ProjectCardProps {
  id: string
  title: string
  description: string
  image: string
  category: string
  links: ProjectLink[]
  tags: string[]
  index?: number
}

const ProjectCard = ({ id, title, description, image, category, links, tags, index = 0 }: ProjectCardProps) => {
  return (
    <Link to={`/project/${id}`}>
      <div className="project-card glass-morphism rounded-2xl overflow-hidden cursor-pointer group h-full flex flex-col">
        <div className="h-48 sm:h-52 bg-gradient-to-br from-blue-500/20 to-purple-500/20 relative overflow-hidden flex-shrink-0">
          <OptimizedImage
            src={image}
            alt={title}
            className="w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-300"
            loading={index < 6 ? 'eager' : 'lazy'}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
        
        <div className="p-4 sm:p-6 flex-1 flex flex-col">
          <div className="flex items-center justify-between mb-3">
            <span className={`text-xs px-2.5 py-1 rounded-full border ${getCategoryColor(category)}`}>
              {category}
            </span>
            {links && links.length > 0 && (
              <a
                href={links[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors p-1"
                onClick={(e) => e.stopPropagation()}
              >
                <i className={`${links[0].icon} text-lg`}></i>
              </a>
            )}
          </div>
          
          <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white group-hover:text-white/90 transition-colors line-clamp-2">
            {title}
          </h3>
          
          <p className="text-white/70 text-sm mb-4 line-clamp-3 flex-1">
            {description}
          </p>
          
          <div className="flex flex-wrap gap-1.5 mt-auto">
            {tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="text-xs bg-white/10 text-white/80 px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
            {tags.length > 3 && (
              <span className="text-xs bg-white/5 text-white/60 px-2 py-1 rounded-full">
                +{tags.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProjectCard 