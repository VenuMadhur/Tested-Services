import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import { consultingServices } from "../../lib/data";

export default function Consulting() {
  return (
    <section id="consulting" className="relative overflow-hidden bg-premiumCanvas-consulting py-24 sm:py-32">
      <div className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-orange-500/5 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-brand-500/5 blur-3xl" />
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
              /* 
                Card Styling: 
                Replaced generic slate border with a subtle brand orange tint,
                reflecting the PPT's orange-outlined consulting cards.
              */
              className="relative overflow-hidden rounded-2xl border border-orange-100/60 border-t-4 border-t-orange-500 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card hover:border-orange-300/60"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                {/* Decorative icon hidden from screen readers */}
                <service.icon className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-ink">{service.title}</h3>
              
              {/* Added descriptor sentence to bridge the gap between title and technical bullets */}
              <p className="mb-4 mt-1.5 text-sm leading-relaxed text-slate-500">
                {service.description}
              </p>

              <ul className="space-y-2.5">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-650">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* 
          CTA Section: 
          Captures high-intent sponsors who need consulting services.
          Uses `Button variant="secondary"` matching the pattern used in other light sections.
        */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 flex justify-center"
        >
          <Button as="a" href="#contact" variant="secondary">
            Discuss your consulting needs
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
