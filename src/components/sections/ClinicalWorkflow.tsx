import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import WorkflowStepper from "../ui/WorkflowStepper";
import { clinicalTrialFlow, monitoringFlow } from "../../lib/data";

export default function ClinicalWorkflow() {
  return (
    <section id="clinical-workflow" className="relative bg-surface py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Clinical Trial Workflow"
          title="A disciplined path from contract to final report"
          description="Click through each stage to see exactly how we take a study from signature to statistical delivery — and how we keep every site accountable along the way."
        />

        <div className="mt-16 space-y-20">
          <div>
            <h3 className="mb-8 font-display text-lg font-semibold text-ink">
              Flow of Clinical Trial Execution
            </h3>
            <WorkflowStepper steps={clinicalTrialFlow} accent="brand" />
          </div>

          <div>
            <h3 className="mb-8 font-display text-lg font-semibold text-ink">
              Flow of Clinical Trial Monitoring
            </h3>
            <WorkflowStepper steps={monitoringFlow} accent="emerald" />
          </div>
        </div>
      </Container>
    </section>
  );
}
