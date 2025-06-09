import React from 'react'

const PageContainer = ({ children, className = "" }) => {
  return (
    <div className={`min-h-screen pt-20 md:pt-24 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </div>
  )
}

export default PageContainer