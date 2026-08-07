import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, PhoneCall, Mail, User, Send, CheckCircle2, Lock } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-premiumCanvas-contact py-24 sm:py-32">
      <div className="pointer-events-none absolute -left-20 top-40 h-96 w-96 rounded-full bg-brand-500/10 blur-3xl" />
      <Container className="relative">
        <SectionHeading
          light
          eyebrow="Contact"
          title="Let's scope your next study"
          description="Tell us about your program and our project management team will respond with next steps and a transparent quotation."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.9fr,1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl bg-slate-900/50 p-8 text-white shadow-card ring-1 ring-white/10 sm:p-10"
          >
            <div className="absolute inset-0 opacity-10 mix-blend-overlay">
              <img src="/images/contact.jpg" alt="Tested Services Office" className="h-full w-full object-cover" />
            </div>
            
            <div className="relative">
            <h3 className="font-display text-xl font-semibold">Corporate Office</h3>
            <div className="mt-6 space-y-5 text-sm">
              <div className="flex gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-emerald-400" />
                <p className="leading-relaxed text-slate-300">
                  Tested Services, Door No. 03-143, Shanthi Nagar, Vanasthalipuram,
                  <br /> Hyderabad, Telangana – 500070, India
                </p>
              </div>
              <div className="flex gap-3">
                <User className="h-5 w-5 shrink-0 text-emerald-400" />
                <p className="text-slate-300">Karunakar Cholleti — CEO &amp; Founder</p>
              </div>
              <div className="flex gap-3">
                <PhoneCall className="h-5 w-5 shrink-0 text-emerald-400" />
                <a href="tel:+919700087691" className="text-slate-300 hover:text-white transition-colors">
                  +91 97000 87691
                </a>
              </div>
              <div className="flex gap-3">
                <Mail className="h-5 w-5 shrink-0 text-emerald-400" />
                <a href="mailto:ceo@testedservices.com" className="text-slate-300 hover:text-white transition-colors">
                  ceo@testedservices.com
                </a>
              </div>
            </div>

            <div className="mt-10 rounded-2xl border border-white/15 bg-white/5 p-5">
              <p className="text-xs uppercase tracking-wider text-emerald-400 font-semibold">Response Time</p>
              <p className="mt-1 text-sm text-white">
                Proposals are typically returned within 2 business days.
              </p>
            </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative rounded-3xl border border-slate-200 bg-white p-8 shadow-card sm:p-10"
          >
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center gap-3 py-16 text-center">
                <CheckCircle2 className="h-12 w-12 text-emerald-500" />
                <h3 className="font-display text-lg font-semibold text-ink">Request sent</h3>
                <p className="max-w-sm text-sm text-slate-650">
                  Thank you — our team will reach out shortly to discuss your study requirements and proposal.
                </p>
              </div>
            ) : (
              /* Removed noValidate to restore HTML5 native browser validation */
              <form onSubmit={handleSubmit} className="grid gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="text-xs font-semibold text-slate-650">
                      Full name <span className="ml-0.5 text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      aria-required="true"
                      className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-emerald-400 focus:ring-4 focus:ring-emerald-400/10"
                      placeholder="Jane Carter"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="text-xs font-semibold text-slate-650">
                      Company <span className="ml-0.5 text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      required
                      aria-required="true"
                      className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-emerald-400 focus:ring-4 focus:ring-emerald-400/10"
                      placeholder="Sponsor / Organization"
                    />
                  </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="text-xs font-semibold text-slate-650">
                      Work email <span className="ml-0.5 text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      aria-required="true"
                      className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-emerald-400 focus:ring-4 focus:ring-emerald-400/10"
                      placeholder="jane@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="text-xs font-semibold text-slate-650">
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-emerald-400 focus:ring-4 focus:ring-emerald-400/10"
                      placeholder="+1 555 000 0000"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="service" className="text-xs font-semibold text-slate-650">
                    Service of interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-emerald-400 focus:ring-4 focus:ring-emerald-400/10"
                  >
                    <option>Clinical Trials &amp; Bioequivalence</option>
                    <option>GxP Audits</option>
                    <option>Project Management</option>
                    <option>Medical Writing</option>
                    <option>Regulatory Affairs</option>
                    <option>Biostatistics</option>
                    <option>Pharmacovigilance</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="text-xs font-semibold text-slate-650">
                    Tell us about your study <span className="ml-0.5 text-red-500" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    aria-required="true"
                    className="mt-1.5 w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-emerald-400 focus:ring-4 focus:ring-emerald-400/10"
                    placeholder="Phase, indication, timelines, target geographies…"
                  />
                </div>
                
                <div className="mt-2 space-y-4">
                  <Button type="submit" className="w-full sm:w-auto">
                    Request Proposal
                    <Send className="h-4 w-4" />
                  </Button>
                  
                  {/* Security reassurance statement for B2B conversions */}
                  <div className="flex items-center justify-center gap-1.5 sm:justify-start">
                    <Lock className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
                    <p className="text-xs text-slate-500">
                      Your information is securely transmitted and kept strictly confidential.
                    </p>
                  </div>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
