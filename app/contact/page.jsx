'use client'
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaWhatsapp,
} from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import { BiCopy } from 'react-icons/bi'
import { useState } from 'react'

const contactInfo = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    description: '(+234) 814-839-4703',
    link: 'tel:+2348148394703',
    copyable: true,
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: 'akinwumiolumide5@gmail.com',
    link: 'mailto:akinwumiolumide5@gmail.com',
    copyable: true,
  },
  {
    icon: <FaMapMarkerAlt />,
    title: 'Location',
    description: 'Lagos, Nigeria',
    link: '#',
    copyable: false,
  },
]

const socialLinks = [
  {
    icon: <FaLinkedin />,
    name: 'LinkedIn',
    link: 'https://linkedin.com/in/olumide-akinwumi',
    color: 'hover:text-blue-400',
  },
  {
    icon: <FaGithub />,
    name: 'GitHub',
    link: 'https://github.com/OLUMZYXX',
    color: 'hover:text-gray-300',
  },
  {
    icon: <FaTwitter />,
    name: 'Twitter',
    link: 'https://twitter.com/olumide',
    color: 'hover:text-blue-400',
  },
  {
    icon: <FaWhatsapp />,
    name: 'WhatsApp',
    link: 'https://wa.me/2348148394703',
    color: 'hover:text-green-400',
  },
]

// Floating background elements
const FloatingElement = ({ className, delay = 0 }) => (
  <div
    className={`absolute rounded-full bg-accent/10 animate-bounce ${className}`}
    style={{
      animationDelay: `${delay}s`,
      animationDuration: '4s',
      animationIterationCount: 'infinite',
    }}
  />
)

