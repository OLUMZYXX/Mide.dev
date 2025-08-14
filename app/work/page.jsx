'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { BsArrowUpRight, BsGithub } from 'react-icons/bs'
import {
  FaExternalLinkAlt,
  FaCode,
  FaEye,
  FaReact,
  FaJs,
  FaNodeJs,
  FaCss3Alt,
  FaHtml5,
  FaGitAlt,
} from 'react-icons/fa'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { SiTypescript, SiTailwindcss, SiNextdotjs } from 'react-icons/si'

const projects = [
  {
    num: '01',
    category: 'Frontend Project',
    title: 'Apple Website Clone',
    description:
      'Developed a fully responsive Apple clone website, replicating the sleek design and functionality of the original. Utilized modern web technologies to create an interactive, pixel-perfect user experience across all devices.',
    stack: [
      { name: 'Next.js' },
      { name: 'Tailwind CSS' },
      { name: 'JavaScript' },
    ],
    image: '/assets/work/iphone.jpg',
    live: 'https://appl-website-clone.vercel.app',
    github: 'https://github.com/OLUMZYXX/Appleeee-website-clone',
    features: [
      'Responsive Design',
      'Interactive Animations',
      'Modern UI/UX',
      'Cross-browser Compatible',
    ],
  },
  {
    num: '02',
    category: 'Frontend Project',
    title: 'Modern Furniture Website',
    description:
      'Developed a sleek, responsive modern furniture website showcasing products with clean design and intuitive navigation. Leveraged HTML, CSS, and JavaScript to create an engaging user experience with a focus on minimalism and elegance',
    stack: [{ name: 'HTML5' }, { name: 'CSS3' }, { name: 'JavaScript' }],
    image: '/assets/work/thumb1.png',
    live: '#',
    github: '#',
    features: [
      'Product Showcase',
      'Clean Design',
      'Responsive Layout',
      'Interactive Elements',
    ],
  },
  {
    num: '03',
    category: 'Full-Stack Project',
    title: 'Restaurant Website',
    description:
      'Developed a fully functional restaurant website with a modern, user-friendly interface, incorporating dynamic menus, reservations, and online ordering. Utilized a full stack of technologies, including React for the front end and Node.js for the back end, ensuring a seamless and responsive user experience',
    stack: [
      { name: 'HTML5' },
      { name: 'Tailwind CSS' },
      { name: 'JavaScript' },
      { name: 'Node.js' },
    ],
    image: '/assets/work/restaurant.png',
    live: 'https://food-website-react-ui.vercel.app',
    github: 'https://github.com/OLUMZYXX/Food-Website-React-Ui',
    features: [
      'Online Ordering',
      'Menu Management',
      'Reservation System',
      'Full-Stack Solution',
    ],
  },
]

// Floating icons for background animation
const FloatingIcon = ({ icon: Icon, className, delay = 0 }) => (
  <div
    className={`absolute text-accent/10 animate-bounce ${className}`}
    style={{
      animationDelay: `${delay}s`,
      animationDuration: '3s',
      animationIterationCount: 'infinite',
    }}
  >
    <Icon size={40} />
  </div>
)

const ProjectCard = ({ project, isActive, onClick }) => (
  <div
    className={`cursor-pointer transition-all duration-500 backdrop-blur-sm ${
      isActive
        ? 'bg-gradient-to-br from-accent/20 to-accent/5 border-accent/50 scale-[1.02] shadow-2xl shadow-accent/20'
        : 'bg-[#27272c]/80 border-white/10 hover:border-accent/30 hover:bg-[#27272c]/90'
    } border rounded-2xl p-6 hover:shadow-xl transition-all duration-300`}
    onClick={onClick}
  >
    <div className='flex items-center gap-4 mb-4'>
      <div
        className={`text-6xl font-black transition-all duration-300 ${
          isActive ? 'text-accent drop-shadow-lg' : 'text-white/20'
        }`}
      >
        {project.num}
      </div>
      <div className='flex-1'>
        <h3
          className={`text-lg font-bold transition-colors ${
            isActive ? 'text-accent' : 'text-white'
          }`}
        >
          {project.title}
        </h3>
        <p className='text-white/60 text-sm'>{project.category}</p>
      </div>
    </div>

    <div className='flex flex-wrap gap-2'>
      {project.stack.slice(0, 3).map((tech, index) => (
        <span
          key={index}
          className={`px-2 py-1 rounded-full text-xs transition-all duration-300 ${
            isActive
              ? 'bg-accent/20 text-accent border border-accent/30 shadow-md'
              : 'bg-white/10 text-white/70 hover:bg-white/20'
          }`}
        >
          {tech.name}
        </span>
      ))}
    </div>
  </div>
)

