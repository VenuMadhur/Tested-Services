import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, PhoneCall } from "lucide-react";
import Button from "./ui/Button";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Global Reach", href: "#global-presence" },
  { label: "Why Us", href: "#why-us" },
  { label: "Process", href: "#clinical-workflow" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "glass shadow-soft" : "bg-transparent"
        }`}
      >
        <nav
          aria-label="Primary"
          className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10"
        >
          <a href="#hero" className="flex shrink-0 items-center gap-3" aria-label="Tested Services home">
            <img
              src="/logo.png"
              alt="Tested Services"
              className="h-8 w-auto sm:h-9"
              width={220}
              height={25}
            />
            <span
              className={`hidden border-l pl-3 text-[11px] font-medium leading-tight tracking-wide sm:block ${
                scrolled ? "border-slate-200 text-slate-500" : "border-white/25 text-slate-200"
              }`}
            >
              Clinical
              <br />
              Research Solutions
            </span>
          </a>

          <ul className="hidden items-center gap-8 lg:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`text-sm font-medium transition-colors hover:text-emerald-500 ${
                    scrolled ? "text-slate-650" : "text-slate-100"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="tel:+919700087691"
              className={`flex items-center gap-2 text-sm font-semibold ${
                scrolled ? "text-brand-800" : "text-white"
              }`}
            >
              <PhoneCall className="h-4 w-4 text-emerald-500" />
              +91 97000 87691
            </a>
            <Button as="a" href="#contact" className="!py-2.5">
              Request a Proposal
            </Button>
          </div>

          <button
            className={`rounded-lg p-2 lg:hidden ${scrolled ? "text-ink" : "text-white"}`}
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden glass lg:hidden"
            >
              <ul className="flex flex-col gap-1 px-5 pb-5 pt-2">
                {links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-650 hover:bg-brand-50 hover:text-brand-700"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
                <li className="pt-2">
                  <Button as="a" href="#contact" className="w-full" onClick={() => setOpen(false)}>
                    Request a Proposal
                  </Button>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
