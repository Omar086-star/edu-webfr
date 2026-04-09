import SEOHead from "@/components/SEOHead";

export default function Privacy() {
  return (
    <>
      <SEOHead title="Privacy Policy" description="Our privacy policy explains how we handle your data." path="/privacy" />
      <section className="section-padding">
        <div className="container-narrow prose prose-neutral max-w-3xl mx-auto">
          <h1 className="font-display text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
          <p className="text-muted-foreground text-sm mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">1. Information We Collect</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">We only collect information that you voluntarily provide through our contact form: your name, email address, subject, and message. We do not use tracking cookies or third-party analytics services.</p>

          <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">2. How We Use Your Information</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">Information submitted through the contact form is used solely to respond to your inquiry. We do not sell, share, or distribute your personal information to third parties.</p>

          <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">3. Cookies</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">This website uses only essential cookies required for basic functionality (such as remembering your cookie consent preference). No advertising or tracking cookies are used.</p>

          <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">4. Data Storage & Security</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">Any data collected is stored securely and retained only as long as necessary to fulfill the purpose for which it was collected. We implement appropriate security measures to protect your data.</p>

          <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">5. Your Rights</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">You have the right to request access to, correction of, or deletion of your personal data at any time. To exercise these rights, please contact us through the contact form.</p>

          <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">6. Changes to This Policy</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date.</p>
        </div>
      </section>
    </>
  );
}
