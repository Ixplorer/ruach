/**
 * Ruach Training Hub - Client Application Logic & Data Store
 * Ruach Business Consortia Limited (Abuja, Nigeria)
 */

// 1. Comprehensive Executive Training Course Catalog Data Store
const COURSES_DATA = [
  // --- FLAGSHIP 1 ---
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

  // --- FLAGSHIP 2 ---
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

  // --- FLAGSHIP 3 ---
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

  // --- ADDITIONAL COURSES FOR CATALOGUE & SCHEDULE ---
  {
    id: 'pm-004',
    code: 'RU-PMP-404',
    slug: 'advanced-project-management-agile-governance',
    title: 'Advanced Project Management & Agile Governance',
    category: 'Project, Procurement & Contract Management',
    categoryCode: 'project',
    flagship: false,
    badgeText: 'PMP Aligned',
    badgeClass: 'badge-invoice',
    duration: '5 Days (30 Hours)',
    feeUSD: 2100,
    feeNGN: 2950000,
    targetAudience: 'Senior Project Managers, PMO Directors, Program Coordinators, Engineering Leads.',
    outcomes: ['Align complex project portfolios with organizational strategy.', 'Master Agile & Hybrid project governance frameworks.'],
    agenda: [{ day: 1, title: 'Project Portfolio Governance', desc: 'Portfolio prioritization and resource allocation.' }],
    sessions: [
      { id: 'pm-s1', city: 'Abuja, Nigeria', venue: 'Ruach Executive Center, Maitama', dates: '12 Oct - 16 Oct 2026', status: 'Guaranteed to Run', statusClass: 'badge-guaranteed' },
      { id: 'pm-s2', city: 'Lagos, Nigeria', venue: 'Radisson Blu Anchorage, Victoria Island', dates: '09 Nov - 13 Nov 2026', status: 'Open for Enrolment', statusClass: 'badge-invoice' }
    ]
  },
  {
    id: 'hr-005',
    code: 'RU-HRM-505',
    slug: 'strategic-human-resource-management-talent-analytics',
    title: 'Strategic Human Resource Management & Talent Analytics',
    category: 'Human Resources & Talent Management',
    categoryCode: 'hr',
    flagship: false,
    badgeText: 'HRCI Certified',
    badgeClass: 'badge-invoice',
    duration: '5 Days (30 Hours)',
    feeUSD: 1950,
    feeNGN: 2750000,
    targetAudience: 'HR Directors, Chief People Officers, Talent Acquisition Leads, L&D Managers.',
    outcomes: ['Leverage HR predictive analytics for workforce planning.', 'Design competitive compensation & retention strategies.'],
    agenda: [{ day: 1, title: 'Strategic HR Architecture & Workforce Analytics', desc: 'Data-driven HR metrics.' }],
    sessions: [
      { id: 'hr-s1', city: 'Abuja, Nigeria', venue: 'Ruach Executive Center, Maitama', dates: '26 Oct - 30 Oct 2026', status: 'Open for Enrolment', statusClass: 'badge-invoice' },
      { id: 'hr-s2', city: 'London, UK', venue: 'Hilton London Bankside', dates: '23 Nov - 27 Nov 2026', status: 'Limited Seats', statusClass: 'badge-flagship' }
    ]
  },
  {
    id: 'hse-006',
    code: 'RU-HSE-606',
    slug: 'occupational-health-safety-environmental-compliance',
    title: 'Occupational Health, Safety & Environmental (HSE) Management',
    category: 'HSE, Security & Emergency Management',
    categoryCode: 'hse',
    flagship: false,
    badgeText: 'ISO 45001 Standard',
    badgeClass: 'badge-guaranteed',
    duration: '5 Days (30 Hours)',
    feeUSD: 2050,
    feeNGN: 2850000,
    targetAudience: 'HSE Directors, Safety Officers, Operations Engineers, Facility Managers.',
    outcomes: ['Develop ISO 45001 compliant HSE management systems.', 'Conduct comprehensive hazard identification and emergency response drills.'],
    agenda: [{ day: 1, title: 'HSE Regulatory Compliance & Risk Identification', desc: 'Evaluating safety protocols.' }],
    sessions: [
      { id: 'hse-s1', city: 'Port Harcourt, Nigeria', venue: 'Hotel Presidential Suites', dates: '16 Nov - 20 Nov 2026', status: 'Guaranteed to Run', statusClass: 'badge-guaranteed' }
    ]
  },
  {
    id: 'og-007',
    code: 'RU-PET-707',
    slug: 'oil-gas-contract-negotiation-fiscal-economics',
    title: 'Oil & Gas Contract Negotiation & Production Fiscal Economics',
    category: 'Oil & Gas, Energy & Engineering',
    categoryCode: 'energy',
    flagship: false,
    badgeText: 'Energy Specialization',
    badgeClass: 'badge-flagship',
    duration: '5 Days (30 Hours)',
    feeUSD: 2800,
    feeNGN: 4200000,
    targetAudience: 'Energy Legal Counsel, Commercial Managers, Petroleum Economists, Government Energy Officials.',
    outcomes: ['Structure Production Sharing Contracts (PSCs) and Joint Operating Agreements (JOAs).', 'Evaluate fiscal regime terms and hydrocarbon economic valuation.'],
    agenda: [{ day: 1, title: 'Upstream & Midstream Fiscal Regimes', desc: 'Analysis of PSCs and tax structures.' }],
    sessions: [
      { id: 'og-s1', city: 'Abuja, Nigeria', venue: 'Transcorp Hilton Executive Suites', dates: '09 Nov - 13 Nov 2026', status: 'Guaranteed to Run', statusClass: 'badge-guaranteed' },
      { id: 'og-s2', city: 'Dubai, UAE', venue: 'JW Marriott Marquis, Business Bay', dates: '14 Dec - 18 Dec 2026', status: 'Limited Seats', statusClass: 'badge-flagship' }
    ]
  },
  {
    id: 'op-008',
    code: 'RU-OPX-808',
    slug: 'operational-excellence-lean-six-sigma-black-belt',
    title: 'Operational Excellence & Lean Six Sigma Executive Control',
    category: 'Operations, Quality & Auditing',
    categoryCode: 'operations',
    flagship: false,
    badgeText: 'Quality Standard',
    badgeClass: 'badge-guaranteed',
    duration: '5 Days (30 Hours)',
    feeUSD: 2300,
    feeNGN: 3200000,
    targetAudience: 'Quality Directors, Operations Managers, Supply Chain Directors, Plant Managers.',
    outcomes: ['Eliminate non-value-added operational waste.', 'Implement DMAIC methodology for zero-defect quality standards.'],
    agenda: [{ day: 1, title: 'DMAIC Roadmap & Value Stream Mapping', desc: 'Streamlining operational bottlenecks.' }],
    sessions: [
      { id: 'op-s1', city: 'Lagos, Nigeria', venue: 'Eko Hotels Conference Suites', dates: '02 Nov - 06 Nov 2026', status: 'Open for Enrolment', statusClass: 'badge-invoice' }
    ]
  }
];

