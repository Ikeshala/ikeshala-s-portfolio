import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import About from './pages/About'
import Works from './pages/Works'
import ProjectDetail from './pages/ProjectDetail'
import Footer from './components/Footer'
import { ContentProvider } from './contexts/ContentContext'

function App() {
  return (
    <ContentProvider>
      <Router basename="/ikeshala-s-portfolio">
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/works" element={<Works />} />
              <Route path="/project/:id" element={<ProjectDetail />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ContentProvider>
  )
}

export default App 