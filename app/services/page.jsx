'use client'
import { BsArrowDownRight } from 'react-icons/bs'
import Link from 'next/link'
import { motion } from 'framer-motion'

const services = [
  {
    num: '01',
    title: 'Web App Development',
    slug: 'web-development',
    description:
      'Modern React/Next.js applications with performance optimization and best practices.',
  },
  {
    num: '02',
    title: 'Performance & SEO',
    slug: 'optimization',
    description:
      'Speed optimization, SEO improvements, and accessibility enhancements.',
  },
  {
    num: '03',
    title: 'API Integration',
    slug: 'api-integration',
    description:
      'REST/GraphQL APIs and third-party service integrations for dynamic experiences.',
  },
  {
    num: '04',
    title: 'Responsive Design',
    slug: 'responsive-design',
    description:
      'Mobile-first development ensuring perfect performance across all devices.',
  },
  {
    num: '05',
    title: 'Cross-Platform Support',
    slug: 'cross-platform',
    description:
      'Consistent experience across browsers and platforms with thorough testing.',
  },
  {
    num: '06',
    title: 'Maintenance & Support',
    slug: 'maintenance',
    description:
      'Ongoing updates, monitoring, and technical support for long-term success.',
  },
]

const Services = () => {
  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
      <div className='container mx-auto'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.2, duration: 0.4, ease: 'easeInOut' },
          }}
          className='grid grid-cols-1 md:grid-cols-2 gap-16'
        >
          {services.map((service, index) => (
            <div
              key={service.slug}
              className='flex flex-col justify-center gap-6 group'
            >
              <div className='w-full flex justify-between items-center'>
                <div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500'>
                  {service.num}
                </div>

                <Link
                  href={`/services/${service.slug}`}
                  className='w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45'
                  aria-label={`View ${service.title} details`}
                >
                  <BsArrowDownRight className='text-primary text-3xl' />
                </Link>
              </div>

              <Link href={`/services/${service.slug}`}>
                <h2 className='text-3xl font-bold leading-none text-white group-hover:text-accent transition-all duration-500'>
                  {service.title}
                </h2>
              </Link>

              <p className='text-white/60 leading-relaxed'>
                {service.description}
              </p>

              <div className='border-b border-white/20 w-full' />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
