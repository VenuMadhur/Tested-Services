import { useEffect, useRef, useState } from "react";
import { motion, animate, useMotionValue, useTransform, useInView } from "framer-motion";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { WORLD_MAP_PATH, WORLD_MAP_WIDTH, WORLD_MAP_HEIGHT } from "../../lib/worldMapPath";

/* ---------- Coordinate system ----------
   Marker positions below were computed directly from the real country
   geometry in WORLD_MAP_PATH (bounding-box centers of each country's main
   landmass), so they land precisely on India, Europe, the USA and
   Australia on this specific map rather than an assumed projection. */

type Point = { x: number; y: number };

const NODES: Record<string, Point & { label: string }> = {
  usa: { x: 206, y: 347, label: "United States" },
  europe: { x: 507, y: 305, label: "Europe" },
  india: { x: 707, y: 399, label: "India" },
  australia: { x: 849, y: 537, label: "Australia" },
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
    <section id="global-presence" className="relative overflow-hidden bg-premiumCanvas-global py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(#0B3B6B 1.5px, transparent 1.5px)", backgroundSize: "24px 24px" }} />
      <Container className="relative">
        <SectionHeading
          eyebrow="Global Clinical Research Network"
          title="Built to support sponsors across borders"
          description="Our vision is to grow into a global leader in clinical research. The network below illustrates the regions our clinical operations and sponsor relationships are extending toward as that vision takes shape."
        />

        <div
          ref={wrapRef}
          className="relative mx-auto mt-16 w-full max-w-4xl overflow-hidden rounded-[2rem] border border-brand-100 bg-white p-3 shadow-card-hover sm:p-5"
        >
          <div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl">
            <svg
              viewBox={`0 0 ${WORLD_MAP_WIDTH} ${WORLD_MAP_HEIGHT}`}
              className="absolute inset-0 h-full w-full"
              role="img"
              aria-label="World map illustrating an animated connection between India, Europe, the United States and Australia"
            >
              <defs>
                <radialGradient id="ocean-gradient" cx="35%" cy="30%" r="85%">
                  <stop offset="0%" stopColor="#F0F9FE" />
                  <stop offset="55%" stopColor="#DFF1FB" />
                  <stop offset="100%" stopColor="#C7E4F7" />
                </radialGradient>
              </defs>

              {/* ---- ocean backdrop ---- */}
              <rect x={0} y={0} width={WORLD_MAP_WIDTH} height={WORLD_MAP_HEIGHT} fill="url(#ocean-gradient)" />

              {/* ---- real-geography vector world map ---- */}
              <path d={WORLD_MAP_PATH} fill="#0B7FC4" fillOpacity={0.32} stroke="#0A5478" strokeOpacity={0.3} strokeWidth={0.6} />

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
                  style={{ left: `${(node.x / WORLD_MAP_WIDTH) * 100}%`, top: `${(node.y / WORLD_MAP_HEIGHT) * 100}%` }}
                >
                  <span
                    className={`whitespace-nowrap rounded-full px-2 py-0.5 text-[10px] font-semibold shadow-sm transition-colors duration-500 sm:text-xs ${
                      active ? "bg-orange-500 text-white" : "bg-white text-slate-500"
                    }`}
                  >
                    {node.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
