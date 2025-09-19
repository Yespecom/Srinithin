import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Building2, Code, Palette, Megaphone, Rss, ExternalLink, Users, Globe, Zap } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Ventures | Srinithin Somasundaram's Business Ecosystem",
  description:
    "Explore Srinithin Somasundaram's ventures: Yesp Corporation, Yesp Tech, Yesp Studio, Brandout Studio, and Feedlooply. A comprehensive ecosystem of technology, creativity, and business solutions.",
  keywords:
    "Yesp Corporation, Yesp Tech, Yesp Studio, Brandout Studio, Feedlooply, SaaS platforms, creative studio, marketing agency, content distribution",
}

export default function VenturesPage() {
  const ventures = [
    {
      name: "Yesp Corporation",
      tagline: "The Parent Ecosystem",
      description:
        "Parent company uniting tech, branding, and creative studios under one vision. Yesp Corporation serves as the strategic umbrella that enables synergy between all our ventures.",
      longDescription:
        "Yesp Corporation was founded with the vision of creating a comprehensive business ecosystem that addresses every aspect of modern digital transformation. From technology development to creative services, we provide integrated solutions that help businesses scale effectively.",
      icon: Building2,
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
      status: "Active",
      founded: "2021",
      focus: ["Strategic Planning", "Business Development", "Ecosystem Management"],
      website: "#",
      features: [
        "Unified business strategy across all ventures",
        "Integrated service delivery model",
        "Cross-venture collaboration and synergy",
        "Strategic partnerships and alliances",
      ],
    },
    {
      name: "Yesp Tech",
      tagline: "Multi-tenant SaaS Solutions",
      description:
        "Multi-tenant SaaS platforms, developer tools, and APIs that power modern businesses. Building scalable technology solutions for the next generation of digital enterprises.",
      longDescription:
        "Yesp Tech focuses on creating robust, scalable SaaS platforms that can serve multiple clients efficiently. Our developer tools and APIs are designed to accelerate digital transformation for businesses of all sizes.",
      icon: Code,
      color: "text-green-400",
      bgColor: "bg-green-400/10",
      status: "Active",
      founded: "2022",
      focus: ["SaaS Development", "API Design", "Developer Tools"],
      website: "#",
      features: [
        "Multi-tenant architecture for scalability",
        "Comprehensive API ecosystem",
        "Developer-friendly tools and documentation",
        "Enterprise-grade security and compliance",
      ],
    },
    {
      name: "Yesp Studio",
      tagline: "Creative + Product Ecosystem",
      description:
        "Creative and product ecosystem for digital-first startups. We combine design thinking with technical expertise to build products that users love.",
      longDescription:
        "Yesp Studio bridges the gap between creative vision and technical execution. We work with digital-first startups to create compelling user experiences and robust product architectures.",
      icon: Palette,
      color: "text-purple-400",
      bgColor: "bg-purple-400/10",
      status: "Active",
      founded: "2024",
      focus: ["Product Design", "User Experience", "Creative Direction"],
      website: "#",
      features: [
        "End-to-end product development",
        "User-centered design approach",
        "Rapid prototyping and iteration",
        "Brand identity and visual design",
      ],
    },
    {
      name: "Brandout Studio",
      tagline: "Marketing & Branding Agency",
      description:
        "Marketing and branding agency for local businesses in Tamil Nadu & India. Helping traditional businesses embrace digital transformation and modern branding.",
      longDescription:
        "Brandout Studio specializes in helping local businesses transition to digital-first approaches while maintaining their authentic identity. We understand the unique challenges of the Indian market.",
      icon: Megaphone,
      color: "text-orange-400",
      bgColor: "bg-orange-400/10",
      status: "Active",
      founded: "2025",
      focus: ["Digital Marketing", "Brand Strategy", "Local Business Growth"],
      website: "#",
      features: [
        "Localized marketing strategies",
        "Digital transformation consulting",
        "Brand identity development",
        "Social media and content marketing",
      ],
    },
    {
      name: "Feedlooply",
      tagline: "Next-gen Content Distribution",
      description:
        "Next-generation content distribution platform that revolutionizes how content creators and businesses reach their audiences across multiple channels.",
      longDescription:
        "Feedlooply is our ambitious project to create a unified content distribution platform that leverages AI and automation to optimize content delivery across various digital channels.",
      icon: Rss,
      color: "text-pink-400",
      bgColor: "bg-pink-400/10",
      status: "In Development",
      founded: "2025",
      focus: ["Content Distribution", "AI Optimization", "Multi-channel Publishing"],
      website: "#",
      features: [
        "AI-powered content optimization",
        "Multi-platform distribution",
        "Analytics and performance tracking",
        "Automated scheduling and publishing",
      ],
    },
  ]

  const stats = [
    { icon: Building2, label: "Active Ventures", value: "5" },
    { icon: Users, label: "Team Members", value: "25+" },
    { icon: Globe, label: "Countries Served", value: "8" },
    { icon: Zap, label: "Projects Completed", value: "100+" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">My Ventures</h1>
          <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
            A comprehensive ecosystem of companies focused on technology, creativity, and business growth. Each venture
            serves a unique purpose while contributing to our shared vision of digital transformation.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-3">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Ventures Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {ventures.map((venture, index) => {
              const Icon = venture.icon
              const isEven = index % 2 === 0

              return (
                <div
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? "lg:grid-flow-col-dense" : ""}`}
                >
                  {/* Content */}
                  <div className={`space-y-6 ${!isEven ? "lg:col-start-2" : ""}`}>
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-lg ${venture.bgColor}`}>
                        <Icon className={`h-8 w-8 ${venture.color}`} />
                      </div>
                      <div>
                        <div className="flex items-center space-x-3 mb-1">
                          <h2 className="text-2xl font-bold text-foreground">{venture.name}</h2>
                          <Badge variant={venture.status === "Active" ? "default" : "secondary"}>
                            {venture.status}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground font-medium">{venture.tagline}</p>
                      </div>
                    </div>

                    <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                      {venture.longDescription}
                    </p>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Key Focus Areas:</h4>
                        <div className="flex flex-wrap gap-2">
                          {venture.focus.map((area, i) => (
                            <Badge key={i} variant="outline">
                              {area}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {venture.features.map((feature, i) => (
                            <li key={i} className="text-muted-foreground flex items-start">
                              <span className="text-primary mr-2">•</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 pt-4">
                      <Button asChild>
                        <Link href={venture.website}>
                          Learn More
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      <div className="text-sm text-muted-foreground">Founded: {venture.founded}</div>
                    </div>
                  </div>

                  {/* Image */}
                  <div className={!isEven ? "lg:col-start-1" : ""}>
                    <Card className="overflow-hidden bg-card border-border">
                      <CardContent className="p-0">
                        <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                          <img
                            src={`/generic-placeholder-graphic.png?key=${venture.name.toLowerCase().replace(/\s+/g, "-")}`}
                            alt={`${venture.name} showcase`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">
            Interested in Collaborating?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 text-pretty">
            Whether you're looking for technology solutions, creative services, or strategic partnerships, our ecosystem
            of ventures can help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8">
              <Link href="/contact">
                Get In Touch
                <ExternalLink className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 bg-transparent">
              <Link href="/about">Learn My Story</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
