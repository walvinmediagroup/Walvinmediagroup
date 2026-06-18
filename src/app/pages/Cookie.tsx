export function CookiePage() {
  return (
    <div className="pt-32 pb-24 px-6" style={{ background: "var(--background)" }}>
      <div className="max-w-[760px] mx-auto">
        <div className="mb-6 px-4 py-3 rounded-xl text-sm" style={{ background: "var(--mint)", border: "1px solid var(--lime)", fontFamily: "var(--font-body)" }}>
          <strong>Template notice:</strong> This page is a template. It requires review by a qualified legal professional before publication and use.
        </div>
        <h1 style={{ fontFamily: "var(--font-heading)", marginBottom: "2rem" }}>Cookie Policy</h1>
        <div className="space-y-6 text-base leading-relaxed" style={{ color: "var(--secondary-text)", fontFamily: "var(--font-body)" }}>
          <section>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "1.25rem", color: "var(--charcoal)", marginBottom: "0.75rem" }}>What are cookies?</h2>
            <p>Cookies are small text files stored on your device when you visit a website. They help websites function correctly and can also be used to collect analytics data.</p>
          </section>
          <section>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "1.25rem", color: "var(--charcoal)", marginBottom: "0.75rem" }}>Cookies we use</h2>
            <p><strong>Necessary cookies:</strong> Required for the website to function. These cannot be disabled.</p>
            <p className="mt-2"><strong>Analytics cookies:</strong> Used to understand how visitors use this website. Only set with your consent.</p>
            <p className="mt-2"><strong>Marketing cookies:</strong> Used to deliver relevant advertising. Only set with your consent.</p>
          </section>
          <section>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "1.25rem", color: "var(--charcoal)", marginBottom: "0.75rem" }}>Managing cookies</h2>
            <p>You can manage or withdraw cookie consent at any time using the cookie preferences link at the bottom of the page. You can also control cookies via your browser settings.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
