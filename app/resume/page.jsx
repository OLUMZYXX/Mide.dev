'use client'

import { useState } from 'react'
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaBuilding,
  FaGraduationCap,
  FaUser,
  FaCode,
  FaBriefcase,
  FaLightbulb,
  FaAward,
  FaProjectDiagram,
} from 'react-icons/fa'
import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiVite,
  SiGit,
} from 'react-icons/si'

const about = {
  title: 'About Me',
  description:
    'Frontend Engineer with 3 years of development experience building scalable, user-centric web applications specializing in React, TypeScript and modern Javascript. I create clean, user-friendly interfaces with a focus on performance optimization and exceptional user experience, delivering high-quality solutions with a strong attention to code quality.',
  info: [
    {
      fieldName: 'Name',
      fieldValue: 'Olumide Akinwumi',
    },
    {
      fieldName: 'Experience',
      fieldValue: '3+ Years',
    },
    {
      fieldName: 'Nationality',
      fieldValue: 'Nigerian',
    },
    {
      fieldName: 'Email',
      fieldValue: 'akinwumiolumide5@gmail.com',
    },
    {
      fieldName: 'Freelance',
      fieldValue: 'Available',
    },
    {
      fieldName: 'Language',
      fieldValue: 'English (Native)',
    },
  ],
}

const skills = {
  title: 'My Technical Skills',
  description:
    'Modern web technologies I use to build exceptional digital experiences',
  items: [
    {
      icon: <FaJs />,
      name: 'JavaScript',
      level: 90,
      category: 'Frontend',
    },
    {
      icon: <SiTypescript />,
      name: 'TypeScript',
      level: 85,
      category: 'Frontend',
    },
    {
      icon: <FaReact />,
      name: 'React',
      level: 95,
      category: 'Frontend',
    },
    {
      icon: <SiNextdotjs />,
      name: 'Next.js',
      level: 90,
      category: 'Frontend',
    },
    {
      icon: <SiVite />,
      name: 'Vite',
      level: 80,
      category: 'Tools',
    },
    {
      icon: <SiTailwindcss />,
      name: 'Tailwind CSS',
      level: 95,
      category: 'Styling',
    },
    {
      icon: <FaNodeJs />,
      name: 'Node.js',
      level: 75,
      category: 'Backend',
    },
    {
      icon: <SiGit />,
      name: 'Git',
      level: 85,
      category: 'Tools',
    },
  ],
}

const experience = {
  title: 'My Professional Experience',
  description:
    'Building scalable web applications and delivering exceptional user experiences',
  items: [
    {
      company: 'Orokolabs Limited',
      position: 'Frontend Engineer',
      duration: 'February 2023 - Present',
      location: 'Remote - Lagos, Nigeria',
      type: 'Full-time',
      achievements: [
        'Built real-time financial dashboard improving client decision-making by 30%',
        'Migrated legacy codebases to React/Next.js, achieving 50% faster page loads',
        'Integrated third-party APIs reducing data processing overhead by 35%',
        'Implemented secure authentication reducing support tickets by 30%',
      ],
    },
    {
      company: 'Freelance Projects',
      position: 'Frontend Developer',
      duration: '2021 - Present',
      location: 'Remote',
      type: 'Freelance',
      achievements: [
        'Delivered 10+ client projects with 100% satisfaction rate',
        'Specialized in React, Next.js, and modern JavaScript applications',
        'Focus on performance optimization and responsive design',
        'Built e-commerce, rental platforms, and business websites',
      ],
    },
  ],
}

