'use client'

const ServiceDetail = () => (
  <section className='min-h-[60vh] flex flex-col justify-center py-12 xl:py-0'>
    <div className='container mx-auto'>
      <h1 className='text-4xl font-bold text-accent mb-6'>
        Cross-Platform Support
      </h1>
      <p className='text-white/80 text-lg mb-4'>
        Consistent experience across browsers and platforms with thorough
        testing.
      </p>
      <ul className='list-disc ml-6 text-white/70'>
        <li>Browser compatibility testing</li>
        <li>Polyfills and fallbacks for older browsers</li>
        <li>Cross-platform support (Windows, macOS, mobile)</li>
        <li>Consistent UI and functionality</li>
        <li>Bug fixing and troubleshooting</li>
      </ul>
    </div>
  </section>
)

export default ServiceDetail
