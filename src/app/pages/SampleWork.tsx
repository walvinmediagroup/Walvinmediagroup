import { useState, useRef } from "react";
import { Link } from "react-router";
import { motion, useInView } from "motion/react";
import { ArrowUpRight, X } from "lucide-react";

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

const projects = [
  {
    id: 1,
    category: "Hospitality",
    type: "Independent Café",
    name: "North Brew Co. (concept)",
    challenge: "Inconsistent posting with no visual identity. Regular customers were not engaged online and footfall from social was negligible.",
    audience: "25–45 year-olds in Sheffield city centre and surrounding neighbourhoods. Coffee enthusiasts and remote workers.",
    platforms: ["Instagram", "Facebook"],
    pillars: ["Behind-the-scenes preparation", "Seasonal drink specials", "Community and staff personality", "Customer stories"],
    objective: "Increase local awareness and drive repeat visits.",
    measurement: "Profile visits, saves on posts, local hashtag reach, footfall attributed to social offers.",
    strategy: "A warm, community-focused content direction built around the rhythm of the café,morning preparation, seasonal drinks, local staff. The proposed objective was to create a feed that felt like a regular local, not a corporate chain.",
    img: "https://images.unsplash.com/photo-1601759226606-1352c1290364?w=700&h=500&fit=crop&auto=format",
    tags: ["Instagram feed", "Seasonal promotions", "Behind-the-scenes Reels", "Customer review graphics", "Local hashtag strategy"],
    posts: [
      { caption: "Nothing says Monday like a cortado and ten minutes to think. ☕ Open from 7am.", img: "https://images.unsplash.com/photo-1545399885-fd918e63002f?w=400&h=400&fit=crop&auto=format" },
      { caption: "Introducing our autumn latte,brown butter and cardamom. Limited run while seasonal ingredients last.", img: "https://images.unsplash.com/photo-1601759226606-1352c1290364?w=400&h=400&fit=crop&auto=format" },
    ],
  },
  {
    id: 2,
    category: "Beauty",
    type: "Barber & Salon",
    name: "Fade Studio Sheffield (concept)",
    challenge: "No consistent posting, no before-and-after content, and no clear way to convert social media visitors into bookings.",
    audience: "18–40 year-olds in Sheffield looking for quality cuts. Style-conscious men who discover barbers via Instagram.",
    platforms: ["Instagram", "TikTok"],
    pillars: ["Before-and-after transformations", "Booking availability", "Team personality and skills", "Client trust building"],
    objective: "Increase appointment bookings.",
    measurement: "Link-in-bio clicks to booking page, direct message enquiries, reach on transformation videos.",
    strategy: "This campaign was designed to show the craft and personality of the barber shop. Short transformation videos and before-and-after content were central to the approach, as these perform strongly in this sector. Success could be measured through direct booking link clicks and DM enquiries.",
    img: "https://images.unsplash.com/photo-1781460677208-060072eec4c6?w=700&h=500&fit=crop&auto=format",
    tags: ["Before & after posts", "Appointment Stories", "Service education carousel", "Transformation video", "Team personality content"],
    posts: [
      { caption: "Fresh fade for a fresh week. Appointments available Tuesday to Saturday,link in bio to book.", img: "https://images.unsplash.com/photo-1781460677208-060072eec4c6?w=400&h=400&fit=crop&auto=format" },
      { caption: "Skin fade to blended undercut,a walkthrough of the process. What style are you booked in for next?", img: "https://images.unsplash.com/photo-1738327264263-91accfa28b3d?w=400&h=400&fit=crop&auto=format" },
    ],
  },
  {
    id: 3,
    category: "Trades",
    type: "Trades Business",
    name: "S6 Heating & Plumbing (concept)",
    challenge: "Strong word-of-mouth but no online presence. Missing out on local searches and unable to show completed work to prospective customers.",
    audience: "Homeowners aged 30–60 in Sheffield's northern suburbs. Looking for reliable, local tradespeople for boiler servicing, installations and plumbing.",
    platforms: ["Facebook", "Instagram"],
    pillars: ["Completed project showcases", "Customer testimonials", "Educational tips and maintenance advice", "Local trust signals"],
    objective: "Generate direct enquiries from Sheffield homeowners.",
    measurement: "Direct messages, phone calls attributed to social, reach across local Sheffield areas, engagement on project posts.",
    strategy: "This is a demonstration project. The proposed approach was to build trust through transparency,showing completed work, sharing genuine customer feedback and providing useful homeowner advice. Local area targeting in captions and hashtags was central to the strategy.",
    img: "https://images.unsplash.com/photo-1505798577917-a65157d3320a?w=700&h=500&fit=crop&auto=format",
    tags: ["Project showcases", "Customer testimonials", "Educational tip carousel", "Local area targeting", "Trust signals"],
    posts: [
      { caption: "Boiler installation completed in Hillsborough this week. New Worcester Bosch, full pressure test, and the homeowner has heating they can rely on heading into winter.", img: "https://images.unsplash.com/photo-1505798577917-a65157d3320a?w=400&h=400&fit=crop&auto=format" },
      { caption: "If your radiators take more than 20 minutes to heat up from cold, it could be time for a system flush. Message us for a free phone consultation.", img: "https://images.unsplash.com/photo-1659353588842-891391e6fcd4?w=400&h=400&fit=crop&auto=format" },
    ],
  },
  {
    id: 4,
    category: "Retail",
    type: "Independent Retailer",
    name: "The Bower Collective (concept)",
    challenge: "Good in-store experience not reflected online. Inconsistent product photography and no content strategy beyond occasional product posts.",
    audience: "Women aged 25–50 in Sheffield interested in independent retail, sustainable goods and supporting local businesses.",
    platforms: ["Instagram", "Pinterest"],
    pillars: ["New arrivals and seasonal edits", "Behind-the-scenes buying decisions", "Styling and gift guidance", "Community and local identity"],
    objective: "Drive in-store visits and online enquiries.",
    measurement: "Story link clicks, saved posts, profile visits, direct messages.",
    strategy: "This campaign was designed to create a sense of discovery,content that feels like browsing in a thoughtfully curated shop. Regular new-arrival posts and styling content were proposed to drive repeat profile visits and store footfall.",
    img: "https://images.unsplash.com/photo-1753161618091-b4cf35b9aa99?w=700&h=500&fit=crop&auto=format",
    tags: ["Product photography direction", "New arrival posts", "Seasonal gift guides", "Styling content", "Local community stories"],
    posts: [
      { caption: "New ceramics in this week,hand-thrown by a Derbyshire maker we have been following for a while. In store now.", img: "https://images.unsplash.com/photo-1753161618091-b4cf35b9aa99?w=400&h=400&fit=crop&auto=format" },
    ],
  },
  {
    id: 5,
    category: "Professional Services",
    type: "Professional Services",
    name: "Pennine Accountancy (concept)",
    challenge: "No active social presence. Potential clients were searching online for local accountants and finding nothing from this business.",
    audience: "Self-employed individuals and small business owners in Sheffield looking for approachable, local financial support.",
    platforms: ["LinkedIn", "Facebook"],
    pillars: ["Practical financial tips", "Business milestone content", "Client education", "Credibility and trust building"],
    objective: "Generate enquiries from self-employed and small business clients.",
    measurement: "Profile reach, direct messages, consultation bookings attributed to social.",
    strategy: "Professional but approachable content designed to reduce the intimidation factor of accountancy. Educational posts and plain-English financial tips were proposed as the core content format, with local relevance to Sheffield built in throughout.",
    img: "https://images.unsplash.com/photo-1758691737587-7630b4d31d16?w=700&h=500&fit=crop&auto=format",
    tags: ["LinkedIn content", "Financial tip posts", "Client education carousels", "Local trust content"],
    posts: [
      { caption: "The October 31st paper tax return deadline is approaching. If you are self-employed and still filing paper returns, here is what you need to know before the deadline.", img: "https://images.unsplash.com/photo-1758691737587-7630b4d31d16?w=400&h=400&fit=crop&auto=format" },
    ],
  },
];

