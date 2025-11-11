import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedProjects from './components/FeaturedProjects'
import Portfolio from './components/Portfolio'
import ProjectDetail from './components/ProjectDetail'
import CommitMessageProject from './components/CommitMessageProject'
import About from './components/About'
import AfterHours from './components/AfterHours'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <FeaturedProjects />
          </>
        } />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/memories" element={<ProjectDetail />} />
        <Route path="/portfolio/commitmessage" element={<CommitMessageProject />} />
        <Route path="/about" element={<About />} />
        <Route path="/after-hours" element={<AfterHours />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
