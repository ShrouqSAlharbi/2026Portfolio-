export const bookingProject = {
  code: 'MF-001',
  title: 'Office Booking Management System',
  role: 'Software Designer · Quick Step',
  overview:
    'A role-based dashboard (internally called "Quick Booking") for managing hall and meeting-room reservations. Admins, supervisors, and beneficiaries each get their own view — booking halls and meetings, managing users, and tracking activity through at-a-glance stats like completed meetings, cancelled meetings, and hours booked.',
  stack: ['Vue.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Git'],
  features: [
    'Role-based access for admins, supervisors, and beneficiaries',
    'Hall management — add, edit, and track available halls',
    'Meeting and reservation management, including cancellations',
    'Beneficiary and user management from a dedicated admin panel',
    'Dashboard stats: completed meetings, cancelled meetings, completed hours, and available halls at a glance',
  ],
  challenges: [
    {
      title: 'Modeling three different roles',
      detail:
        'Admins, supervisors, and beneficiaries all need different permissions and views into the same underlying halls and meetings data — the UI had to stay consistent without leaking admin-only controls into other roles.',
    },
    {
      title: 'Booking conflicts',
      detail:
        'Preventing two people from booking the same hall at the same time required careful state handling on the frontend while the meetings list updated live.',
    },
    {
      title: 'Team handoff',
      detail:
        'Working inside an existing codebase meant learning established Vue patterns and Git workflows quickly to avoid disrupting the rest of the team.',
    },
  ],
  lessons: [
    'How to design a UI that changes meaningfully based on who is logged in, not just what they can click',
    'Why edge cases (double-booking, cancellations, empty states) matter as much as the happy path',
    'How to collaborate through Git branches, reviews, and daily syncs on a real team',
  ],
}

export const taibahMapProject = {
  code: 'MF-002',
  title: 'Taibah Map Visualization',
  role: 'Graduation Project',
  repoUrl: 'https://github.com/ShuruqAlharbi24/TaibahMap',
  overview:
    'An interactive campus map for Taibah University, built as a graduation project to help students and visitors navigate campus without getting lost. Every building is clickable — surfacing its name, number, a photo, and a floor-by-floor breakdown of what is inside — and the map itself is filterable by category, from cafés and restaurants to health services, prayer rooms, and accessible routes.',
  stack: ['Leaflet.js', 'QGIS / qgis2web', 'PHP', 'JavaScript', 'CSS'],
  features: [
    'Clickable buildings open a detail panel with a photo, description, and per-floor contents',
    'Category layers (cafés, restaurants, parking, health services, ATMs, prayer rooms, gates, and more) toggle on and off independently',
    'Search finds a building or place by name and zooms straight to it',
    'Point-to-point directions draw a route across campus',
    'Fully right-to-left Arabic interface',
  ],
  challenges: [
    {
      title: 'Turning GIS data into a web map',
      detail:
        'The campus map started as GIS layers authored in QGIS. Getting that data into a fast, styleable web map meant exporting through qgis2web and hand-tuning the Leaflet layers, markers, and clustering on top of it.',
    },
    {
      title: 'A lot of buildings, a lot of state',
      detail:
        'Dozens of buildings each needed their own info panel, photo, and floor list without the map feeling cluttered — solved with on-demand popups and category layers that stay hidden until a visitor asks for them.',
    },
    {
      title: 'RTL from the ground up',
      detail:
        'Every panel, label, and control had to work correctly in Arabic right-to-left, not just be translated after the fact.',
    },
  ],
  lessons: [
    'How to take real GIS/QGIS data and ship it as an interactive, filterable web map with Leaflet',
    'How to design an interface that stays usable once dozens of data layers are involved',
    'How to build a bilingual, RTL-first UI rather than retrofitting one',
  ],
}
