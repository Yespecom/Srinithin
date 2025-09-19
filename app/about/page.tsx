import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Target, Heart, Lightbulb, TrendingUp } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Srinithin Somasundaram | Entrepreneur Journey from Erode to Global Ventures",
  description:
    "Learn about Srinithin Somasundaram's entrepreneurial journey from Erode, Tamil Nadu to founding multiple successful ventures including Yesp Corporation, Yesp Tech, and more.",
  keywords:
    "Srinithin Somasundaram biography, entrepreneur story, Erode Tamil Nadu, startup founder journey, Yesp Corporation founder",
}

export default function AboutPage() {
  const timeline = [
    {
      year: "2018",
      title: "Early Beginnings in Erode",
      description:
        "Started my entrepreneurial journey in Erode, Tamil Nadu, focusing on understanding local business needs and digital transformation opportunities.",
      icon: MapPin,
    },
    {
      year: "2020",
      title: "First Local Projects",
      description:
        "Began working with local businesses like Golden Crunch bakery, helping them establish digital presence and improve their operations.",
      icon: Target,
    },
    {
      year: "2021",
      title: "Vision for Yesp Corporation",
      description:
        "Conceptualized the idea of creating an ecosystem of companies that could serve different aspects of business growth - from technology to branding.",
      icon: Lightbulb,
    },
    {
      year: "2022",
      title: "Founding Yesp Tech & Studio",
      description:
        "Launched Yesp Tech for SaaS platforms and developer tools, alongside Yesp Studio for creative and product development services.",
      icon: TrendingUp,
    },
    {
      year: "2023",
      title: "Expanding the Ecosystem",
      description:
        "Established Brandout Studio for marketing services and began development of Feedlooply, the next-gen content distribution platform.",
      icon: Heart,
    },
    {
      year: "2024",
      title: "Global Vision, Local Roots",
      description:
        "Continued building scalable solutions while maintaining strong connections to Tamil Nadu and supporting the local startup ecosystem.",
      icon: Calendar,
    },
  ]

  const values = [
    {
      title: "Discipline",
      description: "Consistent execution and structured approach to building sustainable businesses.",
    },
    {
      title: "Innovation",
      description: "Embracing new technologies and creative solutions to solve real-world problems.",
    },
    {
      title: "Scalability",
      description: "Building systems and processes that can grow from local to global impact.",
    },
    {
      title: "Branding",
      description: "Understanding the power of strong brand identity in creating lasting business value.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">My Journey</h1>
          <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
            From the streets of Erode, Tamil Nadu to building a global ecosystem of ventures. This is the story of
            passion, persistence, and the power of thinking beyond boundaries.
          </p>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground text-balance">Early Life in Erode, Tamil Nadu</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p className="text-pretty">
                  Born and raised in Erode, Tamil Nadu, I grew up witnessing the entrepreneurial spirit that runs deep
                  in our region. From textile businesses to small-scale industries, Erode has always been a hub of
                  commerce and innovation.
                </p>
                <p className="text-pretty">
                  My early exposure to local businesses and their challenges sparked my interest in understanding how
                  technology could bridge the gap between traditional business practices and modern digital solutions.
                </p>
                <p className="text-pretty">
                  The values of hard work, community support, and sustainable growth that I learned in Erode continue to
                  influence my approach to building businesses today.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="w-full h-96 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <img
                  src="/erode-tamil-nadu-cityscape-traditional-and-modern.jpg"
                  alt="Erode, Tamil Nadu"
                  className="w-full h-full rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
              Entrepreneurial Timeline
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Key milestones in my journey from local projects to global ventures
            </p>
          </div>

          <div className="space-y-8">
            {timeline.map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-2">
                      <Badge variant="secondary" className="text-sm font-medium">
                        {item.year}
                      </Badge>
                      <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-pretty">{item.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">Core Values</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              The principles that guide my approach to business and life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-pretty">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">Vision for the Future</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p className="text-pretty">
              My vision extends beyond just building successful companies. I want to create an ecosystem where
              technology, creativity, and business acumen come together to solve meaningful problems.
            </p>
            <p className="text-pretty">
              I believe Tamil Nadu, and India as a whole, has immense potential to become a global leader in innovation.
              Through my ventures and thought leadership, I aim to contribute to this transformation while staying true
              to my roots.
            </p>
            <p className="text-pretty">
              The next decade will be crucial for SaaS, branding, and AI technologies. I'm committed to being at the
              forefront of these changes, building solutions that can scale globally while creating opportunities for
              local talent and businesses.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
