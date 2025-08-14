'use client'

const ServiceDetail = () => (
  <section className='min-h-[60vh] flex flex-col justify-center py-12 xl:py-0'>
    <div className='container mx-auto'>
      <h1 className='text-4xl font-bold text-accent mb-6'>
        Web App Development
      </h1>
      <p className='text-white/80 text-lg mb-4'>
        Modern React/Next.js applications with performance optimization and best
        practices.
      </p>
      <ul className='list-disc ml-6 text-white/70'>
        <li>Single Page Applications (SPA) and Multi-Page Apps</li>
        <li>Component-based architecture</li>
        <li>State management (Redux, Context API)</li>
        <li>Integration with APIs and backend services</li>
        <li>Performance optimization and accessibility</li>
      </ul>
    </div>
  </section>
)

export default ServiceDetail