const projects = {
  title: 'Featured Projects',
  description:
    'Real-world applications showcasing technical expertise and problem-solving skills',
  items: [
    {
      name: 'Omni Food - Food Delivery Platform',
      type: 'Full-Stack Application',
      duration: '2023',
      status: 'Completed',
      technologies: ['React', 'Next.js', 'Stripe', 'Google OAuth'],
      achievements: [
        'Increased user conversion by 30% through intuitive UX design',
        'Boosted performance by 40% with optimized image delivery and caching',
        'Integrated secure payment processing with Stripe API',
        'Implemented one-click Google OAuth signup',
      ],
    },
    {
      name: 'Home Hive - Property Rental Platform',
      type: 'Dashboard Application',
      duration: '2023',
      status: 'Live',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'GitHub Actions'],
      achievements: [
        'Improved operational efficiency by 35% with real-time analytics',
        'Achieved 60% speed improvement with modern React architecture',
        'Reduced support overhead by 30% with robust auth flows',
        'Streamlined CI/CD reducing deployment issues by 45%',
      ],
    },
    {
      name: 'Coffee Cafe Website',
      type: 'Marketing Website',
      duration: '2022',
      status: 'Completed',
      technologies: ['React', 'Next.js', 'React Query', 'Tailwind CSS'],
      achievements: [
        'Enhanced local visibility and user engagement',
        'Built scalable UI with reusable React components',
        'Cut admin dashboard load times by 60%',
        'Boosted mobile traffic by 25% with responsive design',
      ],
    },
  ],
}

const education = {
  title: 'My Education',
  description: 'Academic foundation and continuous learning in technology',
  items: [
    {
      institution: 'Federal University of Petroleum Resources',
      degree: 'B.Sc. Geology',
      duration: '2019 - 2024',
      location: 'Effurun, Delta State, Nigeria',
      gpa: '4.2/5.0',
    },
    {
      institution: 'Udemy & Online Platforms',
      degree: 'Full-Stack Web Development',
      duration: '2021 - 2023',
      location: 'Self-Directed Learning',
      certificates: '15+ Certifications',
    },
  ],
}

const tabData = [
  { id: 'experience', label: 'Experience', icon: <FaBriefcase /> },
  { id: 'projects', label: 'Projects', icon: <FaProjectDiagram /> },
  { id: 'skills', label: 'Skills', icon: <FaLightbulb /> },
  { id: 'education', label: 'Education', icon: <FaGraduationCap /> },
  { id: 'about', label: 'About Me', icon: <FaUser /> },
]

// Floating background elements
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

const SkillCard = ({ skill }) => (
  <div className='bg-gradient-to-br from-[#27272c]/90 to-[#1f1f23]/90 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-accent/30 transition-all duration-300 group'>
    <div className='flex items-center gap-4 mb-4'>
      <div className='text-3xl text-accent group-hover:scale-110 transition-transform duration-300'>
        {skill.icon}
      </div>
      <div className='flex-1'>
        <h4 className='font-semibold text-white'>{skill.name}</h4>
        <span className='text-xs text-accent font-medium'>
          {skill.category}
        </span>
      </div>
      <span className='text-sm font-bold text-accent'>{skill.level}%</span>
    </div>
    <div className='w-full bg-white/10 rounded-full h-2'>
      <div
        className='bg-gradient-to-r from-accent to-accent-hover h-2 rounded-full transition-all duration-700 ease-out'
        style={{ width: `${skill.level}%` }}
      />
    </div>
  </div>
)

