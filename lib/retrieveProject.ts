import { portfolioContext } from "@/data/portfolioContext"

interface Project {
  title: string
  description: string
  tags: string[]
  stack: string[]
  link: string
  category: string
}

function scoreProject(question: string, project: Project): number {
  const q = question.toLowerCase()
  let score = 0

  // Tag matching (highest weight)
  project.tags.forEach((tag: string) => {
    if (q.includes(tag.toLowerCase())) score += 3
  })

  // Stack/tech matching
  project.stack.forEach((tech: string) => {
    if (q.includes(tech.toLowerCase())) score += 2
  })

  // Title matching
  if (q.includes(project.title.toLowerCase())) score += 5

  // Category matching
  if (q.includes(project.category.toLowerCase())) score += 2

  // Description keyword matching
  const descWords = project.description.toLowerCase().split(' ')
  const qWords = q.split(' ')
  qWords.forEach(qw => {
    if (descWords.includes(qw) && qw.length > 3) score += 1
  })

  return score
}

export function retrieveProject(question: string): Project {
  let best = portfolioContext[0]
  let bestScore = 0

  portfolioContext.forEach((project) => {
    const s = scoreProject(question, project)
    if (s > bestScore) {
      bestScore = s
      best = project
    }
  })

  return best
}

export function getProjectSummary(project: Project): string {
  return `**${project.title}** (${project.category})\n${project.description}\n\nTech: ${project.stack.join(', ')}\nView: ${project.link}`
}
