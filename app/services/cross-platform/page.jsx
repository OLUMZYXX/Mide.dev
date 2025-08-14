'use client'
import React from 'react'

const CrossPlatform = () => {
  const platforms = [
    {
      category: 'Desktop Browsers',
      icon: '🖥️',
      items: [
        {
          name: 'Chrome',
          version: 'Latest + 2 versions',
          status: 'Full Support',
        },
        {
          name: 'Firefox',
          version: 'Latest + 2 versions',
          status: 'Full Support',
        },
        {
          name: 'Safari',
          version: 'Latest + 1 version',
          status: 'Full Support',
        },
        {
          name: 'Edge',
          version: 'Latest + 2 versions',
          status: 'Full Support',
        },
        {
          name: 'Internet Explorer',
          version: 'IE11+',
          status: 'Polyfill Support',
        },
      ],
    },
    {
      category: 'Mobile Platforms',
      icon: '📱',
      items: [
        { name: 'iOS Safari', version: 'iOS 12+', status: 'Optimized' },
        { name: 'Chrome Mobile', version: 'Android 7+', status: 'Optimized' },
        { name: 'Samsung Internet', version: 'Latest', status: 'Full Support' },
        { name: 'Firefox Mobile', version: 'Latest', status: 'Full Support' },
      ],
    },
    {
      category: 'Operating Systems',
      icon: '💻',
      items: [
        { name: 'Windows', version: '10/11', status: 'Native Support' },
        { name: 'macOS', version: '10.14+', status: 'Native Support' },
        { name: 'Linux', version: 'Ubuntu/Fedora', status: 'Tested' },
        { name: 'Android', version: '7.0+', status: 'Mobile Optimized' },
        { name: 'iOS', version: '12.0+', status: 'Mobile Optimized' },
      ],
    },
  ]

  const testingAreas = [
    {
      icon: '🧪',
      title: 'Automated Testing',
      description: 'Comprehensive test suites across multiple environments',
      features: [
        'Cross-browser automated testing',
        'Device simulation testing',
        'Performance benchmarking',
        'Accessibility compliance',
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: '🔧',
      title: 'Polyfill Integration',
      description: 'Smart polyfills for legacy browser compatibility',
      features: [
        'ES6+ feature polyfills',
        'CSS Grid/Flexbox fallbacks',
        'Modern API implementations',
        'Progressive enhancement',
      ],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: '📊',
      title: 'Performance Testing',
      description: 'Ensuring optimal performance across all platforms',
      features: [
        'Load time optimization',
        'Memory usage analysis',
        'Network condition testing',
        'Battery usage monitoring',
      ],
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: '🛠️',
      title: 'Bug Resolution',
      description: 'Systematic approach to cross-platform issues',
      features: [
        'Platform-specific debugging',
        'Regression testing',
        'User agent detection',
        'Fallback implementations',
      ],
      color: 'from-orange-500 to-red-500',
    },
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'Full Support':
        return 'text-accent'
      case 'Optimized':
        return 'text-green-400'
      case 'Native Support':
        return 'text-blue-400'
      case 'Polyfill Support':
        return 'text-yellow-400'
      case 'Mobile Optimized':
        return 'text-purple-400'
      case 'Tested':
        return 'text-cyan-400'
      default:
        return 'text-white/70'
    }
  }

  return (
    <section className='min-h-screen bg-primary py-16 xl:py-20 relative overflow-hidden'>
      {/* Animated Background Elements */}
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute top-20 left-10 w-32 h-32 bg-accent/20 rounded-full animate-pulse'></div>
        <div className='absolute top-60 right-20 w-20 h-20 bg-accent/30 rounded-full animate-bounce'></div>
        <div className='absolute bottom-40 left-1/4 w-16 h-16 bg-accent/25 rounded-full animate-pulse'></div>
      </div>

      <div className='container mx-auto px-6 relative z-10'>
        {/* Hero Section */}
        <div className='text-center mb-20'>
          <div className='flex justify-center mb-8'>
            <div className='relative'>
              <div className='w-24 h-24 bg-gradient-to-br from-accent to-accent/70 rounded-2xl flex items-center justify-center shadow-2xl shadow-accent/30 animate-pulse'>
                <svg
                  className='w-12 h-12 text-primary'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z' />
                </svg>
              </div>
              <div className='absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-bounce'></div>
            </div>
          </div>

          <h1 className='text-5xl xl:text-7xl font-bold mb-6'>
            <span className='text-white'>Cross-Platform</span>
            <br />
            <span className='text-accent bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent'>
              Excellence
            </span>
          </h1>

          <p className='text-white/80 text-xl max-w-4xl mx-auto leading-relaxed'>
            Delivering consistent, high-quality user experiences across every
            browser, device, and platform. Your application works flawlessly
            everywhere your users are.
          </p>
        </div>

        {/* Platform Support Matrix */}
        <div className='mb-20'>
          <h2 className='text-3xl font-bold text-center mb-12'>
            <span className='text-white'>Platform</span>{' '}
            <span className='text-accent'>Support Matrix</span>
          </h2>

          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
            {platforms.map((platform, index) => (
              <div
                key={index}
                className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-accent/30 transition-all duration-300'
              >
                <div className='flex items-center mb-6'>
                  <span className='text-3xl mr-4'>{platform.icon}</span>
                  <h3 className='text-xl font-bold text-white'>
                    {platform.category}
                  </h3>
                </div>

                <div className='space-y-4'>
                  {platform.items.map((item, idx) => (
                    <div
                      key={idx}
                      className='flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-200'
                    >
                      <div>
                        <div className='text-white font-medium'>
                          {item.name}
                        </div>
                        <div className='text-white/60 text-sm'>
                          {item.version}
                        </div>
                      </div>
                      <span
                        className={`text-sm font-semibold ${getStatusColor(
                          item.status
                        )}`}
                      >
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testing & Compatibility Services */}
        <div className='mb-20'>
          <h2 className='text-3xl font-bold text-center mb-12'>
            <span className='text-white'>Testing &</span>{' '}
            <span className='text-accent'>Compatibility Services</span>
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {testingAreas.map((area, index) => (
              <div
                key={index}
                className='group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-accent/30 transition-all duration-300 hover:transform hover:scale-105'
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${area.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <span className='text-2xl'>{area.icon}</span>
                </div>

                <h3 className='text-xl font-bold text-white mb-4 group-hover:text-accent transition-colors duration-300'>
                  {area.title}
                </h3>

                <p className='text-white/70 mb-6 leading-relaxed'>
                  {area.description}
                </p>

                <ul className='space-y-3'>
                  {area.features.map((feature, idx) => (
                    <li key={idx} className='flex items-center text-white/80'>
                      <div className='w-2 h-2 bg-accent rounded-full mr-3 group-hover:animate-pulse'></div>
                      <span className='text-sm'>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Compatibility Process */}
        <div className='mb-20'>
          <div className='bg-gradient-to-r from-accent/10 via-accent/5 to-transparent rounded-2xl p-8 md:p-12 border border-accent/20'>
            <h2 className='text-3xl font-bold mb-12 text-center'>
              <span className='text-white'>Our</span>{' '}
              <span className='text-accent'>Compatibility Process</span>
            </h2>

            <div className='grid grid-cols-1 md:grid-cols-5 gap-6'>
              {[
                {
                  step: '1',
                  title: 'Analysis',
                  desc: 'Target platform identification and requirements gathering',
                  icon: '🔍',
                },
                {
                  step: '2',
                  title: 'Strategy',
                  desc: 'Cross-platform compatibility strategy development',
                  icon: '📋',
                },
                {
                  step: '3',
                  title: 'Implementation',
                  desc: 'Code with polyfills and platform-specific optimizations',
                  icon: '⚡',
                },
                {
                  step: '4',
                  title: 'Testing',
                  desc: 'Comprehensive testing across all target platforms',
                  icon: '🧪',
                },
                {
                  step: '5',
                  title: 'Monitoring',
                  desc: 'Ongoing compatibility monitoring and updates',
                  icon: '📊',
                },
              ].map((process, index) => (
                <div key={index} className='text-center group relative'>
                  <div className='w-16 h-16 bg-accent text-primary rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 group-hover:bg-accent/80 transition-all duration-300 group-hover:scale-110'>
                    <span className='text-lg'>{process.icon}</span>
                  </div>
                  <div className='absolute -top-2 -right-2 w-6 h-6 bg-primary text-accent rounded-full flex items-center justify-center text-xs font-bold'>
                    {process.step}
                  </div>
                  <h3 className='text-lg font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300'>
                    {process.title}
                  </h3>
                  <p className='text-white/70 text-sm leading-relaxed'>
                    {process.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8 mb-20'>
          {[
            { number: '15+', label: 'Browser Versions', icon: '🌐' },
            { number: '99.9%', label: 'Compatibility Rate', icon: '✅' },
            { number: '5+', label: 'OS Platforms', icon: '💻' },
            { number: '24/7', label: 'Monitoring', icon: '⚡' },
          ].map((stat, index) => (
            <div key={index} className='text-center group'>
              <div className='text-4xl mb-4 group-hover:scale-110 transition-transform duration-300'>
                {stat.icon}
              </div>
              <div className='text-3xl font-bold text-accent mb-2 group-hover:text-accent/80 transition-colors duration-300'>
                {stat.number}
              </div>
              <div className='text-white/70 font-medium'>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        {/* ...removed buttons... */}
      </div>
    </section>
  )
}

export default CrossPlatform
