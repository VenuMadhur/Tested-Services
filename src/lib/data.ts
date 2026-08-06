import {
  FlaskConical,
  ClipboardCheck,
  Users,
  FileText,
  Gavel,
  LineChart,
  ShieldAlert,
  Building2,
  Pill,
  Leaf,
  Sparkles,
  Syringe,
  FileSignature,
  Search,
  ScanEye,
  MonitorCheck,
  Microscope,
  Award,
  ShieldCheck,
  Clock,
  Globe2,
  HeartHandshake,
  BadgeCheck,
  Droplets,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  summary: string;
  points: string[];
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    slug: "clinical-trials",
    title: "Clinical Trials & Bioequivalence",
    summary:
      "End-to-end management of Phase I–IV clinical trials and BA/BE studies, from site selection to close-out.",
    points: ["Phase I – IV studies", "Site monitoring & qualification", "BA/BE study design"],
    icon: FlaskConical,
  },
  {
    slug: "gxp-audits",
    title: "GxP Audits",
    summary:
      "Independent audits across GMP, GLP, GCP, GSDP, GPvP and GCLP domains to keep your programs inspection-ready.",
    points: ["CRO & site qualification", "Regulatory mock audits", "Pharmacovigilance audits"],
    icon: ClipboardCheck,
  },
  {
    slug: "project-management",
    title: "Project Management",
    summary:
      "A single accountable team steering your study from feasibility to final report, on budget and on schedule.",
    points: ["End-to-end study oversight", "Transparent sponsor reporting", "Risk-based planning"],
    icon: Users,
  },
  {
    slug: "medical-writing",
    title: "Medical Writing",
    summary:
      "Regulatory-grade documentation that reads clearly to reviewers and stands up to global scrutiny.",
    points: ["Protocol development", "BA/BE study reports", "Manuscripts & articles"],
    icon: FileText,
  },
  {
    slug: "regulatory-affairs",
    title: "Regulatory Affairs",
    summary:
      "Dossier strategy and submission support aligned to USFDA, UK MHRA, ANVISA, EMA and beyond.",
    points: ["eCTD dossier compilation", "BE-NOC applications", "Modules 2.4, 2.5, 4 & 5"],
    icon: Gavel,
  },
  {
    slug: "biostatistics",
    title: "Biostatistics",
    summary:
      "Statistical design and analysis built on CDISC standards, from randomization to validated SAS output.",
    points: ["Pharmacokinetic analysis", "CDISC consulting", "SAS software validation (CSV)"],
    icon: LineChart,
  },
  {
    slug: "pharmacovigilance",
    title: "Pharmacovigilance",
    summary:
      "Safety monitoring across the product lifecycle, from clinical trial safety to post-marketing surveillance.",
    points: ["Phase I–IV safety reporting", "Signal detection & literature review", "EU QPPV support"],
    icon: ShieldAlert,
  },
];

export const industries = [
  {
    title: "Biopharmaceuticals",
    description: "Phase I–IV trials, PK studies & bioequivalence monitoring",
    icon: Syringe,
  },
  {
    title: "Pharmaceuticals",
    description: "ANDA support, GMP audits & regulatory submissions",
    icon: Pill,
  },
  {
    title: "Nutraceuticals",
    description: "Safety & efficacy trials under GLP compliance",
    icon: Leaf,
  },
  {
    title: "Cosmetics",
    description: "Clinical safety, dermatology & consumer product studies",
    icon: Droplets,
  },
  {
    title: "Medical Devices",
    description: "IEC-compliant device trials & safety reporting",
    icon: MonitorCheck,
  },
];

export const values = [
  "Absolute integrity",
  "Excellence",
  "Customer focus",
  "Enduring partnerships",
  "Accountability",
];

export const stats = [
  { value: 250, suffix: "+", label: "Studies monitored" },
  { value: 20, suffix: "+", label: "Sponsors served" },
  { value: 12, suffix: "+", label: "Sites monitored" },
  { value: 7, suffix: "", label: "Dedicated monitors" },
];

