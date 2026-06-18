import { useRef } from "react";
import { Link } from "react-router";
import { motion, useInView } from "motion/react";
import { ArrowUpRight, CheckCircle, Minus } from "lucide-react";

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

const packages = [
  {
    name: "Essential",
    popular: false,
    best: "Small businesses that need a professional and consistent presence.",
    price: "From £299 per month",
    features: [
      { text: "1 platform managed", included: true },
      { text: "Monthly content plan", included: true },
      { text: "8 feed posts per month", included: true },
      { text: "Caption writing", included: true },
      { text: "Basic branded graphics", included: true },
      { text: "Content scheduling", included: true },
      { text: "Monthly performance summary", included: true },
      { text: "Short-form video / Reels", included: false },
      { text: "Story content", included: false },
      { text: "Community management", included: false },
      { text: "Monthly review call", included: false },
      { text: "Campaign planning", included: false },
    ],
    cta: "Ask about Essential",
  },
  {
    name: "Growth",
    popular: true,
    best: "Businesses that want regular content across multiple formats.",
    price: "From £499 per month",
    features: [
      { text: "Up to 2 platforms managed", included: true },
      { text: "Monthly content strategy", included: true },
      { text: "12 feed posts per month", included: true },
      { text: "Caption & hashtag research", included: true },
      { text: "Branded graphics", included: true },
      { text: "Content scheduling", included: true },
      { text: "Monthly report & review call", included: true },
      { text: "Short-form video / Reels", included: true },
      { text: "Story content", included: true },
      { text: "Basic community management", included: true },
      { text: "Monthly review call", included: true },
      { text: "Campaign planning", included: false },
    ],
    cta: "Ask about Growth",
  },
  {
    name: "Partner",
    popular: false,
    best: "Businesses wanting more complete ongoing social media support.",
    price: "Custom monthly quote",
    features: [
      { text: "Up to 3 platforms managed", included: true },
      { text: "Full monthly strategy", included: true },
      { text: "16+ content pieces per month", included: true },
      { text: "Caption & hashtag research", included: true },
      { text: "Branded graphics", included: true },
      { text: "Content scheduling", included: true },
      { text: "Detailed monthly reporting", included: true },
      { text: "Regular video content", included: true },
      { text: "Story content", included: true },
      { text: "Full community management", included: true },
      { text: "Monthly strategy call", included: true },
      { text: "Campaign planning", included: true },
    ],
    cta: "Discuss a custom package",
  },
];

const addOns = [
  "Additional platform",
  "Additional posts",
  "Short-form video editing",
  "On-location content session",
  "Paid advertising management",
  "Additional community management",
  "Social media audit",
  "Strategy consultation (from £149)",
  "Profile setup or optimisation",
  "Template design pack",
];

const faqPricing = [
  {
    q: "Are prices fixed?",
    a: "Packages are priced from a starting point. The final monthly cost depends on your specific requirements, the number of platforms and the volume of content. I always agree pricing upfront before work begins.",
  },
  {
    q: "Do I need to sign a long contract?",
    a: "I ask for a minimum of three months to allow enough time for the work to build momentum. After that, it is rolling monthly with one month's notice.",
  },
  {
    q: "Are there any hidden fees?",
    a: "No. All fees are agreed in your proposal before we start. Any additional requests outside the agreed scope are discussed and costed separately.",
  },
  {
    q: "What does onboarding look like?",
    a: "After agreeing on the package, I send an onboarding questionnaire covering your brand, customers, goals and any existing assets. We then have a short call to go through the details before I produce the first content plan.",
  },
  {
    q: "Do prices include VAT?",
    a: "All prices exclude VAT where applicable.",
  },
];

