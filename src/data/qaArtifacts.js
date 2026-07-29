// Illustrative QA artifacts built around a fictional mobile game
// ("Skyfall Arena") to demonstrate documentation quality without
// referencing any confidential or real project details.

export const qaShowcaseMeta = {
  code: 'MF-002',
  title: 'QA Showcase',
  role: 'QA Game Tester',
  disclaimer:
    'All examples below reference a fictional project ("Skyfall Arena") built to demonstrate QA documentation standards — no confidential game or client data is used.',
}

export const testCases = [
  {
    id: 'TC-014',
    title: 'Player equips item from inventory during active match',
    priority: 'High',
    steps: [
      'Launch match with a full inventory',
      'Open inventory panel mid-match',
      'Select an unequipped item and confirm equip',
      'Close inventory panel',
    ],
    expected: 'Item equips instantly, stats update in HUD, no input lag on close.',
  },
  {
    id: 'TC-021',
    title: 'App resumes correctly after OS-level interruption',
    priority: 'High',
    steps: [
      'Start a match',
      'Receive a simulated phone call or notification',
      'Return to the app after 30+ seconds',
    ],
    expected: 'Match state is preserved or gracefully paused; no crash or asset loss.',
  },
  {
    id: 'TC-033',
    title: 'Currency balance updates after in-game purchase',
    priority: 'Critical',
    steps: [
      'Note starting soft-currency balance',
      'Purchase an item from the store',
      'Return to home screen',
    ],
    expected: 'Balance decreases by exact item cost; server and client values match.',
  },
]

export const bugReports = [
  {
    id: 'BUG-1042',
    title: 'HUD timer desyncs from server after reconnect',
    severity: 'High',
    status: 'Verified Fixed',
    environment: 'Android 14 · Mid-tier device · Build 3.4.1',
    steps: [
      'Join a timed match',
      'Toggle airplane mode for 5+ seconds',
      'Reconnect and observe the HUD timer',
    ],
    expected: 'Timer reflects server-authoritative time within 1 second of reconnect.',
    actual: 'Client timer continues counting from pre-disconnect value, drifting up to 8s ahead.',
    evidence: 'Screen recording + server log timestamp attached in ticket.',
  },
  {
    id: 'BUG-1078',
    title: 'Reward popup overlaps close button on small screens',
    severity: 'Medium',
    status: 'Open',
    environment: 'iPhone SE (3rd gen) · iOS 17 · Build 3.4.1',
    steps: ['Complete a match with a reward tier-up', 'Observe the reward popup on match end'],
    expected: 'Close button remains fully visible and tappable on all supported screen sizes.',
    actual: 'Reward icon overlaps the top-right close button, making it hard to tap.',
    evidence: 'Screenshot attached; reproducible on all sub-5.5" devices tested.',
  },
]

export const regressionChecklist = {
  title: 'Regression Checklist — Pre-Release Build',
  groups: [
    {
      label: 'Core Gameplay',
      items: ['Match start / end flow', 'Scoring accuracy', 'Player controls & input mapping'],
    },
    {
      label: 'Economy',
      items: ['Currency balances persist', 'Store purchases process correctly', 'Reward delivery on match end'],
    },
    {
      label: 'Platform',
      items: ['App resumes after backgrounding', 'Push notifications route correctly', 'No new crashes vs. previous build'],
    },
  ],
}

export const smokeChecklist = {
  title: 'Smoke Test — Build Health Check',
  items: [
    'App launches without crashing',
    'Login / session start succeeds',
    'Core game loop is playable start to finish',
    'No blocking errors in first-run logs',
    'Build number matches expected release',
  ],
}

export const apiTesting = {
  title: 'API Testing — Reward Endpoint',
  method: 'POST',
  endpoint: '/v1/match/reward',
  request: {
    matchId: 'm_88213',
    playerId: 'p_00412',
    outcome: 'win',
  },
  response: {
    status: 200,
    body: { rewardId: 'r_2291', currency: 150, xp: 40 },
  },
  assertions: [
    'Status code equals 200',
    'currency value matches server-side reward table for "win" outcome',
    'Response time under 400ms across 20 consecutive calls',
  ],
}

export const sqlValidation = {
  title: 'SQL Validation — Currency Integrity',
  query:
    'SELECT player_id, client_balance, server_balance\nFROM player_currency_audit\nWHERE client_balance != server_balance\nAND updated_at > NOW() - INTERVAL 1 DAY;',
  purpose:
    'Confirms client-reported currency balances match server records after a batch of purchase transactions — flags desync bugs before they reach players.',
  result: '0 rows returned — client and server balances match for all transactions in range.',
}

export const exploratoryNotes = {
  title: 'Exploratory Session Notes — 45 min charter',
  charter: 'Explore inventory + store interactions under poor network conditions.',
  observations: [
    'Throttling network to 2G caused store thumbnails to fail silently — no retry or placeholder shown.',
    'Rapid-tapping "purchase" during a slow response queued duplicate requests (only first was charged, but UI briefly showed two confirmation toasts).',
    'Backing out of the store mid-load left a loading spinner active on the home screen for ~3s.',
  ],
  followUp: 'Filed BUG-1091 for the duplicate confirmation toast; flagged thumbnail retry behavior for design review.',
}

export const severityMatrix = [
  { level: 'Critical', color: 'critical', description: 'Crashes, data loss, or blockers with no workaround', sla: 'Fix before release' },
  { level: 'High', color: 'high', description: 'Major feature broken or badly degraded, workaround exists', sla: 'Fix before release' },
  { level: 'Medium', color: 'medium', description: 'Noticeable issue with limited impact on core flow', sla: 'Fix if time allows' },
  { level: 'Low', color: 'low', description: 'Cosmetic or minor polish issue', sla: 'Backlog' },
]
