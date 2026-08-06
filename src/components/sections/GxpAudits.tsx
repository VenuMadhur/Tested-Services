import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import { auditCategories, gxpStandards } from "../../lib/data";

export default function GxpAudits() {
  return (
    <section id="gxp-audits" className="relative overflow-hidden bg-ink py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-grid-faint bg-[size:44px_44px] opacity-[0.04]" />

      <Container className="relative">
        <SectionHeading
          light
          eyebrow="GxP Audits"
          title="Inspection-readiness, built into every audit category"
          description="We audit against process, product, system and purpose — the four lenses that regulators use — so gaps surface before an inspector ever finds them."
        />

        {/*
          Audit category cards.

          Grid change: lg:grid-cols-2 → sm:grid-cols-2 — activates 2-column
          layout at tablet breakpoint (640 px+) rather than desktop only,
          preventing a narrow single-column layout on iPad-class devices.

          Hover pattern: matches Industries dark cards exactly —
          -translate-y-1 + border-emerald-400/40 + bg-white/[0.07].

          Icon: rendered in bg-white/10 text-emerald-300 rounded-xl —
          consistent with dark-background icon style on the site.

          Description: text-xs text-slate-400, rendered between h3 and the
          item list, matching the descriptor pattern used on workflow cards.
        */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {auditCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.12 }}
              className="glass-dark group rounded-2xl border border-white/10 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/40 hover:bg-white/[0.07]"
            >
              {/* Per-category icon — visual anchor for fast scanning */}
              <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-emerald-300">
                <cat.icon className="h-5 w-5" strokeWidth={1.75} />
              </span>

              <h3 className="font-display text-lg font-semibold text-white">
                {cat.title}
              </h3>

              {/* One-line descriptor — contextualises the category before
                  the item list, consistent with ClinicalWorkflow / BEMonitoring */}
              <p className="mb-4 mt-1.5 text-xs leading-relaxed text-slate-400">
                {cat.description}
              </p>

              <ul className="space-y-2.5">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-slate-300"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/*
          GxP Standards panel.

          Change: plain <div> → motion.div with whileInView entrance.
          Previously the only major content block in this section without
          an entrance animation — now consistent with the audit cards above
          and every other content block site-wide.

          Semantic HTML: tile grid changed from plain <div>/<div> to
          <ul>/<li> — screen readers now announce this as a list of 6
          standards and report the item count.

          Typography: text-[11px] → text-xs (design system value, 12 px)
          for GxP standard labels — improves readability on dark backgrounds,
          especially for longer labels like "Good Storage & Distribution Practices".
        */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-16 rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-10"
        >
          <h3 className="font-display text-lg font-semibold text-white">
            GxP Standards We Audit Against
          </h3>
          <ul className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {gxpStandards.map((g) => (
              <li
                key={g.code}
                className="rounded-xl border border-white/10 bg-white/5 p-4 text-center transition hover:border-emerald-400/40"
              >
                <p className="font-display text-xl font-bold text-emerald-300">
                  {g.code}
                </p>
                <p className="mt-1 text-xs leading-tight text-slate-400">
                  {g.label}
                </p>
              </li>
            ))}
          </ul>
        </motion.div>

        {/*
          CTA — ghost variant is already designed for bg-ink dark backgrounds
          (used in the Hero section). Copy targets pharmaceutical QA directors
          and compliance leads — the primary audience for this section.
        */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 flex justify-center"
        >
          <Button as="a" href="#contact" variant="ghost">
            Request a GxP audit assessment
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
