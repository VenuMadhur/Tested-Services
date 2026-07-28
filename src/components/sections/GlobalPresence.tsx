import { useEffect, useRef, useState } from "react";
import { motion, animate, useMotionValue, useTransform, useInView } from "framer-motion";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

/* ---------- Coordinate system ----------
   viewBox is 1000 x 500, mapped from an equirectangular projection
   (lon -180..180 -> x 0..1000, lat 90..-90 -> y 0..500), so marker
   positions line up plausibly with the background continents. */

type Point = { x: number; y: number };

const NODES: Record<string, Point & { label: string }> = {
  usa: { x: 228, y: 150, label: "United States" },
  europe: { x: 528, y: 112, label: "Europe" },
  india: { x: 714, y: 176, label: "India" },
  australia: { x: 872, y: 322, label: "Australia" },
};

// Visit order requested: India -> Europe -> United States -> Australia -> loop
const ROUTE: Array<keyof typeof NODES> = ["india", "europe", "usa", "australia"];

function arc(p0: Point, p2: Point, bow = 0.22): { d: string; ctrl: Point } {
  const mx = (p0.x + p2.x) / 2;
  const my = (p0.y + p2.y) / 2;
  const dx = p2.x - p0.x;
  const dy = p2.y - p0.y;
  const dist = Math.hypot(dx, dy) || 1;
  let nx = -dy / dist;
  let ny = dx / dist;
  // keep arcs bowing upward (toward smaller y) for a consistent "flight path" look
  if (ny > 0) {
    nx = -nx;
    ny = -ny;
  }
  const ctrl = { x: mx + nx * dist * bow, y: my + ny * dist * bow };
  return { d: `M ${p0.x} ${p0.y} Q ${ctrl.x} ${ctrl.y} ${p2.x} ${p2.y}`, ctrl };
}

function quadPoint(t: number, p0: Point, c: Point, p2: Point): Point {
  const x = (1 - t) * (1 - t) * p0.x + 2 * (1 - t) * t * c.x + t * t * p2.x;
  const y = (1 - t) * (1 - t) * p0.y + 2 * (1 - t) * t * c.y + t * t * p2.y;
  return { x, y };
}

const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));

function animateValue(mv: ReturnType<typeof useMotionValue<number>>, to: number, duration: number) {
  return new Promise<void>((resolve) => {
    animate(mv, to, { duration, ease: "easeInOut", onComplete: () => resolve() });
  });
}

