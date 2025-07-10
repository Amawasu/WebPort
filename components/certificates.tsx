import { Award, ExternalLink, Calendar, CheckCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function Certificates() {
  const certificates = [
    {
      title: "AWS Solutions Architect Professional",
      issuer: "Amazon Web Services",
      issueDate: "2023",
      expiryDate: "2026",
      credentialId: "AWS-SAP-2023-001234",
      description:
        "Advanced certification demonstrating expertise in designing distributed applications and systems on AWS platform.",
      image: "/placeholder.svg?height=200&width=300",
      verificationUrl: "https://aws.amazon.com/verification",
      skills: ["Cloud Architecture", "AWS Services", "Security", "Cost Optimization"],
      status: "Active",
    },
    {
      title: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      issueDate: "2023",
      expiryDate: "2025",
      credentialId: "GCP-PD-2023-567890",
      description:
        "Professional certification for designing, building, and deploying applications on Google Cloud Platform.",
      image: "/placeholder.svg?height=200&width=300",
      verificationUrl: "https://cloud.google.com/certification",
      skills: ["GCP Services", "Kubernetes", "Cloud Functions", "BigQuery"],
      status: "Active",
    },
    {
      title: "Certified Kubernetes Administrator (CKA)",
      issuer: "Cloud Native Computing Foundation",
      issueDate: "2022",
      expiryDate: "2025",
      credentialId: "CKA-2022-112233",
      description: "Hands-on certification demonstrating skills in Kubernetes administration and cluster management.",
      image: "/placeholder.svg?height=200&width=300",
      verificationUrl: "https://cncf.io/certification/verify",
      skills: ["Kubernetes", "Container Orchestration", "Cluster Management", "Troubleshooting"],
      status: "Active",
    },
    {
      title: "MongoDB Certified Developer",
      issuer: "MongoDB Inc.",
      issueDate: "2022",
      expiryDate: "2024",
      credentialId: "MDB-DEV-2022-445566",
      description: "Certification demonstrating proficiency in MongoDB database development and administration.",
      image: "/placeholder.svg?height=200&width=300",
      verificationUrl: "https://university.mongodb.com/verify",
      skills: ["MongoDB", "NoSQL", "Database Design", "Aggregation Framework"],
      status: "Active",
    },
    {
      title: "React Developer Certification",
      issuer: "Meta (Facebook)",
      issueDate: "2021",
      expiryDate: "2024",
      credentialId: "META-REACT-2021-778899",
      description: "Professional certification in React development covering advanced concepts and best practices.",
      image: "/placeholder.svg?height=200&width=300",
      verificationUrl: "https://developers.facebook.com/certification",
      skills: ["React", "JavaScript", "Frontend Development", "State Management"],
      status: "Active",
    },
    {
      title: "Scrum Master Certified (SMC)",
      issuer: "Scrum Alliance",
      issueDate: "2021",
      expiryDate: "2023",
      credentialId: "SA-SMC-2021-334455",
      description: "Certification in Scrum methodology and agile project management practices.",
      image: "/placeholder.svg?height=200&width=300",
      verificationUrl: "https://scrumalliance.org/verify",
      skills: ["Scrum", "Agile Methodology", "Team Leadership", "Project Management"],
      status: "Expired",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "active":
        return "bg-green-500"
      case "expired":
        return "bg-red-500"
      case "pending":
        return "bg-yellow-500"
      default:
        return "bg-gray-500"
    }
  }

  const getStatusVariant = (status: string) => {
    switch (status.toLowerCase()) {
      case "active":
        return "default"
      case "expired":
        return "destructive"
      case "pending":
        return "secondary"
      default:
        return "outline"
    }
  }

  const activeCertificates = certificates.filter((cert) => cert.status === "Active")
  const expiredCertificates = certificates.filter((cert) => cert.status === "Expired")

  return (
    <section id="certificates" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Certifications & Credentials</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Professional certifications that validate my expertise and commitment to continuous learning in the
              ever-evolving tech landscape.
            </p>
          </div>

          {/* Active Certifications */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-2">
              <CheckCircle className="h-6 w-6 text-green-600" />
              Active Certifications ({activeCertificates.length})
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activeCertificates.map((cert, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="relative h-40 overflow-hidden bg-gradient-to-br from-primary/10 to-purple-600/10">
                    <Image
                      src={cert.image || "/placeholder.svg"}
                      alt={cert.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3">
                      <Badge variant={getStatusVariant(cert.status)} className="text-xs">
                        {cert.status}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors">
                      {cert.title}
                    </CardTitle>
                    <CardDescription className="text-primary font-medium">{cert.issuer}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4">{cert.description}</p>

                    <div className="space-y-3 mb-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>
                          Issued: {cert.issueDate} | Expires: {cert.expiryDate}
                        </span>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        <span className="font-medium">Credential ID:</span> {cert.credentialId}
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-foreground mb-2 text-sm">Skills Validated:</h4>
                      <div className="flex flex-wrap gap-1">
                        {cert.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button variant="outline" size="sm" className="w-full bg-transparent" asChild>
                      <Link href={cert.verificationUrl} className="flex items-center gap-2">
                        <ExternalLink className="h-3 w-3" />
                        Verify Certificate
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Expired/Previous Certifications */}
          {expiredCertificates.length > 0 && (
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-2">
                <Award className="h-6 w-6 text-muted-foreground" />
                Previous Certifications ({expiredCertificates.length})
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {expiredCertificates.map((cert, index) => (
                  <Card key={index} className="opacity-75 hover:opacity-100 transition-opacity duration-300">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-lg text-foreground">{cert.title}</CardTitle>
                          <CardDescription className="text-muted-foreground">{cert.issuer}</CardDescription>
                        </div>
                        <Badge variant={getStatusVariant(cert.status)} className="text-xs">
                          {cert.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm mb-3">{cert.description}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <Calendar className="h-4 w-4" />
                        <span>
                          {cert.issueDate} - {cert.expiryDate}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {cert.skills.slice(0, 3).map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                        {cert.skills.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{cert.skills.length - 3}
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Certification Stats */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Award className="h-6 w-6 text-primary" />
                  Certification Journey
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">{activeCertificates.length}</div>
                    <div className="text-muted-foreground">Active Certifications</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">{certificates.length}</div>
                    <div className="text-muted-foreground">Total Certifications</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">6+</div>
                    <div className="text-muted-foreground">Years of Learning</div>
                  </div>
                </div>
                <p className="text-muted-foreground text-center">
                  I believe in continuous learning and staying updated with the latest technologies. These
                  certifications represent my commitment to professional growth and expertise validation in key areas of
                  software development and cloud technologies.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
