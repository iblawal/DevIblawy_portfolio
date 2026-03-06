
export type ProjectStatus = "completed" | "ongoing" | "wip"

export type TechCategory = "frontend" | "backend" | "database" | "devops" | "other"

export interface Project {
  id: string
  slug: string
  title: string
  description: string
  technologies: string[]
  images: {
    desktop: string
    tablet?: string
    mobile?: string
  }
  liveUrl?: string
  githubUrl?: string
  status: ProjectStatus
}


export interface Experience {
  id: string
  role: string
  company: string
  period: string
  description: string
  current?: boolean
}


export interface Certification {
  id: string
  title: string
  issuer: string
  date: string
  description?: string
}


export interface Skill {
  name: string
  percentage: number // 0 - 100
}

export interface TechStack {
  name: string
  icon: string
  category: TechCategory
}
