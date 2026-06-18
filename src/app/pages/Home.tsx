import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import { motion, useInView } from "motion/react";
import {
  ArrowUpRight, MapPin, Calendar, BarChart2, Heart, Clock,
  CheckCircle, ChevronDown, ChevronUp,
  Users, FileText, MessageCircle, Zap, TrendingUp,
  Play
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
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

function AnimatedNumber({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / 50;
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 30);
    return () => clearInterval(timer);
  }, [inView, target]);
  return <span ref={ref}>{count}{suffix}</span>;
}

const faqs = [
  {
    q: "What does social media management include?",
    a: "It covers strategy and planning, content creation (graphics, captions, carousels), scheduling posts at the best times, and a monthly performance review. Depending on your package, it can also include Stories, short-form video and community management.",
  },
  {
    q: "Which platforms do you manage?",
    a: "Primarily Instagram, Facebook, LinkedIn and TikTok. Most small businesses get the best results by focusing on one or two platforms well, rather than being spread thinly across five.",
  },
  {
    q: "Do I need to provide photographs and videos?",
    a: "It depends on your business. For trades and hospitality, real photos of your work and premises make a big difference. I can advise on what to capture and how, and I create branded graphics that work without photography.",
  },
  {
    q: "How far in advance is content created?",
    a: "Content is typically planned and created a month at a time. You'll see the plan before anything is scheduled, so there are no surprises.",
  },
  {
    q: "Will I approve content before it is posted?",
    a: "Yes. You review and approve content before it goes live. I want you to feel confident in what is being published on behalf of your business.",
  },
  {
    q: "Do you respond to comments and messages?",
    a: "Community management is included in the Growth and Partner packages. For Essential, I can advise on a response approach and flag anything that needs your attention.",
  },
  {
    q: "How long are your contracts?",
    a: "I ask for a minimum of three months so there is enough time to build consistency and see what is working. After that, it is rolling monthly with one month's notice.",
  },
  {
    q: "Can you help if I am starting from scratch?",
    a: "Yes. Whether you have no profiles set up or profiles that have not been used in a year, I can start from the beginning with profile setup, brand direction and a content plan.",
  },
  {
    q: "Do you only work with businesses in Sheffield?",
    a: "My focus is Sheffield and South Yorkshire because I understand the local business community. I also work with UK businesses remotely,location does not have to be a barrier.",
  },
  {
    q: "How quickly should I expect results?",
    a: "Social media builds over time. Most businesses see improved consistency and engagement within the first couple of months. Significant follower growth or enquiry increases typically take longer. I will never promise specific numbers.",
  },
  {
    q: "Do you offer one-off social media support?",
    a: "Yes, for profile audits, strategy sessions and content consultations. These are available separately from the monthly management packages.",
  },
  {
    q: "Can you run paid advertisements?",
    a: "Paid social advertising is available as an add-on to existing packages. Ad spend is paid directly by the client to the platform,I charge a management fee on top.",
  },
  {
    q: "What information do you need from me?",
    a: "A clear picture of your business, your customers and your goals. The more context you give me, the better the content will be. I use a straightforward onboarding questionnaire to gather this.",
  },
  {
    q: "How does the free social media audit work?",
    a: "Complete the form on this page. I will review your current profiles and send you a practical written summary covering your profile presentation, content quality, posting consistency, and suggestions for improvement. It is free and there is no obligation.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b" style={{ borderColor: "var(--border)" }}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left font-semibold transition-colors hover:text-[var(--lime-dark)]"
        style={{ fontFamily: "var(--font-heading)", fontSize: "1.05rem" }}
        aria-expanded={open}
      >
        {q}
        {open ? <ChevronUp size={18} className="shrink-0" /> : <ChevronDown size={18} className="shrink-0" />}
      </button>
      {open && (
        <p className="pb-5 leading-relaxed" style={{ color: "var(--secondary-text)", fontFamily: "var(--font-body)", fontSize: "0.95rem" }}>
          {a}
        </p>
      )}
    </div>
  );
}

