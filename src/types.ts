export interface Topic {
  id: number
  text: string
  color: string
}

export interface Project {
  id: number
  images: string[]
  description: string
  title: string
  topics: Topic[]
  links: {
    github?: string
    site?: string
  }
  status?: 'archived' | 'in-progress'
  statusNote?: string
}

export interface Skill {
  name: string
}

export interface SkillCategory {
  id: number
  category: string
  skills: string[]
}

