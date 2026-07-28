import { Linkedin, Twitter, MapPin, PhoneCall, Mail } from "lucide-react";
import Container from "./ui/Container";

const columns = [
  {
    title: "Services",
    links: [
      "Clinical Trials & Bioequivalence",
      "GxP Audits",
      "Project Management",
      "Medical Writing",
      "Regulatory Affairs",
      "Biostatistics",
      "Pharmacovigilance",
    ],
  },
  {
    title: "Company",
    links: ["About Us", "Why Choose Us", "Industries We Serve", "Careers", "Contact"],
  },
  {
    title: "Compliance",
    links: ["GMP", "GLP", "GCP", "GSDP", "GPvP", "GCLP"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink pt-20 text-slate-400">
      <Container>
        <div className="grid gap-12 pb-16 lg:grid-cols-[1.3fr,1fr,1fr,1fr]">
          <div>
            <a href="#hero" className="inline-flex items-center rounded-xl bg-white/95 px-4 py-3 shadow-card">
              <img src="/logo.png" alt="Tested Services" className="h-8 w-auto" width={220} height={25} />
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed">
              A GxP-compliant contract research partner helping pharmaceutical, biotech and
              healthcare sponsors run clinical trials and regulatory programs with confidence.
            </p>
            <div className="mt-6 flex gap-3">
              {[Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 transition hover:border-emerald-400/50 hover:text-emerald-400"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-display text-sm font-semibold text-white">{col.title}</h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#services" className="text-sm transition hover:text-emerald-400">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col gap-4 text-sm sm:flex-row sm:flex-wrap sm:items-center sm:gap-8">
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-emerald-400" />
              Hyderabad, Telangana, India
            </span>
            <a href="tel:+919700087691" className="flex items-center gap-2 hover:text-emerald-400">
              <PhoneCall className="h-4 w-4 text-emerald-400" />
              +91 97000 87691
            </a>
            <a href="mailto:info@testedservices.com" className="flex items-center gap-2 hover:text-emerald-400">
              <Mail className="h-4 w-4 text-emerald-400" />
              info@testedservices.com
            </a>
          </div>
          <div className="mt-6 flex flex-col justify-between gap-3 text-xs text-slate-500 sm:flex-row">
            <p>© {new Date().getFullYear()} Tested Services. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-emerald-400">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-emerald-400">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
