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
  {
    title: "Site Visit",
    detail:
      "The monitoring visit agenda is shared with the CRO team in advance and all pre-study documents — including the protocol, IEC approval and investigator brochure — are reviewed for completeness. Our CRA confirms site readiness and verifies that investigator qualifications, staff training records and essential documents are in order before clinical activities commence.",
    keyActions: [
      "Visit agenda shared and confirmed with CRO site team in advance",
      "Pre-study documents reviewed: IEC approval, protocol and investigator brochure",
      "Site readiness and staff qualification records verified against study requirements",
    ],
  },
  {
    title: "Segregation",
    detail:
      "Investigational products are dispensed under monitored conditions and our CRA verifies that pharmacy records, chain-of-custody documentation and temperature-controlled storage comply with the approved protocol and GCP requirements. Randomisation and blinding procedures are confirmed to have been executed correctly before dosing begins.",
    keyActions: [
      "IP dispensing, chain-of-custody and pharmacy inventory records reviewed",
      "Temperature-controlled storage conditions and handling procedures verified",
      "Randomisation and blinding compliance confirmed against protocol specifications",
    ],
  },
  {
    title: "Check-In",
    detail:
      "Subject check-in is monitored in real time to verify that eligibility criteria, washout periods and informed consent documentation are compliant with the approved protocol and IEC conditions. Our CRA confirms that subject identification, pre-dose medical history review and safety assessments are properly documented.",
    keyActions: [
      "Subject eligibility, washout period compliance and informed consent verified",
      "Pre-dose safety assessments and subject identification records reviewed",
      "Check-in documentation confirmed complete and GCP-compliant before dosing",
    ],
  },
  {
    title: "Dosing",
    detail:
      "Dosing-day activities are monitored from investigational product administration through to post-dose sample collection to verify that the dosing procedure, blood collection schedule and all associated documentation are executed per protocol. Any deviations from the dosing procedure or sampling timepoints are documented and reported to the sponsor immediately.",
    keyActions: [
      "IP administration and post-dose blood collection schedule monitored in real time",
      "Dosing documentation, sample collection times and actual deviations recorded",
      "Any dosing irregularities formally documented and escalated per deviation procedures",
    ],
  },
  {
    title: "Check-Out",
    detail:
      "Subject check-out is monitored to confirm that all post-dose safety assessments, adverse event evaluations and discharge documentation are completed in accordance with the approved protocol and GCP requirements. Our CRA verifies that subjects meet all discharge criteria before departure from the clinical site.",
    keyActions: [
      "Post-dose safety assessments and adverse event evaluations reviewed and documented",
      "Subject discharge criteria confirmed per protocol before site departure",
      "All check-out documentation verified for completeness and GCP compliance",
    ],
  },
  {
    title: "Final Report",
    detail:
      "All clinical-phase monitoring observations, protocol deviations, data discrepancies and GCP compliance findings are compiled into a comprehensive monitoring report. The report is reviewed by internal QA before delivery to the sponsor, with all CAPA actions formally tracked to closure.",
    keyActions: [
      "Clinical monitoring observations and protocol deviations compiled and documented",
      "Final monitoring report reviewed by internal QA before sponsor delivery",
      "CAPA actions raised during the study formally tracked to closure",
    ],
  },
];

