'use client'
import React from 'react'

const PerformanceSEO = () => {
  const performanceMetrics = [
    {
      metric: 'Page Load Speed',
      before: '4.8s',
      after: '1.2s',
      improvement: '75%',
      icon: '⚡',
    },
    {
      metric: 'SEO Score',
      before: '62/100',
      after: '95/100',
      improvement: '53%',
      icon: '📈',
    },
    {
      metric: 'Accessibility',
      before: '68%',
      after: '98%',
      improvement: '44%',
      icon: '♿',
    },
    {
      metric: 'Performance Score',
      before: '45/100',
      after: '92/100',
      improvement: '104%',
      icon: '🎯',
    },
  ]

  const services = [
    {
      category: 'SEO Optimization',
      icon: '🔍',
      color: 'from-blue-500 to-cyan-500',
      description:
        'Comprehensive SEO strategy to dominate search rankings and drive organic growth.',
      features: [
        {
          title: 'Technical SEO Audit',
          detail:
            'Complete site analysis identifying crawl errors, indexing issues, and technical barriers',
        },
        {
          title: 'On-Page Optimization',
          detail:
            'Meta tags, headers, schema markup, and content optimization for target keywords',
        },
        {
          title: 'Site Architecture',
          detail:
            'URL structure, internal linking, and sitemap optimization for better crawlability',
        },
        {
          title: 'Core Web Vitals',
          detail:
            "LCP, FID, and CLS optimization to meet Google's page experience requirements",
        },
      ],
      results: '150% increase in organic traffic within 6 months',
    },
    {
      category: 'Performance Optimization',
      icon: '⚡',
      color: 'from-orange-500 to-red-500',
      description:
        'Lightning-fast websites through advanced performance engineering and optimization techniques.',
      features: [
        {
          title: 'Performance Auditing',
          detail:
            'Lighthouse audits, WebPageTest analysis, and real-user monitoring setup',
        },
        {
          title: 'Code Optimization',
          detail:
            'Minification, compression, tree-shaking, and bundle size reduction strategies',
        },
        {
          title: 'Asset Optimization',
          detail:
            'Image compression, WebP conversion, and responsive image implementation',
        },
        {
          title: 'Caching Strategy',
          detail:
            'Browser caching, CDN setup, and service worker implementation for faster loads',
        },
      ],
      results: '85% faster load times and 40% better Core Web Vitals scores',
    },
    {
      category: 'Accessibility Enhancement',
      icon: '♿',
      color: 'from-purple-500 to-pink-500',
      description:
        'WCAG 2.1 AA compliance ensuring your website is accessible to all users without barriers.',
      features: [
        {
          title: 'Accessibility Audit',
          detail:
            'Comprehensive WCAG compliance testing using automated and manual methods',
        },
        {
          title: 'ARIA Implementation',
          detail:
            'Proper ARIA labels, roles, and properties for screen reader compatibility',
        },
        {
          title: 'Keyboard Navigation',
          detail:
            'Full keyboard accessibility with proper focus management and tab order',
        },
        {
          title: 'Visual Accessibility',
          detail:
            'Color contrast optimization and support for users with visual impairments',
        },
      ],
      results:
        '100% WCAG 2.1 AA compliance with improved user experience for all',
    },
  ]

  const optimizationProcess = [
    {
      step: '01',
      title: 'Comprehensive Audit',
      description: 'Deep analysis using industry-leading tools',
      tools: ['Lighthouse', 'GTmetrix', 'Screaming Frog', 'SEMrush'],
      duration: '2-3 days',
    },
    {
      step: '02',
      title: 'Strategic Planning',
      description: 'Prioritized action plan with measurable goals',
      tools: [
        'Performance Budget',
        'SEO Roadmap',
        'Accessibility Plan',
        'Timeline',
      ],
      duration: '1-2 days',
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Execute optimizations with minimal disruption',
      tools: [
        'Code Optimization',
        'Technical SEO',
        'A11y Fixes',
        'Performance Tuning',
      ],
      duration: '1-3 weeks',
    },
    {
      step: '04',
      title: 'Testing & Validation',
      description: 'Verify improvements and ongoing monitoring',
      tools: [
        'Performance Testing',
        'SEO Tracking',
        'A11y Validation',
        'Analytics',
      ],
      duration: 'Ongoing',
    },
  ]

  const advancedFeatures = [
    {
      icon: '🚀',
      title: 'Code Splitting & Lazy Loading',
      description:
        'Smart resource loading strategies that reduce initial bundle sizes and improve perceived performance.',
      technologies: [
        'React.lazy()',
        'Dynamic Imports',
        'Route-based Splitting',
        'Component Lazy Loading',
      ],
      impact: '60% reduction in initial load time',
    },
    {
      icon: '🖼️',
      title: 'Advanced Asset Optimization',
      description:
        'Next-generation image formats and delivery optimization for maximum performance gains.',
      technologies: [
        'WebP/AVIF Conversion',
        'Responsive Images',
        'Image CDN',
        'Progressive Loading',
      ],
      impact: '70% smaller image file sizes',
    },
  ]

  return (
    <section className='min-h-screen bg-primary py-16 xl:py-20 relative overflow-hidden'>
      {/* Dynamic Background */}
      <div className='absolute inset-0 opacity-30'>
        <div className='absolute top-10 left-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-pulse'></div>
        <div className='absolute top-1/3 right-20 w-60 h-60 bg-accent/5 rounded-full blur-3xl animate-pulse delay-700'></div>
        <div className='absolute bottom-20 left-1/4 w-32 h-32 bg-accent/15 rounded-full blur-2xl animate-bounce'></div>
        <div className='absolute bottom-1/3 right-1/3 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-pulse delay-1000'></div>
      </div>

      <div className='container mx-auto px-6 relative z-10'>
        {/* Hero Section */}
        <div className='text-center mb-20'>
          <div className='flex justify-center mb-8'>
            <div className='relative group'>
              <div className='w-28 h-28 bg-gradient-to-br from-accent via-accent/90 to-accent/70 rounded-full flex items-center justify-center shadow-2xl shadow-accent/50 group-hover:scale-110 transition-all duration-500'>
                <svg
                  className='w-14 h-14 text-primary'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
                </svg>
              </div>
              <div className='absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center animate-spin'>
                <span className='text-white text-sm font-bold'>⚡</span>
              </div>
              <div className='absolute -bottom-2 -left-2 w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-full animate-pulse'></div>
            </div>
          </div>

          <h1 className='text-6xl xl:text-8xl font-bold mb-8'>
            <span className='text-white'>Performance</span>
            <span className='text-accent'> & </span>
            <span className='text-accent'>SEO</span>
          </h1>

          <p className='text-white/90 text-xl xl:text-2xl max-w-4xl mx-auto leading-relaxed mb-12'>
            Supercharge your website with cutting-edge performance optimization,
            advanced SEO strategies, and comprehensive accessibility
            enhancements that deliver measurable business results.
          </p>

          {/* ...removed buttons... */}
        </div>

        {/* Performance Metrics Dashboard */}
        <div className='mb-20'>
          <h2 className='text-4xl font-bold text-center mb-12'>
            <span className='text-white'>Proven</span>{' '}
            <span className='text-accent'>Results</span>
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {performanceMetrics.map((metric, index) => (
              <div
                key={index}
                className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-accent/30 transition-all duration-300 group'
              >
                <div className='flex items-center justify-between mb-4'>
                  <span className='text-3xl group-hover:scale-125 transition-transform duration-300'>
                    {metric.icon}
                  </span>
                  <span className='bg-gradient-to-r from-accent/20 to-accent/10 text-accent px-3 py-1 rounded-full text-sm font-bold'>
                    +{metric.improvement}
                  </span>
                </div>

                <h3 className='text-white font-bold mb-4 group-hover:text-accent transition-colors duration-300'>
                  {metric.metric}
                </h3>

                <div className='space-y-2'>
                  <div className='flex justify-between'>
                    <span className='text-red-400 text-sm'>Before:</span>
                    <span className='text-red-400 font-semibold'>
                      {metric.before}
                    </span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-accent text-sm'>After:</span>
                    <span className='text-accent font-semibold'>
                      {metric.after}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Service Categories */}
        <div className='mb-20'>
          <h2 className='text-4xl font-bold text-center mb-16'>
            <span className='text-white'>Our</span>{' '}
            <span className='text-accent'>Optimization Services</span>
          </h2>

          <div className='space-y-12'>
            {services.map((service, index) => (
              <div key={index} className='group'>
                <div className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 hover:border-accent/30 transition-all duration-500'>
                  <div className='flex flex-col lg:flex-row items-start gap-8'>
                    {/* Service Header */}
                    <div className='lg:w-1/3'>
                      <div
                        className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <span className='text-3xl'>{service.icon}</span>
                      </div>
                      <h3 className='text-3xl font-bold text-white mb-4 group-hover:text-accent transition-colors duration-300'>
                        {service.category}
                      </h3>
                      <p className='text-white/80 leading-relaxed mb-6'>
                        {service.description}
                      </p>
                      <div className='bg-gradient-to-r from-accent/20 to-accent/10 text-accent px-4 py-3 rounded-xl text-sm font-semibold'>
                        Expected Result: {service.results}
                      </div>
                    </div>

                    {/* Service Features */}
                    <div className='lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6'>
                      {service.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className='bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-accent/20 transition-all duration-300'
                        >
                          <h4 className='text-white font-bold mb-3 text-lg'>
                            {feature.title}
                          </h4>
                          <p className='text-white/70 text-sm leading-relaxed'>
                            {feature.detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Advanced Features */}
        <div className='mb-20'>
          <h2 className='text-4xl font-bold text-center mb-12'>
            <span className='text-white'>Advanced</span>{' '}
            <span className='text-accent'>Techniques</span>
          </h2>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            {advancedFeatures.map((feature, index) => (
              <div
                key={index}
                className='group bg-gradient-to-r from-accent/10 to-accent/5 backdrop-blur-sm border border-accent/20 rounded-2xl p-8 hover:from-accent/15 hover:to-accent/10 transition-all duration-300'
              >
                <div className='flex items-center mb-6'>
                  <div className='w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300'>
                    <span className='text-2xl'>{feature.icon}</span>
                  </div>
                  <h3 className='text-2xl font-bold text-white group-hover:text-accent transition-colors duration-300'>
                    {feature.title}
                  </h3>
                </div>

                <p className='text-white/80 leading-relaxed mb-6'>
                  {feature.description}
                </p>

                <div className='mb-6'>
                  <h4 className='text-accent font-semibold mb-3 text-sm uppercase tracking-wide'>
                    Technologies:
                  </h4>
                  <div className='flex flex-wrap gap-2'>
                    {feature.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className='bg-white/10 text-white/80 px-3 py-1 rounded-lg text-sm'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className='text-center'>
                  <span className='bg-gradient-to-r from-accent to-accent/80 text-primary px-4 py-2 rounded-full font-bold text-sm'>
                    Impact: {feature.impact}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Optimization Process */}
        <div className='mb-20'>
          <h2 className='text-4xl font-bold text-center mb-12'>
            <span className='text-white'>Our</span>{' '}
            <span className='text-accent'>Process</span>
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8'>
            {optimizationProcess.map((step, index) => (
              <div key={index} className='group text-center relative'>
                <div className='w-20 h-20 bg-gradient-to-br from-accent to-accent/80 rounded-2xl flex items-center justify-center text-xl font-bold text-primary mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl shadow-accent/30'>
                  {step.step}
                </div>

                <h3 className='text-xl font-bold text-white mb-4 group-hover:text-accent transition-colors duration-300'>
                  {step.title}
                </h3>

                <p className='text-white/80 mb-6 leading-relaxed'>
                  {step.description}
                </p>

                <div className='space-y-3'>
                  <div className='bg-white/5 rounded-lg p-3 border border-white/10'>
                    <div className='text-accent font-semibold text-xs uppercase mb-2'>
                      Tools & Methods:
                    </div>
                    <div className='space-y-1'>
                      {step.tools.map((tool, idx) => (
                        <div key={idx} className='text-white/70 text-xs'>
                          • {tool}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className='bg-accent/10 rounded-lg p-3 border border-accent/20'>
                    <div className='text-accent font-semibold text-xs'>
                      Duration: {step.duration}
                    </div>
                  </div>
                </div>

                {index < optimizationProcess.length - 1 && (
                  <div className='hidden xl:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-accent/60 to-transparent transform translate-x-4'></div>
                )}
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

export default PerformanceSEO