const Contact = () => {
  const [copiedText, setCopiedText] = useState('')

  const copyToClipboard = async (text, title) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedText(title)
      setTimeout(() => setCopiedText(''), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-primary via-primary/95 to-[#0a0a0f] text-white font-primary py-16 relative overflow-hidden'>
      {/* Animated Background Elements */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        {/* Floating Elements */}
        <FloatingElement className='w-8 h-8 top-20 left-[10%]' delay={0} />
        <FloatingElement className='w-6 h-6 top-40 right-[15%]' delay={1} />
        <FloatingElement className='w-10 h-10 bottom-40 left-[5%]' delay={2} />
        <FloatingElement className='w-4 h-4 bottom-60 right-[20%]' delay={3} />

        {/* Gradient Orbs */}
        <div className='absolute top-32 left-32 w-96 h-96 bg-gradient-to-r from-accent/20 to-transparent rounded-full blur-3xl animate-pulse'></div>
        <div
          className='absolute bottom-32 right-32 w-80 h-80 bg-gradient-to-l from-accent/15 to-transparent rounded-full blur-3xl animate-pulse'
          style={{ animationDelay: '2s' }}
        ></div>

        {/* Contact Icons floating */}
        <div
          className='absolute top-24 right-24 text-accent/20 animate-spin'
          style={{ animationDuration: '10s' }}
        >
          <FaEnvelope size={32} />
        </div>
        <div className='absolute bottom-24 left-24 text-accent/20 animate-bounce'>
          <FaPhoneAlt size={28} />
        </div>
        <div className='absolute top-1/2 right-16 text-accent/20 animate-pulse'>
          <FaMapMarkerAlt size={30} />
        </div>
      </div>

      <div className='container mx-auto relative z-10'>
        {/* Header */}
        <div className='text-center mb-16'>
          <div className='relative'>
            <h1 className='text-5xl xl:text-6xl font-bold mb-4 relative z-10'>
              <span className='text-white drop-shadow-lg'>Get In</span>{' '}
              <span className='text-accent drop-shadow-xl'>Touch</span>
            </h1>
            {/* Glowing effect behind text */}
            <div className='absolute inset-0 blur-2xl'>
              <h1 className='text-5xl xl:text-6xl font-bold mb-4 text-accent/30'>
                Get In Touch
              </h1>
            </div>
          </div>
          <p className='text-xl text-white/70 max-w-2xl mx-auto drop-shadow-md'>
            Ready to bring your ideas to life? Let's connect and discuss your
            next project
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-start'>
          {/* Contact Information */}
          <div className='space-y-8'>
            <div className='bg-gradient-to-br from-[#27272c]/90 to-[#1f1f23]/90 backdrop-blur-xl rounded-3xl border border-white/10 p-8 shadow-2xl hover:shadow-accent/10 transition-all duration-500'>
              <h2 className='text-3xl font-bold mb-8 text-white drop-shadow-md'>
                Contact Information
              </h2>

              <div className='space-y-6'>
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className='group flex items-center gap-6 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] backdrop-blur-sm'
                  >
                    <div className='w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/10 text-accent rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg'>
                      <div className='text-2xl'>{item.icon}</div>
                    </div>
                    <div className='flex-1'>
                      <p className='text-white/60 text-sm font-medium uppercase tracking-wider mb-1'>
                        {item.title}
                      </p>
                      <h3 className='text-lg font-semibold text-white group-hover:text-accent transition-colors'>
                        {item.description}
                      </h3>
                    </div>
                    <div className='flex gap-2'>
                      {item.copyable && (
                        <button
                          onClick={() =>
                            copyToClipboard(item.description, item.title)
                          }
                          className='w-10 h-10 bg-white/10 hover:bg-accent/20 text-white hover:text-accent rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm'
                          title='Copy to clipboard'
                        >
                          <BiCopy size={16} />
                        </button>
                      )}
                      {item.link !== '#' && (
                        <a
                          href={item.link}
                          className='w-10 h-10 bg-white/10 hover:bg-accent/20 text-white hover:text-accent rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm'
                          title={`Contact via ${item.title}`}
                        >
                          {item.icon}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Copy Notification */}
              {copiedText && (
                <div className='mt-4 p-3 bg-accent/20 border border-accent/30 rounded-xl text-accent text-sm font-medium text-center backdrop-blur-sm'>
                  {copiedText} copied to clipboard!
                </div>
              )}
            </div>

            {/* Social Links */}
            <div className='bg-gradient-to-br from-[#27272c]/90 to-[#1f1f23]/90 backdrop-blur-xl rounded-3xl border border-white/10 p-8 shadow-2xl hover:shadow-accent/10 transition-all duration-500'>
              <h3 className='text-2xl font-bold mb-6 text-white drop-shadow-md'>
                Connect With Me
              </h3>
              <div className='grid grid-cols-2 gap-4'>
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className={`flex items-center gap-3 p-4 bg-white/5 hover:bg-white/10 rounded-2xl transition-all duration-300 hover:scale-105 group backdrop-blur-sm ${social.color}`}
                  >
                    <div className='text-2xl group-hover:scale-110 transition-transform'>
                      {social.icon}
                    </div>
                    <span className='font-medium'>{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Availability & Quick Info */}
          <div className='space-y-8'>
            {/* Availability Status */}
            <div className='bg-gradient-to-br from-[#27272c]/90 to-[#1f1f23]/90 backdrop-blur-xl rounded-3xl border border-white/10 p-8 shadow-2xl hover:shadow-accent/10 transition-all duration-500'>
              <div className='text-center'>
                <div className='w-20 h-20 bg-gradient-to-br from-accent to-accent-hover rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-accent/30'>
                  <div className='w-4 h-4 bg-white rounded-full animate-pulse'></div>
                </div>
                <h3 className='text-2xl font-bold text-white mb-4'>
                  Available for Work
                </h3>
                <p className='text-white/70 text-lg mb-6'>
                  Currently accepting new projects and freelance opportunities
                </p>
                <div className='bg-accent/20 border border-accent/30 rounded-2xl p-4 backdrop-blur-sm'>
                  <p className='text-accent font-semibold'>
                    Response Time: Within 24 hours
                  </p>
                </div>
              </div>
            </div>

            {/* Services Quick List */}
            <div className='bg-gradient-to-br from-[#27272c]/90 to-[#1f1f23]/90 backdrop-blur-xl rounded-3xl border border-white/10 p-8 shadow-2xl hover:shadow-accent/10 transition-all duration-500'>
              <h3 className='text-2xl font-bold text-white mb-6 drop-shadow-md'>
                What I Offer
              </h3>
              <div className='space-y-4'>
                {[
                  'Frontend Development',
                  'React/Next.js Applications',
                  'Responsive Web Design',
                  'Performance Optimization',
                  'UI/UX Implementation',
                ].map((service, index) => (
                  <div
                    key={index}
                    className='flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300'
                  >
                    <div className='w-2 h-2 bg-accent rounded-full shadow-lg'></div>
                    <span className='text-white/80 font-medium'>{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact CTA */}
            <div className='bg-gradient-to-br from-accent/20 to-accent/5 backdrop-blur-xl rounded-3xl border border-accent/30 p-8 text-center shadow-2xl hover:shadow-accent/20 transition-all duration-500'>
              <h3 className='text-2xl font-bold text-accent mb-4'>
                Ready to Start?
              </h3>
              <p className='text-white/80 mb-6'>
                Let's discuss your project and turn your vision into reality
              </p>
              <a
                href='mailto:akinwumiolumide5@gmail.com'
                className='inline-flex items-center gap-3 bg-accent text-primary px-8 py-4 rounded-2xl font-bold hover:bg-accent-hover transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-accent/30'
              >
                <SiGmail size={20} />
                Send Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
