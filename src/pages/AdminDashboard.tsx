import { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Link } from 'react-router-dom'
import AdminLogin from '../components/AdminLogin'

const ADMIN_EMAIL = 'ikeshala.peiris@gmail.com' // Updated admin email

const AdminDashboard = () => {
  const { user } = useAuth()
  const isAdmin = user && user.email === ADMIN_EMAIL
  const [showLogin, setShowLogin] = useState(!isAdmin)

  if (!isAdmin && !showLogin) {
    window.location.href = '/'
    return null
  }

  return (
    <div className="bg-deep-space min-h-screen pt-24 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 background-effects"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl floating-animation"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl floating-animation" style={{ animationDelay: '2s' }}></div>
      <div className="relative z-10 w-full max-w-md mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8 gemini-gradient-text">Admin Dashboard</h1>
        {isAdmin ? (
          <div className="space-y-6">
            <Link to="/admin/content">
              <button className="w-full gradient-button px-8 py-4 rounded-xl font-semibold text-white text-xl mb-4">Edit Content</button>
            </Link>
            <Link to="/admin/projects">
              <button className="w-full glass-button px-8 py-4 rounded-xl font-semibold text-white text-xl">Manage Projects</button>
            </Link>
            <Link to="/">
              <button className="w-full px-8 py-4 rounded-xl font-semibold text-white/70 hover:text-white transition-colors glass-morphism">
                Back to Site
              </button>
            </Link>
          </div>
        ) : (
          showLogin && <AdminLogin onClose={() => setShowLogin(false)} />
        )}
      </div>
    </div>
  )
}

export default AdminDashboard 