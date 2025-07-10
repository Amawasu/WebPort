import { Calendar, MapPin } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Experience() {
  const experiences = [
    {
      title: "Senior Full-Stack Developer",
      company: "TechFlow Solutions",
      location: "San Francisco, CA",
      period: "2022 - Present",
      type: "Full-time",
      description:
        "Lead a team of 6 developers in building scalable web applications for enterprise clients. Architected microservices infrastructure serving 500K+ daily active users.",
      achievements: [
        "Reduced application load time by 45% through performance optimization",
        "Led migration from monolith to microservices architecture",
        "Implemented CI/CD pipeline reducing deployment time by 70%",
        "Mentored 4 junior developers and conducted technical interviews",
      ],
      technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker", "PostgreSQL", "Redis"],
    },
    {
      title: "Full-Stack Developer",
      company: "InnovateLab",
      location: "Austin, TX",
      period: "2020 - 2022",
      type: "Full-time",
      description:
        "Developed and maintained multiple client projects using modern web technologies. Collaborated with cross-functional teams to deliver high-quality software solutions.",
      achievements: [
        "Built 12+ client projects from conception to deployment",
        "Implemented real-time features using WebSocket and Socket.io",
        "Reduced bug reports by 60% through comprehensive testing strategies",
        "Established coding standards and best practices for the team",
      ],
      technologies: ["Vue.js", "Python", "Django", "MySQL", "MongoDB", "AWS", "Git"],
    },
    {
      title: "Frontend Developer",
      company: "Digital Craft Agency",
      location: "Remote",
      period: "2019 - 2020",
      type: "Contract",
      description:
        "Specialized in creating responsive and interactive user interfaces for various client projects. Worked closely with designers to implement pixel-perfect designs.",
      achievements: [
        "Delivered 25+ responsive websites and web applications",
        "Improved page load speed by 40% through optimization techniques",
        "Created reusable component library used across multiple projects",
        "Collaborated with international teams across different time zones",
      ],
      technologies: ["JavaScript", "React", "SASS", "Webpack", "Figma", "Adobe XD"],
    },
    {
      title: "Junior Web Developer",
      company: "StartupHub",
      location: "San Francisco, CA",
      period: "2018 - 2019",
      type: "Full-time",
      description:
        "Started my professional journey as a junior developer, focusing on frontend development and learning full-stack technologies.",
      achievements: [
        "Contributed to 8+ web applications and landing pages",
        "Learned and implemented modern JavaScript frameworks",
        "Participated in agile development processes",
        "Received 'Rising Star' award for exceptional performance",
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap", "PHP"],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Work Experience</h2>
            <p className="text-lg text-muted-foreground">My professional journey and key achievements</p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl text-foreground">{exp.title}</CardTitle>
                      <CardDescription className="text-lg font-medium text-primary mt-1">{exp.company}</CardDescription>
                    </div>
                    <div className="flex flex-col sm:items-end gap-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                      <Badge variant="secondary">{exp.type}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{exp.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-2 text-muted-foreground">
                          <span className="text-primary mt-1.5">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
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
