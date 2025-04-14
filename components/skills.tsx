"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { Code, Database, Layout, Server } from "lucide-react"

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-8 h-8 text-blue-500" />,
      skills: ["Java", "JavaScript"],
    },
    {
      title: "Backend Development",
      icon: <Server className="w-8 h-8 text-blue-500" />,
      skills: ["Spring Boot", "JDBC"],
    },
    {
      title: "Frontend Development",
      icon: <Layout className="w-8 h-8 text-blue-500" />,
      skills: ["HTML", "CSS", "Bootstrap", "React"],
    },
    {
      title: "Databases",
      icon: <Database className="w-8 h-8 text-blue-500" />,
      skills: ["MySQL", "SQL (Relational Databases)"],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-slate-950 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-blue-500">Skills</span>
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          A comprehensive set of technical skills I've developed throughout my education and projects
        </p>

        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 ease-in-out ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-lg p-6 shadow-lg hover:shadow-blue-900/20 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold ml-3 text-white">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Experience Section */}
        <div className="mt-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Professional <span className="text-blue-500">Experience</span>
          </h2>

          <div
            className={`bg-slate-900 rounded-lg p-8 shadow-lg transition-all duration-700 ease-in-out ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-white">Meritrack Service Pvt Ltd</h3>
                <p className="text-blue-500">Software Installations & Maintenance</p>
              </div>
              <div className="mt-2 md:mt-0">
                <p className="text-gray-400">01/2024 – 07/2024</p>
                <p className="text-gray-400">Mumbai</p>
              </div>
            </div>

            <ul className="space-y-2 mt-4">
              <li className="flex items-start text-gray-300">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 mt-2"></span>
                <span>Monitored software performance & security threats.</span>
              </li>
              <li className="flex items-start text-gray-300">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 mt-2"></span>
                <span>Handled unauthorized access issues and troubleshooting.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
