import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}
    >
      <span
        className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1 text-xs font-semibold uppercase tracking-wider ${
          light
            ? "border-orange-400/30 bg-orange-400/10 text-orange-300"
            : "border-orange-600/20 bg-orange-50 text-orange-700"
        }`}
      >
        <span className={`h-1.5 w-1.5 rounded-full ${light ? "bg-orange-400" : "bg-orange-500"}`} />
        {eyebrow}
      </span>
      <h2
        className={`mt-4 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed ${light ? "text-slate-300" : "text-slate-650"}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
