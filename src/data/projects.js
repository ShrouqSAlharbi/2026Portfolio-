export const bookingProject = {
  code: 'MF-001',
  title: 'Office Booking Management System',
  role: 'Web Developer Intern · Quick Step',
  overview:
    'An internal tool built so employees could reserve meeting rooms and desks without the back-and-forth of a shared spreadsheet. I worked on the frontend, turning designs into a responsive, component-based Vue application used daily by office staff.',
  stack: ['Vue.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Git'],
  features: [
    'Interactive calendar view for browsing room and desk availability',
    'Real-time booking form with conflict prevention on double-booking',
    'Fully responsive layout, from office desktop monitors to mobile',
    'Reusable Vue components for booking cards, modals, and filters',
    'Clear visual states for available, pending, and booked resources',
  ],
  challenges: [
    {
      title: 'Booking conflicts',
      detail:
        'Preventing two people from booking the same room at the same time required careful state handling on the frontend while the booking list updated live.',
    },
    {
      title: 'Calendar responsiveness',
      detail:
        'A dense calendar grid that worked on a wide desktop screen easily broke on tablets and phones — solved with a component that reflows into a list view below a breakpoint.',
    },
    {
      title: 'Team handoff',
      detail:
        'Working inside an existing codebase meant learning established Vue patterns and Git workflows quickly to avoid disrupting the rest of the team.',
    },
  ],
  lessons: [
    'How component-driven architecture keeps a growing UI maintainable',
    'Why edge cases (double-booking, empty states, timezone display) matter as much as the happy path',
    'How to collaborate through Git branches, reviews, and daily syncs on a real team',
  ],
}