const categories = ["All", "Hospitality", "Beauty", "Trades", "Retail", "Professional Services"];

export function SampleWorkPage() {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState<typeof projects[0] | null>(null);

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-6" style={{ background: "var(--background)" }}>
        <div className="max-w-[1320px] mx-auto">
          <Section>
            <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--lime-dark)", fontFamily: "var(--font-body)" }}>
              Sample work
            </motion.p>
            <motion.h1 variants={fadeUp} className="max-w-2xl" style={{ fontFamily: "var(--font-heading)" }}>
              See how your business could look online.
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-5 text-lg max-w-xl leading-relaxed" style={{ color: "var(--secondary-text)", fontFamily: "var(--font-body)" }}>
              The examples below are concept projects created to demonstrate my content, branding and campaign-planning approach. They are not real clients.
            </motion.p>
          </Section>
        </div>
      </section>

      {/* Filter */}
      <section className="pb-4 px-6">
        <div className="max-w-[1320px] mx-auto">
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className="px-4 py-2 rounded-full text-sm font-semibold transition-all"
                style={{
                  background: active === c ? "var(--lime)" : "var(--neutral-grey)",
                  color: active === c ? "var(--charcoal)" : "var(--charcoal)",
                  fontFamily: "var(--font-body)",
                }}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-10 px-6">
        <div className="max-w-[1320px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4 }}
                className="rounded-2xl overflow-hidden cursor-pointer transition-shadow hover:shadow-xl"
                style={{ background: "var(--card)", border: "1px solid var(--neutral-grey)" }}
                onClick={() => setSelected(project)}
              >
                <div className="relative">
                  <img src={project.img} alt={project.name} className="w-full h-52 object-cover" />
                  <span className="absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full" style={{ background: "var(--charcoal-dark)", color: "var(--lime)", fontFamily: "var(--font-body)" }}>
                    Sample Project
                  </span>
                  <span className="absolute top-3 right-3 text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: "var(--lime)", color: "var(--charcoal)", fontFamily: "var(--font-body)" }}>
                    {project.category}
                  </span>
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold mb-1" style={{ color: "var(--lime-dark)", fontFamily: "var(--font-body)" }}>{project.type}</p>
                  <h3 className="mb-2" style={{ fontFamily: "var(--font-heading)", fontSize: "1.05rem" }}>{project.name}</h3>
                  <p className="text-xs mb-3 line-clamp-2" style={{ color: "var(--secondary-text)", fontFamily: "var(--font-body)" }}>{project.challenge}</p>
                  <p className="text-xs font-semibold mb-3" style={{ color: "var(--secondary-text)", fontFamily: "var(--font-body)" }}>
                    Objective: <span style={{ color: "var(--charcoal)" }}>{project.objective}</span>
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((t) => (
                      <span key={t} className="text-[11px] px-2 py-0.5 rounded-full" style={{ background: "var(--mint)", color: "var(--charcoal)", fontFamily: "var(--font-body)" }}>{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: "rgba(0,0,0,0.7)" }} onClick={() => setSelected(null)}>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative rounded-3xl overflow-hidden max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            style={{ background: "#fff" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img src={selected.img} alt={selected.name} className="w-full h-56 object-cover" />
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center"
                style={{ background: "rgba(0,0,0,0.6)", color: "#fff" }}
                aria-label="Close"
              >
                <X size={18} />
              </button>
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="text-xs font-bold px-2.5 py-1 rounded-full" style={{ background: "var(--charcoal-dark)", color: "var(--lime)", fontFamily: "var(--font-body)" }}>
                  Sample Project
                </span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: "var(--lime)", color: "var(--charcoal)", fontFamily: "var(--font-body)" }}>
                  {selected.category}
                </span>
              </div>
            </div>
            <div className="p-7">
              <p className="text-xs font-semibold mb-1" style={{ color: "var(--lime-dark)", fontFamily: "var(--font-body)" }}>{selected.type}</p>
              <h2 className="mb-5" style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem" }}>{selected.name}</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="mb-2 text-sm font-semibold" style={{ fontFamily: "var(--font-heading)" }}>Business challenge</h4>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--secondary-text)", fontFamily: "var(--font-body)" }}>{selected.challenge}</p>
                </div>
                <div>
                  <h4 className="mb-2 text-sm font-semibold" style={{ fontFamily: "var(--font-heading)" }}>Target audience</h4>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--secondary-text)", fontFamily: "var(--font-body)" }}>{selected.audience}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="mb-2 text-sm font-semibold" style={{ fontFamily: "var(--font-heading)" }}>Recommended platforms</h4>
                  <div className="flex gap-2 flex-wrap">
                    {selected.platforms.map((p) => (
                      <span key={p} className="text-xs px-2.5 py-1 rounded-full" style={{ background: "var(--mint)", color: "var(--charcoal)", fontFamily: "var(--font-body)" }}>{p}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="mb-2 text-sm font-semibold" style={{ fontFamily: "var(--font-heading)" }}>Content pillars</h4>
                  <ul className="space-y-1">
                    {selected.pillars.map((p) => (
                      <li key={p} className="text-xs flex items-start gap-2" style={{ color: "var(--secondary-text)", fontFamily: "var(--font-body)" }}>
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "var(--lime-dark)" }} />{p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mb-6 p-4 rounded-xl" style={{ background: "var(--neutral-grey)" }}>
                <h4 className="mb-2 text-sm font-semibold" style={{ fontFamily: "var(--font-heading)" }}>Strategy overview</h4>
                <p className="text-sm leading-relaxed" style={{ color: "var(--secondary-text)", fontFamily: "var(--font-body)" }}>{selected.strategy}</p>
                <p className="mt-2 text-xs font-semibold" style={{ color: "var(--secondary-text)", fontFamily: "var(--font-body)" }}>
                  Proposed objective: {selected.objective} · Success could be measured through: {selected.measurement}
                </p>
              </div>

              <h4 className="mb-3 text-sm font-semibold" style={{ fontFamily: "var(--font-heading)" }}>Example posts (concept)</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {selected.posts.map(({ caption, img }) => (
                  <div key={caption} className="rounded-xl overflow-hidden" style={{ border: "1px solid var(--neutral-grey)" }}>
                    <img src={img} alt="Sample post" className="w-full h-36 object-cover" />
                    <div className="p-3">
                      <p className="text-xs leading-relaxed" style={{ color: "var(--secondary-text)", fontFamily: "var(--font-body)" }}>{caption}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-xs italic mb-5" style={{ color: "var(--secondary-text)", fontFamily: "var(--font-body)" }}>
                This is a demonstration project. The brand, business name and content shown are fictional and created solely to illustrate the approach.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold transition-all hover:-translate-y-px"
                style={{ background: "var(--lime)", color: "var(--charcoal)", fontFamily: "var(--font-body)" }}
                onClick={() => setSelected(null)}
              >
                Discuss your business <ArrowUpRight size={14} />
              </Link>
            </div>
          </motion.div>
        </div>
      )}

      {/* CTA */}
      <section className="py-20 px-6" style={{ background: "var(--charcoal-dark)", color: "#fff" }}>
        <div className="max-w-[760px] mx-auto text-center">
          <Section>
            <motion.h2 variants={fadeUp} className="mb-4" style={{ fontFamily: "var(--font-heading)", color: "#fff" }}>
              Ready to see what this could look like for your business?
            </motion.h2>
            <motion.p variants={fadeUp} className="mb-8 text-base" style={{ color: "#aaa", fontFamily: "var(--font-body)" }}>
              Start with a free social media audit and I will show you the practical improvements available to your current profiles.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold transition-all hover:-translate-y-px" style={{ background: "var(--lime)", color: "var(--charcoal)", fontFamily: "var(--font-body)" }}>
                Get a free audit <ArrowUpRight size={16} />
              </Link>
              <Link to="/services" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold border transition-colors hover:bg-white/10" style={{ borderColor: "rgba(255,255,255,0.3)", color: "#fff", fontFamily: "var(--font-body)" }}>
                Explore services
              </Link>
            </motion.div>
          </Section>
        </div>
      </section>
    </div>
  );
}
