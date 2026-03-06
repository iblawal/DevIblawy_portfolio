'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { 
  FaReact, 
  FaNodeJs, 
  FaPython,
  FaDatabase,
  FaChalkboardTeacher,
  FaCode,
  FaPencilRuler,
  FaMobileAlt,
  FaWordpress,
  FaServer,
  FaRocket
} from 'react-icons/fa'
import { 
  SiNextdotjs,
  SiDjango,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiExpress
} from 'react-icons/si'
import { IconType } from 'react-icons'

interface ServiceItem {
  icon: IconType
  title: string
  category: 'Frontend' | 'Backend' | 'Teaching' | 'Other'
  description: string
  features: string[]
  color: string
  gradient: string
}

const services: ServiceItem[] = [
  {
    icon: FaReact,
    title: 'Frontend Development',
    category: 'Frontend',
    description: 'Modern, responsive user interfaces built with React, Next.js, TypeScript, and Tailwind CSS. Fast, accessible, and SEO-optimized.',
    features: ['React & Next.js','Javascript', 'TypeScript', 'Responsive Design', 'Performance Optimization'],
    color: '#61DAFB',
    gradient: 'from-cyan-300 to-blue-400',
  },
  {
    icon: FaServer,
    title: 'Backend Development',
    category: 'Backend',
    description: 'Scalable server-side applications with Node.js, Express, Python, Django, RESTful APIs, authentication, and database design.',
    features: ['Node.js & Express', 'REST APIs', 'Authentication', 'Database Design'],
    color: '#339933',
    gradient: 'from-green-400 to-emerald-500',
  },
  {
    icon: FaDatabase,
    title: 'Database Management',
    category: 'Backend',
    description: 'Database architecture, optimization, and integration with MongoDB, PostgreSQL, and data modeling.',
    features: ['MongoDB', 'PostgreSQL', 'Data Modeling', 'Query Optimization'],
    color: '#336791',
    gradient: 'from-blue-500 to-indigo-600',
  },
  {
    icon: FaPencilRuler,
    title: 'UI/UX Implementation',
    category: 'Frontend',
    description: 'Transform Figma designs into pixel-perfect, interactive interfaces with smooth animations and micro-interactions.',
    features: ['Figma to Code', 'Pixel Perfect', 'Animations', 'Accessibility'],
    color: '#F24E1E',
    gradient: 'from-orange-500 to-red-600',
  },
  {
    icon: FaChalkboardTeacher,
    title: 'Technical Training & Mentorship',
    category: 'Teaching',
    description: 'Structured coding bootcamps, curriculum development, and one-on-one mentorship for aspiring developers.',
    features: ['Bootcamp Delivery', 'Curriculum Design', 'Code Review', 'Career Guidance'],
    color: '#10b981',
    gradient: 'from-emerald-500 to-green-600',
  },
  {
    icon: FaWordpress,
    title: 'WordPress Development',
    category: 'Other',
    description: 'Custom WordPress themes, plugins, and website customization for content-rich platforms.',
    features: ['Custom Themes', 'Plugin Development', 'WP Optimization', 'Content Management'],
    color: '#21759B',
    gradient: 'from-blue-500 to-cyan-600',
  },
  {
    icon: FaRocket,
    title: 'Full-Stack Projects',
    category: 'Backend',
    description: 'Complete web applications from frontend to backend, deployment, and maintenance.',
    features: ['End-to-End Development', 'CI/CD Setup', 'Cloud Deployment', 'Maintenance'],
    color: '#F59E0B',
    gradient: 'from-amber-500 to-orange-600',
  },
  {
    icon: FaCode,
    title: 'Code Instruction & Workshops',
    category: 'Teaching',
    description: 'Interactive workshops, live coding sessions, and practical project-based learning for students.',
    features: ['Live Coding', 'Workshops', 'Project-Based Learning', 'Best Practices'],
    color: '#EC4899',
    gradient: 'from-pink-500 to-rose-600',
  },
]

