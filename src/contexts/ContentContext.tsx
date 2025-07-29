import React, { createContext, useContext, ReactNode } from 'react'

interface PortfolioContent {
  name: string
  title: string
  email: string
  bio: string
  designSkills: string
  tools: string
  technologies: string
}

interface ContentContextType {
  content: PortfolioContent
}

const defaultContent: PortfolioContent = {
  name: 'Ikeshala Peiris',
  title: 'UI/UX Designer',
  email: 'ikeshala.peiris@gmail.com',
  bio: 'I design intuitive and beautiful digital experiences that solve real problems and delight users.',
  designSkills: 'UI/UX Design, Wireframing, Prototyping, User Research, Design Systems, Responsive Design',
  tools: 'Figma, Adobe XD, Sketch, InVision, Principle, Photoshop, Illustrator',
  technologies: 'HTML/CSS, JavaScript, React, TypeScript, Tailwind CSS, Node.js, Git'
}

const ContentContext = createContext<ContentContextType | undefined>(undefined)

export const useContent = () => {
  const context = useContext(ContentContext)
  if (!context) {
    throw new Error('useContent must be used within a ContentProvider')
  }
  return context
}

interface ContentProviderProps {
  children: ReactNode
}

export const ContentProvider: React.FC<ContentProviderProps> = ({ children }) => {
  const value: ContentContextType = {
    content: defaultContent
  }

  return (
    <ContentContext.Provider value={value}>
      {children}
    </ContentContext.Provider>
  )
} 