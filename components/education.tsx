import { Calendar, MapPin, Award, BookOpen } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Education() {
  const education = [
    {
      degree: "Bachelor of Science (Information Technology)",
      school: "Bangkok University",
      location: "Khlong Luang, Thailand",
      period: "2023 - 2025",
      gpa: "3.06/4.0",
      description:
        "The Information Technology program develops both technical and management skills through hands-on learning and modern tools, preparing students for careers in IT and tech entrepreneurship.",
      coursework: [
        "Computer Graphics Application for Info.",
        "Systems Analysis and Design.",
        "Database Management Systems.",
        "Internet of Things and Applications.",
        "UX/UI Design.",
        "Web Programming",
        "Mobile Application Development.",
      ],
    },
    {
      degree: "Makudmuang Rajchawitthayalai School",
      school: "Makutmuang Rajchawitthayalai School",
      location: "Rayong",
      period: "2020 - 2023",
      gpa: "NA",
      description:
        "The institution is committed to providing education of international quality in the domains of mathematics, science, technology, foreign languages, and environmental studies. Emphasis is placed on cultivating moral and ethical values, alongside promoting a sufficiency economy lifestyle, to adequately prepare students for the demands of the Eastern Economic Corridor (EEC).",

    },
  ]



  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Education</h2>
          </div>

          {/* Formal Education */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-primary" />
              Formal Education
            </h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-xl text-foreground">{edu.degree}</CardTitle>
                        <CardDescription className="text-lg font-medium text-primary mt-1">
                          {edu.school}
                        </CardDescription>
                      </div>
                      <div className="flex flex-col sm:items-end gap-2">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          {edu.period}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          {edu.location}
                        </div>
                        <Badge variant="secondary" className="w-fit">
                          GPA: {edu.gpa}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">{edu.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <div className="flex flex-wrap gap-2">

                        </div>
                      </div>
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
