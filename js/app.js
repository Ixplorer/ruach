/**
 * Ruach Training Hub - Client Application Logic & Data Store
 * Ruach Business Consortia Limited (Abuja, Nigeria)
 */

// 1. Comprehensive Executive Training Course Catalog Data Store
const COURSES_DATA = [
  // --- FLAGSHIP MASTERCLASSES ---
  {
    id: 'ipa-001',
    code: 'RU-IPA-501',
    slug: 'intelligent-process-automation-digital-workflows',
    title: 'Intelligent Process Automation & Digital Workflows',
    category: 'AI, Digital Transformation & IT',
    categoryCode: 'tech',
    flagship: true,
    badgeText: 'Flagship Masterclass',
    badgeClass: 'badge-flagship',
    duration: '5 Days (30 Hours)',
    feeUSD: 2450,
    feeNGN: 3500000,
    prospectusFile: 'Ruach Course Materials/ruach-advanced-data-analytics-prospectus.pdf',
    targetAudience: 'Chief Information Officers, Operations Directors, IT Managers, Business Process Automation Leads, Enterprise Architects, and Senior Digital Transformation Consultants.',
    outcomes: [
      'Master enterprise RPA, Machine Learning, and OCR workflow integration.',
      'Design end-to-end automated business processes that reduce operational bottlenecks by 60%.',
      'Evaluate AI-driven decision engines and audit trail compliance for financial & corporate governance.',
      'Deploy human-in-the-loop exception routing and enterprise security guardrails.'
    ],
    agenda: [
      { day: 1, title: 'Foundations of Intelligent Automation & Process Mining', desc: 'Analyzing legacy workflows, identifying automation ROI, mapping high-impact automation candidates.' },
      { day: 2, title: 'RPA Architecture & Machine Learning Integration', desc: 'Integrating Robotic Process Automation with LLM decision engines, document processing & OCR API pipelines.' },
      { day: 3, title: 'Enterprise Digital Workflow Design & Low-Code Platforms', desc: 'Hands-on construction of automated approval chains, escalation protocols, and enterprise data sync.' },
      { day: 4, title: 'Governance, Security & Bot Lifecycle Management', desc: 'Credential vaulting, audit trail logging, exception management, and RPA infrastructure monitoring.' },
      { day: 5, title: 'Cap-Stone Workshop: Building a Live Automated Pipeline', desc: 'Participants build and present a fully functional automated digital workflow tailored to their enterprise.' }
    ],
    sessions: [
      { id: 'ipa-s1', city: 'Abuja, Nigeria', venue: 'Ruach Executive Center, Maitama', dates: '15 Sep - 19 Sep 2026', status: 'Guaranteed to Run', statusClass: 'badge-guaranteed' },
      { id: 'ipa-s2', city: 'Lagos, Nigeria', venue: 'Eko Hotels Conference Suites, Victoria Island', dates: '13 Oct - 17 Oct 2026', status: 'Open for Enrolment', statusClass: 'badge-invoice' },
      { id: 'ipa-s3', city: 'Dubai, UAE', venue: 'JW Marriott Marquis Hotel, Business Bay', dates: '09 Nov - 13 Nov 2026', status: 'Limited Seats', statusClass: 'badge-flagship' },
      { id: 'ipa-s4', city: 'London, UK', venue: 'The Landmark London, Marylebone', dates: '07 Dec - 11 Dec 2026', status: 'Open for Enrolment', statusClass: 'badge-invoice' }
    ]
  },
  {
    id: 'frm-002',
    code: 'RU-FRM-602',
    slug: 'financial-risk-management-internal-controls',
    title: 'Financial Risk Management & Internal Financial Controls',
    category: 'Finance, Budgeting & Risk Management',
    categoryCode: 'finance',
    flagship: true,
    badgeText: 'Executive Certification',
    badgeClass: 'badge-flagship',
    duration: '5 Days (30 Hours)',
    feeUSD: 2200,
    feeNGN: 3100000,
    prospectusFile: 'Ruach Course Materials/ruach-financial-risk-management-internal-financial-controls-prospectus.pdf',
    targetAudience: 'Chief Financial Officers, Directors of Finance, Senior Internal Auditors, Enterprise Risk Officers, Treasury Controllers, and Compliance Executives.',
    outcomes: [
      'Implement robust internal control frameworks aligned with COSO and Basel III guidelines.',
      'Quantify credit, liquidity, operational, and market risk exposure using quantitative modeling.',
      'Detect early-warning indicators of financial fraud and structural audit failures.',
      'Formulate stress-testing protocols for economic volatility and currency fluctuations.'
    ],
    agenda: [
      { day: 1, title: 'Modern Financial Risk Frameworks & Governance', desc: 'Evaluating enterprise financial risk exposure, regulatory demands, and board-level risk appetite.' },
      { day: 2, title: 'Designing & Auditing Internal Control Systems', desc: 'COSO 2013 internal control components, segregation of duties, and key control testing.' },
      { day: 3, title: 'Quantitative Liquidity, Credit & Market Risk Assessment', desc: 'Value-at-Risk (VaR), sensitivity analysis, credit risk scoring, and treasury risk mitigation.' },
      { day: 4, title: 'Fraud Forensic Detection & Anti-Money Laundering (AML)', desc: 'Identifying financial statement anomalies, red-flags, forensic audit techniques, and statutory reporting.' },
      { day: 5, title: 'Stress Testing & Financial Contingency Planning', desc: 'Simulating macro-economic shocks, capital adequacy modeling, and executive board reporting.' }
    ],
    sessions: [
      { id: 'frm-s1', city: 'Abuja, Nigeria', venue: 'Transcorp Hilton Executive Suites', dates: '22 Sep - 26 Sep 2026', status: 'Guaranteed to Run', statusClass: 'badge-guaranteed' },
      { id: 'frm-s2', city: 'Port Harcourt, Nigeria', venue: 'Hotel Presidential Conference Hall', dates: '20 Oct - 24 Oct 2026', status: 'Open for Enrolment', statusClass: 'badge-invoice' },
      { id: 'frm-s3', city: 'Dubai, UAE', venue: 'Grand Hyatt Dubai, Healthcare City', dates: '16 Nov - 20 Nov 2026', status: 'Limited Seats', statusClass: 'badge-flagship' }
    ]
  },
  {
    id: 'hpl-003',
    code: 'RU-HPL-703',
    slug: 'high-performance-leadership-organizational-excellence',
    title: 'High-Performance Leadership & Organizational Excellence',
    category: 'Leadership & Executive Development',
    categoryCode: 'leadership',
    flagship: true,
    badgeText: 'Leadership Masterclass',
    badgeClass: 'badge-flagship',
    duration: '5 Days (30 Hours)',
    feeUSD: 2600,
    feeNGN: 3800000,
    prospectusFile: 'Ruach Course Materials/ruach-high-performance-leadership-organizational-excellence-prospectus.pdf',
    targetAudience: 'Chief Executive Officers, Managing Directors, Permanent Secretaries, Heads of Department, Board Directors, and Senior Executive Leaders.',
    outcomes: [
      'Formulate strategic direction and execute organizational change initiatives with precision.',
      'Build resilient high-performing leadership teams capable of navigating market volatility.',
      'Master strategic negotiation, executive influence, and corporate diplomacy.',
      'Instill a continuous improvement culture focused on business excellence and accountability.'
    ],
    agenda: [
      { day: 1, title: 'Visionary Leadership & Strategic Alignment', desc: 'Translating corporate vision into actionable strategy, agile leadership models, and strategic visioning.' },
      { day: 2, title: 'Driving Culture Transformation & Executive Presence', desc: 'Communicating change effectively, managing stakeholder expectations, and personal leadership branding.' },
      { day: 3, title: 'High-Performance Team Dynamics & Talent Maximization', desc: 'Motivating multidisciplinary teams, conflict resolution, emotional intelligence, and peer coaching.' },
      { day: 4, title: 'Strategic Negotiation & Corporate Diplomacy', desc: 'High-stakes negotiation dynamics, coalition building, and resolving complex corporate impasses.' },
      { day: 5, title: 'Sustaining Organizational Excellence & Executive Action Plan', desc: 'Developing balanced scorecards, personal leadership legacy blueprint, and peer evaluation.' }
    ],
    sessions: [
      { id: 'hpl-s1', city: 'Abuja, Nigeria', venue: 'Ruach Leadership Institute, Central Area', dates: '06 Oct - 10 Oct 2026', status: 'Guaranteed to Run', statusClass: 'badge-guaranteed' },
      { id: 'hpl-s2', city: 'London, UK', venue: 'The Ritz Carlton London Suites', dates: '02 Nov - 06 Nov 2026', status: 'Limited Seats', statusClass: 'badge-flagship' },
      { id: 'hpl-s3', city: 'Dubai, UAE', venue: 'The Ritz-Carlton Dubai, DIFC', dates: '30 Nov - 04 Dec 2026', status: 'Open for Enrolment', statusClass: 'badge-invoice' }
    ]
  },

  // --- AI, DIGITAL TRANSFORMATION & DATA ANALYTICS ---
  {
    id: 'ada-001',
    code: 'RU-ADA-501',
    slug: 'advanced-data-analytics-executive-intelligence',
    title: 'Advanced Data Analytics & Executive Intelligence',
    category: 'AI, Digital Transformation & IT',
    categoryCode: 'tech',
    flagship: false,
    badgeText: 'Analytics Certification',
    badgeClass: 'badge-invoice',
    duration: '5 Days (30 Hours)',
    feeUSD: 2350,
    feeNGN: 3300000,
    prospectusFile: 'Ruach Course Materials/ruach-advanced-data-analytics-prospectus.pdf',
    targetAudience: 'Chief Data Officers, Business Intelligence Managers, Strategy Analysts, Risk Controllers, Operations Heads.',
    outcomes: ['Leverage advanced statistical & predictive analytics for decision support.', 'Build automated enterprise dashboards and real-time KPI scorecards.'],
    agenda: [{ day: 1, title: 'Enterprise Data Strategy & Predictive Modeling', desc: 'Data architecture, predictive pipelines, and automated intelligence.' }],
    sessions: [
      { id: 'ada-s1', city: 'Abuja, Nigeria', venue: 'Ruach Executive Center, Maitama', dates: '05 Oct - 09 Oct 2026', status: 'Open for Enrolment', statusClass: 'badge-invoice' },
      { id: 'ada-s2', city: 'Lagos, Nigeria', venue: 'Radisson Blu Anchorage, VI', dates: '16 Nov - 20 Nov 2026', status: 'Guaranteed to Run', statusClass: 'badge-guaranteed' }
    ]
  },
  {
    id: 'pbi-002',
    code: 'RU-PBI-502',
    slug: 'data-analytics-power-bi-foundation',
    title: 'Data Analytics & Power BI Foundation',
    category: 'AI, Digital Transformation & IT',
    categoryCode: 'tech',
    flagship: false,
    badgeText: 'Hands-on Workshop',
    badgeClass: 'badge-invoice',
    duration: '5 Days (30 Hours)',
    feeUSD: 2100,
    feeNGN: 2950000,
    prospectusFile: 'Ruach Course Materials/ruach-data-analytics-power-bi-foundation-prospectus.pdf',
    targetAudience: 'Finance Analysts, Operations Coordinators, Business Performance Leads, Reporting Officers.',
    outcomes: ['Master Power Query, DAX measures, and Power BI interactive reports.', 'Transform raw organizational data into actionable executive insights.'],
    agenda: [{ day: 1, title: 'Data Transformation & Power Query Fundamentals', desc: 'Clean, model, and aggregate multi-source enterprise data.' }],
    sessions: [
      { id: 'pbi-s1', city: 'Abuja, Nigeria', venue: 'Ruach Executive Center, Maitama', dates: '19 Oct - 23 Oct 2026', status: 'Open for Enrolment', statusClass: 'badge-invoice' }
    ]
  },

  // --- PROJECT, PROCUREMENT & CONTRACT MANAGEMENT ---
  {
    id: 'apm-003',
    code: 'RU-APM-601',
    slug: 'advanced-project-management-complex-projects',
    title: 'Advanced Project Management for Complex Projects',
    category: 'Project, Procurement & Contract Management',
    categoryCode: 'project',
    flagship: false,
    badgeText: 'PMP / PMI Aligned',
    badgeClass: 'badge-invoice',
    duration: '5 Days (30 Hours)',
    feeUSD: 2250,
    feeNGN: 3200000,
    prospectusFile: 'Ruach Course Materials/ruach-advanced-project-management-complex-projects-prospectus.pdf',
    targetAudience: 'Senior Project Directors, PMO Heads, Engineering Managers, Infrastructure Leads.',
    outcomes: ['Navigate megaproject complexity, multi-stakeholder governance, and Agile-Waterfall hybrids.', 'Control project scope, cost, and schedule variances using Earned Value Management (EVM).'],
    agenda: [{ day: 1, title: 'Complex Project Governance & Portfolio Alignment', desc: 'Structuring high-stakes projects.' }],
    sessions: [
      { id: 'apm-s1', city: 'Abuja, Nigeria', venue: 'Ruach Executive Center, Maitama', dates: '12 Oct - 16 Oct 2026', status: 'Guaranteed to Run', statusClass: 'badge-guaranteed' },
      { id: 'apm-s2', city: 'London, UK', venue: 'Hilton London Bankside', dates: '16 Nov - 20 Nov 2026', status: 'Limited Seats', statusClass: 'badge-flagship' }
    ]
  },
  {
    id: 'cam-004',
    code: 'RU-CAM-602',
    slug: 'contract-administration-commercial-project-management',
    title: 'Contract Administration & Commercial Project Management',
    category: 'Project, Procurement & Contract Management',
    categoryCode: 'project',
    flagship: false,
    badgeText: 'Commercial Mastery',
    badgeClass: 'badge-invoice',
    duration: '5 Days (30 Hours)',
    feeUSD: 2200,
    feeNGN: 3100000,
    prospectusFile: 'Ruach Course Materials/ruach-contract-administration-commercial-project-management-prospectus.pdf',
    targetAudience: 'Contract Managers, Legal Officers, Procurement Directors, Commercial Engineers.',
    outcomes: ['Master FIDIC & standard contract administration, claim mitigation, and dispute resolution.', 'Structure commercial terms to protect project financial margin.'],
    agenda: [{ day: 1, title: 'Contractual Frameworks & Formation Governance', desc: 'Clauses, liabilities, and risk allocation.' }],
    sessions: [
      { id: 'cam-s1', city: 'Port Harcourt, Nigeria', venue: 'Hotel Presidential Suites', dates: '02 Nov - 06 Nov 2026', status: 'Open for Enrolment', statusClass: 'badge-invoice' }
    ]
  },
  {
    id: 'pce-005',
    code: 'RU-PCE-603',
    slug: 'project-cost-estimation-budgeting-financial-control',
    title: 'Project Cost Estimation, Budgeting & Financial Control',
    category: 'Project, Procurement & Contract Management',
    categoryCode: 'project',
    flagship: false,
    badgeText: 'Cost Engineering',
    badgeClass: 'badge-invoice',
    duration: '5 Days (30 Hours)',
    feeUSD: 2150,
    feeNGN: 3000000,
    prospectusFile: 'Ruach Course Materials/ruach-project-cost-estimation-budgeting-financial-control-prospectus.pdf',
    targetAudience: 'Cost Engineers, Quantity Surveyors, PMO Budget Controllers, Project Accountants.',
    outcomes: ['Develop accurate bottom-up cost estimates and WBS contingency budgeting.', 'Track cost variance, cash flow forecasts, and baseline re-alignments.'],
    agenda: [{ day: 1, title: 'Cost Estimation Methodologies & Contingency Modeling', desc: 'Parametric and 3-point estimation.' }],
    sessions: [
      { id: 'pce-s1', city: 'Abuja, Nigeria', venue: 'Transcorp Hilton Executive Suites', dates: '26 Oct - 30 Oct 2026', status: 'Guaranteed to Run', statusClass: 'badge-guaranteed' }
    ]
  },
  {
    id: 'pge-006',
    code: 'RU-PGE-604',
    slug: 'project-governance-stakeholder-engagement',
    title: 'Project Governance & Stakeholder Engagement',
    category: 'Project, Procurement & Contract Management',
    categoryCode: 'project',
    flagship: false,
    badgeText: 'Governance Masterclass',
    badgeClass: 'badge-invoice',
    duration: '5 Days (30 Hours)',
    feeUSD: 2100,
    feeNGN: 2950000,
    prospectusFile: 'Ruach Course Materials/ruach-project-governance-stakeholder-engagement-prospectus.pdf',
    targetAudience: 'Program Directors, Steering Committee Members, Government Project Coordinators.',
    outcomes: ['Design steering committee frameworks and stakeholder decision matrices.', 'Mitigate community opposition and regulatory friction on major capital works.'],
    agenda: [{ day: 1, title: 'Project Governance Structures & Oversight Models', desc: 'Roles, escalation pathways, and steering.' }],
    sessions: [
      { id: 'pge-s1', city: 'Lagos, Nigeria', venue: 'Eko Hotels Conference Suites', dates: '09 Nov - 13 Nov 2026', status: 'Open for Enrolment', statusClass: 'badge-invoice' }
    ]
  },
  {
    id: 'ppm-007',
    code: 'RU-PPM-605',
    slug: 'project-performance-measurement-lessons-learned',
    title: 'Project Performance Measurement & Lessons Learned',
    category: 'Project, Procurement & Contract Management',
    categoryCode: 'project',
    flagship: false,
    badgeText: 'Performance & MEL',
    badgeClass: 'badge-invoice',
    duration: '5 Days (30 Hours)',
    feeUSD: 2050,
    feeNGN: 2900000,
    prospectusFile: 'Ruach Course Materials/ruach-project-performance-measurement-lessons-learned-prospectus.pdf',
    targetAudience: 'PMO Performance Analysts, Monitoring & Evaluation Officers, Project Controllers.',
    outcomes: ['Establish project KPI scorecards and close-out evaluation audits.', 'Systematize institutional knowledge retention and lessons-learned repositories.'],
    agenda: [{ day: 1, title: 'KPI Metrics & Performance Measurement Frameworks', desc: 'Defining success indicators.' }],
    sessions: [
      { id: 'ppm-s1', city: 'Abuja, Nigeria', venue: 'Ruach Executive Center, Maitama', dates: '23 Nov - 27 Nov 2026', status: 'Open for Enrolment', statusClass: 'badge-invoice' }
    ]
  },
  {
    id: 'prm-008',
    code: 'RU-PRM-606',
    slug: 'project-risk-management-business-continuity',
    title: 'Project Risk Management & Business Continuity',
    category: 'Project, Procurement & Contract Management',
    categoryCode: 'project',
    flagship: false,
    badgeText: 'Risk & Continuity',
    badgeClass: 'badge-invoice',
    duration: '5 Days (30 Hours)',
    feeUSD: 2200,
    feeNGN: 3100000,
    prospectusFile: 'Ruach Course Materials/ruach-project-risk-management-business-continuity-prospectus.pdf',
    targetAudience: 'Risk Managers, Project Engineers, Continuity Coordinators, Operations Leads.',
    outcomes: ['Formulate project risk registers, Monte Carlo simulations, and response plans.', 'Ensure business continuity and recovery during supply chain and environmental shocks.'],
    agenda: [{ day: 1, title: 'Project Risk Identification & Qualitative Analysis', desc: 'Risk breakdown structures and impact.' }],
    sessions: [
      { id: 'prm-s1', city: 'Dubai, UAE', venue: 'JW Marriott Marquis, Business Bay', dates: '07 Dec - 11 Dec 2026', status: 'Limited Seats', statusClass: 'badge-flagship' }
    ]
  },
  {
    id: 'spp-009',
    code: 'RU-SPP-607',
    slug: 'strategic-project-planning-scheduling-control',
    title: 'Strategic Project Planning, Scheduling & Control',
    category: 'Project, Procurement & Contract Management',
    categoryCode: 'project',
    flagship: false,
    badgeText: 'Planning & Scheduling',
    badgeClass: 'badge-invoice',
    duration: '5 Days (30 Hours)',
    feeUSD: 2150,
    feeNGN: 3000000,
    prospectusFile: 'Ruach Course Materials/ruach-strategic-project-planning-scheduling-control-prospectus.pdf',
    targetAudience: 'Lead Planners, Primavera P6 Users, Project Schedulers, Construction Managers.',
    outcomes: ['Master Critical Path Method (CPM) and resource leveling across portfolios.', 'Control schedule slippage and evaluate delay claim impacts.'],
    agenda: [{ day: 1, title: 'Work Breakdown Structure (WBS) & Network Diagrams', desc: 'Logic dependencies and pathing.' }],
    sessions: [
      { id: 'spp-s1', city: 'Abuja, Nigeria', venue: 'Ruach Executive Center, Maitama', dates: '14 Dec - 18 Dec 2026', status: 'Open for Enrolment', statusClass: 'badge-invoice' }
    ]
  },

  // --- FINANCE, BUDGETING & RISK MANAGEMENT ---
  {
    id: 'bpf-010',
    code: 'RU-BPF-701',
    slug: 'budget-planning-forecasting-financial-control',
    title: 'Budget Planning, Forecasting & Financial Control',
    category: 'Finance, Budgeting & Risk Management',
    categoryCode: 'finance',
    flagship: false,
    badgeText: 'Financial Control',
    badgeClass: 'badge-invoice',
    duration: '5 Days (30 Hours)',
    feeUSD: 2150,
    feeNGN: 3000000,
    prospectusFile: 'Ruach Course Materials/ruach-budget-planning-forecasting-financial-control-prospectus.pdf',
    targetAudience: 'Finance Managers, Budget Directors, Financial Controllers, Management Accountants.',
    outcomes: ['Build rolling financial forecasts and Zero-Based Budgeting (ZBB) models.', 'Analyze variance reports to maintain operational expenditure control.'],
    agenda: [{ day: 1, title: 'Modern Corporate Budgeting Frameworks & ZBB', desc: 'Budgeting models and alignment.' }],
    sessions: [
      { id: 'bpf-s1', city: 'Abuja, Nigeria', venue: 'Transcorp Hilton Executive Suites', dates: '28 Sep - 02 Oct 2026', status: 'Guaranteed to Run', statusClass: 'badge-guaranteed' }
    ]
  },
  {
    id: 'cie-011',
    code: 'RU-CIE-702',
    slug: 'capital-investment-evaluation-business-case-development',
    title: 'Capital Investment Evaluation & Business Case Development',
    category: 'Finance, Budgeting & Risk Management',
    categoryCode: 'finance',
    flagship: false,
    badgeText: 'Investment Evaluation',
    badgeClass: 'badge-invoice',
    duration: '5 Days (30 Hours)',
    feeUSD: 2300,
    feeNGN: 3200000,
    prospectusFile: 'Ruach Course Materials/ruach-capital-investment-evaluation-business-case-development-prospectus.pdf',
    targetAudience: 'Investment Officers, Corporate Development Leads, Treasury Directors, Strategy Heads.',
    outcomes: ['Calculate NPV, IRR, WACC, and payback periods for major capital projects.', 'Write compelling bankable business cases for executive and board approval.'],
    agenda: [{ day: 1, title: 'Capital Budgeting Principles & Financial Modeling', desc: 'Discounted cash flows and ROI.' }],
    sessions: [
      { id: 'cie-s1', city: 'London, UK', venue: 'The Landmark London, Marylebone', dates: '09 Nov - 13 Nov 2026', status: 'Limited Seats', statusClass: 'badge-flagship' }
    ]
  },
  {
    id: 'cop-012',
    code: 'RU-COP-703',
    slug: 'cost-optimization-operational-financial-performance',
    title: 'Cost Optimization & Operational Financial Performance',
    category: 'Finance, Budgeting & Risk Management',
    categoryCode: 'finance',
    flagship: false,
    badgeText: 'Cost Optimization',
    badgeClass: 'badge-invoice',
    duration: '5 Days (30 Hours)',
    feeUSD: 2200,
    feeNGN: 3100000,
    prospectusFile: 'Ruach Course Materials/ruach-cost-optimization-operational-financial-performance-prospectus.pdf',
    targetAudience: 'Chief Operating Officers, Finance Directors, Cost Reduction Taskforce Leads.',
    outcomes: ['Identify structural cost leakages and implement sustainable cost reduction programs.', 'Align operational activities with financial margin targets.'],
    agenda: [{ day: 1, title: 'Strategic Cost Analysis & Activity-Based Costing', desc: 'Mapping overheads and cost drivers.' }],
    sessions: [
      { id: 'cop-s1', city: 'Lagos, Nigeria', venue: 'Radisson Blu Anchorage, VI', dates: '19 Oct - 23 Oct 2026', status: 'Open for Enrolment', statusClass: 'badge-invoice' }
    ]
  },
  {
    id: 'erm-013',
    code: 'RU-ERM-704',
    slug: 'enterprise-risk-management-operational-resilience',
    title: 'Enterprise Risk Management & Operational Resilience',
    category: 'Finance, Budgeting & Risk Management',
    categoryCode: 'finance',
    flagship: false,
    badgeText: 'ISO 31000 Aligned',
    badgeClass: 'badge-guaranteed',
    duration: '5 Days (30 Hours)',
    feeUSD: 2350,
    feeNGN: 3300000,
    prospectusFile: 'Ruach Course Materials/ruach-enterprise-risk-management-operational-resilience-prospectus.pdf',
    targetAudience: 'Chief Risk Officers, Internal Audit Directors, Operational Risk Managers.',
    outcomes: ['Build enterprise risk appetite frameworks aligned with ISO 31000 standards.', 'Establish operational resilience protocols against cyber, financial, and strategic threats.'],
    agenda: [{ day: 1, title: 'ERM Framework Design & Board Risk Governance', desc: 'Setting risk boundaries and reporting.' }],
    sessions: [
      { id: 'erm-s1', city: 'Abuja, Nigeria', venue: 'Ruach Executive Center, Maitama', dates: '16 Nov - 20 Nov 2026', status: 'Guaranteed to Run', statusClass: 'badge-guaranteed' }
    ]
  },
  {
    id: 'fae-014',
    code: 'RU-FAE-705',
    slug: 'financial-analysis-executive-decision-making',
    title: 'Financial Analysis for Executive Decision Making',
    category: 'Finance, Budgeting & Risk Management',
    categoryCode: 'finance',
    flagship: false,
    badgeText: 'Executive Finance',
    badgeClass: 'badge-invoice',
    duration: '5 Days (30 Hours)',
    feeUSD: 2250,
    feeNGN: 3150000,
    prospectusFile: 'Ruach Course Materials/ruach-financial-analysis-executive-decision-making-prospectus.pdf',
    targetAudience: 'Non-Finance Directors, C-Suite Executives, Managing Directors, Board Members.',
    outcomes: ['Read and interpret corporate balance sheets, cash flow statements, and income statements.', 'Evaluate corporate financial health and strategic solvency indicators.'],
    agenda: [{ day: 1, title: 'Demystifying Executive Financial Statements', desc: 'Ratio analysis and liquidity.' }],
    sessions: [
      { id: 'fae-s1', city: 'Dubai, UAE', venue: 'Grand Hyatt Dubai', dates: '23 Nov - 27 Nov 2026', status: 'Limited Seats', statusClass: 'badge-flagship' }
    ]
  },
  {
    id: 'fgc-015',
    code: 'RU-FGC-706',
    slug: 'financial-governance-compliance-accountability',
    title: 'Financial Governance, Compliance & Accountability',
    category: 'Finance, Budgeting & Risk Management',
    categoryCode: 'finance',
    flagship: false,
    badgeText: 'Compliance Standard',
    badgeClass: 'badge-invoice',
    duration: '5 Days (30 Hours)',
    feeUSD: 2200,
    feeNGN: 3100000,
    prospectusFile: 'Ruach Course Materials/ruach-financial-governance-compliance-accountability-prospectus.pdf',
    targetAudience: 'Compliance Officers, Statutory Auditors, Finance Directors, Public Sector Treasury Officers.',
    outcomes: ['Ensure statutory financial reporting compliance and statutory audit readiness.', 'Prevent financial malfeasance and enforce institutional fiduciary accountability.'],
    agenda: [{ day: 1, title: 'Financial Statutory Compliance & Governance Principles', desc: 'Regulatory oversight and ethics.' }],
    sessions: [
      { id: 'fgc-s1', city: 'Abuja, Nigeria', venue: 'Ruach Executive Center, Maitama', dates: '30 Nov - 04 Dec 2026', status: 'Open for Enrolment', statusClass: 'badge-invoice' }
    ]
  },
  {
    id: 'sfm-017',
    code: 'RU-SFM-707',
    slug: 'strategic-financial-management-business-leaders',
    title: 'Strategic Financial Management for Business Leaders',
    category: 'Finance, Budgeting & Risk Management',
    categoryCode: 'finance',
    flagship: false,
    badgeText: 'Strategic Finance',
    badgeClass: 'badge-invoice',
    duration: '5 Days (30 Hours)',
    feeUSD: 2400,
    feeNGN: 3400000,
    prospectusFile: 'Ruach Course Materials/ruach-strategic-financial-management-business-leaders-prospectus.pdf',
    targetAudience: 'General Managers, Business Unit Heads, Enterprise Founders, Managing Directors.',
    outcomes: ['Align strategic corporate initiatives with optimal capital structure and debt funding.', 'Maximize shareholder value and long-term financial stability.'],
    agenda: [{ day: 1, title: 'Capital Structure & Corporate Financing Strategies', desc: 'Debt vs equity and valuation.' }],
    sessions: [
      { id: 'sfm-s1', city: 'London, UK', venue: 'The Ritz Carlton London', dates: '07 Dec - 11 Dec 2026', status: 'Limited Seats', statusClass: 'badge-flagship' }
    ]
  },

  // --- LEADERSHIP & CORPORATE GOVERNANCE ---
  {
    id: 'cge-018',
    code: 'RU-CGE-801',
    slug: 'corporate-governance-ethics-executive-accountability',
    title: 'Corporate Governance, Ethics & Executive Accountability',
    category: 'Corporate Governance & Compliance',
    categoryCode: 'governance',
    flagship: false,
    badgeText: 'Board Governance',
    badgeClass: 'badge-guaranteed',
    duration: '5 Days (30 Hours)',
    feeUSD: 2500,
    feeNGN: 3600000,
    prospectusFile: 'Ruach Course Materials/ruach-corporate-governance-ethics-executive-accountability-prospectus.pdf',
    targetAudience: 'Board Directors, Company Secretaries, Chief Executive Officers, Legal Officers.',
    outcomes: ['Implement international board governance best practices and ethics frameworks.', 'Ensure executive fiduciary accountability and transparent stakeholder reporting.'],
    agenda: [{ day: 1, title: 'Board Architecture & Executive Fiduciary Duty', desc: 'Governance codes and oversight.' }],
    sessions: [
      { id: 'cge-s1', city: 'Abuja, Nigeria', venue: 'Transcorp Hilton Executive Suites', dates: '12 Oct - 16 Oct 2026', status: 'Guaranteed to Run', statusClass: 'badge-guaranteed' }
    ]
  },
  {
    id: 'edm-019',
    code: 'RU-EDM-802',
    slug: 'executive-decision-making-strategic-problem-solving',
    title: 'Executive Decision Making & Strategic Problem Solving',
    category: 'Leadership & Executive Development',
    categoryCode: 'leadership',
    flagship: false,
    badgeText: 'Decision Science',
    badgeClass: 'badge-invoice',
    duration: '5 Days (30 Hours)',
    feeUSD: 2350,
    feeNGN: 3300000,
    prospectusFile: 'Ruach Course Materials/ruach-executive-decision-making-strategic-problem-solving-prospectus.pdf',
    targetAudience: 'Executive Directors, Strategy Vice Presidents, Operations Leaders, General Managers.',
    outcomes: ['Apply cognitive framework tools to resolve complex, ambiguous business crises.', 'Eliminate organizational decision paralysis and cognitive bias.'],
    agenda: [{ day: 1, title: 'Structured Thinking & Problem Framing', desc: 'Root cause analysis and decision trees.' }],
    sessions: [
      { id: 'edm-s1', city: 'Dubai, UAE', venue: 'JW Marriott Marquis, Business Bay', dates: '26 Oct - 30 Oct 2026', status: 'Limited Seats', statusClass: 'badge-flagship' }
    ]
  },
  {
    id: 'els-020',
    code: 'RU-ELS-803',
    slug: 'executive-leadership-sustainable-organizational-performance',
    title: 'Executive Leadership & Sustainable Organizational Performance',
    category: 'Leadership & Executive Development',
    categoryCode: 'leadership',
    flagship: false,
    badgeText: 'Sustainable Performance',
    badgeClass: 'badge-invoice',
    duration: '5 Days (30 Hours)',
    feeUSD: 2450,
    feeNGN: 3500000,
    prospectusFile: 'Ruach Course Materials/ruach-executive-leadership-sustainable-organizational-performance-prospectus.pdf',
    targetAudience: 'Chief Executives, Permanent Secretaries, Directors of Operations, Group Heads.',
    outcomes: ['Drive long-term organizational performance while balancing ESG expectations.', 'Build adaptive organizational structures that withstand market disruptions.'],
    agenda: [{ day: 1, title: 'Sustainable Value Creation & Organizational Agility', desc: 'Performance frameworks and ESG.' }],
    sessions: [
      { id: 'els-s1', city: 'London, UK', venue: 'The Landmark London', dates: '23 Nov - 27 Nov 2026', status: 'Limited Seats', statusClass: 'badge-flagship' }
    ]
  },
  {
    id: 'lds-022',
    code: 'RU-LDS-804',
    slug: 'leadership-development-succession-planning',
    title: 'Leadership Development & Succession Planning',
    category: 'Leadership & Executive Development',
    categoryCode: 'leadership',
    flagship: false,
    badgeText: 'Talent Continuity',
    badgeClass: 'badge-invoice',
    duration: '5 Days (30 Hours)',
    feeUSD: 2200,
    feeNGN: 3100000,
    prospectusFile: 'Ruach Course Materials/ruach-leadership-development-succession-planning-prospectus.pdf',
    targetAudience: 'Chief People Officers, HR Directors, Executive Nominations Committee Members.',
    outcomes: ['Build robust executive leadership pipelines and succession plans.', 'Identify high-potential leaders and accelerate executive readiness.'],
    agenda: [{ day: 1, title: 'Succession Planning Architecture & Talent Mapping', desc: '9-box grid and executive bench strength.' }],
    sessions: [
      { id: 'lds-s1', city: 'Abuja, Nigeria', venue: 'Ruach Executive Center, Maitama', dates: '09 Nov - 13 Nov 2026', status: 'Open for Enrolment', statusClass: 'badge-invoice' }
    ]
  },
  {
    id: 'lib-023',
    code: 'RU-LIB-805',
    slug: 'leading-innovation-business-growth-strategies',
    title: 'Leading Innovation & Business Growth Strategies',
    category: 'Leadership & Executive Development',
    categoryCode: 'leadership',
    flagship: false,
    badgeText: 'Innovation & Growth',
    badgeClass: 'badge-invoice',
    duration: '5 Days (30 Hours)',
    feeUSD: 2350,
    feeNGN: 3300000,
    prospectusFile: 'Ruach Course Materials/ruach-leading-innovation-business-growth-strategies-prospectus.pdf',
    targetAudience: 'Chief Innovation Officers, Commercial Directors, New Business Venture Heads.',
    outcomes: ['Foster a corporate culture of intrapreneurship and continuous innovation.', 'Identify non-linear market growth opportunities and disruptive business models.'],
    agenda: [{ day: 1, title: 'Disruptive Innovation Frameworks & Market Entry', desc: 'Blue ocean strategy and growth.' }],
    sessions: [
      { id: 'lib-s1', city: 'Lagos, Nigeria', venue: 'Eko Hotels Conference Suites', dates: '16 Nov - 20 Nov 2026', status: 'Open for Enrolment', statusClass: 'badge-invoice' }
    ]
  },
  {
    id: 'otc-024',
    code: 'RU-OTC-806',
    slug: 'organizational-transformation-change-leadership',
    title: 'Organizational Transformation & Change Leadership',
    category: 'Leadership & Executive Development',
    categoryCode: 'leadership',
    flagship: false,
    badgeText: 'Transformation Lead',
    badgeClass: 'badge-guaranteed',
    duration: '5 Days (30 Hours)',
    feeUSD: 2400,
    feeNGN: 3400000,
    prospectusFile: 'Ruach Course Materials/ruach-organizational-transformation-change-leadership-prospectus.pdf',
    targetAudience: 'Transformation Directors, Change Champions, Management Consultants.',
    outcomes: ['Lead enterprise-wide restructuring and cultural transformation programs.', 'Overcome employee change resistance and embed new operating behaviors.'],
    agenda: [{ day: 1, title: 'Kotter & ADKAR Transformation Architecture', desc: 'Change vision, communication, and coalition.' }],
    sessions: [
      { id: 'otc-s1', city: 'Abuja, Nigeria', venue: 'Ruach Executive Center, Maitama', dates: '30 Nov - 04 Dec 2026', status: 'Guaranteed to Run', statusClass: 'badge-guaranteed' }
    ]
  },
  {
    id: 'spe-025',
    code: 'RU-SPE-807',
    slug: 'strategic-planning-execution-performance-management',
    title: 'Strategic Planning, Execution & Performance Management',
    category: 'Leadership & Executive Development',
    categoryCode: 'leadership',
    flagship: false,
    badgeText: 'Strategy Execution',
    badgeClass: 'badge-invoice',
    duration: '5 Days (30 Hours)',
    feeUSD: 2300,
    feeNGN: 3200000,
    prospectusFile: 'Ruach Course Materials/ruach-strategic-planning-execution-performance-management-prospectus.pdf',
    targetAudience: 'Heads of Strategy, Performance Directors, Chief Operating Officers.',
    outcomes: ['Bridge the strategy-execution gap using Balanced Scorecards and OKRs.', 'Establish enterprise performance monitoring cadence and accountability.'],
    agenda: [{ day: 1, title: 'Strategic Visioning to Execution Cascading', desc: 'Balanced Scorecard and OKR alignment.' }],
    sessions: [
      { id: 'spe-s1', city: 'Port Harcourt, Nigeria', venue: 'Hotel Presidential Suites', dates: '07 Dec - 11 Dec 2026', status: 'Open for Enrolment', statusClass: 'badge-invoice' }
    ]
  },

  // --- HUMAN RESOURCES & TALENT MANAGEMENT ---
  {
    id: 'eeo-026',
    code: 'RU-EEO-901',
    slug: 'employee-engagement-organizational-culture',
    title: 'Employee Engagement & Organizational Culture',
    category: 'Human Resources & Talent Management',
    categoryCode: 'hr',
    flagship: false,
    badgeText: 'Culture & Engagement',
    badgeClass: 'badge-invoice',
    duration: '5 Days (30 Hours)',
    feeUSD: 2000,
    feeNGN: 2800000,
    prospectusFile: 'Ruach Course Materials/ruach-employee-engagement-organizational-culture-prospectus.pdf',
    targetAudience: 'HR Managers, Employee Relations Officers, Culture Ambassadors, Internal Comms Leads.',
    outcomes: ['Design high-engagement workplace environments that boost productivity.', 'Measure employee Net Promoter Scores (eNPS) and mitigate burnout.'],
    agenda: [{ day: 1, title: 'Culture Assessment & Employee Value Proposition', desc: 'Diagnostics and workplace engagement.' }],
    sessions: [
      { id: 'eeo-s1', city: 'Abuja, Nigeria', venue: 'Ruach Executive Center, Maitama', dates: '12 Oct - 16 Oct 2026', status: 'Open for Enrolment', statusClass: 'badge-invoice' }
    ]
  },
  {
    id: 'hra-027',
    code: 'RU-HRA-902',
    slug: 'human-resource-analytics-workforce-performance',
    title: 'Human Resource Analytics & Workforce Performance',
    category: 'Human Resources & Talent Management',
    categoryCode: 'hr',
    flagship: false,
    badgeText: 'HR Analytics',
    badgeClass: 'badge-invoice',
    duration: '5 Days (30 Hours)',
    feeUSD: 2100,
    feeNGN: 2950000,
    prospectusFile: 'Ruach Course Materials/ruach-human-resource-analytics-workforce-performance-prospectus.pdf',
    targetAudience: 'People Analytics Leads, HR Business Partners, Workforce Planners.',
    outcomes: ['Leverage predictive HR models for attrition forecasting and talent productivity.', 'Build executive HR metrics dashboards.'],
    agenda: [{ day: 1, title: 'Foundations of People Analytics & Data Hygiene', desc: 'Metrics, datasets, and HR KPIs.' }],
    sessions: [
      { id: 'hra-s1', city: 'Lagos, Nigeria', venue: 'Radisson Blu Anchorage, VI', dates: '26 Oct - 30 Oct 2026', status: 'Open for Enrolment', statusClass: 'badge-invoice' }
    ]
  },
  {
    id: 'lds-028',
    code: 'RU-LDD-903',
    slug: 'learning-development-strategy-design',
    title: 'Learning & Development Strategy & Design',
    category: 'Human Resources & Talent Management',
    categoryCode: 'hr',
    flagship: false,
    badgeText: 'L&D Architecture',
    badgeClass: 'badge-invoice',
    duration: '5 Days (30 Hours)',
    feeUSD: 2050,
    feeNGN: 2850000,
    prospectusFile: 'Ruach Course Materials/ruach-learning-development-strategy-design-prospectus.pdf',
    targetAudience: 'Chief Learning Officers, L&D Managers, Corporate Training Leads.',
    outcomes: ['Align L&D investments directly with corporate revenue and capability goals.', 'Calculate Training Return on Investment (ROI) using Kirkpatrick models.'],
    agenda: [{ day: 1, title: 'Strategic Training Needs Analysis (TNA)', desc: 'Competency gap mapping and ROI.' }],
    sessions: [
      { id: 'lds-s2', city: 'Abuja, Nigeria', venue: 'Ruach Executive Center, Maitama', dates: '16 Nov - 20 Nov 2026', status: 'Open for Enrolment', statusClass: 'badge-invoice' }
    ]
  },
  {
    id: 'pmc-029',
    code: 'RU-PMC-904',
    slug: 'performance-management-competency-development',
    title: 'Performance Management & Competency Development',
    category: 'Human Resources & Talent Management',
    categoryCode: 'hr',
    flagship: false,
    badgeText: 'Performance & Growth',
    badgeClass: 'badge-invoice',
    duration: '5 Days (30 Hours)',
    feeUSD: 2000,
    feeNGN: 2800000,
    prospectusFile: 'Ruach Course Materials/ruach-performance-management-competency-development-prospectus.pdf',
    targetAudience: 'Performance Appraisal Leads, HR Business Partners, Line Managers.',
    outcomes: ['Construct robust job competency frameworks and 360-degree appraisal systems.', 'Eliminate appraisal rating bias and foster continuous feedback.'],
    agenda: [{ day: 1, title: 'Competency Framework Architecture & KPI Cascading', desc: 'Designing performance metrics.' }],
    sessions: [
      { id: 'pmc-s1', city: 'Port Harcourt, Nigeria', venue: 'Hotel Presidential Suites', dates: '23 Nov - 27 Nov 2026', status: 'Open for Enrolment', statusClass: 'badge-invoice' }
    ]
  },
  {
    id: 'shc-030',
    code: 'RU-SHC-905',
    slug: 'strategic-human-capital-management',
    title: 'Strategic Human Capital Management',
    category: 'Human Resources & Talent Management',
    categoryCode: 'hr',
    flagship: false,
    badgeText: 'Human Capital',
    badgeClass: 'badge-guaranteed',
    duration: '5 Days (30 Hours)',
    feeUSD: 2200,
    feeNGN: 3100000,
    prospectusFile: 'Ruach Course Materials/ruach-strategic-human-capital-management-prospectus.pdf',
    targetAudience: 'HR Directors, Chief Administrative Officers, People & Culture Vice Presidents.',
    outcomes: ['Position HR as a strategic business partner driving enterprise growth.', 'Structure agile human capital policies for hybrid workforces.'],
    agenda: [{ day: 1, title: 'Strategic HR Leadership & Board Alignment', desc: 'Fiduciary HR and business partner models.' }],
    sessions: [
      { id: 'shc-s1', city: 'London, UK', venue: 'Hilton London Bankside', dates: '30 Nov - 04 Dec 2026', status: 'Guaranteed to Run', statusClass: 'badge-guaranteed' }
    ]
  },
  {
    id: 'tar-031',
    code: 'RU-TAR-906',
    slug: 'talent-acquisition-retention-workforce-planning',
    title: 'Talent Acquisition, Retention & Workforce Planning',
    category: 'Human Resources & Talent Management',
    categoryCode: 'hr',
    flagship: false,
    badgeText: 'Talent & Retention',
    badgeClass: 'badge-invoice',
    duration: '5 Days (30 Hours)',
    feeUSD: 2050,
    feeNGN: 2850000,
    prospectusFile: 'Ruach Course Materials/ruach-talent-acquisition-retention-workforce-planning-prospectus.pdf',
    targetAudience: 'Talent Acquisition Heads, Recruitment Leads, Workforce Strategists.',
    outcomes: ['Streamline executive hiring pipelines and candidate assessment centers.', 'Formulate competitive compensation and retention strategies.'],
    agenda: [{ day: 1, title: 'Strategic Workforce Planning & Talent Sourcing', desc: 'Competency-based interviewing.' }],
    sessions: [
      { id: 'tar-s1', city: 'Abuja, Nigeria', venue: 'Ruach Executive Center, Maitama', dates: '07 Dec - 11 Dec 2026', status: 'Open for Enrolment', statusClass: 'badge-invoice' }
    ]
  },

  // --- HSE, SECURITY & EMERGENCY MANAGEMENT ---
  {
    id: 'epc-032',
    code: 'RU-EPC-1001',
    slug: 'emergency-preparedness-crisis-response-recovery',
    title: 'Emergency Preparedness, Crisis Response & Recovery',
    category: 'HSE, Security & Emergency Management',
    categoryCode: 'hse',
    flagship: false,
    badgeText: 'Crisis Management',
    badgeClass: 'badge-guaranteed',
    duration: '5 Days (30 Hours)',
    feeUSD: 2200,
    feeNGN: 3100000,
    prospectusFile: 'Ruach Course Materials/ruach-emergency-preparedness-crisis-response-recovery-prospectus.pdf',
    targetAudience: 'Emergency Response Commanders, Security Directors, Facility Managers, HSE Leads.',
    outcomes: ['Develop robust Incident Command System (ICS) structures and emergency action plans.', 'Conduct crisis simulation drills and media communication protocols.'],
    agenda: [{ day: 1, title: 'Incident Command Systems & Crisis Architecture', desc: 'Emergency response structures.' }],
    sessions: [
      { id: 'epc-s1', city: 'Port Harcourt, Nigeria', venue: 'Hotel Presidential Suites', dates: '12 Oct - 16 Oct 2026', status: 'Guaranteed to Run', statusClass: 'badge-guaranteed' }
    ]
  },
  {
    id: 'hir-033',
    code: 'RU-HIR-1002',
    slug: 'hazard-identification-risk-assessment-control-measures',
    title: 'Hazard Identification, Risk Assessment & Control Measures',
    category: 'HSE, Security & Emergency Management',
    categoryCode: 'hse',
    flagship: false,
    badgeText: 'HIRA Mastery',
    badgeClass: 'badge-invoice',
    duration: '5 Days (30 Hours)',
    feeUSD: 2100,
    feeNGN: 2950000,
    prospectusFile: 'Ruach Course Materials/ruach-hazard-identification-risk-assessment-control-measures-prospectus.pdf',
    targetAudience: 'HSE Engineers, Site Safety Inspectors, Operational Risk Assessors.',
    outcomes: ['Conduct quantitative Job Safety Analysis (JSA) and Bowtie risk assessments.', 'Implement Hierarchy of Controls across high-risk operational environments.'],
    agenda: [{ day: 1, title: 'HIRA Methodologies & Risk Matrix Design', desc: 'Hazard identification tools.' }],
    sessions: [
      { id: 'hir-s1', city: 'Abuja, Nigeria', venue: 'Ruach Executive Center, Maitama', dates: '26 Oct - 30 Oct 2026', status: 'Open for Enrolment', statusClass: 'badge-invoice' }
    ]
  },
  {
    id: 'iir-034',
    code: 'RU-IIR-1003',
    slug: 'incident-investigation-root-cause-analysis',
    title: 'Incident Investigation & Root Cause Analysis',
    category: 'HSE, Security & Emergency Management',
    categoryCode: 'hse',
    flagship: false,
    badgeText: 'Forensic Investigation',
    badgeClass: 'badge-guaranteed',
    duration: '5 Days (30 Hours)',
    feeUSD: 2150,
    feeNGN: 3000000,
    prospectusFile: 'Ruach Course Materials/ruach-incident-investigation-root-cause-analysis-prospectus.pdf',
    targetAudience: 'Safety Investigators, Quality Audit Managers, Operations Supervisors.',
    outcomes: ['Apply 5-Whys, Fishbone (Ishikawa), and Fault Tree Analysis (FTA) for incident investigation.', 'Formulate corrective action plans that prevent recurrence.'],
    agenda: [{ day: 1, title: 'Evidence Preservation & Investigation Protocols', desc: 'Scene management and interviews.' }],
    sessions: [
      { id: 'iir-s1', city: 'Lagos, Nigeria', venue: 'Eko Hotels Conference Suites', dates: '09 Nov - 13 Nov 2026', status: 'Guaranteed to Run', statusClass: 'badge-guaranteed' }
    ]
  },
  {
    id: 'ihs-035',
    code: 'RU-IHS-1004',
    slug: 'integrated-health-safety-environmental-management-systems',
    title: 'Integrated Health, Safety & Environmental Management Systems',
    category: 'HSE, Security & Emergency Management',
    categoryCode: 'hse',
    flagship: false,
    badgeText: 'ISO 45001 & 14001',
    badgeClass: 'badge-guaranteed',
    duration: '5 Days (30 Hours)',
    feeUSD: 2250,
    feeNGN: 3200000,
    prospectusFile: 'Ruach Course Materials/ruach-integrated-health-safety-environmental-management-systems-prospectus.pdf',
    targetAudience: 'HSE Directors, Compliance Managers, Environmental Auditors, Facility Heads.',
    outcomes: ['Structure integrated HSE management systems combining ISO 45001 and ISO 14001.', 'Ensure regulatory compliance and continuous environmental performance improvement.'],
    agenda: [{ day: 1, title: 'ISO 45001 & 14001 High-Level Structure Integration', desc: 'System alignment and policy.' }],
    sessions: [
      { id: 'ihs-s1', city: 'Abuja, Nigeria', venue: 'Ruach Executive Center, Maitama', dates: '23 Nov - 27 Nov 2026', status: 'Guaranteed to Run', statusClass: 'badge-guaranteed' }
    ]
  },
  {
    id: 'psm-036',
    code: 'RU-PSM-1005',
    slug: 'process-safety-management-high-risk-industries',
    title: 'Process Safety Management in High Risk Industries',
    category: 'HSE, Security & Emergency Management',
    categoryCode: 'hse',
    flagship: false,
    badgeText: 'Process Safety',
    badgeClass: 'badge-invoice',
    duration: '5 Days (30 Hours)',
    feeUSD: 2400,
    feeNGN: 3400000,
    prospectusFile: 'Ruach Course Materials/ruach-process-safety-management-high-risk-industries-prospectus.pdf',
    targetAudience: 'Process Engineers, Plant Managers, Safety Controls Engineers, Refinery Supervisors.',
    outcomes: ['Implement OSHA PSM 14-element framework across oil, gas, chemical, and manufacturing facilities.', 'Conduct HAZOP studies and asset integrity monitoring.'],
    agenda: [{ day: 1, title: 'OSHA PSM 14 Elements & Process Safety Culture', desc: 'Process hazard analysis (PHA).' }],
    sessions: [
      { id: 'psm-s1', city: 'Port Harcourt, Nigeria', venue: 'Hotel Presidential Suites', dates: '30 Nov - 04 Dec 2026', status: 'Open for Enrolment', statusClass: 'badge-invoice' }
    ]
  },
  {
    id: 'slo-037',
    code: 'RU-SLO-1006',
    slug: 'safety-leadership-operational-excellence',
    title: 'Safety Leadership & Operational Excellence',
    category: 'HSE, Security & Emergency Management',
    categoryCode: 'hse',
    flagship: false,
    badgeText: 'Safety Leadership',
    badgeClass: 'badge-invoice',
    duration: '5 Days (30 Hours)',
    feeUSD: 2200,
    feeNGN: 3100000,
    prospectusFile: 'Ruach Course Materials/ruach-safety-leadership-operational-excellence-prospectus.pdf',
    targetAudience: 'Operations Vice Presidents, Field Directors, Safety Culture Leads.',
    outcomes: ['Transform corporate safety culture from compliance to active leadership engagement.', 'Reduce Lost Time Injuries (LTIs) through behavioral safety coaching.'],
    agenda: [{ day: 1, title: 'Behavior-Based Safety (BBS) & Visible Safety Leadership', desc: 'Leadership engagement.' }],
    sessions: [
      { id: 'slo-s1', city: 'Dubai, UAE', venue: 'JW Marriott Marquis, Business Bay', dates: '07 Dec - 11 Dec 2026', status: 'Open for Enrolment', statusClass: 'badge-invoice' }
    ]
  },

  // --- PUBLIC POLICY & EXECUTIVE CAPABILITY BRIEF ---
  {
    id: 'cihp-038',
    code: 'RU-ECB-1007',
    slug: 'cihp-erp-executive-capability-brief',
    title: 'CIHP ERP Executive Capability Brief',
    category: 'Public Policy & Government Programmes',
    categoryCode: 'public',
    flagship: false,
    badgeText: 'Executive Brief',
    badgeClass: 'badge-flagship',
    duration: '5 Days (30 Hours)',
    feeUSD: 2500,
    feeNGN: 3600000,
    prospectusFile: 'Ruach Course Materials/cihp_erp_executive_capability_brief.pdf',
    targetAudience: 'Permanent Secretaries, Public Sector Program Directors, DFI Project Coordinators.',
    outcomes: ['Evaluate ERP digital infrastructure capability for public sector programs.', 'Implement transparent governance, beneficiary tracking, and reporting.'],
    agenda: [{ day: 1, title: 'Public Sector ERP Transformation & Capability Assessment', desc: 'Governance and systems.' }],
    sessions: [
      { id: 'cihp-s1', city: 'Abuja, Nigeria', venue: 'Transcorp Hilton Executive Suites', dates: '14 Dec - 18 Dec 2026', status: 'Guaranteed to Run', statusClass: 'badge-guaranteed' }
    ]
  }
];

