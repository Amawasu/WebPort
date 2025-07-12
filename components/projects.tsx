import { ExternalLink, Github, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A comprehensive e-commerce solution with advanced features including real-time inventory management, payment processing, and analytics dashboard.",
      longDescription:
        "Built a full-stack e-commerce platform that handles thousands of transactions daily. Features include user authentication, product catalog, shopping cart, payment integration with Stripe, order management, and admin dashboard with analytics.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS", "Vercel"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: true,
      stats: { stars: 124, forks: 45 },
    },
    {
      title: "Real-Time Chat Application",
      description:
        "A modern chat application with real-time messaging, file sharing, and video calling capabilities built with WebRTC and Socket.io.",
      longDescription:
        "Developed a scalable chat application supporting real-time messaging, file uploads, emoji reactions, and video calls. Implemented features like message encryption, user presence indicators, and chat rooms.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "Node.js", "Socket.io", "WebRTC", "MongoDB", "AWS S3"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: true,
      stats: { stars: 89, forks: 23 },
    },
    {
      title: "Task Management Dashboard",
      description:
        "A collaborative project management tool with Kanban boards, time tracking, and team collaboration features.",
      longDescription:
        "Created a comprehensive project management solution with drag-and-drop Kanban boards, time tracking, team collaboration, file attachments, and detailed reporting capabilities.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Vue.js", "Express.js", "MySQL", "Redis", "Docker"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: false,
      stats: { stars: 67, forks: 18 },
    },
    {
      title: "Weather Analytics App",
      description: "A weather dashboard with historical data analysis, forecasting, and interactive visualizations.",
      longDescription:
        "Built a weather analytics platform that aggregates data from multiple APIs, provides historical analysis, and displays interactive charts and maps for weather patterns.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: false,
      stats: { stars: 43, forks: 12 },
    },
    {
      title: "AI-Powered Code Review Tool",
      description:
        "An intelligent code review assistant that uses machine learning to identify potential issues and suggest improvements.",
      longDescription:
        "Developed an AI-powered tool that analyzes code quality, identifies potential bugs, suggests optimizations, and provides automated code review comments using natural language processing.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Python", "TensorFlow", "Flask", "Docker", "GitHub API"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: false,
      stats: { stars: 156, forks: 34 },
    },
    {
      title: "Cryptocurrency Portfolio Tracker",
      description:
        "A comprehensive crypto portfolio management app with real-time price tracking and advanced analytics.",
      longDescription:
        "Created a portfolio tracking application that monitors cryptocurrency investments, provides real-time price updates, portfolio analytics, and automated trading alerts.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React Native", "Node.js", "MongoDB", "CoinGecko API", "Firebase"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: false,
      stats: { stars: 78, forks: 21 },
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
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A showcase of my recent work and personal projects that demonstrate my technical skills and creativity.
            </p>
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

          {/* Other Projects */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Other Notable Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300 group">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      {project.stats && (
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Star className="h-3 w-3" />
                          {project.stats.stars}
                        </div>
                      )}
                    </div>
                    <CardDescription className="text-sm text-muted-foreground">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" asChild>
                        <Link href={project.githubUrl}>
                          <Github className="h-3 w-3" />
                        </Link>
                      </Button>
                      <Button size="sm" asChild>
                        <Link href={project.liveUrl}>
                          <ExternalLink className="h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
