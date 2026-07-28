import { useState } from "react";
import { motion } from "framer-motion";

export type WorkflowStep = { title: string; detail: string };

export default function WorkflowStepper({
  steps,
  accent = "emerald",
}: {
  steps: WorkflowStep[];
  accent?: "emerald" | "brand";
}) {
  const [active, setActive] = useState(0);

  const accentClasses: Record<string, { dot: string; ring: string; text: string; bar: string }> = {
    emerald: {
      dot: "bg-emerald-600",
      ring: "ring-emerald-300",
      text: "text-emerald-700",
      bar: "from-emerald-500 to-emerald-300",
    },
    brand: {
      dot: "bg-brand-700",
      ring: "ring-brand-300",
      text: "text-brand-700",
      bar: "from-brand-600 to-brand-300",
    },
  };
  const c = accentClasses[accent];

  return (
    <div>
      {/* Rail */}
      <div className="relative">
        <div className="absolute left-0 right-0 top-5 h-[3px] rounded-full bg-slate-100" aria-hidden />
        <motion.div
          className={`absolute left-0 top-5 h-[3px] rounded-full bg-gradient-to-r ${c.bar}`}
          initial={false}
          animate={{ width: `${(active / (steps.length - 1)) * 100}%` }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          aria-hidden
        />
        <ol className="relative grid grid-cols-3 gap-y-8 sm:grid-cols-6" role="tablist">
          {steps.map((step, i) => {
            const isActive = i === active;
            const isDone = i < active;
            return (
              <li key={step.title} className="flex flex-col items-center text-center">
                <button
                  role="tab"
                  aria-selected={isActive}
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

      {/* Detail panel */}
      <motion.div
        key={active}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="mt-10 rounded-2xl border border-slate-100 bg-white p-6 shadow-soft sm:p-8"
      >
        <p className={`text-xs font-bold uppercase tracking-wider ${c.text}`}>
          Step {active + 1} of {steps.length}
        </p>
        <h4 className="mt-2 font-display text-xl font-semibold text-ink">{steps[active].title}</h4>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-650">{steps[active].detail}</p>
        <div className="mt-6 flex gap-3">
          <button
            onClick={() => setActive((a) => Math.max(0, a - 1))}
            disabled={active === 0}
            className="rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-650 transition hover:border-slate-300 disabled:opacity-40"
          >
            Previous
          </button>
          <button
            onClick={() => setActive((a) => Math.min(steps.length - 1, a + 1))}
            disabled={active === steps.length - 1}
            className={`rounded-full px-4 py-2 text-xs font-semibold text-white transition disabled:opacity-40 ${c.dot}`}
          >
            Next Step
          </button>
        </div>
      </motion.div>
    </div>
  );
}
