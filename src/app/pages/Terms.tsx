export function TermsPage() {
  return (
    <div className="pt-32 pb-24 px-6" style={{ background: "var(--background)" }}>
      <div className="max-w-[760px] mx-auto">
        <div className="mb-6 px-4 py-3 rounded-xl text-sm" style={{ background: "var(--mint)", border: "1px solid var(--lime)", fontFamily: "var(--font-body)" }}>
          <strong>Template notice:</strong> This page is a template. It requires review by a qualified legal professional before publication and use.
        </div>
        <h1 style={{ fontFamily: "var(--font-heading)", marginBottom: "2rem" }}>Terms of Service</h1>
        <div className="space-y-6 text-base leading-relaxed" style={{ color: "var(--secondary-text)", fontFamily: "var(--font-body)" }}>
          <section>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "1.25rem", color: "var(--charcoal)", marginBottom: "0.75rem" }}>Services</h2>
            <p>Walvin Media Group provides social media management and related services as agreed in writing with each client. The scope of work, pricing and timelines are set out in the client proposal or service agreement.</p>
          </section>
          <section>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "1.25rem", color: "var(--charcoal)", marginBottom: "0.75rem" }}>Payment</h2>
            <p>Services are invoiced monthly in advance. Payment is due within [X] days of invoice. Late payments may result in paused services.</p>
          </section>
          <section>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "1.25rem", color: "var(--charcoal)", marginBottom: "0.75rem" }}>Cancellation</h2>
            <p>After the agreed minimum term, contracts may be cancelled with one calendar month's notice in writing.</p>
          </section>
          <section>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "1.25rem", color: "var(--charcoal)", marginBottom: "0.75rem" }}>Intellectual property</h2>
            <p>Content created as part of an agreed service becomes the property of the client upon final payment. Strategy documents and templates remain the property of Walvin Media Group.</p>
          </section>
          <section>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "1.25rem", color: "var(--charcoal)", marginBottom: "0.75rem" }}>Limitations</h2>
            <p>Walvin Media Group does not guarantee specific follower counts, engagement rates, leads or financial outcomes from social media activity. Results depend on many factors outside our control.</p>
          </section>
          <section>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "1.25rem", color: "var(--charcoal)", marginBottom: "0.75rem" }}>Governing law</h2>
            <p>These terms are governed by the laws of England and Wales.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
