# Intake pipeline dashboard: data format

`index.html` draws everything from one JSON file. By default it reads `data.json` beside it. For another client, add `their-name.json` to this folder and open `index.html?data=their-name.json`. Only plain relative `.json` paths are accepted.

The page has to be served over http(s) (the live site, or `python3 -m http.server` locally). Opening the HTML file directly cannot load the data.

## Shape

```json
{
  "title": "Client intake pipeline",
  "asOf": "2026-10-09",
  "sampleData": true,
  "sources": ["Web form", "Referral", "Event", "Phone/DM"],
  "milestones": [
    { "key": "contact", "label": "First contact" },
    { "key": "signed",  "label": "Signed" },
    { "key": "started", "label": "Started" }
  ],
  "steps": [
    { "label": "Contact to signed", "short": "Waiting on signature", "target": 5, "owner": "Intake", "notify": "Slack #intake" },
    { "label": "Signed to started", "short": "Waiting on onboarding tasks", "target": 7, "owner": "Services", "notify": "Slack to the task owner" }
  ],
  "checkin": { "label": "Check-in interval", "short": "Due for a check-in", "target": 14, "owner": "Services", "notify": "Email to the assigned coach" },
  "taskRule": { "days": 3, "notify": "Slack to the task owner, copy to team lead" },
  "clients": [
    {
      "name": "Maria Alvarez",
      "source": "Web form",
      "milestones": { "contact": "2026-09-25T17:31Z", "signed": "2026-10-02T16:00Z" },
      "lastCheckin": "2026-10-08T15:00Z",
      "tasks": [ { "team": "Services", "name": "Set up accounts and access", "done": false } ]
    }
  ]
}
```

## Fields

| Field | Required | Notes |
|---|---|---|
| `title` | no | Page heading. |
| `asOf` | yes | `YYYY-MM-DD`. "Days waiting" is measured to noon on this date. Set it to the export date. |
| `sampleData` | no | `true` shows the "Sample data" chip. Leave it out for a real client. |
| `sources` | no | Where people first came from, in display order. Any source found on a client but missing here is added at the end. |
| `milestones` | yes | At least 2, **in order**. `key` is what client records use; `label` is what people see. Rename freely: a law firm might use Inquiry, Consult held, Engagement letter sent, Signed, Matter opened. |
| `steps` | yes | Exactly one per gap between milestones (so one fewer than `milestones`). `target` is in days. `short` is the "Waiting on..." text. `owner` is the team responsible. `notify` is where the flag goes. |
| `checkin` | no | Rule for clients who have reached the last milestone. Leave it out if the pipeline ends at "started". |
| `taskRule` | no | When an open onboarding task gets flagged. Defaults to 3 days. |
| `clients[].name` | yes | Shown as plain text. |
| `clients[].source` | no | Defaults to "Unknown". |
| `clients[].milestones` | yes | Dates keyed by milestone `key`. The first milestone is required. Use ISO dates with a `Z` (UTC), e.g. `2026-09-25T17:31Z`. A missing or future date ends the chain: later milestones are ignored. |
| `clients[].lastCheckin` | no | Only used once the client reaches the last milestone. |
| `clients[].tasks` | no | Shown once the client reaches the second-to-last milestone. An open task blocks the final step. |

## How the numbers work

- **Step medians count people still waiting.** A client stuck in a step counts at their days-waiting-so-far. Without this, a stall stays invisible until people finally get through it.
- **Stalled** means the current wait is longer than that step's `target`.
- **Bottleneck** is the step whose median is furthest over its target.
- **Source and date filters** change every chart. **Step and status filters** narrow the flags and client list.

## Filling it from a client's systems

Each milestone is one date column in their CRM, Notion database, or spreadsheet (e.g. "Consult date", "Engagement letter sent", "Signed on"). Export the clients, rename those columns to the milestone `key`s, and convert to this JSON. In a live build, an n8n workflow writes this file on a schedule so the page keeps itself current.

To regenerate the sample: `node generate-sample-data.mjs`.
