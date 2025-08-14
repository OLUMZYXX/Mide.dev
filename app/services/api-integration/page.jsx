'use client'
import React from 'react'

const APIIntegration = () => {
  const services = [
    {
      icon: '🔗',
      title: 'REST API Integration',
      description:
        'Seamless connection to RESTful services with optimized data fetching and caching strategies.',
      features: [
        'HTTP methods implementation',
        'Response parsing',
        'Request optimization',
        'Cache management',
      ],
    },
    {
      icon: '⚡',
      title: 'GraphQL Implementation',
      description:
        'Efficient data querying with GraphQL for precise data requirements and reduced over-fetching.',
      features: [
        'Query optimization',
        'Schema design',
        'Real-time subscriptions',
        'Fragment management',
      ],
    },
    {
      icon: '🔐',
      title: 'Authentication & Security',
      description:
        'Robust authentication flows including OAuth, JWT, and API key management systems.',
      features: [
        'OAuth 2.0 flows',
        'JWT token handling',
        'Secure storage',
        'Session management',
      ],
    },
    {
      icon: '🛠️',
      title: 'Third-Party Services',
      description:
        'Integration with popular services like Stripe, Firebase, AWS, and social media APIs.',
      features: [
        'Payment gateways',
        'Cloud services',
        'Social media APIs',
        'Analytics integration',
      ],
    },
    {
      icon: '⚙️',
      title: 'State Management',
      description:
        'Advanced state management solutions for complex data flows and application state.',
      features: [
        'Redux/Zustand setup',
        'Context optimization',
        'Data normalization',
        'Real-time updates',
      ],
    },
    {
      icon: '🛡️',
      title: 'Error Handling',
      description:
        'Comprehensive error handling with retry mechanisms and user-friendly error states.',
      features: [
        'Global error handling',
        'Retry strategies',
        'Fallback mechanisms',
        'User notifications',
      ],
    },
  ]

  const technologies = [
    { name: 'React Query', color: 'from-blue-500 to-blue-600' },
    { name: 'Axios', color: 'from-purple-500 to-purple-600' },
    { name: 'GraphQL', color: 'from-pink-500 to-pink-600' },
    { name: 'Apollo Client', color: 'from-indigo-500 to-indigo-600' },
    { name: 'Firebase', color: 'from-orange-500 to-orange-600' },
    { name: 'Stripe API', color: 'from-green-500 to-green-600' },
  ]

  return (
    <section className='min-h-screen bg-primary py-16 xl:py-20 relative overflow-hidden'>
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-5'>
        <div
          className='absolute inset-0'
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300ff99' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className='container mx-auto px-6 relative z-10'>
        {/* Hero Section */}
        <div className='text-center mb-20'>
          <div className='inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-accent to-accent/80 rounded-full mb-8 shadow-2xl shadow-accent/40'>
            <svg
              className='w-12 h-12 text-primary'
              fill='currentColor'
              viewBox='0 0 24 24'
            >
              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z' />
            </svg>
          </div>

          <h1 className='text-5xl xl:text-6xl font-bold mb-6'>
            <span className='text-white'>API</span>{' '}
            <span className='text-accent'>Integration</span>
          </h1>

          <p className='text-white/80 text-xl max-w-4xl mx-auto leading-relaxed'>
            Connecting your applications to the digital ecosystem through
            seamless API integrations, creating dynamic, data-driven experiences
            that scale with your business needs.
          </p>
        </div>

        {/* Main Services Grid */}
        <div className='mb-20'>
          <h2 className='text-4xl font-bold text-center mb-16'>
            <span className='text-white'>Our</span>{' '}
            <span className='text-accent'>Services</span>
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {services.map((service, index) => (
              <div
                key={index}
                className='group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-accent/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/20'
              >
                <div className='text-4xl mb-6 group-hover:scale-110 transition-transform duration-300'>
                  {service.icon}
                </div>
                <h3 className='text-xl font-bold text-white mb-4 group-hover:text-accent transition-colors duration-300'>
                  {service.title}
                </h3>
                <p className='text-white/70 mb-6 leading-relaxed'>
                  {service.description}
                </p>
                <ul className='space-y-3'>
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className='flex items-center text-sm text-white/60'
                    >
                      <div className='w-2 h-2 bg-accent rounded-full mr-3 group-hover:bg-accent/80'></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Section */}
        <div className='mb-20'>
          <h2 className='text-4xl font-bold text-center mb-16'>
            <span className='text-white'>Technologies &</span>{' '}
            <span className='text-accent'>Tools</span>
          </h2>

          <div className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12'>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6'>
              {technologies.map((tech, index) => (
                <div key={index} className='group'>
                  <div
                    className={`bg-gradient-to-r ${
                      tech.color
                    } p-5 rounded-2xl text-center transform transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-${
                      tech.color.split('-')[1]
                    }-500/30 shadow-lg group-hover:-translate-y-2`}
                  >
                    <span className='text-white font-bold text-sm block'>
                      {tech.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className='text-center mt-8'>
              <p className='text-white/70 text-sm'>
                And many more cutting-edge tools for seamless integration
              </p>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className='mb-20'>
          <h2 className='text-4xl font-bold text-center mb-16'>
            <span className='text-white'>Integration</span>{' '}
            <span className='text-accent'>Process</span>
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative'>
            {[
              {
                step: '01',
                title: 'Analysis',
                desc: 'API documentation review and requirements analysis',
              },
              {
                step: '02',
                title: 'Design',
                desc: 'Architecture planning and integration strategy',
              },
              {
                step: '03',
                title: 'Implementation',
                desc: 'Secure coding with error handling and validation',
              },
              {
                step: '04',
                title: 'Testing',
                desc: 'Comprehensive testing and performance optimization',
              },
            ].map((process, index) => (
              <div key={index} className='text-center group relative'>
                <div className='w-20 h-20 bg-accent text-primary rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6 group-hover:bg-accent/80 transition-colors duration-300 shadow-lg shadow-accent/30'>
                  {process.step}
                </div>
                <h3 className='text-lg font-bold text-white mb-4 group-hover:text-accent transition-colors duration-300'>
                  {process.title}
                </h3>
                <p className='text-white/70 text-sm leading-relaxed'>
                  {process.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Benefits */}
        <div className='bg-gradient-to-r from-accent/10 to-accent/5 rounded-3xl p-8 md:p-12 border border-accent/20 mb-20'>
          <h2 className='text-4xl font-bold text-center mb-12'>
            <span className='text-white'>Why Choose</span>{' '}
            <span className='text-accent'>Professional API Integration?</span>
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {[
              {
                title: 'Scalability',
                desc: 'Built to handle growing data demands',
                icon: '📈',
              },
              {
                title: 'Security',
                desc: 'Enterprise-grade security implementation',
                icon: '🔒',
              },
              {
                title: 'Performance',
                desc: 'Optimized for speed and efficiency',
                icon: '⚡',
              },
              {
                title: 'Reliability',
                desc: 'Robust error handling and fallbacks',
                icon: '🛡️',
              },
            ].map((benefit, index) => (
              <div key={index} className='text-center group'>
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform duration-300'>
                  {benefit.icon}
                </div>
                <h3 className='text-lg font-semibold text-white mb-3 group-hover:text-accent transition-colors duration-300'>
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
        <div className='text-center bg-white/5 backdrop-blur-sm rounded-3xl p-12 md:p-16 border border-white/10'>
          <h2 className='text-3xl font-bold text-white mb-6'>
            Ready to integrate powerful APIs into your project?
          </h2>
          <p className='text-white/70 text-lg mb-8 max-w-2xl mx-auto'>
            Let's discuss how API integration can transform your application
          </p>
          <a
            href='/contact'
            className='bg-gradient-to-r from-accent to-accent/80 text-primary px-12 py-5 rounded-xl font-semibold hover:from-accent/80 hover:to-accent transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-accent/30 inline-block text-lg'
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  )
}

export default APIIntegration
