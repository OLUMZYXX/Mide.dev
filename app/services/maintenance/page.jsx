import React from 'react'

const OptimizationPage = () => {
  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Website Optimization Services</h1>
      <p>
        Enhance your website’s performance, speed, and user experience with our
        optimization services. We analyze your site and implement best practices
        to ensure fast load times, improved SEO, and seamless navigation.
      </p>
      <section>
        <h2>Our Optimization Solutions</h2>
        <ul>
          <li>Performance Audits &amp; Reporting</li>
          <li>Image &amp; Asset Optimization</li>
          <li>Code Minification &amp; Bundling</li>
          <li>SEO Improvements</li>
          <li>Mobile Responsiveness</li>
          <li>Accessibility Enhancements</li>
        </ul>
      </section>
      <section>
        <h2>Why Optimize?</h2>
        <p>
          Optimizing your website leads to higher search rankings, better user
          retention, and increased conversions. Let us help you unlock your
          site’s full potential.
        </p>
      </section>
      <section>
        <h2>Get Started</h2>
        <p>
          Contact us today for a free consultation and see how we can improve
          your website’s performance.
        </p>
        <a
          href='/contact'
          style={{ color: '#0070f3', textDecoration: 'underline' }}
        >
          Contact Us
        </a>
      </section>
    </div>
  )
}

export default OptimizationPage
