import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { services } from "../../lib/data";

export default function Services() {
  const [active, setActive] = useState<string | null>(null);
  const [featured, ...rest] = services;

  return (
    <section id="services" className="relative bg-white py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Featured Services"
          title="Depth across every stage of the study lifecycle"
          description="Seven specialist disciplines working from a shared plan — covering every stage of a study from feasibility through final regulatory submission."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Flagship service — asymmetrical highlight panel */}
          <motion.button
            key={featured.slug}
            onClick={() => setActive(active === featured.slug ? null : featured.slug)}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-brand-700/20 bg-gradient-to-br from-brand-800 via-brand-700 to-emerald-700 p-7 text-left shadow-card-hover transition-all duration-300 hover:-translate-y-1.5 sm:col-span-2 sm:row-span-2 sm:p-8"
            aria-expanded={active === featured.slug}
          >
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
            <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-100">
              <Sparkles className="h-3 w-3" />
              Most requested
            </span>
            <span className="mt-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-white backdrop-blur-sm">
              <featured.icon className="h-7 w-7" strokeWidth={1.75} />
            </span>
            <h3 className="mt-6 font-display text-xl font-semibold leading-snug text-white sm:text-2xl">
              {featured.title}
            </h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-brand-100">{featured.summary}</p>

            <ul className="mt-6 space-y-2.5">
              {featured.points.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm font-medium text-white/90">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-emerald-300" />
                  {p}
                </li>
              ))}
            </ul>

            <span className="mt-auto flex items-center gap-1 pt-6 text-xs font-semibold text-emerald-200">
              Explore this service
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </motion.button>

          {rest.map((service, i) => {
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
