import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { services } from "../../lib/data";

export default function Services() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="services" className="relative bg-surface py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Featured Services"
          title="Depth across every stage of the study lifecycle"
          description="We combine the strength of experience and innovation to deliver world-class services for the CRO and pharmaceutical industry — one accountable team, seven specialist disciplines."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const isActive = active === service.slug;
            return (
              <motion.button
                key={service.slug}
                onClick={() => setActive(isActive ? null : service.slug)}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
                className={`group relative flex flex-col rounded-2xl border p-6 text-left shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover ${
                  isActive
                    ? "border-emerald-300 bg-white ring-2 ring-emerald-400/40"
                    : "border-slate-100 bg-white"
                }`}
                aria-expanded={isActive}
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-700 to-brand-500 text-white shadow-card transition-transform duration-300 group-hover:scale-105">
                  <service.icon className="h-6 w-6" strokeWidth={2} />
                </span>
                <h3 className="mt-5 font-display text-base font-semibold leading-snug text-ink">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-650">{service.summary}</p>

                <motion.div
                  initial={false}
                  animate={{ height: isActive ? "auto" : 0, opacity: isActive ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <ul className="mt-4 space-y-2 border-t border-slate-100 pt-4">
                    {service.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-xs font-medium text-brand-700">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-emerald-500" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <span className="mt-4 flex items-center gap-1 text-xs font-semibold text-emerald-700">
                  {isActive ? "Show less" : "View focus areas"}
                  <ArrowUpRight
                    className={`h-3.5 w-3.5 transition-transform duration-300 ${
                      isActive ? "rotate-90" : ""
                    }`}
                  />
                </span>
              </motion.button>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
