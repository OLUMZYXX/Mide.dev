'use client'
import CountUp from 'react-countup'

import { useEffect, useState } from 'react'

const Stats = ({ startYear = 2022 }) => {
  const [totalCommits, setTotalCommits] = useState(0)
  const [completedProjects, setCompletedProjects] = useState(0)
  const currentYear = new Date().getFullYear()
  const yearsOfExperience = currentYear - startYear

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN
        const username = 'OLUMZYXX'
        // Get all repos
        const reposResponse = await fetch(
          `https://api.github.com/users/${username}/repos?per_page=100`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        const repos = await reposResponse.json()
        // Only count non-forked repos as completed projects
        const userRepos = repos.filter((repo) => !repo.fork)
        setCompletedProjects(userRepos.length)
        // Get commit count for each repo
        let commitCount = 0
        for (const repo of userRepos) {
          const commitsResponse = await fetch(
            `https://api.github.com/repos/${username}/${repo.name}/commits?per_page=1`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          )
          const linkHeader = commitsResponse.headers.get('Link')
          if (linkHeader) {
            // Parse last page number from Link header
            const match = linkHeader.match(/&page=(\d+)>; rel="last"/)
            if (match) {
              commitCount += parseInt(match[1], 10)
            } else {
              commitCount += 1
            }
          } else {
            // Only one commit
            const commits = await commitsResponse.json()
            if (Array.isArray(commits)) commitCount += commits.length
          }
        }
        setTotalCommits(commitCount)
      } catch (error) {
        setTotalCommits(0)
        setCompletedProjects(0)
      }
    }
    fetchStats()
  }, [])

  const stats = [
    {
      num: yearsOfExperience,
      text: 'Years of Experience',
    },
    {
      num: completedProjects,
      text: 'Projects Completed',
    },
    {
      num: 5,
      text: 'Technologies Mastered',
    },
    {
      num: totalCommits,
      text: 'Code Commits',
    },
  ]
  return (
    <section className='pt-4 pb-12 xl:pt-0 xl:pb-0'>
      <div className='container mx-auto'>
        <div className='flex flex-wrap gap-6 max-w-[80vw mx-auto xl:max-w-none]'>
          {stats.map((item, index) => {
            return (
              <div
                className=' flex-1 flex gap-4 items-center justify-center xl:justify-start'
                key={index}
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className='text-4xl xl:text-6xl font-extrabold'
                />
                <p
                  className={`${
                    item.text.length < 15 ? 'max-w-[100px]' : 'max-w-[150px]'
                  }leading-snug text-white/80`}
                >
                  {item.text}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Stats
