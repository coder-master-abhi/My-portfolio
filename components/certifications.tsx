"use client"

import { useRef, useState } from "react"
import { useInView } from "framer-motion"
import { Award, Calendar, X } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Certifications() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [selectedCert, setSelectedCert] = useState<string | null>(null)

  const certifications = [
    {
      title: "Master in Java Full Stack Development",
      issuer: "I.T. Vedant",
      date: "03/2025",
      icon: <Award className="w-8 h-8 text-blue-500" />,
      image: "/images/Master in java fullstack.jpg"
    },
    {
      title: "IBM Java Fundamentals",
      issuer: "IBM",
      date: "02/2025",
      icon: <Award className="w-8 h-8 text-blue-500" />,
      image: "/images/IBM Java Fundamentals Certificate_page-0001.jpg"
    },
    {
      title: "IBM SQL and Relational Databases",
      issuer: "IBM",
      date: "02/2025",
      icon: <Award className="w-8 h-8 text-blue-500" />,
      image: "/images/IBM SQL and Relational Databases 101 Certificate __page-0001.jpg"
    },
    {
      title: "IBM Web Development",
      issuer: "IBM",
      date: "02/2025",
      icon: <Award className="w-8 h-8 text-blue-500" />,
      image: "/images/IBM Web_Development Certificate _page-0001.jpg"
    },
    {
      title: "Imperia Project Competition and Awards",
      issuer: "Imperia",
      date: "2024",
      icon: <Award className="w-8 h-8 text-blue-500" />,
      image: "/images/Imperia certificates.jpg"
    },
  ]

  return (
    <section id="certifications" className="py-20 bg-slate-950 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-blue-500">Certifications</span>
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Professional certifications and achievements that enhance my technical expertise
        </p>

        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 ease-in-out ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="bg-slate-900 border border-slate-800 overflow-hidden hover:shadow-lg hover:shadow-blue-900/20 transition-all duration-300 hover:-translate-y-2"
            >
              {cert.image && (
                <div 
                  className="w-full h-48 overflow-hidden cursor-pointer"
                  onClick={() => setSelectedCert(cert.image)}
                >
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <CardHeader className="flex flex-row items-center gap-4">
                {cert.icon}
                <div>
                  <CardTitle className="text-lg text-white">{cert.title}</CardTitle>
                  {cert.issuer && <p className="text-sm text-blue-400">{cert.issuer}</p>}
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-gray-400">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{cert.date}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCert && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={() => setSelectedCert(null)}>
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <button 
              className="absolute top-2 right-2 bg-blue-500 rounded-full p-1 text-white hover:bg-blue-600 transition-colors"
              onClick={(e) => {
                e.stopPropagation()
                setSelectedCert(null)
              }}
            >
              <X className="w-6 h-6" />
            </button>
            <img 
              src={selectedCert} 
              alt="Certificate" 
              className="w-full h-auto object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  )
}
