import { useAuth } from '../contexts/AuthContext'
import { Navigate } from 'react-router-dom'
import { useContent } from '../contexts/ContentContext'

const ADMIN_EMAIL = 'your-admin-email@example.com' // <-- Set your admin email here

const AdminContent = () => {
  const { user } = useAuth()
  const isAdmin = user && user.email === ADMIN_EMAIL
  const { content, updateContent, saveContent, isSaving, saveStatus } = useContent()

  if (!isAdmin) {
    return <Navigate to="/" replace />
  }

  // Handle input changes
  const handleInputChange = (field: keyof typeof content, value: string) => {
    updateContent({ [field]: value })
  }

  // Reset to default values
  const handleReset = () => {
    const defaultData = {
      name: 'Ikeshala Peiris',
      title: 'UI/UX Designer',
      email: 'ikeshala@example.com',
      bio: 'Passionate UI/UX designer with expertise in creating user-centered digital experiences.',
      designSkills: 'UI/UX Design, Wireframing, Prototyping, User Research, Design Systems',
      tools: 'Figma, Adobe XD, Sketch, InVision, Principle',
      technologies: 'HTML/CSS, JavaScript, React, Vue.js, Node.js'
    }
    
    // Update all fields at once
    Object.entries(defaultData).forEach(([key, value]) => {
      updateContent({ [key]: value })
    })
    
    localStorage.removeItem('portfolioContent')
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
              <span className="gemini-gradient-text">Content Management</span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Edit and manage your portfolio content, including personal information, skills, and project descriptions.
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
                  <span>Saving changes...</span>
                </div>
              )}
              {saveStatus === 'saved' && (
                <div className="flex items-center justify-center space-x-2">
                  <i className="fas fa-check-circle"></i>
                  <span>Changes saved successfully! Your portfolio has been updated.</span>
                </div>
              )}
              {saveStatus === 'error' && (
                <div className="flex items-center justify-center space-x-2">
                  <i className="fas fa-exclamation-circle"></i>
                  <span>Error saving changes. Please try again.</span>
                </div>
              )}
            </div>
          )}

          <div className="glass-morphism rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Personal Information */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Personal Information</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-white/80 mb-2">Name</label>
                    <input 
                      type="text" 
                      value={content.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-white/40 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 mb-2">Title</label>
                    <input 
                      type="text" 
                      value={content.title}
                      onChange={(e) => handleInputChange('title', e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-white/40 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 mb-2">Email</label>
                    <input 
                      type="email" 
                      value={content.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-white/40 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 mb-2">Bio</label>
                    <textarea 
                      rows={4}
                      value={content.bio}
                      onChange={(e) => handleInputChange('bio', e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-white/40 transition-colors resize-none"
                    />
                  </div>
                </div>
              </div>

              {/* Skills & Expertise */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Skills & Expertise</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-white/80 mb-2">Design Skills</label>
                    <textarea 
                      rows={3}
                      value={content.designSkills}
                      onChange={(e) => handleInputChange('designSkills', e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-white/40 transition-colors resize-none"
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 mb-2">Tools</label>
                    <textarea 
                      rows={3}
                      value={content.tools}
                      onChange={(e) => handleInputChange('tools', e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-white/40 transition-colors resize-none"
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 mb-2">Technologies</label>
                    <textarea 
                      rows={3}
                      value={content.technologies}
                      onChange={(e) => handleInputChange('technologies', e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-white/40 transition-colors resize-none"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between items-center mt-8 pt-8 border-t border-white/20">
              <button 
                onClick={handleReset}
                className="px-6 py-3 rounded-xl font-semibold text-white/70 hover:text-white transition-colors glass-morphism"
              >
                Reset to Default
              </button>
              <div className="flex space-x-4">
                <button 
                  onClick={saveContent}
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
                      <span>Save Changes</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default AdminContent 