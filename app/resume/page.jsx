'use client'

import { Description } from '@radix-ui/react-dialog'
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from 'react-icons/fa'
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
    },
    {
      icon: <SiTypescript />,
      name: 'TypeScript',
    },
    {
      icon: <FaReact />,
      name: 'React',
    },
    {
      icon: <SiNextdotjs />,
      name: 'Next.js',
    },
    {
      icon: <SiVite />,
      name: 'Vite',
    },
    {
      icon: <SiTailwindcss />,
      name: 'Tailwind CSS',
    },
    {
      icon: <FaNodeJs />,
      name: 'Node.js',
    },
    {
      icon: <SiGit />,
      name: 'Git',
    },
  ],
}

const experience = {
  icons: '/assets/resume/badge.svg',
  title: 'My Professional Experience',
  description:
    'Building scalable web applications and delivering exceptional user experiences',
  items: [
    {
      company: 'Orokolabs Limited',
      position: 'Frontend Engineer',
      duration: 'February 2023 - Present',
      location: 'Remote - Lagos, Nigeria',
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
  icons: '/assets/resume/cap.svg',
  title: 'My Education',
  description: 'Academic foundation and continuous learning in technology',
  items: [
    {
      institution: 'Federal University of Petroleum Resources',
      Degree: 'B.Sc. Geology',
      duration: '2019 - 2024',
      location: 'Effurun, Delta State, Nigeria',
    },
    {
      institution: 'Udemy & Online Platforms',
      Degree: 'Full-Stack Web Development',
      duration: '2021 - 2023',
      location: 'Self-Directed Learning',
    },
  ],
}

import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from '@/components/ui/tooltip'

import { ScrollArea } from '@/components/ui/scroll-area'
import { motion } from 'framer-motion'

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.2, duration: 0.4, ease: 'easeIn' },
      }}
      className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
    >
      <div className='container mx-auto'>
        <Tabs
          defaultValue='experience'
          className='flex flex-col xl:flex-row gap-[60px]'
        >
          <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
            <TabsTrigger value='experience'>Experience</TabsTrigger>
            <TabsTrigger value='projects'>Projects</TabsTrigger>
            <TabsTrigger value='skills'>Skills</TabsTrigger>
            <TabsTrigger value='education'>Education</TabsTrigger>
            <TabsTrigger value='about'>About Me</TabsTrigger>
          </TabsList>

          {/* contents */}
          <div className='min-h-[70vh] w-full'>
            {/* experience */}
            <TabsContent value='experience' className='w-full'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{experience.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                  {experience.description}
                </p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 gap-[30px]'>
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className='bg-[#232329] py-6 px-8 rounded-xl'
                        >
                          <div className='flex flex-col gap-4'>
                            <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
                              <div>
                                <h3 className='text-xl font-semibold text-white'>
                                  {item.position}
                                </h3>
                                <div className='flex items-center gap-3 mt-2'>
                                  <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                  <p className='text-white/60'>
                                    {item.company}
                                  </p>
                                </div>
                              </div>
                              <div className='text-right'>
                                <span className='text-accent font-semibold'>
                                  {item.duration}
                                </span>
                                {item.location && (
                                  <p className='text-white/50 text-sm'>
                                    {item.location}
                                  </p>
                                )}
                              </div>
                            </div>
                            <ul className='space-y-2'>
                              {item.achievements.map((achievement, idx) => (
                                <li
                                  key={idx}
                                  className='flex items-start gap-2 text-white/70 text-sm'
                                >
                                  <span className='w-1 h-1 rounded-full bg-accent mt-2 flex-shrink-0'></span>
                                  <span>{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* projects */}
            <TabsContent value='projects' className='w-full'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{projects.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                  {projects.description}
                </p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 gap-[30px]'>
                    {projects.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className='bg-[#232329] py-6 px-8 rounded-xl'
                        >
                          <div className='flex flex-col gap-4'>
                            <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
                              <div>
                                <h3 className='text-xl font-semibold text-white'>
                                  {item.name}
                                </h3>
                                <p className='text-accent text-sm'>
                                  {item.type}
                                </p>
                              </div>
                              <span className='text-white/60 text-sm'>
                                {item.duration}
                              </span>
                            </div>

                            <div className='flex flex-wrap gap-2'>
                              {item.technologies.map((tech, idx) => (
                                <span
                                  key={idx}
                                  className='bg-accent/20 text-accent px-2 py-1 rounded text-xs'
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>

                            <ul className='space-y-2'>
                              {item.achievements.map((achievement, idx) => (
                                <li
                                  key={idx}
                                  className='flex items-start gap-2 text-white/70 text-sm'
                                >
                                  <span className='w-1 h-1 rounded-full bg-accent mt-2 flex-shrink-0'></span>
                                  <span>{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value='education' className='w-full'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{education.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                  {education.description}
                </p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-between items-center lg:items-start'
                        >
                          <span className='text-accent'>{item.duration}</span>
                          <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>
                            {item.Degree}
                          </h3>
                          <div className='flex flex-col items-center lg:items-start gap-1'>
                            <div className='flex items-center gap-3'>
                              <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                              <p className='text-white/60'>
                                {item.institution}
                              </p>
                            </div>
                            {item.location && (
                              <p className='text-white/40 text-sm'>
                                {item.location}
                              </p>
                            )}
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value='skills' className='w-full h-full'>
              <div className='flex flex-col gap-[30px]'>
                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                  <h3 className='text-4xl font-bold'>{skills.title}</h3>
                  <p className='max-w-[600px] text-white/60 xl:mx-0'>
                    {skills.description}
                  </p>
                </div>
                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                  {skills.items.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group hover:bg-[#2a2a31] transition-colors duration-300'>
                              <div className='text-6xl group-hover:text-accent transition-all duration-300'>
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className='capitalize'>{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* About me */}
            <TabsContent
              value='about'
              className='w-full text-center xl:text-left'
            >
              <div className='flex flex-col gap-[30px]'>
                <h3 className='text-4xl font-bold'>{about.title}</h3>
                <p className='text-white/60 max-w-[600px] mx-auto xl:mx-0'>
                  {about.description}
                </p>
                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className='flex items-center justify-center xl:justify-start gap-4'
                      >
                        <span className='text-white/60'>{item.fieldName}:</span>
                        <span className='text-xl'>{item.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume
