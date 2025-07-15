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
                    src="/photo/me01.jpg?height=320&width=320"
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
                  Amawasu Duangain
                </span>
              </h1>
              <h2 className="text-2xl sm:text-3xl text-muted-foreground mb-6">Frontend Dev</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
                A fourth-year Information Technology student passionate about web development and UX/UI design. Experienced with Python, HTML, CSS, and JavaScript. Known for fast learning ability and enthusiasm in exploring practical skills in real working environments.
              </p>

              {/* Quick Info */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>pathum thani</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>amawasuduangin@gmail.com</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <a
                  href="/CV Amawasu.pdf"
                  
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    <Download className="h-4 w-4 mr-2" />
                    Download Resume
                  </Button>
                </a>
              </div>

              {/* Social Links */}
              <div className="flex justify-center lg:justify-start space-x-4">
                <Link
                  href="https://github.com/Amawasu"
                  className="w-12 h-12 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Github className="h-5 w-5" />
                </Link>
                <Link
                  href="mailto:amawasuduangin@gmail.com"
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
                    <h4 className="text-lg font-semibold text-foreground mb-3">Background</h4>
                    <p className="text-muted-foreground mb-4">
                      I began my journey in web development through a web design course in university, which sparked my interest and led me to continue learning and growing in this field ever since.
                    </p>
                    <p className="text-muted-foreground">
                      Throughout my studies, I gained experience in UX/UI design for both websites and mobile applications, as well as learning how to build and manage database systems to organize and display data effectively within web and app environments.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">What I Do</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• UI/UX design for web and mobile apps</li>
                      <li>• Frontend development with HTML, CSS, and JavaScript</li>
                      <li>• Designing and managing simple database structures</li>
                      <li>• Prototyping and wireframing using Figma</li>
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
