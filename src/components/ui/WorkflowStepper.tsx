import { useState, useId } from "react";
import { motion } from "framer-motion";
import Button from "./Button";

export type WorkflowStep = {
  title: string;
  detail: string;
  keyActions?: string[];
};

export default function WorkflowStepper({
  steps,
  accent = "emerald",
  flowId: flowIdProp,
}: {
  steps: WorkflowStep[];
  accent?: "emerald" | "brand";
  /** Unique identifier for ARIA panel linkage. Auto-generated if omitted. */
  flowId?: string;
}) {
  const [active, setActive] = useState(0);

  // useId generates a stable, unique ID per component instance (React 18+).
  // This prevents duplicate aria-controls/id pairs when multiple steppers
  // appear on the same page (e.g. ClinicalWorkflow + BEMonitoring).
  const autoId = useId();
  const flowId = flowIdProp ?? autoId.replace(/:/g, "");
  const panelId = `workflow-panel-${flowId}`;

  const c = {
    emerald: {
      dot: "bg-emerald-600",
      ring: "ring-emerald-300",
      text: "text-emerald-700",
      bar: "from-emerald-500 to-emerald-300",
      bullet: "bg-emerald-600",
    },
    brand: {
      dot: "bg-brand-700",
      ring: "ring-brand-300",
      text: "text-brand-700",
      bar: "from-brand-600 to-brand-300",
      bullet: "bg-brand-700",
    },
  }[accent];

  return (
    <div>
      {/* ── MOBILE: vertical stepper (< sm) ──────────────────────────────────
          On mobile the horizontal rail cannot span two grid rows, so the
          progress track would visually disconnect from steps 4-6. We render
          a vertical layout instead: a single continuous line runs behind all
          dot markers, keeping the sequence visually connected at every
          viewport width.                                                    */}
      <nav
        role="tablist"
        aria-label={`${flowId} workflow steps`}
        className="relative sm:hidden"
      >
        {/* Continuous vertical connector — sits behind all dots via z-index */}
        <div
          className="absolute left-[18px] top-[18px] w-0.5 bg-slate-200"
          style={{ bottom: "18px" }}
          aria-hidden="true"
        />

        {steps.map((step, i) => {
          const isActive = i === active;
          const isDone = i < active;
          return (
            <div
              key={step.title}
              className="relative flex items-start gap-4 pb-4 last:pb-0"
            >
              {/* Numbered dot — visual indicator only (aria-hidden) */}
              <div
                aria-hidden="true"
                className={`relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white transition-colors duration-300 ${
                  isActive || isDone ? c.dot : "bg-slate-300"
                }`}
              >
                {i + 1}
              </div>

              {/* Step title — the interactive tab element */}
              <button
                role="tab"
                aria-selected={isActive}
                aria-controls={panelId}
                onClick={() => setActive(i)}
                className={`pt-1 text-left text-sm font-semibold leading-snug transition-colors duration-200 ${
                  isActive ? c.text : "text-slate-500"
                }`}
              >
                {step.title}
              </button>
            </div>
          );
        })}
      </nav>

      {/* ── DESKTOP: horizontal stepper (sm+) ────────────────────────────────
          Original horizontal layout with animated progress rail.
          Shown only at ≥ 640 px where all 6 steps fit in a single row.     */}
      <div className="hidden sm:block">
        <div className="relative">
          {/* Background rail track */}
          <div
            className="absolute left-0 right-0 top-5 h-[3px] rounded-full bg-slate-100"
            aria-hidden="true"
          />
          {/* Animated progress fill */}
          <motion.div
            className={`absolute left-0 top-5 h-[3px] rounded-full bg-gradient-to-r ${c.bar}`}
            initial={false}
            animate={{ width: `${(active / (steps.length - 1)) * 100}%` }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            aria-hidden="true"
          />
          <ol
            role="tablist"
            aria-label={`${flowId} workflow steps`}
            className="relative grid grid-cols-6 gap-y-8"
          >
            {steps.map((step, i) => {
              const isActive = i === active;
              const isDone = i < active;
              return (
                <li
                  key={step.title}
                  className="flex flex-col items-center text-center"
                >
                  <button
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={panelId}
                    onClick={() => setActive(i)}
                    className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full text-xs font-bold text-white transition-all duration-300 ${
                      isActive || isDone ? c.dot : "bg-slate-300"
                    } ${isActive ? `ring-4 ${c.ring}` : ""}`}
                  >
                    {i + 1}
                  </button>
                  <span
                    className={`mt-3 max-w-[7.5rem] text-xs font-semibold leading-snug transition-colors ${
                      isActive ? c.text : "text-slate-500"
                    }`}
                  >
                    {step.title}
                  </span>
                </li>
              );
            })}
          </ol>
        </div>
      </div>

      {/* ── Shared detail panel ───────────────────────────────────────────────
          Shared between mobile and desktop. Animates on step change.
          role="tabpanel" + id links it to its controlling tab buttons via
          aria-controls, completing the ARIA tab pattern.                   */}
      <motion.div
        key={active}
        id={panelId}
        role="tabpanel"
        aria-label={`Details for step ${active + 1}: ${steps[active].title}`}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="mt-8 rounded-2xl border border-slate-100 bg-white p-6 shadow-soft sm:mt-10 sm:p-8"
      >
        <p className={`text-xs font-bold uppercase tracking-wider ${c.text}`}>
          Step {active + 1} of {steps.length}
        </p>
        <h4 className="mt-3 font-display text-xl font-semibold text-ink">
          {steps[active].title}
        </h4>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-650">
          {steps[active].detail}
        </p>

        {/* Key-action bullet list — renders when keyActions data is present */}
        {steps[active].keyActions && steps[active].keyActions!.length > 0 && (
          <ul className="mt-5 space-y-2" aria-label="Key deliverables">
            {steps[active].keyActions!.map((action) => (
              <li
                key={action}
                className="flex items-start gap-2.5 text-sm text-slate-650"
              >
                <span
                  className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${c.bullet}`}
                  aria-hidden="true"
                />
                {action}
              </li>
            ))}
          </ul>
        )}

        {/* Navigation — uses the shared Button component for design-system
            consistency. Previous = secondary, Next = primary (site CTA colour).
            disabled:pointer-events-none prevents hover lift when inactive.  */}
        <div className="mt-6 flex gap-3">
          <Button
            variant="secondary"
            onClick={() => setActive((a) => Math.max(0, a - 1))}
            disabled={active === 0}
            className="!py-2.5 disabled:pointer-events-none disabled:opacity-40"
          >
            Previous
          </Button>
          <Button
            variant="primary"
            onClick={() => setActive((a) => Math.min(steps.length - 1, a + 1))}
            disabled={active === steps.length - 1}
            aria-label={
              active < steps.length - 1
                ? `Next: ${steps[active + 1].title}`
                : "Final step reached"
            }
            className="!py-2.5 disabled:pointer-events-none disabled:opacity-40"
          >
            Next Step
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
