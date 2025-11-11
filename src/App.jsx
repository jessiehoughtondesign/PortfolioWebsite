import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedProjects from './components/FeaturedProjects'
import Portfolio from './components/Portfolio'
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
        <Route path="/about" element={<About />} />
        <Route path="/after-hours" element={<AfterHours />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
