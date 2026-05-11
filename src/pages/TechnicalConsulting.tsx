import { Link } from "react-router-dom";
import {
  ArrowRight,
  Lightbulb,
  BrainCircuit,
  Database,
  Workflow,
  ShieldCheck,
  Layers3,
  CheckCircle2,
} from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { trackClick } from "@/lib/analytics";

const consultingAreas = [
  "Digital transformation strategy",
  "Technical architecture planning",
  "Platform and workflow design",
  "Data organization and filtering systems",
  "Referral and case-management systems",
  "Educational and NGO digital solutions",
  "Project technical assessment",
  "Website and platform optimization",
];

const strengths = [
  {
    icon: BrainCircuit,
    title: "Strategic Thinking",
    text: "Connecting technical decisions with real organizational goals and long-term sustainability.",
  },
  {
    icon: Workflow,
    title: "System Structuring",
    text: "Designing workflows and platforms that simplify operations and reduce administrative friction.",
  },
  {
    icon: Database,
    title: "Data-Oriented Solutions",
    text: "Building structures for search, filtering, referrals, exports, and organized information management.",
  },
  {
    icon: Layers3,
    title: "Scalable Planning",
    text: "Preparing systems and platforms that can evolve with organizational growth and future needs.",
  },
  {
    icon: ShieldCheck,
    title: "Practical Reliability",
    text: "Focusing on solutions that are usable, maintainable, and realistic for the actual working environment.",
  },
  {
    icon: Lightbulb,
    title: "Cross-Sector Experience",
    text: "Combining humanitarian, educational, administrative, and technical experience into practical consulting.",
  },
];

const experience = [
  "Digital literacy project planning",
  "Educational and NGO website strategy",
  "Legal referral system structuring",
  "Data filtering and export systems",
  "Humanitarian workflow organization",
  "Administrative digital transformation",
  "Project architecture and planning",
  "Community and educational platforms",
];

export default function TechnicalConsulting() {
  return (
    <>
      <SEOHead
        title="Technical Consulting"
        description="Technical consulting services including digital strategy, workflow systems, platform planning, and technical project architecture."
        path="/technical-consulting"
      />

      {/* HERO */}
      <section className="relative overflow-hidden min-h-[78vh] flex items-center bg-black">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-45"
          style={{
            backgroundImage:
              "url('/wide_professional_education_themed_banner_graphic.png')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40" />

        <div className="absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full bg-orange-500/20 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-[420px] h-[420px] rounded-full bg-purple-600/25 blur-3xl" />

        <div className="container-wide relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/10 text-white/80 text-xs uppercase tracking-[0.25em] font-semibold mb-6">
              Service
            </span>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6">
              Technical
              <span className="block text-orange-400">Consulting</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/75 leading-relaxed max-w-2xl">
              I help organizations and projects make smarter technical
              decisions, structure digital systems, and transform complex ideas
              into practical workflows and scalable solutions.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="btn-primary"
                onClick={() => trackClick("technical_consulting_contact")}
              >
                Discuss Your Project <ArrowRight size={16} />
              </Link>

              <Link
                to="/projects"
                className="btn-secondary border-white/20 text-white hover:bg-white hover:text-black"
              >
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT I DO */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                Consulting Areas
              </span>

              <h2 className="font-display text-3xl font-bold text-foreground mt-3 mb-4">
                Technical guidance for real operational needs.
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                My consulting work focuses on helping organizations choose the
                right digital direction, improve workflows, and create systems
                that are practical, sustainable, and scalable.
              </p>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {consultingAreas.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4"
                >
                  <CheckCircle2
                    size={18}
                    className="text-primary mt-0.5 shrink-0"
                  />

                  <p className="text-sm text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STRENGTHS */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              Strengths
            </span>

            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
              How I approach technical consulting
            </h2>

            <p className="text-muted-foreground">
              A consulting approach that combines technical structure,
              operational understanding, and practical execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {strengths.map((item) => (
              <div
                key={item.title}
                className="card-surface-static p-6 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon size={22} className="text-primary" />
                </div>

                <h3 className="font-semibold text-foreground mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                  Experience
                </span>

                <h2 className="font-display text-3xl font-bold text-foreground mt-3 mb-4">
                  Consulting and planning experience
                </h2>

                <p className="text-muted-foreground leading-relaxed">
                  Experience across digital systems, educational projects,
                  administrative structures, legal workflows, and humanitarian
                  operations.
                </p>
              </div>

              <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {experience.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-background border border-border p-4"
                  >
                    <p className="text-sm text-foreground font-medium">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-padding bg-black text-white">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-orange-300">
              Process
            </span>

            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-3 mb-4">
              How I work on consulting projects
            </h2>

            <p className="text-white/65">
              A structured process focused on clarity, analysis, and practical
              implementation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {[
              {
                step: "01",
                title: "Analyze",
                text: "Understand the current workflow, needs, and technical challenges.",
              },
              {
                step: "02",
                title: "Structure",
                text: "Design systems, architecture, and practical organizational logic.",
              },
              {
                step: "03",
                title: "Recommend",
                text: "Provide actionable technical recommendations and implementation paths.",
              },
              {
                step: "04",
                title: "Support",
                text: "Assist with execution, refinement, and long-term optimization.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <div className="text-orange-400 text-sm font-bold mb-4">
                  {item.step}
                </div>

                <h3 className="font-semibold text-xl mb-3">{item.title}</h3>

                <p className="text-sm text-white/60 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-narrow text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Need technical guidance for your project?
          </h2>

          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            I can help you structure your systems, improve workflows, and build
            practical digital solutions adapted to your real operational needs.
          </p>

          <Link
            to="/contact"
            className="btn-primary"
            onClick={() => trackClick("technical_consulting_final_cta")}
          >
            Start a Conversation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}