const Work = () => {
  const [activeProject, setActiveProject] = useState(0)
  const [loading, setLoading] = useState(false)

  const currentProject = projects[activeProject]

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  if (loading) {
    return (
      <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary/95 to-[#0a0a0f] text-white'>
        <div className='animate-spin w-12 h-12 border-4 border-accent/30 border-t-accent rounded-full'></div>
      </div>
    )
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-primary via-primary/95 to-[#0a0a0f] text-white font-primary py-16 relative overflow-hidden'>
      {/* Animated Background Elements */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        {/* Floating Tech Icons */}
        <FloatingIcon icon={FaReact} className='top-20 left-[10%]' delay={0} />
        <FloatingIcon icon={FaJs} className='top-40 right-[15%]' delay={0.5} />
        <FloatingIcon
          icon={SiTypescript}
          className='top-60 left-[5%]'
          delay={1}
        />
        <FloatingIcon
          icon={FaNodeJs}
          className='bottom-40 right-[10%]'
          delay={1.5}
        />
        <FloatingIcon
          icon={SiTailwindcss}
          className='bottom-60 left-[20%]'
          delay={2}
        />
        <FloatingIcon
          icon={SiNextdotjs}
          className='top-80 right-[25%]'
          delay={2.5}
        />
        <FloatingIcon
          icon={FaCode}
          className='bottom-20 right-[5%]'
          delay={3}
        />
        <FloatingIcon
          icon={FaGitAlt}
          className='top-96 left-[15%]'
          delay={3.5}
        />

        {/* Gradient Orbs */}
        <div className='absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-accent/20 to-transparent rounded-full blur-3xl animate-pulse'></div>
        <div
          className='absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-l from-accent/15 to-transparent rounded-full blur-3xl animate-pulse'
          style={{ animationDelay: '2s' }}
        ></div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-accent/5 to-transparent rounded-full blur-3xl'></div>

        {/* Geometric Shapes */}
        <div
          className='absolute top-32 right-32 w-4 h-4 bg-accent/30 rotate-45 animate-spin'
          style={{ animationDuration: '8s' }}
        ></div>
        <div
          className='absolute bottom-32 left-32 w-6 h-6 border-2 border-accent/40 rotate-45 animate-spin'
          style={{ animationDuration: '6s', animationDirection: 'reverse' }}
        ></div>
        <div className='absolute top-1/3 left-1/4 w-2 h-2 bg-accent/50 rounded-full animate-ping'></div>
        <div
          className='absolute bottom-1/3 right-1/4 w-3 h-3 bg-accent/40 rounded-full animate-ping'
          style={{ animationDelay: '1s' }}
        ></div>
      </div>

      <div className='container mx-auto relative z-10'>
        {/* Header */}
        <div className='text-center mb-16'>
          <div className='relative'>
            <h1 className='text-5xl xl:text-6xl font-bold mb-4 relative z-10'>
              <span className='text-white drop-shadow-lg'>My</span>{' '}
              <span className='text-accent drop-shadow-xl'>Projects</span>
            </h1>
            {/* Glowing effect behind text */}
            <div className='absolute inset-0 blur-2xl'>
              <h1 className='text-5xl xl:text-6xl font-bold mb-4 text-accent/30'>
                My Projects
              </h1>
            </div>
          </div>
          <p className='text-xl text-white/70 max-w-2xl mx-auto drop-shadow-md'>
            Showcasing my journey through code, creativity, and innovation
          </p>
        </div>

        <div className='grid grid-cols-1 xl:grid-cols-12 gap-8 items-start'>
          {/* Project Selection Sidebar */}
          <div className='xl:col-span-4 space-y-4'>
            <h2 className='text-2xl font-bold mb-6 text-white/90 drop-shadow-md'>
              Featured Work
            </h2>
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                isActive={activeProject === index}
                onClick={() => setActiveProject(index)}
              />
            ))}
          </div>

          {/* Main Project Display */}
          <div className='xl:col-span-8'>
            <div className='bg-gradient-to-br from-[#27272c]/90 to-[#1f1f23]/90 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden shadow-2xl hover:shadow-accent/10 transition-all duration-500'>
              {/* Project Image */}
              <div className='relative h-[400px] bg-gradient-to-br from-accent/10 to-primary overflow-hidden'>
                <div className='absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent z-10'></div>
                <div className='absolute top-4 left-4 z-20'>
                  <span className='bg-accent text-primary px-3 py-1 rounded-full text-sm font-bold shadow-lg'>
                    {currentProject.num}
                  </span>
                </div>
                <div className='absolute top-4 right-4 z-20 flex gap-2'>
                  <button
                    onClick={prevProject}
                    className='w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-accent hover:text-primary transition-all duration-300 hover:scale-110 shadow-lg'
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextProject}
                    className='w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-accent hover:text-primary transition-all duration-300 hover:scale-110 shadow-lg'
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
                {/* Project image */}
                <Image
                  src={currentProject.image}
                  alt={currentProject.title}
                  fill
                  className='object-cover'
                  sizes='(max-width: 768px) 100vw, 800px'
                  priority
                />
              </div>

              {/* Project Details */}
              <div className='p-8'>
                <div className='mb-6'>
                  <div className='flex items-center gap-4 mb-4 flex-wrap'>
                    <h2 className='text-3xl font-bold text-white drop-shadow-md'>
                      {currentProject.title}
                    </h2>
                    <span className='bg-gradient-to-r from-accent/30 to-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium border border-accent/30 shadow-md backdrop-blur-sm'>
                      {currentProject.category}
                    </span>
                  </div>
                  <p className='text-white/70 text-lg leading-relaxed mb-6 drop-shadow-sm'>
                    {currentProject.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className='mb-8'>
                  <h3 className='text-lg font-semibold text-white mb-4 flex items-center gap-2 drop-shadow-md'>
                    <FaCode className='text-accent' />
                    Technologies Used
                  </h3>
                  <div className='flex flex-wrap gap-3'>
                    {currentProject.stack.map((tech, index) => (
                      <span
                        key={index}
                        className='bg-gradient-to-r from-accent/20 to-accent/10 text-accent px-4 py-2 rounded-xl border border-accent/30 font-medium backdrop-blur-sm shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300'
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className='mb-8'>
                  <h3 className='text-lg font-semibold text-white mb-4 drop-shadow-md'>
                    Key Features
                  </h3>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                    {currentProject.features.map((feature, index) => (
                      <div
                        key={index}
                        className='flex items-center gap-3 text-white/80 bg-white/5 p-3 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300'
                      >
                        <div className='w-2 h-2 bg-accent rounded-full shadow-lg'></div>
                        <span className='text-sm font-medium'>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className='flex gap-4 flex-wrap'>
                  {currentProject.live !== '#' && (
                    <a
                      href={currentProject.live}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center gap-3 bg-gradient-to-r from-accent to-accent-hover text-primary px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300 group shadow-lg hover:shadow-accent/30'
                    >
                      <FaEye />
                      <span>Live Demo</span>
                      <FaExternalLinkAlt className='group-hover:translate-x-1 transition-transform' />
                    </a>
                  )}

                  {currentProject.github !== '#' && (
                    <a
                      href={currentProject.github}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center gap-3 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-accent/50 group shadow-lg hover:scale-105'
                    >
                      <BsGithub />
                      <span>Source Code</span>
                      <FaExternalLinkAlt className='group-hover:translate-x-1 transition-transform' />
                    </a>
                  )}
                </div>

                {/* Project Navigation */}
                <div className='mt-8 pt-6 border-t border-white/10'>
                  <div className='flex justify-between items-center'>
                    <span className='text-white/60 text-sm drop-shadow-sm'>
                      Project {activeProject + 1} of {projects.length}
                    </span>
                    <div className='flex gap-3'>
                      {projects.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveProject(index)}
                          className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                            index === activeProject
                              ? 'bg-accent shadow-lg shadow-accent/50'
                              : 'bg-white/30 hover:bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className='mt-16 grid grid-cols-1 md:grid-cols-3 gap-6'>
          <div className='bg-gradient-to-br from-[#27272c]/80 to-[#1f1f23]/80 backdrop-blur-xl p-6 rounded-2xl border border-white/10 text-center hover:border-accent/30 transition-all duration-300 shadow-xl'>
            <div className='text-4xl font-bold text-accent mb-2 drop-shadow-lg'>
              {projects.length}+
            </div>
            <div className='text-white/70'>Completed Projects</div>
          </div>
          <div className='bg-gradient-to-br from-[#27272c]/80 to-[#1f1f23]/80 backdrop-blur-xl p-6 rounded-2xl border border-white/10 text-center hover:border-accent/30 transition-all duration-300 shadow-xl'>
            <div className='text-4xl font-bold text-accent mb-2 drop-shadow-lg'>
              100%
            </div>
            <div className='text-white/70'>Client Satisfaction</div>
          </div>
          <div className='bg-gradient-to-br from-[#27272c]/80 to-[#1f1f23]/80 backdrop-blur-xl p-6 rounded-2xl border border-white/10 text-center hover:border-accent/30 transition-all duration-300 shadow-xl'>
            <div className='text-4xl font-bold text-accent mb-2 drop-shadow-lg'>
              3+
            </div>
            <div className='text-white/70'>Years Experience</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
