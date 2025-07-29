import { useAuth } from '../contexts/AuthContext'
import { Navigate } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { allProjects } from '../data/projects'

const ADMIN_EMAIL = 'ikeshala.peiris@gmail.com' // <-- Set your admin email here

// Built-in default categories
const defaultCategories = [
  { name: 'Web Solutions', color: '#3b82f6' },
  { name: 'Mobile Apps', color: '#22c55e' },
  { name: 'Web Applications', color: '#a21caf' },
  { name: 'Design Systems', color: '#f59e42' },
  { name: 'Branding & Identity', color: '#ec4899' },
]

// Helper to get and set all categories in localStorage
const getAllCategories = () => {
  const data = localStorage.getItem('allCategories')
  if (data) return JSON.parse(data)
  // If not present, initialize with defaults
  localStorage.setItem('allCategories', JSON.stringify(defaultCategories))
  return [...defaultCategories]
}
const setAllCategories = (categories: any[]) => {
  localStorage.setItem('allCategories', JSON.stringify(categories))
}

interface ProjectFormData {
  id: string
  title: string
  description: string
  image: string
  category: string
  figmaLink: string
  liveSiteUrl: string
  tags: string
  challenge: string
  solution: string
  results: string
  overview: string
  tools: string
  keyFeatures: string
  featured: boolean
  date?: string // new field
}

