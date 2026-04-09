import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { trackEvent } from "@/lib/analytics";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email";
    if (!form.subject.trim()) e.subject = "Subject is required";
    if (!form.message.trim()) e.message = "Message is required";
    else if (form.message.length > 1000) e.message = "Message must be under 1000 characters";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    trackEvent("contact_submit");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <>
        <SEOHead title="Contact" description="Get in touch for web development, consulting, or project inquiries." path="/contact" />
        <div className="section-padding">
          <div className="container-narrow text-center">
            <CheckCircle2 size={48} className="text-primary mx-auto mb-4" />
            <h1 className="font-display text-3xl font-bold text-foreground mb-4">Message Sent!</h1>
            <p className="text-muted-foreground">Thank you for reaching out. I'll get back to you as soon as possible.</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <SEOHead title="Contact" description="Get in touch for web development, consulting, or project inquiries." path="/contact" />

      <section className="section-padding" style={{ background: "var(--hero-gradient)" }}>
        <div className="container-narrow text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">Contact</span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">Let's Work Together</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or need consulting? Fill out the form below and I'll be in touch within 24 hours.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-2xl mx-auto px-4">
          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            {(["name", "email", "subject"] as const).map((field) => (
              <div key={field}>
                <label htmlFor={field} className="block text-sm font-medium text-foreground mb-1.5 capitalize">{field}</label>
                <input
                  id={field}
                  type={field === "email" ? "email" : "text"}
                  value={form[field]}
                  onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                  className={`w-full px-4 py-2.5 rounded-xl border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring ${errors[field] ? "border-destructive" : "border-border"}`}
                  maxLength={field === "email" ? 255 : 100}
                />
                {errors[field] && <p className="text-xs text-destructive mt-1">{errors[field]}</p>}
              </div>
            ))}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">Message</label>
              <textarea
                id="message"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={`w-full px-4 py-2.5 rounded-xl border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none ${errors.message ? "border-destructive" : "border-border"}`}
                maxLength={1000}
              />
              {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
            </div>
            <button type="submit" className="btn-primary w-full sm:w-auto">
              <Send size={16} /> Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
