import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Code,
  Users,
  Lightbulb,
  ArrowRight,
  CheckCircle2,
  Star,
} from "lucide-react";
import SEOHead from "@/components/SEOHead";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import MotionReveal from "@/components/MotionReveal";
import NetworkSphere from "@/components/NetworkSphere";
import NetworkSphereC from "@/components/NetworkSphereC";
import NetworkSphereCC from "@/components/NetworkSphereCC";

import { trackClick } from "@/lib/analytics";
import { portfolioProjects } from "@/lib/portfolio-data";
import ScrollThreadsBackground from "@/components/ScrollThreadsBackground";

const services = [
  {
    icon: Code,
    title: "Web Development",
    desc: "Modern, performant web applications built with cutting-edge technologies. From landing pages to complex platforms.",
  },
  {
    icon: Users,
    title: "Administrative Coordination",
    desc: "Streamlined project workflows, documentation, and team coordination to keep your operations running smoothly.",
  },
  {
    icon: Lightbulb,
    title: "Technical Consulting",
    desc: "Strategic guidance on technology decisions, architecture planning, and digital transformation initiatives.",
  },
];

const whyMe = [
  {
    title: "Quality Delivery",
    desc: "Every project is built to high standards with clean code, thorough testing, and attention to detail.",
  },
  {
    title: "Organized Communication",
    desc: "Clear timelines, regular updates, and transparent processes so you always know where things stand.",
  },
  {
    title: "Strategic Thinking",
    desc: "Beyond code — I help you make the right technology decisions for long-term success.",
  },
  {
    title: "Technical Execution",
    desc: "From concept to deployment, I handle the full technical lifecycle with precision.",
  },
];