// 1.5. Official Leadership & Board of Advisors Store
const TEAM_DATA = [
  // --- MANAGEMENT ---
  {
    id: 'mgt-1',
    name: 'Engr. Olukayode Ashaolu',
    role: 'Chief Executive Officer',
    badge: 'CEO',
    category: 'management',
    categoryLabel: 'Management',
    image: 'assets/images/team_olukayode_ashaolu.png',
    bio: 'Executive Director leading strategic transformation and corporate learning at Ruach Consortia.'
  },
  {
    id: 'mgt-2',
    name: 'Mrs. Busola Ashaolu',
    role: 'Non-Executive Director',
    badge: 'Director',
    category: 'management',
    categoryLabel: 'Management',
    image: 'assets/images/team_busola_ashaolu.png',
    bio: 'Director overseeing institutional strategy, stakeholder partnerships, and executive development.'
  },
  {
    id: 'mgt-3',
    name: 'Hajia Halimat Raji',
    role: 'Non-Executive Director',
    badge: 'Director',
    category: 'management',
    categoryLabel: 'Management',
    image: 'assets/images/team_halimat_raji.png',
    bio: 'Director steering corporate governance, human capital development, and public sector relations.'
  },

  // --- BOARD OF ADVISORS ---
  {
    id: 'adv-1',
    name: 'Dr. Kayode John Akinade',
    role: 'Board of Advisors',
    badge: 'Advisor',
    category: 'board',
    categoryLabel: 'Board of Advisors',
    image: 'assets/images/team_kayode_akinade.png',
    bio: 'Senior Advisor specialising in health economics, strategic policy, and corporate governance.'
  },
  {
    id: 'adv-2',
    name: 'Mr. Oluwabunmi Ajilore',
    role: 'Board of Advisors',
    badge: 'Advisor',
    category: 'board',
    categoryLabel: 'Board of Advisors',
    image: 'assets/images/team_oluwabunmi_ajilore.png',
    bio: 'Financial risk management expert and strategic advisor to enterprise leadership.'
  },
  {
    id: 'adv-3',
    name: 'Mr. Taopheek Babayeju',
    role: 'Board of Advisors',
    badge: 'Advisor',
    category: 'board',
    categoryLabel: 'Board of Advisors',
    image: 'assets/images/team_taopheek_babayeju.png',
    bio: 'Renowned project management consultant, agile governance strategist, and board advisor.'
  },
  {
    id: 'adv-4',
    name: 'Mrs. Rose Saiki-Onaiyi',
    role: 'Board of Advisors',
    badge: 'Advisor',
    category: 'board',
    categoryLabel: 'Board of Advisors',
    image: 'assets/images/team_rose_saiki.png',
    bio: 'Human capital development consultant and strategic organizational design advisor.'
  },
  {
    id: 'adv-5',
    name: 'Mr. Ifedolapo A. Falope',
    role: 'Board of Advisors',
    badge: 'Advisor',
    category: 'board',
    categoryLabel: 'Board of Advisors',
    image: 'assets/images/team_ifedolapo_falope.png',
    bio: 'Legal counsel and corporate governance strategist providing board oversight.'
  },
  {
    id: 'adv-6',
    name: 'Mrs. Abiola Osareimen Oduwusi',
    role: 'Board of Advisors',
    badge: 'Advisor',
    category: 'board',
    categoryLabel: 'Board of Advisors',
    image: 'assets/images/team_abiola_oduwusi.png',
    bio: 'Executive coach and talent analytics expert advising on leadership development.'
  },
  {
    id: 'adv-7',
    name: 'Engr. Babatunde Oluwole Longe',
    role: 'Board of Advisors',
    badge: 'Advisor',
    category: 'board',
    categoryLabel: 'Board of Advisors',
    image: 'assets/images/team_babatunde_longe.png',
    bio: 'Engineering operations and infrastructure asset management strategic advisor.'
  }
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
  enrolments: JSON.parse(localStorage.getItem('ruach_enrolments') || '[]')
};

