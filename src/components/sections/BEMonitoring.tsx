import { motion } from "framer-motion";
import { ArrowRight, Microscope, Users } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import WorkflowStepper from "../ui/WorkflowStepper";
import Button from "../ui/Button";
import { beClinicalFlow, beBioanalyticalFlow } from "../../lib/data";

/**
 * Workflow metadata — mirrors the structure used in ClinicalWorkflow.tsx for
 * full architectural consistency. Adding a third workflow here requires only
 * a new entry in this array.
 */
const workflows = [
  {
    id: "be-clinical",
    title: "Flow of BE Clinical Study Site Monitoring",
    description:
      "Six monitoring stages covering the clinical phase — from pre-study site preparation through subject dosing to post-study close-out and final reporting.",
    steps: beClinicalFlow,
    accent: "emerald" as const,
    accentBar: "bg-emerald-600",
  },
  {
    id: "be-bioanalytical",
    title: "Flow of BE Bioanalytical Study Site Monitoring",
    description:
      "Six monitoring stages covering the bioanalytical laboratory phase — from method validation through analytical runs and retrospective data review to final reporting.",
    steps: beBioanalyticalFlow,
    accent: "brand" as const,
    accentBar: "bg-brand-700",
  },
];

export default function BEMonitoring() {
  return (
    /*
      Background changed from bg-white → bg-brand-50 to fix the background
      rhythm collision with adjacent sections:
        bg-slate-50 (ClinicalWorkflow) → bg-brand-50 (BEMonitoring)
          → bg-ink (GxpAudits)
      This mirrors the GlobalPresence → Industries transition used elsewhere.
    */
    <section id="be-monitoring" className="relative bg-brand-50 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Bioequivalence Site Monitoring"
          title="Clinical and bioanalytical oversight, side by side"
          description="Our monitors review both healthy-subject and patient-based BA/BE studies against GLP and GCP regulations — verifying SOP adherence, protocol compliance and sponsor obligations at every step."
        />

        {/*
          Dual-phase context block — replaces the generic company-wide stats
          grid. Explains the structural relationship between the two monitoring
          phases before the user encounters the steppers, contextualising the
          dual-workflow layout below. Uses only factual, non-invented claims.
        */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mt-14 grid gap-5 sm:grid-cols-2"
        >
          {/* Clinical phase pillar */}
          <div className="rounded-2xl border border-emerald-100 bg-white p-7 shadow-soft">
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100">
                <Users className="h-5 w-5" />
              </span>
              <p className="font-display text-sm font-semibold text-ink">
                Clinical Phase Monitoring
              </p>
            </div>
            <p className="text-sm leading-relaxed text-slate-650">
              Conducted at the clinical site — covering subject check-in, IP
              accountability, dosing-day activities, safety assessments and
              close-out documentation under GCP compliance.
            </p>
          </div>

          {/* Bioanalytical phase pillar */}
          <div className="rounded-2xl border border-brand-100 bg-white p-7 shadow-soft">
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                <Microscope className="h-5 w-5" />
              </span>
              <p className="font-display text-sm font-semibold text-ink">
                Bioanalytical Phase Monitoring
              </p>
            </div>
            <p className="text-sm leading-relaxed text-slate-650">
              Conducted at the bioanalytical laboratory — covering method
              validation, sample analysis runs, chromatographic data integrity
              and retrospective data review under GLP compliance.
            </p>
          </div>
        </motion.div>

        {/* Bridge sentence — explains the parallel execution of both phases */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-center text-sm leading-relaxed text-slate-650"
        >
          Both phases are monitored in parallel by our dedicated CRA team,
          ensuring cross-phase data traceability from clinical site to
          bioanalytical laboratory.
        </motion.p>

        {/*
          Workflow cards — identical structure to ClinicalWorkflow.tsx:
          • white card on bg-brand-50 background (same contrast ratio as
            ClinicalWorkflow's white cards on bg-slate-50)
          • coloured accent bar beside each h3 title
          • one-line descriptor beneath the title
          • space-y-8 between cards (consistent with ClinicalWorkflow)
          • staggered whileInView entrance animation per card
          • descriptive flowId for meaningful ARIA panel IDs
        */}
        <div className="mt-10 space-y-8">
          {workflows.map((wf, i) => (
            <motion.div
              key={wf.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-2xl border border-slate-100 bg-white p-8 shadow-soft sm:p-10"
            >
              {/* Block header: accent bar + workflow title (h3) */}
              <div className="flex items-center gap-3">
                <span
                  className={`h-5 w-1 shrink-0 rounded-full ${wf.accentBar}`}
                  aria-hidden="true"
                />
                <h3 className="font-display text-lg font-semibold text-ink">
                  {wf.title}
                </h3>
              </div>

              {/* Descriptor — pl-4 aligns text under the h3, past the accent bar */}
              <p className="mb-8 mt-2 pl-4 text-sm leading-relaxed text-slate-650">
                {wf.description}
              </p>

              <WorkflowStepper
                steps={wf.steps}
                accent={wf.accent}
                flowId={wf.id}
              />
            </motion.div>
          ))}
        </div>

        {/*
          CTA — BA/BE-specific copy targets pharmaceutical formulation sponsors
          who are the primary audience for this section.
          Uses Button variant="secondary" matching the ClinicalWorkflow CTA.
        */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 flex justify-center"
        >
          <Button as="a" href="#contact" variant="secondary">
            Planning a BA/BE study? Discuss your monitoring program
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