export function PackagesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-6" style={{ background: "var(--background)" }}>
        <div className="max-w-[1320px] mx-auto">
          <Section>
            <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--lime-dark)", fontFamily: "var(--font-body)" }}>
              Packages & pricing
            </motion.p>
            <motion.h1 variants={fadeUp} className="max-w-2xl" style={{ fontFamily: "var(--font-heading)" }}>
              Clear support for different stages of growth.
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-5 text-lg max-w-xl leading-relaxed" style={{ color: "var(--secondary-text)", fontFamily: "var(--font-body)" }}>
              Three packages built around the most common needs of Sheffield small businesses.
            </motion.p>
          </Section>
        </div>
      </section>

      {/* Packages */}
      <section className="pb-20 px-6" style={{ background: "var(--background)" }}>
        <div className="max-w-[1320px] mx-auto">
          <Section>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {packages.map(({ name, popular, best, price, features, cta }) => (
                <motion.div
                  key={name}
                  variants={fadeUp}
                  className="rounded-2xl p-7 flex flex-col relative"
                  style={{
                    background: popular ? "var(--charcoal-dark)" : "var(--card)",
                    border: popular ? "2px solid var(--lime)" : "1px solid var(--neutral-grey)",
                    color: popular ? "#fff" : "var(--charcoal)",
                  }}
                >
                  {popular && (
                    <span className="absolute -top-3 left-7 text-xs font-bold px-3 py-1 rounded-full" style={{ background: "var(--lime)", color: "var(--charcoal)", fontFamily: "var(--font-body)" }}>
                      Most popular
                    </span>
                  )}
                  <h2 className="mb-1" style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem" }}>{name}</h2>
                  <p className="text-sm mb-5" style={{ color: popular ? "#aaa" : "var(--secondary-text)", fontFamily: "var(--font-body)" }}>{best}</p>
                  <p className="font-bold text-xl mb-6" style={{ fontFamily: "var(--font-heading)", color: popular ? "var(--lime)" : "var(--charcoal)" }}>{price}</p>
                  <ul className="space-y-2.5 mb-8 flex-1">
                    {features.map(({ text, included }) => (
                      <li key={text} className="flex items-start gap-2.5 text-sm" style={{ fontFamily: "var(--font-body)", opacity: included ? 1 : 0.4 }}>
                        {included
                          ? <CheckCircle size={15} className="mt-0.5 shrink-0" style={{ color: "var(--lime)" }} />
                          : <Minus size={15} className="mt-0.5 shrink-0" />}
                        {text}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="w-full text-center px-5 py-3 rounded-xl font-semibold transition-all hover:-translate-y-px"
                    style={{
                      background: popular ? "var(--lime)" : "transparent",
                      color: popular ? "var(--charcoal)" : "var(--charcoal)",
                      border: popular ? "none" : "1.5px solid var(--charcoal)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {cta}
                  </Link>
                </motion.div>
              ))}
            </div>
            <motion.p variants={fadeUp} className="mt-6 text-sm text-center" style={{ color: "var(--secondary-text)", fontFamily: "var(--font-body)" }}>
              All prices exclude VAT where applicable. Final pricing is agreed before work begins.
            </motion.p>
          </Section>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 px-6" style={{ background: "var(--neutral-grey)" }}>
        <div className="max-w-[1320px] mx-auto">
          <Section>
            <motion.h2 variants={fadeUp} className="mb-3" style={{ fontFamily: "var(--font-heading)" }}>Optional add-ons</motion.h2>
            <motion.p variants={fadeUp} className="mb-8 text-base max-w-xl" style={{ color: "var(--secondary-text)", fontFamily: "var(--font-body)" }}>
              Add specific services to any package. Pricing depends on scope and is agreed before work begins.
            </motion.p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {addOns.map((item) => (
                <motion.div
                  key={item}
                  variants={fadeUp}
                  className="flex items-center gap-3 p-4 rounded-xl"
                  style={{ background: "#fff", border: "1px solid var(--border)" }}
                >
                  <span className="w-2 h-2 rounded-full shrink-0" style={{ background: "var(--lime)" }} />
                  <span className="text-sm" style={{ fontFamily: "var(--font-body)" }}>{item}</span>
                </motion.div>
              ))}
            </div>
          </Section>
        </div>
      </section>

      {/* FAQ pricing */}
      <section className="py-20 px-6" style={{ background: "var(--background)" }}>
        <div className="max-w-[800px] mx-auto">
          <Section>
            <motion.h2 variants={fadeUp} className="mb-8" style={{ fontFamily: "var(--font-heading)" }}>Pricing questions</motion.h2>
            <motion.div variants={fadeUp} className="space-y-0">
              {faqPricing.map(({ q, a }) => (
                <div key={q} className="py-5 border-b" style={{ borderColor: "var(--border)" }}>
                  <h3 className="mb-2" style={{ fontFamily: "var(--font-heading)", fontSize: "1rem" }}>{q}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--secondary-text)", fontFamily: "var(--font-body)" }}>{a}</p>
                </div>
              ))}
            </motion.div>
          </Section>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6" style={{ background: "var(--charcoal-dark)", color: "#fff" }}>
        <div className="max-w-[760px] mx-auto text-center">
          <Section>
            <motion.h2 variants={fadeUp} className="mb-4" style={{ fontFamily: "var(--font-heading)", color: "#fff" }}>Not sure what you need?</motion.h2>
            <motion.p variants={fadeUp} className="mb-8 text-base" style={{ color: "#aaa", fontFamily: "var(--font-body)" }}>
              Start with a free social media audit. I will review your profiles and recommend a practical starting point.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold transition-all hover:-translate-y-px" style={{ background: "var(--lime)", color: "var(--charcoal)", fontFamily: "var(--font-body)" }}>
                Request my free audit <ArrowUpRight size={16} />
              </Link>
            </motion.div>
          </Section>
        </div>
      </section>
    </div>
  );
}
