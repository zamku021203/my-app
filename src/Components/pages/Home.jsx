import React from 'react'
import PageContainer from '../common/PageContainer'
// If PageContainer is in the same directory
// import PageContainer from './PageContainer'

// If PageContainer is in a parent directory's common folder
// import PageContainer from '../common/PageContainer'

// If PageContainer is in src/components/common from src/pages
// import PageContainer from '../components/common/PageContainer'

// If using absolute imports from src
// import PageContainer from '../../common/PageContainer'


const Home = () => {
  return (
    <PageContainer>
      <div className="flex items-center justify-center min-h-[calc(100vh-6rem)]">
        <div className="text-center space-y-8 animate-fade-in">
          {/* 3D Card Effect */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-400 via-purple-500 to-pink-500 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-gradient"></div>
            <div className="relative glass-effect rounded-3xl p-12 md:p-16 lg:p-20 transform group-hover:scale-105 transition-all duration-300 shadow-2xl">
              {/* Floating geometric shapes */}
              <div className="absolute top-4 right-4 w-4 h-4 bg-primary-400 rounded-full animate-bounce opacity-60"></div>
              <div className="absolute bottom-6 left-6 w-3 h-3 bg-purple-400 rotate-45 animate-pulse opacity-60"></div>
              <div className="absolute top-1/3 left-4 w-2 h-2 bg-pink-400 rounded-full animate-ping opacity-60"></div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gradient mb-6 animate-slide-in">
                Home
              </h1>
              
              <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-purple-500 rounded-full mx-auto animate-glow"></div>
              
              {/* Decorative elements */}
              <div className="mt-8 flex justify-center space-x-4">
                <div className="w-16 h-16 glass-effect rounded-full flex items-center justify-center transform hover:rotate-12 transition-transform duration-300">
                  <div className="w-8 h-8 bg-gradient-to-r from-primary-400 to-purple-500 rounded-full animate-pulse"></div>
                </div>
                <div className="w-12 h-12 glass-effect rounded-full flex items-center justify-center transform hover:-rotate-12 transition-transform duration-300 mt-2">
                  <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-500 rotate-45"></div>
                </div>
                <div className="w-20 h-20 glass-effect rounded-full flex items-center justify-center transform hover:rotate-45 transition-transform duration-300 -mt-2">
                  <div className="w-10 h-10 bg-gradient-to-r from-pink-400 to-primary-400 rounded-full animate-spin" style={{animationDuration: '8s'}}></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto animate-slide-in" style={{animationDelay: '0.2s'}}>
            Welcome to my digital space where creativity meets technology
          </p>
        </div>
      </div>
    </PageContainer>
  )
}

export default Home