export const whyChooseUs = [
  {
    title: "GxP-first culture",
    description:
      "Every engagement is run against GMP, GLP, GCP, GSDP, GPvP and GCLP standards, not applied as an afterthought.",
    icon: ShieldCheck,
  },
  {
    title: "Regulatory fluency",
    description:
      "Direct experience compiling submissions for USFDA, UK MHRA, ANVISA and EMA keeps your dossier review-ready.",
    icon: Award,
  },
  {
    title: "Speed without shortcuts",
    description:
      "Lean, senior-led teams move quickly on feasibility and start-up while holding the line on data integrity.",
    icon: Clock,
  },
  {
    title: "One accountable partner",
    description:
      "A single project lead owns your study from contract signature through final statistical report.",
    icon: HeartHandshake,
  },
  {
    title: "Built for global sponsors",
    description:
      "Multi-region regulatory awareness supports sponsors running trials across geographies and phases.",
    icon: Globe2,
  },
  {
    title: "Quality you can audit",
    description:
      "Internal QA, CAPA tracking and documented SOPs mean our own processes withstand the same scrutiny yours do.",
    icon: BadgeCheck,
  },
];

export const clinicalTrialFlow = [
  {
    title: "Sign Contract",
    detail:
      "CDA, MSA and project-specific contracts are executed to formally begin the engagement. Our project management team ensures all obligations, confidentiality terms and milestone timelines are clearly defined before work commences.",
    keyActions: [
      "Confidential Disclosure Agreement (CDA) and Master Service Agreement (MSA) executed",
      "Project-specific contract with defined milestones and deliverables signed",
      "Study timeline, sponsor obligations and agreed budget formally documented",
    ],
  },
  {
    title: "Study Feasibility",
    detail:
      "A thorough feasibility assessment evaluates the study synopsis, site capabilities and patient population availability to build a realistic plan. Our team prepares a detailed budget and confirms timelines before any regulatory work begins.",
    keyActions: [
      "Study synopsis reviewed and site feasibility assessment conducted",
      "Subject recruitment potential and investigator experience evaluated",
      "Budget prepared with transparent cost breakdown and timeline confirmed",
    ],
  },
  {
    title: "Protocol & Regulatory",
    detail:
      "The study protocol is developed in full alignment with ICH guidelines and applicable regulatory requirements. Regulatory registration and no-objection certification are secured in parallel to prevent delays at later stages.",
    keyActions: [
      "Study protocol authored to ICH E6 GCP and applicable regulatory authority guidelines",
      "Regulatory registration and BE-NOC applications submitted and tracked",
      "Investigator brochure, IMP documentation and essential study files prepared",
    ],
  },
  {
    title: "IEC / IRB",
    detail:
      "Ethics committee approval is secured through a comprehensive IEC/IRB submission package managed by our regulatory team. The study is formally registered with CTRI prior to the first subject's enrolment.",
    keyActions: [
      "IEC/IRB submission package compiled, submitted and tracked to approval",
      "Ethics committee queries formally responded to within agreed timelines",
      "CTRI registration completed and confirmed before subject screening opens",
    ],
  },
  {
    title: "Site Monitoring",
    detail:
      "Our Clinical Research Associates execute study initiation, periodic monitoring visits and close-out visits against the approved monitoring plan. Protocol adherence, data integrity and GCP compliance are verified and documented at every visit.",
    keyActions: [
      "Site Initiation Visit (SIV), ongoing monitoring and close-out visits conducted",
      "Source document verification, CRF review and protocol deviation tracking at every visit",
      "Real-time monitoring reports and sponsor updates delivered per the monitoring plan",
    ],
  },
  {
    title: "Final Report",
    detail:
      "The biostatistics team performs full pharmacokinetic and statistical evaluation, and the final clinical trial report is authored to ICH E3 standards. All study documents are archived in compliance with GCP and delivered to the sponsor for sign-off.",
    keyActions: [
      "Pharmacokinetic and statistical analysis performed to CDISC standards",
      "Final clinical trial report authored to ICH E3 guidelines",
      "Study documents archived per GCP requirements and sponsor sign-off obtained",
    ],
  },
];

