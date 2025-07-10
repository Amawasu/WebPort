import { Code, Database, Cloud, Wrench, Smartphone, Brain } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="h-6 w-6" />,
      color: "text-blue-600",
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Vue.js", level: 85 },
        { name: "HTML5/CSS3", level: 95 },
        { name: "Tailwind CSS", level: 90 },
        { name: "JavaScript", level: 95 },
      ],
    },
    {
      title: "Backend Development",
      icon: <Database className="h-6 w-6" />,
      color: "text-green-600",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Python", level: 85 },
        { name: "Express.js", level: 88 },
        { name: "Django/FastAPI", level: 80 },
        { name: "GraphQL", level: 75 },
        { name: "REST APIs", level: 95 },
      ],
    },
    {
      title: "Database & Storage",
      icon: <Database className="h-6 w-6" />,
      color: "text-purple-600",
      skills: [
        { name: "PostgreSQL", level: 90 },
        { name: "MongoDB", level: 85 },
        { name: "Redis", level: 80 },
        { name: "MySQL", level: 85 },
        { name: "Firebase", level: 75 },
        { name: "Supabase", level: 80 },
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="h-6 w-6" />,
      color: "text-orange-600",
      skills: [
        { name: "AWS", level: 85 },
        { name: "Docker", level: 80 },
        { name: "Kubernetes", level: 70 },
        { name: "CI/CD", level: 85 },
        { name: "Vercel", level: 90 },
        { name: "GitHub Actions", level: 80 },
      ],
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="h-6 w-6" />,
      color: "text-pink-600",
      skills: [
        { name: "React Native", level: 80 },
        { name: "Flutter", level: 70 },
        { name: "Expo", level: 85 },
        { name: "iOS Development", level: 65 },
        { name: "Android Development", level: 65 },
      ],
    },
    {
      title: "Tools & Others",
      icon: <Wrench className="h-6 w-6" />,
      color: "text-gray-600",
      skills: [
        { name: "Git/GitHub", level: 95 },
        { name: "VS Code", level: 95 },
        { name: "Figma", level: 80 },
        { name: "Postman", level: 90 },
        { name: "Jira", level: 85 },
        { name: "Slack", level: 90 },
      ],
    },
  ]

  const softSkills = [
    "Team Leadership",
    "Project Management",
    "Problem Solving",
    "Communication",
    "Mentoring",
    "Agile/Scrum",
    "Code Review",
    "Technical Writing",
    "Public Speaking",
    "Cross-functional Collaboration",
  ]

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Skills & Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A comprehensive overview of my technical skills and proficiency levels across various technologies and
              tools.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {skillCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <div className={`${category.color}`}>{category.icon}</div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-foreground">{skill.name}</span>
                          <span className="text-xs text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Soft Skills */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Brain className="h-6 w-6 text-primary" />
                  Soft Skills & Leadership
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {softSkills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="text-sm py-2 px-3">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
