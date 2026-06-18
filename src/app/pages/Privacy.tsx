export function PrivacyPage() {
  return (
    <div className="pt-32 pb-24 px-6" style={{ background: "var(--background)" }}>
      <div className="max-w-[760px] mx-auto">
        <div className="mb-6 px-4 py-3 rounded-xl text-sm" style={{ background: "var(--mint)", border: "1px solid var(--lime)", fontFamily: "var(--font-body)" }}>
          <strong>Template notice:</strong> This page is a template. It requires review by a qualified legal professional before publication and use.
        </div>
        <h1 style={{ fontFamily: "var(--font-heading)", marginBottom: "2rem" }}>Privacy Policy</h1>
        <div className="space-y-6 text-base leading-relaxed" style={{ color: "var(--secondary-text)", fontFamily: "var(--font-body)" }}>
          <section>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "1.25rem", color: "var(--charcoal)", marginBottom: "0.75rem" }}>Who we are</h2>
            <p>Walvin Media Group is a social media management business based in Sheffield, South Yorkshire, United Kingdom. Contact: walvinmediagroup@gmail.com.</p>
          </section>
          <section>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "1.25rem", color: "var(--charcoal)", marginBottom: "0.75rem" }}>What data we collect</h2>
            <p>When you use our contact form or audit request form, we collect your name, business name, email address, and any information you choose to provide in your message. We may also collect your telephone number and website address if provided.</p>
          </section>
          <section>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "1.25rem", color: "var(--charcoal)", marginBottom: "0.75rem" }}>How we use your data</h2>
            <p>We use your personal data only to respond to your enquiry or provide the service requested. We do not sell or share your data with third parties for marketing purposes.</p>
          </section>
          <section>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "1.25rem", color: "var(--charcoal)", marginBottom: "0.75rem" }}>Your rights</h2>
            <p>Under UK GDPR, you have the right to access, correct or delete your personal data at any time. To exercise any of these rights, contact us at walvinmediagroup@gmail.com.</p>
          </section>
          <section>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "1.25rem", color: "var(--charcoal)", marginBottom: "0.75rem" }}>Cookies</h2>
            <p>For information on how we use cookies, please see our <a href="/cookie-policy" className="underline" style={{ color: "var(--charcoal)" }}>Cookie Policy</a>.</p>
          </section>
          <section>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "1.25rem", color: "var(--charcoal)", marginBottom: "0.75rem" }}>Changes to this policy</h2>
            <p>This policy may be updated from time to time. The most recent version will always be available on this page. Last reviewed: June 2026.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