/** A single glowing destination marker. */
function Marker({ point, active }: { point: Point; active: boolean }) {
  return (
    <g>
      {active && (
        <motion.circle
          cx={point.x}
          cy={point.y}
          r={9}
          fill="none"
          stroke="#3DA84B"
          strokeWidth={2}
          initial={{ opacity: 0.7, scale: 0.6 }}
          animate={{ opacity: [0.7, 0, 0.7], scale: [0.6, 2.6, 0.6] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
          style={{ transformOrigin: `${point.x}px ${point.y}px` }}
        />
      )}
      <circle
        cx={point.x}
        cy={point.y}
        r={active ? 6 : 4}
        fill={active ? "#3DA84B" : "#9FB3C8"}
        stroke="#fff"
        strokeWidth={1.5}
        style={{ transition: "fill 0.4s ease, r 0.4s ease" }}
      />
      {active && <circle cx={point.x} cy={point.y} r={3.5} fill="#EFFCF1" />}
    </g>
  );
}

/** One animated connection: progressive line draw + traveling light. */
function Connection({
  from,
  to,
  progress,
  colorFrom = "#0B7FC4",
  colorTo = "#3DA84B",
  id,
}: {
  from: Point;
  to: Point;
  progress: ReturnType<typeof useMotionValue<number>>;
  colorFrom?: string;
  colorTo?: string;
  id: string;
}) {
  const { d, ctrl } = arc(from, to);
  const cx = useTransform(progress, (t) => quadPoint(t, from, ctrl, to).x);
  const cy = useTransform(progress, (t) => quadPoint(t, from, ctrl, to).y);
  const dotOpacity = useTransform(progress, [0, 0.03, 0.94, 1], [0, 1, 1, 0]);

  return (
    <g>
      <defs>
        <linearGradient id={`grad-${id}`} x1={from.x} y1={from.y} x2={to.x} y2={to.y} gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={colorFrom} />
          <stop offset="100%" stopColor={colorTo} />
        </linearGradient>
      </defs>
      {/* faint full track, always visible, very subtle */}
      <path d={d} fill="none" stroke="#B9C8D6" strokeWidth={1} strokeDasharray="3 5" opacity={0.35} />
      {/* progressively drawn glowing line */}
      <motion.path
        d={d}
        fill="none"
        stroke={`url(#grad-${id})`}
        strokeWidth={1.75}
        strokeLinecap="round"
        style={{ pathLength: progress }}
        opacity={0.9}
      />
      {/* traveling light */}
      <motion.circle r={4.5} fill="#EFFCF1" style={{ cx, cy, opacity: dotOpacity }} />
      <motion.circle r={9} fill="#3DA84B" style={{ cx, cy, opacity: dotOpacity }} opacity={0.25} filter="blur(3px)" />
    </g>
  );
}

export default function GlobalPresence() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const inView = useInView(wrapRef, { once: true, margin: "-100px" });
  const [activeStep, setActiveStep] = useState(0); // 0 = none active, 1..4 = nodes lit in ROUTE order

  const p1 = useMotionValue(0); // india -> europe
  const p2 = useMotionValue(0); // europe -> usa
  const p3 = useMotionValue(0); // usa -> australia

  useEffect(() => {
    if (!inView) return;
    let cancelled = false;

    async function loop() {
      while (!cancelled) {
        setActiveStep(0);
        p1.set(0);
        p2.set(0);
        p3.set(0);
        await wait(500);
        if (cancelled) break;

        setActiveStep(1); // India glows
        await wait(900);
        if (cancelled) break;

        await animateValue(p1, 1, 1.3); // India -> Europe
        if (cancelled) break;
        setActiveStep(2); // Europe glows
        await wait(900);
        if (cancelled) break;

        await animateValue(p2, 1, 1.3); // Europe -> USA
        if (cancelled) break;
        setActiveStep(3); // USA glows
        await wait(900);
        if (cancelled) break;

        await animateValue(p3, 1, 1.3); // USA -> Australia
        if (cancelled) break;
        setActiveStep(4); // Australia glows
        await wait(1800);
        if (cancelled) break;
      }
    }

    loop();
    return () => {
      cancelled = true;
    };
  }, [inView, p1, p2, p3]);

  const litIndex = (key: keyof typeof NODES) => ROUTE.indexOf(key) + 1;

  return (
    <section id="global-presence" className="relative overflow-hidden bg-surface py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Global Clinical Research Network"
          title="Built to support sponsors across borders"
          description="Our vision is to grow into a global leader in clinical research. The network below illustrates the regions our clinical operations and sponsor relationships are extending toward as that vision takes shape."
        />

        <div ref={wrapRef} className="relative mx-auto mt-16 aspect-[2/1] w-full max-w-4xl">
          <svg
            viewBox="0 0 1000 500"
            className="absolute inset-0 h-full w-full"
            role="img"
            aria-label="World map illustrating an animated connection between India, Europe, the United States and Australia"
          >
            {/* ---- subtle vector world map (stylised, decorative) ---- */}
            <g fill="#0B7FC4" opacity={0.07}>
              {/* North America */}
              <path d="M120 90 C170 70 230 75 265 100 C290 118 300 150 280 180 C300 205 290 235 260 245 C230 255 190 240 175 215 C150 220 120 205 110 175 C95 150 100 115 120 90 Z" />
              {/* South America */}
              <path d="M235 260 C260 255 285 270 290 300 C300 340 285 390 260 420 C245 440 220 435 215 405 C205 365 205 320 210 290 C212 275 222 263 235 260 Z" />
              {/* Europe */}
              <path d="M470 70 C505 60 545 65 570 85 C585 98 580 118 560 128 C565 145 550 158 530 155 C510 165 488 155 480 135 C465 128 460 105 465 88 C466 80 468 74 470 70 Z" />
              {/* Africa */}
              <path d="M470 165 C510 155 555 165 575 195 C595 225 590 265 575 300 C565 330 545 365 520 375 C505 380 495 365 495 345 C475 335 460 305 462 270 C450 240 455 200 470 165 Z" />
              {/* Asia */}
              <path d="M590 60 C650 45 730 50 790 75 C840 95 880 120 890 150 C900 175 875 190 850 185 C845 205 815 215 790 205 C760 220 725 210 705 190 C670 195 635 180 615 155 C595 135 585 95 590 60 Z" />
              {/* Australia */}
              <path d="M810 300 C845 288 895 292 920 315 C935 330 930 355 910 365 C895 380 860 378 838 365 C815 360 800 340 800 320 C800 312 804 305 810 300 Z" />
            </g>

            {/* faint lat/long grid for a "network" feel */}
            <g stroke="#0B7FC4" opacity={0.06}>
              {[80, 160, 240, 320, 400].map((y) => (
                <line key={y} x1={0} y1={y} x2={1000} y2={y} strokeWidth={1} />
              ))}
              {[125, 250, 375, 500, 625, 750, 875].map((x) => (
                <line key={x} x1={x} y1={0} x2={x} y2={500} strokeWidth={1} />
              ))}
            </g>

            {/* ---- animated connections ---- */}
            <Connection id="ie" from={NODES.india} to={NODES.europe} progress={p1} colorFrom="#3DA84B" colorTo="#0B7FC4" />
            <Connection id="eu" from={NODES.europe} to={NODES.usa} progress={p2} colorFrom="#0B7FC4" colorTo="#3DA84B" />
            <Connection id="ua" from={NODES.usa} to={NODES.australia} progress={p3} colorFrom="#3DA84B" colorTo="#0B7FC4" />

            {/* ---- markers (drawn after connections so they sit on top) ---- */}
            {Object.entries(NODES).map(([key, node]) => (
              <Marker key={key} point={node} active={activeStep >= litIndex(key as keyof typeof NODES)} />
            ))}
          </svg>

          {/* HTML label overlay keeps text a constant, readable size at every viewport */}
          {Object.entries(NODES).map(([key, node]) => {
            const active = activeStep >= litIndex(key as keyof typeof NODES);
            return (
              <div
                key={key}
                className="pointer-events-none absolute -translate-x-1/2 translate-y-2"
                style={{ left: `${node.x / 10}%`, top: `${node.y / 5}%` }}
              >
                <span
                  className={`whitespace-nowrap rounded-full px-2 py-0.5 text-[10px] font-semibold shadow-sm transition-colors duration-500 sm:text-xs ${
                    active ? "bg-emerald-600 text-white" : "bg-white text-slate-500"
                  }`}
                >
                  {node.label}
                </span>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
