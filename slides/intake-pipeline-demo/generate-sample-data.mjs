// Writes data.json: 40 made-up clients for the intake pipeline demo.
// Run from this folder: node generate-sample-data.mjs
//
// Two bottlenecks are planted on purpose so the demo tells a story:
// event leads wait days for a first follow-up, and about 80% of signed
// clients stall on the Services account-setup task.
import { writeFileSync } from 'node:fs';

const AS_OF = new Date('2026-10-09T12:00:00');
const DAY = 86400000;
let seed = 20261009;
const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
const between = (a, b) => a + rnd() * (b - a);
const pick = arr => arr[Math.floor(rnd() * arr.length)];
const iso = d => d.toISOString().slice(0, 16) + 'Z';

const config = {
  version: 1,
  title: 'Client intake pipeline',
  asOf: AS_OF.toISOString().slice(0, 10),
  sampleData: true,
  sources: ['Web form', 'Referral', 'Event', 'Phone/DM'],
  milestones: [
    { key: 'contact', label: 'First contact' },
    { key: 'followup', label: 'First follow-up sent' },
    { key: 'reply', label: 'First reply' },
    { key: 'orientation', label: 'Orientation attended' },
    { key: 'docsSent', label: 'Documents sent' },
    { key: 'signed', label: 'Signed' },
    { key: 'started', label: 'Started' },
  ],
  steps: [
    { label: 'Contact to follow-up', short: 'Waiting on first follow-up', target: 1, owner: 'Intake', notify: 'Slack #intake' },
    { label: 'Follow-up to reply', short: 'Waiting on their reply', target: 3, owner: 'Intake', notify: 'Text to intake lead' },
    { label: 'Reply to orientation', short: 'Waiting on orientation', target: 7, owner: 'Intake', notify: 'Reminder email to client' },
    { label: 'Orientation to docs sent', short: 'Waiting on documents to go out', target: 2, owner: 'Services', notify: 'Slack #services' },
    { label: 'Docs sent to signed', short: 'Waiting on signature', target: 5, owner: 'Intake', notify: 'Reminder email to client + Slack #intake' },
    { label: 'Signed to started', short: 'Waiting on onboarding tasks', target: 7, owner: 'Services', notify: 'Slack to the task owner' },
  ],
  checkin: { label: 'Check-in interval', short: 'Due for a check-in', target: 14, owner: 'Services', notify: 'Email to the assigned coach' },
  taskRule: { days: 3, notify: 'Slack to the task owner, copy to team lead' },
};

const TASKS = [
  { team: 'Intake', name: 'Send welcome packet' },
  { team: 'Intake', name: 'Schedule first 1:1' },
  { team: 'Services', name: 'Set up accounts and access' },
  { team: 'Services', name: 'Assign training plan' },
];
const FIRST = ['Maria','James','Aisha','Daniel','Priya','Marcus','Elena','Tomás','Grace','Kwame','Sofia','Andre','Lena','Omar','Rachel','Diego','Hana','Victor','Nia','Sam','Jordan','Camille','Ravi','Talia','Isaac','Mei','Noah','Zara','Luis','Imani','Felix','Ana','Theo','Yara','Ben','Leah','Kofi','Iris','Mateo','Simone'];
const LAST = ['Alvarez','Okafor','Chen','Brooks','Patel','Nguyen','Ramirez','Kim','Haddad','Mensah','Rossi','Walker','Ortiz','Bello','Fischer','Silva','Tanaka','Morales','Adeyemi','Reyes'];
const SIGNED = config.milestones.length - 2;

const clients = FIRST.map((first, i) => {
  const source = pick(['Web form','Web form','Web form','Referral','Referral','Event','Event','Phone/DM']);
  const contact = new Date(AS_OF - (2 + 88 * Math.pow(rnd(), 1.7)) * DAY);
  const blocked = i % 5 < 4;
  const gaps = [
    source === 'Event' ? between(3, 6.5) : source === 'Phone/DM' ? between(0.2, 1.6) : between(0.1, 1.1),
    between(0.5, 4.5),
    between(2, 9),
    between(0.5, 2.5),
    source === 'Referral' ? between(1, 4) : between(2, 7.5),
    blocked ? between(10, 22) : between(2, 6),
  ];
  const dates = [contact];
  for (const g of gaps) {
    const next = new Date(dates[dates.length - 1].getTime() + g * DAY);
    if (next > AS_OF) break;
    dates.push(next);
  }
  const reached = dates.length - 1;
  const started = reached === config.milestones.length - 1;
  let lastCheckin = null;
  if (started) {
    let t = dates[reached].getTime();
    const cadence = rnd() < 0.25 ? 21 : 7;
    while (t + cadence * DAY < AS_OF.getTime()) t += cadence * DAY;
    lastCheckin = new Date(t);
  }
  const tasks = reached < SIGNED ? [] : TASKS.map(t => {
    let done = started || !(blocked && t.team === 'Services' && t.name.startsWith('Set up'));
    if (!started && !blocked) done = rnd() < 0.6 || t.team === 'Intake';
    return { ...t, done };
  });
  const milestones = Object.fromEntries(dates.map((d, k) => [config.milestones[k].key, iso(d)]));
  return {
    id: `c${String(i + 1).padStart(2, '0')}`,
    name: `${first} ${LAST[i % LAST.length]}`,
    source, milestones,
    ...(lastCheckin ? { lastCheckin: iso(lastCheckin) } : {}),
    tasks,
  };
});

writeFileSync(new URL('./data.json', import.meta.url), JSON.stringify({ ...config, clients }, null, 2) + '\n');
console.log(`Wrote data.json: ${clients.length} clients, as of ${config.asOf}`);