export default function Home() {
  const featured = portfolioProjects
    .filter((project) => project.featured)
    .slice(0, 6);

  const { scrollY } = useScroll();
  const heroScale = useTransform(scrollY, [0, 600], [1, 1.12]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0.35]);
  const heroY = useTransform(scrollY, [0, 500], [0, 120]);

  return (
    <>
      <SEOHead
        title="Home"
        description="Professional web development, administrative coordination, and consulting services. Building modern digital solutions."
        path="/"
      />
{/* Hero */}
<section className="section-padding relative overflow-hidden min-h-[90vh] flex items-center bg-black">
  {/* Animated gradient background */}
  <motion.div
    className="absolute inset-0"
    animate={{
      background: [
        "radial-gradient(circle at 20% 20%, rgba(255,120,0,0.35), transparent 35%), radial-gradient(circle at 80% 70%, rgba(120,40,255,0.25), transparent 40%), linear-gradient(135deg, #000000, #120804, #000000)",
        "radial-gradient(circle at 80% 25%, rgba(255,180,40,0.35), transparent 35%), radial-gradient(circle at 25% 75%, rgba(255,60,0,0.25), transparent 40%), linear-gradient(135deg, #000000, #1a0b02, #000000)",
        "radial-gradient(circle at 50% 15%, rgba(255,90,0,0.30), transparent 35%), radial-gradient(circle at 70% 80%, rgba(255,210,80,0.20), transparent 40%), linear-gradient(135deg, #000000, #100703, #000000)",
      ],
    }}
    transition={{
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    }}
  />

  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/45" />

  {/* Glow blur */}
  <motion.div
    className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-orange-500/20 blur-3xl"
    animate={{
      scale: [1, 1.25, 1],
      opacity: [0.35, 0.75, 0.35],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />

  <ScrollThreadsBackground />

  <motion.div
    className="container-narrow text-center relative z-10"
    style={{ y: heroY }}
    initial={{ opacity: 0, y: 60 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
  >
    <span className="inline-block text-xs font-semibold uppercase tracking-widest text-orange-300 mb-4">
     Omar MULLA : Web Developer & Consultant
    </span>

    <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance">
      Building Digital Solutions <br className="hidden sm:block" />
      That Drive Results
    </h1>

    <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
      I combine web development expertise with administrative coordination
      and strategic consulting to deliver projects that are technically
      excellent and business-aligned.
    </p>

    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
      <Link
        to="/projects"
        className="btn-primary"
        onClick={() => trackClick("hero_projects")}
      >
        View Projects <ArrowRight size={16} />
      </Link>

      <Link
        to="/contact"
        className="btn-secondary border-white/30 text-white hover:bg-white hover:text-black"
        onClick={() => trackClick("hero_contact")}
      >
        Contact Me
      </Link>
    </div>
  </motion.div>
</section>

      {/* Continuous Video Area */}
      <div className="relative overflow-hidden">
        {/* Shared Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/videomp_.mp4" type="video/mp4" />
        </video>

        {/* Global Overlay */}
        <div className="absolute inset-0 bg-black/55 z-[1]" />

        {/* Soft Glow */}
        <div className="absolute inset-0 z-[2] pointer-events-none bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_55%)]" />

        {/* Services */}
        <section className="section-padding relative z-10 overflow-hidden">
          <div className="container-wide relative z-10">
            <SectionHeading
              label="Services"
              title="How I Can Help"
              description="Comprehensive solutions across development, coordination, and consulting."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.map((service, i) => (
                <MotionReveal key={service.title} delay={i * 0.12}>
                  <div className="group relative h-full rounded-2xl p-[1px] overflow-hidden bg-gradient-to-br from-primary/20 via-white/10 to-primary/5 hover:from-primary/80 hover:via-white/50 hover:to-primary/40 transition-all duration-700 hover:-translate-y-2 hover:scale-[1.02]">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[conic-gradient(from_180deg,transparent,rgba(255,255,255,0.7),transparent,rgba(255,255,255,0.35),transparent)] animate-spin-slow" />

                    <div className="absolute -inset-10 opacity-0 group-hover:opacity-40 transition-opacity duration-700 bg-primary blur-3xl" />

                    <div className="relative h-full card-surface p-6 rounded-2xl bg-background/75 backdrop-blur-xl">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 transition-all duration-700 group-hover:bg-primary/20 group-hover:shadow-[0_0_35px_rgba(255,255,255,0.35)] group-hover:scale-110">
                        <service.icon
                          size={24}
                          className="text-primary transition-all duration-700 group-hover:drop-shadow-[0_0_12px_currentColor]"
                        />
                      </div>

                      <h3 className="font-display text-lg font-semibold text-foreground mb-2 transition-all duration-700 group-hover:text-primary">
                        {service.title}
                      </h3>

                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {service.desc}
                      </p>

                      <Link
                        to="/services"
                        className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all"
                        onClick={() => trackClick("services_cta")}
                      >
                        Learn more <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </MotionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        {featured.length > 0 && (
          <section className="section-padding relative z-10 overflow-hidden">
            <div className="container-wide relative z-10">
              <SectionHeading
                label="Portfolio"
                title="Featured Projects"
                description="A selection of recent work across different domains and industries."
              />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featured.map((project, i) => (
                  <MotionReveal key={project.id} delay={i * 0.1}>
                    <div
                      className="group relative transition-all duration-500 hover:z-20 hover:scale-[1.03] hover:animate-container-crash"
                      style={{
                        animationDelay: `${i * 0.08}s`,
                      }}
                    >
                      <div className="relative rounded-2xl transition-all duration-500 group-hover:shadow-[0_0_45px_rgba(255,255,255,0.18)]">
                        <ProjectCard project={project} />
                      </div>
                    </div>
                  </MotionReveal>
                ))}
              </div>

              <div className="mt-10 text-center">
                <Link
                  to="/projects"
                  className="btn-secondary"
                  onClick={() => trackClick("view_all_projects")}
                >
                  View All Projects <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Why Work With Me */}

 <section className="section-padding relative z-10 overflow-hidden">
          <div className="container-wide relative z-10">
            <SectionHeading
              label="Why Me"
              title="Why Work With Me"
              description="What sets my approach apart."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {whyMe.map((item, i) => (
                <MotionReveal key={item.title} delay={i * 0.1}>
                  <div className="group relative p-[1px] rounded-2xl bg-gradient-to-br from-primary/20 via-white/10 to-transparent hover:from-primary/70 hover:via-white/40 hover:to-primary/20 transition-all duration-700">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-700 bg-primary blur-2xl" />

                    <div className="flex gap-4 p-5 h-full rounded-2xl bg-background/80 backdrop-blur-xl transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-[1.02]">
                      <div className="relative">
                        <CheckCircle2
                          size={20}
                          className="text-primary mt-0.5 shrink-0 transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_currentColor]"
                        />
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md bg-primary/50" />
                      </div>

                      <div>
                        <h3 className="font-semibold text-foreground mb-1 transition-all duration-500 group-hover:text-primary">
                          {item.title}
                        </h3>

                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </MotionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section-padding relative z-10 overflow-hidden">
          <div className="container-narrow text-center relative z-10">
            <SectionHeading
              label="Testimonials"
              title="What Clients Say"
              description="Client testimonials coming soon."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <MotionReveal key={i} delay={(i - 1) * 0.12}>
                  <div className="card-surface-static p-6 text-left h-full hover:-translate-y-2 transition-all duration-500 backdrop-blur-sm bg-white/10">
                    <div className="flex gap-1 mb-3">
                      {[...Array(5)].map((_, j) => (
                        <Star
                          key={j}
                          size={14}
                          className="text-primary fill-primary"
                        />
                      ))}
                    </div>

                    <p className="text-sm text-white italic mb-4">
                      "Testimonial placeholder — this section will feature real
                      client feedback."
                    </p>

                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-white/20" />
                      <div>
                        <p className="text-sm font-medium text-white">
                          Client Name
                        </p>
                        <p className="text-xs text-gray-300">Company</p>
                      </div>
                    </div>
                  </div>
                </MotionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-padding relative z-10 overflow-hidden">
          <MotionReveal>
            <div className="container-narrow text-center relative z-10">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to Start a Project?
              </h2>

              <p className="text-gray-300 max-w-xl mx-auto mb-8">
                Let's discuss how I can help bring your ideas to life with
                professional development and consulting.
              </p>

              <Link
                to="/contact"
                className="btn-primary"
                onClick={() => trackClick("final_cta")}
              >
                Get in Touch <ArrowRight size={16} />
              </Link>
            </div>
          </MotionReveal>
        </section>
        <section className="relative h-screen bg-blackss overflow-hidden">
  <NetworkSphere />
  <NetworkSphereC />
  <NetworkSphereCC />

  <div className="relative z-10 flex justify-between px-20 pt-20">
    <h1 className="text-white/100 text-2xl"> </h1>
    <h1 className="text-white/100 text-2xl"> </h1>
  </div>
</section>
      </div>
    </>
  );
}