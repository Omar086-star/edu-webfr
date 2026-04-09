import { Link } from "react-router-dom";
import { Code, Users, Lightbulb, ArrowRight, Check } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import SectionHeading from "@/components/SectionHeading";
import { trackClick } from "@/lib/analytics";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "I build modern, responsive web applications using industry-leading technologies. From single-page applications to complex platforms, every project is crafted for performance, accessibility, and maintainability.",
    value: "Get a robust, scalable web presence that serves your users and grows with your business.",
    deliverables: ["Custom web applications", "Responsive landing pages", "E-commerce solutions", "API development & integration", "Performance optimization", "Code review & refactoring"],
  },
  {
    icon: Users,
    title: "Administrative Coordination",
    description: "I help organizations streamline their workflows, manage projects effectively, and keep teams aligned. From documentation to stakeholder communication, I ensure nothing falls through the cracks.",
    value: "Save time and reduce friction with organized, efficient project operations.",
    deliverables: ["Project planning & tracking", "Documentation & reporting", "Stakeholder communication", "Process optimization", "Team coordination", "Meeting facilitation & follow-up"],
  },
  {
    icon: Lightbulb,
    title: "Technical Consulting",
    description: "I provide strategic guidance on technology decisions, helping businesses choose the right tools, architectures, and approaches for their unique needs. My advice is practical, unbiased, and focused on long-term value.",
    value: "Make confident technology decisions backed by real-world experience and strategic insight.",
    deliverables: ["Technology assessment", "Architecture planning", "Digital transformation strategy", "Vendor evaluation", "Technical due diligence", "Training & knowledge transfer"],
  },
];

export default function Services() {
  return (
    <>
      <SEOHead title="Services" description="Web development, administrative coordination, and technical consulting services for businesses." path="/services" />

      <section className="section-padding" style={{ background: "var(--hero-gradient)" }}>
        <div className="container-narrow text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">Services</span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
            Development, Coordination & Consulting
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A complete range of services designed to help you build better products, run smoother operations, and make smarter technology decisions.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide space-y-12">
          {services.map((s, i) => (
            <div key={s.title} className="card-surface-static p-6 sm:p-8 lg:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                <div className="lg:col-span-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <s.icon size={24} className="text-primary" />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-3">{s.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">{s.description}</p>
                  <div className="p-4 rounded-xl bg-primary/5 border border-primary/10 mb-6">
                    <p className="text-sm font-medium text-foreground">{s.value}</p>
                  </div>
                  <Link to="/contact" className="btn-primary text-sm" onClick={() => trackClick("services_cta")}>
                    Discuss This Service <ArrowRight size={14} />
                  </Link>
                </div>
                <div className="lg:col-span-2">
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-4">Typical Deliverables</h3>
                  <ul className="space-y-3">
                    {s.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <Check size={16} className="text-primary mt-0.5 shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-secondary/30">
        <div className="container-narrow text-center">
          <h2 className="font-display text-3xl font-bold text-foreground mb-4">Need Something Custom?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Every business is unique. Let's discuss your specific needs and find the right solution.
          </p>
          <Link to="/contact" className="btn-primary" onClick={() => trackClick("services_final_cta")}>
            Start a Conversation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
