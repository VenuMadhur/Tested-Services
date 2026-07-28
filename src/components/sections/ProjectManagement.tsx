import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { pmSteps } from "../../lib/data";

export default function ProjectManagement() {
  return (
    <section id="project-management" className="relative bg-white py-24 sm:py-32">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[1fr,1.1fr] lg:items-center">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Project Management"
              title="One team, accountable end to end"
              description="From quotation to project close-out, a dedicated project lead keeps your study cost-effective, on schedule and fully compliant with the intended regulatory framework."
            />

            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative mt-10 rounded-2xl border border-emerald-100 bg-emerald-50 p-6"
            >
              <Quote className="h-6 w-6 text-emerald-500/50" />
              <p className="mt-3 font-display text-lg font-medium leading-relaxed text-ink">
                Get the best study quote to minimize cost and navigate fast deliverables without
                compromising on quality.
              </p>
            </motion.blockquote>

            <ul className="mt-8 space-y-3">
              {[
                "End-to-end service from feasibility through final report",
                "Cost-effective delivery with regular sponsor updates",
                "Every study run in a highly regulated, compliant environment",
              ].map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm text-slate-650">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Circular process visual */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {pmSteps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative rounded-2xl border border-slate-100 bg-surface p-5 text-center shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
              >
                <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 rounded-full bg-brand-800 px-2 py-0.5 text-[10px] font-bold text-white">
                  {i + 1}
                </span>
                <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-brand-600 text-white">
                  <step.icon className="h-5 w-5" strokeWidth={2} />
                </span>
                <p className="mt-3 font-display text-sm font-semibold text-ink">{step.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-slate-500">{step.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
