'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Project } from '@/types/project.type'

interface ProjectCardProps {
  project: Project
  index: number
}

type DeviceView = 'desktop' | 'tablet' | 'mobile'

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [activeView, setActiveView] = useState<DeviceView>('desktop')
  const [imageLoaded, setImageLoaded] = useState(false)

  const getStatusColor = () => {
    switch (project.status) {
      case 'ongoing':
        return 'bg-gradient-to-r from-primary-500 to-primary-600'
      case 'wip':
        return 'bg-gradient-to-r from-yellow-500 to-orange-500'
      default:
        return 'bg-gradient-to-r from-primary-500 to-primary-600'
    }
  }

  const getStatusText = () => {
    switch (project.status) {
      case 'ongoing':
        return 'Ongoing'
      case 'wip':
        return 'WIP'
      default:
        return null
    }
  }

  const currentImage = project.images[activeView] || project.images.desktop

  return (
    <article 
      className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 hover:border-primary-500 group"
      style={{
        opacity: 0,
        transform: 'translateY(30px)',
        animation: `fadeInUp 0.8s ease-out ${index * 0.15}s forwards`,
      }}
    >
      {/* Image Section*/}
      <div className="relative h-64 bg-gray-50 dark:bg-gray-900 overflow-hidden">
        {/* Device View Switcher */}
        <div className="absolute top-4 right-4 z-20 flex gap-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg p-1.5 shadow-lg">
          <button
            onClick={() => setActiveView('desktop')}
            className={`px-3 py-2 rounded-md transition-all ${
              activeView === 'desktop'
                ? 'bg-primary-500 text-white shadow-md'
                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
            title="Desktop View"
          >
            <i className="fas fa-desktop text-sm"></i>
          </button>
          {project.images.tablet && (
            <button
              onClick={() => setActiveView('tablet')}
              className={`px-3 py-2 rounded-md transition-all ${
                activeView === 'tablet'
                  ? 'bg-primary-500 text-white shadow-md'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
              title="Tablet View"
            >
              <i className="fas fa-tablet-alt text-sm"></i>
            </button>
          )}
          {project.images.mobile && (
            <button
              onClick={() => setActiveView('mobile')}
              className={`px-3 py-2 rounded-md transition-all ${
                activeView === 'mobile'
                  ? 'bg-primary-500 text-white shadow-md'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
              title="Mobile View"
            >
              <i className="fas fa-mobile-alt text-sm"></i>
            </button>
          )}
        </div>

        {/* Status Badge */}
        {getStatusText() && (
          <div className="absolute top-4 left-4 z-20">
            <span className={`${getStatusColor()} text-white px-4 py-2 rounded-full text-xs font-semibold shadow-lg`}>
              {getStatusText()}
            </span>
          </div>
        )}

        {/* Project Image */}
        <div className="relative w-full h-full">
          <Image
            src={currentImage}
            alt={`${project.title} - ${activeView} view`}
            fill
            className={`object-cover transition-all duration-700 ${
              imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            } group-hover:scale-110`}
            onLoad={() => setImageLoaded(true)}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-800/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-6">
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech, idx) => (
              <span
                key={idx}
                className="bg-white/90 text-primary-800 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h4 className="text-xl font-semibold text-primary-800 dark:text-primary-400 mb-3 group-hover:text-primary-500 transition-colors">
          {project.title}
        </h4>
        
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Technology Pills */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="text-xs text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30 px-3 py-1 rounded-full font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="flex-1 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 flex items-center justify-center gap-2 font-medium text-sm transition-all hover:shadow-xl hover:-translate-y-1"
          >
            <span>Visit Site</span>
            <i className="fas fa-external-link-alt text-xs"></i>
          </Link>
          
          <Link
            href={`/projects/${project.slug}`}
            className="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-primary-500 hover:text-primary-500 flex items-center gap-2 font-medium text-sm transition-all"
          >
            <span>Details</span>
            <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </article>
  )
}