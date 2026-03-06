'use client'

import { useEffect, useRef, useState } from 'react'
import { IconType } from 'react-icons'
import { 
  FaReact, 
  FaHtml5, 
  FaCss3Alt, 
  FaWordpress, 
  FaFigma, 
  FaPython,
  FaGitAlt, 
  FaNodeJs, 
  FaGithub 
} from 'react-icons/fa'
import { 
  SiJavascript, 
  SiTypescript, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiExpress, 
  SiDjango,
  SiMongodb, 
  SiPostgresql, 
  SiVercel, 
  SiNetlify, 
} from 'react-icons/si'
import { 
  MdDevices 
} from 'react-icons/md'
import {
  HiServerStack,
  HiLightBulb,
  HiUsers,
  HiChatBubbleLeftRight,
  HiArrowPath,
  HiStar,
  HiAcademicCap,
  HiClock,
  HiBriefcase,
  HiCodeBracket,
  HiUserGroup,
  HiPaintBrush
} from 'react-icons/hi2'

interface StatItem {
  number: string
  label: string
  Icon: IconType
  color: string
}

interface SkillItem {
  name: string
  Icon: IconType
  color: string
}

const stats: StatItem[] = [
  { number: '15+', label: 'Technologies', Icon: HiCodeBracket, color: '#10b981' },
  { number: '3+', label: 'Years Experience', Icon: HiBriefcase, color: '#3178C6' },
  { number: '7+', label: 'Projects Built', Icon: HiServerStack, color: '#F59E0B' },
  { number: '100+', label: 'Students Trained', Icon: HiUserGroup, color: '#EC4899' },
  { number: '3', label: 'Current Roles', Icon: HiStar, color: '#F05032' },
  { number: '24h', label: 'Response Time', Icon: HiClock, color: '#06B6D4' },
]

