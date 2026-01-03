"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Github, Linkedin, Mail, Calendar, ExternalLink, Download, ChevronDown, Award } from "lucide-react"

export default function ProfilePage() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    setIsVisible(true)

    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "certificates", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="font-serif font-bold text-xl text-blue-600">Aishwaryavarshini J</div>
            <div className="hidden md:flex items-center gap-8">
              {["My Skills", "My Projects & Education", "My Certificates", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace("my ", ""))}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    activeSection === item.toLowerCase().replace("my ", "") ? "text-blue-600" : "text-slate-600"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <Button
              size="sm"
              className="bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`space-y-8 ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
              <div className="space-y-4">
                <Badge variant="outline" className="text-blue-600 border-blue-200">
                  Available for new opportunities
                </Badge>
                <h1 className="font-serif text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                  Hi, I'm Aishwaryavarshini J
                </h1>
                <p className="text-xl text-slate-600 font-sans leading-relaxed">
                  I'm an EEE student exploring the intersection of electrical systems, artificial intelligence, and
                  software. I enjoy learning new technologies, solving problems, and building solutions with real-world
                  impact.
                </p>
              </div>

              <div className="flex items-center gap-4">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white group"
                  onClick={() => scrollToSection("skills")}
                >
                  View My Work
                  <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-blue-200 text-blue-600 hover:bg-blue-50 bg-transparent"
                  asChild
                >
                  <a href="/Aishwaryavarshini-Resume.pdf" download>
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume
                  </a>
                </Button>
              </div>

              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-2 hover:bg-blue-50"
                  onClick={() => window.open("https://github.com/aishwaryavarshini", "_blank")}
                >
                  <Github className="w-5 h-5 text-slate-600 hover:text-blue-600" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-2 hover:bg-blue-50"
                  onClick={() => window.open("https://www.linkedin.com/in/aishwaryavarshini", "_blank")}
                >
                  <Linkedin className="w-5 h-5 text-slate-600 hover:text-blue-600" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-2 hover:bg-blue-50"
                  onClick={() => window.open("mailto:aishwaryavarshinijeyakumar@gmail.com", "_blank")}
                >
                  <Mail className="w-5 h-5 text-slate-600 hover:text-blue-600" />
                </Button>
              </div>
            </div>

            <div className={`relative ${isVisible ? "animate-slide-in-right animate-delay-200" : "opacity-0"}`}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl transform rotate-3"></div>
                <div className="relative bg-white p-8 rounded-2xl shadow-xl">
                  <Avatar className="w-48 h-48 mx-auto mb-6">
                    <AvatarImage src="/aishwaryavarshini-photo.png" />
                    <AvatarFallback className="text-4xl font-serif">AJ</AvatarFallback>
                  </Avatar>
                  <div className="text-center space-y-2">
                    <h3 className="font-serif text-2xl font-bold text-slate-900">Aishwaryavarshini J</h3>
                    <p className="text-blue-600 font-medium">Electrical Engineer | AI & Software Explorer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-16">
            <button
              onClick={() => scrollToSection("about")}
              className="animate-bounce text-slate-400 hover:text-blue-600 transition-colors"
            >
              <ChevronDown className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* My Skills Section */}
      <section id="about" className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-slate-900 mb-4">My Skills</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A comprehensive overview of my technical abilities and core competencies across programming, engineering,
              and problem-solving.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <h3 className="font-serif text-xl font-bold text-slate-900 mb-4">Programming Languages</h3>
                <p className="text-slate-600 leading-relaxed">
                  Python, C, Java, JavaScript — used for problem-solving, basic software development, and AI-related
                  learning.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <h3 className="font-serif text-xl font-bold text-slate-900 mb-4">Electrical Engineering</h3>
                <p className="text-slate-600 leading-relaxed">
                  Circuit analysis, electrical machines, power electronics, control systems, and core EEE fundamentals.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <h3 className="font-serif text-xl font-bold text-slate-900 mb-4">AI & Software Concepts</h3>
                <p className="text-slate-600 leading-relaxed">
                  Fundamentals of machine learning, logical thinking, and applying software ideas to engineering
                  problems.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <h3 className="font-serif text-xl font-bold text-slate-900 mb-4">Data & Analytical Skills</h3>
                <p className="text-slate-600 leading-relaxed">
                  Basic data handling, analysis, and interpretation to support engineering decisions and software logic.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <h3 className="font-serif text-xl font-bold text-slate-900 mb-4">Learning & Problem-Solving Mindset</h3>
                <p className="text-slate-600 leading-relaxed">
                  Ability to learn new concepts quickly, break down problems step by step, and apply logical thinking to
                  unfamiliar topics.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <h3 className="font-serif text-xl font-bold text-slate-900 mb-4">Version Control Basics</h3>
                <p className="text-slate-600 leading-relaxed">
                  Familiarity with Git for tracking changes in code and collaborating on software projects.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* My Projects & Education Section */}
      <section id="skills" className="py-16 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-slate-900 mb-4">My Projects & Education</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A showcase of my technical projects and educational journey in data science, AI, and software development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "SIH Railway Project",
                category: "Project",
                image: "/railway-technology-project-smart-india-hackathon.jpg",
                description:
                  "Team-based real-world problem solution for Smart India Hackathon focused on railway system improvements.",
                link: "/SIH-Railway-Project-Presentation.pdf",
              },
              {
                title: "Mobile Application Development",
                category: "Project",
                image: "/mobile-app-development-interface-design.jpg",
                description:
                  "Designed and developed a functional mobile application with user-friendly interface and features.",
              },
              {
                title: "E-Commerce Data Management",
                category: "Project",
                image: "/ecommerce-data-analytics-dashboard.jpg",
                description:
                  "Academic project under Business Data Management (IIT Madras) focusing on data analysis and management.",
              },
              {
                title: "Diploma in Programming",
                category: "Education",
                image: null,
                description:
                  "IIT Madras - Foundational programming skills covering multiple languages and problem-solving techniques.",
                status: "Pursuing",
              },
              {
                title: "Diploma in Data Science",
                category: "Education",
                image: null,
                description:
                  "IIT Madras - Comprehensive data science curriculum including statistics, analytics, and machine learning.",
                status: "Pursuing",
              },
              {
                title: "BS in Data Science & Applications",
                category: "Education",
                image: null,
                description:
                  "IIT Madras - Bachelor's degree program covering advanced data science concepts and real-world applications.",
                status: "Pursuing",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden ${
                  item.category === "Education" ? "bg-gradient-to-br from-blue-50 to-white border-blue-100" : ""
                }`}
              >
                {item.image !== null && (
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <Button
                        size="sm"
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-slate-900 hover:bg-slate-100"
                        asChild={!!item.link}
                      >
                        {item.link ? (
                          <a href={item.link} target="_blank" rel="noopener noreferrer">
                            View Details
                            <ExternalLink className="w-4 h-4 ml-2" />
                          </a>
                        ) : (
                          <>
                            View Details
                            <ExternalLink className="w-4 h-4 ml-2" />
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                )}
                <CardContent className={item.image !== null ? "p-6" : "p-4"}>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge
                      variant="secondary"
                      className={
                        item.category === "Project" ? "text-blue-600 bg-blue-50" : "text-emerald-600 bg-emerald-50"
                      }
                    >
                      {item.category}
                    </Badge>
                    {item.status && (
                      <Badge variant="outline" className="text-slate-600 border-slate-300 text-xs">
                        {item.status}
                      </Badge>
                    )}
                  </div>
                  <h3
                    className={`font-serif font-bold text-slate-900 mb-2 ${item.category === "Education" ? "text-lg" : "text-xl"}`}
                  >
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="border-blue-200 text-blue-600 hover:bg-blue-50 bg-transparent"
            >
              View All Projects
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* My Certificates Section */}
      <section id="certificates" className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-slate-900 mb-4">My Certificates</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Professional certifications and achievements that demonstrate my commitment to continuous learning and
              excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-0 overflow-hidden hover:shadow-lg transition-shadow duration-300 border-2 border-blue-100">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-600/10" />
                <img
                  src="/iitm-foundation-certificate.jpg"
                  alt="IITM Foundation Certificate"
                  className="w-full h-48 object-cover opacity-20"
                />
              </div>
              <CardContent className="p-8 relative bg-white">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Award className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <Badge variant="secondary" className="mb-2 text-blue-600 bg-blue-50">
                      30th December 2024
                    </Badge>
                    <h3 className="font-serif text-xl font-bold text-slate-900 mb-2">IITM Foundation Certificate</h3>
                    <p className="text-blue-600 font-medium mb-3">ID: 23F3001070</p>
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Successfully completed IIT Madras Foundation program demonstrating proficiency in foundational
                  concepts and skills.
                </p>
              </CardContent>
            </Card>

            <Card className="p-0 overflow-hidden hover:shadow-lg transition-shadow duration-300 border-2 border-blue-100">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-600/10" />
                <img
                  src="/solar-energy-nptel-certificate.jpg"
                  alt="Solar Energy Engineering Certificate"
                  className="w-full h-48 object-cover opacity-20"
                />
              </div>
              <CardContent className="p-8 relative bg-white">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Award className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <Badge variant="secondary" className="mb-2 text-blue-600 bg-blue-50">
                      Jul-Oct 2025 (12 weeks)
                    </Badge>
                    <h3 className="font-serif text-xl font-bold text-slate-900 mb-2">
                      Solar Energy Engineering and Technology
                    </h3>
                    <p className="text-blue-600 font-medium mb-1">NPTEL</p>
                    <p className="text-sm text-slate-500 mb-3">Roll No: NPTEL25GE53S970501767</p>
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Comprehensive 12-week course on solar energy engineering fundamentals and renewable energy technology
                  applications.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl font-bold text-slate-900 mb-4">Contact me</h2>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
            Feel free to reach out to discuss opportunities, collaborations, or just to connect!
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <Mail className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-slate-900 mb-2">Email</h3>
              <p className="text-slate-600 text-sm break-all">aishwaryavarshinijeyakumar@gmail.com</p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <Linkedin className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-slate-900 mb-2">LinkedIn</h3>
              <p className="text-slate-600">@aishwaryavarshini</p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <Github className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-slate-900 mb-2">GitHub</h3>
              <p className="text-slate-600">@aishwaryavarshini</p>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => window.open("mailto:aishwaryavarshinijeyakumar@gmail.com", "_blank")}
            >
              <Mail className="w-4 h-4 mr-2" />
              Send Message
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-blue-200 text-blue-600 hover:bg-blue-50 bg-transparent"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Schedule Call
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400">© 2026 Aishwaryavarshini J. Crafted with passion and attention to detail.</p>
        </div>
      </footer>
    </div>
  )
}
