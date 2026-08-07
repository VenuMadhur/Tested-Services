import { motion } from "framer-motion";
import { ClipboardCheck, Gavel, FileSignature, LineChart, Users2, ShieldCheck } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { stats } from "../../lib/data";
import { useCountUp } from "../../hooks/useCountUp";

const roles = [
  {
    title: "Clinical Research Associates",
    description: "Qualify and monitor sites, verify protocol adherence, and keep every study audit-ready.",
    icon: ClipboardCheck,
  },
  {
    title: "Regulatory Specialists",
    description: "Compile and submit dossiers aligned to USFDA, UK MHRA, ANVISA and EMA requirements.",
    icon: Gavel,
  },
  {
    title: "Medical Writers",
    description: "Author protocols, BE reports and manuscripts built for regulator and journal review.",
    icon: FileSignature,
  },
  {
    title: "Biostatisticians",
    description: "Design randomization, run pharmacokinetic analysis, and validate output to CDISC standards.",
    icon: LineChart,
  },
  {
    title: "Project Managers",
    description: "Own each study from kickoff to close-out — budget, timeline and sponsor communication in one hand.",
    icon: Users2,
  },
];

function PanelStat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { value: animated, ref } = useCountUp(value);
  return (
    <div ref={ref}>
      <div className="font-display text-3xl font-bold text-ink">
        {animated}
        {suffix}
      </div>
      <div className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-500">{label}</div>
    </div>
  );
}

export default function Experts() {
  return (
    <section id="experts" className="relative bg-premiumCanvas-experts py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Clinical Research Experts"
          title="The disciplines behind every study"
          description="Every engagement draws on the same five specialisms working in concert — so nothing about your study depends on a single point of failure."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-[0.85fr,1.15fr] lg:items-center lg:gap-14">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto flex w-full max-w-sm flex-col overflow-hidden rounded-3xl border border-brand-200 bg-white p-8 text-ink shadow-card lg:max-w-none"
          >
            <div className="pointer-events-none absolute -right-14 -top-14 hidden h-48 w-48 rounded-full bg-brand-50 blur-3xl md:block" />
            
            {/* Floating Trust Element */}
            <div className="absolute -right-4 -top-4 flex h-16 w-16 items-center justify-center rounded-full border border-brand-200 bg-brand-50 shadow-soft rotate-12">
              <span className="text-center font-display text-[10px] font-bold leading-tight text-brand-700">ISO<br/>9001</span>
            </div>
            <ShieldCheck className="h-9 w-9 text-brand-600" strokeWidth={1.5} />
            <p className="mt-5 font-display text-xl font-semibold leading-snug">
              Every study is led by one point of contact, backed by the same five specialisms.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Responsibility never falls between teams, because the people running your study
              don't change from one phase to the next.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6 border-t border-slate-200 pt-7">
              {stats.map((s) => (
                <PanelStat key={s.label} {...s} />
              ))}
            </div>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2">
            {roles.map((role, i) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
                className={`group flex gap-4 rounded-2xl border border-slate-100 bg-surface p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-card ${
                  i === roles.length - 1 ? "sm:col-span-2" : ""
                }`}
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-brand-100 bg-brand-50 text-brand-600 transition-transform duration-300 group-hover:scale-105">
                  <role.icon className="h-6 w-6" strokeWidth={2} />
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold text-ink">{role.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-650">{role.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
