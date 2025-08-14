'use client'

const ServiceDetail = () => (
  <section className='min-h-[60vh] flex flex-col justify-center py-12 xl:py-0'>
    <div className='container mx-auto'>
      <h1 className='text-4xl font-bold text-accent mb-6'>API Integration</h1>
      <p className='text-white/80 text-lg mb-4'>
        Connecting web apps to REST APIs, GraphQL, and third-party services for
        dynamic, data-driven experiences.
      </p>
      <ul className='list-disc ml-6 text-white/70'>
        <li>REST API and GraphQL integration</li>
        <li>Authentication and authorization flows</li>
        <li>Data fetching and state management</li>
        <li>Third-party service integration</li>
        <li>Error handling and data validation</li>
      </ul>
    </div>
  </section>
)

export default ServiceDetail
