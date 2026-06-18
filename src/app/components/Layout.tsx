import { useState, useEffect } from "react";
import { Outlet, Link, NavLink, useLocation } from "react-router";
import { Menu, X, ArrowUpRight, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/packages", label: "Packages" },
  { to: "/sample-work", label: "Sample Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Layout() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "var(--background)", color: "var(--foreground)" }}>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:rounded focus:bg-[var(--lime)] focus:text-[var(--charcoal)] focus:font-semibold">
        Skip to content
      </a>

      {/* Sticky Header */}
      <header
        className="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(247,245,239,0.96)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
          paddingTop: scrolled ? "0.75rem" : "1.25rem",
          paddingBottom: scrolled ? "0.75rem" : "1.25rem",
        }}
      >
        <div className="max-w-[1320px] mx-auto px-6 flex items-center justify-between gap-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0" aria-label="Home">
            <span
              className="inline-flex items-center justify-center w-8 h-8 rounded-lg text-sm font-bold"
              style={{ background: "var(--lime)", color: "var(--charcoal)", fontFamily: "var(--font-heading)" }}
            >
              SM
            </span>
            <span style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1.1rem", letterSpacing: "-0.03em" }}>
              Walvin Media Group
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-150 ${
                    isActive
                      ? "bg-[var(--lime)] text-[var(--charcoal)]"
                      : "text-[var(--charcoal)] hover:bg-[var(--neutral-grey)]"
                  }`
                }
                style={{ fontFamily: "var(--font-body)" }}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* CTA */}
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-150 hover:-translate-y-px shrink-0"
            style={{ background: "var(--lime)", color: "var(--charcoal)", fontFamily: "var(--font-body)" }}
          >
            Get a free audit
            <ArrowUpRight size={14} />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-lg"
            style={{ background: "var(--neutral-grey)" }}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden"
              style={{ background: "var(--background)", borderTop: "1px solid var(--border)" }}
            >
              <div className="max-w-[1320px] mx-auto px-6 py-4 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    end={link.to === "/"}
                    className={({ isActive }) =>
                      `px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                        isActive ? "bg-[var(--lime)] text-[var(--charcoal)]" : "hover:bg-[var(--neutral-grey)]"
                      }`
                    }
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {link.label}
                  </NavLink>
                ))}
                <Link
                  to="/contact"
                  className="mt-2 w-full text-center px-4 py-3 rounded-lg font-semibold transition-all"
                  style={{ background: "var(--lime)", color: "var(--charcoal)", fontFamily: "var(--font-body)" }}
                >
                  Get a free audit
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main id="main-content" className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer style={{ background: "var(--charcoal-dark)", color: "#fff" }} className="pt-16 pb-8">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span
                className="inline-flex items-center justify-center w-8 h-8 rounded-lg text-sm font-bold"
                style={{ background: "var(--lime)", color: "var(--charcoal)", fontFamily: "var(--font-heading)" }}
              >
                SM
              </span>
              <span style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1.1rem", letterSpacing: "-0.03em" }}>
                Walvin Media Group
              </span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "#aaa", fontFamily: "var(--font-body)" }}>
              Social media management for Sheffield small businesses. Consistent, professional content without the agency overhead.
            </p>
            <div className="flex gap-3 mt-5">
              <a href="https://www.instagram.com/walvinmedia" aria-label="Instagram" className="w-9 h-9 rounded-full flex items-center justify-center transition-colors hover:bg-white/10" style={{ background: "rgba(255,255,255,0.08)" }}>
                <Instagram size={16} />
              </a>
              <a href="https://www.linkedin.com/company/walvinmediagroup" aria-label="LinkedIn" className="w-9 h-9 rounded-full flex items-center justify-center transition-colors hover:bg-white/10" style={{ background: "rgba(255,255,255,0.08)" }}>
                <Linkedin size={16} />
              </a>
              <a href="https://x.com/walvinmediateam" aria-label="X / Twitter" className="w-9 h-9 rounded-full flex items-center justify-center transition-colors hover:bg-white/10" style={{ background: "rgba(255,255,255,0.08)" }}>
                <Twitter size={16} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: "0.875rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--lime)", marginBottom: "1rem" }}>
              Navigation
            </h4>
            <ul className="space-y-2">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm transition-colors hover:text-white" style={{ color: "#aaa", fontFamily: "var(--font-body)" }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: "0.875rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--lime)", marginBottom: "1rem" }}>
              Services
            </h4>
            <ul className="space-y-2">
              {["Social Media Management", "Content Creation", "Content Planning", "Community Management", "Social Media Audits", "Reporting & Analytics"].map((s) => (
                <li key={s}>
                  <Link to="/services" className="text-sm transition-colors hover:text-white" style={{ color: "#aaa", fontFamily: "var(--font-body)" }}>
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: "0.875rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--lime)", marginBottom: "1rem" }}>
              Get in Touch
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:walvinmediagroup@gmail.com" className="flex items-center gap-2 text-sm transition-colors hover:text-white" style={{ color: "#aaa", fontFamily: "var(--font-body)" }}>
                  <Mail size={14} className="shrink-0" style={{ color: "var(--lime)" }} />
                  walvinmediagroup@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:07482561306" className="flex items-center gap-2 text-sm transition-colors hover:text-white" style={{ color: "#aaa", fontFamily: "var(--font-body)" }}>
                  <Phone size={14} className="shrink-0" style={{ color: "var(--lime)" }} />
                  07482561306
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm" style={{ color: "#aaa" }}>
                <MapPin size={14} className="shrink-0" style={{ color: "var(--lime)" }} />
                Sheffield, South Yorkshire
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-xs" style={{ color: "#666", fontFamily: "var(--font-body)" }}>
            © {new Date().getFullYear()} Walvin Media Group. All rights reserved.
          </p>
          <div className="flex gap-5">
            {[["Privacy Policy", "/privacy-policy"], ["Cookie Policy", "/cookie-policy"], ["Terms of Service", "/terms"]].map(([label, to]) => (
              <Link key={to} to={to} className="text-xs transition-colors hover:text-white" style={{ color: "#666", fontFamily: "var(--font-body)" }}>
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
