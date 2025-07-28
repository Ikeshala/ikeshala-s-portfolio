import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import About from './pages/About'
import Works from './pages/Works'
import ProjectDetail from './pages/ProjectDetail'
import AdminProjects from './pages/AdminProjects'
import AdminContent from './pages/AdminContent'
import AdminDashboard from './pages/AdminDashboard'
import Footer from './components/Footer'
import { AuthProvider, useAuth } from './contexts/AuthContext'
import { ContentProvider } from './contexts/ContentContext'

function AppContent() {
  const { clearAuth } = useAuth()

  useEffect(() => {
    // Clear any authentication state on app load to ensure users start as non-authenticated
    clearAuth()
  }, [clearAuth])

  return (
        <Router>
          <div className="min-h-screen flex flex-col">
            <Navigation />
            <div className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/works" element={<Works />} />
                <Route path="/project/:id" element={<ProjectDetail />} />
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/admin/projects" element={<AdminProjects />} />
                <Route path="/admin/content" element={<AdminContent />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </Router>
  )
}

function App() {
  return (
    <AuthProvider>
      <ContentProvider>
        <AppContent />
      </ContentProvider>
    </AuthProvider>
  )
}

export default App 