import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, ArrowLeft, Share2, Bookmark, User } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

// This would typically come from a CMS or database
const getBlogPost = (slug: string) => {
  const posts = {
    "tamil-nadu-startup-hub": {
      title: "Why Tamil Nadu is Ready to Become India's Next Startup Hub",
      excerpt:
        "Exploring the unique advantages that make Tamil Nadu an ideal location for the next wave of Indian startups, from infrastructure to talent pool.",
      content: `
        <p>Tamil Nadu has all the ingredients necessary to become India's next major startup hub. Having built multiple ventures from this region, I've witnessed firsthand the unique advantages that our state offers to entrepreneurs and startups.</p>
        
        <h2>Infrastructure and Connectivity</h2>
        <p>The state boasts excellent infrastructure with well-connected cities, reliable power supply, and robust internet connectivity. Chennai, Coimbatore, and other major cities offer world-class facilities that rival those in Bangalore and Hyderabad.</p>
        
        <h2>Talent Pool</h2>
        <p>Tamil Nadu is home to some of India's premier educational institutions, producing thousands of skilled engineers, designers, and business professionals every year. The talent pool is not just large but also diverse and highly skilled.</p>
        
        <h2>Government Support</h2>
        <p>The state government has been proactive in supporting startups through various initiatives, policy reforms, and infrastructure development. This supportive ecosystem is crucial for early-stage companies.</p>
        
        <h2>Cost Advantage</h2>
        <p>Compared to traditional startup hubs, Tamil Nadu offers significant cost advantages in terms of office space, talent acquisition, and operational expenses, allowing startups to achieve better unit economics.</p>
        
        <h2>Cultural Entrepreneurship</h2>
        <p>The entrepreneurial spirit runs deep in Tamil Nadu's culture. From traditional businesses to modern tech startups, the state has a rich history of successful entrepreneurs who understand both local and global markets.</p>
        
        <p>As someone who has chosen to build my ventures from Erode, I can confidently say that Tamil Nadu provides everything needed to build world-class companies. The future of Indian startups is not limited to Bangalore or Mumbai – it's distributed across states like Tamil Nadu that offer the right combination of talent, infrastructure, and opportunity.</p>
      `,
      category: "Local to Global",
      readTime: "8 min read",
      publishDate: "2024-12-15",
      author: "Yesp Knowledge Base",
      image: "/placeholder.svg?key=featured-blog",
    },
  }

  return posts[slug as keyof typeof posts] || null
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = [
    {
      title: "The Discipline of Building Multiple Ventures Simultaneously",
      slug: "discipline-multiple-ventures",
      category: "Founder Insights",
      readTime: "6 min read",
    },
    {
      title: "Supporting Local Businesses: The Golden Crunch Story",
      slug: "golden-crunch-story",
      category: "Local to Global",
      readTime: "4 min read",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Article Header */}
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-8">
            <Button asChild variant="ghost" size="sm">
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
          </div>

          {/* Article Meta */}
          <div className="space-y-6 mb-8">
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <Badge variant="secondary">{post.category}</Badge>
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>
                  {new Date(post.publishDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight text-balance">{post.title}</h1>

            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">{post.excerpt}</p>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <User className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-medium text-foreground">{post.author}</div>
                 
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
                <Button variant="outline" size="sm">
                  <Bookmark className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-12">
            <div className="aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
              <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Article Content */}
          <div
            className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-p:leading-relaxed prose-strong:text-foreground"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Article Footer */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex items-center justify-between">
              <div className="text-sm text-muted-foreground">
                Published on{" "}
                {new Date(post.publishDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share Article
                </Button>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-12 bg-card/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedPosts.map((relatedPost, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border-border"
              >
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                      <Badge variant="outline">{relatedPost.category}</Badge>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{relatedPost.readTime}</span>
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold text-foreground leading-tight group-hover:text-primary transition-colors text-balance">
                      <Link href={`/blog/${relatedPost.slug}`}>{relatedPost.title}</Link>
                    </h3>

                    <Link
                      href={`/blog/${relatedPost.slug}`}
                      className="text-primary hover:text-primary/80 text-sm font-medium transition-colors inline-block"
                    >
                      Read More →
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