export const monitoringFlow = [
  {
    title: "Project Allotment",
    detail:
      "The monitoring plan is prepared and a qualified CRA is assigned based on therapeutic area experience and site knowledge. Visit schedules — covering SQ, SIV, SMV and SCV visits — are agreed with the sponsor before any site work begins.",
    keyActions: [
      "Monitoring plan prepared, reviewed and approved by the sponsor",
      "CRA assigned with matched therapeutic area and site experience",
      "SQ, SIV, SMV and SCV visit schedule confirmed with site and sponsor",
    ],
  },
  {
    title: "Pre-Study Qualification",
    detail:
      "The site is comprehensively assessed against protocol requirements, regulatory obligations and sponsor quality standards before formal selection. Our CRA evaluates facility readiness, staff qualifications and local patient population.",
    keyActions: [
      "Site infrastructure, storage facilities and equipment evaluated against protocol",
      "Investigator experience, staff qualifications and patient population assessed",
      "Qualification visit report submitted to sponsor for selection approval",
    ],
  },
  {
    title: "Study Initiation",
    detail:
      "Site readiness is formally confirmed through a structured initiation visit before the first subject is screened. Our CRA verifies all regulatory approvals, investigational product accountability and essential document completeness.",
    keyActions: [
      "Regulatory approvals, IEC documentation and CTRI registration verified on-site",
      "Investigational product chain-of-custody, storage and accountability confirmed",
      "Site staff trained on protocol, GCP requirements and data capture procedures",
    ],
  },
  {
    title: "Study Monitoring",
    detail:
      "Ongoing monitoring visits are conducted per the approved monitoring plan to verify protocol adherence, data accuracy and GCP compliance at site. All observations and deviations are documented and escalated to the sponsor in real time.",
    keyActions: [
      "Source document verification, CRF data review and discrepancy tracking at each visit",
      "Protocol deviations, safety events and CAPA actions formally documented and tracked",
      "Monitoring visit reports submitted to sponsor within agreed turnaround timelines",
    ],
  },
  {
    title: "Study Close-out",
    detail:
      "A formal close-out visit is performed once all study activities conclude at site. Our CRA ensures all outstanding data queries are resolved, investigational product is reconciled and site obligations are formally closed.",
    keyActions: [
      "All outstanding queries, deviations and CAPAs resolved before close-out",
      "Investigational product dispensing, return and reconciliation fully documented",
      "Site close-out letter issued and essential document archival confirmed",
    ],
  },
  {
    title: "Report",
    detail:
      "A comprehensive monitoring summary report documenting all visit observations, GCP compliance findings and quality metrics is compiled and delivered to internal QA and the sponsor. All CAPA actions are tracked to formal closure.",
    keyActions: [
      "Final monitoring report prepared, summarising all visits and quality observations",
      "GCP compliance summary and deviation metrics formally documented",
      "All CAPA actions tracked to closure with internal QA sign-off obtained",
    ],
  },
];

export const beClinicalFlow = [
  { title: "Site Visit", detail: "Agenda shared with the CRO and pre-study documents reviewed." },
  { title: "Segregation", detail: "Investigational products dispensed and pharmacy records reviewed." },
  { title: "Check-In", detail: "Subject check-in monitored and check-in documentation verified." },
  { title: "Dosing", detail: "Dosing-day activities and dosing documentation monitored in real time." },
  { title: "Check-Out", detail: "Subject check-out monitored and check-out records reviewed." },
  { title: "Final Report", detail: "Observations and quality compliance reported to the sponsor." },
];

export const beBioanalyticalFlow = [
  { title: "Site Visit", detail: "Agenda confirmed with the site and pre-study documents reviewed." },
  { title: "MD / MV", detail: "Method development and method validation records reviewed." },
  { title: "Analysis", detail: "Prospective and retrospective monitoring of the analytical phase." },
  { title: "In-Process", detail: "Batch processing, analytical runs and study-activity flow reviewed." },
  { title: "Retro", detail: "Raw data, chromatograms, audit trails and ISR data reviewed." },
  { title: "Report", detail: "Observations and quality compliance reported to the sponsor." },
];

export const auditCategories = [
  {
    title: "Process-Based Audits",
    items: [
      "Audits of products, services and standard procedures",
      "Regulatory guideline & sponsor obligation checks",
      "Technical and scientific approach review",
      "Incident reporting, CAPA and internal quality control",
    ],
  },
  {
    title: "Product & Service Audits",
    items: [
      "Quality aspects of the product or service",
      "Process, system and purpose-based reviews",
    ],
  },
  {
    title: "System-Based Audits",
    items: [
      "Quality management systems",
      "Risk management systems",
      "Information security management",
      "Environmental management systems",
    ],
  },
  {
    title: "Purpose-Based Audits",
    items: [
      "Vendor selection and qualification",
      "System and facility audits",
      "Regulatory mock, pre-inspection, compliance and GAP audits",
      "Data integrity audits — electronic, paper-based & CSV",
      "Root-cause investigational audits",
      "Annual surveillance audits",
    ],
  },
];

