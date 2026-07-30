import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, PhoneCall, Mail, User, Send, CheckCircle2 } from "lucide-react";
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
    <section id="contact" className="relative bg-white py-24 sm:py-32">
      <Container>
        <SectionHeading
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
            className="rounded-3xl bg-gradient-to-br from-brand-900 to-brand-700 p-8 text-white shadow-card sm:p-10"
          >
            <h3 className="font-display text-xl font-semibold">Corporate Office</h3>
            <div className="mt-6 space-y-5 text-sm">
              <div className="flex gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-emerald-300" />
                <p className="leading-relaxed text-slate-200">
                  Tested Services, Door No. 03-143, Shanthi Nagar, Vanasthalipuram,
                  <br /> Hyderabad, Telangana – 500070, India
                </p>
              </div>
              <div className="flex gap-3">
                <User className="h-5 w-5 shrink-0 text-emerald-300" />
                <p className="text-slate-200">Karunakar Cholleti — CEO &amp; Founder</p>
              </div>
              <div className="flex gap-3">
                <PhoneCall className="h-5 w-5 shrink-0 text-emerald-300" />
                <a href="tel:+919700087691" className="text-slate-200 hover:text-white">
                  +91 97000 87691
                </a>
              </div>
              <div className="flex gap-3">
                <Mail className="h-5 w-5 shrink-0 text-emerald-300" />
                <a href="mailto:ceo@testedservices.com" className="text-slate-200 hover:text-white">
                  ceo@testedservices.com
                </a>
              </div>
            </div>

            <div className="mt-10 rounded-2xl border border-white/15 bg-white/5 p-5">
              <p className="text-xs uppercase tracking-wider text-emerald-300">Response Time</p>
              <p className="mt-1 text-sm text-slate-200">
                Proposals are typically returned within 2 business days.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-slate-100 bg-surface p-8 shadow-soft sm:p-10"
          >
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center gap-3 py-16 text-center">
                <CheckCircle2 className="h-12 w-12 text-emerald-500" />
                <h3 className="font-display text-lg font-semibold text-ink">Message sent</h3>
                <p className="max-w-sm text-sm text-slate-650">
                  Thank you — our team will reach out shortly to discuss your study requirements.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-5" noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="text-xs font-semibold text-slate-650">
                      Full name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-emerald-400"
                      placeholder="Jane Carter"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="text-xs font-semibold text-slate-650">
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      required
                      className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-emerald-400"
                      placeholder="Sponsor / Organization"
                    />
                  </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="text-xs font-semibold text-slate-650">
                      Work email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-emerald-400"
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
                      className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-emerald-400"
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
                    className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-emerald-400"
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
                    Tell us about your study
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="mt-1.5 w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-emerald-400"
                    placeholder="Phase, indication, timelines, target geographies…"
                  />
                </div>
                <Button type="submit" className="w-full sm:w-auto">
                  Send Message
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