// 1.5. Official Leadership & Board of Advisors Store
const TEAM_DATA = [
  // --- DIRECTORS & EXECUTIVE MANAGEMENT ---
  {
    id: 'mgt-1',
    name: 'Engr. (Dr) Olukayode Ashaolu',
    role: 'Chief Executive Officer',
    badge: 'CEO',
    category: 'management',
    categoryLabel: 'Executive Management',
    image: 'assets/images/Engr.(Dr) Olukayode Ashaolu.jpg',
    bio: 'Founder & CEO of Ruach Business Consortia Ltd, distinguished management executive and development strategist across agribusiness, energy, and infrastructure.',
    fullBio: [
      'He is a distinguished management executive and development strategist with extensive experience leading complex, high-impact projects across agribusiness, renewable energy, construction, mining, oil & gas, finance and investment, SME development, and sustainable development. He is the Founder and CEO of Ruach Business Consortia Ltd, and has served as a trusted consultant and strategic partner to major national institutions and development-focused agencies.',
      'His consulting expertise spans agriculture, power, mining, oil and gas, digital solutions, healthcare, real estate and financial services.',
      'A visionary leader, Engr. Ashaolu combines technical engineering competence with strategic financial acumen and deep contextual knowledge of Nigeria’s agribusiness and rural development landscape. His proven ability to mobilize resources, build high-level partnerships, and design transformative interventions.',
      'He holds a Ph.D. in Renewable Energy Applications for Agricultural Production, an MBA in Finance & Investments from Ahmadu Bello University, an MSc in Sustainable Energy Technologies & Management from Brunel University (UK), and a B.Eng. in Civil Engineering from the University of Ilorin.',
      'Widely recognized for his expertise in strategic planning, program development, new-market creation, and large-scale sustainable infrastructure delivery, he has advised governments, private sector actors, and development organizations on integrated agriculture, smart irrigation systems, renewable energy deployment, and climate-resilient production systems.',
      'Driven by a strong commitment to nation-building and transformative impact, Dr. Ashaolu continues to champion innovative solutions that enhance food security, expand productive capacity, and strengthen economic competitiveness across Nigeria and Africa.'
    ]
  },
  {
    id: 'mgt-2',
    name: 'Mrs. Busola Ashaolu',
    role: 'Non-Executive Director',
    badge: 'Director',
    category: 'management',
    categoryLabel: 'Executive Management',
    image: 'assets/images/Mrs Busola Ashaolu.jpg',
    bio: 'Accomplished operations executive overseeing Food Chest Inc. (Ruach’s major food processing subsidiary).',
    fullBio: [
      'Busola Ashaolu is an accomplished operations and business management professional with extensive experience spanning agribusiness, finance, compliance, customer service, and corporate operations. She is currently a Non-Executive Director at Ruach Business Consortia and plays a pivotal executive role in overseeing the day-to-day operations of Food Chest Inc., Ruach’s major subsidiary engaged in food processing for both Nigerian and export markets. In this role, she provides strong operational leadership, ensures quality standards, drives efficiency across production and distribution, and supports strategic growth initiatives.',
      'Busola brings a strong background in strategy execution, business operations, performance management, and process optimization, developed through her role as Quality and Performance Supervisory roles at Bhartel and Spanco BP. She has demonstrated capacity in setting KPIs, supervising cross-functional teams, conducting financial and operational analysis, and improving profitability through innovation and market-focused strategies.',
      'Her professional experience also includes roles in financial compliance and regulatory reporting within the foreign exchange sector, as well as quality assurance and customer experience management in the telecommunications industry. These roles have shaped her detail-oriented, systems-driven, and customer-centric approach to leadership.',
      'Busola holds an MBA in Business Administration from Nile University of Nigeria and a BSc in Computer Science from the University of Ilorin. She is recognized for her professionalism, versatility, and commitment to operational excellence and sustainable business growth.'
    ]
  },
  {
    id: 'mgt-3',
    name: 'Hajia Halimat Raji',
    role: 'Non-Executive Director',
    badge: 'Director',
    category: 'management',
    categoryLabel: 'Executive Management',
    image: 'assets/images/Hajia Halimat Raji.jpg',
    bio: 'Seasoned finance executive with 20+ years in Financial Services & Energy (Access Bank, TotalEnergies, TD Bank Canada). Fellow of ICAN & CPA Ontario.',
    fullBio: [
      'Halimat Raji is a seasoned finance professional with over 20 years of experience spanning the Financial Services and Energy sectors, where she has held diverse and progressively senior roles. Her expertise cuts across strategy development, accounting, compliance, internal controls, credit management, budgeting, and financial reporting, positioning her as a well-rounded leader with deep technical and strategic capability.',
      'Halimat is a strategic and results-driven executive with a proven track record in investment decision-making, portfolio optimization, and driving sustainable growth across diverse business portfolios. She is widely recognized for her ability to deliver impactful results by aligning financial discipline with organizational strategy. Her strong business acumen, developed through close collaboration with multiple core business units, enables her to critically evaluate the financial and operational implications of key business decisions and their effect on overall corporate performance.',
      'A visionary leader, Halimat has a strong interest in leveraging financial insight to empower businesses, strengthen governance structures, and foster long-term, sustainable value creation. She brings clarity, rigor, and foresight to complex financial and business challenges. She has demonstrated leadership in her various capacities in several multinational organizations—Access Bank Plc, TotalEnergies & Toronto Dominion Bank, Canada.',
      'Halimat holds a bachelor’s degree in accounting from the University of Ilorin and an MBA in Finance from the University of Manchester. She is a Fellow of the Institute of Chartered Accountants of Nigeria (ICAN), a member of ACCA UK, and a Certified Public Accountant (CPA), Ontario, reflecting her strong global professional standing.'
    ]
  },
  {
    id: 'mgt-4',
    name: 'Engr. (Dr) Yunus Hamuda',
    role: 'International Director',
    badge: 'Intl Director',
    category: 'management',
    categoryLabel: 'Executive Management',
    image: 'assets/images/Eng.(Dr) Yunus Hamuda.jpg',
    bio: 'Distinguished construction, project management, and oil & gas logistics professional with over 22 years of international experience based in Istanbul.',
    fullBio: [
      'Dr. Eng. Yunus Hamuda is a distinguished construction, project management, and oil & gas logistics professional with over 22 years of international experience across infrastructure development, industrial operations, energy logistics, consultancy, and academia. Based in Istanbul, he has successfully led multidisciplinary projects within the construction, oil and gas, and industrial sectors, delivering operational excellence through strategic planning, cost optimization, risk management, and effective stakeholder coordination.',
      'His expertise spans project management, construction management, oil and gas facilities, offshore pipeline engineering, logistics coordination, procurement strategy, contract administration, supply chain operations, and facility management. Dr. Hamuda is highly experienced in managing complex logistics frameworks that support upstream and downstream oil and gas operations, ensuring efficiency, regulatory compliance, safety, and uninterrupted project execution.',
      'An internationally recognized trainer and consultant, he delivers executive and technical training in Agile Project Management, PRINCE2 methodology, ISO management systems, HSE, crisis management, procurement, arbitration, and organizational leadership. He has also contributed extensively to academia as a lecturer, researcher, and supervisor for Master’s and PhD students in engineering and management disciplines.',
      'Dr. Hamuda combines technical expertise with strategic leadership, emotional intelligence, and a commitment to sustainable development, making him a valuable advisor and practitioner across the engineering, energy, and logistics industries.'
    ]
  },

  // --- RUACH BOARD OF ADVISORS ---
  {
    id: 'adv-1',
    name: 'Dr. Kayode John Akinade, MBA, MCP, PhD',
    role: 'Board of Advisors',
    badge: 'Advisor',
    category: 'board',
    categoryLabel: 'Board of Advisors',
    image: 'assets/images/Dr. Kayode John Akınade, MBA, MCP, PhD.jpg',
    bio: 'Founder of Glovis Almonds Group & former MD/CEO of Microvis MFB for a decade. Seasoned financial services leader and entrepreneur.',
    fullBio: [
      'He is a seasoned Nigerian financial services leader and entrepreneur, currently serving as the Founder, Glovis Almonds Group. He has played a central role in driving the strategic vision, growth, and development of Microvis MFB since its establishment in 2015, focusing on expanding access to finance for micro, small & medium enterprises (MSMEs), underbanked communities, and individual clients across Nigeria serving for a Decade as its MD/CEO.',
      'He holds advanced academic credentials including an MBA, professional certification (MCP), and a PhD, reflecting his strong commitment to both leadership excellence and lifelong learning. Kayode’s career spans over two decades in banking and financial services, where he has built deep expertise in inclusive banking, entrepreneurship, and business development.',
      'Under his leadership, Microvis MFB has grown steadily as a licensed financial institution regulated by the Central Bank of Nigeria (CBN), providing a broad range of financial products and services to diverse clientele, particularly focusing on economic empowerment and financial inclusion.',
      'Beyond his primary role, Dr. Akinade is also associated with several entrepreneurial initiatives and social impact activities, such as Glovis Multi Inc. and GELD Foundation, showcasing his broader interest in business development and community empowerment.',
      'He is recognized by colleagues, clients, and industry peers as a visionary leader committed to excellence, resilience, and ethical leadership, often celebrated publicly on corporate and social platforms.'
    ]
  },
  {
    id: 'adv-2',
    name: 'Mr. Oluwabunmi Ajilore',
    role: 'Board of Advisors',
    badge: 'Advisor',
    category: 'board',
    categoryLabel: 'Board of Advisors',
    image: 'assets/images/Mr. Oluwabunmi Ajilore.jpg',
    bio: 'Food security expert & strategic foresight specialist at Global Center on Adaptation (GCA), Visiting Faculty at Lagos Business School.',
    fullBio: [
      'He is a food security expert and strategic foresight specialist working at the intersection of food systems, anticipatory governance, early warning systems and early decision support, climate resilience, anticipatory / long-term decision-making. He serves as a Food Security Specialist at the Global Center on Adaptation (GCA), supporting governments and international partners—including the World Bank, AfDB, IFAD, Islamic Development Bank and CGIAR Centers—to design and implement climate-resilient agrifood programs across Africa.',
      'His work has helped integrate climate intelligence and digital climate advisory services in major agrifood systems investments across Africa.',
      'Bunmi is a Visiting Faculty in Strategic Foresight at Lagos Business School, where he teaches executives, managers and decision makers on anticipatory systems, systems thinking, scenarios, and practical foresight tools for strategic decision-making.',
      'He is also the Founder of the Centre for Anticipation, Strategic Insights & Preparedness (CASIP)—a new initiative advancing foresight, early warning, and preparedness capabilities for institutions and emerging leaders in Nigeria.',
      'Bunmi previously served as a Foresight Adviser at the Global Forum on Agricultural Research and Innovation (GFAR) Secretariat at the UN Food and Agriculture Organization (FAO) in Rome, leading global futures work for agricultural systems. He has consulted for UNDP Regional Bureau for Asia-Pacific also as a Foresight Adviser, where he co-designed a playbook for integrating strategic foresight and anticipatory systems into program design and pipeline program development for UNDP country offices across the region.',
      'He has consulted for the Commonwealth Secretariat, CIAT, governments institutions and has authored and co-authored journal articles, book chapters, foresight papers, global reports, and blogs. His work has been published by the Journal of Futures Studies, AGRA, GFAR, and other international platforms.',
      'He is an alumnus of the Center for Strategic and International Studies (CSIS) AILA Fellowship in Washington D.C., and a recipient of the SOIF NGFP Foresight Practitioner Global/Africa Prizes.'
    ]
  },
  {
    id: 'adv-3',
    name: 'Mrs. Abiola Osareimen Oduwusi',
    role: 'Board of Advisors',
    badge: 'Advisor',
    category: 'board',
    categoryLabel: 'Board of Advisors',
    image: 'assets/images/Mrs Abiola Osareimen Oduwusi.jpg',
    bio: 'Distinguished educationist, Founder & Executive Director of Lela Blossom Schools, Abuja, World Bank/YouWIN Award winner & Lagos Business School Alumna.',
    fullBio: [
      'She is a distinguished educationist, social entrepreneur, and institutional leader with over two decades of experience in teaching, academic administration, and school management. She is the Founder and Executive Director of Lela Blossom Schools, Abuja, a faith-based educational institution recognized for its strong academic standards, character development, and holistic approach to child education. Since establishing the school in 2009, Abiola has successfully expanded its curriculum, strengthened faculty capacity, and built a nurturing learning environment that supports both intellectual excellence and moral formation.',
      'A recipient of the World Bank/Federal Government YouWIN Award (2012/2013), Abiola has demonstrated outstanding innovation and leadership in educational entrepreneurship. She holds a B.Sc. in Economics and Mathematics from the University of Benin, a Postgraduate Diploma in Education, and is currently pursuing a master’s degree in organizational leadership at ECWA Theological Seminary. She is also an alumna of the Goldman Sachs Women’s Enterprise and Leadership Programme at Lagos Business School.',
      'Abiola has participated in several professional development programs in Nigeria, South Africa, Dubai, and the United States, equipping her with a global perspective on quality education and leadership. She brings to the Ruach Business Consortia Board of Advisors deep expertise in leadership development, institutional governance, human capital development, and values-driven organizational growth.'
    ]
  },
  {
    id: 'adv-4',
    name: 'Mr. Taopheek Babayeju',
    role: 'Board of Advisors',
    badge: 'Advisor',
    category: 'board',
    categoryLabel: 'Board of Advisors',
    image: 'assets/images/Mr Taopheek Babayeju.jpg',
    bio: 'Transformation expert, CEO of iCentra, Forbes contributor, founder of ProMaCon, and PMI Eric Jenett Person of the Year (2024).',
    fullBio: [
      'Mr Taopheek Babayeju is a seasoned transformation expert, dynamic leadpreneur, and published author with over two decades of diverse professional experience spanning IT, telecoms, finance, agriculture, health, education, government, and development sectors.',
      'His entrepreneurial drive led to the founding of ICTech and subsequently The Phone Clinic, his first successful venture. In 2009, he established iCentra, a business and technology solutions firm that has since grown into a global organization with operations in the United States, the United Kingdom, and Nigeria. As CEO, he has led high-impact transformation programs and multi-million-dollar portfolios, specializing in strategy, digital and agile transformation, PMO delivery, risk management, technology consulting, information security, and organizational change.',
      'Taopheek holds an MBA from Lagos Business School and completed executive programs at Harvard Business School and IESE Business School. He also trained in telecommunications network and infrastructure engineering at the United Kingdom Telecommunications Academy (UKTA). He is a Forbes contributor, BusinessDay columnist, thought leader, and author.',
      'Passionate about social impact, he pioneered Nigeria’s first National Project Management Conference (ProMaCon) in 2009 and later established the ProMaCon Project Management Foundation to advance project management practice across Africa. His leadership earned him the PMI Most Outstanding Contribution to Project Management Award (2010) and the prestigious PMI Eric Jenett Person of the Year Award (2024).',
      'Taopheek also co-founded initiatives such as LeadPreneur and TAB W40, which empower individuals and communities through leadership and enterprise development. He serves on multiple boards and continues to inspire a new generation of leaders committed to excellence, innovation, and sustainable impact.'
    ]
  },
  {
    id: 'adv-5',
    name: 'Mrs. Rose Saiki-Onaiyi',
    role: 'Board of Advisors',
    badge: 'Advisor',
    category: 'board',
    categoryLabel: 'Board of Advisors',
    image: 'assets/images/Mrs. Rose Saiki-Onaiyi.jpg',
    bio: 'Aviation and travel professional with 10+ years experience, Founder & CEO of Stanzar Travels & Tours Ltd, certified IATA travel expert.',
    fullBio: [
      'Mrs. Rose Saiki-Onaiyi is a highly accomplished aviation and travel professional with over a decade of experience across airline operations, regulatory compliance, and corporate travel management. She began her professional career with Lufthansa Airways in Germany, where she developed strong competencies in international ticketing, reservations, customer service, and airline operations within a global aviation environment. She further strengthened her industry expertise at the Nigerian Civil Aviation Authority (NCAA), gaining valuable exposure to aviation regulation, safety oversight, and operational standards.',
      'She is the Founder and Chief Executive Officer of Stanzar Travels & Tours Ltd, a client-centered travel management company known for delivering seamless, end-to-end travel solutions. Under her leadership, the company provides comprehensive services including flight ticketing, hotel reservations, travel planning, logistics coordination, destination management, and corporate travel support. Mrs. Saiki-Onaiyi has successfully managed travel portfolios for reputable organizations such as NIRSAL Plc, Electron Nigeria Limited, and Permanent Secretary Development Limited, Ruach Business earning a reputation for reliability and service excellence.',
      'A certified travel professional, she holds an IATA Travel Agency Functionality Certificate and is an active member of IATA and the National Association of Nigerian Travel Agencies (NANTA). She is widely respected for her professionalism, attention to detail, and commitment to delivering high-quality travel experiences tailored to client needs.'
    ]
  },
  {
    id: 'adv-6',
    name: 'Mr. Ifedolapo A. Falope',
    role: 'Board of Advisors',
    badge: 'Advisor',
    category: 'board',
    categoryLabel: 'Board of Advisors',
    image: 'assets/images/Ifedolapo A. Falope.jpg',
    bio: 'Public policy & government relations expert, Senior Government Liaison Officer at Nigerian Economic Summit Group (NESG) with 17+ years experience.',
    fullBio: [
      'Mr. Ifedolapo Falope is a seasoned public policy and government relations professional with over 17 years of progressive work experience, having been active in the workforce since 2007. Since 2014, his professional focus has been on public policy engagement, government relations, and strategic stakeholder management, working at the intersection of policy, governance, and development. His experience spans public policy formulation, analysis, and implementation support, as well as structured public policy advocacy aimed at influencing reforms, strengthening institutions, and improving development outcomes.',
      'He holds a master’s degree in International Affairs and Diplomacy from Ahmadu Bello University, Zaria, which has provided a strong foundation for his work in governance, diplomacy, and public sector engagement. Mr. Falope currently serves as a Senior Government Liaison Officer at the Nigerian Economic Summit Group (NESG), where he has spent the last seven years supporting high-level engagement between government, the private sector, and other key stakeholders. In this role, he facilitates policy dialogue, coordinates strategic engagements with ministries, departments, and agencies, and supports consensus-building on critical national development priorities.',
      'Over the course of his career, he has been a member of several high-level presidential and ministerial policy committees, contributing technical input, coordination support, and stakeholder perspectives to the development, review, and reform of over 15 national public policies. In addition to policy design and analysis, Mr. Falope has led and supported public policy advocacy efforts, engaging senior policymakers, legislators, regulators, and development partners to advance evidence-based reforms and promote policy adoption and implementation.',
      'He is driven by a strong commitment to inclusive growth, effective governance, and sustainable socio-economic development.'
    ]
  }
];

