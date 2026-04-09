import { Link } from "react-router-dom";
import { Code, Users, Lightbulb, ArrowRight, CheckCircle2, Star } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import { useProjects } from "@/lib/projects-context";
import { trackClick } from "@/lib/analytics";

const services = [
  { icon: Code, title: "Web Development", desc: "Modern, performant web applications built with cutting-edge technologies. From landing pages to complex platforms." },
  { icon: Users, title: "Administrative Coordination", desc: "Streamlined project workflows, documentation, and team coordination to keep your operations running smoothly." },
  { icon: Lightbulb, title: "Technical Consulting", desc: "Strategic guidance on technology decisions, architecture planning, and digital transformation initiatives." },
];

const whyMe = [
  { title: "Quality Delivery", desc: "Every project is built to high standards with clean code, thorough testing, and attention to detail." },
  { title: "Organized Communication", desc: "Clear timelines, regular updates, and transparent processes so you always know where things stand." },
  { title: "Strategic Thinking", desc: "Beyond code — I help you make the right technology decisions for long-term success." },
  { title: "Technical Execution", desc: "From concept to deployment, I handle the full technical lifecycle with precision." },
];

export default function Home() {
  const { getFeaturedProjects } = useProjects();
  const featured = getFeaturedProjects().slice(0, 6);

  return (
    <>
      <SEOHead title="Home" description="Professional web development, administrative coordination, and consulting services. Building modern digital solutions." path="/" />

      {/* Hero */}
      <section className="section-padding relative overflow-hidden" style={{ background: "var(--hero-gradient)" }}>
        <div className="container-narrow text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4 animate-in">
            Web Developer & Consultant
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance animate-in-delay-1">
            Building Digital Solutions <br className="hidden sm:block" />
            That Drive Results
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-in-delay-2">
            I combine web development expertise with administrative coordination and strategic consulting to deliver projects that are technically excellent and business-aligned.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center animate-in-delay-3">
            <Link to="/projects" className="btn-primary" onClick={() => trackClick("hero_projects")}>
              View Projects <ArrowRight size={16} />
            </Link>
            <Link to="/contact" className="btn-secondary" onClick={() => trackClick("hero_contact")}>
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeading label="Services" title="How I Can Help" description="Comprehensive solutions across development, coordination, and consulting." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div key={s.title} className={`card-surface p-6 animate-in-delay-${i + 1}`}>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <s.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                <Link to="/services" className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all" onClick={() => trackClick("services_cta")}>
                  Learn more <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      {featured.length > 0 && (
        <section className="section-padding bg-secondary/30">
          <div className="container-wide">
            <SectionHeading label="Portfolio" title="Featured Projects" description="A selection of recent work across different domains and industries." />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featured.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link to="/projects" className="btn-secondary" onClick={() => trackClick("view_all_projects")}>
                View All Projects <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Why Work With Me */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeading label="Why Me" title="Why Work With Me" description="What sets my approach apart." />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {whyMe.map((item) => (
              <div key={item.title} className="flex gap-4 p-5 card-surface-static">
                <CheckCircle2 size={20} className="text-primary mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Placeholder */}
      <section className="section-padding bg-secondary/30">
        <div className="container-narrow text-center">
          <SectionHeading label="Testimonials" title="What Clients Say" description="Client testimonials coming soon." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="card-surface-static p-6 text-left">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, j) => <Star key={j} size={14} className="text-primary fill-primary" />)}
                </div>
                <p className="text-sm text-muted-foreground italic mb-4">"Testimonial placeholder — this section will feature real client feedback."</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-muted" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Client Name</p>
                    <p className="text-xs text-muted-foreground">Company</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding">
        <div className="container-narrow text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">Ready to Start a Project?</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Let's discuss how I can help bring your ideas to life with professional development and consulting.
          </p>
          <Link to="/contact" className="btn-primary" onClick={() => trackClick("final_cta")}>
            Get in Touch <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
