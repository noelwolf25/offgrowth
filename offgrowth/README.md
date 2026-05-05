# offgrowth

Growth skills for product teams. Structured prompts and frameworks for auditing friction, onboarding, activation, retention, and more.

```
npm install offgrowth
```

---

## What is this?

offgrowth is a library of opinionated growth audit prompts — built to be dropped into any AI assistant (Claude, ChatGPT, etc.) to get structured, actionable analysis of your product.

Each skill is a markdown file with a clear input model, a diagnostic framework, and a defined output format. No magic. Just sharp questions, applied consistently.

---

## Skills in v1

| Skill | File | What it does |
|---|---|---|
| Friction Audit | `friction-audit` | Finds where users drop off and why |
| Onboarding Review | `onboarding-review` | Evaluates the first-run experience |
| Value Proposition Check | `value-proposition-check` | Tests if your messaging is clear and specific |
| Activation Moment Finder | `activation-moment-finder` | Identifies and maps the path to your aha moment |
| Retention Loop Diagnosis | `retention-loop-diagnosis` | Maps and stress-tests your behavioral loops |
| Pricing Page Critique | `pricing-page-critique` | Audits your pricing page for conversion killers |

---

## Usage

### With Node.js

```js
const offgrowth = require('offgrowth');

// List all available skills
console.log(offgrowth.list());
// → ['friction-audit', 'onboarding-review', 'value-proposition-check', ...]

// Get a specific skill prompt
const prompt = offgrowth.get('friction-audit');
console.log(prompt);

// Get all skills
const all = offgrowth.all();
```

### Directly with an AI assistant

Each skill file is a self-contained markdown prompt. You can:

1. Open the file from `node_modules/offgrowth/skills/`
2. Copy the prompt section
3. Paste it into Claude, ChatGPT, or any assistant
4. Replace the `[input]` placeholder with your product URL, screenshots, or description

---

## How to run a skill

Every skill follows the same pattern:

1. **Pick the skill** that matches your question
2. **Gather your input** — a URL, screenshots, copy, or a written description of your flow
3. **Paste the prompt** into your AI assistant with your input attached
4. **Get your analysis** in the structured format defined by the skill

The more specific your input, the sharper the output.

---

## Philosophy

Growth audits fail for one of two reasons: they ask the wrong questions, or they ask vague ones. offgrowth does neither.

Each skill is built around a specific diagnostic question, a structured framework for answering it, and a defined output that tells you what to do next — not just what's wrong.

---

## Roadmap

- [ ] CLI interface (`npx offgrowth run friction-audit`)
- [ ] More skills: competitive positioning, feature adoption, NPS diagnosis
- [ ] Skill chaining: run multiple audits in sequence
- [ ] Output templates for sharing with your team

---

## License

MIT
