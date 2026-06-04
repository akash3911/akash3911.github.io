export type Project = {
  title: string
  description: string
  content: string
  link?: string
  livelink: string
  status?: string
  technologies: { name: string; icon: string }[]
}

const parseJsonEnv = <T>(value: string | undefined, fallback: T): T => {
  if (!value) {
    return fallback
  }

  try {
    return JSON.parse(value) as T
  } catch {
    return fallback
  }
}

export type CertificationProvider = {
  name: string
  url: string
  icon: string
}

export type Certification = {
  title: string
  type: string
  issuer: string
  date: string
  link: string
  providers: CertificationProvider[]
}

export type Experience = {
  title: string
  role: string
  organization: string
  date: string
  description: string
  icon: string
  link?: string
}

export const projects: Project[] = parseJsonEnv<Project[]>(process.env.NEXT_PUBLIC_PROJECTS, [])

export const certifications: Certification[] = parseJsonEnv<Certification[]>(
  process.env.NEXT_PUBLIC_CERTIFICATIONS,
  [],
)

export const experiences: Experience[] = parseJsonEnv<Experience[]>(
  process.env.NEXT_PUBLIC_EXPERIENCES,
  [],
)