const AdminProjects = () => {
  const { user } = useAuth()
  const isAdmin = user && user.email === ADMIN_EMAIL
  const [projects, setProjects] = useState(allProjects)
  const [isEditing, setIsEditing] = useState(false)
  const [editingProject, setEditingProject] = useState<ProjectFormData | null>(null)
  const [showForm, setShowForm] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle')
  const [allCategories, setAllCategoriesState] = useState(getAllCategories())
  const [newCategory, setNewCategory] = useState('')
  const [newCategoryColor, setNewCategoryColor] = useState('#38bdf8') // default blue
  const [projectSearch, setProjectSearch] = useState('')
  const modalRef = useRef<HTMLDivElement>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const cardsPerPage = 6

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (showForm) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [showForm])

  // ESC key closes modal
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && showForm) setShowForm(false)
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [showForm])

  const categories = allCategories.map((c: any) => c.name)

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

  const initializeForm = (project?: any) => {
    if (project) {
      setEditingProject({
        id: project.id,
        title: project.title,
        description: project.description,
        image: project.image,
        category: project.category,
        figmaLink: project.figmaLink,
        liveSiteUrl: project.liveSiteUrl || '',
        tags: project.tags.join(', '),
        challenge: project.challenge,
        solution: project.solution,
        results: project.results,
        overview: project.overview || '',
        tools: project.tools.join(', '),
        keyFeatures: project.keyFeatures.join('\n'),
        featured: project.featured || false,
        date: project.date || ''
      })
      setIsEditing(true)
    } else {
      setEditingProject({
        id: '',
        title: '',
        description: '',
        image: '',
        category: 'Web Solutions',
        figmaLink: '',
        liveSiteUrl: '',
        tags: '',
        challenge: '',
        solution: '',
        results: '',
        overview: '',
        tools: '',
        keyFeatures: '',
        featured: false,
        date: ''
      })
      setIsEditing(false)
    }
    setShowForm(true)
  }

  const handleFormChange = (field: keyof ProjectFormData, value: string | boolean) => {
    if (editingProject) {
      setEditingProject({ ...editingProject, [field]: value })
    }
  }

  const saveProject = async () => {
    if (!editingProject) return

    setIsSaving(true)
    setSaveStatus('saving')

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000))

      const newProject = {
        ...editingProject,
        tags: editingProject.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
        tools: editingProject.tools.split(',').map(tool => tool.trim()).filter(tool => tool),
        keyFeatures: editingProject.keyFeatures.split('\n').map(feature => feature.trim()).filter(feature => feature),
        liveSiteUrl: editingProject.liveSiteUrl || undefined,
        overview: editingProject.overview || '',
        date: editingProject.date || ''
      }

      let updatedProjects
      if (isEditing) {
        // Update existing project
        updatedProjects = projects.map(p => p.id === editingProject.id ? newProject : p)
      } else {
        // Add new project
        const newId = (Math.max(...projects.map(p => parseInt(p.id))) + 1).toString()
        updatedProjects = [...projects, { ...newProject, id: newId }]
      }

      setProjects(updatedProjects)
      localStorage.setItem('portfolioProjects', JSON.stringify(updatedProjects))
      
      setSaveStatus('saved')
      setTimeout(() => setSaveStatus('idle'), 3000)
      setShowForm(false)
      setEditingProject(null)
    } catch (error) {
      console.error('Error saving project:', error)
      setSaveStatus('error')
      setTimeout(() => setSaveStatus('idle'), 3000)
    } finally {
      setIsSaving(false)
    }
  }

  const deleteProject = async (projectId: string) => {
    if (!confirm('Are you sure you want to delete this project?')) return

    setIsSaving(true)
    setSaveStatus('saving')

    try {
      await new Promise(resolve => setTimeout(resolve, 500))
      
      const updatedProjects = projects.filter(p => p.id !== projectId)
      setProjects(updatedProjects)
      localStorage.setItem('portfolioProjects', JSON.stringify(updatedProjects))
      
      setSaveStatus('saved')
      setTimeout(() => setSaveStatus('idle'), 3000)
    } catch (error) {
      console.error('Error deleting project:', error)
      setSaveStatus('error')
      setTimeout(() => setSaveStatus('idle'), 3000)
    } finally {
      setIsSaving(false)
    }
  }

  // Add new category handler
  const handleAddCategory = () => {
    if (!newCategory.trim()) return
    const exists = categories.includes(newCategory.trim())
    if (exists) return
    const updated = [...allCategories, { name: newCategory.trim(), color: newCategoryColor }]
    setAllCategoriesState(updated)
    setAllCategories(updated)
    setNewCategory('')
    setNewCategoryColor('#38bdf8')
  }

  // Compute filtered and sorted projects
  const filteredProjects = projects
    .slice()
    .sort((a, b) => a.title.localeCompare(b.title))
    .filter((project) =>
      project.title.toLowerCase().includes(projectSearch.toLowerCase()) ||
      project.category.toLowerCase().includes(projectSearch.toLowerCase())
    )

  const totalPages = Math.ceil(filteredProjects.length / cardsPerPage)
  const paginatedProjects = filteredProjects.slice((currentPage - 1) * cardsPerPage, currentPage * cardsPerPage)

  // Reset to page 1 if search/filter changes
  useEffect(() => { setCurrentPage(1) }, [projectSearch, projects])

  if (!isAdmin) {
    return <Navigate to="/" replace />
  }

  return (
    <div className="bg-deep-space min-h-screen pt-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 background-effects"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl floating-animation"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl floating-animation" style={{ animationDelay: '2s' }}></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <section className="py-20 px-6 relative">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gemini-gradient-text">Project Management</span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Add, edit, and manage your portfolio projects with full control over content and presentation.
            </p>
          </div>

          {/* Save Status Indicator */}
          {saveStatus !== 'idle' && (
            <div className={`text-center mb-6 p-4 rounded-xl ${
              saveStatus === 'saving' ? 'bg-blue-500/20 text-blue-300' :
              saveStatus === 'saved' ? 'bg-green-500/20 text-green-300' :
              'bg-red-500/20 text-red-300'
            }`}>
              {saveStatus === 'saving' && (
                <div className="flex items-center justify-center space-x-2">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current"></div>
                  <span>Saving project...</span>
                </div>
              )}
              {saveStatus === 'saved' && (
                <div className="flex items-center justify-center space-x-2">
                  <i className="fas fa-check-circle"></i>
                  <span>Project saved successfully!</span>
                </div>
              )}
              {saveStatus === 'error' && (
                <div className="flex items-center justify-center space-x-2">
                  <i className="fas fa-exclamation-circle"></i>
                  <span>Error saving project. Please try again.</span>
                </div>
              )}
            </div>
          )}

          {/* Search Bar for Projects */}
          <div className="glass-morphism rounded-2xl p-4 mb-8 flex items-center gap-4 max-w-xl mx-auto shadow-lg">
            <i className="fas fa-search text-white/70 text-xl"></i>
            <input
              type="text"
              value={projectSearch}
              onChange={e => setProjectSearch(e.target.value)}
              placeholder="Search projects by title or category..."
              className="flex-1 px-4 py-2 rounded-lg bg-transparent border-none text-white focus:outline-none placeholder-white/50"
            />
          </div>

          {/* Projects List - Move to Top */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-white">Current Projects to Edit</h2>
              <button
                onClick={() => initializeForm()}
                className="glass-button gradient-button px-6 py-3 rounded-xl font-semibold text-white flex items-center gap-2 shadow-md hover:scale-105 transition-transform"
              >
                <i className="fas fa-plus"></i>
                <span>Add New Project</span>
              </button>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginatedProjects.map((project) => (
                  <div
                    key={project.id}
                    className="relative group glass-morphism rounded-2xl p-0 overflow-hidden shadow-xl transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl"
                  >
                    {/* Image thumbnail */}
                    <div className="h-40 w-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                        onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
                      />
                      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                    {/* Card content */}
                    <div className="p-6 flex flex-col justify-between min-h-[180px]">
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="text-lg font-semibold text-white truncate max-w-[60%]">{project.title}</h4>
                          <span className={`text-xs px-3 py-1 rounded-full border whitespace-nowrap overflow-hidden text-ellipsis max-w-[120px]`} style={{display:'inline-block'}}>
                            {project.category}
                          </span>
                        </div>
                        <p className="text-white/70 text-sm mb-4 line-clamp-2">{project.description}</p>
                      </div>
                      <div className="flex gap-2 mt-2">
                        <button
                          onClick={() => initializeForm(project)}
                          className="glass-button px-4 py-2 rounded font-semibold text-white flex-1 shadow-md hover:scale-105 transition-transform"
                        >
                          <i className="fas fa-edit mr-2"></i> Edit
                        </button>
                        <button
                          onClick={() => deleteProject(project.id)}
                          className="glass-button px-3 py-2 rounded font-semibold text-white flex-0 flex items-center justify-center shadow-md hover:scale-105 transition-transform bg-red-500/70 hover:bg-red-500/90"
                          title="Delete"
                        >
                          <i className="fas fa-trash"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-8">
                <div className="glass-morphism rounded-xl px-4 py-2 flex gap-2 items-center shadow-md">
                  <button
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="px-3 py-1 rounded font-semibold text-white/80 hover:text-white disabled:opacity-40"
                  >
                    <i className="fas fa-chevron-left"></i>
                  </button>
                  {[...Array(totalPages)].map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentPage(idx + 1)}
                      className={`px-3 py-1 rounded font-semibold transition-all duration-200 ${currentPage === idx + 1 ? 'bg-white/20 text-white' : 'text-white/70 hover:bg-white/10'}`}
                    >
                      {idx + 1}
                    </button>
                  ))}
                  <button
                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="px-3 py-1 rounded font-semibold text-white/80 hover:text-white disabled:opacity-40"
                  >
                    <i className="fas fa-chevron-right"></i>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Project Form as Modal */}
          {showForm && editingProject && (
            <div
              className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur transition-all"
              onClick={e => {
                if (e.target === e.currentTarget) setShowForm(false)
              }}
            >
              <div
                ref={modalRef}
                className="glass-morphism rounded-2xl p-8 pt-16 w-full max-w-2xl mx-auto relative shadow-2xl animate-fadeInUp border border-white/30 z-[9999]"
                style={{ maxHeight: '90vh', overflowY: 'auto', background: 'rgba(30, 32, 54, 0.92)', boxShadow: '0 8px 40px 8px rgba(0,0,0,0.45)', marginTop: '48px' }}
              >
                <button
                  onClick={() => setShowForm(false)}
                  className="absolute top-4 right-4 text-white/70 hover:text-white text-2xl focus:outline-none z-[10000] bg-black/30 rounded-full p-2"
                  aria-label="Close"
                  style={{top: '1rem', right: '1rem'}}
                >
                  <i className="fas fa-times"></i>
                </button>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-white">
                    {isEditing ? 'Edit Project' : 'Add New Project'}
                  </h3>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white/80 mb-2">Title</label>
                    <input
                      type="text"
                      value={editingProject.title}
                      onChange={(e) => handleFormChange('title', e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-white/40 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-white/80 mb-2">Category</label>
                    <select
                      value={editingProject.category}
                      onChange={(e) => handleFormChange('category', e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-white/40 transition-colors"
                    >
                      {categories.map((category: string) => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-white/80 mb-2">Description</label>
                    <textarea
                      rows={3}
                      value={editingProject.description}
                      onChange={(e) => handleFormChange('description', e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-white/40 transition-colors resize-none"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-white/80 mb-2">Image File Name <span className='text-xs'>(in /public/images)</span></label>
                    <input
                      type="text"
                      value={editingProject.image}
                      onChange={(e) => handleFormChange('image', e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-white/40 transition-colors"
                      placeholder="e.g. myproject.png"
                    />
                    <p className="text-white/50 text-xs mt-1">Place your image file in the <b>public/images</b> folder, then enter the file name above (e.g. <b>myproject.png</b>).</p>
                    <div className="mt-2">
                      {editingProject.image && (
                        <img
                          src={"/images/" + editingProject.image}
                          alt="Preview"
                          className="w-32 h-32 object-cover rounded-lg border border-white/20 mx-auto"
                          onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
                        />
                      )}
                    </div>
                    <div className="mt-2">
                      <label className="block text-white/60 text-xs mb-1">(Optional) Upload image file:</label>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={async (e) => {
                          const file = e.target.files?.[0];
                          if (!file) return;
                          // Try to save file to public/images (only works in dev/local, not in production build)
                          // Show instructions if not possible
                          alert('Please manually copy your image to the public/images folder: ' + file.name);
                          handleFormChange('image', file.name);
                        }}
                        className="w-full text-xs text-white/70"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/80 mb-2">Figma Link</label>
                    <input
                      type="url"
                      value={editingProject.figmaLink}
                      onChange={(e) => handleFormChange('figmaLink', e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-white/40 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-white/80 mb-2">Live Site URL (Optional)</label>
                    <input
                      type="url"
                      value={editingProject.liveSiteUrl}
                      onChange={(e) => handleFormChange('liveSiteUrl', e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-white/40 transition-colors"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-white/80 mb-2">Tags (comma-separated)</label>
                    <input
                      type="text"
                      value={editingProject.tags}
                      onChange={(e) => handleFormChange('tags', e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-white/40 transition-colors"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-white/80 mb-2">Challenge</label>
                    <textarea
                      rows={3}
                      value={editingProject.challenge}
                      onChange={(e) => handleFormChange('challenge', e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-white/40 transition-colors resize-none"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-white/80 mb-2">Solution</label>
                    <textarea
                      rows={3}
                      value={editingProject.solution}
                      onChange={(e) => handleFormChange('solution', e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-white/40 transition-colors resize-none"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-white/80 mb-2">Results</label>
                    <textarea
                      rows={3}
                      value={editingProject.results}
                      onChange={(e) => handleFormChange('results', e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-white/40 transition-colors resize-none"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-white/80 mb-2">Project Overview</label>
                    <textarea
                      rows={4}
                      value={editingProject.overview}
                      onChange={(e) => handleFormChange('overview', e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-white/40 transition-colors resize-none"
                      placeholder="Describe the project overview, your role, timeline, and key responsibilities..."
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-white/80 mb-2">Tools (comma-separated)</label>
                    <input
                      type="text"
                      value={editingProject.tools}
                      onChange={(e) => handleFormChange('tools', e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-white/40 transition-colors"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-white/80 mb-2">Key Features (one per line)</label>
                    <textarea
                      rows={4}
                      value={editingProject.keyFeatures}
                      onChange={(e) => handleFormChange('keyFeatures', e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-white/40 transition-colors resize-none"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-white/80 mb-2">Date</label>
                    <input
                      type="date"
                      value={editingProject.date || ''}
                      onChange={e => handleFormChange('date', e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-white/40 transition-colors"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="flex items-center space-x-3 text-white/80">
                      <input
                        type="checkbox"
                        checked={editingProject.featured}
                        onChange={(e) => handleFormChange('featured', e.target.checked)}
                        className="w-5 h-5 text-blue-600 bg-white/10 border border-white/20 rounded focus:ring-blue-500 focus:ring-2"
                      />
                      <span>Mark as Featured Project (will appear on home page)</span>
                    </label>
                  </div>
                </div>

                <div className="flex justify-end space-x-4 mt-8 pt-8 border-t border-white/20">
                  <button
                    onClick={() => setShowForm(false)}
                    className="px-6 py-3 rounded-xl font-semibold text-white/70 hover:text-white transition-colors glass-morphism"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={saveProject}
                    disabled={isSaving}
                    className={`gradient-button px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 flex items-center space-x-2 ${
                      isSaving ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSaving ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        <span>Saving...</span>
                      </>
                    ) : (
                      <>
                        <i className="fas fa-save"></i>
                        <span>{isEditing ? 'Update Project' : 'Add Project'}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Category Management Section - Improved UI/UX */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-white mb-6">Category Management</h3>
            {/* Add Category UI */}
            <div className="glass-morphism rounded-2xl p-6 mb-8 flex flex-col md:flex-row items-center gap-4 shadow-lg">
              <input
                type="text"
                value={newCategory}
                onChange={e => setNewCategory(e.target.value)}
                placeholder="New category name"
                className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white/40"
              />
              <input
                type="color"
                value={newCategoryColor}
                onChange={e => setNewCategoryColor(e.target.value)}
                className="w-12 h-12 p-1 rounded-lg border border-white/20 bg-white/10"
                title="Pick badge color"
              />
              <button
                onClick={handleAddCategory}
                className="gradient-button px-6 py-2 rounded-lg font-semibold text-white shadow-md hover:scale-105 transition-transform"
              >
                Add Category
              </button>
            </div>

            {/* All Category Management (CRUD) - Modern Table UI */}
            {allCategories.length > 0 && (
              <div className="glass-morphism rounded-2xl p-6 mb-8 overflow-x-auto shadow-lg">
                <h4 className="text-lg font-semibold text-white mb-4">All Categories</h4>
                <table className="min-w-full text-white border-separate border-spacing-y-2">
                  <thead>
                    <tr className="bg-white/10">
                      <th className="py-3 px-4 text-left rounded-tl-lg">Color</th>
                      <th className="py-3 px-4 text-left">Name</th>
                      <th className="py-3 px-4 text-left rounded-tr-lg">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allCategories.map((cat: any, idx: number) => (
                      <tr key={cat.name} className="hover:bg-white/10 transition-colors rounded-lg">
                        <td className="py-2 px-4">
                          <span className="inline-block w-8 h-8 rounded-full border border-white/20 shadow" style={{ backgroundColor: cat.color }}></span>
                        </td>
                        <td className="py-2 px-4">
                          <input
                            type="text"
                            value={cat.name}
                            onChange={e => {
                              const updated = [...allCategories]
                              updated[idx].name = e.target.value
                              setAllCategoriesState(updated)
                            }}
                            className="px-3 py-2 rounded bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white/40 w-full shadow-sm"
                          />
                        </td>
                        <td className="py-2 px-4 flex gap-2 items-center">
                          <input
                            type="color"
                            value={cat.color}
                            onChange={e => {
                              const updated = [...allCategories]
                              updated[idx].color = e.target.value
                              setAllCategoriesState(updated)
                            }}
                            className="w-10 h-10 p-1 rounded border border-white/20 bg-white/10 shadow"
                            title="Pick badge color"
                          />
                          <button
                            onClick={() => {
                              // Save changes
                              const updated = [...allCategories]
                              setAllCategories(updated)
                              setAllCategoriesState(updated)
                            }}
                            className="gradient-button px-4 py-2 rounded font-semibold text-white shadow-md hover:scale-105 transition-transform"
                          >
                            Save
                          </button>
                          <button
                            onClick={() => {
                              // Warn if category is used by any project
                              const affectedProjects = projects.filter((p: any) => p.category === cat.name)
                              if (affectedProjects.length > 0) {
                                const names = affectedProjects.map((p: any) => p.title).join(', ')
                                if (!window.confirm(`Warning: The category \"${cat.name}\" is used by the following projects: ${names}.\nIf you delete this category, those projects will lose their category.\n\nAre you sure you want to delete it?`)) {
                                  return
                                }
                              } else {
                                if (!window.confirm(`Are you sure you want to delete the category \"${cat.name}\"?`)) {
                                  return
                                }
                              }
                              // Delete category
                              const updated = allCategories.filter((_: any, i: number) => i !== idx)
                              setAllCategories(updated)
                              setAllCategoriesState(updated)
                            }}
                            className="px-4 py-2 rounded font-semibold text-white bg-red-500/70 hover:bg-red-500/90 shadow-md hover:scale-105 transition-transform"
                            disabled={allCategories.length === 1}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  )
}

export default AdminProjects 