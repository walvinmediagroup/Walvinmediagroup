import { useRef } from "react";
import { Link } from "react-router";
import { motion, useInView } from "motion/react";
import { ArrowUpRight, CheckCircle, MapPin } from "lucide-react";

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

const values = [
  { name: "Clear communication", desc: "You will always know what is happening with your content and why." },
  { name: "Honest recommendations", desc: "I will tell you what will and will not work for your business, based on your goals." },
  { name: "Consistent delivery", desc: "Content is planned, produced and scheduled on time, every month." },
  { name: "Practical creativity", desc: "Creative ideas that actually suit your business, not just what looks good in a portfolio." },
  { name: "Respect for your time", desc: "Clear briefings, efficient approvals and no unnecessary meetings." },
  { name: "Continuous improvement", desc: "Each month builds on what the data from the previous month shows." },
];

export function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-6" style={{ background: "var(--background)" }}>
        <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Section>
            <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--lime-dark)", fontFamily: "var(--font-body)" }}>
              About
            </motion.p>
            <motion.h1 variants={fadeUp} style={{ fontFamily: "var(--font-heading)" }}>
              Your social media manager, not another anonymous agency.
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-5 text-lg leading-relaxed" style={{ color: "var(--secondary-text)", fontFamily: "var(--font-body)" }}>
              I created Walvin Media Group to help small businesses build a stronger online presence without needing an internal marketing team or a large agency contract.
            </motion.p>
          </Section>
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="rounded-3xl overflow-hidden aspect-[4/5] w-full max-w-sm mx-auto" style={{ border: "2px solid var(--border)" }}>
              <img
                src="https://images.unsplash.com/photo-1758691737587-7630b4d31d16?w=600&h=750&fit=crop&auto=format"
                alt="Founder photograph placeholder,replace with your own"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-3 text-xs text-center" style={{ color: "var(--secondary-text)", fontFamily: "var(--font-body)" }}>
              Replace with your own photograph
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-6" style={{ background: "var(--neutral-grey)" }}>
        <div className="max-w-[760px] mx-auto">
          <Section>
            <motion.h2 variants={fadeUp} className="mb-6" style={{ fontFamily: "var(--font-heading)" }}>Why I started Walvin Media Group</motion.h2>
            <motion.div variants={fadeUp} className="space-y-4 text-base leading-relaxed" style={{ color: "var(--secondary-text)", fontFamily: "var(--font-body)" }}>
              <p>
                Running a small business already takes enough time. Most of the business owners I speak to know they should be posting more consistently,they just never have the time or headspace to do it properly.
              </p>
              <p>
                The options available often felt like too much or too little. Large agencies were priced for larger budgets and involved multiple account managers the client never spoke to directly. Generic freelance services lacked the strategic thinking that makes social media work.
              </p>
              <p>
                I wanted to offer something different: the personal attention and direct communication of a freelancer, organised and delivered with the consistency of an agency approach.
              </p>
              <p>
                Sheffield felt like the right place to start. There is a strong community of independent businesses here, and many of them are exactly who I wanted to work with.
              </p>
            </motion.div>
          </Section>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 px-6" style={{ background: "var(--background)" }}>
        <div className="max-w-[1320px] mx-auto">
          <Section>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div variants={fadeUp}>
                <h2 className="mb-6" style={{ fontFamily: "var(--font-heading)" }}>My approach to social media</h2>
                <div className="space-y-4 text-base leading-relaxed" style={{ color: "var(--secondary-text)", fontFamily: "var(--font-body)" }}>
                  <p>
                    Social media only works when it reflects what a business actually is. Generic content might fill a posting schedule, but it does not build an audience that cares.
                  </p>
                  <p>
                    My process starts with understanding your business properly,your customers, your goals and what makes you different. From there, everything I create is shaped around those specifics.
                  </p>
                  <p>
                    Content is planned a month at a time. You approve it before anything is scheduled. At the end of each month, I review what worked and use that to inform the following month.
                  </p>
                  <p>
                    I do not promise follower counts or guaranteed results. What I do promise is consistent, professional content published on time, with clear communication throughout.
                  </p>
                </div>
              </motion.div>
              <motion.div variants={fadeUp}>
                <h2 className="mb-6" style={{ fontFamily: "var(--font-heading)" }}>How clients work with me</h2>
                <div className="space-y-4">
                  {[
                    { step: "01", title: "You deal directly with me", body: "Not an account manager, not an assistant. Every conversation, every piece of content,handled by the same person who understands your business." },
                    { step: "02", title: "Monthly planning and approval", body: "Content is planned in advance and sent to you for review. Nothing goes out without your sign-off." },
                    { step: "03", title: "Transparent reporting", body: "Monthly reports cover what happened, what worked and what I plan to change. Written in plain English, not marketing jargon." },
                    { step: "04", title: "Straightforward communication", body: "Questions get answered quickly. Changes are handled without drama. If something is not working, I will tell you before you have to ask." },
                  ].map(({ step, title, body }) => (
                    <div key={step} className="flex gap-4 p-4 rounded-xl" style={{ background: "var(--card)", border: "1px solid var(--neutral-grey)" }}>
                      <span className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-xs font-bold" style={{ background: "var(--lime)", color: "var(--charcoal)", fontFamily: "var(--font-heading)" }}>{step}</span>
                      <div>
                        <p className="font-semibold mb-1" style={{ fontFamily: "var(--font-heading)", fontSize: "0.95rem" }}>{title}</p>
                        <p className="text-sm leading-relaxed" style={{ color: "var(--secondary-text)", fontFamily: "var(--font-body)" }}>{body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </Section>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6" style={{ background: "var(--charcoal-dark)", color: "#fff" }}>
        <div className="max-w-[1320px] mx-auto">
          <Section>
            <motion.h2 variants={fadeUp} className="mb-10" style={{ fontFamily: "var(--font-heading)", color: "#fff" }}>What I work by</motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {values.map(({ name, desc }) => (
                <motion.div key={name} variants={fadeUp} className="p-5 rounded-2xl" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <CheckCircle size={18} className="mb-3" style={{ color: "var(--lime)" }} />
                  <h3 className="mb-2" style={{ fontFamily: "var(--font-heading)", fontSize: "1rem", color: "#fff" }}>{name}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#aaa", fontFamily: "var(--font-body)" }}>{desc}</p>
                </motion.div>
              ))}
            </div>
          </Section>
        </div>
      </section>

      {/* Sheffield connection */}
      <section className="py-20 px-6" style={{ background: "var(--background)" }}>
        <div className="max-w-[760px] mx-auto">
          <Section>
            <div className="flex items-center gap-2 mb-6">
              <MapPin size={20} style={{ color: "var(--lime-dark)" }} />
              <h2 style={{ fontFamily: "var(--font-heading)" }}>Sheffield-based, UK-available</h2>
            </div>
            <div className="space-y-4 text-base leading-relaxed" style={{ color: "var(--secondary-text)", fontFamily: "var(--font-body)" }}>
              <p>
                Walvin Media Group is based in Sheffield, South Yorkshire. I work with local businesses across the city,from Kelham Island to Ecclesall Road, from the city centre to the outer suburbs.
              </p>
              <p>
                Understanding the local business community matters for content that actually resonates. Seasonal patterns, local events and the specific character of Sheffield's independent scene all feed into the work I produce.
              </p>
              <p>
                I also work with businesses across the UK on a fully remote basis. Location does not need to be a barrier to working together.
              </p>
            </div>
          </Section>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6" style={{ background: "var(--neutral-grey)" }}>
        <div className="max-w-[760px] mx-auto text-center">
          <Section>
            <motion.h2 variants={fadeUp} className="mb-5" style={{ fontFamily: "var(--font-heading)" }}>Ready to talk about your business?</motion.h2>
            <motion.p variants={fadeUp} className="mb-8 text-base leading-relaxed" style={{ color: "var(--secondary-text)", fontFamily: "var(--font-body)" }}>
              The first step is a free social media audit or an introductory call. There is no obligation and no sales pitch,just an honest look at where you are and what is possible.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold transition-all hover:-translate-y-px" style={{ background: "var(--charcoal-dark)", color: "#fff", fontFamily: "var(--font-body)" }}>
                Book an introductory call <ArrowUpRight size={16} />
              </Link>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold border transition-all hover:bg-white" style={{ borderColor: "var(--charcoal)", color: "var(--charcoal)", fontFamily: "var(--font-body)" }}>
                Get a free audit
              </Link>
            </motion.div>
          </Section>
        </div>
      </section>
    </div>
  );
}