// 3. Document Initializer
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  renderMegaMenu();
  renderFeaturedCourses();
  renderScheduleCourses();
  renderCategoriesGrid();
  renderTeamCarousel();
  setupSearchControls();
  setupModalListeners();
  renderAdminDashboard();

  // Route hash & window resize check
  window.addEventListener('hashchange', handleHashRouting);
  window.addEventListener('resize', () => renderTeamCarousel());
  handleHashRouting();
});

// 4. Navigation & Route Handler
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
  const hash = window.location.hash || '#home';
  const views = ['home', 'programmes', 'schedule', 'why-us', 'admin'];

  views.forEach(view => {
    const el = document.getElementById(`view-${view}`);
    if (el) {
      if (`#${view}` === hash || (hash === '#home' && view === 'home')) {
        el.style.display = 'block';
      } else {
        el.style.display = 'none';
      }
    }
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 5. Mega Menu Renderer
function renderMegaMenu() {
  const megaMenuGrid = document.getElementById('megaMenuGrid');
  if (!megaMenuGrid) return;

  const categories = [
    { name: 'AI & Digital Tech', icon: '<i class="fa-solid fa-laptop-code"></i>', items: ['Intelligent Process Automation', 'Data Analytics & BI', 'Cybersecurity Governance'] },
    { name: 'Finance & Risk', icon: '<i class="fa-solid fa-chart-line"></i>', items: ['Financial Risk Management', 'Internal Control Systems', 'Treasury & Liquidity'] },
    { name: 'Leadership & Exec', icon: '<i class="fa-solid fa-user-tie"></i>', items: ['High-Performance Leadership', 'Strategic Governance', 'Executive Presence'] },
    { name: 'Project & Procurement', icon: '<i class="fa-solid fa-diagram-project"></i>', items: ['Agile Project Management', 'Contract & Claims Management', 'Public Private Partnerships'] },
    { name: 'HR & Talent', icon: '<i class="fa-solid fa-users"></i>', items: ['Strategic Talent Analytics', 'L&D Management', 'Performance Management'] },
    { name: 'Operations & Quality', icon: '<i class="fa-solid fa-gears"></i>', items: ['Lean Six Sigma Controls', 'Root Cause Analysis', 'Operational Excellence'] },
    { name: 'Oil & Energy', icon: '<i class="fa-solid fa-bolt"></i>', items: ['Petroleum Economics', 'PSC Negotiations', 'Energy Transition Strategy'] },
    { name: 'HSE & Safety', icon: '<i class="fa-solid fa-shield-halved"></i>', items: ['ISO 45001 Compliance', 'Emergency Response', 'Crisis Management'] }
  ];

  megaMenuGrid.innerHTML = categories.map(cat => `
    <div class="mega-menu-category">
      <div class="mega-category-header">
        <span class="mega-category-icon">${cat.icon}</span>
        <span>${cat.name}</span>
      </div>
      <div class="mega-course-list">
        ${cat.items.map(item => `<a href="#programmes" class="mega-course-link">&bull; ${item}</a>`).join('')}
      </div>
    </div>
  `).join('');
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
        <div class="card-actions">
          <button class="btn btn-outline-navy btn-sm" onclick="openCourseModal('${course.id}')">View Details</button>
          <button class="btn btn-primary btn-sm" onclick="openEmployerInvoiceModal('${course.id}', '${nextSession.id}')">Request Invoice</button>
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
        <div style="display: flex; gap: 0.75rem;">
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
}

function closeAllModals() {
  document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
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
            <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.2rem;">Plot 412, Central Business District, Abuja, Nigeria | Tel: +234 (09) 461 8000</div>
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

// 11. Staff Admin Dashboard Renderer
function renderAdminDashboard() {
  const container = document.getElementById('adminDashboardContent');
  if (!container) return;

  const invoices = APP_STATE.invoices;
  const enrolments = APP_STATE.enrolments;

  container.innerHTML = `
    <div class="admin-metrics-grid">
      <div class="metric-card">
        <div class="metric-title">Total Invoice Requests</div>
        <div class="metric-value">${invoices.length}</div>
      </div>
      <div class="metric-card">
        <div class="metric-title">Confirmed Self-Funded Enrolments</div>
        <div class="metric-value">${enrolments.length}</div>
      </div>
      <div class="metric-card">
        <div class="metric-title">Active Flagship Courses</div>
        <div class="metric-value">3</div>
      </div>
      <div class="metric-card">
        <div class="metric-title">Total Scheduled Venues</div>
        <div class="metric-value">5 Cities</div>
      </div>
    </div>

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

function renderTeamCarousel() {
  const track = document.getElementById('teamCarouselTrack');
  if (!track) return;

  const filteredTeam = TEAM_DATA.filter(member => {
    if (currentTeamCategory === 'all') return true;
    return member.category === currentTeamCategory;
  });

  track.innerHTML = filteredTeam.map(m => `
    <div class="team-card">
      <div class="team-image-container">
        <img src="${m.image}" alt="${m.name}" class="team-image" loading="lazy">
        <span class="team-role-tag">${m.badge}</span>
      </div>
      <h3 class="team-name">${m.name}</h3>
      <div class="team-role">${m.role}</div>
      <p class="team-bio">${m.bio}</p>
      <div class="team-card-footer">
        <span class="team-cat-badge">${m.categoryLabel}</span>
        <a href="#leadership" class="team-social-link" title="LinkedIn Profile"><i class="fa-brands fa-linkedin-in"></i></a>
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
