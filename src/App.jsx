import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedProjects from './components/FeaturedProjects'
import Portfolio from './components/Portfolio'
import ProjectDetail from './components/ProjectDetail'
import CommitMessageProject from './components/CommitMessageProject'
import VisionProject from './components/VisionProject'
import PullRequestsProject from './components/PullRequestsProject'
import About from './components/About'
import AfterHours from './components/AfterHours'
import Footer from './components/Footer'
import Lighthouse from './components/Lighthouse';

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
        <Route path="/portfolio/vision" element={<VisionProject />} />
        <Route path="/portfolio/pullrequests" element={<PullRequestsProject />} />
        <Route path="/about" element={<About />} />
        <Route path="/after-hours" element={<AfterHours />} />
        <Route path="/lighthouse" element={<Lighthouse />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
