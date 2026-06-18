import { useRef } from "react";
import { Link } from "react-router";
import { motion, useInView } from "motion/react";
import { ArrowUpRight, Layers, Smartphone, Play, FileText, MessageCircle, PieChart, BarChart2, Target, XCircle } from "lucide-react";

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

const services = [
  {
    icon: Layers,
    name: "Social Media Management",
    what: "End-to-end management of your social media presence,from strategy and content planning to creation, scheduling and regular account review.",
    who: "Businesses that want to hand over their social media completely, or add consistent support to what they already do.",
    includes: ["Monthly content strategy", "Content creation and design", "Post scheduling", "Platform-specific optimisation", "Monthly performance review"],
    problem: "Most small businesses know they should be posting more consistently, but running the business has to come first. A managed service removes the ongoing pressure.",
    process: "We start with a discovery session to understand your business, customers and goals. From there, I build a monthly content plan for your approval before anything is scheduled.",
    cta: "Ask about management",
  },
  {
    icon: Smartphone,
    name: "Content Creation",
    what: "Branded graphics, written captions, carousels, photography direction and short-form video editing,produced to match your business identity.",
    who: "Businesses that want better-looking content without investing in a full design team.",
    includes: ["Branded static graphics", "Caption writing", "Carousel posts", "Photography briefs and direction", "Short-form video editing"],
    problem: "Generic content does not build a recognisable brand. Consistent, well-designed content signals professionalism and builds audience trust over time.",
    process: "I gather your brand preferences, any existing assets and your business goals. Content is then produced in batches, reviewed by you, and refined before publishing.",
    cta: "Ask about content creation",
  },
  {
    icon: Play,
    name: "Short-Form Video",
    what: "Planning, scripting support and editing for Instagram Reels, TikTok and YouTube Shorts,designed to work for businesses with limited filming experience.",
    who: "Businesses that want to use video without knowing where to start.",
    includes: ["Video concept planning", "Script and shot list support", "Editing and subtitles", "Cover image creation", "Platform-specific formatting"],
    problem: "Short-form video is one of the most effective tools for reach, but most small businesses find it intimidating. I make the process straightforward.",
    process: "I plan the content concept and provide clear guidance on what to film. You send over the raw footage and I handle the editing and captions.",
    cta: "Ask about video content",
  },
  {
    icon: FileText,
    name: "Content Strategy",
    what: "A practical document outlining your content direction, audience, tone of voice, platform recommendations and monthly themes.",
    who: "Businesses that want to understand their social media better before committing to ongoing management.",
    includes: ["Audience and competitor analysis", "Platform recommendations", "Content pillars and themes", "Tone of voice guidance", "Monthly content framework"],
    problem: "Posting without a plan produces inconsistent results. A clear strategy means every piece of content has a purpose.",
    process: "After an initial consultation, I produce a written strategy document for your business. This can be used independently or as the foundation for a managed package.",
    cta: "Ask about strategy",
  },
  {
    icon: MessageCircle,
    name: "Community Management",
    what: "Timely, on-brand responses to comments and messages,keeping your online presence active and professional.",
    who: "Businesses that want to maintain engagement without monitoring their accounts every hour.",
    includes: ["Comment responses", "Direct message handling", "Review acknowledgement", "Escalation for complex enquiries", "Weekly activity summary"],
    problem: "Unanswered comments and messages can make a business look inactive or indifferent. Consistent engagement builds trust.",
    process: "I agree response guidelines with you upfront and flag anything that needs your direct input. Anything outside those guidelines is referred back to you.",
    cta: "Ask about community management",
  },
  {
    icon: PieChart,
    name: "Social Media Audits",
    what: "A practical written review of your current social media profiles,covering presentation, content quality, consistency and opportunity areas.",
    who: "Businesses that want an honest assessment of where they stand before making decisions about investment.",
    includes: ["Profile and bio review", "Content quality assessment", "Posting consistency review", "Competitor context", "Actionable written recommendations"],
    problem: "Many businesses are putting effort into social media without a clear picture of whether it is working or what needs to change.",
    process: "Complete the audit request form. I review your profiles and send a written report within five to seven working days.",
    cta: "Request an audit",
  },
  {
    icon: BarChart2,
    name: "Reporting and Analytics",
    what: "Clear monthly reports that explain what is happening with your social media,in plain English, not just a spreadsheet of numbers.",
    who: "Businesses that want to understand what their social media is doing without needing a marketing background.",
    includes: ["Reach and engagement summary", "Best-performing content", "Audience growth", "Honest commentary on what worked", "Recommendations for next month"],
    problem: "Data without interpretation is not useful. Monthly reporting should tell you something you can act on.",
    process: "Reports are delivered at the end of each calendar month. We review them together in the Growth and Partner packages.",
    cta: "Ask about reporting",
  },
  {
    icon: Target,
    name: "Paid Social Advertising",
    what: "Campaign setup, targeting, creative production and ongoing management for Facebook and Instagram Ads.",
    who: "Businesses ready to invest in paid reach alongside organic content.",
    includes: ["Campaign strategy", "Audience targeting setup", "Ad creative", "Budget management", "Performance reporting"],
    problem: "Organic reach continues to shrink. Paid advertising, done correctly, can reach precisely the right audience in a specific location.",
    process: "Paid advertising is available as an add-on to existing packages. Ad spend is paid directly to the platform,I charge a management fee separately.",
    cta: "Ask about paid advertising",
  },
];

