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
}

