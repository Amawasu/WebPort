import { Download, Github, Linkedin, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function Profile() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-20 pb-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                  <Image
                    src="/placeholder.svg?height=320&width=320"
                    alt="Profile Picture"
                    width={320}
                    height={320}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-2xl">👋</span>
                </div>
              </div>
            </div>

            {/* Profile Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
                  Sarah Chen
                </span>
              </h1>
              <h2 className="text-2xl sm:text-3xl text-muted-foreground mb-6">Senior Full-Stack Developer</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
                Passionate software engineer with 6+ years of experience building scalable web applications and leading
                development teams. I specialize in React, Node.js, and cloud technologies, with a focus on creating
                user-centric solutions that drive business growth.
              </p>

              {/* Quick Info */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>sarah.chen@example.com</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Download className="h-4 w-4 mr-2" />
                  Download Resume
                </Button>
                <Button variant="outline" size="lg">
                  <Link href="#contact" className="flex items-center gap-2">
                    Let's Connect
                  </Link>
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex justify-center lg:justify-start space-x-4">
                <Link
                  href="https://github.com"
                  className="w-12 h-12 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Github className="h-5 w-5" />
                </Link>
                <Link
                  href="https://linkedin.com"
                  className="w-12 h-12 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link
                  href="mailto:sarah.chen@example.com"
                  className="w-12 h-12 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Mail className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>

          {/* About Me Details */}
          <div className="mt-20">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">About Me</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">Professional Background</h4>
                    <p className="text-muted-foreground mb-4">
                      I started my journey in software development during my Computer Science studies and have since
                      worked with both startups and Fortune 500 companies. My experience spans across various industries
                      including fintech, e-commerce, and healthcare.
                    </p>
                    <p className="text-muted-foreground">
                      I'm passionate about mentoring junior developers and contributing to open-source projects. I
                      believe in writing clean, maintainable code and following best practices in software development.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">What I Do</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Full-stack web application development</li>
                      <li>• API design and microservices architecture</li>
                      <li>• Cloud infrastructure and DevOps</li>
                      <li>• Team leadership and project management</li>
                      <li>• Code review and technical mentoring</li>
                      <li>• Performance optimization and scaling</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