// 1.6. Enterprise Business Analytics Solutions (eBAS) & Business Consulting Store
const EBAS_DOMAINS_DATA = [
  {
    id: 'ebas-finance',
    name: 'Finance & Financial Performance',
    icon: 'fa-chart-pie',
    tag: 'Financial Intelligence',
    desc: 'Integrated budget expenditure monitoring, revenue & cost dashboards, budget-versus-actual analysis, and financial KPI scorecards.',
    features: ['Budget & expenditure tracking', 'Revenue & cost performance', 'Real-time financial dashboards', 'Budget-vs-actual variance analysis']
  },
  {
    id: 'ebas-ops',
    name: 'Operations & Workflow Monitoring',
    icon: 'fa-gears',
    tag: 'Operational Intelligence',
    desc: 'Operational KPIs, productivity tracking, service delivery performance, bottleneck detection, and automated exception escalations.',
    features: ['Operational KPI dashboards', 'Productivity & workflow tracking', 'Service delivery monitoring', 'Exception & escalation alerts']
  },
  {
    id: 'ebas-hr',
    name: 'Human Resources & People Management',
    icon: 'fa-users-gear',
    tag: 'Workforce Intelligence',
    desc: 'Workforce analytics, employee performance indicators, attendance tracking, and capacity building records.',
    features: ['Workforce & staffing analytics', 'Employee KPI scorecards', 'Attendance & activity tracking', 'Training & competency records']
  },
  {
    id: 'ebas-assets',
    name: 'Asset Management & Lifecycle Tracking',
    icon: 'fa-boxes-stacked',
    tag: 'Asset Intelligence',
    desc: 'Fixed asset registers, asset utilization metrics, maintenance schedules, lifecycle monitoring, and status tracking.',
    features: ['Real-time asset registers', 'Asset utilization & uptime', 'Preventive maintenance schedules', 'Location & status tracking']
  },
  {
    id: 'ebas-sales',
    name: 'Sales, Customers & Business Development',
    icon: 'fa-briefcase',
    tag: 'Commercial Intelligence',
    desc: 'Customer account intelligence, sales pipeline monitoring, onboarding workflows, and revenue opportunity tracking.',
    features: ['Customer & account intelligence', 'Sales pipeline monitoring', 'Client onboarding workflows', 'Opportunity & revenue tracking']
  },
  {
    id: 'ebas-projects',
    name: 'Projects & Programme MEL Management',
    icon: 'fa-diagram-project',
    tag: 'Programme & MEL Intelligence',
    desc: 'Milestone deliverables, budget utilization, Monitoring, Evaluation & Learning (MEL) dashboards, and beneficiary tracking.',
    features: ['Project milestone tracking', 'MEL & impact dashboards', 'Beneficiary & stakeholder databases', 'Risk & issue monitoring']
  },
  {
    id: 'ebas-supply',
    name: 'Procurement & Supply Chain',
    icon: 'fa-truck-ramp-box',
    tag: 'Supply Chain Intelligence',
    desc: 'Procurement pipeline monitoring, supplier scorecards, PO status, inventory visibility, and delivery tracking.',
    features: ['Procurement pipeline tracking', 'Supplier performance scorecards', 'Inventory & stock visibility', 'Delivery & fulfillment tracking']
  },
  {
    id: 'ebas-workflows',
    name: 'Intelligent Digital Workflows',
    icon: 'fa-network-wired',
    tag: 'Workflow Automation',
    desc: 'Digital approvals, task escalations, document workflows, electronic agreements, and automated management reporting.',
    features: ['Paperless digital approvals', 'Task assignment & escalation', 'Document & contract workflows', 'Automated management reporting']
  }
];

