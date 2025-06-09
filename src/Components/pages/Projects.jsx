import React from 'react'
import PageContainer from '../common/PageContainer'
// import PageContainer from './PageContainer'

const Projects = () => {
  return (
    <PageContainer>
      <div className="flex items-center justify-center min-h-[calc(100vh-6rem)]">
        <div className="text-center space-y-8 animate-fade-in">
          {/* 3D Card Effect */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-gradient"></div>
            <div className="relative glass-effect rounded-3xl p-12 md:p-16 lg:p-20 transform group-hover:scale-105 transition-all duration-300 shadow-2xl">
              {/* Floating geometric shapes */}
              <div className="absolute top-8 right-6 w-5 h-5 border-2 border-orange-400 rotate-45 animate-pulse opacity-60"></div>
              <div className="absolute bottom-6 left-6 w-6 h-6 bg-red-400 rounded-full animate-bounce opacity-60"></div>
              <div className="absolute top-1/3 right-8 w-4 h-4 bg-pink-400 transform rotate-45 animate-spin opacity-60" style={{animationDuration: '3s'}}></div>
              <div className="absolute bottom-1/3 left-8 w-3 h-3 bg-orange-400 rounded-full animate-ping opacity-60"></div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gradient mb-6 animate-slide-in">
                Projects
              </h1>
              
              <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mx-auto animate-glow"></div>
              
              {/* Decorative elements */}
              <div className="mt-8 flex justify-center space-x-4">
                <div className="w-20 h-16 glass-effect rounded-2xl flex items-center justify-center transform hover:skew-y-6 transition-transform duration-300">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-red-500 rounded-lg animate-pulse"></div>
                </div>
                <div className="w-16 h-20 glass-effect rounded-3xl flex items-center justify-center transform hover:-skew-y-6 transition-transform duration-300">
                  <div className="w-6 h-6 bg-gradient-to-r from-red-400 to-pink-500 rotate-45 animate-spin" style={{animationDuration: '4s'}}></div>
                </div>
                <div className="w-18 h-18 glass-effect rounded-full flex items-center justify-center transform hover:rotate-180 transition-transform duration-500">
                  <div className="w-10 h-2 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full animate-bounce"></div>
                </div>
                <div className="w-14 h-22 glass-effect rounded-xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                  <div className="w-7 h-7 bg-gradient-to-r from-orange-500 to-red-600 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto animate-slide-in" style={{animationDelay: '0.2s'}}>
            Explore my creative work and technical achievements
          </p>
        </div>
      </div>
    </PageContainer>
  )
}

export default Projects