import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { whyChooseUs } from "../../lib/data";

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative bg-white py-24 sm:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr,1.15fr] lg:gap-14">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Why Choose Us"
              title="A CRO that treats your study like its own"
              description="Sponsors partner with us for the combination of scientific depth, regulatory fluency and hands-on project ownership that keeps studies moving without compromising quality."
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="relative mt-10 hidden overflow-hidden rounded-2xl bg-gradient-to-br from-brand-800 to-emerald-700 p-7 text-white shadow-card-hover lg:block"
            >
              <div className="pointer-events-none absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
              <ShieldCheck className="h-8 w-8 text-emerald-200" strokeWidth={1.75} />
              <p className="mt-4 font-display text-lg font-semibold leading-snug">
                Every engagement runs under documented SOPs, incident tracking and internal QA.
              </p>
              <p className="mt-2 text-sm text-emerald-100">
                The same audit categories we apply for sponsors — process, product, system and
                purpose — are applied to our own work.
              </p>
            </motion.div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {whyChooseUs.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className="relative overflow-hidden rounded-2xl border border-slate-100 bg-surface p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-card"
              >
                <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-emerald-100/60 blur-2xl transition-opacity duration-300 group-hover:opacity-80" />
                <span className="relative inline-flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100">
                  <item.icon className="h-5 w-5" strokeWidth={2} />
                </span>
                <h3 className="relative mt-4 font-display text-base font-semibold text-ink">{item.title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-slate-650">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