// 1.7. Target Markets & Sectors Store
const TARGET_MARKETS_DATA = [
  {
    title: 'Finance Corporations & Banking',
    icon: 'fa-building-columns',
    desc: 'Empowering banks and financial institutions with portfolio intelligence, risk monitoring, customer analytics, and real-time operational visibility.'
  },
  {
    title: 'Education & Institutional Networks',
    icon: 'fa-graduation-cap',
    desc: 'Universities, colleges, and schools requiring integrated management of student records, staff, assets, academic operations, and finance.'
  },
  {
    title: 'Healthcare Networks & Hospitals',
    icon: 'fa-hospital',
    desc: 'Hospitals and healthcare programs requiring visibility across clinical operations, personnel, medical assets, supplies, and patient outcomes.'
  },
  {
    title: 'Oil & Gas Services & Logistics',
    icon: 'fa-gas-pump',
    desc: 'Energy service operators, logistics providers, and field-based firms requiring integrated tracking of assets, HSE compliance, and operations.'
  },
  {
    title: 'Development Finance Institutions (DFIs)',
    icon: 'fa-hand-holding-dollar',
    desc: 'DFIs and financing programs requiring portfolio intelligence, beneficiary tracking, disbursement monitoring, and impact measurement.'
  },
  {
    title: 'Corporate & Commercial Businesses',
    icon: 'fa-chart-line',
    desc: 'Enterprises seeking integrated management visibility across finance, HR, operations, supply chain, projects, and strategic performance.'
  },
  {
    title: 'Development & NGO Organisations',
    icon: 'fa-people-roof',
    desc: 'Donor-funded programs, NGOs, and development organizations managing complex portfolios, field activities, budgets, and beneficiary impact.'
  }
];

