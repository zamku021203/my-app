import React from 'react'
import PageContainer from '../common/PageContainer'

const About = () => {
  return (
    <PageContainer>
      <div className="flex items-center justify-center min-h-[calc(100vh-6rem)]">
        <div className="text-center space-y-8 animate-fade-in">
          {/* 3D Card Effect */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-gradient"></div>
            <div className="relative glass-effect rounded-3xl p-12 md:p-16 lg:p-20 transform group-hover:scale-105 transition-all duration-300 shadow-2xl">
              {/* Floating geometric shapes */}
              <div className="absolute top-6 right-8 w-6 h-6 border-2 border-green-400 rounded-full animate-spin opacity-60" style={{animationDuration: '4s'}}></div>
              <div className="absolute bottom-8 left-8 w-4 h-4 bg-blue-400 transform rotate-45 animate-bounce opacity-60"></div>
              <div className="absolute top-1/4 left-6 w-3 h-3 bg-purple-400 rounded-full animate-pulse opacity-60"></div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gradient mb-6 animate-slide-in">
                About
              </h1>
              
              <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mx-auto animate-glow"></div>
              
              {/* Decorative elements */}
              <div className="mt-8 flex justify-center space-x-6">
                <div className="w-14 h-14 glass-effect rounded-xl flex items-center justify-center transform hover:rotate-45 transition-transform duration-300">
                  <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-pulse"></div>
                </div>
                <div className="w-18 h-18 glass-effect rounded-full flex items-center justify-center transform hover:-rotate-12 transition-transform duration-300">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg animate-spin" style={{animationDuration: '6s'}}></div>
                </div>
                <div className="w-16 h-16 glass-effect rounded-2xl flex items-center justify-center transform hover:rotate-90 transition-transform duration-300">
                  <div className="w-7 h-7 bg-gradient-to-r from-purple-400 to-green-500 rounded-full animate-bounce"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto animate-slide-in" style={{animationDelay: '0.2s'}}>
            Discover my journey, skills, and passion for creating amazing experiences
          </p>
        </div>
      </div>
    </PageContainer>
  )
}

export default About