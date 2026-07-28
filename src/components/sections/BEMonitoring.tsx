import { motion } from "framer-motion";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import WorkflowStepper from "../ui/WorkflowStepper";
import { beClinicalFlow, beBioanalyticalFlow, stats } from "../../lib/data";
import { useCountUp } from "../../hooks/useCountUp";

function MiniStat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { value: animated, ref } = useCountUp(value);
  return (
    <div ref={ref} className="rounded-2xl border border-brand-100 bg-white px-5 py-6 text-center shadow-soft">
      <div className="font-display text-2xl font-bold text-brand-800 sm:text-3xl">
        {animated}
        {suffix}
      </div>
      <div className="mt-1 text-xs font-medium text-slate-500">{label}</div>
    </div>
  );
}

export default function BEMonitoring() {
  return (
    <section id="be-monitoring" className="relative bg-white py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Bioequivalence Site Monitoring"
          title="Clinical and bioanalytical oversight, side by side"
          description="Our monitors review both healthy-subject and patient-based BA/BE studies against GLP and GCP regulations — verifying SOP adherence, protocol compliance and sponsor obligations at every step."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {stats.map((s) => (
            <MiniStat key={s.label} {...s} />
          ))}
        </motion.div>

        <div className="mt-20 space-y-20">
          <div>
            <h3 className="mb-8 font-display text-lg font-semibold text-ink">
              Flow of BE Clinical Study Site Monitoring
            </h3>
            <WorkflowStepper steps={beClinicalFlow} accent="emerald" />
          </div>

          <div>
            <h3 className="mb-8 font-display text-lg font-semibold text-ink">
              Flow of BE Bioanalytical Study Site Monitoring
            </h3>
            <WorkflowStepper steps={beBioanalyticalFlow} accent="brand" />
          </div>
        </div>
      </Container>
    </section>
  );
}
