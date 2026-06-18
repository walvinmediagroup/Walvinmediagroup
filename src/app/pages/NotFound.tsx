import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowUpRight, Home, Layers, Mail } from "lucide-react";

export function NotFoundPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6 py-24" style={{ background: "var(--background)" }}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-lg w-full text-center"
      >
        <div
          className="inline-flex items-center justify-center w-20 h-20 rounded-3xl mb-8 text-4xl font-bold"
          style={{ background: "var(--lime)", color: "var(--charcoal)", fontFamily: "var(--font-heading)" }}
        >
          404
        </div>
        <h1 className="mb-4" style={{ fontFamily: "var(--font-heading)", fontSize: "2.5rem" }}>
          This post seems to have disappeared.
        </h1>
        <p className="text-lg mb-10 leading-relaxed" style={{ color: "var(--secondary-text)", fontFamily: "var(--font-body)" }}>
          The page you are looking for may have been moved, deleted or never scheduled.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold transition-all hover:-translate-y-px"
            style={{ background: "var(--lime)", color: "var(--charcoal)", fontFamily: "var(--font-body)" }}
          >
            <Home size={15} /> Return home
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold border transition-all hover:bg-[var(--neutral-grey)]"
            style={{ borderColor: "var(--charcoal)", color: "var(--charcoal)", fontFamily: "var(--font-body)" }}
          >
            <Layers size={15} /> View services
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold border transition-all hover:bg-[var(--neutral-grey)]"
            style={{ borderColor: "var(--charcoal)", color: "var(--charcoal)", fontFamily: "var(--font-body)" }}
          >
            <Mail size={15} /> Contact me
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
