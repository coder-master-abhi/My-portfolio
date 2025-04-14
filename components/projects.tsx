"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { Github, ExternalLink, Car, Ticket, UserCheck } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const projects = [
    {
      title: "RentNGO - Car Rental System",
      description:
        "A web-based platform for car rentals with admin and customer roles. Implemented car booking, payment processing, and booking approval. Built customer dashboards for booking history and payments. Created admin panel for managing cars, bookings, and payments.",
      techStack: ["Spring Boot", "ReactJs", "MySQL"],
      icon: <Car className="w-12 h-12 text-blue-500" />,
      github: "https://github.com/coder-master-abhi/RentNGO",
      demo: "#",
    },
    {
      title: "Ticketing System",
      description:
        "Developed a blockchain-based ticketing system to enhance transparency and security in ticket transactions using smart contracts.",
      techStack: ["Blockchain", "NFT", "Spring Boot", "ReactJs", "Solidity", "Hardhat"],
      icon: <Ticket className="w-12 h-12 text-blue-500" />,
      github: "https://github.com/coder-master-abhi/ticketing-system",
      demo: "#",
    },
    {
      title: "Smart Attendance System",
      description:
        "Improved the accuracy of student attendance tracking. Developed user-friendly interfaces for students and faculty. Created a student portal for notes and instructions.",
      techStack: ["Java", "XML", "Firebase", "Pre-trained Models"],
      icon: <UserCheck className="w-12 h-12 text-blue-500" />,
      github: "https://github.com/coder-master-abhi/smart-attendance",
      demo: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-slate-900 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-blue-500">Projects</span>
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          A showcase of my recent development work and technical projects
        </p>

        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 ease-in-out ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-slate-950 border border-slate-800 overflow-hidden hover:shadow-lg hover:shadow-blue-900/20 transition-all duration-300 hover:-translate-y-2"
            >
              <CardHeader className="pb-2">
                <div className="mb-4">{project.icon}</div>
                <CardTitle className="text-xl text-white">{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.techStack.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="bg-slate-800 text-blue-400">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <CardDescription className="text-gray-400 text-sm">{project.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
