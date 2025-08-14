'use client'
import React from 'react'

const OptimizationPage = () => {
  const optimizationServices = [
    {
      icon: '⚡',
      title: 'Performance Audits',
      description:
        "Comprehensive analysis of your website's performance bottlenecks with actionable insights.",
      metrics: [
        'Core Web Vitals',
        'Load Time Analysis',
        'Resource Usage',
        'Performance Score',
      ],
      improvement: 'Up to 85% faster load times',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: '🖼️',
      title: 'Asset Optimization',
      description:
        'Smart compression and optimization of images, videos, and other media assets.',
      metrics: [
        'Image Compression',
        'Format Conversion',
        'Lazy Loading',
        'CDN Integration',
      ],
      improvement: '70% reduction in file sizes',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: '📦',
      title: 'Code Optimization',
      description:
        'Minification, bundling, and tree-shaking to reduce code bloat and improve efficiency.',
      metrics: [
        'CSS/JS Minification',
        'Bundle Splitting',
        'Tree Shaking',
        'Dead Code Removal',
      ],
      improvement: '60% smaller bundle sizes',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: '🔍',
      title: 'SEO Enhancement',
      description:
        'Technical SEO improvements to boost your search engine rankings and visibility.',
      metrics: [
        'Meta Optimization',
        'Schema Markup',
        'Sitemap Generation',
        'URL Structure',
      ],
      improvement: '40% increase in organic traffic',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: '📱',
      title: 'Mobile Optimization',
      description:
        'Responsive design improvements ensuring perfect functionality across all devices.',
      metrics: [
        'Responsive Design',
        'Touch Optimization',
        'Viewport Settings',
        'Mobile Speed',
      ],
      improvement: '95% mobile compatibility score',
      color: 'from-indigo-500 to-blue-500',
    },
    {
      icon: '♿',
      title: 'Accessibility',
      description:
        'WCAG compliance improvements making your site accessible to all users.',
      metrics: [
        'ARIA Labels',
        'Keyboard Navigation',
        'Screen Reader Support',
        'Color Contrast',
      ],
      improvement: '100% accessibility compliance',
      color: 'from-teal-500 to-green-500',
    },
  ]

  const performanceMetrics = [
    {
      label: 'Page Load Speed',
      before: '4.2s',
      after: '0.8s',
      improvement: '81%',
    },
    {
      label: 'First Contentful Paint',
      before: '2.1s',
      after: '0.4s',
      improvement: '80%',
    },
    {
      label: 'Largest Contentful Paint',
      before: '3.8s',
      after: '1.2s',
      improvement: '68%',
    },
    {
      label: 'Cumulative Layout Shift',
      before: '0.25',
      after: '0.05',
      improvement: '80%',
    },
  ]

  const optimizationProcess = [
    {
      step: '01',
      title: 'Analysis',
      description: 'Comprehensive website audit using industry-standard tools',
      tools: [
        'Google Lighthouse',
        'WebPageTest',
        'GTmetrix',
        'Core Web Vitals',
      ],
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'Custom optimization roadmap based on audit findings',
      tools: [
        'Priority Matrix',
        'Timeline Planning',
        'Resource Allocation',
        'KPI Definition',
      ],
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Execute optimizations with minimal downtime',
      tools: [
        'Code Optimization',
        'Asset Compression',
        'CDN Setup',
        'Caching Rules',
      ],
    },
    {
      step: '04',
      title: 'Validation',
      description: 'Thorough testing and performance validation',
      tools: [
        'A/B Testing',
        'Load Testing',
        'Cross-browser Testing',
        'Mobile Testing',
      ],
    },
  ]

  return (
    <div className='min-h-screen bg-primary'>
      {/* Animated Background */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse'></div>
        <div className='absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000'></div>
      </div>

      <div className='relative z-10 py-20'>
        {/* Hero Section */}
        <div className='container mx-auto px-6 text-center mb-20'>
          <div className='inline-flex items-center justify-center mb-8'>
            <div className='relative'>
              <div className='w-28 h-28 bg-gradient-to-br from-accent via-accent/80 to-accent/60 rounded-3xl flex items-center justify-center shadow-2xl shadow-accent/40 animate-bounce'>
                <svg
                  className='w-14 h-14 text-primary'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' />
                </svg>
              </div>
              <div className='absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center animate-spin'>
                <span className='text-white text-xs font-bold'>⚡</span>
              </div>
            </div>
          </div>

          <h1 className='text-6xl xl:text-8xl font-bold mb-8'>
            <span className='text-white'>Website</span>
            <br />
            <span className='bg-gradient-to-r from-accent via-accent/80 to-accent/60 bg-clip-text text-transparent'>
              Optimization
            </span>
          </h1>

          <p className='text-white/80 text-xl xl:text-2xl max-w-4xl mx-auto leading-relaxed mb-12'>
            Transform your website into a high-performance powerhouse. We
            enhance speed, SEO rankings, and user experience through
            cutting-edge optimization techniques.
          </p>

          <div className='flex flex-col sm:flex-row gap-6 justify-center'>
            <button className='bg-gradient-to-r from-accent to-accent/80 text-primary px-10 py-4 rounded-xl font-bold text-lg hover:from-accent/80 hover:to-accent transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-accent/30'>
              Get Free Audit
            </button>
            <button className='border-2 border-white/30 text-white px-10 py-4 rounded-xl font-bold text-lg hover:border-accent hover:text-accent transition-all duration-300'>
              View Case Studies
            </button>
          </div>
        </div>

        {/* Performance Metrics Before/After */}
        <div className='container mx-auto px-6 mb-20'>
          <h2 className='text-4xl font-bold text-center mb-16'>
            <span className='text-white'>Real Performance</span>{' '}
            <span className='text-accent'>Improvements</span>
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {performanceMetrics.map((metric, index) => (
              <div
                key={index}
                className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-accent/30 transition-all duration-300 group'
              >
                <h3 className='text-white font-semibold mb-4 group-hover:text-accent transition-colors duration-300'>
                  {metric.label}
                </h3>
                <div className='space-y-3'>
                  <div className='flex justify-between items-center'>
                    <span className='text-red-400 text-sm'>Before:</span>
                    <span className='text-red-400 font-bold'>
                      {metric.before}
                    </span>
                  </div>
                  <div className='flex justify-between items-center'>
                    <span className='text-accent text-sm'>After:</span>
                    <span className='text-accent font-bold'>
                      {metric.after}
                    </span>
                  </div>
                  <div className='text-center'>
                    <span className='bg-gradient-to-r from-accent to-green-400 text-primary px-3 py-1 rounded-full text-sm font-bold'>
                      {metric.improvement} faster
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Optimization Services */}
        <div className='container mx-auto px-6 mb-20'>
          <h2 className='text-4xl font-bold text-center mb-16'>
            <span className='text-white'>Our Optimization</span>{' '}
            <span className='text-accent'>Solutions</span>
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {optimizationServices.map((service, index) => (
              <div
                key={index}
                className='group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-accent/30 transition-all duration-300 hover:transform hover:scale-105'
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <span className='text-2xl'>{service.icon}</span>
                </div>

                <h3 className='text-xl font-bold text-white mb-4 group-hover:text-accent transition-colors duration-300'>
                  {service.title}
                </h3>

                <p className='text-white/70 mb-6 leading-relaxed'>
                  {service.description}
                </p>

                <div className='mb-6'>
                  <h4 className='text-white font-semibold mb-3 text-sm uppercase tracking-wide'>
                    Key Metrics:
                  </h4>
                  <div className='grid grid-cols-2 gap-2'>
                    {service.metrics.map((metric, idx) => (
                      <div
                        key={idx}
                        className='text-xs text-white/60 bg-white/5 rounded-lg px-3 py-2'
                      >
                        {metric}
                      </div>
                    ))}
                  </div>
                </div>

                <div className='text-center'>
                  <span className='bg-gradient-to-r from-accent/20 to-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold'>
                    {service.improvement}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Optimization Process */}
        <div className='container mx-auto px-6 mb-20'>
          <div className='bg-gradient-to-r from-accent/10 via-accent/5 to-transparent rounded-3xl p-8 md:p-16 border border-accent/20'>
            <h2 className='text-4xl font-bold text-center mb-16'>
              <span className='text-white'>Our Optimization</span>{' '}
              <span className='text-accent'>Process</span>
            </h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
              {optimizationProcess.map((phase, index) => (
                <div key={index} className='text-center group relative'>
                  <div className='w-20 h-20 bg-accent text-primary rounded-2xl flex items-center justify-center text-xl font-bold mx-auto mb-6 group-hover:bg-accent/80 transition-all duration-300 group-hover:scale-110 shadow-lg shadow-accent/30'>
                    {phase.step}
                  </div>

                  <h3 className='text-xl font-bold text-white mb-4 group-hover:text-accent transition-colors duration-300'>
                    {phase.title}
                  </h3>

                  <p className='text-white/70 mb-6 leading-relaxed text-sm'>
                    {phase.description}
                  </p>

                  <div className='space-y-2'>
                    {phase.tools.map((tool, idx) => (
                      <div
                        key={idx}
                        className='text-xs text-white/50 bg-white/5 rounded-lg px-3 py-1'
                      >
                        {tool}
                      </div>
                    ))}
                  </div>

                  {index < optimizationProcess.length - 1 && (
                    <div className='hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-accent/50 to-transparent transform translate-x-4 -translate-y-1/2'></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className='container mx-auto px-6 mb-20'>
          <h2 className='text-4xl font-bold text-center mb-16'>
            <span className='text-white'>Why</span>{' '}
            <span className='text-accent'>Optimize?</span>
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {[
              {
                icon: '📈',
                title: 'Higher Rankings',
                description:
                  'Improved SEO performance leads to better search engine visibility and organic traffic growth.',
                stat: '40% more organic traffic',
              },
              {
                icon: '💰',
                title: 'Increased Conversions',
                description:
                  'Faster loading pages and better UX directly translate to higher conversion rates and sales.',
                stat: '25% conversion increase',
              },
              {
                icon: '👥',
                title: 'Better User Retention',
                description:
                  'Optimized websites keep visitors engaged longer and reduce bounce rates significantly.',
                stat: '60% lower bounce rate',
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className='text-center group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-accent/30 transition-all duration-300'
              >
                <div className='text-5xl mb-6 group-hover:scale-110 transition-transform duration-300'>
                  {benefit.icon}
                </div>
                <h3 className='text-xl font-bold text-white mb-4 group-hover:text-accent transition-colors duration-300'>
                  {benefit.title}
                </h3>
                <p className='text-white/70 mb-6 leading-relaxed'>
                  {benefit.description}
                </p>
                <div className='bg-gradient-to-r from-accent/20 to-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold inline-block'>
                  {benefit.stat}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className='container mx-auto px-6'>
          <div className='text-center bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-12 md:p-20 border border-white/20'>
            <h2 className='text-4xl xl:text-5xl font-bold text-white mb-6'>
              Ready to Unlock Your Site's
              <span className='text-accent block'>Full Potential?</span>
            </h2>

            <p className='text-white/80 text-xl mb-12 max-w-3xl mx-auto'>
              Get a free comprehensive website audit and discover exactly how we
              can boost your performance, rankings, and conversions.
            </p>

            <div className='flex flex-col sm:flex-row gap-6 justify-center items-center mb-8'>
              <button className='bg-gradient-to-r from-accent to-accent/80 text-primary px-12 py-5 rounded-xl font-bold text-xl hover:from-accent/80 hover:to-accent transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-accent/40'>
                Get Free Audit Report
              </button>
              <a
                href='/contact'
                className='border-2 border-accent text-accent px-12 py-5 rounded-xl font-bold text-xl hover:bg-accent hover:text-primary transition-all duration-300 no-underline'
              >
                Schedule Consultation
              </a>
            </div>

            <p className='text-white/60 text-sm'>
              ✅ No obligations • ✅ Detailed performance report • ✅ Custom
              optimization roadmap
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OptimizationPage
