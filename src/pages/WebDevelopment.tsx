import { Link } from "react-router-dom";
import {
  ArrowRight,
  Code2,
  MonitorSmartphone,
  Database,
  Gauge,
  ShieldCheck,
  LayoutTemplate,
  CheckCircle2,
} from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { trackClick } from "@/lib/analytics";

const offers = [
  "Custom websites and web applications",
  "Association and NGO websites",
  "Educational and magazine platforms",
  "Legal office and service websites",
  "Landing pages and portfolio websites",
  "Responsive design for mobile and desktop",
  "Search, filtering, pagination, and export tools",
  "Deployment and technical setup",
];

const strengths = [
  {
    icon: LayoutTemplate,
    title: "Clean UI Structure",
    text: "Building clear, readable, and professional interfaces that help visitors understand your mission quickly.",
  },
  {
    icon: MonitorSmartphone,
    title: "Responsive Design",
    text: "Websites adapted for desktop, tablet, and mobile with a smooth browsing experience.",
  },
  {
    icon: Database,
    title: "Data-Driven Systems",
    text: "Creating tools for forms, tables, search, filtering, referrals, and structured records.",
  },
  {
    icon: Gauge,
    title: "Performance Focus",
    text: "Optimizing loading, structure, and user experience for a faster and smoother website.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Setup",
    text: "Using modern tools and clean practices to keep the website maintainable and scalable.",
  },
  {
    icon: Code2,
    title: "Modern Stack",
    text: "Working with React, TypeScript, Tailwind CSS, Next.js, Supabase, and API integrations.",
  },
];

const experience = [
  "8 Kanoun Children Magazine website",
  "Nakhla Foundation website",
  "Legal office website",
  "Legal referral management system",
  "Investor Eye website",
  "Qatra Association website",
  "Data analysis and filtering platform",
  "Ma Drive driving school website",
  "Educational association website",
];

export default function WebDevelopment() {
  return (
    <>
      <SEOHead
        title="Web Development"
        description="Web development services including websites, platforms, dashboards, data systems, and responsive digital solutions."
        path="/web-development"
      />

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
              Web
              <span className="block text-orange-400">Development</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/75 leading-relaxed max-w-2xl">
              I build modern websites, digital platforms, and practical web
              tools for associations, educational projects, legal services,
              businesses, and community-based organizations.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="btn-primary"
                onClick={() => trackClick("web_development_contact")}
              >
                Discuss Your Website <ArrowRight size={16} />
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

      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                What I Build
              </span>

              <h2 className="font-display text-3xl font-bold text-foreground mt-3 mb-4">
                Websites and platforms designed for real use.
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                My web development work focuses on clarity, usability, speed,
                and practical structure. The goal is not only to make a website
                look good, but to make it useful for visitors, teams, partners,
                and beneficiaries.
              </p>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {offers.map((item) => (
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

      <section className="section-padding bg-secondary/30">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              Strengths
            </span>

            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
              My development approach
            </h2>

            <p className="text-muted-foreground">
              A balance between visual quality, technical structure, content
              clarity, and long-term maintainability.
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

      <section className="section-padding">
        <div className="container-wide">
          <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                  Experience
                </span>

                <h2 className="font-display text-3xl font-bold text-foreground mt-3 mb-4">
                  Digital projects I have worked on
                </h2>

                <p className="text-muted-foreground leading-relaxed">
                  My web development experience includes educational,
                  humanitarian, business, legal, association, and data-focused
                  platforms.
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

      <section className="section-padding bg-black text-white">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-orange-300">
              Process
            </span>

            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-3 mb-4">
              How I build a website
            </h2>

            <p className="text-white/65">
              A clear workflow from idea and content structure to launch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {[
              {
                step: "01",
                title: "Understand",
                text: "Clarify the goal, audience, content, and required features.",
              },
              {
                step: "02",
                title: "Design",
                text: "Build the structure, layout, visual direction, and user journey.",
              },
              {
                step: "03",
                title: "Develop",
                text: "Code the website or platform using modern tools and clean components.",
              },
              {
                step: "04",
                title: "Launch",
                text: "Test, optimize, deploy, and prepare the project for real users.",
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

      <section className="section-padding">
        <div className="container-narrow text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Need a website or digital platform?
          </h2>

          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            I can help you transform your idea into a clear, professional, and
            functional web experience.
          </p>

          <Link
            to="/contact"
            className="btn-primary"
            onClick={() => trackClick("web_development_final_cta")}
          >
            Start a Conversation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}