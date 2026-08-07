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
      <div className="font-display text-3xl font-bold text-ink sm:text-4xl">
        {animated}
        {suffix}
      </div>
      <div className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-500">{label}</div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-premiumCanvas-hero pt-24">
      {/* Background image */}
      <div className="absolute inset-0 -z-20 hidden md:block">
        <img
          src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=2000&q=80"
          alt=""
          className="h-full w-full object-cover object-center opacity-5"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/80 to-white" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-50/90 via-transparent to-emerald-50/40" />
      </div>

      {/* Ambient grid + glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-faint bg-[size:44px_44px] opacity-[0.03]" />
      <div className="pointer-events-none absolute -left-32 top-24 -z-10 hidden h-96 w-96 rounded-full bg-brand-600/10 blur-3xl md:block" />
      <div className="pointer-events-none absolute -right-24 bottom-0 -z-10 hidden h-[28rem] w-[28rem] animate-float rounded-full bg-emerald-500/10 blur-3xl md:block" />

      <Container className="relative py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center lg:gap-14">
          {/* Image — always visible; appears first on mobile, second (right column) on desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative order-1 lg:order-2 mx-auto w-full max-w-[340px] sm:max-w-md lg:max-w-[480px]"
          >
            {/* Elegant outer rings for depth */}
            <div className="pointer-events-none absolute inset-0 scale-[1.04] rounded-full border border-emerald-900/10 sm:scale-[1.03]" />
            <div className="pointer-events-none absolute inset-0 scale-[1.08] rounded-full border border-emerald-900/5 sm:scale-[1.06]" />
            <div className="pointer-events-none absolute -right-2 top-10 h-3 w-3 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.4)]" />

            {/* Circular image wrapper */}
            <div className="relative aspect-square w-full overflow-hidden rounded-full shadow-card-hover bg-white">
              <img
                src="/images/clinical_research_hero.jpg"
                alt="Clinical research scientists examining samples in a modern premium laboratory"
                className="h-full w-full object-cover object-center"
                loading="eager"
                fetchPriority="high"
              />
              {/* Inner ring for clean edge */}
              <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-black/5" />
            </div>

            {/* Live status badge (bottom-left) */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -bottom-2 -left-2 z-10 w-[210px] rounded-2xl border border-slate-200 bg-white p-3.5 shadow-card sm:-bottom-4 sm:-left-8 sm:w-56"
            >
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600" />
                </span>
                Site Monitoring Live
              </div>
              <p className="mt-1.5 text-sm font-medium text-ink">Protocol adherence at 99.4%</p>
            </motion.div>

            {/* Trust badge (top-right) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="absolute -right-2 top-2 z-10 hidden w-44 rounded-2xl border border-slate-200 bg-white p-4 shadow-card sm:-right-8 sm:top-6 sm:block"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">Since 2020</p>
              <p className="mt-1 text-sm font-medium text-ink">Founded to raise the bar for CRO partnership</p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <div className="order-2 lg:order-1">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-700"
            >
              <ShieldCheck className="h-3.5 w-3.5 shrink-0" />
              GxP-Compliant Clinical Research Partner
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-5 font-display text-3xl font-semibold leading-[1.12] tracking-tight text-ink sm:mt-6 sm:text-4xl sm:leading-[1.1] lg:text-5xl xl:text-6xl"
            >
              Advancing clinical research
              <span className="bg-gradient-to-r from-emerald-600 to-brand-600 bg-clip-text text-transparent">
                {" "}
                with scientific excellence.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:mt-6 sm:text-lg"
            >
              Tested Services is a contract research organization supporting sponsors through
              every stage of the clinical development lifecycle — clinical trials and
              bioequivalence studies, regulatory affairs, medical writing and dedicated project
              management, all delivered to the quality standards global healthcare partners expect.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:gap-4"
            >
              <Button as="a" href="#contact" className="w-full sm:w-auto">
                Start a Study
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
              <Button as="a" href="#services" variant="ghost" className="w-full sm:w-auto">
                <PlayCircle className="h-4 w-4" />
                Explore Capabilities
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-10 grid grid-cols-2 gap-x-6 gap-y-7 border-t border-slate-200 pt-7 sm:mt-14 sm:grid-cols-4 sm:gap-8 sm:pt-8"
            >
              {stats.map((s) => (
                <Stat key={s.label} {...s} />
              ))}
            </motion.div>
          </div>
        </div>
      </Container>

      {/* curved transition into the section below */}
      <svg
        className="absolute inset-x-0 bottom-0 h-12 w-full text-white md:text-neutralCanvas-about sm:h-16"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0 80 C 320 10, 1120 10, 1440 80 L1440 80 L0 80 Z" fill="currentColor" />
      </svg>
    </section>
  );
}
