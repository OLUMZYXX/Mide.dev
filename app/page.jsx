'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Socials from '@/components/Socials'
import Stats from '@/components/Stats'
import { Button } from '@/components/ui/button'
import {
  FiDownload,
  FiGithub,
  FiExternalLink,
  FiStar,
  FiGitBranch,
  FiCode,
  FiCalendar,
  FiTrendingUp,
  FiActivity,
  FiZap,
} from 'react-icons/fi'

const Home = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [commits, setCommits] = useState([])
  const [commitLoading, setCommitLoading] = useState(true)

  // Fetch GitHub repositories and commits
  useEffect(() => {
    const fetchProjectsAndCommits = async () => {
      try {
        const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN
        const username = 'OLUMZYXX'
        // Fetch repositories
        const reposResponse = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        const reposData = await reposResponse.json()
        const filteredProjects = reposData.filter(
          (repo) => !repo.fork && repo.name !== username
        )
        setProjects(filteredProjects)
        setLoading(false)

        // Fetch recent commits from multiple repos
        const commitPromises = filteredProjects
          .slice(0, 3)
          .map(async (repo) => {
            try {
              const commitsResponse = await fetch(
                `https://api.github.com/repos/${username}/${repo.name}/commits?per_page=3`,
                {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                }
              )
              const commitsData = await commitsResponse.json()
              return commitsData.map((commit) => ({
                ...commit,
                repoName: repo.name,
                repoLanguage: repo.language,
                repoUrl: repo.html_url,
              }))
            } catch (error) {
              console.error(`Error fetching commits for ${repo.name}:`, error)
              return []
            }
          })

        const allCommits = await Promise.all(commitPromises)
        const flattenedCommits = allCommits
          .flat()
          .sort(
            (a, b) =>
              new Date(b.commit.author.date) - new Date(a.commit.author.date)
          )

        setCommits(flattenedCommits.slice(0, 9))
        setCommitLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error)
        setLoading(false)
        setCommitLoading(false)
      }
    }

    fetchProjectsAndCommits()

    // Auto-refresh every 5 minutes
    const interval = setInterval(fetchProjectsAndCommits, 5 * 60 * 1000)
    return () => clearInterval(interval)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  }

  return (
    <section className='min-h-screen bg-primary relative overflow-hidden'>
      {/* Animated Background Elements */}
      <div className='absolute inset-0'>
        {/* Gradient Orbs */}
        <div className='absolute top-0 -left-4 w-96 h-96 bg-gradient-to-r from-accent/20 to-accent/5 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob'></div>
        <div className='absolute top-0 -right-4 w-96 h-96 bg-gradient-to-l from-accent/10 to-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000'></div>
        <div className='absolute -bottom-8 left-20 w-96 h-96 bg-gradient-to-r from-accent/15 to-accent/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000'></div>

        {/* Grid Pattern */}
        <div className='absolute inset-0 bg-[linear-gradient(rgba(0,255,153,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,153,0.03)_1px,transparent_1px)] bg-[size:100px_100px]'></div>

        {/* Floating Code Snippets */}
        <div className='absolute top-20 left-10 text-accent/20 font-primary text-sm rotate-12 select-none'>
          {'{ "code": "beautiful" }'}
        </div>
        <div className='absolute top-40 right-20 text-accent/20 font-primary text-sm -rotate-12 select-none'>
          console.log("hello world");
        </div>
        <div className='absolute bottom-40 left-32 text-accent/20 font-primary text-sm rotate-6 select-none'>
          const dev = "amazing";
        </div>
      </div>

      <div className='container mx-auto px-6 relative z-10'>
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className='flex flex-col xl:flex-row items-start justify-between gap-12 pt-8 pb-16 xl:pt-16 xl:pb-24'
        >
          {/* Left Content */}
          <div className='flex-1 max-w-2xl'>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className='inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/20 rounded-full text-accent font-primary tracking-wider text-sm mb-6 backdrop-blur-sm'
            >
              <FiZap className='animate-pulse' />
              Software Developer
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className='text-4xl xl:text-6xl font-bold leading-tight mb-6 font-primary'
            >
              Hello I'm <br />
              <span className='bg-gradient-to-r from-accent via-accent to-accent/70 bg-clip-text text-transparent animate-pulse'>
                Mide Akinwumi
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className='text-lg text-white/70 leading-relaxed mb-10 max-w-[500px] font-primary'
            >
              I excel at crafting beautiful and elegant digital experiences for
              brands and companies. I'm proficient in various programming
              languages and technologies.
            </motion.p>

            {/* Enhanced CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className='space-y-8'
            >
              {/* Download CV Button */}
              <div className='flex flex-col sm:flex-row gap-4'>
                <Button
                  size='lg'
                  className='group bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent text-primary hover:text-primary border-0 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-accent/25 font-primary'
                >
                  <a
                    href='/assets/resume/resume.docx'
                    className='flex items-center gap-3'
                  >
                    <FiDownload className='text-xl group-hover:animate-bounce' />
                    Download CV
                  </a>
                </Button>

                <Button
                  variant='outline'
                  size='lg'
                  className='group border-2 border-accent/30 text-accent hover:bg-gradient-to-r hover:from-accent/10 hover:to-accent/5 hover:text-accent px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 hover:border-accent backdrop-blur-sm font-primary'
                  onClick={() =>
                    window.open(
                      'https://github.com/YOUR_GITHUB_USERNAME',
                      '_blank'
                    )
                  }
                >
                  <FiGithub className='mr-2 text-xl group-hover:rotate-12 transition-transform' />
                  View GitHub
                </Button>
              </div>

              {/* Enhanced Socials */}
              <div className='space-y-4'>
                <h3 className='text-white/80 font-primary text-sm uppercase tracking-wider flex items-center gap-2'>
                  <div className='w-8 h-[1px] bg-gradient-to-r from-accent to-transparent'></div>
                  Connect with me
                </h3>
                <Socials
                  containerStyle='flex gap-4'
                  iconStyles='w-14 h-14 bg-gradient-to-br from-white/10 to-white/5 border-2 border-white/10 rounded-2xl flex justify-center items-center text-accent text-xl hover:bg-gradient-to-br hover:from-accent/20 hover:to-accent/10 hover:text-white hover:border-accent transition-all duration-300 hover:scale-110 hover:-translate-y-2 backdrop-blur-sm shadow-lg'
                />
              </div>
            </motion.div>
          </div>

          {/* Enhanced Projects Dashboard */}
          <div className='flex-1 max-w-2xl w-full'>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className='bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl'
            >
              <h3 className='text-2xl font-bold text-white font-primary mb-8'>
                My Latest Committed Projects
              </h3>
              {commitLoading
                ? Array.from({ length: 3 }).map((_, i) => (
                    <div
                      key={i}
                      className='animate-pulse bg-white/5 rounded-2xl p-6 border border-white/5 mb-4'
                    >
                      <div className='h-5 bg-white/10 rounded w-32 mb-2'></div>
                      <div className='h-3 bg-white/5 rounded w-48 mb-2'></div>
                      <div className='h-4 bg-white/5 rounded w-full'></div>
                    </div>
                  ))
                : commits.slice(0, 3).map((commit, index) => (
                    <motion.div
                      key={commit.sha}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                      className='bg-gradient-to-r from-white/5 to-white/10 rounded-2xl p-6 border border-white/10 mb-4 hover:from-white/10 hover:to-white/15 hover:border-accent/30 transition-all duration-300 hover:scale-[1.02] cursor-pointer'
                      onClick={() => window.open(commit.repoUrl, '_blank')}
                    >
                      <h4 className='text-xl font-semibold text-white mb-2'>
                        {commit.repoName}
                      </h4>
                      <p className='text-white/60 text-sm mb-2'>
                        {commit.commit.message.split('\n')[0]}
                      </p>
                      <div className='flex items-center gap-3 text-xs text-white/40'>
                        <span>
                          Committed:{' '}
                          {new Date(
                            commit.commit.author.date
                          ).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </span>
                        {commit.repoLanguage && (
                          <span className='px-2 py-1 bg-accent/20 text-accent rounded font-primary'>
                            {commit.repoLanguage}
                          </span>
                        )}
                      </div>
                    </motion.div>
                  ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      <Stats />

      {/* Add blob animation styles */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  )
}

export default Home
