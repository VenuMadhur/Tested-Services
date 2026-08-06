import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import { industries } from "../../lib/data";

export default function Industries() {
  return (
    <section id="industries" className="relative overflow-hidden bg-ink py-24 sm:py-32">
      {/* Existing ambient background decorations — unchanged */}
      <div className="pointer-events-none absolute inset-0 bg-grid-faint bg-[size:44px_44px] opacity-[0.04]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-600/20 blur-3xl" />

      <Container className="relative">
        <SectionHeading
          light
          eyebrow="Industries We Serve"
          title="Trusted across the product categories that matter most"
          description="From first-in-human biopharmaceuticals to consumer cosmetics, our clinical trial expertise spans the categories that shape everyday health and wellness."
        />

        {/*
          Grid layout — orphan-free at every breakpoint:
          • Mobile  (< 640px): 2 columns; last card spans full row so it is
            centered and reads as intentional, not accidental.
          • Tablet  (640–1023px): 3 columns; 5 items = row of 3 + row of 2
            — balanced and clean.
          • Desktop (≥ 1024px): 5 columns; all items in a single row.

          Semantic change: grid is now a <ul> and each card a <li> so
          assistive technology correctly identifies this as a list of industries.
        */}
        <ul className="mt-16 grid list-none grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {industries.map((ind, i) => (
            <motion.li
              key={ind.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              /* Last card spans both columns at mobile so it is visually
                 centered rather than left-orphaned. Reset to 1 col at sm+. */
              className={`glass-dark group flex flex-col items-center gap-4 rounded-2xl border border-white/10 px-6 py-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/40 hover:bg-white/[0.07] hover:shadow-card${
                i === industries.length - 1 ? " col-span-2 sm:col-span-1" : ""
              }`}
            >
              {/* Icon container — opacity lifted from /20 to /30 for better
                  legibility on the dark ink background */}
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500/30 to-brand-500/30 text-emerald-300 ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-110">
                <ind.icon className="h-7 w-7" strokeWidth={1.75} />
              </span>

              <div>
                {/* Title: upgraded from text-sm to text-base to match the
                    visual weight of a primary industry label */}
                <p className="font-display text-base font-semibold text-white">
                  {ind.title}
                </p>
                {/* Clinical descriptor — new, gives every card CRO-specific
                    context without changing the overall design language */}
                <p className="mt-1.5 text-xs leading-relaxed text-slate-400">
                  {ind.description}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>

        {/* CTA — ghost variant already designed for dark backgrounds;
            guides sponsors from industry recognition toward proposal request */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-12 flex justify-center"
        >
          <Button as="a" href="#contact" variant="ghost">
            Discuss your program with our team
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
