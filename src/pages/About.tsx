import { Link } from "react-router-dom";
import { ArrowRight, Target, Heart, Layers, Clock } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import SectionHeading from "@/components/SectionHeading";

const values = [
  { icon: Target, title: "Clarity", desc: "Clear communication and well-defined goals from day one." },
  { icon: Layers, title: "Organization", desc: "Structured processes that keep projects on track and stakeholders informed." },
  { icon: Heart, title: "Quality", desc: "Meticulous attention to detail in every line of code and every deliverable." },
  { icon: Clock, title: "Long-term Thinking", desc: "Solutions designed to scale and evolve with your business." },
];

const timeline = [
  { year: "Present", title: "Independent Developer & Consultant", desc: "Providing web development, administrative coordination, and consulting services to clients worldwide." },
  { year: "Previous", title: "Technical Lead & Project Coordinator", desc: "Led development teams and coordinated complex technical projects across multiple organizations." },
  { year: "Foundation", title: "Software Engineering", desc: "Built a strong foundation in computer science, modern web technologies, and project management." },
];

export default function About() {
  return (
    <>
      <SEOHead title="About" description="Learn about my approach to web development, consulting, and how I help businesses succeed." path="/about" />

      <section className="section-padding" style={{ background: "var(--hero-gradient)" }}>
        <div className="container-narrow text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">About</span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
            Developer, Coordinator, Consultant
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I bring a unique blend of technical development skills and strategic consulting experience to every project. My goal is to help businesses build solutions that are not only well-engineered but also aligned with their broader objectives.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeading label="Mission" title="My Approach" centered={false} />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>I believe the best digital solutions emerge when technical execution meets strategic thinking. That's why I don't just write code — I work closely with clients to understand their goals, challenges, and vision.</p>
                <p>Whether it's building a web application, coordinating a complex project, or advising on technology strategy, I bring the same commitment to quality, clarity, and results.</p>
                <p>My experience spans both hands-on development and high-level coordination, giving me a perspective that bridges the gap between business needs and technical possibilities.</p>
              </div>
            </div>
            <div className="space-y-4">
              {values.map((v) => (
                <div key={v.title} className="flex gap-4 p-4 card-surface-static">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <v.icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{v.title}</h3>
                    <p className="text-sm text-muted-foreground">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary/30">
        <div className="container-narrow">
          <SectionHeading label="Experience" title="Professional Journey" />
          <div className="max-w-2xl mx-auto space-y-0">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-6 pb-8 last:pb-0">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-primary shrink-0 mt-1.5" />
                  {i < timeline.length - 1 && <div className="w-px flex-1 bg-border mt-2" />}
                </div>
                <div>
                  <span className="text-xs font-semibold text-primary uppercase tracking-wide">{item.year}</span>
                  <h3 className="font-semibold text-foreground mt-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow text-center">
          <h2 className="font-display text-3xl font-bold text-foreground mb-4">Let's Work Together</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">Explore my work or reach out to discuss your next project.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/projects" className="btn-primary">View Projects <ArrowRight size={16} /></Link>
            <Link to="/contact" className="btn-secondary">Get in Touch</Link>
          </div>
        </div>
      </section>
    </>
  );
}