// 1.8. Core Values Store
const CORE_VALUES_DATA = [
  {
    num: '01',
    title: 'Excellence',
    icon: 'fa-award',
    desc: 'We strive for the highest standards in every service we deliver, ensuring quality, professionalism, and outstanding results for our clients.'
  },
  {
    num: '02',
    title: 'Integrity',
    icon: 'fa-shield-heart',
    desc: 'We conduct our business with honesty, transparency, and accountability, building lasting relationships founded on mutual trust.'
  },
  {
    num: '03',
    title: 'Innovation',
    icon: 'fa-lightbulb',
    desc: 'We embrace creativity and forward-thinking approaches to develop practical solutions that address evolving business challenges.'
  },
  {
    num: '04',
    title: 'Enterprise Driven',
    icon: 'fa-rocket',
    desc: 'We are realists who firmly believe that achieving transformative change requires the active development and participation of all stakeholders.'
  },
  {
    num: '05',
    title: 'Collaboration',
    icon: 'fa-handshake',
    desc: 'We believe that strong partnerships, teamwork, and shared vision are essential to achieving sustainable success and collective growth.'
  }
];

// 1.9. Strategic Partners Store (With Institutional Logos & Badges)
const PARTNERS_DATA = [
  { name: 'Bank of Industry', type: 'Development Finance Institution', logo: 'Partners/bank_of_industry_limited_logo.jfif', icon: 'fa-building-columns', color: '#1E3A8A', badge: 'BOI' },
  { name: 'Sterling Bank Plc', type: 'Commercial Banking Partner', logo: 'Partners/sterling-bank-plc-logo-png_seeklogo-510247.png', icon: 'fa-building', color: '#DC2626', badge: 'STERLING' },
  { name: 'ProvidusBank', type: 'Financial Institution', logo: 'Partners/09c66ba0bb9a49fbe28afda33e652529.png', icon: 'fa-landmark-dome', color: '#4F46E5', badge: 'PROVIDUS' },
  { name: 'iCentra', type: 'Tech & Advisory', logo: 'Partners/images.png', icon: 'fa-microchip', color: '#0D9488', badge: 'ICENTRA' },
  { name: 'Food Chest Inc.', type: 'Agribusiness & Logistics', logo: 'Partners/Food Chest.png', icon: 'fa-wheat-awn', color: '#16A34A', badge: 'FOODCHEST' },
  { name: 'Lela Blossom Schools', type: 'Educational Network', logo: 'Partners/Lela Blossom Schools.jfif', icon: 'fa-graduation-cap', color: '#D97706', badge: 'LELA' },
  { name: 'Glovis Almonds Properties', type: 'Enterprise Real Estate', logo: 'Partners/Glovis Almonds Properties.png', icon: 'fa-city', color: '#2563EB', badge: 'GLOVIS' },
  { name: 'Judicial Council of Nigeria', type: 'Public Sector Governance', logo: 'Partners/Judicial Council of Nigeria.jfif', icon: 'fa-scale-balanced', color: '#15803D', badge: 'JCN' },
  { name: 'DataScribe Analytics', type: 'Data Intelligence', logo: 'Partners/DataScribe Analytics.jfif', icon: 'fa-chart-network', color: '#7C3AED', badge: 'DATASCRIBE' },
  { name: 'GrandVille Medical Group', type: 'Healthcare Network', logo: 'Partners/GrandVille Medical Group.jfif', icon: 'fa-hospital-user', color: '#E11D48', badge: 'GRANDVILLE' },
  { name: 'Scope Training', type: 'Executive Education', logo: 'Partners/Scope Training.jfif', icon: 'fa-book-open-reader', color: '#2A5235', badge: 'SCOPE' },
  { name: 'Celebrations', type: 'Corporate Partner', logo: 'Partners/Celebrations.jfif', icon: 'fa-gifts', color: '#C026D3', badge: 'CELEBRATIONS' }
];

// 2. Application Global State
const APP_STATE = {
  currentCategoryFilter: 'all',
  currentVenueFilter: 'all',
  currentMonthFilter: 'all',
  currentSearchQuery: '',
  selectedCourse: null,
  selectedSession: null,
  invoices: JSON.parse(localStorage.getItem('ruach_invoices') || '[]'),
  enrolments: JSON.parse(localStorage.getItem('ruach_enrolments') || '[]'),
  mailingList: JSON.parse(localStorage.getItem('ruach_mailing_list') || '[]')
};

// 3. Document Initializer
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  renderMegaMenu();
  renderFeaturedCourses();
  renderScheduleCourses();
  renderCategoriesGrid();
  renderConsultingSection();
  renderTargetMarkets();
  renderCoreValues();
  renderPartners();
  renderTeamCarousel();
  setupSearchControls();
  setupModalListeners();
  renderAdminDashboard();

  // Route hash & window resize check
  window.addEventListener('hashchange', handleHashRouting);
  window.addEventListener('resize', () => renderTeamCarousel());
  handleHashRouting();
});

// 4. Navigation & Route Handler (Streamlined SPA Router)
function initNavigation() {
  const mobileToggle = document.getElementById('mobileNavToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      mobileToggle.innerHTML = navMenu.classList.contains('active') ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
    });
  }
}

