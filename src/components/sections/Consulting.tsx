import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { consultingServices } from "../../lib/data";

export default function Consulting() {
  return (
    <section id="consulting" className="relative overflow-hidden bg-brand-50 py-24 sm:py-32">
      <div className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-brand-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-emerald-100/50 blur-3xl" />
      <Container className="relative">
        <SectionHeading
          eyebrow="Consulting Services"
          title="Specialist consulting for the details that determine approval"
          description="Regulatory strategy, scientific writing, statistical design and safety oversight — delivered by consultants who work these disciplines every day, not as a side practice."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {consultingServices.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
              className="rounded-2xl border-t-4 border-emerald-500 bg-white p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-800 text-white">
                <service.icon className="h-5 w-5" strokeWidth={2} />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-ink">{service.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-650">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
