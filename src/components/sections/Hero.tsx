import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, ShieldCheck } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { stats } from "../../lib/data";
import { useCountUp } from "../../hooks/useCountUp";

function Stat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { value: animated, ref } = useCountUp(value);
  return (
    <div ref={ref} className="text-left">
      <div className="font-display text-3xl font-bold text-white sm:text-4xl">
        {animated}
        {suffix}
      </div>
      <div className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-300">{label}</div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-ink pt-24">
      {/* Background image */}
      <div className="absolute inset-0 -z-20">
        <img
          src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=2000&q=80"
          alt=""
          className="h-full w-full object-cover object-center opacity-45"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/80 to-ink" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950/90 via-transparent to-emerald-950/40" />
      </div>

      {/* Ambient grid + glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-faint bg-[size:44px_44px] opacity-[0.06]" />
      <div className="pointer-events-none absolute -left-32 top-24 -z-10 h-96 w-96 rounded-full bg-brand-600/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 -z-10 h-[28rem] w-[28rem] animate-float rounded-full bg-emerald-500/20 blur-3xl" />

      <Container className="relative py-20">
        <div className="grid gap-14 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-300"
            >
              <ShieldCheck className="h-3.5 w-3.5" />
              GxP-Compliant Clinical Research Partner
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Precision clinical research,
              <span className="bg-gradient-to-r from-emerald-300 to-brand-300 bg-clip-text text-transparent">
                {" "}
                engineered for certainty.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300"
            >
              Tested Services is the contract research partner pharmaceutical, biotech and
              healthcare sponsors trust to run clinical trials, bioequivalence studies and
              regulatory programs with uncompromising rigor — from first protocol to final
              statistical report.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-9 flex flex-col gap-4 sm:flex-row"
            >
              <Button as="a" href="#contact">
                Start a Study
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
              <Button as="a" href="#services" variant="ghost">
                <PlayCircle className="h-4 w-4" />
                Explore Capabilities
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-14 grid grid-cols-2 gap-8 border-t border-white/10 pt-8 sm:grid-cols-4"
            >
              {stats.map((s) => (
                <Stat key={s.label} {...s} />
              ))}
            </motion.div>
          </div>

          {/* Signature visual: floating lab card stack */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-[2rem] border border-white/10 shadow-card-hover">
              <img
                src="https://images.unsplash.com/photo-1618498082410-b4aa22193b38?auto=format&fit=crop&w=1000&q=80"
                alt="Clinical research scientist reviewing a sample in a laboratory"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="glass absolute -left-6 bottom-10 w-52 rounded-2xl border border-white/40 p-4 shadow-card"
            >
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600" />
                </span>
                Site Monitoring Live
              </div>
              <p className="mt-2 text-sm font-medium text-ink">Protocol adherence at 99.4%</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.75 }}
              className="glass absolute -right-4 top-10 w-44 rounded-2xl border border-white/40 p-4 shadow-card"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">Since 2020</p>
              <p className="mt-1 text-sm font-medium text-ink">Founded to raise the bar for CRO partnership</p>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
