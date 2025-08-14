'use client'
import React from 'react'

const WebDevelopment = () => {
  const techStack = [
    { name: 'React', icon: '⚛️', color: 'from-blue-500 to-cyan-500' },
    { name: 'Next.js', icon: '▲', color: 'from-gray-700 to-gray-900' },
    { name: 'TypeScript', icon: '🔷', color: 'from-blue-600 to-blue-800' },
    { name: 'Redux', icon: '🔄', color: 'from-purple-600 to-purple-800' },
  ]

  const appTypes = [
    {
      icon: '📱',
      title: 'Single Page Apps',
      description:
        'Fast, interactive SPAs with seamless navigation and real-time updates.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: '🌐',
      title: 'Multi-Page Apps',
      description:
        'SEO-optimized applications with server-side rendering and static generation.',
      color: 'from-blue-500 to-indigo-500',
    },
    {
      icon: '🏗️',
      title: 'Component Architecture',
      description:
        'Reusable, maintainable components following modern design patterns.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: '🔗',
      title: 'API Integration',
      description:
        'Seamless connection to backend services with robust error handling.',
      color: 'from-orange-500 to-red-500',
    },
  ]

  return (
    <section className='min-h-screen bg-primary py-16 xl:py-20 relative overflow-hidden'>
      {/* Background Elements */}
      <div className='absolute inset-0 opacity-20'>
        <div className='absolute top-32 right-16 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-pulse'></div>
        <div className='absolute bottom-32 left-16 w-40 h-40 bg-accent/15 rounded-full blur-2xl animate-pulse delay-700'></div>
      </div>

      <div className='container mx-auto px-6 relative z-10'>
        {/* Hero Section */}
        <div className='text-center mb-20'>
          <div className='flex justify-center mb-8'>
            <div className='relative group'>
              <div className='w-28 h-28 bg-gradient-to-br from-accent to-accent/80 rounded-3xl flex items-center justify-center shadow-2xl shadow-accent/50 group-hover:scale-110 transition-all duration-500'>
                <span className='text-5xl'>⚛️</span>
              </div>
              <div className='absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center animate-spin'>
                <span className='text-white text-lg font-bold'>▲</span>
              </div>
            </div>
          </div>

          <h1 className='text-6xl xl:text-8xl font-bold mb-8'>
            <span className='text-white'>Web App</span>
            <br />
            <span className='text-accent'>Development</span>
          </h1>

          <p className='text-white/90 text-xl max-w-4xl mx-auto leading-relaxed mb-12'>
            Modern React/Next.js applications built with performance
            optimization, best practices, and scalable architecture for the
            future.
          </p>

          {/* ...removed button... */}
        </div>

        {/* Tech Stack */}
        <div className='mb-20'>
          <h2 className='text-3xl font-bold text-center mb-12'>
            <span className='text-white'>Tech</span>{' '}
            <span className='text-accent'>Stack</span>
          </h2>

          <div className='grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto'>
            {techStack.map((tech, index) => (
              <div key={index} className='group text-center'>
                <div
                  className={`w-20 h-20 bg-gradient-to-r ${tech.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <span className='text-3xl text-white'>{tech.icon}</span>
                </div>
                <div className='text-white font-semibold group-hover:text-accent transition-colors duration-300'>
                  {tech.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* App Types */}
        <div className='mb-20'>
          <h2 className='text-3xl font-bold text-center mb-12'>
            <span className='text-white'>What We</span>{' '}
            <span className='text-accent'>Build</span>
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {appTypes.map((app, index) => (
              <div
                key={index}
                className='group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-accent/30 transition-all duration-300 hover:transform hover:scale-105'
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${app.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <span className='text-2xl'>{app.icon}</span>
                </div>

                <h3 className='text-xl font-bold text-white mb-4 group-hover:text-accent transition-colors duration-300'>
                  {app.title}
                </h3>

                <p className='text-white/80 leading-relaxed'>
                  {app.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div className='bg-gradient-to-r from-accent/10 to-accent/5 rounded-2xl p-8 md:p-12 border border-accent/20 mb-16'>
          <h2 className='text-3xl font-bold text-center mb-8'>
            <span className='text-white'>Why Choose</span>{' '}
            <span className='text-accent'>Our Development?</span>
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>
            {[
              {
                icon: '⚡',
                title: 'Performance First',
                desc: 'Optimized for speed and user experience',
              },
              {
                icon: '🎯',
                title: 'Best Practices',
                desc: 'Clean code following industry standards',
              },
              {
                icon: '🚀',
                title: 'Scalable Architecture',
                desc: 'Built to grow with your business needs',
              },
            ].map((feature, index) => (
              <div key={index} className='group'>
                <div className='text-5xl mb-4 group-hover:scale-110 transition-transform duration-300'>
                  {feature.icon}
                </div>
                <h3 className='text-xl font-semibold text-white mb-3 group-hover:text-accent transition-colors duration-300'>
                  {feature.title}
                </h3>
                <p className='text-white/80 leading-relaxed'>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        {/* ...removed buttons... */}
      </div>
    </section>
  )
}

export default WebDevelopment
