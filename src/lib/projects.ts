import { Box } from "lucide-react"

export type Project = {
  title: string
  description: string
  content: string
  link?: string
  livelink: string
  status?: string
  technologies: { name: string; icon: string }[]
}

export const projects: Project[] = [
  {
    title: "CodeTrack",
    description: "An Online Coding Platform built with the MERN stack",
    content:
      "A full-stack web application that allows users to solve coding problems, track their progress, and compete with friends in real-time coding challenges",
    link: "https://github.com/akash3911/CodeTrack",
    livelink: "https://codetrack.ddns.net",
    technologies: [
      { name: "MongoDB", icon: "/icons/mongoDB.svg" },
      { name: "Express", icon: "/icons/express.svg" },
      { name: "React", icon: "/icons/reactnative-svgrepo-com.svg" },
      { name: "Node", icon: "/icons/node-svgrepo-com.svg" },
      { name: "Git", icon: "/icons/git-svgrepo-com.svg" },
      { name: "GitHub", icon: "/icons/github-svgrepo-com.svg" },
    ],
  },
  {
    title: "UnioM",
    description: "A modern blog site built with Hugo static site generator",
    content: "Fast and minimalist blog featuring custom themes, responsive design, and markdown support",
    link: "https://github.com/akash3911/UnioM",
    livelink: "",
    technologies: [
      { name: "React", icon: "/icons/react-svgrepo-com.svg" },
      { name: "Express", icon: "/icons/express.svg" },
      { name: "PostgreSQL", icon: "/icons/postgresql-svgrepo-com.svg" },
      { name: "Git", icon: "/icons/git-svgrepo-com.svg" },
      { name: "GitHub", icon: "/icons/github-svgrepo-com.svg" },
    ],
  },
  {
    title: "ExamSentry",
    description: "Python script for downloading music from YTmusic using the yt-dlp library",
    content: "A simple Python script to download audio from YouTube videos",
    link: "https://github.com/akash3911/ExamSentry",
    livelink: "",
    technologies: [
      { name: "Python", icon: "/icons/python-svgrepo-com.svg" },
      { name: "Git", icon: "/icons/git-svgrepo-com.svg" },
      { name: "GitHub", icon: "/icons/github-svgrepo-com.svg" },
    ],
  },
  {
    title: "AWS secure file upload",
    description: "A secure file upload system using AWS S3 and Lambda functions",
    content:
      "A serverless application that allows users to securely upload files to an S3 bucket with validation and virus scanning using AWS Lambda",
    link: "https://github.com/akash3911/VaultBox",
    livelink: "",
    technologies: [
      { name: "AWS", icon: "/icons/aws-svgrepo-com.svg" },
      { name: "Python", icon: "/icons/python-svgrepo-com.svg" },
      { name: "Git", icon: "/icons/git-svgrepo-com.svg" },
      { name: "GitHub", icon: "/icons/github-svgrepo-com.svg" },
    ],
  },
  {
    title: "Music Genre Classification",
    description: "A React Native mobile app for my personal blog",
    content:
      "Cross-platform mobile application built with React Native that provides a native app experience for my blog site with offline capabilities and push notifications",
    link: "https://github.com/akash3911",
    livelink: "",
    technologies: [
      { name: "React Native", icon: "/icons/reactnative-svgrepo-com.svg" },
      { name: "JavaScript", icon: "/icons/javascript-svgrepo-com.svg" },
      { name: "Git", icon: "/icons/git-svgrepo-com.svg" },
      { name: "GitHub", icon: "/icons/github-svgrepo-com.svg" },
    ],
  },
  {
    title: "Coming Soon",
    description: "Future project planned",
    content: "Another exciting project in the pipeline. Stay tuned for updates!",
    status: "In Planning",
    livelink: "",
    technologies: [],
  },
  {
    title: "Coming Soon",
    description: "Future project planned",
    content: "Another exciting project in the pipeline. Stay tuned for updates!",
    status: "In Planning",
    livelink: "",
    technologies: [],
  },
  {
    title: "Coming Soon",
    description: "Future project planned",
    content: "Another exciting project in the pipeline. Stay tuned for updates!",
    status: "In Planning",
    livelink: "",
    technologies: [],
  },
]

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

export const certifications: Certification[] = [
  {
    title: " AWS Certified Solutions Architect – Associate",
    type: "Professional Certificate",
    issuer: "LinkedIn and GitHub",
    date: "2025",
    link: "https://www.credly.com/badges/66bd3b2b-0dc4-4366-9c72-2cbc453a1f52",
    providers: [{ name: "AWS", url: "https://aws.amazon.com/", icon: "/icons/aws-svgrepo-com.svg" }],
  },
  {
    title: " Azure AI-900 Fundamentals",
    type: "Professional Certificate",
    issuer: "Microsoft",
    date: "2024",
    link: "https://www.credly.com/badges/2ba10582-21c9-4c33-938f-5ae5eeca4c8d/public_url",
    providers: [{ name: "Microsoft", url: "https://microsoft.com", icon: "/microsoft-logo.png" }],
  },
  {
    title: "MongoDB Associate Database Administrator",
    type: "Professional Certificate",
    issuer: "MongoDB",
    date: "2025",
    link: "https://www.credly.com/badges/05aa6ae2-7440-4da6-8a13-ce2f779002eb/public_url",
    providers: [
      { name: "GitHub", url: "https://github.com", icon: "/github-logo.png" },
      { name: "LinkedIn", url: "https://linkedin.com", icon: "/linkedin-logo.png" },
    ],
  },
  {
    title: "React.js AI Chatbot built with ChatGPT, Gemini and DeepSeek,",
    type: "Course Completion Certificate",
    issuer: "Udemy",
    date: "2025",
    link: "https://www.udemy.com/certificate/UC-5d78faa4-6d21-4d4d-a079-098aa7c9e0ed/",
    providers: [{ name: "GitHub", url: "https://udemy.com", icon: "/udemy-logo.png" }],
  },
]