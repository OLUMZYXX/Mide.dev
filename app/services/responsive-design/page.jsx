'use client'
import React from 'react'

const ResponsiveDesign = () => {
  const deviceStats = [
    { device: 'Mobile', usage: '58%', icon: '📱' },
    { device: 'Desktop', usage: '35%', icon: '💻' },
    { device: 'Tablet', usage: '7%', icon: '📱' },
  ]

  const responsiveFeatures = [
    {
      icon: '📱',
      title: 'Mobile-First Development',
      description:
        'Starting with mobile design ensures optimal performance on the most-used devices.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: '📐',
      title: 'Flexible Grid Systems',
      description:
        'CSS Grid and Flexbox for layouts that adapt seamlessly to any screen size.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: '👆',
      title: 'Touch-Optimized UI',
      description:
        'Intuitive touch interactions with proper sizing for fingers, not cursors.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: '🔧',
      title: 'Progressive Enhancement',
      description:
        'Core functionality works everywhere, enhanced features for capable devices.',
      color: 'from-orange-500 to-red-500',
    },
  ]

  return (
    <section className='min-h-screen bg-primary py-16 xl:py-20 relative overflow-hidden'>
      {/* Background Elements */}
      <div className='absolute inset-0 opacity-20'>
        <div className='absolute top-20 right-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-pulse'></div>
        <div className='absolute bottom-20 left-20 w-32 h-32 bg-accent/15 rounded-full blur-2xl animate-pulse delay-1000'></div>
      </div>

      <div className='container mx-auto px-6 relative z-10'>
        {/* Hero Section */}
        <div className='text-center mb-16'>
          <div className='flex justify-center mb-8'>
            <div className='relative group'>
              <div className='w-24 h-24 bg-gradient-to-br from-accent to-accent/80 rounded-2xl flex items-center justify-center shadow-2xl shadow-accent/40 group-hover:scale-110 transition-all duration-300'>
                <span className='text-4xl'>📱</span>
              </div>
              <div className='absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-bounce'></div>
            </div>
          </div>

          <h1 className='text-5xl xl:text-7xl font-bold mb-8'>
            <span className='text-white'>Responsive</span>
            <br />
            <span className='text-accent'>Design</span>
          </h1>

          <p className='text-white/90 text-xl max-w-3xl mx-auto leading-relaxed mb-12'>
            Mobile-first development ensuring perfect performance and user
            experience across all devices, from smartphones to large displays.
          </p>

          {/* ...removed button... */}
        </div>

        {/* Device Usage Stats */}
        <div className='mb-16'>
          <h2 className='text-3xl font-bold text-center mb-8'>
            <span className='text-white'>Why</span>{' '}
            <span className='text-accent'>Mobile-First?</span>
          </h2>
          <div className='grid grid-cols-3 gap-6 max-w-2xl mx-auto'>
            {deviceStats.map((stat, index) => (
              <div key={index} className='text-center group'>
                <div className='text-5xl mb-4 group-hover:scale-110 transition-transform duration-300'>
                  {stat.icon}
                </div>
                <div className='text-3xl font-bold text-accent mb-2'>
                  {stat.usage}
                </div>
                <div className='text-white/70 font-medium'>{stat.device}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Responsive Features */}
        <div className='mb-16'>
          <h2 className='text-3xl font-bold text-center mb-12'>
            <span className='text-white'>Our</span>{' '}
            <span className='text-accent'>Approach</span>
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {responsiveFeatures.map((feature, index) => (
              <div
                key={index}
                className='group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-accent/30 transition-all duration-300 hover:transform hover:scale-105'
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <span className='text-2xl'>{feature.icon}</span>
                </div>

                <h3 className='text-xl font-bold text-white mb-4 group-hover:text-accent transition-colors duration-300'>
                  {feature.title}
                </h3>

                <p className='text-white/80 leading-relaxed'>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Benefits */}
        <div className='bg-gradient-to-r from-accent/10 to-accent/5 rounded-2xl p-8 md:p-12 border border-accent/20 mb-16'>
          <h2 className='text-3xl font-bold text-center mb-8'>
            <span className='text-white'>What You</span>{' '}
            <span className='text-accent'>Get</span>
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 text-center'>
            {[
              {
                title: 'Mobile-First Layouts',
                desc: 'Optimized for touch and small screens',
              },
              {
                title: 'Flexible Grids',
                desc: 'CSS Grid & Flexbox for any screen size',
              },
              {
                title: 'Touch-Friendly UI',
                desc: 'Proper sizing for finger navigation',
              },
              {
                title: 'Device Testing',
                desc: 'Verified across multiple devices',
              },
              {
                title: 'Progressive Enhancement',
                desc: 'Works everywhere, enhanced when possible',
              },
            ].map((benefit, index) => (
              <div key={index} className='group'>
                <div className='w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/30 transition-colors duration-300'>
                  <div className='w-6 h-6 bg-accent rounded-full group-hover:animate-pulse'></div>
                </div>
                <h3 className='text-lg font-semibold text-white mb-2 group-hover:text-accent transition-colors duration-300'>
                  {benefit.title}
                </h3>
                <p className='text-white/70 text-sm leading-relaxed'>
                  {benefit.desc}
                </p>
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

export default ResponsiveDesign
