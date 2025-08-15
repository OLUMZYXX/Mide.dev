
import { NextResponse } from 'next/server'

const GITHUB_USERNAME = 'OLUMZYXX'
const GITHUB_API_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=12`

export async function GET() {
  try {
    const res = await fetch(GITHUB_API_URL)
    if (!res.ok) throw new Error('Failed to fetch GitHub repos')
    const repos = await res.json()
    // Map to portfolio format
    const projects = repos.map((repo) => ({
      num: repo.id,
      title: repo.name,
      description: repo.description || 'No description provided.',
      category: repo.topics?.join(', ') || 'GitHub Project',
      image: '/assets/work/thumb1.png', // Placeholder, GitHub API does not provide images
      live: repo.homepage || repo.html_url,
      github: repo.html_url,
      stack: [{ name: 'GitHub' }],
      features: [
        'Open Source',
        'Latest Update: ' + new Date(repo.updated_at).toLocaleDateString(),
      ],
    }))
    return NextResponse.json(projects)
  } catch (error) {
    return NextResponse.json([], { status: 500 })
  }
}
