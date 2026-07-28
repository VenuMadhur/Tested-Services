import { motion } from "framer-motion";
import { Target, Eye, Gem, Quote } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { values, timeline } from "../../lib/data";

export default function About() {
  return (
    <section id="about" className="relative bg-white py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="About Tested Services"
          title="Founded in 2020 to raise the standard for contract research"
          description="Tested Services was built to meet the growing needs of contract research with a simple premise: sponsors deserve a partner as rigorous about quality as they are about outcomes."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl border border-brand-100 bg-gradient-to-br from-brand-50 to-white p-8 shadow-soft sm:p-10"
          >
            <Quote className="h-9 w-9 text-emerald-500/40" />
            <p className="mt-4 font-display text-xl font-medium leading-relaxed text-ink sm:text-2xl">
              Ensure efficiency, quality, transparency and confidentiality in every service — and
              become the only choice of global partner for clinical services and expert data
              solutions that meet both current and future developmental needs.
            </p>
            <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-brand-700">
              Our founding statement
            </p>

            {/* Timeline */}
            <div className="mt-10 space-y-6 border-t border-brand-100 pt-8">
              {timeline.map((t, i) => (
                <div key={t.year} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-700 text-xs font-bold text-white">
                      {t.year === "Today" ? "•" : t.year === "Ahead" ? "→" : t.year}
                    </span>
                    {i < timeline.length - 1 && <span className="mt-1 h-full w-px flex-1 bg-brand-100" />}
                  </div>
                  <div className="pb-2">
                    <p className="font-semibold text-ink">{t.label}</p>
                    <p className="mt-1 text-sm text-slate-650">{t.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-6">
            {[
              {
                icon: Gem,
                title: "Values",
                accent: "from-brand-900 to-brand-700",
                content: (
                  <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {values.map((v) => (
                      <li key={v} className="flex items-center gap-2 text-sm text-slate-650">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-700" />
                        {v}
                      </li>
                    ))}
                  </ul>
                ),
              },
              {
                icon: Target,
                title: "Mission",
                accent: "from-brand-700 to-brand-500",
                content: (
                  <p className="mt-4 text-sm leading-relaxed text-slate-650">
                    To be proactive and passionate partners who act as an integral part of every
                    drug development team — delivering quality outcomes sponsors can build on.
                  </p>
                ),
              },
              {
                icon: Eye,
                title: "Vision",
                accent: "from-emerald-600 to-emerald-400",
                content: (
                  <p className="mt-4 text-sm leading-relaxed text-slate-650">
                    To become a global leader in clinical research — reducing risk and expediting
                    the delivery of clinical trials for sponsors everywhere.
                  </p>
                ),
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group rounded-2xl border border-slate-100 bg-white p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
              >
                <span
                  className={`inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${card.accent} text-white shadow-card`}
                >
                  <card.icon className="h-5 w-5" strokeWidth={2.25} />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink">{card.title}</h3>
                {card.content}
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
