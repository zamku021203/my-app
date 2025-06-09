import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Projects from './components/pages/Projects'
import Contact from './Components/Pages/Contact'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    // Check for system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (prefersDark) {
      setDarkMode(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 transition-all duration-300">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-400/10 rounded-full blur-3xl animate-bounce"></div>
      </div>

      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <main className="relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  )
}

export default App