'use client'

const ServiceDetail = () => (
  <section className='min-h-[60vh] flex flex-col justify-center py-12 xl:py-0'>
    <div className='container mx-auto'>
      <h1 className='text-4xl font-bold text-accent mb-6'>Responsive Design</h1>
      <p className='text-white/80 text-lg mb-4'>
        Mobile-first development ensuring perfect performance across all
        devices.
      </p>
      <ul className='list-disc ml-6 text-white/70'>
        <li>Mobile-first and responsive layouts</li>
        <li>Flexible grids and adaptive components</li>
        <li>Touch-friendly UI elements</li>
        <li>Testing on multiple devices</li>
        <li>Progressive enhancement techniques</li>
      </ul>
    </div>
  </section>
)

export default ServiceDetail
