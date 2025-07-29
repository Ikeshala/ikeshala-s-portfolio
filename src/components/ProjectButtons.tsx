import { ProjectLink } from '../data/projects'

interface ProjectButtonsProps {
  links: ProjectLink[]
}

const ProjectButtons = ({ links }: ProjectButtonsProps) => {
  if (!links || links.length === 0) {
    return null
  }

  // If only one button, use gradient style
  if (links.length === 1) {
    const link = links[0]
    return (
      <div className="flex justify-center">
        <a
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center gemini-gradient text-white glow-effect w-full max-w-xs"
        >
          <i className={`${link.icon} mr-2`}></i>
          {link.label}
        </a>
      </div>
    )
  }

  // If two buttons, first is gradient, second is glass
  if (links.length === 2) {
    const [firstLink, secondLink] = links
    return (
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href={firstLink.url}
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center gemini-gradient text-white glow-effect flex-1"
        >
          <i className={`${firstLink.icon} mr-2`}></i>
          {firstLink.label}
        </a>
        <a
          href={secondLink.url}
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center glass-morphism text-white hover:bg-white/20 flex-1"
        >
          <i className={`${secondLink.icon} mr-2`}></i>
          {secondLink.label}
        </a>
      </div>
    )
  }

  // If more than 2 buttons, use a grid layout
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center ${
            index === 0 
              ? 'gemini-gradient text-white glow-effect' 
              : 'glass-morphism text-white hover:bg-white/20'
          }`}
        >
          <i className={`${link.icon} mr-2`}></i>
          {link.label}
        </a>
      ))}
    </div>
  )
}

export default ProjectButtons 