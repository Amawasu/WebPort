import { Calendar, MapPin, Award, BookOpen } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Education() {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      school: "Stanford University",
      location: "Stanford, CA",
      period: "2016 - 2018",
      gpa: "3.9/4.0",
      description:
        "Specialized in Machine Learning and Distributed Systems. Completed thesis on 'Scalable Real-time Data Processing in Cloud Environments'.",
      coursework: [
        "Advanced Algorithms",
        "Machine Learning",
        "Distributed Systems",
        "Database Systems",
        "Computer Networks",
        "Software Engineering",
      ],
      achievements: [
        "Dean's List for 4 consecutive semesters",
        "Graduate Research Assistant",
        "Published 2 papers in peer-reviewed conferences",
        "Teaching Assistant for CS106A Programming Methodology",
      ],
    },
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of California, Berkeley",
      location: "Berkeley, CA",
      period: "2012 - 2016",
      gpa: "3.8/4.0",
      description:
        "Graduated Magna Cum Laude with a focus on Software Engineering and Web Development. Active member of the Computer Science Student Association.",
      coursework: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "Web Development",
        "Database Design",
        "Computer Architecture",
        "Software Engineering",
      ],
      achievements: [
        "Magna Cum Laude graduate",
        "President of Computer Science Student Association",
        "Winner of Annual Hackathon 2015",
        "Undergraduate Research Program participant",
      ],
    },
  ]

  const onlineCourses = [
    {
      title: "AWS Solutions Architect Professional",
      provider: "Amazon Web Services",
      completed: "2023",
      description: "Advanced cloud architecture and AWS services",
    },
    {
      title: "Advanced React and Redux",
      provider: "Udemy",
      completed: "2022",
      description: "Modern React patterns and state management",
    },
    {
      title: "Machine Learning Specialization",
      provider: "Coursera (Stanford)",
      completed: "2021",
      description: "Comprehensive ML algorithms and applications",
    },
    {
      title: "Docker and Kubernetes",
      provider: "Linux Academy",
      completed: "2021",
      description: "Container orchestration and deployment",
    },
  ]

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Education</h2>
            <p className="text-lg text-muted-foreground">My academic background and continuous learning journey</p>
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
                        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                          <BookOpen className="h-4 w-4 text-primary" />
                          Relevant Coursework:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.coursework.map((course, courseIndex) => (
                            <Badge key={courseIndex} variant="outline" className="text-xs">
                              {course}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                          <Award className="h-4 w-4 text-primary" />
                          Achievements:
                        </h4>
                        <ul className="space-y-1">
                          {edu.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className="text-primary mt-1">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Online Courses & Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-2">
              <Award className="h-6 w-6 text-primary" />
              Continuous Learning
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {onlineCourses.map((course, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg text-foreground">{course.title}</CardTitle>
                    <CardDescription className="text-primary font-medium">{course.provider}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-3">{course.description}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>Completed: {course.completed}</span>
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
