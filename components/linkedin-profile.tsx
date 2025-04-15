"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function LinkedInProfile() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section className="py-20 bg-slate-950 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          LinkedIn <span className="text-blue-500">Profile</span>
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Connect with me on LinkedIn for professional updates
        </p>

        <div
          ref={ref}
          className={`transition-all duration-700 ease-in-out ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <Card className="bg-slate-900 border border-slate-800 overflow-hidden">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl text-white flex items-center">
                <Linkedin className="mr-2 h-5 w-5 text-blue-500" />
                Abhishek Yadav
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row items-center gap-6 py-4">
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-blue-500">
                  <img
                    src="/images/linkdinImage.jpg"
                    alt="Abhishek Yadav LinkedIn"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Abhishek Yadav</h3>
                  <p className="text-blue-400">Full Stack Developer</p>
                  <p className="text-gray-400 mt-2">Java | Spring Boot | React.js | MySQL</p>
                  <Button className="mt-4" asChild>
                    <a
                      href="https://linkedin.com/in/abhishek19-dev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      Connect on LinkedIn
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
