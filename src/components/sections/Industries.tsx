import { motion } from "framer-motion";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { industries } from "../../lib/data";

export default function Industries() {
  return (
    <section id="industries" className="relative overflow-hidden bg-ink py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-grid-faint bg-[size:44px_44px] opacity-[0.04]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-600/20 blur-3xl" />

      <Container className="relative">
        <SectionHeading
          light
          eyebrow="Industries We Serve"
          title="Trusted across the product categories that matter most"
          description="From first-in-human biopharmaceuticals to consumer cosmetics, our clinical trial expertise spans the categories that shape everyday health and wellness."
        />

        <div className="mt-16 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-dark group flex flex-col items-center gap-4 rounded-2xl border border-white/10 px-6 py-9 text-center transition-all hover:border-emerald-400/40 hover:bg-white/[0.07]"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500/20 to-brand-500/20 text-emerald-300 ring-1 ring-white/10 transition-transform group-hover:scale-110">
                <ind.icon className="h-7 w-7" strokeWidth={1.75} />
              </span>
              <p className="font-display text-sm font-semibold text-white">{ind.title}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
