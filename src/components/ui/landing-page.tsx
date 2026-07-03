import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  Menu,
  X,
  ArrowRight,
  ChevronRight,
  Mail,
  MapPin,
  Phone,
  ArrowUpRight,
  Sparkles,
  Zap,
  Palette,
  Code,
  LineChart,
  MessageSquare,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const Instagram = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
)

const Twitter = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
  </svg>
)

const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
)

const Facebook = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
)

const Github = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
)

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemFadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export function DesignAgency() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-background via-background to-muted/20 text-neutral-800">
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 ${scrollY > 50 ? "shadow-md" : ""}`}
      >
        <div className="container mx-auto px-4 flex h-16 items-center justify-between border-x border-muted">
          <div className="flex items-center gap-3">
            <a href="/" className="flex items-center space-x-3">
              <motion.div
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="h-10 w-10 rounded-3xl bg-neutral-900 flex items-center justify-center"
              >
                <Sparkles className="h-5 w-5 text-white" />
              </motion.div>
              <span className="font-bold text-xl text-neutral-950">Studio</span>
            </a>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#services" className="text-sm font-medium transition-colors hover:text-primary text-neutral-600 hover:text-neutral-900">
              Services
            </a>
            <a href="#work" className="text-sm font-medium transition-colors hover:text-primary text-neutral-600 hover:text-neutral-900">
              Work
            </a>
            <a href="#about" className="text-sm font-medium transition-colors hover:text-primary text-neutral-600 hover:text-neutral-900">
              About
            </a>
            <a href="#clients" className="text-sm font-medium transition-colors hover:text-primary text-neutral-600 hover:text-neutral-900">
              Clients
            </a>
            <a href="#contact" className="text-sm font-medium transition-colors hover:text-primary text-neutral-600 hover:text-neutral-900">
              Contact
            </a>
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" size="sm" className="rounded-3xl border-neutral-300">
              Log In
            </Button>
            <Button size="sm" className="rounded-3xl bg-neutral-900 text-white hover:bg-neutral-800">
              Get Started
            </Button>
          </div>
          <button className="flex md:hidden text-neutral-900" onClick={toggleMenu}>
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-white md:hidden"
        >
          <div className="container mx-auto px-4 flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <a href="/" className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-3xl bg-neutral-900 flex items-center justify-center">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
                <span className="font-bold text-xl text-neutral-950">Studio</span>
              </a>
            </div>
            <button onClick={toggleMenu} className="text-neutral-900">
              <X className="h-6 w-6" />
              <span className="sr-only">Close menu</span>
            </button>
          </div>
          <motion.nav
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="container mx-auto px-4 grid gap-3 pb-8 pt-6"
          >
            {["Services", "Work", "About", "Clients", "Contact"].map((item, index) => (
              <motion.div key={index} variants={itemFadeIn}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="flex items-center justify-between rounded-3xl px-3 py-2 text-lg font-medium hover:bg-neutral-100 text-neutral-800"
                  onClick={toggleMenu}
                >
                  {item}
                  <ChevronRight className="h-4 w-4" />
                </a>
              </motion.div>
            ))}
            <motion.div variants={itemFadeIn} className="flex flex-col gap-3 pt-4">
              <Button variant="outline" className="w-full rounded-3xl border-neutral-300">
                Log In
              </Button>
              <Button className="w-full rounded-3xl bg-neutral-900 text-white hover:bg-neutral-800">Get Started</Button>
            </motion.div>
          </motion.nav>
        </motion.div>
      )}

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 overflow-hidden">
          <div className="container mx-auto px-4 border border-neutral-200 rounded-3xl bg-gradient-to-br from-white to-neutral-50">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="flex flex-col justify-center space-y-4 py-10"
              >
                <div className="space-y-3">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center rounded-3xl bg-neutral-100 px-3 py-1 text-sm text-neutral-800"
                  >
                    <Zap className="mr-1 h-3 w-3 text-yellow-500 fill-yellow-500" />
                    Creative Design Studio
                  </motion.div>
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-neutral-950"
                  >
                    We design digital experiences that people{" "}
                    <span className="bg-gradient-to-r from-neutral-950 to-neutral-600 bg-clip-text text-transparent">
                      love
                    </span>
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="max-w-[600px] text-neutral-600 md:text-xl"
                  >
                    Our award-winning team crafts beautiful, functional designs that drive growth and engagement.
                  </motion.p>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                  className="flex flex-col gap-3 sm:flex-row"
                >
                  <Button size="lg" className="rounded-3xl bg-neutral-900 text-white hover:bg-neutral-800 group">
                    Get Started
                    <motion.span
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      className="inline-block"
                    >
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </motion.span>
                  </Button>
                  <Button variant="outline" size="lg" className="rounded-3xl border-neutral-300">
                    View Our Work
                  </Button>
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex items-center justify-center"
              >
                <div className="relative h-[350px] w-full md:h-[450px] lg:h-[500px] xl:h-[550px] overflow-hidden rounded-3xl">
                  <img
                    src="https://images.unsplash.com/photo-1542744173-8e08562744ad?auto=format&fit=crop&w=1200&q=80"
                    alt="Hero Image"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Client Logos */}
        <section id="clients" className="w-full py-12 md:py-16 lg:py-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="container mx-auto px-4 border border-neutral-200 rounded-3xl bg-neutral-50/50"
          >
            <div className="flex flex-col items-center justify-center space-y-4 text-center py-10">
              <div className="space-y-3">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block rounded-3xl bg-neutral-100 px-3 py-1 text-sm text-neutral-800"
                >
                  Trusted by
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-neutral-950"
                >
                  Our Clients
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="mx-auto max-w-[700px] text-neutral-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                >
                  We've had the pleasure of working with some amazing companies
                </motion.p>
              </div>
            </div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mx-auto grid grid-cols-2 items-center gap-6 py-8 md:grid-cols-3 lg:grid-cols-6"
            >
              {[
                "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=300&q=80",
                "https://images.unsplash.com/photo-1618005198143-e528346d94f7?auto=format&fit=crop&w=300&q=80",
                "https://images.unsplash.com/photo-1618005135246-a3ee27b7c251?auto=format&fit=crop&w=300&q=80",
                "https://images.unsplash.com/photo-1618005128523-289569269d08?auto=format&fit=crop&w=300&q=80",
                "https://images.unsplash.com/photo-1618005156479-7a5223e7f918?auto=format&fit=crop&w=300&q=80",
                "https://images.unsplash.com/photo-1618005174974-bc3235b2e95a?auto=format&fit=crop&w=300&q=80"
              ].map((logo, i) => (
                <motion.div
                  key={i}
                  variants={itemFadeIn}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center justify-center"
                >
                  <div className="rounded-3xl border border-neutral-200 p-6 bg-white hover:shadow-md transition-all overflow-hidden h-20 w-36 flex items-center justify-center">
                    <img
                      src={logo}
                      alt={`Client Logo ${i + 1}`}
                      className="grayscale transition-all hover:grayscale-0 max-h-full max-w-full object-contain"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-12 md:py-24 lg:py-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="container mx-auto px-4 border border-neutral-200 rounded-3xl"
          >
            <div className="flex flex-col items-center justify-center space-y-4 text-center py-10">
              <div className="space-y-3">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block rounded-3xl bg-neutral-100 px-3 py-1 text-sm text-neutral-800"
                >
                  Services
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-neutral-950"
                >
                  What We Do
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="mx-auto max-w-[900px] text-neutral-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                >
                  We offer a comprehensive range of design and development services to help your business thrive
                </motion.p>
              </div>
            </div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3"
            >
              {[
                {
                  icon: <Palette className="h-10 w-10 text-neutral-800" />,
                  title: "UI/UX Design",
                  description:
                    "We create intuitive, engaging user experiences that delight your customers and drive conversions.",
                },
                {
                  icon: <Code className="h-10 w-10 text-neutral-800" />,
                  title: "Web Development",
                  description:
                    "Our developers build fast, responsive, and accessible websites that work across all devices.",
                },
                {
                  icon: <Sparkles className="h-10 w-10 text-neutral-800" />,
                  title: "Brand Identity",
                  description:
                    "We craft distinctive brand identities that communicate your values and resonate with your audience.",
                },
                {
                  icon: <Zap className="h-10 w-10 text-neutral-800" />,
                  title: "Mobile Apps",
                  description: "We design and develop native and cross-platform mobile applications that users love.",
                },
                {
                  icon: <LineChart className="h-10 w-10 text-neutral-800" />,
                  title: "Digital Marketing",
                  description:
                    "We help you reach your target audience and grow your business with data-driven marketing strategies.",
                },
                {
                  icon: <MessageSquare className="h-10 w-10 text-neutral-800" />,
                  title: "Content Creation",
                  description: "We produce engaging content that tells your story and connects with your customers.",
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  variants={itemFadeIn}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="group relative overflow-hidden rounded-3xl border border-neutral-200 p-6 shadow-sm transition-all hover:shadow-md bg-white/80"
                >
                  <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-neutral-100 group-hover:bg-neutral-200 transition-all duration-300"></div>
                  <div className="relative space-y-3">
                    <div className="mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold text-neutral-900">{service.title}</h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">{service.description}</p>
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <a href="#" className="text-sm font-medium text-neutral-900 underline-offset-4 hover:underline">
                      Learn more
                    </a>
                    <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                      <ArrowRight className="h-4 w-4 text-neutral-900" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Portfolio/Work Bento Grid */}
        <section id="work" className="w-full py-12 md:py-24 lg:py-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="container mx-auto px-4 border border-neutral-200 rounded-3xl bg-neutral-50/30"
          >
            <div className="flex flex-col items-center justify-center space-y-4 text-center py-10">
              <div className="space-y-3">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block rounded-3xl bg-neutral-100 px-3 py-1 text-sm text-neutral-800"
                >
                  Portfolio
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-neutral-950"
                >
                  Our Work
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="mx-auto max-w-[900px] text-neutral-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                >
                  A showcase of our recent projects and collaborations
                </motion.p>
              </div>
            </div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mx-auto grid max-w-7xl gap-6 py-12 md:grid-cols-4 md:grid-rows-2"
            >
              {/* Bento Grid Items */}
              <motion.div
                variants={itemFadeIn}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-3xl md:col-span-2 md:row-span-2 h-[400px] md:h-auto border border-neutral-200"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity group-hover:opacity-100 z-10"></div>
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
                  alt="Portfolio Item 1"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white opacity-0 transition-opacity group-hover:opacity-100 z-20">
                  <h3 className="text-xl font-bold">E-commerce Redesign</h3>
                  <p className="text-sm">A complete overhaul of an online retail platform</p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mt-3"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-3xl bg-white/20 backdrop-blur-sm border-white/40 text-white hover:bg-white/30"
                    >
                      View Project <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
              <motion.div
                variants={itemFadeIn}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-3xl h-[200px] border border-neutral-200"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity group-hover:opacity-100 z-10"></div>
                <img
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80"
                  alt="Portfolio Item 2"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white opacity-0 transition-opacity group-hover:opacity-100 z-20">
                  <h3 className="text-xl font-bold">Mobile App Design</h3>
                  <p className="text-sm">UI/UX for a fitness tracking application</p>
                </div>
              </motion.div>
              <motion.div
                variants={itemFadeIn}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-3xl h-[200px] border border-neutral-200"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity group-hover:opacity-100 z-10"></div>
                <img
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80"
                  alt="Portfolio Item 3"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white opacity-0 transition-opacity group-hover:opacity-100 z-20">
                  <h3 className="text-xl font-bold">Brand Identity</h3>
                  <p className="text-sm">Complete rebrand for a tech startup</p>
                </div>
              </motion.div>
              <motion.div
                variants={itemFadeIn}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-3xl h-[200px] border border-neutral-200"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity group-hover:opacity-100 z-10"></div>
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80"
                  alt="Portfolio Item 4"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white opacity-0 transition-opacity group-hover:opacity-100 z-20">
                  <h3 className="text-xl font-bold">Web Application</h3>
                  <p className="text-sm">Dashboard design for a SaaS platform</p>
                </div>
              </motion.div>
              <motion.div
                variants={itemFadeIn}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-3xl md:col-span-2 h-[200px] border border-neutral-200"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity group-hover:opacity-100 z-10"></div>
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
                  alt="Portfolio Item 5"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white opacity-0 transition-opacity group-hover:opacity-100 z-20">
                  <h3 className="text-xl font-bold">Marketing Campaign</h3>
                  <p className="text-sm">Integrated digital campaign for product launch</p>
                </div>
              </motion.div>
            </motion.div>
            <div className="flex justify-center pb-10">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="rounded-3xl bg-neutral-900 text-white hover:bg-neutral-800 group">
                  View All Projects
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="inline-block"
                  >
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </motion.span>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* About/Team Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="container mx-auto px-4 border border-neutral-200 rounded-3xl"
          >
            <div className="grid gap-12 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-4 p-6"
              >
                <div className="inline-block rounded-3xl bg-neutral-100 px-3 py-1 text-sm text-neutral-800">About Us</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-neutral-950">Our Story</h2>
                <p className="text-neutral-600 md:text-lg">
                  Founded in 2015, our design studio has grown from a small team of passionate designers to a
                  full-service creative agency. We believe in the power of design to transform businesses and create
                  meaningful connections with audiences.
                </p>
                <p className="text-neutral-600 md:text-lg">
                  Our approach combines strategic thinking, creative excellence, and technical expertise to deliver
                  solutions that not only look beautiful but also drive results.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row pt-4">
                  <Button variant="outline" size="lg" className="rounded-3xl border-neutral-300">
                    Our Process
                  </Button>
                  <Button variant="outline" size="lg" className="rounded-3xl border-neutral-300">
                    Join Our Team
                  </Button>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center justify-center"
              >
                <div className="relative h-[350px] w-full md:h-[450px] lg:h-[500px] overflow-hidden rounded-3xl">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1080&q=80"
                    alt="Team Photo"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
            <div className="mt-16 px-6 pb-10">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-bold tracking-tighter sm:text-3xl text-neutral-950"
              >
                Meet Our Team
              </motion.h3>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
              >
                {[
                  { name: "Alex Johnson", role: "Creative Director", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80" },
                  { name: "Sam Taylor", role: "Lead Designer", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80" },
                  { name: "Jordan Smith", role: "Senior Developer", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80" },
                  { name: "Casey Brown", role: "Project Manager", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80" },
                ].map((member, index) => (
                  <motion.div
                    key={index}
                    variants={itemFadeIn}
                    whileHover={{ y: -10 }}
                    className="group relative overflow-hidden rounded-3xl border border-neutral-200 bg-white"
                  >
                    <img
                      src={member.img}
                      alt={member.name}
                      className="h-[300px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent p-4 text-white z-10">
                      <h4 className="font-bold">{member.name}</h4>
                      <p className="text-sm opacity-90">{member.role}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Testimonials */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="container mx-auto px-4 border border-neutral-200 rounded-3xl bg-neutral-50/50"
          >
            <div className="flex flex-col items-center justify-center space-y-4 text-center py-10">
              <div className="space-y-3">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block rounded-3xl bg-white px-3 py-1 text-sm text-neutral-800 border border-neutral-200"
                >
                  Testimonials
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-neutral-950"
                >
                  What Our Clients Say
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="mx-auto max-w-[900px] text-neutral-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                >
                  Don't just take our word for it - hear from some of our satisfied clients
                </motion.p>
              </div>
            </div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2"
            >
              {[
                {
                  quote:
                    "Working with this team transformed our brand. They understood our vision perfectly and delivered beyond our expectations.",
                  author: "Sarah Johnson",
                  company: "CEO, TechStart",
                },
                {
                  quote:
                    "The attention to detail and creative solutions provided by the team helped us increase our conversion rate by 40%.",
                  author: "Michael Chen",
                  company: "Marketing Director, GrowthCo",
                },
                {
                  quote:
                    "Their strategic approach to design not only improved our user experience but also strengthened our brand identity.",
                  author: "Emma Rodriguez",
                  company: "Product Manager, InnovateLabs",
                },
                {
                  quote:
                    "From concept to execution, the team demonstrated exceptional skill and professionalism. Highly recommended!",
                  author: "David Kim",
                  company: "Founder, NextWave",
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={itemFadeIn}
                  whileHover={{ y: -10 }}
                  className="flex flex-col justify-between rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm"
                >
                  <div>
                    <div className="flex gap-0.5 text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-5 w-5"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                    <blockquote className="mt-4 text-lg font-medium leading-relaxed text-neutral-800">"{testimonial.quote}"</blockquote>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="h-10 w-10 rounded-full bg-neutral-100"></div>
                    <div className="ml-4">
                      <p className="font-medium text-neutral-900">{testimonial.author}</p>
                      <p className="text-sm text-neutral-500">{testimonial.company}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="container mx-auto grid items-center gap-12 px-4 md:px-6 lg:grid-cols-2 border border-neutral-200 rounded-3xl bg-white"
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-3 p-6"
            >
              <div className="inline-block rounded-3xl bg-neutral-100 px-3 py-1 text-sm text-neutral-800">Contact</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-neutral-950">Let's Work Together</h2>
              <p className="max-w-[600px] text-neutral-600 md:text-lg">
                Ready to start your next project? Get in touch with us to discuss how we can help bring your vision to
                life.
              </p>
              <div className="mt-8 space-y-4">
                <motion.div whileHover={{ x: 5 }} className="flex items-start gap-3">
                  <div className="rounded-3xl bg-neutral-100 p-2">
                    <MapPin className="h-5 w-5 text-neutral-800" />
                  </div>
                  <div>
                    <h3 className="font-medium text-neutral-900">Our Location</h3>
                    <p className="text-sm text-neutral-500">123 Design Street, Creative City, 10001</p>
                  </div>
                </motion.div>
                <motion.div whileHover={{ x: 5 }} className="flex items-start gap-3">
                  <div className="rounded-3xl bg-neutral-100 p-2">
                    <Mail className="h-5 w-5 text-neutral-800" />
                  </div>
                  <div>
                    <h3 className="font-medium text-neutral-900">Email Us</h3>
                    <p className="text-sm text-neutral-500">hello@designstudio.com</p>
                  </div>
                </motion.div>
                <motion.div whileHover={{ x: 5 }} className="flex items-start gap-3">
                  <div className="rounded-3xl bg-neutral-100 p-2">
                    <Phone className="h-5 w-5 text-neutral-800" />
                  </div>
                  <div>
                    <h3 className="font-medium text-neutral-900">Call Us</h3>
                    <p className="text-sm text-neutral-500">+1 (555) 123-4567</p>
                  </div>
                </motion.div>
              </div>
              <div className="mt-8 flex space-x-3">
                {[
                  { icon: <Instagram className="h-5 w-5" />, label: "Instagram" },
                  { icon: <Twitter className="h-5 w-5" />, label: "Twitter" },
                  { icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn" },
                  { icon: <Facebook className="h-5 w-5" />, label: "Facebook" },
                ].map((social, index) => (
                  <motion.div key={index} whileHover={{ y: -5, scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <a
                      href="#"
                      className="rounded-3xl border border-neutral-200 p-2 text-neutral-500 hover:text-neutral-900 hover:border-neutral-900 transition-colors inline-block"
                    >
                      {social.icon}
                      <span className="sr-only">{social.label}</span>
                    </a>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl border border-neutral-200 bg-neutral-50/50 p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold text-neutral-950">Send Us a Message</h3>
              <p className="text-sm text-neutral-500">
                Fill out the form below and we'll get back to you shortly.
              </p>
              <form className="mt-6 space-y-3" onSubmit={(e) => e.preventDefault()}>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="first-name"
                      className="text-sm font-medium leading-none text-neutral-800"
                    >
                      First name
                    </label>
                    <Input id="first-name" placeholder="Enter your first name" className="rounded-3xl bg-white border-neutral-300" />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="last-name"
                      className="text-sm font-medium leading-none text-neutral-800"
                    >
                      Last name
                    </label>
                    <Input id="last-name" placeholder="Enter your last name" className="rounded-3xl bg-white border-neutral-300" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium leading-none text-neutral-800"
                  >
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Enter your email" className="rounded-3xl bg-white border-neutral-300" />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium leading-none text-neutral-800"
                  >
                    Message
                  </label>
                  <Textarea id="message" placeholder="Enter your message" className="min-h-[120px] rounded-3xl bg-white border-neutral-300" />
                </div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="pt-2">
                  <Button type="submit" className="w-full rounded-3xl bg-neutral-900 text-white hover:bg-neutral-800">
                    Send Message
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-neutral-200 bg-white">
        <div className="container mx-auto px-4 py-12 grid gap-8 lg:grid-cols-4 border-x border-neutral-100">
          <div className="space-y-3">
            <a href="/" className="flex items-center space-x-3">
              <motion.div
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="h-10 w-10 rounded-3xl bg-neutral-900 flex items-center justify-center"
              >
                <Sparkles className="h-5 w-5 text-white" />
              </motion.div>
              <span className="font-bold text-xl text-neutral-950">Studio</span>
            </a>
            <p className="text-sm text-neutral-500">
              We create beautiful, functional designs that help businesses grow and connect with their audience.
            </p>
            <div className="flex space-x-3 pt-2">
              {[
                { icon: <Instagram className="h-5 w-5" />, label: "Instagram" },
                { icon: <Twitter className="h-5 w-5" />, label: "Twitter" },
                { icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn" },
                { icon: <Github className="h-5 w-5" />, label: "GitHub" },
              ].map((social, index) => (
                <motion.div key={index} whileHover={{ y: -5, scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <a href="#" className="text-neutral-500 hover:text-neutral-900 inline-block">
                    {social.icon}
                    <span className="sr-only">{social.label}</span>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-md font-bold text-neutral-900">Company</h3>
            <nav className="mt-4 flex flex-col space-y-2 text-sm">
              <a href="#about" className="text-neutral-500 hover:text-neutral-900">
                About Us
              </a>
              <a href="#" className="text-neutral-500 hover:text-neutral-900">
                Careers
              </a>
              <a href="#" className="text-neutral-500 hover:text-neutral-900">
                Our Process
              </a>
            </nav>
          </div>
          <div>
            <h3 className="text-md font-bold text-neutral-900">Services</h3>
            <nav className="mt-4 flex flex-col space-y-2 text-sm">
              <a href="#" className="text-neutral-500 hover:text-neutral-900">
                UI/UX Design
              </a>
              <a href="#" className="text-neutral-500 hover:text-neutral-900">
                Web Development
              </a>
              <a href="#" className="text-neutral-500 hover:text-neutral-900">
                Brand Identity
              </a>
            </nav>
          </div>
          <div className="space-y-3">
            <h3 className="text-md font-bold text-neutral-900">Subscribe to our newsletter</h3>
            <p className="text-sm text-neutral-500">
              Stay updated with our latest projects, design tips, and company news.
            </p>
            <form className="flex space-x-2 pt-1" onSubmit={(e) => e.preventDefault()}>
              <Input type="email" placeholder="Enter your email" className="max-w-lg flex-1 rounded-3xl bg-white border-neutral-300" />
              <Button type="submit" className="rounded-3xl bg-neutral-900 text-white hover:bg-neutral-800">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="border-t border-neutral-200 py-6">
          <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500">
            <p>© {new Date().getFullYear()} Studio. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Designed & Built with Love.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
