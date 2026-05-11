import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  Users,
  ClipboardList,
  CalendarCheck,
  MessageSquare,
  BarChart3,
} from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { trackClick } from "@/lib/analytics";

const services = [
  "Project planning and follow-up",
  "Administrative documentation",
  "Concept notes and project proposals",
  "Meeting organization and reporting",
  "Partner and stakeholder communication",
  "Workflow and task coordination",
  "Beneficiary data organization",
  "Internal reporting and presentations",
];

const strengths = [
  {
    icon: ClipboardList,
    title: "Structured Organization",
    text: "Turning scattered ideas, tasks, and documents into clear workflows, timelines, and responsibilities.",
  },
  {
    icon: FileText,
    title: "Strong Documentation",
    text: "Preparing concept notes, reports, summaries, administrative letters, and project files in a clear professional format.",
  },
  {
    icon: Users,
    title: "Team Coordination",
    text: "Coordinating between teams, partners, field actors, and stakeholders to keep work aligned and moving forward.",
  },
  {
    icon: CalendarCheck,
    title: "Follow-up Discipline",
    text: "Tracking tasks, deadlines, meetings, and next steps so important details do not get lost.",
  },
  {
    icon: MessageSquare,
    title: "Clear Communication",
    text: "Writing professional messages, partnership emails, meeting summaries, and follow-up communication.",
  },
  {
    icon: BarChart3,
    title: "Data-Aware Administration",
    text: "Organizing forms, tables, beneficiary lists, referrals, and administrative data for better decision-making.",
  },
];

const experience = [
  "Civil society and humanitarian project coordination",
  "Educational and child-focused initiatives",
  "Legal office and referral workflow organization",
  "Digital literacy and training project planning",
  "Magazine and publication management",
  "Partnership outreach and donor communication",
  "Community dialogue and awareness campaigns",
  "Website and digital platform coordination",
];

export default function AdministrativeCoordination() {
  return (
    <>
      <SEOHead
        title="Administrative Coordination"
        description="Administrative coordination services including project planning, documentation, reporting, partner communication, and workflow organization."
        path="/administrative-coordination"
      />

      {/* Hero */}
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
              Administrative
              <span className="block text-orange-400">Coordination</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/75 leading-relaxed max-w-2xl">
              I help organizations transform ideas into organized projects,
              clear documents, strong follow-up systems, and professional
              communication with partners and teams.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="btn-primary"
                onClick={() => trackClick("admin_coordination_contact")}
              >
                Discuss Your Project <ArrowRight size={16} />
              </Link>

              <Link
                to="/projects"
                className="btn-secondary border-white/20 text-white hover:bg-white hover:text-black"
              >
                View Related Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What I Offer */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                What I Offer
              </span>

              <h2 className="font-display text-3xl font-bold text-foreground mt-3 mb-4">
                Practical support for organized and reliable project work.
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                This service is designed for associations, NGOs, educational
                initiatives, legal offices, and small teams that need structure,
                clarity, and consistent administrative follow-up.
              </p>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((item) => (
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

      {/* Strengths */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              Strengths
            </span>

            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
              Key strengths and working style
            </h2>

            <p className="text-muted-foreground">
              My coordination approach combines field understanding,
              documentation, digital organization, and professional follow-up.
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

      {/* Experience */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                  Experience
                </span>

                <h2 className="font-display text-3xl font-bold text-foreground mt-3 mb-4">
                  Areas where I have coordinated work
                </h2>

                <p className="text-muted-foreground leading-relaxed">
                  My administrative coordination experience comes from real
                  projects across education, civil society, humanitarian work,
                  legal support, media, and digital platforms.
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

      {/* Process */}
      <section className="section-padding bg-black text-white">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-orange-300">
              Process
            </span>

            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-3 mb-4">
              How I organize the work
            </h2>

            <p className="text-white/65">
              A simple process that keeps the project clear from the first
              discussion to the final delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {[
              {
                step: "01",
                title: "Understand",
                text: "Clarify goals, needs, stakeholders, and expected outcomes.",
              },
              {
                step: "02",
                title: "Structure",
                text: "Turn the idea into documents, tasks, timeline, and responsibilities.",
              },
              {
                step: "03",
                title: "Coordinate",
                text: "Follow up with teams, organize communication, and track progress.",
              },
              {
                step: "04",
                title: "Report",
                text: "Prepare summaries, reports, next steps, and final documentation.",
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
            Need support organizing your project?
          </h2>

          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            I can help you transform your idea into a clear plan, professional
            documents, organized workflow, and reliable follow-up system.
          </p>

          <Link
            to="/contact"
            className="btn-primary"
            onClick={() => trackClick("admin_coordination_final_cta")}
          >
            Start a Conversation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}