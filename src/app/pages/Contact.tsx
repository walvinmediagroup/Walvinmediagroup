import { useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { CheckCircle, Mail, Phone, MapPin, Clock } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger} className={className}>
      {children}
    </motion.div>
  );
}

type FormState = {
  name: string; businessName: string; email: string; phone: string;
  website: string; socialLinks: string; service: string; budget: string;
  goals: string; message: string; contactPref: string; consent: boolean;
};

const services = [
  "Social Media Management", "Content Creation", "Short-Form Video",
  "Content Strategy", "Community Management", "Social Media Audit",
  "Reporting & Analytics", "Paid Social Advertising", "Not sure yet",
];

const budgets = ["Under £300", "£300–£500", "£500–£750", "£750–£1,000", "£1,000+", "Not sure yet"];

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormState>({
    name: "", businessName: "", email: "", phone: "", website: "",
    socialLinks: "", service: "", budget: "", goals: "", message: "",
    contactPref: "email", consent: false,
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  const validate = () => {
    const e: typeof errors = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!form.businessName.trim()) e.businessName = "Please enter your business name.";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Please enter a valid email address.";
    if (!form.service) e.service = "Please select a service.";
    if (!form.message.trim()) e.message = "Please add a short message.";
    if (!form.consent) e.consent = "Please confirm you have read the privacy policy.";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const e2 = validate();
    if (Object.keys(e2).length > 0) { setErrors(e2); return; }
    setSubmitted(true);
  };

  const field = (key: keyof FormState, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((er) => { const n = { ...er }; delete n[key]; return n; });
  };

  const inputClass = "w-full px-3.5 py-3 rounded-xl text-sm outline-none focus:ring-2 focus:ring-[var(--lime)] transition-shadow";
  const inputStyle = { background: "var(--input-background)", border: "1px solid var(--border)", color: "var(--charcoal)", fontFamily: "var(--font-body)" } as React.CSSProperties;

  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 px-6" style={{ background: "var(--background)" }}>
        <div className="max-w-[1320px] mx-auto">
          <Section>
            <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--lime-dark)", fontFamily: "var(--font-body)" }}>
              Contact
            </motion.p>
            <motion.h1 variants={fadeUp} className="max-w-2xl" style={{ fontFamily: "var(--font-heading)" }}>
              Tell me about your business.
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-5 text-lg max-w-xl leading-relaxed" style={{ color: "var(--secondary-text)", fontFamily: "var(--font-body)" }}>
              Enquiries are welcome even if you are not sure exactly what you need. Fill in what you can and I will suggest a practical next step.
            </motion.p>
          </Section>
        </div>
      </section>

      {/* Form + details */}
      <section className="pb-24 px-6" style={{ background: "var(--background)" }}>
        <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact info */}
          <Section>
            <motion.div variants={fadeUp} className="space-y-6 lg:pt-4">
              <div>
                <h2 className="mb-4" style={{ fontFamily: "var(--font-heading)", fontSize: "1.25rem" }}>Get in touch</h2>
                <ul className="space-y-4">
                  <li>
                    <a href="mailto:walvinmediagroup@gmail.com" className="flex items-start gap-3 group">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5" style={{ background: "var(--lime)" }}>
                        <Mail size={15} style={{ color: "var(--charcoal)" }} />
                      </div>
                      <div>
                        <p className="text-xs font-semibold mb-0.5" style={{ color: "var(--secondary-text)", fontFamily: "var(--font-body)" }}>Email</p>
                        <p className="text-sm font-medium group-hover:underline" style={{ fontFamily: "var(--font-body)" }}>walvinmediagroup@gmail.com</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="tel:07482561306" className="flex items-start gap-3 group">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5" style={{ background: "var(--lime)" }}>
                        <Phone size={15} style={{ color: "var(--charcoal)" }} />
                      </div>
                      <div>
                        <p className="text-xs font-semibold mb-0.5" style={{ color: "var(--secondary-text)", fontFamily: "var(--font-body)" }}>Phone</p>
                        <p className="text-sm font-medium group-hover:underline" style={{ fontFamily: "var(--font-body)" }}>07482561306</p>
                      </div>
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5" style={{ background: "var(--lime)" }}>
                      <MapPin size={15} style={{ color: "var(--charcoal)" }} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold mb-0.5" style={{ color: "var(--secondary-text)", fontFamily: "var(--font-body)" }}>Location</p>
                      <p className="text-sm" style={{ fontFamily: "var(--font-body)" }}>Sheffield, South Yorkshire</p>
                      <p className="text-xs mt-0.5" style={{ color: "var(--secondary-text)", fontFamily: "var(--font-body)" }}>Remote services available UK-wide</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5" style={{ background: "var(--lime)" }}>
                      <Clock size={15} style={{ color: "var(--charcoal)" }} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold mb-0.5" style={{ color: "var(--secondary-text)", fontFamily: "var(--font-body)" }}>Response time</p>
                      <p className="text-sm" style={{ fontFamily: "var(--font-body)" }}>Within 1–2 working days</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Booking calendar placeholder */}
              <div className="rounded-2xl p-5" style={{ background: "var(--neutral-grey)", border: "1px solid var(--border)" }}>
                <h3 className="mb-2" style={{ fontFamily: "var(--font-heading)", fontSize: "0.95rem" }}>Book an introductory call</h3>
                <p className="text-sm mb-4" style={{ color: "var(--secondary-text)", fontFamily: "var(--font-body)" }}>
                  Prefer to talk first? Use the booking link to choose a time that suits you.
                </p>
                <a
                  href="PLACEHOLDER"
                  className="inline-flex items-center justify-center w-full px-4 py-2.5 rounded-xl text-sm font-semibold transition-all hover:-translate-y-px"
                  style={{ background: "var(--charcoal-dark)", color: "#fff", fontFamily: "var(--font-body)" }}
                >
                  Book a call
                </a>
              </div>
            </motion.div>
          </Section>

          {/* Form */}
          <div className="lg:col-span-2">
            <Section>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="rounded-2xl p-10 text-center"
                  style={{ background: "var(--card)", border: "1px solid var(--neutral-grey)" }}
                >
                  <CheckCircle size={48} className="mx-auto mb-5" style={{ color: "var(--lime-dark)" }} />
                  <h2 className="mb-3" style={{ fontFamily: "var(--font-heading)" }}>Message received</h2>
                  <p className="text-base leading-relaxed max-w-md mx-auto" style={{ color: "var(--secondary-text)", fontFamily: "var(--font-body)" }}>
                    Thanks for getting in touch. I will reply using the contact details you provided within 1–2 working days.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  variants={fadeUp}
                  onSubmit={handleSubmit}
                  className="rounded-2xl p-6 md:p-8 space-y-5"
                  style={{ background: "var(--card)", border: "1px solid var(--neutral-grey)" }}
                  noValidate
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {([
                      { id: "name", label: "Full name *", type: "text", key: "name" as const },
                      { id: "businessName", label: "Business name *", type: "text", key: "businessName" as const },
                      { id: "email", label: "Email address *", type: "email", key: "email" as const },
                      { id: "phone", label: "Telephone (optional)", type: "tel", key: "phone" as const },
                      { id: "website", label: "Website (optional)", type: "url", key: "website" as const },
                      { id: "socialLinks", label: "Social media links (optional)", type: "text", key: "socialLinks" as const },
                    ] as const).map(({ id, label, type, key }) => (
                      <div key={id}>
                        <label htmlFor={id} className="block text-xs font-semibold mb-1.5" style={{ fontFamily: "var(--font-body)", color: "var(--charcoal)" }}>{label}</label>
                        <input
                          id={id}
                          type={type}
                          value={form[key] as string}
                          onChange={(e) => field(key, e.target.value)}
                          className={inputClass}
                          style={{ ...inputStyle, borderColor: errors[key] ? "var(--destructive)" : "var(--border)" }}
                          aria-describedby={errors[key] ? `${id}-error` : undefined}
                        />
                        {errors[key] && <p id={`${id}-error`} className="mt-1 text-xs" style={{ color: "var(--destructive)", fontFamily: "var(--font-body)" }}>{errors[key]}</p>}
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="service" className="block text-xs font-semibold mb-1.5" style={{ fontFamily: "var(--font-body)" }}>Service of interest *</label>
                      <select
                        id="service"
                        value={form.service}
                        onChange={(e) => field("service", e.target.value)}
                        className={inputClass}
                        style={{ ...inputStyle, borderColor: errors.service ? "var(--destructive)" : "var(--border)" }}
                      >
                        <option value="">Select a service</option>
                        {services.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                      {errors.service && <p className="mt-1 text-xs" style={{ color: "var(--destructive)", fontFamily: "var(--font-body)" }}>{errors.service}</p>}
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-xs font-semibold mb-1.5" style={{ fontFamily: "var(--font-body)" }}>Approximate monthly budget</label>
                      <select
                        id="budget"
                        value={form.budget}
                        onChange={(e) => field("budget", e.target.value)}
                        className={inputClass}
                        style={inputStyle}
                      >
                        <option value="">Select a range</option>
                        {budgets.map((b) => <option key={b} value={b}>{b}</option>)}
                      </select>
                      <p className="mt-1 text-[11px]" style={{ color: "var(--secondary-text)", fontFamily: "var(--font-body)" }}>All budget levels are welcome.</p>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="goals" className="block text-xs font-semibold mb-1.5" style={{ fontFamily: "var(--font-body)" }}>Main goals</label>
                    <input
                      id="goals"
                      type="text"
                      value={form.goals}
                      onChange={(e) => field("goals", e.target.value)}
                      placeholder="e.g. more Instagram followers, better-looking content, more enquiries"
                      className={inputClass}
                      style={inputStyle}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold mb-1.5" style={{ fontFamily: "var(--font-body)" }}>Message *</label>
                    <textarea
                      id="message"
                      rows={4}
                      value={form.message}
                      onChange={(e) => field("message", e.target.value)}
                      placeholder="Tell me a little about your business and where you're at with social media"
                      className={`${inputClass} resize-none`}
                      style={{ ...inputStyle, borderColor: errors.message ? "var(--destructive)" : "var(--border)" }}
                    />
                    {errors.message && <p className="mt-1 text-xs" style={{ color: "var(--destructive)", fontFamily: "var(--font-body)" }}>{errors.message}</p>}
                  </div>

                  <div>
                    <label htmlFor="contactPref" className="block text-xs font-semibold mb-1.5" style={{ fontFamily: "var(--font-body)" }}>Preferred contact method</label>
                    <select
                      id="contactPref"
                      value={form.contactPref}
                      onChange={(e) => field("contactPref", e.target.value)}
                      className={inputClass}
                      style={inputStyle}
                    >
                      <option value="email">Email</option>
                      <option value="phone">Phone call</option>
                      <option value="whatsapp">WhatsApp</option>
                    </select>
                  </div>

                  <div className="flex items-start gap-3 pt-1">
                    <input
                      id="consent"
                      type="checkbox"
                      checked={form.consent}
                      onChange={(e) => { setForm((f) => ({ ...f, consent: e.target.checked })); setErrors((er) => { const n = { ...er }; delete n.consent; return n; }); }}
                      className="mt-1 w-4 h-4 rounded accent-[var(--lime-dark)]"
                    />
                    <label htmlFor="consent" className="text-xs leading-relaxed" style={{ color: "var(--secondary-text)", fontFamily: "var(--font-body)" }}>
                      I agree to my details being used to respond to this enquiry. I have read the{" "}
                      <a href="/privacy-policy" className="underline">Privacy Policy</a>.
                    </label>
                  </div>
                  {errors.consent && <p className="text-xs" style={{ color: "var(--destructive)", fontFamily: "var(--font-body)" }}>{errors.consent}</p>}

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl font-semibold transition-all hover:-translate-y-px"
                    style={{ background: "var(--charcoal-dark)", color: "#fff", fontFamily: "var(--font-body)" }}
                  >
                    Send enquiry
                  </button>
                </motion.form>
              )}
            </Section>
          </div>
        </div>
      </section>
    </div>
  );
}
