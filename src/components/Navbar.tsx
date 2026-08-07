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

const handleNavClick = (
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string,
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>
) => {
  e.preventDefault();
  
  if (setOpen) {
    setOpen(false);
  }

  // Allow time for mobile menu to close and body overflow to restore
  setTimeout(() => {
    const targetId = href.replace("#", "");
    if (targetId === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const element = document.getElementById(targetId);
    if (element) {
      // Navbar is sticky and approx 80px high
      const offset = 80; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }, setOpen ? 50 : 0);
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#hero");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["hero", ...links.map((l) => l.href.slice(1))];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHref(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

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
          <a href="#hero" className="flex shrink-0 flex-col items-start" aria-label="Tested Services home" onClick={(e) => handleNavClick(e, "#hero")}>
            <img
              src="/logo.png"
              alt="Tested Services"
              className="h-8 w-auto sm:h-9"
              width={220}
              height={25}
            />
            <span
              className={`mt-1 text-[10px] font-semibold uppercase tracking-[0.14em] transition-colors sm:text-[11px] ${
                scrolled ? "text-slate-500" : "text-slate-200"
              }`}
            >
              Clinical Research Solutions
            </span>
          </a>

          <ul className="hidden items-center gap-7 lg:flex">
            {links.map((l) => {
              const isActive = activeHref === l.href;
              return (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={(e) => handleNavClick(e, l.href)}
                    aria-current={isActive ? "page" : undefined}
                    className={`relative py-1 text-sm font-medium transition-colors hover:text-emerald-500 ${
                      isActive
                        ? scrolled
                          ? "text-emerald-700"
                          : "text-emerald-300"
                        : scrolled
                          ? "text-slate-650"
                          : "text-slate-100"
                    }`}
                  >
                    {l.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-underline"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-emerald-500"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
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
            <Button as="a" href="#contact" className="!py-2.5" onClick={(e) => handleNavClick(e as any, "#contact")}>
              Request a Proposal
            </Button>
          </div>

          <button
            className={`flex h-11 w-11 items-center justify-center rounded-lg lg:hidden ${scrolled ? "text-ink" : "text-white"}`}
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
                <li className="mb-1 border-b border-slate-100 pb-3">
                  <a
                    href="tel:+919700087691"
                    className="flex min-h-[44px] items-center gap-2 rounded-lg px-3 text-sm font-semibold text-brand-800"
                  >
                    <PhoneCall className="h-4 w-4 text-emerald-600" />
                    +91 97000 87691
                  </a>
                </li>
                {links.map((l) => {
                  const isActive = activeHref === l.href;
                  return (
                    <li key={l.href}>
                      <a
                        href={l.href}
                        onClick={(e) => handleNavClick(e, l.href, setOpen)}
                        aria-current={isActive ? "page" : undefined}
                        className={`flex min-h-[44px] items-center rounded-lg px-3 text-base font-medium transition-colors ${
                          isActive
                            ? "bg-emerald-50 text-emerald-700"
                            : "text-slate-650 hover:bg-brand-50 hover:text-brand-700"
                        }`}
                      >
                        {l.label}
                      </a>
                    </li>
                  );
                })}
                <li className="pt-2">
                  <Button as="a" href="#contact" className="w-full" onClick={(e) => handleNavClick(e as any, "#contact", setOpen)}>
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
