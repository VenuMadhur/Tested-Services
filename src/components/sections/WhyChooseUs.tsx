import { motion } from "framer-motion";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { whyChooseUs } from "../../lib/data";

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative bg-white py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Why Choose Us"
          title="A CRO that treats your study like its own"
          description="Sponsors partner with us for the combination of scientific depth, regulatory fluency and hands-on project ownership that keeps studies moving without compromising quality."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="relative overflow-hidden rounded-2xl border border-slate-100 bg-surface p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
            >
              <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-emerald-100/60 blur-2xl" />
              <span className="relative inline-flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100">
                <item.icon className="h-5 w-5" strokeWidth={2} />
              </span>
              <h3 className="relative mt-4 font-display text-lg font-semibold text-ink">{item.title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-slate-650">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
