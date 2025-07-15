import { ExternalLink, Github, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

export default function Projects() {
  const projects = [
    {
      title: "ASLaZA UI",
      description:
        "A mobile application UI design project for an online clothing store, created as part of a university UI design course.",
      longDescription:
        " The design focuses on clean layout, ease of navigation, and a smooth shopping experience. Designed using Figma.",
      image: "/photo/figmaui.png?height=300&width=500",
      technologies: ["Figma", "UI design"],
      githubUrl: "https://github.com",
      liveUrl: "https://www.figma.com/design/v3Rbq6s5yLZe3E42X6iNCy/ASLaZA-UI?node-id=1-22&t=hrfUEpQX0poPd1eC-1",
      featured: true,
      stats: { stars: 1, forks: 45 },
    },
    {
      title: "TickTack Application",
      description:
        "In a collaborative pair project for the TickTack Application, I was responsible for UX/UI design and jointly developed the code structure.",
      longDescription:
        "The project involved the practical application of SQL knowledge in developing an application for a Database class.",
      image: "/photo/ticktackapp.png?height=300&width=500",
      technologies: ["Figma", "Maui", "css", "HTML", "MySQL"],
      githubUrl: "https://github.com/zemuza101/TickTack2",
      liveUrl: "https://www.figma.com/design/bs5VJvK6cjjyk043mW4dWB/TodoList?node-id=0-1&t=uQFTMCdKvS1Yft7D-1",
      featured: true,
      stats: { stars: 2, forks: 23 },
    },
  ]

  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Projects</h2>
          </div>

          {/* Featured Projects */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground mt-2">{project.description}</CardDescription>
                    </div>
                    {project.stats && (
                      <div className="flex items-center gap-3 text-sm text-muted-foreground ml-4">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4" />
                          {project.stats.stars}
                        </div>
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-sm">{project.longDescription}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" asChild>
                      <Link href={project.githubUrl} className="flex items-center gap-2">
                        <Github className="h-4 w-4" />
                        Code
                      </Link>
                    </Button>
                    <Button size="sm" asChild>
                      <Link href={project.liveUrl} className="flex items-center gap-2">
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
