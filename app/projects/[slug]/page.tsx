import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { projects } from '@/data/projects'

// Mark the component as async
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>  // Changed: params is now a Promise
}) {
  // Await the params
  const { slug } = await params
  
  // Now use slug normally
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  const getStatusColor = () => {
    switch (project.status) {
      case 'ongoing':
        return 'bg-primary-500'
      case 'wip':
        return 'bg-yellow-500'
      default:
        return 'bg-green-500'
    }
  }

  const getStatusText = () => {
    switch (project.status) {
      case 'ongoing':
        return 'Ongoing Development'
      case 'wip':
        return 'Work in Progress'
      default:
        return 'Completed'
    }
  }

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 py-24">
      <div className="container mx-auto px-6">
        {/* Back Button */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 mb-12 group"
        >
          <i className="fas fa-arrow-left transition-transform group-hover:-translate-x-1"></i>
          <span className="font-semibold">Back to Projects</span>
        </Link>

        {/* Project Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6 flex-wrap">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white font-montserrat">
              {project.title}
            </h1>
            {getStatusText() && (
              <span className={`${getStatusColor()} text-white px-4 py-2 rounded-full text-sm font-semibold`}>
                {getStatusText()}
              </span>
            )}
          </div>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            {project.description}
          </p>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-5 py-2 rounded-full font-medium text-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-2xl hover:-translate-y-1 transition-all"
            >
              <span>Visit Live Site</span>
              <i className="fas fa-external-link-alt"></i>
            </Link>
            {project.githubUrl !== '#' && (
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-lg font-semibold hover:border-primary-500 hover:text-primary-500 transition-all"
              >
                <i className="fab fa-github"></i>
                <span>View Code</span>
              </Link>
            )}
          </div>
        </div>

        {/* ISOMETRIC MOCKUP DISPLAY */}
        <div className="max-w-7xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12 font-montserrat">
            Responsive Design Showcase
          </h2>

          {/* Isometric Grid Layout */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Desktop/Laptop */}
            <div className="relative group">
              <div className="bg-gray-900 rounded-2xl p-4 shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <div className="flex gap-2 mb-3">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="bg-white rounded-lg overflow-hidden">
                  <Image
                    src={project.images.desktop}
                    alt={`${project.title} - Desktop view`}
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="h-6 bg-gray-700 rounded-b-2xl"></div>
              <div className="h-2 bg-gray-600 rounded-b-3xl mx-auto w-3/4"></div>
            </div>

            {/* Tablet */}
            {project.images.tablet && (
              <div className="relative group max-w-md mx-auto">
                <div className="bg-gray-900 rounded-3xl p-4 shadow-2xl transform hover:scale-105 transition-transform duration-500">
                  <div className="bg-white rounded-2xl overflow-hidden">
                    <Image
                      src={project.images.tablet}
                      alt={`${project.title} - Tablet view`}
                      width={600}
                      height={800}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Mobile */}
            {project.images.mobile && (
              <div className="relative group max-w-xs mx-auto md:col-span-2">
                <div className="bg-gray-900 rounded-[3rem] p-3 shadow-2xl transform hover:scale-105 transition-transform duration-500">
                  <div className="bg-white rounded-[2.5rem] overflow-hidden">
                    <div className="h-6 bg-gray-100 flex items-center justify-center">
                      <div className="w-20 h-1 bg-gray-300 rounded-full"></div>
                    </div>
                    <Image
                      src={project.images.mobile}
                      alt={`${project.title} - Mobile view`}
                      width={300}
                      height={600}
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="h-2 mt-2 bg-gray-800 rounded-full w-16 mx-auto"></div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Detailed Views Section */}
        <div className="max-w-7xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12 font-montserrat">
            Detailed Views
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Desktop View */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white">
                  <i className="fas fa-desktop text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Desktop</h3>
                  <p className="text-sm text-gray-500">1920px width</p>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <Image
                  src={project.images.desktop}
                  alt={`${project.title} - Desktop`}
                  width={600}
                  height={400}
                  className="w-full hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Tablet View */}
            {project.images.tablet && (
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white">
                    <i className="fas fa-tablet-alt text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Tablet</h3>
                    <p className="text-sm text-gray-500">768px width</p>
                  </div>
                </div>
                <div className="rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={project.images.tablet}
                    alt={`${project.title} - Tablet`}
                    width={400}
                    height={600}
                    className="w-full hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            )}

            {/* Mobile View */}
            {project.images.mobile && (
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white">
                    <i className="fas fa-mobile-alt text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Mobile</h3>
                    <p className="text-sm text-gray-500">375px width</p>
                  </div>
                </div>
                <div className="rounded-lg overflow-hidden shadow-md max-w-xs mx-auto">
                  <Image
                    src={project.images.mobile}
                    alt={`${project.title} - Mobile`}
                    width={300}
                    height={600}
                    className="w-full hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Other Projects */}
        <div className="mt-24">
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12 font-montserrat">
            More Projects
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {projects
              .filter((p) => p.slug !== slug)
              .slice(0, 3)
              .map((otherProject) => (
                <Link
                  key={otherProject.id}
                  href={`/projects/${otherProject.slug}`}
                  className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={otherProject.images.desktop}
                      alt={otherProject.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-2">
                      {otherProject.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2">
                      {otherProject.description}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </main>
  )
}

// Generate static paths
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}