const techStack = [
  { Icon: FaReact, name: 'React', color: '#61DAFB' },
  { Icon: SiNextdotjs, name: 'Next.js', color: '#000000' },
  { Icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
  { Icon: FaNodeJs, name: 'Node.js', color: '#339933' },
  { name:  'Python', Icon: FaPython, color: '#3776AB'},
  { name:  'Django', Icon: SiDjango, color: '#092E20' },
  { Icon: SiExpress, name: 'Express', color: '#000000' },
  { Icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
  { Icon: SiPostgresql, name: 'PostgreSQL', color: '#336791' },
  { Icon: FaWordpress, name: 'WordPress', color: '#21759B' },
]

export default function Services() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeFilter, setActiveFilter] = useState<'All' | 'Frontend' | 'Backend' | 'Teaching' | 'Other'>('All')
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const filteredServices = activeFilter === 'All' 
    ? services 
    : services.filter(s => s.category === activeFilter)

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-24 bg-white dark:bg-gray-900 overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className={`text-center mb-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block bg-primary-500/10 text-primary-600 dark:text-primary-400 text-sm font-semibold px-4 py-2 rounded-full mb-4 uppercase tracking-widest">
            What I Offer
          </span>
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 font-montserrat">
            My Services
          </h3>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto mb-6 relative">
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-primary-500 rounded-full shadow-lg shadow-primary-500/50"></span>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-xl max-w-2xl mx-auto leading-relaxed">
            Full-stack development, technical training, and everything in between
          </p>
        </div>

        <div className={`grid lg:grid-cols-2 gap-16 items-center mb-24 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div>
            <div className="inline-flex items-center gap-3 bg-primary-500/10 rounded-2xl px-5 py-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
                <FaCode className="text-white text-lg" />
              </div>
              <span className="text-primary-600 dark:text-primary-400 font-semibold">Full-Stack Developer & Instructor</span>
            </div>

            <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 font-montserrat leading-tight">
              Building Digital Solutions &
              <span className="text-primary-500"> Training Developers</span>
            </h4>

            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
              I build scalable, responsive web applications with strong frontend and backend foundations. From design implementation to database architecture, I deliver end-to-end digital solutions.
            </p>

            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
              As a coding instructor, I&apos;ve trained <strong className="text-primary-600 dark:text-primary-400">100+ students</strong> through structured bootcamps and mentorship programs, helping them build real-world projects and launch their tech careers.
            </p>

          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary-500/20 to-primary-600/5 rounded-3xl blur-2xl"></div>
            <div className="relative bg-gray-50 dark:bg-gray-800 rounded-3xl p-4 border border-gray-100 dark:border-gray-700">
              <Image
                src="/programming-img.png"
                alt="Software Developer"
                width={500}
                height={300}
                className="rounded-2xl w-full hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 rounded-2xl px-5 py-3 shadow-xl border border-gray-100 dark:border-gray-700 flex items-center gap-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-gray-800 dark:text-white font-semibold text-sm">Available for hire</span>
              </div>
              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl px-5 py-3 shadow-xl">
                <span className="text-white font-semibold text-sm">Full-Stack Developer</span>
              </div>
            </div>
          </div>
        </div>

        <div className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {(['All', 'Frontend', 'Backend', 'Teaching', 'Other'] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/30'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {filteredServices.map((service, index) => (
            <div
              key={index}
              className="relative bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 dark:border-gray-700 group overflow-hidden"
              style={{
                opacity: 0,
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`,
              }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white text-1xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg relative z-10`}
              >
                <service.icon />
              </div>

              <div className="relative z-10">
                <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3"
                  style={{ 
                    backgroundColor: `${service.color}15`,
                    color: service.color 
                  }}
                >
                  {service.category}
                </span>

                <h5 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                  {service.title}
                </h5>

                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, fidx) => (
                    <span
                      key={fidx}
                      className="text-xs px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div
                className={`absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-gradient-to-r ${service.gradient} transition-all duration-500 rounded-b-3xl`}
              ></div>
            </div>
          ))}
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
    </section>
  )
}