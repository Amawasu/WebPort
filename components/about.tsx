import { Code, Database, Globe, Smartphone } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  const highlights = [
    {
      icon: <Code className="h-8 w-8 text-blue-600" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code following best practices.",
    },
    {
      icon: <Database className="h-8 w-8 text-green-600" />,
      title: "Database Design",
      description: "Designing robust database architectures for optimal performance.",
    },
    {
      icon: <Globe className="h-8 w-8 text-purple-600" />,
      title: "Web Development",
      description: "Building responsive web applications with modern frameworks.",
    },
    {
      icon: <Smartphone className="h-8 w-8 text-orange-600" />,
      title: "Mobile First",
      description: "Creating mobile-responsive designs that work across all devices.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              I'm a passionate full-stack developer with 5+ years of experience building web applications and software
              solutions. I love turning complex problems into simple, beautiful, and intuitive solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {highlights.map((item, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">My Journey</h3>
                <p className="text-gray-600 mb-4">
                  Started my journey in computer science with a passion for problem-solving and creating digital
                  solutions. Over the years, I've worked with startups and established companies, helping them build
                  scalable applications.
                </p>
                <p className="text-gray-600 mb-4">
                  I specialize in modern web technologies including React, Next.js, Node.js, and cloud platforms. I'm
                  always eager to learn new technologies and stay updated with industry trends.
                </p>
                <p className="text-gray-600">
                  When I'm not coding, you can find me contributing to open-source projects, writing technical blogs, or
                  exploring new technologies.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                  <div className="w-72 h-72 bg-white rounded-full flex items-center justify-center">
                    <Code className="h-32 w-32 text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
