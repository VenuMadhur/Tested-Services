import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
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

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {auditCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.12 }}
              className="glass-dark rounded-2xl border border-white/10 p-7"
            >
              <h3 className="font-display text-lg font-semibold text-white">{cat.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {cat.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-10">
          <h3 className="font-display text-lg font-semibold text-white">GxP Standards We Audit Against</h3>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {gxpStandards.map((g) => (
              <div
                key={g.code}
                className="rounded-xl border border-white/10 bg-white/5 p-4 text-center transition hover:border-emerald-400/40"
              >
                <p className="font-display text-xl font-bold text-emerald-300">{g.code}</p>
                <p className="mt-1 text-[11px] leading-tight text-slate-400">{g.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