function handleHashRouting() {
  closeAllModals();
  const hash = window.location.hash || '#home';
  const views = ['home', 'consulting', 'training', 'leadership', 'about', 'contact', 'admin'];

  // Route alias mapping
  let activeView = 'home';
  const cleanHash = hash.replace('#', '');

  if (views.includes(cleanHash)) {
    activeView = cleanHash;
  } else if (cleanHash === 'programmes' || cleanHash === 'schedule' || cleanHash === 'target-markets') {
    activeView = 'training';
  } else if (cleanHash === 'team' || cleanHash === 'board') {
    activeView = 'leadership';
  } else if (cleanHash === 'why-us') {
    activeView = 'about';
  }

  views.forEach(view => {
    const el = document.getElementById(`view-${view}`);
    if (el) {
      if (view === activeView) {
        el.style.display = 'block';
      } else {
        el.style.display = 'none';
      }
    }
  });

  // Highlight active nav link
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
    const href = link.getAttribute('href');
    if (href === `#${activeView}`) {
      link.classList.add('active');
    }
  });

  // Close mobile menu if open
  const navMenu = document.getElementById('navMenu');
  const mobileToggle = document.getElementById('mobileNavToggle');
  if (navMenu && navMenu.classList.contains('active')) {
    navMenu.classList.remove('active');
    if (mobileToggle) mobileToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 5. Mega Menu Renderer
function renderMegaMenu() {
  const grids = document.querySelectorAll('.mega-menu-grid');
  if (!grids || grids.length === 0) return;

  const categories = [
    { name: 'AI & Digital Transformation', code: 'tech', icon: '<i class="fa-solid fa-laptop-code"></i>', items: ['Intelligent Process Automation', 'Data Analytics & BI', 'Cybersecurity Governance'] },
    { name: 'Finance & Risk Management', code: 'finance', icon: '<i class="fa-solid fa-chart-line"></i>', items: ['Financial Risk Management', 'Internal Control Systems', 'Treasury & Liquidity'] },
    { name: 'Leadership & Exec Strategy', code: 'leadership', icon: '<i class="fa-solid fa-user-tie"></i>', items: ['High-Performance Leadership', 'Strategic Governance', 'Executive Presence'] },
    { name: 'Project & Procurement', code: 'project', icon: '<i class="fa-solid fa-diagram-project"></i>', items: ['Agile Project Management', 'Contract & Claims Management', 'Public Private Partnerships'] },
    { name: 'Human Resource Management', code: 'hr', icon: '<i class="fa-solid fa-users"></i>', items: ['Strategic Talent Analytics', 'L&D Management', 'Performance Management'] },
    { name: 'Operations & Quality Control', code: 'operations', icon: '<i class="fa-solid fa-gears"></i>', items: ['Lean Six Sigma Controls', 'Root Cause Analysis', 'Operational Excellence'] },
    { name: 'Oil & Gas Fiscal Economics', code: 'energy', icon: '<i class="fa-solid fa-bolt"></i>', items: ['Petroleum Economics', 'PSC Negotiations', 'Energy Transition Strategy'] },
    { name: 'HSE & Emergency Safety', code: 'hse', icon: '<i class="fa-solid fa-shield-halved"></i>', items: ['ISO 45001 Compliance', 'Emergency Response', 'Crisis Management'] }
  ];

  const html = categories.map(cat => `
    <div class="mega-menu-category" onclick="window.location.href='trainings.html#schedule'; filterByCategory('${cat.code}');">
      <div class="mega-category-header">
        <span class="mega-category-icon">${cat.icon}</span>
        <span style="font-weight: 700; color: var(--primary-navy); font-size: 0.86rem;">${cat.name}</span>
      </div>
      <div class="mega-course-list" style="display: flex; flex-direction: column; gap: 0.35rem; margin-top: 0.5rem;">
        ${cat.items.map(item => `<a href="trainings.html#schedule" onclick="filterByCategory('${cat.code}')" class="mega-course-link" style="font-size: 0.78rem; color: var(--text-muted); text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='var(--primary-green)'" onmouseout="this.style.color='var(--text-muted)'">&bull; ${item}</a>`).join('')}
      </div>
    </div>
  `).join('');

  grids.forEach(g => g.innerHTML = html);
}

// 6. Featured Courses Renderer
function renderFeaturedCourses() {
  const container = document.getElementById('featuredCoursesGrid');
  if (!container) return;

  const flagships = COURSES_DATA.filter(c => c.flagship);
  container.innerHTML = flagships.map(course => createCourseCardHTML(course)).join('');
}

// 7. Training Schedule Renderer (With Side-Filter Logic)
function renderScheduleCourses() {
  const container = document.getElementById('scheduleCoursesList');
  if (!container) return;

  let filtered = COURSES_DATA.filter(course => {
    // Category filter
    if (APP_STATE.currentCategoryFilter !== 'all' && course.categoryCode !== APP_STATE.currentCategoryFilter) {
      return false;
    }
    // Search query
    if (APP_STATE.currentSearchQuery) {
      const q = APP_STATE.currentSearchQuery.toLowerCase();
      const matchTitle = course.title.toLowerCase().includes(q);
      const matchCat = course.category.toLowerCase().includes(q);
      const matchVenue = course.sessions.some(s => s.city.toLowerCase().includes(q));
      if (!matchTitle && !matchCat && !matchVenue) return false;
    }
    // Venue filter
    if (APP_STATE.currentVenueFilter !== 'all') {
      const hasVenue = course.sessions.some(s => s.city.toLowerCase().includes(APP_STATE.currentVenueFilter.toLowerCase()));
      if (!hasVenue) return false;
    }
    return true;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 4rem 1rem; background: #FFF; border-radius: 12px; border: 1px dashed #CBD5E1;">
        <h3 style="color: var(--primary-navy); margin-bottom: 0.5rem;">No Courses Found Matching Filters</h3>
        <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 1.5rem;">Try adjusting your search criteria, venue selection, or clearing active filters.</p>
        <button class="btn btn-primary" onclick="resetFilters()">Reset All Filters</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(course => createScheduleCardHTML(course)).join('');
}

// Helper: Course Card HTML (Card Grid View)
function createCourseCardHTML(course) {
  const nextSession = course.sessions[0] || { city: 'Abuja, Nigeria', dates: 'TBA', venue: 'Ruach Center' };

  return `
    <div class="course-card">
      <div class="card-header">
        <span class="category-tag">${course.category}</span>
        <span class="badge-ribbon ${course.badgeClass}">${course.badgeText}</span>
      </div>
      <div class="card-body">
        <div class="course-code">${course.code} &bull; ${course.duration}</div>
        <h3 class="course-title" onclick="openCourseModal('${course.id}')">${course.title}</h3>
        <div class="course-meta">
          <div class="meta-item">
            <i class="fa-solid fa-location-dot" style="color: var(--primary-green);"></i>
            <span><strong>Location:</strong> ${nextSession.city}</span>
          </div>
          <div class="meta-item">
            <i class="fa-solid fa-calendar-days" style="color: var(--primary-green);"></i>
            <span><strong>Date:</strong> ${nextSession.dates}</span>
          </div>
        </div>
        <p class="course-outcomes-brief">${course.outcomes[0]}</p>
      </div>
      <div class="card-footer">
        <div class="price-tag">
          <span class="price-amount">₦${(course.feeNGN / 1000000).toFixed(1)}M</span>
          <span class="price-label">$${course.feeUSD.toLocaleString()} USD</span>
        </div>
        <div class="card-actions" style="display: flex; gap: 0.4rem; flex-wrap: wrap;">
          <button class="btn btn-lime btn-sm" onclick="openProspectusModal('${course.id}')" title="Download Prospectus PDF"><i class="fa-solid fa-file-pdf"></i> Prospectus</button>
          <button class="btn btn-outline-navy btn-sm" onclick="openCourseModal('${course.id}')">Details</button>
          <button class="btn btn-primary btn-sm" onclick="openEmployerInvoiceModal('${course.id}', '${nextSession.id}')">Invoice</button>
        </div>
      </div>
    </div>
  `;
}

// Helper: Schedule Card HTML (Horizontal Schedule List View)
function createScheduleCardHTML(course) {
  return `
    <div style="background: #FFF; border: 1px solid var(--border-light); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem; box-shadow: var(--shadow-sm); transition: var(--transition-fast);">
      <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 1rem; flex-wrap: wrap; margin-bottom: 1rem;">
        <div>
          <span class="category-tag" style="margin-bottom: 0.5rem; display: inline-block;">${course.category}</span>
          <h3 style="font-size: 1.25rem; color: var(--primary-navy); cursor: pointer;" onclick="openCourseModal('${course.id}')">${course.title}</h3>
          <p style="font-size: 0.82rem; color: var(--text-muted); font-weight: 600;">Code: ${course.code} &bull; Duration: ${course.duration}</p>
        </div>
        <div style="text-align: right;">
          <div style="font-size: 1.35rem; font-weight: 800; color: var(--primary-navy);">₦${(course.feeNGN / 1000000).toFixed(1)}M</div>
          <div style="font-size: 0.75rem; color: var(--text-muted); font-weight: 600;">($${course.feeUSD.toLocaleString()} USD / Delegate)</div>
        </div>
      </div>

      <div style="background: var(--bg-slate); border-radius: 8px; padding: 1rem; margin-bottom: 1rem;">
        <h4 style="font-size: 0.85rem; text-transform: uppercase; color: var(--primary-navy); margin-bottom: 0.75rem;">Scheduled Physical Sessions:</h4>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 0.75rem;">
          ${course.sessions.map(s => `
            <div style="background: #FFF; border: 1px solid var(--border-light); border-radius: 6px; padding: 0.75rem; display: flex; justify-content: space-between; align-items: center;">
              <div>
                <div style="font-size: 0.85rem; font-weight: 700; color: var(--primary-navy);">${s.city}</div>
                <div style="font-size: 0.78rem; color: var(--text-muted);">${s.dates}</div>
                <div style="font-size: 0.72rem; color: #475569;">${s.venue}</div>
              </div>
              <div style="display: flex; flex-direction: column; gap: 0.3rem; align-items: flex-end;">
                <span class="badge-ribbon ${s.statusClass}">${s.status}</span>
                <button style="font-size: 0.75rem; color: var(--accent-red); font-weight: 700; text-decoration: underline;" onclick="openEmployerInvoiceModal('${course.id}', '${s.id}')">Select Session</button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <div style="display: flex; justify-content: space-between; align-items: center; gap: 1rem; flex-wrap: wrap;">
        <div style="font-size: 0.85rem; color: var(--text-muted);">
          <strong>Dual Conversion Options:</strong> Self-Funded Enrolment OR Employer Pro-Forma Invoice
        </div>
        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
          <button class="btn btn-lime btn-sm" onclick="openProspectusModal('${course.id}')"><i class="fa-solid fa-file-pdf"></i> Download Prospectus</button>
          <button class="btn btn-outline-navy btn-sm" onclick="openSelfFundedPaymentModal('${course.id}')">Pay Online (Self-Funded)</button>
          <button class="btn btn-primary btn-sm" onclick="openEmployerInvoiceModal('${course.id}')">Request Employer Invoice</button>
        </div>
      </div>
    </div>
  `;
}

// 8. Categories Grid Renderer
function renderCategoriesGrid() {
  const container = document.getElementById('categoriesGrid');
  if (!container) return;

  const cats = [
    { name: 'AI & Digital Transformation', code: 'tech', icon: 'fa-laptop-code', count: '12 Courses' },
    { name: 'Finance & Risk Management', code: 'finance', icon: 'fa-chart-line', count: '15 Courses' },
    { name: 'Leadership & Exec Strategy', code: 'leadership', icon: 'fa-user-tie', count: '18 Courses' },
    { name: 'Project & Procurement', code: 'project', icon: 'fa-diagram-project', count: '14 Courses' },
    { name: 'Human Resource Management', code: 'hr', icon: 'fa-users-gear', count: '10 Courses' },
    { name: 'Operations & Quality Control', code: 'operations', icon: 'fa-gears', count: '9 Courses' },
    { name: 'Oil & Gas Fiscal Economics', code: 'energy', icon: 'fa-oil-well', count: '11 Courses' },
    { name: 'HSE & Emergency Safety', code: 'hse', icon: 'fa-shield-halved', count: '8 Courses' },
    { name: 'Public Sector Governance', code: 'governance', icon: 'fa-building-columns', count: '10 Courses' },
    { name: 'Strategy & Communications', code: 'strategy', icon: 'fa-bullhorn', count: '9 Courses' }
  ];

  container.innerHTML = cats.map(c => `
    <div class="category-card" onclick="filterByCategory('${c.code}')">
      <div class="category-icon-wrapper">
        <i class="fa-solid ${c.icon}"></i>
      </div>
      <h3 class="category-card-title">${c.name}</h3>
      <span class="category-card-count">${c.count}</span>
    </div>
  `).join('');
}

// 9. Search & Filter Controls Setup
function setupSearchControls() {
  const searchInput = document.getElementById('heroSearchInput');
  const subjectSelect = document.getElementById('heroSubjectSelect');
  const venueSelect = document.getElementById('heroVenueSelect');
  const searchBtn = document.getElementById('heroSearchBtn');

  if (searchBtn) {
    searchBtn.addEventListener('click', () => {
      APP_STATE.currentSearchQuery = searchInput ? searchInput.value : '';
      if (subjectSelect) APP_STATE.currentCategoryFilter = subjectSelect.value;
      if (venueSelect) APP_STATE.currentVenueFilter = venueSelect.value;

      window.location.hash = '#schedule';
      renderScheduleCourses();
    });
  }
}

function filterByCategory(code) {
  APP_STATE.currentCategoryFilter = code;
  window.location.hash = '#schedule';
  renderScheduleCourses();
}

function resetFilters() {
  APP_STATE.currentCategoryFilter = 'all';
  APP_STATE.currentVenueFilter = 'all';
  APP_STATE.currentSearchQuery = '';
  renderScheduleCourses();
  showToast('Filters reset to show all courses');
}

// 10. Modal Window Handlers
function setupModalListeners() {
  const modalOverlays = document.querySelectorAll('.modal-overlay');
  modalOverlays.forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        closeAllModals();
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllModals();
    }
  });
}

function closeAllModals() {
  document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
  document.body.style.overflow = '';
}

// Course Details Modal
function openCourseModal(courseId) {
  const course = COURSES_DATA.find(c => c.id === courseId);
  if (!course) return;

  APP_STATE.selectedCourse = course;
  const modal = document.getElementById('modalCourseDetails');
  const container = document.getElementById('courseModalBody');

  container.innerHTML = `
    <div style="margin-bottom: 1.5rem;">
      <span class="category-tag">${course.category}</span>
      <span class="badge-ribbon ${course.badgeClass}" style="margin-left: 0.5rem;">${course.badgeText}</span>
      <h2 style="font-size: 1.75rem; color: var(--primary-navy); margin-top: 0.5rem;">${course.title}</h2>
      <p style="color: var(--text-muted); font-size: 0.9rem; font-weight: 600;">Code: ${course.code} &bull; Confirmed Duration: ${course.duration}</p>
    </div>

    <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 2rem; margin-bottom: 2rem;">
      <div>
        <h4 style="color: var(--primary-navy); margin-bottom: 0.5rem; font-size: 1.05rem;">Who This Course Is For</h4>
        <p style="color: var(--text-body); font-size: 0.92rem; margin-bottom: 1.5rem; background: var(--bg-slate); padding: 1rem; border-radius: 8px;">${course.targetAudience}</p>

        <h4 style="color: var(--primary-navy); margin-bottom: 0.5rem; font-size: 1.05rem;">Practical Learning Outcomes</h4>
        <ul style="list-style: disc; padding-left: 1.25rem; margin-bottom: 1.5rem; color: var(--text-body); font-size: 0.92rem;">
          ${course.outcomes.map(o => `<li style="margin-bottom: 0.4rem;">${o}</li>`).join('')}
        </ul>

        <h4 style="color: var(--primary-navy); margin-bottom: 0.5rem; font-size: 1.05rem;">Day-by-Day Module Agenda</h4>
        <div style="display: flex; flex-direction: column; gap: 0.75rem;">
          ${course.agenda.map(a => `
            <div style="background: var(--bg-slate); border-left: 3px solid var(--accent-red); padding: 0.75rem 1rem; border-radius: 4px;">
              <strong style="color: var(--primary-navy); font-size: 0.88rem;">Day ${a.day}: ${a.title}</strong>
              <p style="font-size: 0.82rem; color: var(--text-muted); margin-top: 0.2rem;">${a.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>

      <div>
        <div style="background: var(--bg-slate); border: 1px solid var(--border-light); border-radius: 10px; padding: 1.25rem; margin-bottom: 1.5rem;">
          <h4 style="font-size: 0.95rem; color: var(--primary-navy); margin-bottom: 0.75rem;">Tuition & Fees</h4>
          <div style="font-size: 1.75rem; font-weight: 800; color: var(--primary-navy);">₦${(course.feeNGN / 1000000).toFixed(1)}M</div>
          <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1rem;">($${course.feeUSD.toLocaleString()} USD per delegate)</div>
          <p style="font-size: 0.75rem; color: #475569; line-height: 1.4;">Fee includes course masterpack, executive buffet lunches, training kit, certificate of completion, and 12-month post-course alumni access.</p>
        </div>

        <div style="display: flex; flex-direction: column; gap: 0.75rem;">
          <button class="btn btn-lime" style="width: 100%;" onclick="openProspectusModal('${course.id}')"><i class="fa-solid fa-file-pdf"></i> Download Prospectus (PDF)</button>
          <button class="btn btn-primary" style="width: 100%;" onclick="openEmployerInvoiceModal('${course.id}')">Request Employer Invoice</button>
          <button class="btn btn-outline-navy" style="width: 100%;" onclick="openSelfFundedPaymentModal('${course.id}')">Pay Online (Self-Funded)</button>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('active');
}

// Employer Invoice Modal Generator
function openEmployerInvoiceModal(courseId, sessionId = null) {
  closeAllModals();
  const course = COURSES_DATA.find(c => c.id === courseId);
  if (!course) return;

  APP_STATE.selectedCourse = course;
  APP_STATE.selectedSession = course.sessions.find(s => s.id === sessionId) || course.sessions[0];

  const modal = document.getElementById('modalEmployerInvoice');
  const container = document.getElementById('invoiceModalBody');

  container.innerHTML = `
    <div style="margin-bottom: 1.5rem; padding-bottom: 1rem; border-bottom: 1px solid var(--border-light);">
      <h3 style="color: var(--primary-navy); font-size: 1.25rem;">Employer-Sponsored Invoice Request</h3>
      <p style="font-size: 0.88rem; color: var(--text-muted);">Selected Course: <strong>${course.title} (${course.code})</strong></p>
      <p style="font-size: 0.82rem; color: var(--accent-red); font-weight: 600;">Selected Venue: ${APP_STATE.selectedSession.city} (${APP_STATE.selectedSession.dates})</p>
    </div>

    <form id="formEmployerInvoice" onsubmit="submitEmployerInvoice(event)">
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
        <div class="form-group">
          <label class="form-label">Attendee Full Name *</label>
          <input type="text" id="invStaffName" class="form-control" placeholder="e.g. Engr. Olabisi Adeleke" required>
        </div>
        <div class="form-group">
          <label class="form-label">Attendee Work Email *</label>
          <input type="email" id="invStaffEmail" class="form-control" placeholder="o.adeleke@company.gov.ng" required>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
        <div class="form-group">
          <label class="form-label">Attendee Designation / Role *</label>
          <input type="text" id="invStaffRole" class="form-control" placeholder="e.g. Chief Audit Executive" required>
        </div>
        <div class="form-group">
          <label class="form-label">Attendee Phone Number *</label>
          <input type="tel" id="invStaffPhone" class="form-control" placeholder="+234 803 000 0000" required>
        </div>
      </div>

      <div style="background: var(--bg-slate); padding: 1.25rem; border-radius: 8px; margin-bottom: 1.25rem; border: 1px solid var(--border-light);">
        <h4 style="font-size: 0.95rem; color: var(--primary-navy); margin-bottom: 0.75rem;">Employer & Billing Organization Details</h4>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
          <div class="form-group">
            <label class="form-label">Organization Name *</label>
            <input type="text" id="invOrgName" class="form-control" placeholder="e.g. Federal Ministry of Finance / Shell Petroleum" required>
          </div>
          <div class="form-group">
            <label class="form-label">Tax / RC / Identification No. (Optional)</label>
            <input type="text" id="invTaxId" class="form-control" placeholder="RC-123456 / Tax ID">
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
          <div class="form-group">
            <label class="form-label">Authorizing Approver Name & Title *</label>
            <input type="text" id="invApprover" class="form-control" placeholder="e.g. Dr. A. Bello (Director of L&D)" required>
          </div>
          <div class="form-group">
            <label class="form-label">Number of Delegates</label>
            <select id="invDelegatesCount" class="form-control" onchange="recalculateInvoiceFee()">
              <option value="1">1 Delegate (Standard Rate)</option>
              <option value="2">2 Delegates (5% Group Discount)</option>
              <option value="3">3 Delegates (10% Group Discount)</option>
              <option value="5">5+ Delegates (15% Corporate Discount)</option>
            </select>
          </div>
        </div>

        <div class="form-group">
          <label class="form-label">Official Corporate Billing Address *</label>
          <textarea id="invBillingAddress" class="form-control" rows="2" placeholder="Central Business District, Abuja, Nigeria" required></textarea>
        </div>
      </div>

      <div style="display: flex; justify-content: space-between; align-items: center;">
        <div id="invoiceFeePreview" style="font-size: 1.1rem; font-weight: 700; color: var(--primary-navy);">
          Total Pro-Forma Invoice: ₦${(course.feeNGN / 1000000).toFixed(1)}M
        </div>
        <button type="submit" class="btn btn-primary">Generate Official Pro-Forma Invoice</button>
      </div>
    </form>
  `;

  modal.classList.add('active');
}

function recalculateInvoiceFee() {
  const course = APP_STATE.selectedCourse;
  if (!course) return;

  const count = parseInt(document.getElementById('invDelegatesCount').value) || 1;
  let discount = 0;
  if (count === 2) discount = 0.05;
  if (count === 3) discount = 0.10;
  if (count >= 5) discount = 0.15;

  const baseTotal = course.feeNGN * count;
  const finalTotal = baseTotal * (1 - discount);

  document.getElementById('invoiceFeePreview').innerHTML = `
    Total Pro-Forma Invoice: ₦${(finalTotal / 1000000).toFixed(2)}M
    ${discount > 0 ? `<span style="font-size: 0.75rem; color: var(--success-green); display: block;">includes ${(discount * 100)}% corporate discount</span>` : ''}
  `;
}

function submitEmployerInvoice(e) {
  e.preventDefault();

  const course = APP_STATE.selectedCourse;
  const session = APP_STATE.selectedSession;

  const invoiceRecord = {
    invoiceNo: `RU-INV-2026-${Math.floor(1000 + Math.random() * 9000)}`,
    date: new Date().toLocaleDateString('en-GB'),
    staffName: document.getElementById('invStaffName').value,
    staffEmail: document.getElementById('invStaffEmail').value,
    staffRole: document.getElementById('invStaffRole').value,
    staffPhone: document.getElementById('invStaffPhone').value,
    orgName: document.getElementById('invOrgName').value,
    taxId: document.getElementById('invTaxId').value || 'N/A',
    approver: document.getElementById('invApprover').value,
    delegatesCount: document.getElementById('invDelegatesCount').value,
    billingAddress: document.getElementById('invBillingAddress').value,
    courseTitle: course.title,
    courseCode: course.code,
    sessionVenue: `${session.city} (${session.dates})`,
    totalFeeNGN: course.feeNGN * parseInt(document.getElementById('invDelegatesCount').value),
    status: 'Pending Employer Payment'
  };

  APP_STATE.invoices.unshift(invoiceRecord);
  localStorage.setItem('ruach_invoices', JSON.stringify(APP_STATE.invoices));

  closeAllModals();
  showInvoicePreviewModal(invoiceRecord);
  renderAdminDashboard();
}

function showInvoicePreviewModal(inv) {
  const modal = document.getElementById('modalInvoicePreview');
  const container = document.getElementById('invoicePreviewBody');

  container.innerHTML = `
    <div class="printable-area invoice-paper">
      <div class="invoice-header-row">
        <div style="display: flex; align-items: center; gap: 1rem;">
          <img src="assets/images/ruach_logo.png" alt="Ruach Logo" style="height: 48px;">
          <div>
            <div style="font-size: 1.35rem; font-weight: 800; color: var(--primary-green);">RUACH BUSINESS CONSORTIA</div>
            <div style="font-size: 0.78rem; color: var(--accent-lime-hover); font-weight: 700; text-transform: uppercase;">Executive Learning &amp; Consultancy</div>
            <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.2rem;">Tel: +234 803 279 8904 | Email: info@ruachconsortia.com | RC: 1488920</div>
          </div>
        </div>
        <div style="text-align: right;">
          <div style="font-size: 1.25rem; font-weight: 800; color: var(--primary-green);">PRO-FORMA INVOICE</div>
          <div style="font-size: 0.9rem; font-weight: 700; color: var(--text-dark);">${inv.invoiceNo}</div>
          <div style="font-size: 0.8rem; color: var(--text-muted);">Issue Date: ${inv.date}</div>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-bottom: 1.5rem;">
        <div>
          <h4 style="font-size: 0.85rem; text-transform: uppercase; color: var(--text-muted);">Billed To (Employer):</h4>
          <strong style="font-size: 1rem; color: var(--primary-navy);">${inv.orgName}</strong><br>
          <span style="font-size: 0.85rem; color: var(--text-body);">${inv.billingAddress}</span><br>
          <span style="font-size: 0.82rem; color: var(--text-muted);">Tax/RC ID: ${inv.taxId} | Authorizing Officer: ${inv.approver}</span>
        </div>
        <div>
          <h4 style="font-size: 0.85rem; text-transform: uppercase; color: var(--text-muted);">Nominated Staff Attendee:</h4>
          <strong style="font-size: 1rem; color: var(--primary-navy);">${inv.staffName}</strong><br>
          <span style="font-size: 0.85rem; color: var(--text-body);">${inv.staffRole}</span><br>
          <span style="font-size: 0.82rem; color: var(--text-muted);">${inv.staffEmail} | ${inv.staffPhone}</span>
        </div>
      </div>

      <table class="invoice-meta-table">
        <thead>
          <tr>
            <th>Item / Course Particulars</th>
            <th>Venue & Dates</th>
            <th>Delegates</th>
            <th>Amount (NGN)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>${inv.courseTitle}</strong><br>
              <span style="font-size: 0.78rem; color: var(--text-muted);">Code: ${inv.courseCode} &bull; 5-Day Intensive Executive Seminar</span>
            </td>
            <td>${inv.sessionVenue}</td>
            <td>${inv.delegatesCount}</td>
            <td style="font-weight: 700;">₦${inv.totalFeeNGN.toLocaleString()}</td>
          </tr>
        </tbody>
      </table>

      <div style="background: var(--bg-slate); border: 1px solid var(--border-light); border-radius: 8px; padding: 1rem; margin-bottom: 1.5rem;">
        <h4 style="font-size: 0.85rem; text-transform: uppercase; color: var(--primary-navy); margin-bottom: 0.4rem;">Remittance & Payment Wire Details</h4>
        <p style="font-size: 0.82rem; color: var(--text-body);">
          <strong>Account Name:</strong> Ruach Business Consortia Ltd - Executive Learning<br>
          <strong>Bank Name:</strong> Zenith Bank Plc / Guaranty Trust Bank Plc<br>
          <strong>Account Number:</strong> 1014889201 (NGN) | 0124889202 (USD)<br>
          <strong>Payment Reference:</strong> ${inv.invoiceNo}
        </p>
      </div>

      <div style="display: flex; justify-content: space-between; align-items: center;">
        <span style="font-size: 0.78rem; color: var(--text-muted);">This Pro-Forma Invoice reserves attendee seat(s) for 14 calendar days pending employer payment confirmation.</span>
        <button class="btn btn-primary" onclick="window.print()">Print / Download PDF Invoice</button>
      </div>
    </div>
  `;

  modal.classList.add('active');
}

// Self-Funded Payment Modal
function openSelfFundedPaymentModal(courseId) {
  closeAllModals();
  const course = COURSES_DATA.find(c => c.id === courseId);
  if (!course) return;

  const modal = document.getElementById('modalSelfFunded');
  const container = document.getElementById('selfFundedModalBody');

  container.innerHTML = `
    <div style="margin-bottom: 1.5rem; padding-bottom: 1rem; border-bottom: 1px solid var(--border-light);">
      <h3 style="color: var(--primary-navy); font-size: 1.25rem;">Self-Funded / Educational Grant Payment</h3>
      <p style="font-size: 0.88rem; color: var(--text-muted);">Course: <strong>${course.title}</strong></p>
      <div style="font-size: 1.35rem; font-weight: 800; color: var(--accent-red); margin-top: 0.3rem;">Total: ₦${(course.feeNGN / 1000000).toFixed(1)}M NGN</div>
    </div>

    <form onsubmit="submitSelfFundedPayment(event, '${course.id}')">
      <div class="form-group" style="margin-bottom: 1rem;">
        <label class="form-label">Attendee Full Name *</label>
        <input type="text" id="payName" class="form-control" required placeholder="Dr. Funke Akindele">
      </div>
      <div class="form-group" style="margin-bottom: 1rem;">
        <label class="form-label">Email Address *</label>
        <input type="email" id="payEmail" class="form-control" required placeholder="f.akindele@gmail.com">
      </div>
      <div class="form-group" style="margin-bottom: 1.5rem;">
        <label class="form-label">Select Payment Method</label>
        <select class="form-control" id="payMethod">
          <option value="card">Debit / Credit Card (Instant Confirmation)</option>
          <option value="bank">Direct Bank Transfer / Educational Grant Voucher</option>
        </select>
      </div>

      <button type="submit" class="btn btn-primary" style="width: 100%;">Complete Instant Enrolment</button>
    </form>
  `;

  modal.classList.add('active');
}

function submitSelfFundedPayment(e, courseId) {
  e.preventDefault();
  const course = COURSES_DATA.find(c => c.id === courseId);

  const enrolment = {
    enrolmentId: `RU-ENR-2026-${Math.floor(1000 + Math.random() * 9000)}`,
    date: new Date().toLocaleDateString('en-GB'),
    name: document.getElementById('payName').value,
    email: document.getElementById('payEmail').value,
    courseTitle: course.title,
    amount: course.feeNGN,
    status: 'Confirmed & Paid'
  };

  APP_STATE.enrolments.unshift(enrolment);
  localStorage.setItem('ruach_enrolments', JSON.stringify(APP_STATE.enrolments));

  closeAllModals();
  showToast(`Enrolment Confirmed! Confirmation email dispatched to ${enrolment.email}`);
  renderAdminDashboard();
}

// 10.5. Prospectus Download & Mailing List Lead Capture Handlers
function openProspectusModal(courseId) {
  closeAllModals();
  const course = COURSES_DATA.find(c => c.id === courseId);
  if (!course) return;

  APP_STATE.selectedCourse = course;
  let modal = document.getElementById('modalDownloadProspectus');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'modalDownloadProspectus';
    modal.className = 'modal-overlay';
    modal.innerHTML = `
      <div class="modal-container" style="max-width: 600px;">
        <div class="modal-header">
          <h3 class="modal-title"><i class="fa-solid fa-file-pdf" style="color: var(--accent-lime); margin-right: 0.5rem;"></i> Download Executive Prospectus</h3>
          <span class="modal-close" onclick="closeAllModals()">&times;</span>
        </div>
        <div class="modal-body" id="prospectusModalBody"></div>
      </div>
    `;
    document.body.appendChild(modal);
    setupModalListeners();
  }

  const body = document.getElementById('prospectusModalBody');
  body.innerHTML = `
    <div style="margin-bottom: 1.25rem; padding-bottom: 1rem; border-bottom: 1px solid var(--border-light);">
      <span class="category-tag">${course.category}</span>
      <h3 style="color: var(--primary-navy); font-size: 1.2rem; margin-top: 0.5rem; line-height: 1.3;">${course.title}</h3>
      <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.25rem;">Course Code: <strong>${course.code}</strong> &bull; Duration: ${course.duration}</p>
    </div>

    <p style="font-size: 0.9rem; color: var(--text-body); margin-bottom: 1.25rem; background: var(--bg-slate); padding: 0.85rem; border-radius: 6px;">
      Please complete your contact details below to download the official PDF prospectus. We will also add you to our executive newsletter mailing list and send a copy to your email.
    </p>

    <form id="formProspectusDownload" onsubmit="submitProspectusForm(event, '${course.id}')">
      <div class="form-group" style="margin-bottom: 1rem;">
        <label class="form-label">Full Name *</label>
        <input type="text" id="prospectusName" class="form-control" placeholder="e.g. Dr. Olabisi Adeleke" required>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
        <div class="form-group">
          <label class="form-label">Work Email Address *</label>
          <input type="email" id="prospectusEmail" class="form-control" placeholder="o.adeleke@company.com" required>
        </div>
        <div class="form-group">
          <label class="form-label">Phone Number *</label>
          <input type="tel" id="prospectusPhone" class="form-control" placeholder="+234 803 000 0000" required>
        </div>
      </div>

      <div class="form-group" style="margin-bottom: 1.5rem;">
        <label class="form-label">Organization / Job Title (Optional)</label>
        <input type="text" id="prospectusOrg" class="form-control" placeholder="e.g. Central Bank of Nigeria / General Manager">
      </div>

      <button type="submit" class="btn btn-lime" style="width: 100%; font-size: 1rem; padding: 0.85rem;">
        <i class="fa-solid fa-download" style="margin-right: 0.4rem;"></i> Submit &amp; Download Prospectus PDF
      </button>
    </form>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function submitProspectusForm(e, courseId) {
  e.preventDefault();
  const course = COURSES_DATA.find(c => c.id === courseId);
  if (!course) return;

  const name = document.getElementById('prospectusName').value;
  const email = document.getElementById('prospectusEmail').value;
  const phone = document.getElementById('prospectusPhone').value;
  const org = document.getElementById('prospectusOrg').value || 'N/A';

  const leadRecord = {
    id: `RU-LEAD-${Math.floor(10000 + Math.random() * 90000)}`,
    date: new Date().toLocaleString('en-GB'),
    name: name,
    email: email,
    phone: phone,
    org: org,
    courseTitle: course.title,
    prospectusFile: course.prospectusFile || 'Ruach Course Materials/ruach-advanced-data-analytics-prospectus.pdf'
  };

  APP_STATE.mailingList.unshift(leadRecord);
  localStorage.setItem('ruach_mailing_list', JSON.stringify(APP_STATE.mailingList));

  // Trigger POST request to PHP backend endpoint
  fetch('send_prospectus.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: name,
      email: email,
      phone: phone,
      org: org,
      courseTitle: course.title,
      prospectusFile: leadRecord.prospectusFile
    })
  }).catch(err => console.log('Prospectus lead registered locally:', err));

  // Trigger immediate file download
  const downloadUrl = leadRecord.prospectusFile;
  const link = document.createElement('a');
  link.href = downloadUrl;
  link.download = downloadUrl.split('/').pop();
  link.target = '_blank';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  const body = document.getElementById('prospectusModalBody');
  body.innerHTML = `
    <div style="text-align: center; padding: 1.5rem 0;">
      <div style="width: 60px; height: 60px; border-radius: 50%; background: var(--accent-lime-light); color: var(--primary-green); display: flex; align-items: center; justify-content: center; font-size: 2rem; margin: 0 auto 1rem;">
        <i class="fa-solid fa-circle-check"></i>
      </div>
      <h3 style="color: var(--primary-navy); font-size: 1.4rem; margin-bottom: 0.5rem;">Prospectus Downloaded!</h3>
      <p style="color: var(--text-body); font-size: 0.92rem; margin-bottom: 1.5rem; line-height: 1.6;">
        Thank you <strong>${name}</strong>. Your download for <strong>${course.title}</strong> has started automatically. A confirmation copy has also been sent to <strong>${email}</strong>.
      </p>

      <div style="background: var(--bg-slate); border: 1px solid var(--border-light); border-radius: 8px; padding: 1.25rem; margin-bottom: 1.5rem;">
        <a href="${downloadUrl}" download target="_blank" class="btn btn-lime" style="width: 100%; display: inline-block; text-align: center; text-decoration: none;">
          <i class="fa-solid fa-file-pdf" style="margin-right: 0.4rem;"></i> Re-Download Prospectus PDF
        </a>
      </div>

      <div style="display: flex; gap: 0.75rem; justify-content: center;">
        <button class="btn btn-outline-navy btn-sm" onclick="closeAllModals()">Close Window</button>
        <button class="btn btn-primary btn-sm" onclick="openEmployerInvoiceModal('${course.id}')">Request Employer Invoice</button>
      </div>
    </div>
  `;

  showToast(`Prospectus downloaded & subscriber added to mailing list!`);
  renderAdminDashboard();
}

function exportMailingListCSV() {
  const leads = APP_STATE.mailingList;
  if (!leads || leads.length === 0) {
    showToast('No mailing list leads recorded yet.');
    return;
  }

  const headers = ['Lead ID', 'Date & Time', 'Full Name', 'Work Email', 'Phone Number', 'Organization', 'Course Prospectus Requested'];
  const rows = leads.map(l => [
    `"${l.id}"`,
    `"${l.date}"`,
    `"${l.name}"`,
    `"${l.email}"`,
    `"${l.phone}"`,
    `"${l.org || 'N/A'}"`,
    `"${l.courseTitle.replace(/"/g, '""')}"`
  ]);

  const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', `ruach_mailing_list_leads_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  showToast('Mailing list leads exported successfully to CSV!');
}

// 11. Staff Admin Dashboard Renderer
function renderAdminDashboard() {
  const container = document.getElementById('adminDashboardContent');
  if (!container) return;

  const invoices = APP_STATE.invoices;
  const enrolments = APP_STATE.enrolments;
  const leads = APP_STATE.mailingList;

  container.innerHTML = `
    <div class="admin-metrics-grid" style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; margin-bottom: 2rem;">
      <div class="metric-card">
        <div class="metric-title">Total Invoice Requests</div>
        <div class="metric-value">${invoices.length}</div>
      </div>
      <div class="metric-card">
        <div class="metric-title">Mailing List Leads &amp; Prospectus</div>
        <div class="metric-value">${leads.length}</div>
      </div>
      <div class="metric-card">
        <div class="metric-title">Self-Funded Enrolments</div>
        <div class="metric-value">${enrolments.length}</div>
      </div>
      <div class="metric-card">
        <div class="metric-title">Active Prospectus Catalog</div>
        <div class="metric-value">${COURSES_DATA.length} Courses</div>
      </div>
    </div>

    <!-- Section 1: Mailing List & Prospectus Download Leads -->
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.5rem;">
      <h3 style="color: var(--bg-white); font-size: 1.2rem; margin: 0;">Mailing List Subscribers &amp; Prospectus Downloads (${leads.length})</h3>
      <button class="btn btn-lime btn-sm" onclick="exportMailingListCSV()"><i class="fa-solid fa-file-csv" style="margin-right: 0.3rem;"></i> Export Mailing List (CSV)</button>
    </div>

    ${leads.length === 0 ? '<p style="color: #94A3B8; font-size: 0.9rem; margin-bottom: 2rem;">No prospectus downloads / subscriber leads captured yet.</p>' : `
      <table class="admin-table" style="margin-bottom: 2.5rem;">
        <thead>
          <tr>
            <th>Lead ID</th>
            <th>Full Name</th>
            <th>Email Address</th>
            <th>Phone Number</th>
            <th>Organization</th>
            <th>Course Prospectus</th>
            <th>Date &amp; Time</th>
          </tr>
        </thead>
        <tbody>
          ${leads.map(l => `
            <tr>
              <td><strong>${l.id}</strong></td>
              <td>${l.name}</td>
              <td><a href="mailto:${l.email}" style="color: #60A5FA;">${l.email}</a></td>
              <td>${l.phone}</td>
              <td>${l.org || 'N/A'}</td>
              <td style="max-width: 250px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${l.courseTitle}</td>
              <td style="font-size: 0.8rem; color: #94A3B8;">${l.date}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `}

    <!-- Section 2: Employer Invoices Queue -->
    <h3 style="color: var(--bg-white); font-size: 1.2rem; margin-bottom: 1rem;">Employer Invoice Intake Queue (${invoices.length})</h3>
    ${invoices.length === 0 ? '<p style="color: #94A3B8; font-size: 0.9rem;">No employer invoice requests logged yet.</p>' : `
      <table class="admin-table">
        <thead>
          <tr>
            <th>Invoice No</th>
            <th>Organization</th>
            <th>Staff Nominee</th>
            <th>Course Title</th>
            <th>Amount (NGN)</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          ${invoices.map(inv => `
            <tr>
              <td><strong>${inv.invoiceNo}</strong></td>
              <td>${inv.orgName}</td>
              <td>${inv.staffName}</td>
              <td>${inv.courseTitle}</td>
              <td>₦${inv.totalFeeNGN.toLocaleString()}</td>
              <td><span class="badge-ribbon badge-invoice">${inv.status}</span></td>
              <td><button style="color: #F87171; font-weight: 700;" onclick='showInvoicePreviewModal(${JSON.stringify(inv)})'>View Invoice</button></td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `}
  `;
}

// 12. Helper Utilities
function showToast(msg) {
  let toastContainer = document.getElementById('toastContainer');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toastContainer';
    toastContainer.className = 'toast-container';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <i class="fa-solid fa-circle-check" style="font-size: 1.2rem; color: var(--accent-lime);"></i>
    <span>${msg}</span>
  `;

  toastContainer.appendChild(toast);
  setTimeout(() => toast.remove(), 4000);
}

// 13. Team & Leadership Auto-Scrolling Carousel Controller
let currentTeamCategory = 'all';
let currentTeamIndex = 0;
let teamAutoScrollInterval = null;

function showTeamProfileModal(memberId) {
  const member = TEAM_DATA.find(m => m.id === memberId);
  if (!member) return;

  const modal = document.getElementById('modalTeamProfile');
  const modalTitle = document.getElementById('teamModalTitle');
  const modalBody = document.getElementById('teamModalBody');
  if (!modal || !modalBody) return;

  if (modalTitle) {
    modalTitle.textContent = `${member.name} - Profile`;
  }

  const bioParagraphs = member.fullBio && member.fullBio.length > 0 
    ? member.fullBio 
    : [member.bio];

  modalBody.innerHTML = `
    <div class="team-modal-content">
      <div class="team-modal-header">
        <div class="team-modal-avatar-wrapper">
          <img src="${member.image}" alt="${member.name}" class="team-modal-avatar">
          <span class="team-modal-badge">${member.badge}</span>
        </div>
        <div class="team-modal-meta">
          <h2 class="team-modal-name">${member.name}</h2>
          <div class="team-modal-role">${member.role}</div>
          <div class="team-modal-category-chip">
            <i class="fa-solid fa-award" style="color: var(--accent-lime); margin-right: 0.35rem;"></i>
            ${member.categoryLabel}
          </div>
          <div class="team-modal-quote-box">
            <p>${member.bio}</p>
          </div>
        </div>
      </div>

      <div class="team-modal-divider"></div>

      <div class="team-modal-bio-body">
        <h4 class="team-bio-section-title">
          <i class="fa-solid fa-user-tie" style="color: var(--primary-green); margin-right: 0.5rem;"></i>
          Full Professional Biography
        </h4>
        <div class="team-bio-text">
          ${bioParagraphs.map(p => `<p class="bio-p">${p}</p>`).join('')}
        </div>
      </div>

      <div class="team-modal-footer">
        <button class="btn btn-outline-green btn-sm" onclick="closeAllModals()">
          <i class="fa-solid fa-xmark" style="margin-right: 0.3rem;"></i> Close Profile
        </button>
        <a href="#schedule" onclick="closeAllModals()" class="btn btn-primary btn-sm">
          <i class="fa-solid fa-calendar-check" style="margin-right: 0.3rem;"></i> View Masterclass Schedule
        </a>
      </div>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function renderTeamCarousel() {
  const track = document.getElementById('teamCarouselTrack');
  if (!track) return;

  const filteredTeam = TEAM_DATA.filter(member => {
    if (currentTeamCategory === 'all') return true;
    return member.category === currentTeamCategory;
  });

  track.innerHTML = filteredTeam.map(m => `
    <div class="team-card" onclick="showTeamProfileModal('${m.id}')" role="button" tabindex="0" title="Click to view full bio of ${m.name}">
      <div class="team-image-container">
        <img src="${m.image}" alt="${m.name}" class="team-image" loading="lazy">
        <span class="team-role-tag">${m.badge}</span>
        <div class="team-image-hover-overlay">
          <span><i class="fa-solid fa-arrow-up-right-from-square"></i> View Profile</span>
        </div>
      </div>
      <h3 class="team-name">${m.name}</h3>
      <div class="team-role">${m.role}</div>
      <p class="team-bio">${m.bio}</p>
      <div class="team-card-footer">
        <span class="team-cat-badge">${m.categoryLabel}</span>
        <button class="team-card-action-btn" onclick="event.stopPropagation(); showTeamProfileModal('${m.id}')">
          Full Bio <i class="fa-solid fa-angle-right"></i>
        </button>
      </div>
    </div>
  `).join('');

  const itemsPerView = getItemsPerView();
  const maxIndex = Math.max(0, filteredTeam.length - itemsPerView);
  if (currentTeamIndex > maxIndex) currentTeamIndex = 0;

  updateTeamCarouselPosition(filteredTeam.length);
  renderTeamDots(filteredTeam.length, itemsPerView);
  setupTeamAutoScroll(filteredTeam.length);
}

function getItemsPerView() {
  if (window.innerWidth <= 480) return 1;
  if (window.innerWidth <= 768) return 2;
  if (window.innerWidth <= 1200) return 3;
  return 4; // 4 cards at a time on desktop
}

function updateTeamCarouselPosition(totalCount) {
  const track = document.getElementById('teamCarouselTrack');
  if (!track) return;

  const itemsPerView = getItemsPerView();

  // Translate percentages
  const shift = currentTeamIndex * (100 / itemsPerView);
  track.style.transform = `translateX(-${shift}%)`;

  // Update dots active class
  document.querySelectorAll('.team-dot').forEach((dot, idx) => {
    dot.classList.toggle('active', idx === currentTeamIndex);
  });
}

function renderTeamDots(totalCount, itemsPerView) {
  const dotsWrapper = document.getElementById('teamDotsWrapper');
  if (!dotsWrapper) return;

  const maxDots = Math.max(1, totalCount - itemsPerView + 1);
  let html = '';
  for (let i = 0; i < maxDots; i++) {
    html += `<span class="team-dot ${i === currentTeamIndex ? 'active' : ''}" onclick="goToTeamSlide(${i})"></span>`;
  }
  dotsWrapper.innerHTML = html;
}

function nextTeamSlide() {
  const filteredTeam = TEAM_DATA.filter(m => currentTeamCategory === 'all' || m.category === currentTeamCategory);
  const itemsPerView = getItemsPerView();
  const maxIndex = Math.max(0, filteredTeam.length - itemsPerView);

  if (currentTeamIndex >= maxIndex) {
    currentTeamIndex = 0;
  } else {
    currentTeamIndex++;
  }
  updateTeamCarouselPosition(filteredTeam.length);
}

function prevTeamSlide() {
  const filteredTeam = TEAM_DATA.filter(m => currentTeamCategory === 'all' || m.category === currentTeamCategory);
  const itemsPerView = getItemsPerView();
  const maxIndex = Math.max(0, filteredTeam.length - itemsPerView);

  if (currentTeamIndex <= 0) {
    currentTeamIndex = maxIndex;
  } else {
    currentTeamIndex--;
  }
  updateTeamCarouselPosition(filteredTeam.length);
}

function goToTeamSlide(index) {
  currentTeamIndex = index;
  const filteredTeam = TEAM_DATA.filter(m => currentTeamCategory === 'all' || m.category === currentTeamCategory);
  updateTeamCarouselPosition(filteredTeam.length);
}

function filterTeamCategory(cat, btn) {
  currentTeamCategory = cat;
  currentTeamIndex = 0;

  document.querySelectorAll('.team-tab-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');

  renderTeamCarousel();
}

function setupTeamAutoScroll(totalCount) {
  clearInterval(teamAutoScrollInterval);
  if (totalCount <= getItemsPerView()) return;

  // Auto scroll every 3.5 seconds
  teamAutoScrollInterval = setInterval(() => {
    nextTeamSlide();
  }, 3500);

  // Pause on hover
  const container = document.getElementById('teamCarouselContainer');
  if (container) {
    container.onmouseenter = () => clearInterval(teamAutoScrollInterval);
    container.onmouseleave = () => {
      clearInterval(teamAutoScrollInterval);
      teamAutoScrollInterval = setInterval(nextTeamSlide, 3500);
    };
  }
}

// 14. Business Consulting & eBAS Renderers
function renderConsultingSection() {
  const container1 = document.getElementById('ebasDomainsGrid');
  const container2 = document.getElementById('ebasDomainsGridConsulting');
  
  const html = EBAS_DOMAINS_DATA.map(d => `
    <div class="ebas-domain-card" onclick="showConsultingDemoModal('${d.name}')">
      <div class="domain-icon-wrapper">
        <i class="fa-solid ${d.icon}"></i>
      </div>
      <span class="domain-tag">${d.tag}</span>
      <h4 class="domain-name">${d.name}</h4>
      <p class="domain-desc">${d.desc}</p>
      <ul class="domain-features-list">
        ${d.features.map(f => `<li><i class="fa-solid fa-check" style="color: var(--accent-lime); margin-right: 0.3rem;"></i> ${f}</li>`).join('')}
      </ul>
      <div class="domain-action">
        <span>Request ${d.name.split(' ')[0]} Solution <i class="fa-solid fa-arrow-right"></i></span>
      </div>
    </div>
  `).join('');

  if (container1) container1.innerHTML = html;
  if (container2) container2.innerHTML = html;
}

function renderTargetMarkets() {
  const container = document.getElementById('targetMarketsGrid');
  if (!container) return;

  container.innerHTML = TARGET_MARKETS_DATA.map(m => `
    <div class="target-market-card">
      <div class="target-market-icon">
        <i class="fa-solid ${m.icon}"></i>
      </div>
      <h4 class="target-market-title">${m.title}</h4>
      <p class="target-market-desc">${m.desc}</p>
    </div>
  `).join('');
}

function renderCoreValues() {
  const container = document.getElementById('coreValuesGrid');
  if (!container) return;

  container.innerHTML = CORE_VALUES_DATA.map(v => `
    <div class="core-value-card">
      <span class="value-num">${v.num}</span>
      <div class="value-icon">
        <i class="fa-solid ${v.icon}"></i>
      </div>
      <h4 class="value-title">${v.title}</h4>
      <p class="value-desc">${v.desc}</p>
    </div>
  `).join('');
}

let partnersCurrentIndex = 0;
let partnersAutoScrollInterval = null;

function renderPartners() {
  const container = document.getElementById('partnersGrid');
  if (!container) return;

  container.innerHTML = PARTNERS_DATA.map(p => `
    <div class="partner-logo-card">
      <div class="partner-img-wrapper">
        <img src="${p.logo}" alt="${p.name} Logo" class="partner-logo-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
        <div class="partner-emblem-badge" style="display: none; background: ${p.color}15; color: ${p.color}; border: 1.5px solid ${p.color}35;">
          <i class="fa-solid ${p.icon}"></i>
          <span>${p.badge}</span>
        </div>
      </div>
      <div class="partner-info-box">
        <div class="partner-name-text">${p.name}</div>
        <div class="partner-type-text">${p.type}</div>
      </div>
    </div>
  `).join('');

  setupPartnersCarousel();
}

function setupPartnersCarousel() {
  const track = document.getElementById('partnersGrid');
  const prevBtn = document.getElementById('partnerPrevBtn');
  const nextBtn = document.getElementById('partnerNextBtn');
  const container = document.getElementById('partnersTrackContainer');
  if (!track) return;

  const getVisibleCount = () => {
    const w = window.innerWidth;
    if (w <= 420) return 1;
    if (w <= 640) return 2;
    if (w <= 1024) return 3;
    return 4;
  };

  const updateCarousel = () => {
    const visible = getVisibleCount();
    const maxIndex = Math.max(0, PARTNERS_DATA.length - visible);
    if (partnersCurrentIndex > maxIndex) partnersCurrentIndex = 0;
    if (partnersCurrentIndex < 0) partnersCurrentIndex = maxIndex;

    const moveStepPercent = 100 / visible;
    track.style.transform = `translateX(-${partnersCurrentIndex * moveStepPercent}%)`;
  };

  if (prevBtn) {
    prevBtn.onclick = () => {
      partnersCurrentIndex--;
      updateCarousel();
    };
  }

  if (nextBtn) {
    nextBtn.onclick = () => {
      partnersCurrentIndex++;
      updateCarousel();
    };
  }

  // Auto Scroll Carousel
  clearInterval(partnersAutoScrollInterval);
  partnersAutoScrollInterval = setInterval(() => {
    const visible = getVisibleCount();
    const maxIndex = Math.max(0, PARTNERS_DATA.length - visible);
    partnersCurrentIndex = partnersCurrentIndex >= maxIndex ? 0 : partnersCurrentIndex + 1;
    updateCarousel();
  }, 3500);

  if (container) {
    container.onmouseenter = () => clearInterval(partnersAutoScrollInterval);
    container.onmouseleave = () => {
      clearInterval(partnersAutoScrollInterval);
      partnersAutoScrollInterval = setInterval(() => {
        const visible = getVisibleCount();
        const maxIndex = Math.max(0, PARTNERS_DATA.length - visible);
        partnersCurrentIndex = partnersCurrentIndex >= maxIndex ? 0 : partnersCurrentIndex + 1;
        updateCarousel();
      }, 3500);
    };
  }
}

function showConsultingDemoModal(serviceName = 'eBAS Platform Demo') {
  closeAllModals();
  const modal = document.getElementById('modalConsultingDemo');
  const select = document.getElementById('consultingServiceSelect');
  if (!modal) return;

  if (select && serviceName) {
    const matchedOpt = Array.from(select.options).find(o => o.value.toLowerCase().includes(serviceName.toLowerCase()) || serviceName.toLowerCase().includes(o.value.toLowerCase()));
    if (matchedOpt) {
      select.value = matchedOpt.value;
    }
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function handleConsultingDemoSubmit(e) {
  e.preventDefault();
  const service = document.getElementById('consultingServiceSelect').value;
  const name = document.getElementById('consultingName').value;
  const email = document.getElementById('consultingEmail').value;
  const org = document.getElementById('consultingOrg').value;

  closeAllModals();
  showToast(`Consulting & eBAS Request Received! Our Advisory Team will contact ${name} at ${org} (${email}) within 24 hours.`);
  if (e.target) e.target.reset();
}
