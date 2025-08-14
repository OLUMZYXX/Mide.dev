'use client'
import React from 'react'
const ServiceDetail = () => (
  <section className='min-h-[60vh] flex flex-col justify-center py-12 xl:py-0'>
    <div className='container mx-auto'>
      <h1 className='text-4xl font-bold text-accent mb-6'>Performance & SEO</h1>
      <p className='text-white/80 text-lg mb-4'>
        Speed optimization, SEO improvements, and accessibility enhancements.
      </p>
      <ul className='list-disc ml-6 text-white/70'>
        <li>SEO best practices and technical optimization</li>
        <li>Performance audits and improvements</li>
        <li>Accessibility enhancements (WCAG)</li>
        <li>Image and asset optimization</li>
        <li>Code splitting and lazy loading</li>
      </ul>
    </div>
  </section>
)

export default ServiceDetail
