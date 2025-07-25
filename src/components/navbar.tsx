"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import Image from "next/image"

export function Navbar() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const [activeSection, setActiveSection] = React.useState("about")
  const [isHovered, setIsHovered] = React.useState(false)

  const sections = ["about", "skills", "projects", "education", "certifications"]

  React.useEffect(() => {
    setMounted(true)
  }, [])

  React.useEffect(() => {
    const handleScroll = () => {
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [sections])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(sectionId)
    }
  }

  const navigationItems = [
    {
      icon: "/icons8-user.svg",
      iconFilled: "/icons8-user-filled.svg", // Same icon since there's no filled version
      id: "about",
      label: "About"
    },
    {
      icon: "/icons8-learning.svg", 
      iconFilled: "/icons8-learning-filled.svg",
      id: "skills",
      label: "Skills"
    },
    {
      icon: "/icons8-project.svg",
      iconFilled: "/icons8-project-filled.svg",
      id: "projects", 
      label: "Projects"
    },
    {
      icon: "/icons8-education.svg",
      iconFilled: "/icons8-education-filled.svg",
      id: "education",
      label: "Education"
    },
    {
      icon: "/icons8-certificate.svg",
      iconFilled: "/icons8-certificate-filled.svg",
      id: "certifications",
      label: "Certifications"
    }
  ]

  if (!mounted) {
    return (
      <>
        {/* Desktop - Left side dock */}
        <div 
          className="hidden md:fixed md:left-0 md:top-1/2 md:transform md:-translate-y-1/2 md:z-40 md:block"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Hover trigger area */}
          <div className="w-12 h-32 absolute left-0 top-1/2 transform -translate-y-1/2" />
          
          {/* Desktop dock indicator when hidden */}
          {!isHovered && (
            <div className="absolute left-1 top-1/2 transform -translate-y-1/2 bg-white/90 dark:bg-black/90 backdrop-blur-xl rounded-r-lg p-2 border border-l-0 border-gray-200 dark:border-gray-800 shadow-lg">
              <div className="flex flex-col space-y-1">
                <div className="w-1 h-1 bg-gray-600 dark:bg-gray-400 rounded-full"></div>
                <div className="w-1 h-1 bg-gray-600 dark:bg-gray-400 rounded-full"></div>
                <div className="w-1 h-1 bg-gray-600 dark:bg-gray-400 rounded-full"></div>
              </div>
            </div>
          )}
          
          <nav 
            className={`bg-white/90 dark:bg-black/90 backdrop-blur-xl rounded-r-2xl py-4 px-2 border border-l-0 border-gray-200 dark:border-gray-800 shadow-2xl transition-all duration-300 ease-in-out ${
              isHovered ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            <div className="flex flex-col items-center space-y-3">
              {navigationItems.map((item, index) => (
                <div key={index} className="relative group">
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`p-3 rounded-full transition-all duration-300 ease-in-out transform hover:scale-125 hover:shadow-lg ${
                      activeSection === item.id
                        ? "text-gray-900 dark:text-white bg-gray-200/70 dark:bg-gray-700/70"
                        : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200/80 dark:hover:bg-gray-800/80"
                    }`}
                  >                        <Image
                          src={activeSection === item.id ? item.iconFilled : item.icon}
                          alt={`${item.label} icon`}
                          width={20}
                          height={20}
                          className="w-5 h-5 transition-all duration-300 ease-in-out group-hover:scale-110 dark:invert dark:brightness-0 dark:contrast-100 group-hover:invert group-hover:brightness-0 group-hover:contrast-100"
                        />
                  </button>
                  
                  {/* Hover tooltip */}
                  <div className="absolute left-full top-1/2 transform -translate-y-1/2 ml-2 px-2 py-1 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                    {item.label}
                    <div className="absolute right-full top-1/2 transform -translate-y-1/2 border-2 border-transparent border-r-gray-900 dark:border-r-gray-100"></div>
                  </div>
                </div>
              ))}
            </div>
          </nav>
        </div>


      </>
    )
  }

  return (
    <>
      {/* Desktop - Left side dock */}
      <div 
        className="hidden md:fixed md:left-0 md:top-1/2 md:transform md:-translate-y-1/2 md:z-40 md:block"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Hover trigger area */}
        <div className="w-12 h-32 absolute left-0 top-1/2 transform -translate-y-1/2" />
        
        {/* Desktop dock indicator when hidden */}
        {!isHovered && (
          <div className="absolute left-1 top-1/2 transform -translate-y-1/2 bg-white/90 dark:bg-black/90 backdrop-blur-xl rounded-r-lg p-2 border border-l-0 border-gray-200 dark:border-gray-800 shadow-lg">
            <div className="flex flex-col space-y-1">
              <div className="w-1 h-1 bg-gray-600 dark:bg-gray-400 rounded-full"></div>
              <div className="w-1 h-1 bg-gray-600 dark:bg-gray-400 rounded-full"></div>
              <div className="w-1 h-1 bg-gray-600 dark:bg-gray-400 rounded-full"></div>
            </div>
          </div>
        )}
        
        <nav 
          className={`bg-white/90 dark:bg-black/90 backdrop-blur-xl rounded-r-2xl py-4 px-2 border border-l-0 border-gray-200 dark:border-gray-800 shadow-2xl transition-all duration-300 ease-in-out ${
            isHovered ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex flex-col items-center space-y-3">
            {navigationItems.map((item, index) => (
              <div key={index} className="relative group">
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`p-3 rounded-full transition-all duration-300 ease-in-out transform hover:scale-125 hover:shadow-lg ${
                    activeSection === item.id
                      ? "text-gray-900 dark:text-white bg-gray-200/70 dark:bg-gray-700/70"
                      : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200/80 dark:hover:bg-gray-800/80"
                  }`}
                >
                  <Image
                    src={activeSection === item.id ? item.iconFilled : item.icon}
                    alt={`${item.label} icon`}
                    width={20}
                    height={20}
                    className="w-5 h-5 transition-all duration-300 ease-in-out group-hover:scale-110 dark:invert dark:brightness-0 dark:contrast-100 group-hover:invert group-hover:brightness-0 group-hover:contrast-100"
                  />
                </button>
                
                {/* Hover tooltip */}
                <div className="absolute left-full top-1/2 transform -translate-y-1/2 ml-2 px-2 py-1 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                  {item.label}
                  <div className="absolute right-full top-1/2 transform -translate-y-1/2 border-2 border-transparent border-r-gray-900 dark:border-r-gray-100"></div>
                </div>
              </div>
            ))}
          </div>
        </nav>
      </div>
    </>
  )
} 