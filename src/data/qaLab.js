// Content for the "QA Lab: Find The Bug" interactive section.
// Edit copy here without touching component logic.

export const qaLabIntro = {
  kicker: 'QA Lab',
  title: 'Find The Bug',
  tagline: 'Every application has hidden problems. A QA Engineer’s job is to find them before users do.',
  body: "This is a small, safe sandbox — three fake app screens, five real bugs planted on purpose. Explore like you would on the job: look closely, try to break things, and report what you find.",
  cta: 'Start Mission',
}

export const bugs = {
  'BUG-001': {
    id: 'BUG-001',
    title: 'Booking button overlaps the calendar',
    type: 'UI Bug',
    severity: 'Medium',
    priority: 'High',
    expected: 'The "Book Room" button should sit clear of the calendar widget on every screen size.',
    actual: 'The button is positioned on top of the calendar, hiding part of the current week.',
    qaSkill: 'Attention to Detail',
    challenge: 0,
  },
  'BUG-002': {
    id: 'BUG-002',
    title: 'Notification icon missing from header',
    type: 'UI Bug',
    severity: 'Low',
    priority: 'Medium',
    expected: 'A bell icon should indicate unread notifications in the header.',
    actual: 'The icon slot renders empty — the notification count has nothing to anchor to.',
    qaSkill: 'Visual Inspection',
    challenge: 0,
  },
  'BUG-003': {
    id: 'BUG-003',
    title: 'Empty required fields are not blocked',
    type: 'Functional Bug',
    severity: 'High',
    priority: 'High',
    expected: 'Submitting the form with empty required fields should show inline validation errors.',
    actual: 'The form submits silently — no error, no feedback, nothing tells the user what went wrong.',
    qaSkill: 'Exploratory Testing',
    challenge: 1,
  },
  'BUG-004': {
    id: 'BUG-004',
    title: 'Invalid email format is accepted',
    type: 'Functional Bug',
    severity: 'Medium',
    priority: 'Medium',
    expected: 'An email without an "@" or domain should be rejected with a clear message.',
    actual: 'Malformed addresses like "not-an-email" pass validation without complaint.',
    qaSkill: 'Edge Case Testing',
    challenge: 1,
  },
  'BUG-005': {
    id: 'BUG-005',
    title: 'Confirm button gives no explanation when disabled',
    type: 'Usability Bug',
    severity: 'Medium',
    priority: 'Medium',
    expected: 'If booking can’t be confirmed yet, the UI should explain why (e.g. "Select a date first").',
    actual: 'The Confirm button is simply greyed out with zero context — the user is stuck guessing.',
    qaSkill: 'UX Testing',
    challenge: 2,
  },
}

export const challenges = [
  {
    id: 'bug-hunt',
    kicker: 'Bug Hunt #001',
    title: 'Find The UI Issue',
    instructions:
      'This is a booking app’s home screen. Two things are visually broken. Scan it like a tester would — then click directly on what looks wrong.',
    requiredBugs: ['BUG-001', 'BUG-002'],
  },
  {
    id: 'edge-case',
    kicker: 'Challenge 02',
    title: 'Edge Case Challenge',
    instructions:
      'A registration form — but it’s hiding two validation bugs. Try submitting it in ways a real user might: leave something blank, or type an email that isn’t quite right.',
    requiredBugs: ['BUG-003', 'BUG-004'],
  },
  {
    id: 'ux-test',
    kicker: 'Challenge 03',
    title: 'User Experience Test',
    instructions:
      'Walk through booking a meeting room. Somewhere in this flow, the app leaves the user without enough information to move forward. Flag it.',
    requiredBugs: ['BUG-005'],
  },
]

export const totalBugs = Object.keys(bugs).length
