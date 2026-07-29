// Single source of truth for all site copy. Edit freely — no component
// changes needed to update text, links, or the resume file.

export const profile = {
  name: 'Shuruq',
  role: 'QA Game Tester',
  previousRole: 'Web Developer Intern',
  location: 'Add your city, country',
  email: 'shuruqalharbi@outlook.com',
  phone: '+966583265442',
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourusername',
  // Drop your resume PDF into /public/resume.pdf, then this link works as-is.
  resumeUrl: '/resume.pdf',
}

export const nav = [
  { id: 'journey', label: 'Journey' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'qa-lab', label: 'QA Lab' },
  { id: 'projects', label: 'Projects' },
  { id: 'process', label: 'Process' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
]

export const hero = {
  kicker: 'QA Game Tester · Web Developer',
  headline: ['I Build Experiences.', 'I Protect Experiences.'],
  subheadline:
    'From building modern web applications to testing games enjoyed by thousands of players, I combine development knowledge with quality assurance to deliver reliable digital experiences.',
  actions: [
    { label: 'Explore Journey', href: '#journey', variant: 'primary' },
    { label: 'View Projects', href: '#projects', variant: 'secondary' },
    { label: 'Download Resume', href: profile.resumeUrl, variant: 'ghost', download: true },
  ],
}

export const journey = {
  kicker: 'The Journey',
  title: 'From writing code to breaking it on purpose.',
  lineOne: 'I started by building software.',
  lineTwo: 'Today I protect the quality of software.',
  body: "Every feature I once shipped as a developer taught me something a QA checklist never could: how software actually fails. That perspective is what I bring into every test session now — I don't just follow test cases, I understand the system well enough to know where it's most likely to break.",
  stats: [
    { value: '2', suffix: '+', label: 'Years across development & QA' },
    { value: '11', suffix: '', label: 'Testing disciplines applied daily' },
    { value: '6', suffix: '', label: 'Months building production frontend' },
    { value: '100', suffix: '%', label: 'Of bugs reported with clear repro steps' },
  ],
}

export const experience = {
  kicker: 'Experience',
  title: 'Two roles, one obsession with quality.',
  quickStep: {
    company: 'Quick Step',
    role: 'Web Developer Intern',
    duration: '6 Months',
    project: 'Office Booking Management System',
    summary:
      'Joined as a frontend-focused intern on an internal tool built to manage meeting rooms and desk bookings across the office. Worked directly with the development team from planning through delivery.',
    responsibilities: [
      'Developed frontend features end-to-end using Vue.js',
      'Built fully responsive interfaces for desktop and mobile use',
      'Wrote component-driven JavaScript for booking flows and calendar views',
      'Structured and styled interfaces with semantic HTML and CSS',
      'Used Git for version control and collaborative development',
      'Participated in code reviews and daily syncs with the dev team',
    ],
    stack: ['Vue.js', 'JavaScript', 'HTML5', 'CSS3', 'Git'],
  },
  transition: {
    kicker: 'The Turning Point',
    title: 'Building software taught me how it breaks.',
    body: "Six months of shipping real features gave me something most testers don't start with: an instinct for how software is actually put together. I learned to read component trees, trace state changes, and predict where a rushed deadline or an edge case would leave a crack. When the opportunity to move into QA came up, it didn't feel like a departure from development — it felt like using that same knowledge from the other side of the screen.",
  },
  qa: {
    company: 'Mirai / Scopely',
    role: 'QA Game Tester',
    duration: 'Present',
    summary:
      'Test live and in-development mobile games to make sure every release meets a high bar for stability, playability, and polish before it reaches players. Work spans full test cycles, from first pass to final verification.',
    responsibilities: [
      { label: 'Manual Testing', note: 'Hands-on verification across builds and platforms' },
      { label: 'Functional Testing', note: 'Confirming features work exactly as designed' },
      { label: 'Regression Testing', note: 'Making sure new builds don’t reopen old bugs' },
      { label: 'Smoke Testing', note: 'Fast health checks before deeper test cycles begin' },
      { label: 'Exploratory Testing', note: 'Unscripted sessions to surface the unexpected' },
      { label: 'Edge Case Testing', note: 'Pushing systems to their limits on purpose' },
      { label: 'Gameplay Testing', note: 'Evaluating balance, flow, and player experience' },
      { label: 'UI Testing', note: 'Catching layout, scaling, and interaction issues' },
      { label: 'Bug Reporting', note: 'Clear, reproducible reports engineers can act on fast' },
      { label: 'Reproducing Issues', note: 'Isolating root cause before it reaches a ticket' },
      { label: 'Verifying Fixes', note: 'Closing the loop once a fix lands in build' },
    ],
  },
}

export const skills = {
  kicker: 'Command Center',
  title: 'Every tool I use to keep quality high.',
  groups: [
    {
      id: 'qa',
      label: 'QA',
      accent: 'cyan',
      items: [
        'Manual Testing',
        'Regression Testing',
        'Smoke Testing',
        'Exploratory Testing',
        'Functional Testing',
        'API Testing',
        'Bug Reporting',
      ],
    },
    {
      id: 'dev',
      label: 'Development',
      accent: 'electric',
      items: ['JavaScript', 'Vue.js', 'HTML5', 'CSS3', 'Git'],
    },
    {
      id: 'tools',
      label: 'Tools',
      accent: 'violet',
      items: ['Postman', 'JIRA', 'SQL', 'GitHub'],
    },
  ],
}

export const qaProcess = {
  kicker: 'How I Work',
  title: 'A quality process, not a checklist.',
  steps: [
    {
      title: 'Discover',
      description: 'Understand the feature, the build, and what changed since the last pass.',
    },
    {
      title: 'Analyze',
      description: 'Break the scope into testable risk areas — what’s most likely to break?',
    },
    {
      title: 'Plan',
      description: 'Design test cases and checklists that cover the critical paths and edge cases.',
    },
    {
      title: 'Execute',
      description: 'Run manual, functional, and exploratory passes across devices and builds.',
    },
    {
      title: 'Report',
      description: 'File clear, reproducible bug reports with severity, evidence, and repro steps.',
    },
    {
      title: 'Verify',
      description: 'Confirm each fix actually resolves the issue without introducing new ones.',
    },
    {
      title: 'Improve',
      description: 'Feed findings back into the process so the next cycle catches issues earlier.',
    },
  ],
}

export const certifications = {
  kicker: 'Certifications',
  title: 'Continuous learning, on the record.',
  items: [
    {
      name: 'ISTQB Foundation Level (in progress)',
      issuer: 'ISTQB',
      date: 'Add date',
      note: 'Formal grounding in test design techniques and QA fundamentals.',
    },
    {
      name: 'Add your certification',
      issuer: 'Add issuer',
      date: 'Add date',
      note: 'Add a short note about what it covers.',
    },
  ],
}

export const contact = {
  kicker: 'Get In Touch',
  title: 'Open to QA and hybrid dev/QA roles.',
  body: "Whether you're hiring a game tester who understands the code behind the build, or a developer who won't let bugs slip past review — let's talk.",
}
