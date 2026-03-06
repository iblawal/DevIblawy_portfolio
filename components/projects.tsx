'use client'
import { useEffect } from 'react'
import ProjectCard from './ProjectCard'
import { projects } from '@/data/projects'

export default function Projects() {
  useEffect(() => {
    const section = document.getElementById('projects')
    if (!section) return
  }, [])

  return (
    <section id="projects" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">

        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-gray-600 dark:text-white mb-4">
            My Projects
          </h3>
          <p className="text-gray-400 dark:text-gray-200 text-lg max-w-1xl mx-auto">
            Each project reflects my ability to combine design, logic and user focus.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://github.com/iblawal"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-12 py-4 font-semibold hover:-translate-y-1 transition-all"
          >
            Visit GitHub for More
          </a>
        </div>
      </div>
    </section>
  )
}