const trustItems = [
  { icon: MapPin, label: "Based in Sheffield" },
  { icon: Users, label: "Founder-led service" },
  { icon: Zap, label: "Flexible packages" },
  { icon: TrendingUp, label: "UK-wide remote support" },
  { icon: FileText, label: "Clear monthly reporting" },
];

const problems = [
  { title: "You never know what to post", desc: "Content is created inconsistently and usually at the last minute." },
  { title: "Your pages look inactive", desc: "Customers may assume an inactive profile means an inactive business." },
  { title: "Content takes too much time", desc: "Planning, designing, filming and scheduling can quickly consume evenings and weekends." },
  { title: "You are posting without a plan", desc: "Content may look fine but is not connected to clear business goals." },
];

const steps = [
  { n: "01", title: "Discover", copy: "We discuss your business, customers, goals and current social media." },
  { n: "02", title: "Plan", copy: "I create a practical content direction and monthly plan." },
  { n: "03", title: "Create & Publish", copy: "Content is produced, approved and scheduled across the agreed platforms." },
  { n: "04", title: "Review & Improve", copy: "Performance is reviewed each month so future content becomes more effective." },
];

export function HomePage() {
  const [auditSubmitted, setAuditSubmitted] = useState(false);
  const [auditForm, setAuditForm] = useState({ name: "", businessName: "", email: "", phone: "", website: "", socialLink: "", challenge: "", contactPref: "email", consent: false });

  const handleAuditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAuditSubmitted(true);
  };

  return (
    <div>
      {/* HERO */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-6" style={{ background: "var(--background)" }}>
        <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-6"
              style={{ background: "var(--lime)", color: "var(--charcoal)", fontFamily: "var(--font-body)" }}
            >
              <MapPin size={12} /> Sheffield social media management
            </span>
            <h1 style={{ fontFamily: "var(--font-heading)", lineHeight: 1.05, letterSpacing: "-0.03em" }}>
              Sheffield social media,{" "}
              <span style={{ color: "var(--lime)", display: "block" }}>handled.</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed max-w-[560px]" style={{ color: "var(--secondary-text)", fontFamily: "var(--font-body)" }}>
              Consistent, professional content for local businesses that want to grow online without spending every evening planning posts.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold transition-all duration-150 hover:-translate-y-0.5"
                style={{ background: "var(--lime)", color: "var(--charcoal)", fontFamily: "var(--font-body)" }}
              >
                Get a free social media audit <ArrowUpRight size={16} />
              </Link>
              <Link
                to="/sample-work"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold border transition-all duration-150 hover:bg-[var(--neutral-grey)]"
                style={{ borderColor: "var(--charcoal)", color: "var(--charcoal)", fontFamily: "var(--font-body)" }}
              >
                View sample work
              </Link>
            </div>
            <p className="mt-4 text-sm" style={{ color: "var(--secondary-text)", fontFamily: "var(--font-body)" }}>
              No pressure. No complicated agency pitch. Just practical feedback on your current social media.
            </p>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative h-[480px] md:h-[560px] hidden lg:block"
          >
            {/* Phone mock */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-52 rounded-[2.5rem] overflow-hidden shadow-2xl z-10"
              style={{ border: "3px solid var(--charcoal-dark)", background: "#fff" }}
            >
              <div className="h-6 flex items-center justify-center" style={{ background: "var(--charcoal-dark)" }}>
                <div className="w-16 h-1.5 rounded-full bg-gray-700" />
              </div>
              <img
                src="https://images.unsplash.com/photo-1601759226606-1352c1290364?w=400&h=600&fit=crop&auto=format"
                alt="Sheffield café social media content"
                className="w-full h-72 object-cover"
              />
              <div className="p-3" style={{ background: "#fff" }}>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-full" style={{ background: "var(--lime)" }} />
                  <span className="text-xs font-semibold" style={{ fontFamily: "var(--font-heading)" }}>northcafe_shef</span>
                </div>
                <div className="flex gap-4 text-xs" style={{ color: "var(--secondary-text)", fontFamily: "var(--font-body)" }}>
                  <span className="flex items-center gap-1"><Heart size={10} /> <AnimatedNumber target={284} /></span>
                  <span className="flex items-center gap-1"><MessageCircle size={10} /> 18</span>
                </div>
              </div>
            </motion.div>

            {/* Post card 1 */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
              whileHover={{ scale: 1.04 }}
              className="absolute top-10 left-0 w-44 rounded-2xl shadow-lg p-3 z-20"
              style={{ background: "#fff", border: "1px solid var(--neutral-grey)" }}
            >
              <img
                src="https://images.unsplash.com/photo-1545399885-fd918e63002f?w=300&h=200&fit=crop&auto=format"
                alt="Content post example"
                className="w-full h-24 object-cover rounded-xl mb-2"
              />
              <div className="text-xs font-semibold mb-1" style={{ fontFamily: "var(--font-heading)" }}>☕ Monday vibes</div>
              <div className="flex gap-1 flex-wrap">
                {["#Sheffield", "#CoffeeShop"].map((t) => (
                  <span key={t} className="text-[10px] px-1.5 py-0.5 rounded-full" style={{ background: "var(--mint)", color: "var(--charcoal)", fontFamily: "var(--font-body)" }}>{t}</span>
                ))}
              </div>
            </motion.div>

            {/* Analytics card */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-16 left-4 w-40 rounded-2xl shadow-lg p-3 z-20"
              style={{ background: "var(--charcoal-dark)", color: "#fff" }}
            >
              <div className="flex items-center gap-2 mb-2">
                <BarChart2 size={14} style={{ color: "var(--lime)" }} />
                <span className="text-xs font-semibold" style={{ fontFamily: "var(--font-heading)" }}>This month</span>
              </div>
              <div className="text-2xl font-bold mb-1" style={{ fontFamily: "var(--font-heading)", color: "var(--lime)" }}>
                <AnimatedNumber target={1240} />
              </div>
              <div className="text-[10px]" style={{ color: "#aaa" }}>profile visits ↑ 34%</div>
            </motion.div>

            {/* Content calendar card */}
            <motion.div
              animate={{ y: [0, 7, 0] }}
              transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 0.8 }}
              className="absolute top-8 right-0 w-44 rounded-2xl shadow-lg p-3 z-20"
              style={{ background: "#fff", border: "1px solid var(--neutral-grey)" }}
            >
              <div className="flex items-center gap-2 mb-2">
                <Calendar size={12} style={{ color: "var(--lime)" }} />
                <span className="text-xs font-semibold" style={{ fontFamily: "var(--font-heading)" }}>June content</span>
              </div>
              {[["Mon", "Café reel"], ["Wed", "Product feature"], ["Fri", "Behind scenes"]].map(([day, title]) => (
                <div key={day} className="flex items-center gap-2 py-1 border-b last:border-0" style={{ borderColor: "var(--neutral-grey)" }}>
                  <span className="text-[10px] w-6 font-semibold" style={{ color: "var(--secondary-text)", fontFamily: "var(--font-body)" }}>{day}</span>
                  <span className="text-[10px]" style={{ fontFamily: "var(--font-body)" }}>{title}</span>
                  <CheckCircle size={10} className="ml-auto" style={{ color: "var(--lime)" }} />
                </div>
              ))}
            </motion.div>

            {/* Location tag */}
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 1.5 }}
              className="absolute bottom-10 right-6 flex items-center gap-1.5 px-3 py-1.5 rounded-full shadow z-20"
              style={{ background: "var(--lime)", color: "var(--charcoal)" }}
            >
              <MapPin size={12} />
              <span className="text-xs font-semibold" style={{ fontFamily: "var(--font-body)" }}>Sheffield, S1</span>
            </motion.div>

            {/* Video thumb */}
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 4.8, ease: "easeInOut", delay: 0.3 }}
              className="absolute bottom-28 right-2 w-28 h-36 rounded-2xl overflow-hidden shadow-lg z-20"
              style={{ border: "2px solid var(--neutral-grey)" }}
            >
              <img
                src="https://images.unsplash.com/photo-1724862936518-ae7fcfc052c1?w=200&h=300&fit=crop&auto=format"
                alt="Short-form video content"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "rgba(255,255,255,0.9)" }}>
                  <Play size={14} style={{ color: "var(--charcoal)", fill: "var(--charcoal)" }} />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section style={{ background: "var(--charcoal-dark)", color: "#fff" }} className="py-5">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {trustItems.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-sm" style={{ fontFamily: "var(--font-body)" }}>
                <Icon size={14} style={{ color: "var(--lime)" }} />
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEMS */}
      <section className="py-20 md:py-28 px-6" style={{ background: "var(--background)" }}>
        <div className="max-w-[1320px] mx-auto">
          <Section>
            <motion.div variants={fadeUp} className="max-w-2xl mb-12">
              <h2 style={{ fontFamily: "var(--font-heading)" }}>Social media should support your business, not become another full-time job.</h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
              {problems.map(({ title, desc }) => (
                <motion.div
                  key={title}
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl p-6 transition-shadow hover:shadow-lg"
                  style={{ background: "var(--card)", border: "1px solid var(--neutral-grey)" }}
                >
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-4" style={{ background: "var(--lime)" }}>
                    <Clock size={16} style={{ color: "var(--charcoal)" }} />
                  </div>
                  <h3 className="mb-2" style={{ fontFamily: "var(--font-heading)", fontSize: "1.05rem" }}>{title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--secondary-text)", fontFamily: "var(--font-body)" }}>{desc}</p>
                </motion.div>
              ))}
            </div>
            <motion.p variants={fadeUp} className="font-semibold text-lg" style={{ fontFamily: "var(--font-body)" }}>
              I help turn those problems into a manageable, consistent social media system.
            </motion.p>
          </Section>
        </div>
      </section>

      {/* SAMPLE WORK */}
      <section className="py-20 md:py-28 px-6" style={{ background: "var(--background)" }}>
        <div className="max-w-[1320px] mx-auto">
          <Section>
            <motion.div variants={fadeUp} className="max-w-2xl mb-3">
              <h2 style={{ fontFamily: "var(--font-heading)" }}>See how your business could look online.</h2>
            </motion.div>
            <motion.p variants={fadeUp} className="mb-12 text-base" style={{ color: "var(--secondary-text)", fontFamily: "var(--font-body)" }}>
              The examples below are concept projects created to demonstrate my content, branding and campaign-planning approach.
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {[
                {
                  label: "Sample Project",
                  type: "Independent Café",
                  name: "North Brew Co. (concept)",
                  goal: "Increase local awareness and visits",
                  img: "https://images.unsplash.com/photo-1601759226606-1352c1290364?w=600&h=400&fit=crop&auto=format",
                  tags: ["Instagram feed", "Seasonal promos", "Reels", "Local hashtags"],
                },
                {
                  label: "Sample Project",
                  type: "Barber & Salon",
                  name: "Fade Studio Sheffield (concept)",
                  goal: "Increase bookings",
                  img: "https://images.unsplash.com/photo-1781460677208-060072eec4c6?w=600&h=400&fit=crop&auto=format",
                  tags: ["Before & after", "Appointment Stories", "Transformation video"],
                },
                {
                  label: "Sample Project",
                  type: "Trades Business",
                  name: "S6 Heating & Plumbing (concept)",
                  goal: "Generate enquiries",
                  img: "https://images.unsplash.com/photo-1505798577917-a65157d3320a?w=600&h=400&fit=crop&auto=format",
                  tags: ["Project showcases", "Testimonials", "Tips carousel"],
                },
              ].map(({ label, type, name, goal, img, tags }) => (
                <motion.div
                  key={name}
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl overflow-hidden transition-shadow hover:shadow-lg"
                  style={{ background: "var(--card)", border: "1px solid var(--neutral-grey)" }}
                >
                  <div className="relative">
                    <img src={img} alt={name} className="w-full h-44 object-cover" />
                    <span className="absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: "var(--charcoal-dark)", color: "var(--lime)", fontFamily: "var(--font-body)" }}>
                      {label}
                    </span>
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-semibold mb-1" style={{ color: "var(--lime-dark)", fontFamily: "var(--font-body)" }}>{type}</p>
                    <h3 className="mb-2" style={{ fontFamily: "var(--font-heading)", fontSize: "1rem" }}>{name}</h3>
                    <p className="text-xs mb-3" style={{ color: "var(--secondary-text)", fontFamily: "var(--font-body)" }}>Objective: {goal}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {tags.map((t) => (
                        <span key={t} className="text-[11px] px-2 py-0.5 rounded-full" style={{ background: "var(--mint)", color: "var(--charcoal)", fontFamily: "var(--font-body)" }}>{t}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div variants={fadeUp}>
              <Link
                to="/sample-work"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all hover:-translate-y-px"
                style={{ background: "var(--lime)", color: "var(--charcoal)", fontFamily: "var(--font-body)" }}
              >
                View all sample work <ArrowUpRight size={16} />
              </Link>
            </motion.div>
          </Section>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 md:py-28 px-6" style={{ background: "var(--charcoal-dark)", color: "#fff" }}>
        <div className="max-w-[1320px] mx-auto">
          <Section>
            <motion.div variants={fadeUp} className="max-w-xl mb-12">
              <h2 style={{ fontFamily: "var(--font-heading)" }}>A straightforward way to improve your social media.</h2>
            </motion.div>
            <div className="relative">
              <div className="hidden md:block absolute top-8 left-0 right-0 h-px" style={{ background: "var(--lime)", opacity: 0.3 }} />
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {steps.map(({ n, title, copy }, i) => (
                  <motion.div key={n} variants={fadeUp} custom={i} className="relative">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 font-bold text-lg"
                      style={{ background: "var(--lime)", color: "var(--charcoal)", fontFamily: "var(--font-heading)" }}
                    >
                      {n}
                    </div>
                    <h3 className="mb-3" style={{ fontFamily: "var(--font-heading)", fontSize: "1.15rem", color: "#fff" }}>{title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#aaa", fontFamily: "var(--font-body)" }}>{copy}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </Section>
        </div>
      </section>

      {/* FREE AUDIT */}
      <section className="py-20 md:py-28 px-6" style={{ background: "var(--charcoal-dark)", color: "#fff" }}>
        <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <Section>
            <motion.div variants={fadeUp}>
              <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--lime)", fontFamily: "var(--font-body)" }}>Free audit</p>
              <h2 className="mb-5" style={{ fontFamily: "var(--font-heading)", color: "#fff" }}>
                Not sure what is holding your social media back?
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "#aaa", fontFamily: "var(--font-body)" }}>
                Request a free review of your current profiles. I will identify practical improvements to your profile, content and posting approach.
              </p>
            </motion.div>
          </Section>
          <Section>
            {auditSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-2xl p-8 text-center"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
              >
                <CheckCircle size={40} className="mx-auto mb-4" style={{ color: "var(--lime)" }} />
                <h3 className="mb-2" style={{ fontFamily: "var(--font-heading)", color: "#fff" }}>Request received</h3>
                <p style={{ color: "#aaa", fontFamily: "var(--font-body)" }}>Thanks,your request has been received. I will contact you using the details provided.</p>
              </motion.div>
            ) : (
              <motion.form
                variants={fadeUp}
                onSubmit={handleAuditSubmit}
                className="rounded-2xl p-6 space-y-4"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
              >
                {[
                  { id: "name", label: "Name *", type: "text", required: true, key: "name" as const },
                  { id: "businessName", label: "Business name *", type: "text", required: true, key: "businessName" as const },
                  { id: "email", label: "Email *", type: "email", required: true, key: "email" as const },
                  { id: "phone", label: "Telephone (optional)", type: "tel", required: false, key: "phone" as const },
                  { id: "website", label: "Website (optional)", type: "url", required: false, key: "website" as const },
                  { id: "socialLink", label: "Instagram or social media link *", type: "url", required: true, key: "socialLink" as const },
                ].map(({ id, label, type, required, key }) => (
                  <div key={id}>
                    <label htmlFor={id} className="block text-xs font-semibold mb-1" style={{ color: "#ccc", fontFamily: "var(--font-body)" }}>{label}</label>
                    <input
                      id={id}
                      type={type}
                      required={required}
                      value={auditForm[key]}
                      onChange={(e) => setAuditForm((f) => ({ ...f, [key]: e.target.value }))}
                      className="w-full px-3 py-2.5 rounded-xl text-sm outline-none focus:ring-2 focus:ring-[var(--lime)]"
                      style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", color: "#fff", fontFamily: "var(--font-body)" }}
                    />
                  </div>
                ))}
                <div>
                  <label htmlFor="challenge" className="block text-xs font-semibold mb-1" style={{ color: "#ccc", fontFamily: "var(--font-body)" }}>Main challenge *</label>
                  <textarea
                    id="challenge"
                    required
                    rows={3}
                    value={auditForm.challenge}
                    onChange={(e) => setAuditForm((f) => ({ ...f, challenge: e.target.value }))}
                    className="w-full px-3 py-2.5 rounded-xl text-sm outline-none focus:ring-2 focus:ring-[var(--lime)] resize-none"
                    style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", color: "#fff", fontFamily: "var(--font-body)" }}
                  />
                </div>
                <div>
                  <label htmlFor="contactPref" className="block text-xs font-semibold mb-1" style={{ color: "#ccc", fontFamily: "var(--font-body)" }}>Preferred contact method</label>
                  <select
                    id="contactPref"
                    value={auditForm.contactPref}
                    onChange={(e) => setAuditForm((f) => ({ ...f, contactPref: e.target.value }))}
                    className="w-full px-3 py-2.5 rounded-xl text-sm outline-none focus:ring-2 focus:ring-[var(--lime)]"
                    style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.12)", color: "#fff", fontFamily: "var(--font-body)" }}
                  >
                    <option value="email">Email</option>
                    <option value="phone">Phone</option>
                    <option value="whatsapp">WhatsApp</option>
                  </select>
                </div>
                <div className="flex items-start gap-3">
                  <input
                    id="consent"
                    type="checkbox"
                    required
                    checked={auditForm.consent}
                    onChange={(e) => setAuditForm((f) => ({ ...f, consent: e.target.checked }))}
                    className="mt-1 w-4 h-4 rounded accent-[var(--lime)]"
                  />
                  <label htmlFor="consent" className="text-xs leading-relaxed" style={{ color: "#aaa", fontFamily: "var(--font-body)" }}>
                    I agree to my details being used to send the audit and respond to this enquiry. See the <Link to="/privacy-policy" className="underline">Privacy Policy</Link>.
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-semibold transition-all hover:-translate-y-px"
                  style={{ background: "var(--lime)", color: "var(--charcoal)", fontFamily: "var(--font-body)" }}
                >
                  Request my free audit
                </button>
              </motion.form>
            )}
          </Section>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 px-6" style={{ background: "var(--background)" }}>
        <div className="max-w-[800px] mx-auto">
          <Section>
            <motion.h2 variants={fadeUp} className="mb-10" style={{ fontFamily: "var(--font-heading)" }}>
              Frequently asked questions
            </motion.h2>
            <motion.div variants={fadeUp}>
              {faqs.map(({ q, a }) => <FaqItem key={q} q={q} a={a} />)}
            </motion.div>
          </Section>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 md:py-24 px-6" style={{ background: "var(--neutral-grey)" }}>
        <div className="max-w-[760px] mx-auto text-center">
          <Section>
            <motion.h2 variants={fadeUp} className="mb-5" style={{ fontFamily: "var(--font-heading)" }}>
              Ready to make social media easier?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg mb-8 leading-relaxed" style={{ color: "var(--secondary-text)", fontFamily: "var(--font-body)" }}>
              Tell me about your business and where you are currently struggling. I will recommend a practical next step.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold transition-all hover:-translate-y-px"
                style={{ background: "var(--charcoal-dark)", color: "#fff", fontFamily: "var(--font-body)" }}
              >
                Book an introductory call <ArrowUpRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold border transition-all hover:bg-white"
                style={{ borderColor: "var(--charcoal)", color: "var(--charcoal)", fontFamily: "var(--font-body)" }}
              >
                Send an enquiry
              </Link>
            </motion.div>
          </Section>
        </div>
      </section>
    </div>
  );
}