export const gxpStandards = [
  { code: "GMP", label: "Good Manufacturing Practices" },
  { code: "GLP", label: "Good Laboratory Practices" },
  { code: "GCP", label: "Good Clinical Practices" },
  { code: "GSDP", label: "Good Storage & Distribution Practices" },
  { code: "GPvP", label: "Good Pharmacovigilance Practices" },
  { code: "GCLP", label: "Good Clinical & Medical Laboratory Practices" },
];

export const consultingServices = [
  {
    title: "Regulatory Affairs",
    icon: Gavel,
    items: [
      "Aligned to USFDA, UK MHRA, ANVISA, EMA and other global bodies",
      "Module 4 & 5 clinical and non-clinical reports; Module 2.4 & 2.5 overviews",
      "Compiling, publishing and submitting eCTD dossiers",
      "BE-NOC applications and regulatory query response across ANDA filing",
    ],
  },
  {
    title: "Medical Writing",
    icon: FileSignature,
    items: [
      "World-class writing across therapeutic areas and document types",
      "BE study synopsis, protocol development and BE report writing",
      "Integrated data reports for clinical research programs",
      "Manuscripts positioned for approval by regulators and journals",
    ],
  },
  {
    title: "Biostatistics",
    icon: LineChart,
    items: [
      "Pharmacokinetic and statistical analysis",
      "Randomization of subjects and blinding of quality control",
      "CDISC process consulting",
      "SAS software computer system validation (CSV)",
    ],
  },
  {
    title: "Pharmacovigilance",
    icon: ShieldAlert,
    items: [
      "Safety oversight at every stage of product & device development",
      "Clinical trial safety across Phase I–IV, entry to case closure",
      "Expedited and periodic regulatory reporting",
      "Post-marketing AE processing, signal detection & EU QPPV support",
    ],
  },
];

export const pmSteps = [
  { title: "Quotation", detail: "Get a transparent quotation that fits your budget.", icon: FileText },
  { title: "Project Initiation", detail: "Investigational products secured and the project formally kicked off.", icon: Building2 },
  { title: "Enrollment", detail: "Subject enrollment and clinical study initiation begin.", icon: Users },
  { title: "Bioanalysis", detail: "Bioanalysis of clinical samples performed to protocol.", icon: Microscope },
  { title: "Biostatistics & Report", detail: "Statistical analysis feeds into the final study report.", icon: LineChart },
  { title: "Close-out", detail: "End-to-end updates culminate in formal project close-out.", icon: BadgeCheck },
];

export const faqs = [
  {
    q: "What therapeutic areas and study phases does Tested Services support?",
    a: "We support Phase I–IV clinical trials and BA/BE studies across biopharmaceuticals, pharmaceuticals, nutraceuticals, cosmetics and medical devices, with site monitoring and full project management included.",
  },
  {
    q: "Which regulatory bodies do you file and audit against?",
    a: "Our regulatory affairs and audit teams work to USFDA, UK MHRA, ANVISA and EMA requirements, alongside GMP, GLP, GCP, GSDP, GPvP and GCLP standards.",
  },
  {
    q: "Do you monitor bioequivalence studies at both clinical and bioanalytical sites?",
    a: "Yes. We run structured site-monitoring programs for both the clinical phase (segregation, check-in, dosing, check-out) and the bioanalytical phase (method development, analysis, in-process and retrospective review).",
  },
  {
    q: "Can Tested Services manage a study end-to-end, or only specific workstreams?",
    a: "Both. Our project management service covers feasibility through final report, and each specialist service — audits, regulatory affairs, medical writing, biostatistics or pharmacovigilance — can also be engaged independently.",
  },
  {
    q: "How is data integrity and quality assured across engagements?",
    a: "Every study runs under documented SOPs with incident reporting and CAPA tracking, and our own processes are subject to the same audit categories we apply for sponsors: process, product, system and purpose-based.",
  },
  {
    q: "Where is Tested Services based and which regions do you serve?",
    a: "Our corporate office is in Hyderabad, Telangana, India, and we support sponsors globally across multiple regulatory regions.",
  },
];

export const timeline = [
  { year: "2020", label: "Founded", detail: "Tested Services established to meet the growing needs of contract research." },
  { year: "Today", label: "250+ studies", detail: "A track record built across sponsors, sites and regulatory geographies." },
  { year: "Ahead", label: "Global reach", detail: "Working toward becoming a trusted global partner for clinical research." },
];