const frontendSkills: SkillItem[] = [
  { name: 'React', Icon: FaReact, color: '#61DAFB' },
  { name: 'Next.js', Icon: SiNextdotjs, color: '#000000' },
  { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
  { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
  { name: 'HTML5', Icon: FaHtml5, color: '#E34F26' },
  { name: 'CSS3', Icon: FaCss3Alt, color: '#1572B6' },
  { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'WordPress', Icon: FaWordpress, color: '#21759B' },
  { name: 'Figma', Icon: FaFigma, color: '#F24E1E' },
  { name: 'Git', Icon: FaGitAlt, color: '#F05032' },
]

const backendSkills: SkillItem[] = [
  { name: 'Node.js', Icon: FaNodeJs, color: '#339933' },
  { name: 'Express.js', Icon: SiExpress, color: '#000000' },
  { name: 'Python', Icon: FaPython, color: '#3776AB'},
   { name: 'Django', Icon: SiDjango, color: '#092E20' },
  { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
  { name: 'PostgreSQL', Icon: SiPostgresql, color: '#336791' },
  { name: 'REST API', Icon: HiServerStack, color: '#10b981' },
  { name: 'GitHub', Icon: FaGithub, color: '#181717' },
  { name: 'Vercel', Icon: SiVercel, color: '#000000' },
  { name: 'Netlify', Icon: SiNetlify, color: '#00C7B7' },
  { name: 'Responsive', Icon: MdDevices, color: '#10b981' },
]

const softSkills: SkillItem[] = [
  { name: 'Communication', Icon: HiChatBubbleLeftRight, color: '#10b981' },
  { name: 'Teamwork', Icon: HiUsers, color: '#10b981' },
  { name: 'Problem Solving', Icon: HiLightBulb, color: '#F59E0B' },
  { name: 'Adaptability', Icon: HiArrowPath, color: '#10b981' },
  { name: 'Leadership', Icon: HiStar, color: '#F59E0B' },
  { name: 'Mentoring', Icon: HiAcademicCap, color: '#10b981' },
  { name: 'Creativity', Icon: HiPaintBrush, color: '#EC4899' },
  { name: 'Time Management', Icon: HiClock, color: '#10b981' },
]

function MarqueeRow({ skills, direction = 'left', speed = 30 }: {
  skills: SkillItem[]
  direction?: 'left' | 'right'
  speed?: number
}) {
  const tripled = [...skills, ...skills, ...skills]

  return (
    <div className="relative overflow-hidden py-3">
      <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-gray-50 dark:from-gray-900 to-transparent pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-gray-50 dark:from-gray-900 to-transparent pointer-events-none"></div>
      <div
        className="flex gap-4 w-max"
        style={{ animation: `marquee-${direction} ${speed}s linear infinite` }}
      >
        {tripled.map((skill, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl px-5 py-3 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-default group flex-shrink-0"
          >
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
              style={{ backgroundColor: `${skill.color}20` }}
            >
              <skill.Icon 
                size={20} 
                style={{ color: skill.color }}
                className="transition-transform group-hover:rotate-12"
              />
            </div>
            <span className="text-gray-800 dark:text-gray-200 font-medium text-sm whitespace-nowrap">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Stack() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const tripleStats = [...stats, ...stats, ...stats]

  return (
    <section
      ref={sectionRef}
      id="stack"
      className="py-24 bg-gray-50 dark:bg-gray-900 overflow-hidden"
    >
      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
      `}</style>

      <div className="container mx-auto px-6">

        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 font-montserrat">
            My Tech Stack
          </h3>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto mb-6 relative">
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-primary-500 rounded-full shadow-lg shadow-primary-500/50"></span>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* GLIDING STATS ROW */}
        <div className={`transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative overflow-hidden py-4 mb-14">
            {/* Fades */}
            <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-gray-50 dark:from-gray-900 to-transparent pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-gray-50 dark:from-gray-900 to-transparent pointer-events-none"></div>

            <div
              className="flex gap-6 w-max"
              style={{ animation: 'marquee-left 18s linear infinite' }}
            >
              {tripleStats.map((stat, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl px-6 py-4 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-default group flex-shrink-0 min-w-[190px]"
                >
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: `${stat.color}20` }}
                  >
                    <stat.Icon 
                      size={24} 
                      style={{ color: stat.color }}
                      className="transition-transform group-hover:rotate-12"
                    />
                  </div>

                  {/* Number + Label */}
                  <div>
                    <div
                      className="text-2xl font-bold leading-none mb-1"
                      style={{ color: stat.color }}
                    >
                      {stat.number}
                    </div>
                    <div className="text-gray-600 dark:text-gray-400 text-xs font-medium whitespace-nowrap">
                      {stat.label}
                    </div>
                  </div>

                  {/* Dot separator */}
                  <div
                    className="w-2 h-2 rounded-full flex-shrink-0 opacity-30 ml-1"
                    style={{ backgroundColor: stat.color }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SKILL ROWS */}
        <div className={`space-y-4 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>

          {/* Frontend */}
          <div className="flex items-center gap-3 px-2 mb-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
              <HiCodeBracket className="text-white text-sm" />
            </div>
            <span className="text-gray-700 dark:text-gray-300 font-semibold text-sm uppercase tracking-wider">
              Frontend
            </span>
          </div>
          <MarqueeRow skills={frontendSkills} direction="left" speed={35} />

          {/* Backend */}
          <div className="flex items-center gap-3 px-2 mt-6 mb-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
              <HiServerStack className="text-white text-sm" />
            </div>
            <span className="text-gray-700 dark:text-gray-300 font-semibold text-sm uppercase tracking-wider">
              Backend & Tools
            </span>
          </div>
          <MarqueeRow skills={backendSkills} direction="right" speed={40} />

          {/* Soft Skills */}
          <div className="flex items-center gap-3 px-2 mt-6 mb-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
              <HiLightBulb className="text-white text-sm" />
            </div>
            <span className="text-gray-700 dark:text-gray-300 font-semibold text-sm uppercase tracking-wider">
              Soft Skills
            </span>
          </div>
          <MarqueeRow skills={softSkills} direction="left" speed={25} />

        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-500/10 to-primary-600/10 border border-primary-500/20 rounded-2xl px-8 py-4">
            <div className="w-3 h-3 bg-primary-500 rounded-full animate-pulse"></div>
            <p className="text-gray-700 dark:text-gray-300 font-medium">
              Always learning and adding new skills to my stack!
            </p>
            <div className="w-3 h-3 bg-primary-500 rounded-full animate-pulse"></div>
          </div>
        </div>

      </div>
    </section>
  )
}