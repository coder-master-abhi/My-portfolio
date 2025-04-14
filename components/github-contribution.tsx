"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function GithubContribution() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section className="py-20 bg-slate-900 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          GitHub <span className="text-blue-500">Contributions</span>
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          My open source contributions and coding activity
        </p>

        <div
          ref={ref}
          className={`bg-slate-950 rounded-lg p-6 shadow-lg transition-all duration-700 ease-in-out ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="flex flex-col items-center">
            {/* GitHub contribution chart would be embedded here */}
            <div className="w-full h-48 md:h-64 bg-slate-900 rounded-lg flex items-center justify-center mb-6">
              <p className="text-gray-400 text-center px-4">
                GitHub contribution chart will be embedded here using the GitHub Calendar API
              </p>
            </div>

            <Button asChild>
              <a
                href="https://github.com/coder-master-abhi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Github className="mr-2 h-5 w-5" />
                View GitHub Profile
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