const notOffered = [
  "Buying followers or artificial engagement",
  "Automated spam interactions",
  "Guaranteed viral content or follower targets",
  "Misleading reviews or fake testimonials",
  "Unethical advertising practices",
  "Content that misrepresents your business",
];

export function ServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-6" style={{ background: "var(--background)" }}>
        <div className="max-w-[1320px] mx-auto max-w-2xl">
          <Section>
            <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--lime-dark)", fontFamily: "var(--font-body)" }}>
              Services
            </motion.p>
            <motion.h1 variants={fadeUp} style={{ fontFamily: "var(--font-heading)" }}>
              Practical social media support built around your business.
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-5 text-lg leading-relaxed max-w-xl" style={{ color: "var(--secondary-text)", fontFamily: "var(--font-body)" }}>
              Choose complete monthly management, individual content services or strategic guidance.
            </motion.p>
          </Section>
        </div>
      </section>

      {/* Service sections */}
      {services.map(({ icon: Icon, name, what, who, includes, problem, process, cta }, i) => (
        <section
          key={name}
          className="py-16 md:py-20 px-6 border-t"
          style={{ background: i % 2 === 0 ? "var(--background)" : "var(--neutral-grey)", borderColor: "var(--border)" }}
        >
          <div className="max-w-[1320px] mx-auto">
            <Section>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <motion.div variants={fadeUp}>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "var(--lime)" }}>
                      <Icon size={18} style={{ color: "var(--charcoal)" }} />
                    </div>
                    <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "1.75rem" }}>{name}</h2>
                  </div>
                  <p className="text-base leading-relaxed mb-5" style={{ color: "var(--secondary-text)", fontFamily: "var(--font-body)" }}>{what}</p>
                  <div className="mb-5 p-4 rounded-xl" style={{ background: "var(--mint)", border: "1px solid var(--lime)" }}>
                    <p className="text-sm font-semibold mb-1" style={{ fontFamily: "var(--font-heading)" }}>Who is this for?</p>
                    <p className="text-sm" style={{ color: "var(--charcoal)", fontFamily: "var(--font-body)" }}>{who}</p>
                  </div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold transition-all hover:-translate-y-px"
                    style={{ background: "var(--lime)", color: "var(--charcoal)", fontFamily: "var(--font-body)" }}
                  >
                    {cta} <ArrowUpRight size={14} />
                  </Link>
                </motion.div>
                <motion.div variants={fadeUp} className="space-y-6">
                  <div>
                    <h3 className="mb-3" style={{ fontFamily: "var(--font-heading)", fontSize: "1rem" }}>What may be included</h3>
                    <ul className="space-y-2">
                      {includes.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm" style={{ fontFamily: "var(--font-body)" }}>
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "var(--lime-dark)" }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-2" style={{ fontFamily: "var(--font-heading)", fontSize: "1rem" }}>The problem it addresses</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--secondary-text)", fontFamily: "var(--font-body)" }}>{problem}</p>
                  </div>
                  <div>
                    <h3 className="mb-2" style={{ fontFamily: "var(--font-heading)", fontSize: "1rem" }}>How it works</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--secondary-text)", fontFamily: "var(--font-body)" }}>{process}</p>
                  </div>
                </motion.div>
              </div>
            </Section>
          </div>
        </section>
      ))}

      {/* What I don't offer */}
      <section className="py-16 px-6" style={{ background: "var(--charcoal-dark)", color: "#fff" }}>
        <div className="max-w-[1320px] mx-auto">
          <Section>
            <motion.h2 variants={fadeUp} className="mb-6" style={{ fontFamily: "var(--font-heading)", color: "#fff" }}>
              What I do not offer
            </motion.h2>
            <motion.p variants={fadeUp} className="mb-8 max-w-xl" style={{ color: "#aaa", fontFamily: "var(--font-body)" }}>
              Honest work means being clear about what I will not do, regardless of what is requested.
            </motion.p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {notOffered.map((item) => (
                <motion.div key={item} variants={fadeUp} className="flex items-start gap-3 p-4 rounded-xl" style={{ background: "rgba(255,255,255,0.05)" }}>
                  <XCircle size={16} className="mt-0.5 shrink-0" style={{ color: "#ef4444" }} />
                  <span className="text-sm" style={{ color: "#ccc", fontFamily: "var(--font-body)" }}>{item}</span>
                </motion.div>
              ))}
            </div>
          </Section>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6" style={{ background: "var(--neutral-grey)" }}>
        <div className="max-w-[760px] mx-auto text-center">
          <Section>
            <motion.h2 variants={fadeUp} className="mb-5" style={{ fontFamily: "var(--font-heading)" }}>Not sure which service you need?</motion.h2>
            <motion.p variants={fadeUp} className="mb-8 text-base" style={{ color: "var(--secondary-text)", fontFamily: "var(--font-body)" }}>
              Start with a free social media audit. I will review your current profiles and recommend a practical next step.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold transition-all hover:-translate-y-px" style={{ background: "var(--charcoal-dark)", color: "#fff", fontFamily: "var(--font-body)" }}>
                Get a free audit <ArrowUpRight size={16} />
              </Link>
              <Link to="/packages" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold border transition-all hover:bg-white" style={{ borderColor: "var(--charcoal)", color: "var(--charcoal)", fontFamily: "var(--font-body)" }}>
                View packages
              </Link>
            </motion.div>
          </Section>
        </div>
      </section>
    </div>
  );
}
