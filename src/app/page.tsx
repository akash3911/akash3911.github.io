"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Mail, MessageSquare, Github, Download, Sun, Moon } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ArrowRight as ArrowRightIcon } from "lucide-react"
import Image from "next/image"
import { GitHubLogoIcon } from "@radix-ui/react-icons"
import { ThemeSparkles } from "@/components/ui/ThemeSparkles"
import { useTheme } from "next-themes"

export default function Page() {
  const [showMoreCerts, setShowMoreCerts] = useState(false)
  const [visibleProjectCount, setVisibleProjectCount] = useState(6)
  const [visibleCertCount, setVisibleCertCount] = useState(8)
  const { theme, setTheme } = useTheme()

  const projects = [
    {
      title: "Wavlly",
      description: "A collection of development tools and utilities",
      content: "A comprehensive collection of development tools and utilities to streamline the development workflow",
      link: "https://github.com/JACCKKK7/Wavlly",
      technologies: [
        { name: "MongoDB", icon: "/icons/mongoDB.svg" },
        { name: "Express", icon: "/icons/express.svg" },
        { name: "React", icon: "/icons/reactnative-svgrepo-com.svg" },
        { name: "Node", icon: "/icons/node-svgrepo-com.svg" },
        { name: "Git", icon: "/icons/git-svgrepo-com.svg" },
        { name: "GitHub", icon: "/icons/github-svgrepo-com.svg" }
      ]
    },
    // {
    //   title: "Update Script",
    //   description: "A script for automating system updates and maintenance tasks",
    //   content: "Streamlines the process of keeping your system up-to-date with automated checks and updates",
    //   link: "https://github.com/JACCKKK7/update-script",
    //   technologies: [
    //     { name: "Bash", icon: "/icons/bash-icon-svgrepo-com.svg" },
    //     { name: "Linux", icon: "/icons/linux-svgrepo-com(1).svg" },
    //     { name: "Git", icon: "/icons/git-svgrepo-com.svg" },
    //     { name: "GitHub", icon: "/icons/github-svgrepo-com.svg" }
    //   ]
    // },
    {
      title: "UnioM",
      description: "A modern blog site built with Hugo static site generator",
      content: "Fast and minimalist blog featuring custom themes, responsive design, and markdown support",
      link: "https://github.com/JACCKKK7/UnioM",
      technologies: [
        { name: "Hugo", icon: "/icons/hugo-svgrepo-com.svg" },
        { name: "Git", icon: "/icons/git-svgrepo-com.svg" },
        { name: "GitHub", icon: "/icons/github-svgrepo-com.svg" }
      ]
    },
    {
      title: "ExamSentry",
      description: "Python script for downloading music from YTmusic using the yt-dlp library",
      content: "A simple Python script to download audio from YouTube videos",
      link: "https://github.com/JACCKKK7/ExamSentry",
      technologies: [
        { name: "Python", icon: "/icons/python-svgrepo-com.svg" },
        { name: "Git", icon: "/icons/git-svgrepo-com.svg" },
        { name: "GitHub", icon: "/icons/github-svgrepo-com.svg" }
      ]
    },
    {
      title: "Music Genre Classification",
      description: "A React Native mobile app for my personal blog",
      content: "Cross-platform mobile application built with React Native that provides a native app experience for my blog site with offline capabilities and push notifications",
      link: "https://github.com/JACCKKK7",
      technologies: [
        { name: "React Native", icon: "/icons/reactnative-svgrepo-com.svg" },
        { name: "JavaScript", icon: "/icons/javascript-svgrepo-com.svg" },
        { name: "Git", icon: "/icons/git-svgrepo-com.svg" },
        { name: "GitHub", icon: "/icons/github-svgrepo-com.svg" }
      ]
    },
    {
      title: "Coming Soon",
      description: "Future project planned",
      content: "Another exciting project in the pipeline. Stay tuned for updates!",
      status: "In Planning",
      technologies: []
    },
    {
      title: "Coming Soon",
      description: "Future project planned",
      content: "Another exciting project in the pipeline. Stay tuned for updates!",
      status: "In Planning",
      technologies: []
    },
    {
      title: "Coming Soon",
      description: "Future project planned",
      content: "Another exciting project in the pipeline. Stay tuned for updates!",
      status: "In Planning",
      technologies: []
    }
  ];

  const handleShowMoreProjects = () => {
    if (visibleProjectCount >= projects.length) {
      setVisibleProjectCount(6) // Reset to initial count of 6
    } else {
      setVisibleProjectCount(prev => Math.min(prev + 3, projects.length))
    }
  }

  const showingAllProjects = visibleProjectCount >= projects.length

  const handleShowMoreCerts = () => {
    if (visibleCertCount >= 12) { // Total number of certificates
      setVisibleCertCount(4) // Reset to initial count
    } else {
      setVisibleCertCount(prev => Math.min(prev + 4, 12))
    }
  }

  const showingAllCerts = visibleCertCount >= 12

  const handleContact = (platform: string) => {
    switch(platform) {
      case 'gmail':
        window.location.href = 'mailto:jonnalagaddaakash777@gmail.com';
        break;
      case 'whatsapp':
        window.location.href = 'https://wa.me/7416982004';
        break;
      case 'linkedin':
        window.location.href = 'https://www.linkedin.com/in/akash-jonnalagadda-658300261/';
        break;
    }
  }

  return (
    <div className="relative min-h-screen">
      <ThemeSparkles />
      {/* Theme Toggle Button - Top Right Corner */}
      <div className="fixed top-4 right-4 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="rounded-full bg-background/80 backdrop-blur-sm border-border/50 hover:bg-foreground hover:text-background transition-all duration-300"
        >
          <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
      <div className="relative min-h-screen bg-transparent">
        <Navbar />
        <div className="max-w-4xl mx-auto px-4 py-12">
          {/* Hero Section */}
          <section id="about" className="mb-24 text-center">
            <h1 className="text-[42px] font-bold mb-4 animate-fade-in">
              Akash Jonnalagadda
            </h1>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in delay-200">
              Passionate developer with a knack for solving complex problems through code. Mostly self-taught and driven by an unyielding curiosity to explore and master new technologies.
            </p>
            <div className="flex flex-col items-center justify-center space-y-4">
              {/* Resume button - First line */}
              <Button
                variant="default"
                className="bg-success hover:bg-background text-success-foreground hover:text-foreground animate-fade-in delay-300 hover-lift transition-all duration-300"
                asChild
              >
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Resume"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Resume
                </a>
              </Button>
              
              {/* Contact Me and GitHub buttons - Second line */}
              <div className="flex items-center justify-center space-x-4">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button 
                      variant="default"
                      className="bg-success hover:bg-background text-success-foreground hover:text-foreground animate-fade-in delay-300 hover-lift focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 transition-all duration-300"
                    >
                      Contact Me!
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-48">
                    <DropdownMenuLabel>Get in touch</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      <DropdownMenuItem onClick={() => handleContact('gmail')}>
                        <Mail className="mr-2 h-4 w-4" />
                        <span>Email</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleContact('whatsapp')}>
                        <MessageSquare className="mr-2 h-4 w-4" />
                        <span>WhatsApp</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleContact('linkedin')}>
                        <Github className="mr-2 h-4 w-4" />
                        <span>LinkedIn</span>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button
                  variant="default"
                  className="bg-success hover:bg-background text-success-foreground hover:text-foreground animate-fade-in delay-300 hover-lift transition-all duration-300"
                  asChild
                >
                  <a
                    href="https://github.com/JACCKKK7"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <GitHubLogoIcon className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="mb-24 animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Skills && Technologies</h2>
            <div className="card-spotify rounded-lg p-4">
              <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 md:gap-8">
                {/* Column 1 - Programming Languages */}
                <div className="animate-slide-in delay-100">
                  <div className="space-y-2 md:space-y-4">
                    {[
                      { name: "JavaScript", icon: "/icons/javascript-svgrepo-com.svg" },
                      { name: "TypeScript", icon: "/icons/typescript-svgrepo-com.svg" },
                      { name: "Python", icon: "/icons/python-svgrepo-com.svg" },
                      { name: "Java", icon: "/icons/java-svgrepo-com.svg" },
                      // { name: "C", icon: "/icons/c.svg" },
                      { name: "HTML", icon: "/icons/html-5-svgrepo-com.svg" },
                      { name: "CSS", icon: "/icons/css-svgrepo-com.svg" }
                    ].map((tech: { name: string; icon: string }, index: number) => (
                      <div key={index} className="flex items-center gap-2">
                        <Image
                          src={tech.icon}
                          alt={`${tech.name} icon`}
                          width={20}
                          height={20}
                          className="w-5 h-5"
                        />
                        <span className="text-xs md:text-sm font-medium text-foreground">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Column 2 - Frontend Frameworks */}
                <div className="animate-slide-in delay-200">
                  <div className="space-y-2 md:space-y-4">
                    {[
                      { name: "React", icon: "/icons/react-svgrepo-com.svg" },
                      { name: "Next.js", icon: "/icons/nextjs-icon-svgrepo-com.svg" },
                      { name: "Tailwind", icon: "/icons/tailwind-svgrepo-com.svg" },
                      { name: "NPM", icon: "/icons/npm-svgrepo-com.svg" },
                      // { name: "Hugo", icon: "/icons/hugo-svgrepo-com.svg" },
                      // { name: "WordPress", icon: "/icons/wordpress-color-svgrepo-com.svg" },
                      // { name: "Deno", icon: "/icons/Deno_Logo_2024.svg" },
                    ].map((tech: { name: string; icon: string }, index: number) => (
                      <div key={index} className="flex items-center gap-2">
                        <Image
                          src={tech.icon}
                          alt={`${tech.name} icon`}
                          width={20}
                          height={20}
                          className="w-5 h-5"
                        />
                        <span className="text-xs md:text-sm font-medium text-foreground">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Column 3 - Backend & Databases */}
                <div className="animate-slide-in delay-300">
                  <div className="space-y-2 md:space-y-4">
                    {[
                      { name: "Node.js", icon: "/icons/node-svgrepo-com.svg" },
                      { name: "Express", icon: "/icons/express-svgrepo-com.svg" },
                      { name: "PostgreSQL", icon: "/icons/postgresql-svgrepo-com.svg" },
                      { name: "MongoDB", icon: "/icons/mongodb-svgrepo-com.svg" },
                      { name: "Firebase", icon: "/icons/firebase-svgrepo-com.svg" },
                      // { name: "PHP", icon: "/icons/php-1-logo-svgrepo-com.svg" },
                      { name: "SQL", icon: "/icons/sql-database-generic-svgrepo-com.svg" }
                    ].map((tech: { name: string; icon: string }, index: number) => (
                      <div key={index} className="flex items-center gap-2">
                        <Image
                          src={tech.icon}
                          alt={`${tech.name} icon`}
                          width={20}
                          height={20}
                          className="w-5 h-5"
                        />
                        <span className="text-xs md:text-sm font-medium text-foreground">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Column 4 - DevOps & Cloud */}
                <div className="animate-slide-in delay-400">
                  <div className="space-y-2 md:space-y-4">
                    {[
                      // { name: "Docker", icon: "/icons/docker-svgrepo-com(1).svg" },
                      { name: "Git", icon: "/icons/git-svgrepo-com.svg" },
                      { name: "GitHub", icon: "/icons/github-svgrepo-com.svg" },
                      // { name: "GitLab", icon: "/icons/gitlab-svgrepo-com.svg" },
                      { name: "AWS", icon: "/icons/aws-svgrepo-com.svg" },
                      { name: "Azure", icon: "/icons/azure-svgrepo-com.svg" },
                      // { name: "Nginx", icon: "/icons/nginx-svgrepo-com.svg" }
                    ].map((tech: { name: string; icon: string }, index: number) => (
                      <div key={index} className="flex items-center gap-2">
                        <Image
                          src={tech.icon}
                          alt={`${tech.name} icon`}
                          width={20}
                          height={20}
                          className="w-5 h-5"
                        />
                        <span className="text-xs md:text-sm font-medium text-foreground">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Column 5 - Operating Systems */}
                <div className="animate-slide-in delay-500">
                  <div className="space-y-2 md:space-y-4">
                    {[
                      { name: "Linux", icon: "/icons/linux-svgrepo-com(1).svg" },
                      { name: "Ubuntu", icon: "/icons/ubuntu-svgrepo-com.svg" },
                      { name: "Arch", icon: "/icons/arch-linux-svgrepo-com.svg" },
                      // { name: "Apple", icon: "/icons/apple-svgrepo-com.svg" },
                      // { name: "Slack", icon: "/icons/slack-svgrepo-com.svg" },
                      { name: "Cursor", icon: "/icons/cursor.svg" },
                      { name: "Vim", icon: "/icons/vim-svgrepo-com.svg" }
                    ].map((tech: { name: string; icon: string }, index: number) => (
                      <div key={index} className="flex items-center gap-2">
                        <Image
                          src={tech.icon}
                          alt={`${tech.name} icon`}
                          width={20}
                          height={20}
                          className="w-5 h-5"
                        />
                        <span className="text-xs md:text-sm font-medium text-foreground">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Column 6 - Development Tools */}
                <div className="animate-slide-in delay-600">
                  <div className="space-y-2 md:space-y-4">
                    {[
                      { name: "VS Code", icon: "/icons/vscode-svgrepo-com.svg" },
                      { name: "Jupyter", icon: "/icons/jupyter-svgrepo-com.svg" },
                      { name: "Terminal", icon: "/icons/terminal-svgrepo-com.svg" },
                      { name: "PowerShell", icon: "/icons/powershell-svgrepo-com.svg" },
                      { name: "Bash", icon: "/icons/bash-icon-svgrepo-com.svg" },
                      { name: "Notion", icon: "/icons/notion-logo-svgrepo-com.svg" },
                      { name: "Figma", icon: "/icons/figma-svgrepo-com.svg" }
                    ].map((tech: { name: string; icon: string }, index: number) => (
                      <div key={index} className="flex items-center gap-2">
                        <Image
                          src={tech.icon}
                          alt={`${tech.name} icon`}
                          width={20}
                          height={20}
                          className="w-5 h-5"
                        />
                        <span className="text-xs md:text-sm font-medium text-foreground">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="mb-24 animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Development Endeavors</h2>
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.slice(0, visibleProjectCount).map((project, index) => (
                  <Card key={index} className={`hover-lift flex flex-col ${!project.link ? 'opacity-75' : ''}`}>
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription>
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-[0.75em]">
                        {project.content}
                      </p>
                      {project.technologies && project.technologies.length > 0 && (
                        <div className="flex gap-2 mt-4">
                          {project.technologies.map((tech, techIndex) => (
                            <div
                              key={techIndex}
                              className="relative group"
                            >
                              <Image
                                src={tech.icon}
                                alt={`${tech.name} icon`}
                                width={20}
                                height={20}
                                className="w-5 h-5"
                              />
                              <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs bg-popover text-popover-foreground rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                {tech.name}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </CardContent>
                    <CardFooter className="mt-auto">
                      {project.link ? (
                        <div className="flex flex-row w-full space-x-2">
                          <Button
                            asChild
                            variant="outline"
                            className="mt-4 text-foreground hover:text-background hover:bg-foreground hover:border-foreground transition-all duration-300"
                          >
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View on GitHub <ArrowRightIcon className="ml-2 h-4 w-4" />
                            </a>
                          </Button>
                          {project.title === "Devlogz Blog App" && (
                            <Button
                              asChild
                              variant="outline"
                              className="mt-4 text-foreground hover:text-background hover:bg-foreground hover:border-foreground transition-all duration-300"
                            >
                              <a
                                href="https://github.com/fernand3z/my-webview-app/releases/download/v1.0.0/devlogzv1.0.0.apk"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Download className="h-[18px] w-[18px]" />
                              </a>
                            </Button>
                          )}
                        </div>
                      ) : (
                        <span className="text-muted-foreground inline-flex items-center space-x-1">
                          {project.status} →
                        </span>
                      )}
                    </CardFooter>
                  </Card>
                ))}
              </div>

              {/* Show More/Less Projects Button */}
              {visibleProjectCount < projects.length ? (
                <div className="flex justify-center mt-8">
                  <button
                    onClick={handleShowMoreProjects}
                    className="text-muted-foreground hover:text-foreground inline-flex items-center space-x-2 group transition-all duration-300"
                  >
                    <div className="flex items-center space-x-2 group-hover:translate-y-[-2px] transition-all duration-200">
                      <span>Show More</span>
                      <span className="transform transition-transform duration-200">↓</span>
                    </div>
                  </button>
                </div>
              ) : (
                <div className="flex justify-center mt-8">
                  <button
                    onClick={handleShowMoreProjects}
                    className="text-muted-foreground hover:text-foreground inline-flex items-center space-x-2 group transition-all duration-300"
                  >
                    <div className="flex items-center space-x-2 group-hover:translate-y-[-2px] transition-all duration-200">
                      <span>Show Less</span>
                      <span className="transform transition-transform duration-200 rotate-180">↓</span>
                    </div>
                  </button>
                </div>
              )}
            </div>
          </section>

          {/* Education Section */}
          <section id="education" className="mb-24 animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Education</h2>
            <div className="space-y-6">
              {/* Bachelor's Degree */}
              <Card className="hover-lift">
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-card">
                      <a 
                        href="https://vitap.ac.in/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="cursor-pointer transition-opacity hover:opacity-80"
                      >
                        <Image 
                          src="/vitap-logo.png" 
                          alt="Vocational Training Authority Logo" 
                          width={48}
                          height={48}
                          className="w-full h-full object-contain p-1" 
                        />
                      </a>
                    </div>
                    <div>
                      <a 
                        href="https://vitap.ac.in/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors"
                      >
                        <CardTitle>Bachelor's degree: Computer Science</CardTitle>
                      </a>
                      <CardDescription>
                        <span className="block text-muted-foreground">Vellore Institute Of Technology</span>
                        <span className="block text-sm text-muted-foreground/60">Oct 2022 - May 2026</span>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              {/* High School */}
              <Card className="hover-lift">
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-card">
                      <a 
                        href="https://sribhavishya.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="cursor-pointer transition-opacity hover:opacity-80"
                      >
                        <Image 
                          src="/bhavishya.png" 
                          alt="Sri Bhavishya Junior College" 
                          width={48}
                          height={48}
                          className="w-full h-full object-contain p-1" 
                        />
                      </a>
                    </div>
                    <div>
                      <a 
                        href="https://sribhavishya.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors"
                      >
                        <CardTitle>High School: MPC </CardTitle>
                      </a>
                      <CardDescription>
                        <span className="block text-muted-foreground">Sri Bhavishya Junior College</span>
                        <span className="block text-sm text-muted-foreground/60">Jan 2020 - Jan 2022</span>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              {/* School */}
              <Card className="hover-lift">
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-card">
                      <a 
                        href="https://nvn.edu.in/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="cursor-pointer transition-opacity hover:opacity-80"
                      >
                        <Image 
                          src="/nalanda-logo.png" 
                          alt="Nalanda Vidya Niketan" 
                          width={48}
                          height={48}
                          className="w-full h-full object-contain p-1" 
                        />
                      </a>
                    </div>
                    <div>
                      <a 
                        href="https://nvn.edu.in/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors"
                      >
                        <CardTitle>10th</CardTitle>
                      </a>
                      <CardDescription>
                        <span className="block text-muted-foreground">Nalanda Vidya Niketan</span>
                        <span className="inline-flex items-center px-2.5 py-0.5 mt-2 rounded-full text-xs font-medium bg-success/10 text-success">
                        </span>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </div>
          </section>

          {/* License & Certifications Section */}
          <section id="certifications" className="animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">License && Certifications</h2>
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* First 4 certificates are always visible */}
                {/* Additional certificates are shown based on visibleCertCount */}
                {[
                  {
                    title: " AWS Certified Solutions Architect – Associate",
                    type: "Professional Certificate",
                    issuer: "LinkedIn and GitHub",
                    date: "2025",
                    link: "https://www.credly.com/badges/66bd3b2b-0dc4-4366-9c72-2cbc453a1f52",
                    providers: [
                      { name: "AWS", url: "https://aws.amazon.com/", icon: "/icons/aws-svgrepo-com.svg" },
                    ]
                  },
                  {
                    title: " Azure AI-900 Fundamentals",
                    type: "Professional Certificate",
                    issuer: "LinkedIn and GitHub",
                    date: "2025",
                    link: "https://www.credly.com/badges/2ba10582-21c9-4c33-938f-5ae5eeca4c8d/public_url",
                    providers: [
                      { name: "Microsoft", url: "https://microsoft.com", icon: "/microsoft-logo.png" },
                    ]
                  },
                  {
                    title: "Career Essentials in GitHub",
                    type: "Professional Certificate",
                    issuer: "LinkedIn and GitHub",
                    date: "2025",
                    link: "https://www.linkedin.com/learning/certificates/95ab038988c255d63db1db0dc4b018e87cca009032a26917b5f3cb7b06802a80",
                    providers: [
                      { name: "GitHub", url: "https://github.com", icon: "/github-logo.png" },
                      { name: "LinkedIn", url: "https://linkedin.com", icon: "/linkedin-logo.png" }
                    ]
                  },
                  {
                    title: "React.js AI Chatbot built with ChatGPT, Gemini and DeepSeek,",
                    type: "Professional Certificate",
                    issuer: "LinkedIn and GitHub",
                    date: "2025",
                    link: "https://www.udemy.com/certificate/UC-5d78faa4-6d21-4d4d-a079-098aa7c9e0ed/",
                    providers: [
                      { name: "GitHub", url: "https://udemy.com", icon: "/udemy-logo.png" },
                    ]
                  },

                  // {
                  //   title: "Career Essentials in System Administration",
                  //   type: "Professional Certificate",
                  //   issuer: "LinkedIn and Microsoft",
                  //   date: "2025",
                  //   link: "https://www.linkedin.com/learning/certificates/9b7ea63d32cd9a46772852f87edc3e13f32e8e6aefb95c4ebaa51ecb87c0b2b4",
                  //   providers: [
                  //     { name: "Microsoft", url: "https://microsoft.com", icon: "/microsoft-logo.png" },
                  //     { name: "LinkedIn", url: "https://linkedin.com", icon: "/linkedin-logo.png" }
                  //   ]
                  // },
                  // {
                  //   title: "Ubuntu Linux Professional Certificate",
                  //   type: "Professional Certificate",
                  //   issuer: "Canonical",
                  //   date: "2025",
                  //   link: "https://www.linkedin.com/learning/certificates/92313e2481dd7891e2c805cf6f57c24041b3e22c982fc3471459972634f686a0",
                  //   providers: [
                  //     { name: "Canonical", url: "https://canonical.com", icon: "/canonical-logo.jpg" },
                  //     { name: "LinkedIn", url: "https://linkedin.com", icon: "/linkedin-logo.png" }
                  //   ]
                  // },
                  // {
                  //   title: "Career Essentials in Sustainable Tech",
                  //   type: "Professional Certificate",
                  //   issuer: "Microsoft and LinkedIn",
                  //   date: "2024",
                  //   link: "https://www.linkedin.com/learning/certificates/0ba4b2d71c34aeabf02cfea0f534d11dbb15e6a89be7d8e36a96ee34ed6f1e98",
                  //   providers: [
                  //     { name: "Microsoft", url: "https://microsoft.com", icon: "/microsoft-logo.png" },
                  //     { name: "LinkedIn", url: "https://linkedin.com", icon: "/linkedin-logo.png" }
                  //   ]
                  // },
                  // {
                  //   title: "Docker Foundations",
                  //   type: "Professional Certificate",
                  //   issuer: "Docker",
                  //   date: "2024",
                  //   link: "https://www.linkedin.com/learning/certificates/23f5265eada7fe3a3d6ed85f7271f2376f1a09c6902cc3c78fd7ae8ec59ffad6",
                  //   providers: [
                  //     { name: "Docker", url: "https://docker.com", icon: "/docker-logo.jpg" },
                  //     { name: "LinkedIn", url: "https://linkedin.com", icon: "/linkedin-logo.png" }
                  //   ]
                  // },
                  // {
                  //   title: "Zendesk Customer Service",
                  //   type: "Professional Certificate",
                  //   issuer: "Zendesk",
                  //   date: "2025",
                  //   link: "https://www.linkedin.com/learning/certificates/be5e562f9bf05dddc22d374603b35d8b93484a076d9d85ddcc1d1cab63c76f11",
                  //   providers: [
                  //     { name: "Zendesk", url: "https://zendesk.com", icon: "/zendesk-logo.jpg" },
                  //     { name: "LinkedIn", url: "https://linkedin.com", icon: "/linkedin-logo.png" }
                  //   ]
                  // },
                  // {
                  //   title: "Build Your Generative AI Productivity Skills",
                  //   type: "Professional Certificate",
                  //   issuer: "Microsoft and LinkedIn",
                  //   date: "2024",
                  //   link: "https://www.linkedin.com/learning/certificates/8101d556cce742a74ff9a4ce9bb64f354811a6ede16f5b885421716cbcd235e5",
                  //   providers: [
                  //     { name: "Microsoft", url: "https://microsoft.com", icon: "/microsoft-logo.png" },
                  //     { name: "LinkedIn", url: "https://linkedin.com", icon: "/linkedin-logo.png" }
                  //   ]
                  // },
                  // {
                  //   title: "Career Essentials in Generative AI",
                  //   type: "Professional Certificate",
                  //   issuer: "Microsoft and LinkedIn",
                  //   date: "2024",
                  //   link: "https://www.linkedin.com/learning/certificates/d4255dd847774f8bc86ad30aebe1cd089242bef805644c6a88b8e87a8dab063f",
                  //   providers: [
                  //     { name: "Microsoft", url: "https://microsoft.com", icon: "/microsoft-logo.png" },
                  //     { name: "LinkedIn", url: "https://linkedin.com", icon: "/linkedin-logo.png" }
                  //   ]
                  // },
                  // {
                  //   title: "Generative AI for Customer Service with Microsoft 365 Copilot",
                  //   type: "Professional Certificate",
                  //   issuer: "Microsoft",
                  //   date: "2024",
                  //   link: "https://www.linkedin.com/learning/certificates/6cac185f1b410c460a9dea686cd5da12e45da8c5106707297ba2662ebbf49e6d",
                  //   providers: [
                  //     { name: "Microsoft", url: "https://microsoft.com", icon: "/microsoft-logo.png" }
                  //   ]
                  // },
                  // {
                  //   title: "Microsoft Copilot for Productivity",
                  //   type: "Professional Certificate",
                  //   issuer: "Microsoft and LinkedIn",
                  //   date: "2024",
                  //   link: "https://www.linkedin.com/learning/certificates/da1c01eaac07fcac76025e1cd3d92f3cdf4ce89bc9dcdd5f817ca4044d7ac209",
                  //   providers: [
                  //     { name: "Microsoft", url: "https://microsoft.com", icon: "/microsoft-logo.png" },
                  //     { name: "LinkedIn", url: "https://linkedin.com", icon: "/linkedin-logo.png" }
                  //   ]
                  // }
                ].slice(0, visibleCertCount).map((cert, index) => (
                  <div key={index} className={`card-spotify p-4 rounded-lg hover-lift animate-scale-in delay-${(index % 4 + 1) * 100} flex flex-col`}>
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-foreground">{cert.title}</h3>
                      <div className="flex items-center gap-2 mb-2">
                        <p className="text-muted-foreground text-[0.6em]">{cert.type}</p>
                        <span className="text-muted-foreground text-[0.6em]">•</span>
                        <p className="text-muted-foreground text-[0.6em]">{cert.issuer}</p>
                        <span className="text-muted-foreground text-[0.6em]">•</span>
                        <p className="text-muted-foreground text-[0.6em]">{cert.date}</p>
                      </div>
                    </div>
                    <div className="mt-auto pt-4 flex justify-between items-center">
                      <a 
                        href={cert.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-muted-foreground hover:text-foreground inline-flex items-center space-x-1 transition-colors group text-[0.75em]"
                      >
                        <span className="group-hover:translate-x-1 transition-transform duration-200">View Certificate</span>
                        <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                      </a>
                      <div className="flex gap-2">
                        {cert.providers.map((provider, i) => (
                          <a
                            key={i}
                            href={provider.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-6 h-6 opacity-70 hover:opacity-100 transition-opacity flex items-center justify-center"
                          >
                            <Image
                              src={provider.icon}
                              alt={`${provider.name} logo`}
                              width={24}
                              height={24}
                              className="w-6 h-6 object-contain"
                              quality={100}
                              unoptimized
                            />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Show More/Less Certificates Button */}
              {visibleCertCount < 12 && (
                <div className="flex justify-center">
                  <button
                    onClick={handleShowMoreCerts}
                    className="text-muted-foreground hover:text-foreground inline-flex items-center space-x-2 group transition-all duration-300"
                  >
                    <div className="flex items-center space-x-2 group-hover:translate-y-[-2px] transition-all duration-200">
                      <span>Show More</span>
                      <span className="transform transition-transform duration-200">↓</span>
                    </div>
                  </button>
                </div>
              )}

              {/* Show Less Button - only visible when all certificates are shown */}
              {showingAllCerts && (
                <div className="flex justify-center">
                  <button
                    onClick={handleShowMoreCerts}
                    className="text-muted-foreground hover:text-foreground inline-flex items-center space-x-2 group transition-all duration-300"
                  >
                    <div className="flex items-center space-x-2 group-hover:translate-y-[-2px] transition-transform duration-200">
                      <span>Show Less</span>
                      <span className="transform transition-transform duration-200 rotate-180">↓</span>
                    </div>
                  </button>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