const StatusBadge = ({ status }) => {
  const colors = {
    Live: 'bg-accent/20 text-accent border-accent/30',
    Completed: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    'In Progress': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  }

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-medium border ${
        colors[status] || colors['Completed']
      }`}
    >
      {status}
    </span>
  )
}

const Resume = () => {
  const [activeTab, setActiveTab] = useState('experience')

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
        <FloatingIcon icon={SiGit} className='top-96 left-[15%]' delay={3.5} />

        {/* Gradient Orbs */}
        <div className='absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-accent/20 to-transparent rounded-full blur-3xl animate-pulse'></div>
        <div
          className='absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-l from-accent/15 to-transparent rounded-full blur-3xl animate-pulse'
          style={{ animationDelay: '2s' }}
        ></div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-accent/5 to-transparent rounded-full blur-3xl'></div>
      </div>

      <div className='container mx-auto relative z-10'>
        {/* Header */}
        <div className='text-center mb-16'>
          <div className='relative'>
            <h1 className='text-5xl xl:text-6xl font-bold mb-4 relative z-10'>
              <span className='text-white drop-shadow-lg'>My</span>{' '}
              <span className='text-accent drop-shadow-xl'>Resume</span>
            </h1>
            {/* Glowing effect behind text */}
            <div className='absolute inset-0 blur-2xl'>
              <h1 className='text-5xl xl:text-6xl font-bold mb-4 text-accent/30'>
                My Resume
              </h1>
            </div>
          </div>
          <p className='text-xl text-white/70 max-w-2xl mx-auto drop-shadow-md'>
            Showcasing my professional journey, skills, and achievements
          </p>
        </div>

        <div className='grid grid-cols-1 xl:grid-cols-4 gap-8'>
          {/* Sidebar Navigation */}
          <div className='xl:col-span-1'>
            <div className='bg-gradient-to-br from-[#27272c]/90 to-[#1f1f23]/90 backdrop-blur-xl rounded-3xl p-6 border border-white/10 sticky top-8 shadow-2xl'>
              <nav className='space-y-2'>
                {tabData.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300 font-medium ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-accent/20 to-accent/10 border border-accent/30 text-accent shadow-lg'
                        : 'hover:bg-white/5 text-white/80 hover:text-white hover:scale-[1.02]'
                    }`}
                  >
                    <span className='text-lg'>{tab.icon}</span>
                    <span>{tab.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className='xl:col-span-3'>
            <div className='bg-gradient-to-br from-[#27272c]/90 to-[#1f1f23]/90 backdrop-blur-xl rounded-3xl border border-white/10 min-h-[600px] p-8 shadow-2xl hover:shadow-accent/10 transition-all duration-500'>
              {/* Experience Tab */}
              {activeTab === 'experience' && (
                <div>
                  <div className='mb-8'>
                    <h2 className='text-4xl font-bold mb-4'>
                      <span className='text-white'>Professional</span>{' '}
                      <span className='text-accent'>Experience</span>
                    </h2>
                    <p className='text-white/70 text-lg'>
                      {experience.description}
                    </p>
                  </div>
                  <div className='space-y-6'>
                    {experience.items.map((item, index) => (
                      <div
                        key={index}
                        className='bg-gradient-to-br from-[#232329]/90 to-[#1f1f23]/90 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-accent/30 transition-all duration-300 hover:scale-[1.01]'
                      >
                        <div className='flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6'>
                          <div className='flex-1'>
                            <h3 className='text-xl font-bold text-white mb-2'>
                              {item.position}
                            </h3>
                            <div className='flex items-center gap-4 text-white/70 mb-2 flex-wrap'>
                              <span className='flex items-center gap-2'>
                                <FaBuilding className='text-accent' />
                                {item.company}
                              </span>
                              <span className='flex items-center gap-2'>
                                <FaMapMarkerAlt className='text-accent' />
                                {item.location}
                              </span>
                            </div>
                          </div>
                          <div className='text-left lg:text-right mt-4 lg:mt-0'>
                            <div className='flex items-center gap-2 text-accent font-semibold mb-2'>
                              <FaCalendarAlt />
                              {item.duration}
                            </div>
                            <span className='bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-medium border border-accent/30'>
                              {item.type}
                            </span>
                          </div>
                        </div>
                        <div className='space-y-3'>
                          {item.achievements.map((achievement, idx) => (
                            <div
                              key={idx}
                              className='flex items-start gap-3 text-white/80 bg-white/5 p-3 rounded-xl backdrop-blur-sm'
                            >
                              <div className='w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0'></div>
                              <span>{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Projects Tab */}
              {activeTab === 'projects' && (
                <div>
                  <div className='mb-8'>
                    <h2 className='text-4xl font-bold mb-4'>
                      <span className='text-white'>Featured</span>{' '}
                      <span className='text-accent'>Projects</span>
                    </h2>
                    <p className='text-white/70 text-lg'>
                      {projects.description}
                    </p>
                  </div>
                  <div className='space-y-6'>
                    {projects.items.map((item, index) => (
                      <div
                        key={index}
                        className='bg-gradient-to-br from-[#232329]/90 to-[#1f1f23]/90 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-accent/30 transition-all duration-300 hover:scale-[1.01]'
                      >
                        <div className='flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4'>
                          <div className='flex-1'>
                            <h3 className='text-xl font-bold text-white mb-2'>
                              {item.name}
                            </h3>
                            <p className='text-accent font-medium mb-3'>
                              {item.type}
                            </p>
                          </div>
                          <div className='flex items-center gap-3 flex-wrap'>
                            <StatusBadge status={item.status} />
                            <span className='text-white/60'>
                              {item.duration}
                            </span>
                          </div>
                        </div>

                        <div className='flex flex-wrap gap-2 mb-6'>
                          {item.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className='bg-gradient-to-r from-accent/20 to-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium border border-accent/30'
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className='space-y-3'>
                          {item.achievements.map((achievement, idx) => (
                            <div
                              key={idx}
                              className='flex items-start gap-3 text-white/80 bg-white/5 p-3 rounded-xl backdrop-blur-sm'
                            >
                              <div className='w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0'></div>
                              <span>{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Skills Tab */}
              {activeTab === 'skills' && (
                <div>
                  <div className='mb-8'>
                    <h2 className='text-4xl font-bold mb-4'>
                      <span className='text-white'>Technical</span>{' '}
                      <span className='text-accent'>Skills</span>
                    </h2>
                    <p className='text-white/70 text-lg'>
                      {skills.description}
                    </p>
                  </div>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {skills.items.map((skill, index) => (
                      <SkillCard key={index} skill={skill} />
                    ))}
                  </div>
                </div>
              )}

              {/* Education Tab */}
              {activeTab === 'education' && (
                <div>
                  <div className='mb-8'>
                    <h2 className='text-4xl font-bold mb-4'>
                      <span className='text-white'>My</span>{' '}
                      <span className='text-accent'>Education</span>
                    </h2>
                    <p className='text-white/70 text-lg'>
                      {education.description}
                    </p>
                  </div>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {education.items.map((item, index) => (
                      <div
                        key={index}
                        className='bg-gradient-to-br from-[#232329]/90 to-[#1f1f23]/90 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-accent/30 transition-all duration-300 hover:scale-[1.02] h-fit'
                      >
                        <div className='text-accent font-semibold mb-3 flex items-center gap-2'>
                          <FaCalendarAlt />
                          {item.duration}
                        </div>
                        <h3 className='text-xl font-bold text-white mb-4'>
                          {item.degree}
                        </h3>
                        <div className='space-y-3'>
                          <div className='flex items-start gap-3'>
                            <FaGraduationCap className='text-accent mt-1 flex-shrink-0' />
                            <span className='text-white/80'>
                              {item.institution}
                            </span>
                          </div>
                          <div className='flex items-start gap-3'>
                            <FaMapMarkerAlt className='text-accent mt-1 flex-shrink-0' />
                            <span className='text-white/60 text-sm'>
                              {item.location}
                            </span>
                          </div>
                          {item.gpa && (
                            <div className='bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-medium inline-block border border-accent/30'>
                              GPA: {item.gpa}
                            </div>
                          )}
                          {item.certificates && (
                            <div className='bg-white/10 text-white px-3 py-1 rounded-full text-sm font-medium inline-block mt-2'>
                              {item.certificates}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* About Tab */}
              {activeTab === 'about' && (
                <div>
                  <div className='mb-8'>
                    <h2 className='text-4xl font-bold mb-4'>
                      <span className='text-white'>About</span>{' '}
                      <span className='text-accent'>Me</span>
                    </h2>
                    <p className='text-white/70 text-lg leading-relaxed bg-white/5 p-6 rounded-2xl backdrop-blur-sm border border-white/10'>
                      {about.description}
                    </p>
                  </div>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {about.info.map((item, index) => (
                      <div
                        key={index}
                        className='bg-gradient-to-br from-[#232329]/90 to-[#1f1f23]/90 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-accent/30 transition-all duration-300 hover:scale-[1.02]'
                      >
                        <div className='flex items-center justify-between'>
                          <span className='text-white/70 font-medium text-sm uppercase tracking-wider'>
                            {item.fieldName}
                          </span>
                          <span className='text-white font-semibold'>
                            {item.fieldValue}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume
