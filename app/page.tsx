'use client'
import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Stack from '@/components/Stack'
import Projects from '@/components/projects'
import Resume from '@/components/Resume'
import Contact from '@/components/contact'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import Preloader from '@/components/PreLoader'
import AIChatbot from '@/components/AIChatbot'
import DarkModeToggle from '@/components/DarkModeToggle'
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaFigma, FaPython } from 'react-icons/fa'
import { SiJavascript, SiTypescript, SiNextdotjs, SiExpress, SiDjango } from 'react-icons/si'

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = document.querySelectorAll('.section-reveal, .fade-in-up, .reveal-left, .reveal-right, .reveal-scale')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const techIcons = [
    { name: 'HTML5', Icon: FaHtml5, color: '#E34F26' },
    { name: 'CSS3', Icon: FaCss3Alt, color: '#1572B6' },
    { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
    { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
    { name: 'React', Icon: FaReact, color: '#61DAFB' },
    { name: 'Next.js', Icon: SiNextdotjs, color: '#000000' },
    { name: 'Node.js', Icon: FaNodeJs, color: '#339933' },
    { name: 'Express.js', Icon: SiExpress, color: '#000000' },
    { name:  'Python', Icon: FaPython, color: '#3776AB'},
    { name:  'Django', Icon: SiDjango, color: '#092E20' },
    { name: 'Figma', Icon: FaFigma, color: '#F24E1E' },
  ]

  return (
    <>
      <Preloader />
      <Header />
      <main>
        <Hero />
        
        {/* About Section */}
        <section id="about" className="py-24 bg-white dark:bg-gray-900 section-reveal">
          <div className="container">
            <div className="section-header text-center mb-16">
              <h3 className="text-3xl font-bold text-gray-700 dark:text-white mb-4 font-montserrat">
                About Me
              </h3>
              <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto mb-6 relative">
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-primary-500 rounded-full shadow-lg shadow-primary-500/50"></span>
              </div>
            </div>

            <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 items-center">
              <div className="reveal-left">
                <div className="relative">
                  <div className="absolute -top-5 -left-5 right-5 bottom-5 border-3 border-primary-500 rounded-3xl -z-10"></div>
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                    <Image
                      src="/iblawal-img.jpg"
                      alt="Ibrahim Lawal Mayowa"
                      width={300}
                      height={300}
                      className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                      <p className="text-white text-xl font-semibold">Software Developer</p>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-5 -right-5 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-4 rounded-2xl shadow-xl shadow-primary-500/40 animate-[floatBadge_3s_ease-in-out_infinite] z-10">
                    <div className="flex items-center gap-3">
                      <i className="fas fa-code text-2xl"></i>
                      <div>
                        <p className="font-bold text-lg">2+</p>
                        <p className="text-sm opacity-90">Years</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="reveal-right max-w-2xl">
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                  I&apos;m <strong className="text-primary-600 dark:text-primary-400 font-semibold">Lawal Ibrahim Mayowa</strong>, a Software Developer with over 2+ years of experience building scalable and responsive user interfaces. I have solid backend knowledge, including authentication, authorization, API development, and database management, and I&apos;m proficient with Git and GitHub.
                </p>
                
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                  Beyond development, I&apos;m also a <strong className="text-primary-600 dark:text-primary-400 font-semibold">Coding Instructor</strong> experienced in designing structured curricula and delivering engaging training programs. I&apos;ve trained students through both physical classes and virtual bootcamps, helping beginners and intermediate learners build real-world projects and strong technical foundations.
                </p>
                
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
                  I&apos;m passionate about creating user-friendly solutions, simplifying complex concepts, and contributing my skills to a global team.
                </p>

                <div className="bg-gradient-to-br from-primary-50 to-white dark:from-gray-800 dark:to-gray-900 border-2 border-primary-200 dark:border-primary-800 rounded-2xl p-6 mb-8">
                  <h4 className="text-lg font-semibold text-primary-800 dark:text-primary-400 mb-4">
                    Core Technologies
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {techIcons.map((tech, idx) => (
                      <div
                        key={idx}
                        className="w-14 h-14 bg-white dark:bg-gray-800 rounded-xl shadow-lg flex items-center justify-center hover:scale-110 hover:shadow-xl transition-all cursor-pointer group"
                        title={tech.name}
                      >
                        <tech.Icon 
                          size={28} 
                          className="transition-transform group-hover:rotate-12"
                          style={{ 
                            color: tech.color,
                            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
                          }} 
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href="#contact"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-10 py-4 font-semibold transition-all hover:shadow-2xl hover:-translate-y-1 group"
                >
                  <span>Let&apos;s Collaborate</span>
                  <i className="fas fa-arrow-right transition-transform group-hover:translate-x-2"></i>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Services />
        <Stack />
        <Projects />
        <Resume />
        <Contact />
      </main>
      
      <Footer />
      <ScrollToTop />
      <AIChatbot />
      <DarkModeToggle />
    </>
  )
}