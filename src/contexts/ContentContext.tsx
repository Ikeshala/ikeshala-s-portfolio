import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

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
  updateContent: (newContent: Partial<PortfolioContent>) => void
  saveContent: () => Promise<void>
  isSaving: boolean
  saveStatus: 'idle' | 'saving' | 'saved' | 'error'
}

const defaultContent: PortfolioContent = {
  name: 'Ikeshala Peiris',
  title: 'UI/UX Designer & Frontend Developer',
  email: 'ikeshala.peiris@gmail.com', // Updated email for deployment - Force rebuild: 2024-12-19
  bio: 'Passionate UI/UX designer and frontend developer with expertise in creating user-centered digital experiences. I specialize in designing intuitive interfaces and building responsive web applications that delight users.',
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
  const [content, setContent] = useState<PortfolioContent>(defaultContent)
  const [isSaving, setIsSaving] = useState(false)
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle')

  // Load saved content on mount
  useEffect(() => {
    const savedContent = localStorage.getItem('portfolioContent')
    if (savedContent) {
      try {
        const parsed = JSON.parse(savedContent)
        setContent(prev => ({ ...prev, ...parsed }))
      } catch (error) {
        console.error('Error loading saved content:', error)
      }
    }
  }, [])

  const updateContent = (newContent: Partial<PortfolioContent>) => {
    const updatedContent = { ...content, ...newContent };
    setContent(updatedContent);
    localStorage.setItem('portfolioContent', JSON.stringify(updatedContent));
  };

  const saveContent = async () => {
    setIsSaving(true)
    setSaveStatus('saving')

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Save to localStorage
      localStorage.setItem('portfolioContent', JSON.stringify(content))
      
      setSaveStatus('saved')
      setTimeout(() => setSaveStatus('idle'), 3000)
    } catch (error) {
      console.error('Error saving content:', error)
      setSaveStatus('error')
      setTimeout(() => setSaveStatus('idle'), 3000)
    } finally {
      setIsSaving(false)
    }
  }

  const value: ContentContextType = {
    content,
    updateContent,
    saveContent,
    isSaving,
    saveStatus
  }

  return (
    <ContentContext.Provider value={value}>
      {children}
    </ContentContext.Provider>
  )
} 