import { Globe, MessageCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

export default function Languages() {
  const languages = [
    {
      name: "ThaiLandthailand",
      level: "Native",
      proficiency: 100,
      description: "Native speaker with excellent written and verbal communication skills",
      certifications: ["Native"],
    },
    {
      name: "English",
      level: "Intermediate",
      proficiency: 50,
      description: "Proficient in understanding and using everyday language related to personal life, work, and immediate surroundings, and capable of simple, direct communication.",
      certifications: ["B1"],
    }
  ]

  const communicationSkills = [
    "Technical Documentation",
    "Presentation Skills",
    "Cross-cultural Communication",
    "Client Relations",
    "Team Meetings",
    "Code Reviews",
    "Mentoring",
    "Public Speaking",
  ]

  const getLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case "native":
        return "bg-green-500"
      case "fluent":
        return "bg-blue-500"
      case "intermediate":
        return "bg-yellow-500"
      case "beginner":
        return "bg-orange-500"
      default:
        return "bg-gray-500"
    }
  }

  const getLevelBadgeVariant = (level: string) => {
    switch (level.toLowerCase()) {
      case "native":
        return "default"
      case "fluent":
        return "secondary"
      case "intermediate":
        return "outline"
      case "beginner":
        return "outline"
      default:
        return "outline"
    }
  }

  return (
    <section id="languages" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Languages</h2>
          </div>

          {/* Language Proficiency */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-2">
              <Globe className="h-6 w-6 text-primary" />
              Language Proficiency
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {languages.map((language, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl text-foreground">{language.name}</CardTitle>
                      <Badge variant={getLevelBadgeVariant(language.level)} className="ml-2">
                        {language.level}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-foreground">Proficiency</span>
                        <span className="text-xs text-muted-foreground">{language.proficiency}%</span>
                      </div>
                      <Progress value={language.proficiency} className="h-3" />
                    </div>

                    <p className="text-muted-foreground text-sm mb-4">{language.description}</p>

                    {language.certifications.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-foreground mb-2 text-sm">Certifications:</h4>
                        <div className="flex flex-wrap gap-2">
                          {language.certifications.map((cert, certIndex) => (
                            <Badge key={certIndex} variant="outline" className="text-xs">
                              {cert}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
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
