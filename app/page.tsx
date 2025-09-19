"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Head from "next/head"
import {
  Rocket,
  Database,
  Paintbrush,
  BellDot as Bullhorn,
  Globe,
  ExternalLink,
  MapPin,
  Calendar,
  Users,
  Twitter,
  Linkedin,
  Instagram,
  ArrowLeft,
  X,
} from "lucide-react"
import { useState } from "react"

export default function WikipediaPage() {
  const [selectedBlog, setSelectedBlog] = useState<number | null>(null)

  const ventures = [
    {
      name: "Yesp Corporation",
      description: "Parent company uniting tech, branding, and creative studios.",
      icon: Rocket,
      founded: "2021",
    },
    {
      name: "Yesp Tech",
      description: "SaaS platforms, developer tools, APIs.",
      icon: Database,
      founded: "2021",
    },
    {
      name: "Yesp Studio",
      description: " Product ecosystem for digital-first startups.",
      icon: Paintbrush,
      founded: "2024",
    },
    {
      name: "Brandout Studio",
      description: "Marketing and branding agency for local businesses in Tamil Nadu & India.",
      icon: Bullhorn,
      founded: "2025",
    },
    {
      name: "Feedlooply",
      description: "Next-gen feedback platform.",
      icon: Globe,
      founded: "2025",
    },
  ]

  const blogPosts = [
    {
      title: "Building Scalable SaaS Platforms in India",
      date: "March 15, 2025",
      excerpt: "Insights on creating multi-tenant architectures for the Indian market.",
      content: `
        <p>The Indian SaaS market has experienced unprecedented growth, with companies like Zoho, Freshworks, and others leading the charge. However, building scalable SaaS platforms specifically for the Indian market requires understanding unique challenges and opportunities.</p>
        
        <h3>Understanding the Indian Market</h3>
        <p>India's diverse business landscape presents both opportunities and challenges. From small local businesses to large enterprises, the needs vary significantly. At Yesp Tech, we've learned that successful SaaS platforms must be:</p>
        
        <ul>
          <li><strong>Cost-effective:</strong> Indian businesses are price-sensitive and need solutions that provide clear ROI</li>
          <li><strong>Localized:</strong> Support for multiple languages, local payment methods, and compliance requirements</li>
          <li><strong>Scalable:</strong> Ability to grow from serving small businesses to enterprise clients</li>
          <li><strong>Mobile-first:</strong> Many Indian users access software primarily through mobile devices</li>
        </ul>
        
        <h3>Technical Architecture Considerations</h3>
        <p>Building multi-tenant architectures requires careful planning. We've implemented several key strategies:</p>
        
        <p><strong>Database Design:</strong> We use a hybrid approach combining shared databases with tenant isolation for sensitive data. This provides cost efficiency while maintaining security.</p>
        
        <p><strong>Performance Optimization:</strong> Given India's varied internet infrastructure, we focus heavily on performance optimization, including CDN usage and efficient caching strategies.</p>
        
        <p><strong>Compliance and Security:</strong> With regulations like the Digital Personal Data Protection Act, building compliance into the architecture from day one is crucial.</p>
        
        <h3>Lessons from Yesp Tech</h3>
        <p>Our journey building developer tools and APIs for the Indian market has taught us valuable lessons. The key is to start simple, understand your users deeply, and iterate based on real feedback from the market.</p>
        
        <p>The future of Indian SaaS is bright, but success requires understanding both global best practices and local nuances. Companies that can bridge this gap will find tremendous opportunities in this growing market.</p>
      `,
      image: "/srinithin-podcast.png",
    },
    {
      title: "The Future of Tamil Nadu's Startup Ecosystem",
      date: "February 28, 2025",
      excerpt: "How regional innovation hubs can compete globally.",
      content: `
        <p>Tamil Nadu has emerged as one of India's most promising startup ecosystems, with Chennai often called the "Detroit of India" for its automotive industry and now evolving into a major tech hub. But what does the future hold for startups in this southern state?</p>
        
        <h3>Current State of the Ecosystem</h3>
        <p>Tamil Nadu's startup ecosystem is built on strong foundations:</p>
        
        <ul>
          <li><strong>Educational Infrastructure:</strong> World-class institutions like IIT Madras, Anna University, and numerous engineering colleges</li>
          <li><strong>Industrial Base:</strong> Strong manufacturing and automotive sectors providing B2B opportunities</li>
          <li><strong>Government Support:</strong> Progressive policies and startup-friendly initiatives</li>
          <li><strong>Cultural Factors:</strong> Strong entrepreneurial spirit and family business traditions</li>
        </ul>
        
        <h3>Emerging Opportunities</h3>
        <p>Several sectors show tremendous potential:</p>
        
        <p><strong>AgriTech:</strong> With Tamil Nadu being an agricultural state, there's huge potential for technology solutions in farming, supply chain, and food processing.</p>
        
        <p><strong>HealthTech:</strong> The state's strong healthcare infrastructure creates opportunities for digital health solutions.</p>
        
        <p><strong>FinTech:</strong> Growing financial inclusion needs, especially in rural areas, present opportunities for innovative financial products.</p>
        
        <h3>Challenges and Solutions</h3>
        <p>Despite the potential, several challenges need addressing:</p>
        
        <p><strong>Talent Retention:</strong> Many talented individuals migrate to Bangalore or other metros. We need to create compelling reasons for them to stay and build in Tamil Nadu.</p>
        
        <p><strong>Access to Capital:</strong> While improving, access to early-stage funding remains a challenge. More local angel investors and VCs are needed.</p>
        
        <p><strong>Market Access:</strong> Startups need better connections to national and international markets.</p>
        
        <h3>The Path Forward</h3>
        <p>At Yesp Corporation, we're committed to contributing to this ecosystem. By building successful companies from Tamil Nadu and supporting other entrepreneurs, we can create a virtuous cycle of growth and innovation.</p>
        
        <p>The future is bright for Tamil Nadu's startup ecosystem. With the right support, focus, and execution, we can build globally competitive companies right here in our home state.</p>
      `,
      image: "/srinithin-portrait.jpeg",
    },
    {
      title: "From Local Business to Global Platform",
      date: "January 20, 2025",
      excerpt: "Lessons learned from scaling Brandout Studio across India.",
      content: `
        <p>When we started Brandout Studio in 2022, our goal was simple: help local businesses in Tamil Nadu build better brands and reach more customers. Today, we serve clients across India and have learned valuable lessons about scaling a service business.</p>
        
        <h3>Starting Local, Thinking Global</h3>
        <p>Our journey began with a focus on understanding the unique needs of Tamil Nadu businesses. We realized that many local businesses had great products and services but lacked the branding and marketing expertise to compete effectively.</p>
        
        <p>Key insights from our early days:</p>
        <ul>
          <li><strong>Trust is Everything:</strong> Local businesses value relationships and trust above everything else</li>
          <li><strong>Budget Consciousness:</strong> Solutions need to be cost-effective and show clear ROI</li>
          <li><strong>Cultural Sensitivity:</strong> Marketing messages must resonate with local culture and values</li>
          <li><strong>Digital Adoption:</strong> Many businesses needed education about digital marketing benefits</li>
        </ul>
        
        <h3>Scaling Challenges</h3>
        <p>As we expanded beyond Tamil Nadu, we faced several challenges:</p>
        
        <p><strong>Cultural Adaptation:</strong> What worked in Tamil Nadu didn't always work in other states. We had to adapt our approach for different regional markets.</p>
        
        <p><strong>Quality Control:</strong> Maintaining service quality while scaling required building robust processes and training programs.</p>
        
        <p><strong>Team Building:</strong> Finding and training talent who understood both branding principles and local market nuances was challenging.</p>
        
        <h3>Technology as an Enabler</h3>
        <p>Technology played a crucial role in our scaling journey:</p>
        
        <p><strong>Process Automation:</strong> We built internal tools to streamline client onboarding, project management, and delivery.</p>
        
        <p><strong>Data-Driven Decisions:</strong> Analytics helped us understand what worked across different markets and client segments.</p>
        
        <p><strong>Remote Collaboration:</strong> Cloud-based tools enabled us to work with clients and team members across India effectively.</p>
        
        <h3>Key Learnings</h3>
        <p>Our scaling journey taught us several important lessons:</p>
        
        <p>1. <strong>Start with Excellence:</strong> Perfect your service in one market before expanding</p>
        <p>2. <strong>Build Systems Early:</strong> Invest in processes and technology from the beginning</p>
        <p>3. <strong>Hire for Culture:</strong> Skills can be taught, but cultural fit is crucial</p>
        <p>4. <strong>Listen to Customers:</strong> Each market teaches you something new</p>
        
        <p>Today, Brandout Studio serves hundreds of businesses across India, but we never forget our roots in Tamil Nadu. The lessons learned from our local beginnings continue to guide our global ambitions.</p>
      `,
    },
    {
      title: "Digital Transformation in Rural Tamil Nadu",
      date: "January 10, 2025",
      excerpt: "Bridging the digital divide through innovative solutions.",
      content: `
        <p>Rural Tamil Nadu represents both the biggest challenge and the greatest opportunity for digital transformation in India. With over 60% of the state's population living in rural areas, the potential impact of successful digital initiatives is enormous.</p>
        
        <h3>Understanding the Rural Context</h3>
        <p>Rural digital transformation isn't just about providing internet access. It's about creating meaningful solutions that address real problems:</p>
        
        <ul>
          <li><strong>Agricultural Challenges:</strong> Weather prediction, crop management, and market access</li>
          <li><strong>Healthcare Access:</strong> Limited medical facilities and specialist availability</li>
          <li><strong>Education Gaps:</strong> Quality education and skill development opportunities</li>
          <li><strong>Financial Inclusion:</strong> Access to banking and credit services</li>
        </ul>
        
        <h3>Technology Solutions That Work</h3>
        <p>Through our work at Yesp Corporation, we've identified several technology approaches that show promise:</p>
        
        <p><strong>Mobile-First Design:</strong> Smartphones are often the primary computing device in rural areas. Solutions must be designed for mobile from the ground up.</p>
        
        <p><strong>Voice Interfaces:</strong> Many rural users are more comfortable with voice than text. Voice-based interfaces can dramatically improve adoption.</p>
        
        <p><strong>Offline Capabilities:</strong> Internet connectivity can be unreliable. Applications must work offline and sync when connectivity is available.</p>
        
        <p><strong>Local Language Support:</strong> Tamil language support isn't optional—it's essential for widespread adoption.</p>
        
        <h3>Success Stories and Case Studies</h3>
        <p>We've seen several successful implementations:</p>
        
        <p><strong>Agricultural Apps:</strong> Weather forecasting and crop advisory services have shown high adoption rates when delivered in Tamil through simple mobile interfaces.</p>
        
        <p><strong>Digital Payments:</strong> UPI adoption in rural Tamil Nadu has been remarkable, showing how the right technology can leapfrog traditional infrastructure.</p>
        
        <p><strong>Telemedicine:</strong> Remote healthcare consultations have proven valuable, especially during the pandemic.</p>
        
        <h3>Challenges and Solutions</h3>
        <p>Several challenges remain:</p>
        
        <p><strong>Digital Literacy:</strong> Training and education programs are essential for successful adoption.</p>
        
        <p><strong>Infrastructure:</strong> Reliable power and internet connectivity are still challenges in many areas.</p>
        
        <p><strong>Trust:</strong> Building trust in digital solutions requires demonstrating clear value and ensuring data security.</p>
        
        <h3>The Path Forward</h3>
        <p>Digital transformation in rural Tamil Nadu requires a collaborative approach involving government, private sector, and civil society. At Yesp Corporation, we're committed to developing solutions that truly serve rural communities.</p>
        
        <p>The goal isn't just to bring technology to rural areas—it's to empower rural communities to participate fully in the digital economy and improve their quality of life.</p>
      `,
    },
    {
      title: "The Rise of Regional Tech Hubs",
      date: "December 22, 2024",
      excerpt: "Why Tier-2 cities are becoming innovation centers.",
      content: `
        <p>The Indian tech landscape is undergoing a fundamental shift. While Bangalore, Hyderabad, and Pune continue to dominate, Tier-2 cities are emerging as significant innovation centers. This trend represents a massive opportunity for entrepreneurs and businesses.</p>
        
        <h3>Why Tier-2 Cities Are Rising</h3>
        <p>Several factors are driving this shift:</p>
        
        <ul>
          <li><strong>Cost Advantages:</strong> Lower real estate and operational costs</li>
          <li><strong>Talent Availability:</strong> Large pool of engineering graduates from local colleges</li>
          <li><strong>Quality of Life:</strong> Less congestion, pollution, and stress compared to metros</li>
          <li><strong>Government Support:</strong> State governments actively promoting local tech ecosystems</li>
          <li><strong>Remote Work:</strong> COVID-19 accelerated acceptance of distributed teams</li>
        </ul>
        
        <h3>Erode: A Case Study</h3>
        <p>Erode, my hometown, exemplifies this trend. Traditionally known for textiles and agriculture, the city is now seeing tech companies and startups emerge:</p>
        
        <p><strong>Educational Infrastructure:</strong> Multiple engineering colleges producing skilled graduates</p>
        <p><strong>Business Culture:</strong> Strong entrepreneurial tradition from textile and trading businesses</p>
        <p><strong>Connectivity:</strong> Good transport links to major cities and improving digital infrastructure</p>
        <p><strong>Cost Structure:</strong> Significantly lower costs compared to Chennai or Bangalore</p>
        
        <h3>Opportunities in Tier-2 Cities</h3>
        <p>Tier-2 cities offer unique opportunities:</p>
        
        <p><strong>Local Market Understanding:</strong> Deep knowledge of regional needs and preferences</p>
        <p><strong>Talent Retention:</strong> Employees often prefer staying close to family and roots</p>
        <p><strong>Government Partnerships:</strong> Easier access to local government and policy makers</p>
        <p><strong>Community Support:</strong> Stronger community networks and support systems</p>
        
        <h3>Challenges to Address</h3>
        <p>Despite the opportunities, challenges exist:</p>
        
        <p><strong>Access to Capital:</strong> Limited presence of VCs and angel investors</p>
        <p><strong>Ecosystem Maturity:</strong> Fewer mentors, advisors, and experienced entrepreneurs</p>
        <p><strong>Market Access:</strong> Distance from major customer bases and partners</p>
        <p><strong>Infrastructure Gaps:</strong> Some infrastructure limitations compared to metros</p>
        
        <h3>Building the Ecosystem</h3>
        <p>At Yesp Corporation, we're actively working to build the tech ecosystem in Erode and surrounding areas:</p>
        
        <p><strong>Talent Development:</strong> Partnering with local colleges for internships and training</p>
        <p><strong>Startup Support:</strong> Mentoring and supporting other entrepreneurs</p>
        <p><strong>Community Building:</strong> Organizing tech meetups and networking events</p>
        <p><strong>Success Stories:</strong> Demonstrating that world-class companies can be built from Tier-2 cities</p>
        
        <h3>The Future</h3>
        <p>The rise of regional tech hubs is not just a trend—it's the future of Indian technology. As infrastructure improves and remote work becomes more accepted, we'll see more innovation happening outside traditional metros.</p>
        
        <p>For entrepreneurs, this represents a massive opportunity to build successful companies while staying connected to their roots and communities.</p>
      `,
    },
  ]

  const additionalBlogPosts = [
    {
      title: "Building Developer Tools for Indian Markets",
      date: "December 8, 2023",
      excerpt: "Creating APIs and platforms that understand local needs.",
      content: `<p>Developer tools and APIs form the backbone of modern software development. At Yesp Tech, we've learned that building developer tools for Indian markets requires understanding unique local requirements and constraints. From payment gateway integrations that support UPI to authentication systems that work with Aadhaar, the nuances matter significantly for developer adoption and success.</p>
      
      <h3>Understanding Developer Needs in India</h3>
      <p>Indian developers face unique challenges that global tools don't always address. Network reliability varies significantly across regions, making offline-first approaches crucial. Cost sensitivity means pricing models must be carefully designed. Language support, while often overlooked, can dramatically improve adoption rates among regional developers.</p>
      
      <p>Our approach at Yesp Tech focuses on building tools that work reliably in Indian conditions while maintaining global standards for security and performance. This balance is key to creating successful developer platforms in the Indian market.</p>`,
    },
    {
      title: "Content Distribution in the Age of AI",
      date: "November 25, 2023",
      excerpt: "How Feedlooply is revolutionizing content reach.",
      content: `<p>Artificial Intelligence is transforming how content is created, distributed, and consumed. At Feedlooply, we're at the forefront of this revolution, building next-generation content distribution platforms that understand context, audience preferences, and optimal timing for maximum engagement.</p>
      
      <h3>The AI-Powered Content Revolution</h3>
      <p>Traditional content distribution relied on manual scheduling and broad demographic targeting. AI enables personalized content delivery at scale, understanding individual user preferences and behavior patterns to optimize engagement. This shift represents a fundamental change in how content creators and businesses reach their audiences.</p>
      
      <p>Our platform leverages machine learning to analyze content performance across different channels and audiences, providing actionable insights that help creators and businesses improve their content strategy and reach.</p>`,
    },
    {
      title: "Branding for the Digital-First Generation",
      date: "November 12, 2023",
      excerpt: "Modern branding strategies for emerging businesses.",
      content: `<p>Today's consumers are digital natives who interact with brands primarily through digital touchpoints. This fundamental shift requires a complete rethinking of branding strategies, moving beyond traditional logo design to comprehensive digital brand experiences.</p>
      
      <h3>Digital-First Branding Principles</h3>
      <p>Modern branding must be consistent across all digital platforms while remaining flexible enough to adapt to new channels and technologies. At Brandout Studio, we focus on creating brand systems that work seamlessly across websites, social media, mobile apps, and emerging platforms.</p>
      
      <p>The key is building brands that feel authentic and engaging in digital spaces while maintaining the trust and recognition that traditional branding principles provide.</p>`,
    },
    {
      title: "Entrepreneurship in Small Cities: Opportunities and Challenges",
      date: "October 30, 2023",
      excerpt: "Building successful businesses outside major metropolitan areas.",
      content: `<p>Entrepreneurship in small cities like Erode presents unique opportunities and challenges. While access to capital and talent networks may be limited compared to major metros, small cities offer advantages in terms of cost structure, community support, and deep local market understanding.</p>
      
      <h3>Leveraging Local Advantages</h3>
      <p>Small city entrepreneurs can build strong relationships with local businesses and government officials, creating opportunities for partnerships and support that might be harder to achieve in larger cities. The lower cost of operations also allows for longer runway and more sustainable growth models.</p>
      
      <p>Success in small cities requires thinking globally while acting locally, leveraging technology to access broader markets while serving local needs effectively.</p>`,
    },
    {
      title: "The Future of Work in Tamil Nadu",
      date: "October 15, 2023",
      excerpt: "How remote work is changing employment patterns in South India.",
      content: `<p>Remote work has fundamentally changed employment patterns across India, with Tamil Nadu being no exception. This shift has created new opportunities for talent in smaller cities while also presenting challenges for traditional employment models.</p>
      
      <h3>Remote Work Adoption in Tamil Nadu</h3>
      <p>The state's strong educational infrastructure and English proficiency have positioned Tamil Nadu well for the remote work revolution. Many professionals who previously migrated to metros for opportunities can now work for global companies while staying in their hometowns.</p>
      
      <p>This trend is creating new economic opportunities in smaller cities and towns, potentially reversing decades of urban migration patterns.</p>`,
    },
  ]

  const allBlogPosts = [...blogPosts, ...additionalBlogPosts]

  if (selectedBlog !== null) {
    const blog = allBlogPosts[selectedBlog]
    return (
      <>
        <Head>
          <title>{blog.title} - Srinithin Somasundaram | Yesp Knowledge Base</title>
          <meta name="description" content={blog.excerpt} />
          <meta name="author" content="Srinithin Somasundaram" />
          <meta property="og:title" content={`${blog.title} - Srinithin Somasundaram`} />
          <meta property="og:description" content={blog.excerpt} />
          <meta property="og:image" content={blog.image || "/srinithin-portrait.jpeg"} />
          <meta property="og:type" content="article" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="@Ssrinithin" />
        </Head>
        <div className="min-h-screen bg-white">
          <header className="border-b border-gray-300 bg-white">
            <div className="max-w-6xl mx-auto px-4 py-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <h1 className="text-xl font-normal">Yesp</h1>
                  <span className="text-sm text-gray-600">Knowledge Base</span>
                </div>
                <Button variant="ghost" onClick={() => setSelectedBlog(null)} className="flex items-center gap-2">
                  <X className="h-4 w-4" />
                  Close
                </Button>
              </div>
            </div>
          </header>

          <div className="max-w-4xl mx-auto px-4 py-6">
            <Button variant="ghost" onClick={() => setSelectedBlog(null)} className="mb-6 flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to main page
            </Button>

            <article className="prose prose-lg max-w-none">
              <div className="mb-8">
                <h1 className="text-4xl font-normal text-black mb-4 border-b-3 border-black pb-2">{blog.title}</h1>
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
                  <span>{blog.date}</span>
                  <span>•</span>
                  <span>By Yesp
                  Knowledge Base</span>
                </div>

                {blog.image && (
                  <div className="mb-8">
                    <img
                      src={blog.image || "/placeholder.svg"}
                      alt={`Srinithin Somasundaram - ${blog.title}`}
                      className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
                    />
                  </div>
                )}
              </div>

              <div className="text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: blog.content }} />

              <div className="mt-12 pt-8 border-t border-gray-300">
                <div className="flex items-center gap-4">
                  <img
                    src="/srinithin-portrait.jpeg"
                    alt="Srinithin Somasundaram - Entrepreneur and Founder"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-lg">Srinithin Somasundaram</h4>
                    <p className="text-gray-600">Entrepreneur and Founder of Yesp Corporation</p>
                    <div className="flex gap-3 mt-2">
                      <a
                        href="https://x.com/Ssrinithin"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline text-sm"
                      >
                        <Twitter className="h-4 w-4 inline mr-1" />X (Twitter)
                      </a>
                      <a
                        href="https://www.linkedin.com/in/srinithinsomasundaram/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline text-sm"
                      >
                        <Linkedin className="h-4 w-4 inline mr-1" />
                        LinkedIn
                      </a>
                      <a
                        href="https://www.instagram.com/srinithinsomasundaram/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline text-sm"
                      >
                        <Instagram className="h-4 w-4 inline mr-1" />
                        Instagram
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <Head>
        <title>Srinithin Somasundaram - Entrepreneur, Founder of Yesp Corporation | Tamil Nadu Startup Ecosystem</title>
        <meta
          name="description"
          content="Srinithin Somasundaram is an entrepreneur from Erode, Tamil Nadu, founder of Yesp Corporation, Yesp Tech, Brandout Studio, and Feedlooply. Learn about his journey in building scalable SaaS platforms and contributing to India's startup ecosystem."
        />
        <meta
          name="keywords"
          content="Srinithin Somasundaram, Yesp Corporation, Tamil Nadu entrepreneur, Erode startup, Indian SaaS, Brandout Studio, Feedlooply, Yesp Tech, regional tech hubs"
        />
        <meta name="author" content="Srinithin Somasundaram" />
        <meta property="og:title" content="Srinithin Somasundaram - Entrepreneur & Founder" />
        <meta
          property="og:description"
          content="Entrepreneur from Tamil Nadu building scalable SaaS platforms and contributing to India's startup ecosystem through Yesp Corporation and related ventures."
        />
        <meta property="og:image" content="/srinithin-portrait.jpeg" />
        <meta property="og:type" content="profile" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@Ssrinithin" />
        <link rel="canonical" href="https://yesp.in/srinithin-somasundaram" />
      </Head>

      <div className="min-h-screen bg-white">
        <header className="border-b border-gray-300 bg-white">
          <div className="max-w-6xl mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <h1 className="text-xl font-normal">Yesp</h1>
                <span className="text-sm text-gray-600">Knowledge Base</span>
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Main content */}
            <div className="lg:col-span-3">
              {/* Article title */}
              <div className="mb-6">
                <h1 className="text-3xl font-normal text-black mb-2 border-b-3 border-black pb-1">
                  Srinithin Somasundaram
                </h1>
                <p className="text-sm text-gray-600">From Yesp Knowledge Base</p>
              </div>

              {/* Article content */}
              <div className="prose prose-lg max-w-none">
                <p className="text-base leading-relaxed mb-4">
                  <strong>Srinithin</strong>, son of Somasundaram, is an Indian entrepreneur from{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    Erode
                  </a>
                  ,{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    Tamil Nadu
                  </a>
                  . He is the founder of multiple technology companies including{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    Yesp Corporation
                  </a>
                  ,{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    Yesp Tech
                  </a>
                  ,{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    Yesp Studio
                  </a>
                  ,{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    Brandout Studio
                  </a>
                  , and{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    Feedlooply
                  </a>
                  .
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-4 border-b border-gray-300 pb-1">
                  Early life and education
                </h2>
                <p className="text-base leading-relaxed mb-4">
                  Srinithin, son of Somasundaram, was born and raised in Erode, Tamil Nadu, India. Following traditional
                  Tamil naming conventions, his full name includes his father's name as Srinithin Somasundaram. He
                  developed an early interest in technology and entrepreneurship, which led him to pursue ventures in
                  the digital space while supporting local businesses in his region.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-4 border-b border-gray-300 pb-1">Career</h2>
                <p className="text-base leading-relaxed mb-4">
                  Srinithin's entrepreneurial journey began with a focus on supporting local businesses in Tamil Nadu
                  through digital transformation and branding services. His approach combines discipline, scalability,
                  and innovation to create sustainable business models.
                </p>

                <h3 className="text-xl font-normal mt-6 mb-3">Ventures</h3>
                <div className="space-y-6">
                  {ventures.map((venture, index) => {
                    const Icon = venture.icon
                    return (
                      <div key={index} className="border border-gray-300 rounded p-4 bg-gray-50">
                        <div className="flex items-start space-x-3">
                          <Icon className="h-6 w-6 text-blue-600 mt-1" />
                          <div>
                            <h4 className="font-semibold text-lg text-black mb-1">{venture.name}</h4>
                            <p className="text-sm text-gray-600 mb-2">Founded: {venture.founded}</p>
                            <p className="text-base leading-relaxed">{venture.description}</p>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>

                <h2 className="text-2xl font-normal mt-8 mb-4 border-b border-gray-300 pb-1">
                  Philosophy and approach
                </h2>
                <p className="text-base leading-relaxed mb-4">
                  Srinithin believes in the power of local innovation to create global impact. His business philosophy
                  centers around discipline, branding, scalability, and innovation in the digital ecosystem. He
                  advocates for Tamil Nadu's potential to become a major startup hub and is committed to contributing to
                  India's digital economy.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-4 border-b border-gray-300 pb-1">
                  Recent writings and insights
                </h2>
                <div className="space-y-4">
                  {allBlogPosts.map((post, index) => (
                    <div key={index} className="border-l-4 border-blue-600 pl-4">
                      <h4 className="font-semibold text-base text-black mb-1">
                        <button
                          onClick={() => setSelectedBlog(index)}
                          className="text-blue-600 hover:underline text-left"
                        >
                          {post.title}
                        </button>
                      </h4>
                      <p className="text-sm text-gray-600 mb-2">{post.date}</p>
                      <p className="text-base leading-relaxed">{post.excerpt}</p>
                    </div>
                  ))}
                </div>

                <h2 className="text-2xl font-normal mt-8 mb-4 border-b border-gray-300 pb-1">External links</h2>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>
                    <a href="#" className="text-blue-600 hover:underline flex items-center gap-1">
                      Yesp Corporation <ExternalLink className="h-3 w-3" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 hover:underline flex items-center gap-1">
                      Brandout Studio <ExternalLink className="h-3 w-3" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 hover:underline flex items-center gap-1">
                      Feedlooply Platform <ExternalLink className="h-3 w-3" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-1">
              <Card className="border border-gray-300 bg-gray-50">
                <CardContent className="p-4">
                  <div className="text-center mb-4">
                    <img
                      src="/srinithin-portrait.jpeg"
                      alt="Srinithin Somasundaram - Entrepreneur and Founder of Yesp Corporation"
                      className="w-full h-48 object-cover rounded mb-2"
                    />
                    <p className="text-xs text-gray-600">Srinithin Somasundaram</p>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-start space-x-2">
                      <Users className="h-4 w-4 text-gray-600 mt-0.5" />
                      <div>
                        <p className="font-semibold">Occupation</p>
                        <p className="text-gray-600">Entrepreneur, Founder</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-2">
                      <MapPin className="h-4 w-4 text-gray-600 mt-0.5" />
                      <div>
                        <p className="font-semibold">Location</p>
                        <p className="text-gray-600">Erode, Tamil Nadu, India</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-2">
                      <Rocket className="h-4 w-4 text-gray-600 mt-0.5" />
                      <div>
                        <p className="font-semibold">Known for</p>
                        <p className="text-gray-600">Founder of Yesp Corporation and related ventures</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-2">
                      <Calendar className="h-4 w-4 text-gray-600 mt-0.5" />
                      <div>
                        <p className="font-semibold">Active years</p>
                        <p className="text-gray-600">2020–present</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-300">
                    <h4 className="font-semibold text-sm mb-3">Connect</h4>
                    <div className="flex flex-wrap gap-2">
                      <a
                        href="https://x.com/Ssrinithin"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-blue-600 hover:underline text-sm"
                      >
                        <Twitter className="h-4 w-4" />X (Twitter)
                      </a>
                      <a
                        href="https://www.linkedin.com/in/srinithinsomasundaram/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-blue-600 hover:underline text-sm"
                      >
                        <Linkedin className="h-4 w-4" />
                        LinkedIn
                      </a>
                      <a
                        href="https://www.instagram.com/srinithinsomasundaram/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-blue-600 hover:underline text-sm"
                      >
                        <Instagram className="h-4 w-4" />
                        Instagram
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Categories */}
              <div className="mt-6">
                <h3 className="text-lg font-normal mb-3">Categories</h3>
                <div className="space-y-1 text-sm">
                  <p>
                    <a href="#" className="text-blue-600 hover:underline">
                      Indian entrepreneurs
                    </a>
                  </p>
                  <p>
                    <a href="#" className="text-blue-600 hover:underline">
                      People from Erode
                    </a>
                  </p>
                  <p>
                    <a href="#" className="text-blue-600 hover:underline">
                      Tamil Nadu businesspeople
                    </a>
                  </p>
                  <p>
                    <a href="#" className="text-blue-600 hover:underline">
                      Technology company founders
                    </a>
                  </p>
                  <p>
                    <a href="#" className="text-blue-600 hover:underline">
                      21st-century Indian businesspeople
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
