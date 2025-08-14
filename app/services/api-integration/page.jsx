'use client'
import React from 'react'

const ServiceDetail = () => {
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
    <section className='min-h-screen bg-primary py-12 xl:py-16 overflow-x-hidden'>
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
        <div className='text-center mb-16'>
          <div className='inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-accent to-accent/80 rounded-full mb-6'>
            <svg
              className='w-10 h-10 text-primary'
              fill='currentColor'
              viewBox='0 0 24 24'
            >
              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z' />
            </svg>
          </div>
          <h1 className='text-5xl xl:text-6xl font-bold mb-4'>
            <span className='text-white'>API</span>{' '}
            <span className='text-accent'>Integration</span>
          </h1>
          <p className='text-white/80 text-xl max-w-3xl mx-auto leading-relaxed'>
            Connecting your applications to the digital ecosystem through
            seamless API integrations, creating dynamic, data-driven experiences
            that scale with your business needs.
          </p>
        </div>

        {/* Main Services Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
          {services.map((service, index) => (
            <div
              key={index}
              className='group bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:border-accent/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/20'
            >
              <div className='text-4xl mb-4 group-hover:scale-110 transition-transform duration-300'>
                {service.icon}
              </div>
              <h3 className='text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300'>
                {service.title}
              </h3>
              <p className='text-white/70 mb-4 leading-relaxed'>
                {service.description}
              </p>
              <ul className='space-y-2'>
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className='flex items-center text-sm text-white/60'
                  >
                    <div className='w-1.5 h-1.5 bg-accent rounded-full mr-3 group-hover:bg-accent/80'></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Technologies Section */}
        <div className='mb-16'>
          <h2 className='text-3xl font-bold text-center mb-12'>
            <span className='text-white'>Technologies &</span>{' '}
            <span className='text-accent'>Tools</span>
          </h2>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4'>
            {technologies.map((tech, index) => (
              <div key={index} className='group'>
                <div
                  className={`bg-gradient-to-r ${tech.color} p-4 rounded-lg text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg`}
                >
                  <span className='text-white font-semibold text-sm'>
                    {tech.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className='mb-16'>
          <h2 className='text-3xl font-bold text-center mb-12'>
            <span className='text-white'>Integration</span>{' '}
            <span className='text-accent'>Process</span>
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
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
              <div key={index} className='text-center group'>
                <div className='w-16 h-16 bg-accent text-primary rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 group-hover:bg-accent/80 transition-colors duration-300'>
                  {process.step}
                </div>
                <h3 className='text-lg font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300'>
                  {process.title}
                </h3>
                <p className='text-white/70 text-sm leading-relaxed'>
                  {process.desc}
                </p>
                {index < 3 && (
                  <div className='hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-accent/50 to-transparent transform translate-x-4'></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Key Benefits */}
        <div className='bg-gradient-to-r from-accent/10 to-accent/5 rounded-2xl p-8 md:p-12 border border-accent/20'>
          <h2 className='text-3xl font-bold text-center mb-8'>
            <span className='text-white'>Why Choose</span>{' '}
            <span className='text-accent'>Professional API Integration?</span>
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {[
              {
                title: 'Scalability',
                desc: 'Built to handle growing data demands',
              },
              {
                title: 'Security',
                desc: 'Enterprise-grade security implementation',
              },
              {
                title: 'Performance',
                desc: 'Optimized for speed and efficiency',
              },
              {
                title: 'Reliability',
                desc: 'Robust error handling and fallbacks',
              },
            ].map((benefit, index) => (
              <div key={index} className='text-center'>
                <div className='w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <div className='w-6 h-6 bg-accent rounded-full'></div>
                </div>
                <h3 className='text-lg font-semibold text-white mb-2'>
                  {benefit.title}
                </h3>
                <p className='text-white/70 text-sm'>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className='text-center mt-16'>
          <h2 className='text-2xl font-bold text-white mb-4'>
            Ready to integrate powerful APIs into your project?
          </h2>
          <p className='text-white/70 mb-8'>
            Let's discuss how API integration can transform your application
          </p>
          <a
            href='/contact'
            className='bg-gradient-to-r from-accent to-accent/80 text-primary px-8 py-3 rounded-lg font-semibold hover:from-accent/80 hover:to-accent transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-accent/30 inline-block'
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  )
}

export default ServiceDetail