export const beBioanalyticalFlow = [
  {
    title: "Site Visit",
    detail:
      "The bioanalytical site visit agenda is confirmed with the laboratory team and all pre-study documents — including the bioanalytical plan, method validation protocol and applicable SOPs — are reviewed for completeness. Our CRA verifies laboratory GLP certification status, equipment calibration records and staff training documentation.",
    keyActions: [
      "Visit agenda confirmed with bioanalytical laboratory team in advance",
      "Pre-study documents reviewed: bioanalytical plan, SOPs and GLP certification status",
      "Equipment calibration records and staff training documentation verified on-site",
    ],
  },
  {
    title: "Method Validation",
    detail:
      "Method development and method validation records are reviewed to confirm that the bioanalytical method meets ICH M10 requirements for accuracy, precision, selectivity, sensitivity and stability. Our CRA verifies that all validation runs, calibration curves and quality control samples meet the pre-defined acceptance criteria documented in the validation protocol.",
    keyActions: [
      "Method validation records reviewed against ICH M10 bioanalytical validation guidelines",
      "Calibration curve performance, QC acceptance and validation run records examined",
      "Matrix effects, selectivity and stability data confirmed to meet protocol acceptance criteria",
    ],
  },
  {
    title: "Analysis",
    detail:
      "Prospective and retrospective monitoring of the analytical phase is conducted to verify that sample analysis runs, batch acceptance criteria and electronic audit trail records are compliant with the validated method and GLP requirements. Our CRA reviews incurred sample reanalysis (ISR) planning and confirms that sample integrity is maintained throughout the analytical sequence.",
    keyActions: [
      "Analytical run records, batch acceptance criteria and electronic audit trails reviewed",
      "Sample tracking, storage conditions and freeze-thaw cycle documentation confirmed",
      "ISR planning and sample integrity records verified against protocol requirements",
    ],
  },
  {
    title: "In-Process",
    detail:
      "Batch processing records, analytical run sequences and study-activity flow are reviewed in real time to verify compliance with the validated method and GLP requirements. Our CRA confirms that any analytical deviations, instrument malfunctions or out-of-specification events are properly documented and investigated with CAPA actions initiated.",
    keyActions: [
      "Batch processing records and analytical run sequences reviewed for GLP compliance",
      "Instrument calibration, maintenance logs and system suitability records verified",
      "Analytical deviations and OOS events documented with CAPA actions formally initiated",
    ],
  },
  {
    title: "Retrospective Review",
    detail:
      "Raw data files, chromatograms, electronic audit trails and incurred sample reanalysis (ISR) data are reviewed retrospectively to confirm analytical reproducibility and data integrity across the full study dataset. Our CRA verifies that all ISR results meet the \u2265\u00a02/3 passing criterion and that raw data is unaltered and protected by a complete audit trail.",
    keyActions: [
      "Raw data, chromatograms and electronic audit trails reviewed for complete data integrity",
      "ISR results verified against the \u2265 2/3 reproducibility acceptance criterion",
      "Final data package completeness and audit-trail protection confirmed for archival",
    ],
  },
  {
    title: "Report",
    detail:
      "All bioanalytical monitoring observations, GLP compliance findings and quality metrics are compiled into a comprehensive monitoring report covering the full analytical study period. The report is reviewed by internal QA before delivery to the sponsor, with all CAPA actions tracked to closure in readiness for regulatory submission review.",
    keyActions: [
      "Bioanalytical monitoring report prepared covering all GLP observations and findings",
      "Quality compliance metrics and deviation summary reviewed by internal QA",
      "CAPA actions tracked to closure in preparation for regulatory submission",
    ],
  },
];

export const auditCategories = [
  {
    title: "Process-Based Audits",
    description:
      "Systematic review of operational procedures, SOPs and quality control activities across the clinical research process.",
    icon: ClipboardCheck,
    items: [
      "Audits of products, services and standard procedures",
      "Regulatory guideline & sponsor obligation checks",
      "Technical and scientific approach review",
      "Incident reporting, CAPA and internal quality control",
    ],
  },
  {
    title: "Product & Service Audits",
    description:
      "Evaluation of product quality attributes, vendor qualification and service provider GxP compliance.",
    icon: ScanEye,
    items: [
      "Product quality attribute assessment against registered specifications",
      "Vendor and supplier qualification and GxP compliance review",
      "Service provider performance audit against contractual and regulatory obligations",
      "Finished product and packaging material specification compliance",
    ],
  },
  {
    title: "System-Based Audits",
    description:
      "Structured review of quality management, risk and information systems against applicable regulatory requirements.",
    icon: ShieldCheck,
    items: [
      "Quality management systems",
      "Risk management systems",
      "Information security management",
      "Environmental management systems",
    ],
  },
  {
    title: "Purpose-Based Audits",
    description:
      "Targeted audits designed for specific regulatory milestones — from pre-inspection readiness to annual surveillance and data integrity.",
    icon: Search,
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
    description:
      "End-to-end regulatory strategy and submission management to secure and maintain global approvals.",
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
    description:
      "Clear, scientifically rigorous documentation crafted to meet the stringent requirements of regulators and journals.",
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
    description:
      "Advanced statistical design and pharmacokinetic analysis to ensure data integrity and submission readiness.",
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
    description:
      "Comprehensive safety oversight and signal detection across the full product lifecycle, from Phase I to post-marketing.",
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
  {
    title: "Quotation",
    detail:
      "Receive a transparent, milestone-based proposal tailored to your specific protocol requirements. Our project leads ensure accurate forecasting to prevent unexpected scope changes.",
    icon: FileText,
  },
  {
    title: "Project Initiation",
    detail:
      "Formal kick-off aligning all stakeholders on timelines, deliverables, and risk mitigation strategies. Investigational products are secured and facility readiness is verified.",
    icon: Building2,
  },
  {
    title: "Enrollment",
    detail:
      "Subject recruitment and clinical study initiation commence under strict GCP guidelines. Real-time enrollment tracking ensures the study stays on schedule.",
    icon: Users,
  },
  {
    title: "Bioanalysis",
    detail:
      "Clinical samples are processed and analyzed according to the approved protocol and GLP standards. Analytical data is continuously monitored for quality and integrity.",
    icon: Microscope,
  },
  {
    title: "Biostatistics & Report",
    detail:
      "Advanced statistical analysis translates raw data into regulatory-ready insights. Findings are compiled into a comprehensive, compliant clinical study report.",
    icon: LineChart,
  },
  {
    title: "Close-out",
    detail:
      "End-to-end documentation is finalized and the project is formally closed out. All data and trial master files are securely archived and transferred to the sponsor.",
    icon: BadgeCheck,
  },
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
