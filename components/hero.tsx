import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Alex Johnson
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Full-Stack Developer & Software Engineer passionate about creating innovative solutions and building
            scalable applications with modern technologies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="#projects" className="flex items-center gap-2">
                View My Work
                <ArrowDown className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg">
              <Link href="#contact" className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Get In Touch
              </Link>
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <Link href="https://github.com" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Github className="h-8 w-8" />
            </Link>
            <Link href="https://linkedin.com" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Linkedin className="h-8 w-8" />
            </Link>
            <Link href="mailto:alex@example.com" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Mail className="h-8 w-8" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
