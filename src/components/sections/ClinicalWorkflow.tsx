import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import WorkflowStepper from "../ui/WorkflowStepper";
import Button from "../ui/Button";
import { clinicalTrialFlow, monitoringFlow } from "../../lib/data";

/**
 * Workflow metadata — keeps the JSX clean and makes it easy to add a third
 * workflow in the future without touching the render logic.
 */
const workflows = [
  {
    id: "execution",
    title: "Flow of Clinical Trial Execution",
    description:
      "Six structured stages taking your study from contract signature through to final statistical delivery and regulatory archival.",
    steps: clinicalTrialFlow,
    accent: "brand" as const,
    // Thin left-border accent colour — visually differentiates this workflow
    // from the Monitoring block below without changing the design language.
    accentBar: "bg-brand-700",
  },
  {
    id: "monitoring",
    title: "Flow of Clinical Trial Monitoring",
    description:
      "Six site-visit stages ensuring protocol adherence, data integrity and GCP compliance are maintained throughout the study.",
    steps: monitoringFlow,
    accent: "emerald" as const,
    accentBar: "bg-emerald-600",
  },
];

export default function ClinicalWorkflow() {
  return (
    <section id="clinical-workflow" className="relative bg-premiumCanvas-process py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Clinical Trial Workflow"
          title="A disciplined path from contract to final report"
          description="Click through each stage to see exactly how we take a study from signature to statistical delivery — and how we keep every site accountable along the way."
        />

        {/* Two workflow cards — each animated independently on scroll entry.
            Wrapping each workflow in a white card on bg-slate-50:
            • Gives each workflow a clear visual boundary
            • Naturally differentiates Execution from Monitoring
            • Matches the card pattern used in About, Services, and WhyChooseUs
            • Makes the detail panel (also white) read as nested content       */}
        <div className="mt-16 space-y-8">
          {workflows.map((wf, i) => (
            <motion.div
              key={wf.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-card transition-all duration-300 hover:shadow-card-hover sm:p-10"
            >
              {/* Block header: coloured accent bar + workflow title */}
              <div className="flex items-center gap-3">
                <span
                  className={`h-5 w-1 shrink-0 rounded-full ${wf.accentBar}`}
                  aria-hidden="true"
                />
                <h3 className="font-display text-lg font-semibold text-ink">
                  {wf.title}
                </h3>
              </div>

              {/* One-line descriptor — clarifies each workflow's purpose before
                  the stepper begins; indented to align with the title text     */}
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

        {/* Section CTA — guides high-intent visitors (those who have reviewed
            the full workflow) toward the proposal request, matching the same
            pattern applied to the Industries section.                        */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 flex justify-center"
        >
          <Button as="a" href="#contact" variant="secondary">
            Ready to begin your study? Request a proposal
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
