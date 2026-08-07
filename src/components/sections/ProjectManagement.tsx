import { motion } from "framer-motion";
import { ArrowRight, Target } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import { pmSteps } from "../../lib/data";

export default function ProjectManagement() {
  return (
    <section id="project-management" className="relative bg-premiumCanvas-projectManagement py-24 sm:py-32">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[1fr,1.1fr] lg:items-center">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Project Management"
              title="One team, accountable end to end"
              description="From quotation to project close-out, a dedicated project lead keeps your study cost-effective, on schedule and fully compliant with the intended regulatory framework."
            />

            {/* 
              Value Proposition Panel.
              Replaced the unattributed quote with a professional capability callout.
              Uses a Target icon (aria-hidden) instead of a Quote icon.
            */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative mt-10 rounded-2xl border border-emerald-100 bg-emerald-50 p-6"
            >
              <Target className="h-6 w-6 text-emerald-500/50" aria-hidden="true" />
              <p className="mt-3 font-display text-lg font-medium leading-relaxed text-ink">
                Dedicated project leads ensure your study stays cost-effective, on schedule, and fully compliant with all global regulatory frameworks.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative mt-10 overflow-hidden rounded-2xl border border-slate-100 shadow-soft"
            >
              <div className="absolute inset-0 rounded-[1.4rem] ring-1 ring-inset ring-brand-900/10" />
              <img
                src="/images/pm.jpg"
                alt="Clinical project management dashboard"
                className="aspect-video w-full object-cover sm:aspect-[21/9]"
              />
              
              {/* Dashboard Floating KPIs */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -bottom-8 -left-8 hidden rounded-2xl border border-white/60 bg-white/80 p-5 shadow-card backdrop-blur-md md:block"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Avg. Initiation</p>
                    <p className="font-display text-lg font-bold text-ink">&lt; 30 Days</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <ul className="mt-16 space-y-3">
              {[
                "End-to-end service from feasibility through final report",
                "Cost-effective delivery with regular sponsor updates",
                "Every study run in a highly regulated, compliant environment",
              ].map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm text-slate-650">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>

            {/* 
              CTA Section.
              Added to provide a conversion path for high-intent sponsors.
            */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-10"
            >
              <Button as="a" href="#contact" variant="secondary">
                Discuss your project timeline
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Button>
            </motion.div>
          </div>

          {/* 
            Circular process visual / Step Cards.
            Grid updated to sm:grid-cols-2 to prevent cramping and text squishing.
          */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {pmSteps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative flex flex-col rounded-2xl border border-slate-100 bg-surface p-5 text-center shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand-100 hover:shadow-card"
              >
                {/* Step number badge */}
                <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 rounded-full bg-brand-800 px-2 py-0.5 text-[10px] font-bold text-white">
                  {i + 1}
                </span>
                
                {/* 
                  Standardized icon container.
                */}
                <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                  <step.icon className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
                </span>
                
                <p className="mt-3 font-display text-sm font-semibold text-ink">{step.title}</p>
                <p className="mt-2 text-xs leading-relaxed text-slate-500">{step.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
