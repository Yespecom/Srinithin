import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MapPin, Linkedin, Twitter, Instagram, Send, Clock } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Srinithin Somasundaram | Get in Touch for Collaborations & Partnerships",
  description:
    "Contact Srinithin Somasundaram for business collaborations, partnerships, speaking engagements, or to discuss your startup ideas. Based in Erode, Tamil Nadu, serving globally.",
  keywords:
    "contact Srinithin Somasundaram, business collaboration, startup consultation, Erode Tamil Nadu entrepreneur, partnership opportunities",
  openGraph: {
    title: "Contact Srinithin Somasundaram",
    description: "Get in touch for collaborations, partnerships, and business opportunities.",
    type: "website",
  },
}

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "For business inquiries and collaborations",
      value: "contact@yespstudio.com",
      href: "mailto:contact@yespstudio.com",
    },
    {
      icon: MapPin,
      title: "Location",
      description: "Based in Erode, Tamil Nadu, India",
      value: "Erode, Tamil Nadu",
      href: "#",
    },
    {
      icon: Clock,
      title: "Response Time",
      description: "Typically respond within 24-48 hours",
      value: "1-2 business days",
      href: "#",
    },
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      name: "LinkedIn",
      href: "https://linkedin.com/in/srinithin",
      color: "hover:text-blue-600",
    },
    {
      icon: Twitter,
      name: "Twitter",
      href: "https://twitter.com/srinithin",
      color: "hover:text-blue-400",
    },
    {
      icon: Instagram,
      name: "Instagram",
      href: "https://instagram.com/srinithin",
      color: "hover:text-pink-600",
    },
  ]

  const inquiryTypes = [
    "General Inquiry",
    "Business Collaboration",
    "Partnership Opportunity",
    "Speaking Engagement",
    "Media Interview",
    "Startup Consultation",
    "Investment Discussion",
    "Other",
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Let's Connect
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
            Whether you're looking to collaborate, discuss partnership opportunities, or simply want to connect about
            entrepreneurship and technology, I'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {contactMethods.map((method, index) => {
              const Icon = method.icon
              return (
                <Card key={index} className="text-center bg-card border-border hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{method.title}</h3>
                    <p className="text-muted-foreground text-sm mb-3">{method.description}</p>
                    {method.href !== "#" ? (
                      <Link
                        href={method.href}
                        className="text-primary hover:text-primary/80 font-medium transition-colors"
                      >
                        {method.value}
                      </Link>
                    ) : (
                      <span className="text-foreground font-medium">{method.value}</span>
                    )}
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="bg-card border-border">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Send a Message</h2>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-foreground">
                          First Name *
                        </Label>
                        <Input
                          id="firstName"
                          placeholder="Your first name"
                          required
                          className="bg-background border-border text-foreground"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-foreground">
                          Last Name *
                        </Label>
                        <Input
                          id="lastName"
                          placeholder="Your last name"
                          required
                          className="bg-background border-border text-foreground"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        required
                        className="bg-background border-border text-foreground"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-foreground">
                        Company/Organization
                      </Label>
                      <Input
                        id="company"
                        placeholder="Your company name"
                        className="bg-background border-border text-foreground"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="inquiryType" className="text-foreground">
                        Inquiry Type *
                      </Label>
                      <select
                        id="inquiryType"
                        required
                        className="w-full px-3 py-2 bg-background border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Select inquiry type</option>
                        {inquiryTypes.map((type, index) => (
                          <option key={index} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-foreground">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Tell me about your project, collaboration idea, or what you'd like to discuss..."
                        rows={6}
                        required
                        className="bg-background border-border text-foreground resize-none"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      I typically respond within 24-48 hours. For urgent matters, please mention it in your message.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Additional Info */}
            <div className="space-y-8">
              {/* About Section */}
              <Card className="bg-card border-border">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">Let's Discuss</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p className="text-pretty">
                      I'm always interested in connecting with fellow entrepreneurs, potential collaborators, and anyone
                      passionate about building meaningful ventures.
                    </p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground">I'm particularly interested in:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Strategic partnerships and collaborations</li>
                        <li>• Speaking at events and conferences</li>
                        <li>• Mentoring early-stage entrepreneurs</li>
                        <li>• Investment opportunities in Tamil Nadu</li>
                        <li>• Technology and SaaS discussions</li>
                        <li>• Local business transformation projects</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="bg-card border-border">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">Connect on Social</h3>
                  <p className="text-muted-foreground mb-6 text-pretty">
                    Follow my journey and get regular updates on my ventures, insights, and thoughts on
                    entrepreneurship.
                  </p>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => {
                      const Icon = social.icon
                      return (
                        <Link
                          key={index}
                          href={social.href}
                          className={`flex items-center justify-center w-12 h-12 bg-background rounded-lg border border-border text-muted-foreground transition-colors ${social.color}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Icon className="h-5 w-5" />
                        </Link>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter */}
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">Stay Updated</h3>
                  <p className="text-muted-foreground mb-6 text-pretty">
                    Subscribe to my newsletter for insights on entrepreneurship, technology trends, and updates from my
                    ventures.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 bg-background border-border text-foreground"
                    />
                    <Button className="sm:w-auto">Subscribe</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-card/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4 text-balance">Frequently Asked Questions</h2>
            <p className="text-muted-foreground text-pretty">Quick answers to common questions</p>
          </div>

          <div className="space-y-6">
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2">How quickly do you respond to inquiries?</h3>
                <p className="text-muted-foreground text-pretty">
                  I typically respond to all inquiries within 24-48 hours. For urgent matters, please mention the
                  urgency in your message subject or content.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2">Do you offer consulting services?</h3>
                <p className="text-muted-foreground text-pretty">
                  Yes, I provide strategic consulting for startups and businesses, particularly in areas of technology,
                  branding, and business development. Contact me to discuss your specific needs.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2">Are you available for speaking engagements?</h3>
                <p className="text-muted-foreground text-pretty">
                  I enjoy speaking at conferences, universities, and corporate events about entrepreneurship,
                  technology, and building successful ventures. Please reach out with event details.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2">Do you invest in startups?</h3>
                <p className="text-muted-foreground text-pretty">
                  I'm selective about investment opportunities but am particularly interested in startups based in Tamil
                  Nadu or those working on problems relevant to the Indian market. Feel free to share your pitch.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
