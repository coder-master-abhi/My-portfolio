"use client"

import { useEffect, useState } from "react"
import { ChevronDown, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [showResume, setShowResume] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center relative px-4 bg-slate-950">
      <div
        className={`text-center max-w-3xl mx-auto transition-opacity duration-1000 ease-in-out ${isVisible ? "opacity-100" : "opacity-0"}`}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
          Turning <span className="text-blue-500">Code</span> into Reality
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-400 mb-6">Java | Spring Boot | React.js | Full Stack Developer</h2>
        <p className="text-gray-300 mb-8 text-lg">
          A passionate software developer specializing in backend and frontend solutions, dedicated to delivering clean
          and efficient code.
        </p>
        <div className="flex flex-col gap-4 items-center">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-md text-lg w-full sm:w-auto">
            Explore My Work
          </Button>
          <Button 
            size="lg" 
            className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-6 rounded-md text-lg border border-blue-500 w-full sm:w-auto"
            onClick={() => setShowResume(true)}
          >
            View Resume
          </Button>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <a href="#about" className="text-gray-400 flex flex-col items-center">
          <span className="mb-2 text-sm">Scroll Down</span>
          <ChevronDown className="animate-bounce w-6 h-6" />
        </a>
      </div>

      {/* Resume Modal */}
      {showResume && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50" onClick={() => setShowResume(false)}>
          <div className="relative w-[80%] h-[100%] bg-white rounded-md overflow-hidden" onClick={(e) => e.stopPropagation()}>



            <button 
              className="absolute top-4 right-4 z-10 bg-blue-500 rounded-full p-1 text-white hover:bg-blue-600 transition-colors"
              onClick={(e) => {
                e.stopPropagation()
                setShowResume(false)
              }}
            >
              <X className="w-8 h-8" />
            </button>
            <iframe
              src={`/images/Abhishek__Yadav-CV-2025.pdf#view=FitH`}
              className="w-full h-full"
              title="Resume"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-4 right-4">
              <a 
                href="/images/Abhishek__Yadav-CV-2025.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                Open in New Tab
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
