"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="about" className="py-20 bg-slate-900 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-blue-500">Me</span>
        </h2>

        <div
          ref={ref}
          className={`flex flex-col md:flex-row gap-8 items-center transition-opacity duration-700 ease-in-out ${isInView ? "opacity-100" : "opacity-0"}`}
        >
          <div className="md:w-1/3 flex justify-center">
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-blue-500">
              <img
                src="/images/ProfilePicture.jpg"
                alt="Abhishek Yadav"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="md:w-2/3">
            <p className="text-gray-300 text-lg mb-4">
             Hii !!     I'm Abhishek Yadav, <br />
              Computer Engineering graduate with expertise in Java, Spring Boot, React.js, and MySQL. Passionate about
              software development, problem-solving, and learning new technologies.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="flex items-center">
                <span className="text-blue-500 font-semibold mr-2">Location:</span>
                <span className="text-gray-300">Mumbai, Maharashtra</span>
              </div>
              <div className="flex items-center">
                <span className="text-blue-500 font-semibold mr-2">Email:</span>
                <a
                  href="mailto:abhishek1905.yadav@gmail.com"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  abhishek1905.yadav@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <span className="text-blue-500 font-semibold mr-2">Phone:</span>
                <a href="tel:+918928775829" className="text-gray-300 hover:text-blue-400 transition-colors">
                  +91 8928775829
                </a>
              </div>
              <div className="flex items-center">
                <span className="text-blue-500 font-semibold mr-2">Degree:</span>
                <span className="text-gray-300">B.E. Computer Engineering</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
