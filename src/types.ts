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
  links: {
    github: string | null
    site: string | null
  }
}

