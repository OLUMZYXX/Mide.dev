'use client'
import React from 'react'

const Optimization = () => {
  const optimizationSolutions = [
    {
      icon: '🚀',
      title: 'Performance Tuning',
      description:
        'Lightning-fast load times through advanced caching, code splitting, and resource optimization.',
      features: [
        'Code Minification',
        'Lazy Loading',
        'CDN Integration',
        'Browser Caching',
      ],
      impact: '3x faster page loads',
      color: 'from-red-500 to-pink-500',
      stats: { metric: 'Load Time', improvement: '2.1s → 0.7s' },
    },
    {
      icon: '🎯',
      title: 'SEO Optimization',
      description:
        'Strategic improvements to boost search rankings and organic visibility across all search engines.',
      features: [
        'Technical SEO',
        'Schema Markup',
        'Meta Optimization',
        'Core Web Vitals',
      ],
      impact: '150% more organic traffic',
      color: 'from-blue-500 to-indigo-500',
      stats: { metric: 'Organic Traffic', improvement: '+150%' },
    },
    {
      icon: '📱',
      title: 'Mobile Excellence',
      description:
        'Responsive design perfection ensuring flawless experiences across all devices and screen sizes.',
      features: [
        'Responsive Design',
        'Touch Optimization',
        'Mobile Speed',
        'Progressive Web App',
      ],
      impact: '98% mobile usability score',
      color: 'from-green-500 to-teal-500',
      stats: { metric: 'Mobile Score', improvement: '62 → 98' },
    },
    {
      icon: '♿',
      title: 'Accessibility Audits',
      description:
        'WCAG 2.1 compliance ensuring your website is accessible to users with disabilities.',
      features: [
        'ARIA Implementation',
        'Keyboard Navigation',
        'Screen Reader Support',
        'Color Contrast',
      ],
      impact: '100% accessibility compliance',
      color: 'from-purple-500 to-violet-500',
      stats: { metric: 'Accessibility', improvement: 'A+ Rating' },
    },
    {
      icon: '🖼️',
      title: 'Asset Optimization',
      description:
        'Smart compression and delivery of images, videos, and media for optimal performance.',
      features: [
        'Image Compression',
        'Format Conversion',
        'Responsive Images',
        'Video Optimization',
      ],
      impact: '80% reduction in asset sizes',
      color: 'from-orange-500 to-yellow-500',
      stats: { metric: 'Asset Size', improvement: '-80%' },
    },
  ]

  const whyOptimizeReasons = [
    {
      icon: '📈',
      title: 'Seamless User Experience',
      description:
        'Fast, intuitive navigation keeps visitors engaged and reduces frustration, leading to longer session times and lower bounce rates.',
      benefit: '45% lower bounce rate',
      visual: '🎯',
    },
    {
      icon: '🔍',
      title: 'Enhanced Search Visibility',
      description:
        'Optimized websites rank higher in search results, bringing more qualified organic traffic to your business.',
      benefit: '3x more organic visitors',
      visual: '📊',
    },
    {
      icon: '💰',
      title: 'Increased Conversions',
      description:
        'Better performance and user experience directly translate to higher conversion rates and business growth.',
      benefit: '35% conversion boost',
      visual: '📈',
    },
    {
      icon: '⚡',
      title: 'Competitive Advantage',
      description:
        'Stay ahead of competitors with cutting-edge performance that sets your brand apart in the market.',
      benefit: 'Market leadership',
      visual: '🏆',
    },
  ]

  const optimizationProcess = [
    {
      phase: '01',
      title: 'Deep Analysis',
      description:
        'Comprehensive audit using industry-leading tools to identify optimization opportunities',
      deliverable: 'Detailed Performance Report',
      timeline: '2-3 days',
    },
    {
      phase: '02',
      title: 'Strategic Planning',
      description:
        'Custom optimization roadmap prioritized by impact and business objectives',
      deliverable: 'Optimization Strategy',
      timeline: '1-2 days',
    },
    {
      phase: '03',
      title: 'Implementation',
      description:
        'Execute optimizations with zero downtime using best practices and proven techniques',
      deliverable: 'Optimized Website',
      timeline: '1-2 weeks',
    },
    {
      phase: '04',
      title: 'Performance Validation',
      description:
        'Comprehensive testing and monitoring to ensure all optimizations deliver expected results',
      deliverable: 'Results Dashboard',
      timeline: 'Ongoing',
    },
  ]

  return (
    <div className='min-h-screen bg-primary relative overflow-hidden'>
      {/* Floating Background Elements */}
      <div className='absolute inset-0'>
        <div className='absolute top-20 right-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-pulse'></div>
        <div className='absolute bottom-32 left-16 w-48 h-48 bg-accent/10 rounded-full blur-2xl animate-pulse delay-500'></div>
        <div className='absolute top-1/2 left-1/3 w-32 h-32 bg-accent/8 rounded-full blur-xl animate-bounce'></div>
      </div>

      <div className='relative z-10 py-16'>
        {/* Hero Section */}
        <div className='container mx-auto px-6 text-center mb-24'>
          <div className='flex justify-center mb-12'>
            <div className='relative group'>
              <div className='w-32 h-32 bg-gradient-to-br from-accent via-accent/90 to-accent/70 rounded-full flex items-center justify-center shadow-2xl shadow-accent/50 group-hover:scale-110 transition-all duration-500'>
                <div className='text-5xl animate-pulse'>⚡</div>
              </div>
              <div className='absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center animate-spin'>
                <span className='text-white text-lg font-bold'>🚀</span>
              </div>
              <div className='absolute -bottom-2 -left-2 w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-full animate-bounce delay-300'></div>
            </div>
          </div>
          <h1 className='text-5xl xl:text-6xl font-bold mb-8'>
            <span className='bg-gradient-to-r from-accent via-accent/80 to-accent/60 bg-clip-text text-transparent animate-pulse'>
              Optimization
            </span>
            <br />
            <span className='text-white/80 text-4xl xl:text-5xl'>Mastery</span>
          </h1>

          <p className='text-white/90 text-xl xl:text-2xl max-w-5xl mx-auto leading-relaxed mb-12'>
            Transform your website into a high-performance powerhouse with our
            expert optimization services. We enhance speed, user experience, and
            search rankings through cutting-edge techniques and proven
            methodologies.
          </p>

          <div className='flex flex-col sm:flex-row gap-6 justify-center mb-16'>
            <button className='bg-gradient-to-r from-accent to-accent/80 text-primary px-12 py-5 rounded-2xl font-bold text-lg hover:from-accent/80 hover:to-accent transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-accent/40'>
              Get Free Performance Audit
            </button>
            <button className='border-2 border-accent/50 text-accent px-12 py-5 rounded-2xl font-bold text-lg hover:border-accent hover:bg-accent/10 transition-all duration-300'>
              View Success Stories
            </button>
          </div>

          {/* Quick Stats */}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
            {[
              { number: '3x', label: 'Faster Loading', icon: '⚡' },
              { number: '150%', label: 'More Traffic', icon: '📈' },
              { number: '35%', label: 'Higher Conversions', icon: '💰' },
              { number: '98%', label: 'Performance Score', icon: '🎯' },
            ].map((stat, index) => (
              <div key={index} className='group text-center'>
                <div className='text-3xl mb-2 group-hover:scale-125 transition-transform duration-300'>
                  {stat.icon}
                </div>
                <div className='text-3xl font-bold text-accent mb-1 group-hover:text-accent/80 transition-colors duration-300'>
                  {stat.number}
                </div>
                <div className='text-white/70 text-sm font-medium'>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Optimization Solutions */}
        <div className='container mx-auto px-6 mb-24'>
          <h2 className='text-5xl font-bold text-center mb-16'>
            <span className='text-white'>Our Optimization</span>{' '}
          </h2>

          <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8'>
            {optimizationSolutions.map((solution, index) => (
              <div
                key={index}
                className='group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-accent/40 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-accent/20'
              >
                <div
                  className={`w-20 h-20 bg-gradient-to-r ${solution.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                >
                  <span className='text-3xl'>{solution.icon}</span>
                </div>

                <h3 className='text-2xl font-bold text-white mb-4 group-hover:text-accent transition-colors duration-300'>
                  {solution.title}
                </h3>

                <p className='text-white/80 mb-6 leading-relaxed'>
                  {solution.description}
                </p>

                {/* Performance Stats */}
                <div className='bg-white/5 rounded-xl p-4 mb-6 border border-white/10'>
                  <div className='flex justify-between items-center mb-2'>
                    <span className='text-white/70 text-sm'>
                      {solution.stats.metric}
                    </span>
                    <span className='text-accent font-bold'>
                      {solution.stats.improvement}
                    </span>
                  </div>
                  <div className='text-center'>
                    <span className='bg-gradient-to-r from-accent/20 to-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold'>
                      {solution.impact}
                    </span>
                  </div>
                </div>

                <div className='space-y-2'>
                  <h4 className='text-white font-semibold text-sm uppercase tracking-wider mb-3'>
                    Key Features:
                  </h4>
                  {solution.features.map((feature, idx) => (
                    <div key={idx} className='text-white/70 text-sm pl-2'>
                      • {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Optimize Section */}
        <div className='container mx-auto px-6 mb-24'>
          <div className='bg-gradient-to-r from-accent/15 via-accent/10 to-accent/5 rounded-3xl p-12 md:p-16 border border-accent/20'>
            <h2 className='text-5xl font-bold text-center mb-16'>
              <span className='text-white'>Why</span>{' '}
              <span className='text-accent'>Optimize?</span>
            </h2>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
              {whyOptimizeReasons.map((reason, index) => (
                <div key={index} className='group flex items-start space-x-6'>
                  <div className='flex-shrink-0'>
                    <div className='w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                      <span className='text-2xl'>{reason.visual}</span>
                    </div>
                  </div>
                  <div className='flex-1'>
                    <h3 className='text-2xl font-bold text-white mb-4 group-hover:text-accent transition-colors duration-300'>
                      {reason.title}
                    </h3>
                    <p className='text-white/80 leading-relaxed mb-4'>
                      {reason.description}
                    </p>
                    <div className='inline-block bg-gradient-to-r from-accent/20 to-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold'>
                      Result: {reason.benefit}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Optimization Process */}
        <div className='container mx-auto px-6 mb-24'>
          <h2 className='text-5xl font-bold text-center mb-16'>
            <span className='text-white'>Our</span>{' '}
            <span className='text-accent'>Process</span>
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8'>
            {optimizationProcess.map((step, index) => (
              <div key={index} className='group text-center relative'>
                <div className='w-24 h-24 bg-gradient-to-br from-accent to-accent/80 rounded-3xl flex items-center justify-center text-2xl font-bold text-primary mx-auto mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xl shadow-accent/30'>
                  {step.phase}
                </div>
                <div className='space-y-2'>
                  <div className='bg-white/5 rounded-lg p-3 border border-white/10'>
                    <div className='text-accent font-semibold text-sm'>
                      Deliverable:
                    </div>
                    <div className='text-white/80 text-sm'>
                      {step.deliverable}
                    </div>
                  </div>
                  <div className='bg-white/5 rounded-lg p-3 border border-white/10'>
                    <div className='text-accent font-semibold text-sm'>
                      Timeline:
                    </div>
                    <div className='text-white/80 text-sm'>{step.timeline}</div>
                  </div>
                </div>
                {index < optimizationProcess.length - 1 && (
                  <div className='hidden xl:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-accent/60 to-transparent transform translate-x-4'></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA Section */}
        <div className='container mx-auto px-6'>
          <div className='text-center bg-gradient-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-lg rounded-3xl p-12 md:p-20 border border-white/20 shadow-2xl'>
            <div className='mb-8'>
              <div className='inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-accent to-accent/80 rounded-full mb-6 animate-pulse'>
                <span className='text-3xl'>🚀</span>
              </div>
            </div>

            <h2 className='text-5xl xl:text-6xl font-bold mb-8'>
              <span className='text-white'>Ready to Take Your Website</span>
              <br />
              <span className='text-accent'>to the Next Level?</span>
            </h2>

            <p className='text-white/90 text-xl mb-12 max-w-4xl mx-auto leading-relaxed'>
              Get a comprehensive performance audit and discover exactly how we
              can optimize your website for maximum speed, visibility, and
              conversions. No obligations, just results.
            </p>

            <div className='flex flex-col sm:flex-row gap-6 justify-center items-center mb-12'>
              <a
                href='/contact'
                className='bg-gradient-to-r from-accent to-accent/80 text-primary px-16 py-6 rounded-2xl font-bold text-xl hover:from-accent/80 hover:to-accent transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-accent/50 no-underline'
              >
                Get Free Consultation
              </a>
              <button className='border-2 border-accent/50 text-accent px-16 py-6 rounded-2xl font-bold text-xl hover:border-accent hover:bg-accent/10 transition-all duration-300'>
                View Portfolio
              </button>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 text-center'>
              <div className='flex items-center justify-center text-white/70'>
                <span className='text-accent mr-2'>✓</span>
                Free performance audit
              </div>
              <div className='flex items-center justify-center text-white/70'>
                <span className='text-accent mr-2'>✓</span>
                Custom optimization plan
              </div>
              <div className='flex items-center justify-center text-white/70'>
                <span className='text-accent mr-2'>✓</span>
                Guaranteed results
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Optimization
