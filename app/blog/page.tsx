import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog | Srinithin Somasundaram",
  description:
    "Read Srinithin Somasundaram's thoughts on entrepreneurship, technology, SaaS, branding, and the future of startups in India. Insights from building multiple successful ventures.",
  keywords:
    "entrepreneurship blog, startup insights, SaaS development, branding strategies, Tamil Nadu startups, India digital economy, technology trends",
}

export default function BlogPage() {
  const featuredPost = {
    title: "Why Tamil Nadu is Ready to Become India's Next Startup Hub",
    excerpt:
      "Exploring the unique advantages that make Tamil Nadu an ideal location for the next wave of Indian startups, from infrastructure to talent pool.",
    category: "Local to Global",
    readTime: "8 min read",
    publishDate: "2024-12-15",
    slug: "tamil-nadu-startup-hub",
    image: "/placeholder.svg?key=featured-blog",
  }

  const blogPosts = [
    {
      title: "The Discipline of Building Multiple Ventures Simultaneously",
      excerpt:
        "How structured thinking and disciplined execution enable entrepreneurs to manage multiple businesses without losing focus.",
      category: "Founder Insights",
      readTime: "6 min read",
      publishDate: "2024-12-10",
      slug: "discipline-multiple-ventures",
      image: "/placeholder.svg?key=blog1",
    },
    {
      title: "From Yesp Tech to Yesp Studio: Building an Integrated Ecosystem",
      excerpt:
        "The story behind creating synergistic businesses that complement each other while serving different market needs.",
      category: "Yesp Stories",
      readTime: "7 min read",
      publishDate: "2024-12-05",
      slug: "building-integrated-ecosystem",
      image: "/placeholder.svg?key=blog2",
    },
    {
      title: "The Future of Multi-tenant SaaS: Lessons from Building Yesp Tech",
      excerpt:
        "Technical and business insights from developing scalable SaaS platforms that serve multiple clients efficiently.",
      category: "Future Thinking",
      readTime: "9 min read",
      publishDate: "2024-11-28",
      slug: "future-multi-tenant-saas",
      image: "/placeholder.svg?key=blog3",
    },
    {
      title: "Personal Branding for Entrepreneurs: Beyond Social Media",
      excerpt: "Why authentic personal branding is crucial for entrepreneurs and how to build it systematically.",
      category: "Founder Insights",
      readTime: "5 min read",
      publishDate: "2024-11-20",
      slug: "personal-branding-entrepreneurs",
      image: "/placeholder.svg?key=blog4",
    },
    {
      title: "Supporting Local Businesses: The Golden Crunch Story",
      excerpt:
        "How helping a local bakery in Erode taught me valuable lessons about digital transformation for traditional businesses.",
      category: "Local to Global",
      readTime: "4 min read",
      publishDate: "2024-11-15",
      slug: "golden-crunch-story",
      image: "/placeholder.svg?key=blog5",
    },
    {
      title: "AI and Content Distribution: The Vision Behind Feedlooply",
      excerpt:
        "Exploring how artificial intelligence will revolutionize content distribution and what we're building at Feedlooply.",
      category: "Future Thinking",
      readTime: "8 min read",
      publishDate: "2024-11-08",
      slug: "ai-content-distribution-feedlooply",
      image: "/placeholder.svg?key=blog6",
    },
  ]

  const categories = [
    { name: "All Posts", count: 20, active: true },
    { name: "Founder Insights", count: 8, active: false },
    { name: "Yesp Stories", count: 5, active: false },
    { name: "Local to Global", count: 4, active: false },
    { name: "Future Thinking", count: 3, active: false },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Insights & Stories
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
            Thoughts on entrepreneurship, technology, and building ventures that matter. Sharing lessons learned from
            the journey of creating multiple successful businesses.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">Featured Article</h2>
            <p className="text-muted-foreground">Latest insights from my entrepreneurial journey</p>
          </div>

          <Card className="overflow-hidden bg-card border-border hover:shadow-lg transition-shadow duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="aspect-video lg:aspect-square bg-gradient-to-br from-primary/10 to-accent/10">
                <img
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-8 flex flex-col justify-center">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <Badge variant="secondary">{featuredPost.category}</Badge>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>
                        {new Date(featuredPost.publishDate).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-foreground leading-tight text-balance">
                    {featuredPost.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed text-pretty">{featuredPost.excerpt}</p>

                  <Button asChild className="w-fit">
                    <Link href={`/blog/${featuredPost.slug}`}>
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Categories & Posts */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Categories Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <h3 className="text-lg font-semibold text-foreground mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors duration-200 ${
                        category.active
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:text-foreground hover:bg-accent"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{category.name}</span>
                        <span className="text-sm">{category.count}</span>
                      </div>
                    </button>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-card rounded-lg border border-border">
                  <h4 className="font-semibold text-foreground mb-2">Newsletter</h4>
                  <p className="text-sm text-muted-foreground mb-3">Get my latest insights delivered to your inbox.</p>
                  <Button size="sm" className="w-full">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blogPosts.map((post, index) => (
                  <Card
                    key={index}
                    className="group overflow-hidden bg-card border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                          <Badge variant="outline">{post.category}</Badge>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-3 w-3" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>

                        <h3 className="text-lg font-semibold text-foreground leading-tight group-hover:text-primary transition-colors text-balance">
                          {post.title}
                        </h3>

                        <p className="text-muted-foreground text-sm leading-relaxed text-pretty">{post.excerpt}</p>

                        <div className="flex items-center justify-between pt-2">
                          <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                            <Calendar className="h-3 w-3" />
                            <span>
                              {new Date(post.publishDate).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                              })}
                            </span>
                          </div>
                          <Link
                            href={`/blog/${post.slug}`}
                            className="text-primary hover:text-primary/80 text-sm font-medium transition-colors"
                          >
                            Read More →
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <Button variant="outline" size="lg">
                  Load More Articles
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">
            Stay Updated with My Journey
          </h2>
          <p className="text-lg text-muted-foreground mb-8 text-pretty">
            Subscribe to receive my latest insights on entrepreneurship, technology, and building successful ventures.
            No spam, just valuable content delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button size="lg" className="px-8">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
