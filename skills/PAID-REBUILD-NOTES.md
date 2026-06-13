# Paid products → Claude skills — rebuild notes

> Written 2026-06-13, after the free tier was rebuilt as 3 skills (executive-lens, ai-communication-audit, visibility-toolkit). These are notes-to-self for converting the **paid** ladder to skills/skill-bundles on its own timeline. Do these one at a time, when audience signal justifies it — not all at once.

## The principle (decided this session)

Every product is a **skill or a skill-bundle, not a document.** Free = skills that diagnose. Paid = skills that *do more*. A buyer should never feel that paying got them fewer capabilities, just more pages. That split-brain is what makes a creator look like a content farm — and a stranger already called the brand "sterile, LLM-generated." The moat is "we ship working AI, not worksheets."

## Reusable build pattern (from the 3 free skills)

- **Format:** Claude Code skill — a `SKILL.md` (frontmatter `name` / `description` / `when_to_use`, then body) + a `README.md` (60-second install + a from-Jimmy note). Zip the folder.
- **Three scoring archetypes** already built and proven:
  - Likert 1–5 × N dimensions → tier band + lowest-dimension gap insight (Executive Lens)
  - Yes/Somewhat/No = 2/1/0 → tier band + weakest-category insight (Promotion Gap, inside Visibility Toolkit)
  - Router → ask the situation, run the right play (Visibility Toolkit)
- **Delivery:** free skills = direct `.zip` from the site. Paid skills = the same `.zip`, delivered through Gumroad checkout (buyer downloads after purchase). Same install instructions.
- **Voice:** short declaratives, the reframe move ("Same work. Different frame."), no guru words, the pay-it-forward close. Keep it one person, not a machine.

---

## 1. Career Visibility Kit — $27 (front door, highest priority)

Today: 6 copy-paste AI prompts (status update, performance-review narrative, project positioning, LinkedIn post, meeting follow-up, champion brief).

**Rebuild as:** a single **router skill** (same shape as Visibility Toolkit). User says which moment they're in → the skill runs the right prompt against their real material and returns a finished draft in their voice. Six plays, one install.

**Why first:** it's already 90% skill-shaped, it's the $27 front door, and it's the lowest-friction first purchase. Converting it proves the paid-skill delivery rail through Gumroad.

---

## 2. AI Career Scorecard — $147  (overlap resolved 2026-06-13)

Today: 18-question diagnostic across 5 dimensions — **fluency, visibility, communication, workflow integration, leadership positioning** — instant scored report.

**Decision (2026-06-13):** the overlap with the free Executive Lens was resolved by **killing the free Lens** and keeping the paid Scorecard. Jimmy chose to protect the $147 revenue product rather than give a scored diagnostic away free. The free front door is now the AI Communication Audit (a different *kind* of diagnostic — runs on real messages, not a self-rated quiz), so there's no longer a free scored-diagnostic cannibalizing this one.

**Rebuild as:** a scored skill (same archetype as the retired Lens — Likert × 5 dims), 18 Q, with a deeper AI-driven report. It currently has no page (ai-audit.html deleted); it sells on Gumroad (`l/ai-career-scorecard`). When rebuilt, it returns as a skill delivered via Gumroad, not a hosted page. The retired Executive Lens SKILL.md (in git history at the 2026-06-13 consolidation commit) is the starting template for the scoring logic.

---

## 3. Run AI — $147

Today: course + Agent OS Technical Reference (agent-os-reference.html, ai-workshop-kit.html).

**Rebuild as:** course that **ships a working starter skill in the box** — the worked example that proves the lesson. The proof that justifies $147 is "here's a real Agent OS skill you now own and can extend," not a PDF about building one. Bundle: the reference + an installable `run-ai-starter` skill + the teaching.

---

## 4. Executive Visibility Playbook — $347 (top of ladder)

Today: 30-day system — 5 signals, 4 frameworks, 12 AI templates, champion brief, implementation system.

**Rebuild as:** a **skill suite**. The free Visibility Toolkit is the base; the paid premium = the 12 AI templates as runnable skills + a **30-day orchestrator skill** that sequences the moves day by day and adapts to the user's situation. The premium is the orchestration + the templates, not more reading.

---

## 5. AI Content Team Framework — $197  (off-avatar — decide whether to keep)

Orphaned (not on homepage or thank-you), and it's about content production, not the IT-pro-getting-passed-over story. Either reposition for the avatar or retire the SKU. Not a rebuild priority.

---

## Cleaned up 2026-06-13
- `ai-audit.html` **deleted** (stale local Scorecard page; the Scorecard sells on Gumroad). If the Scorecard is ever rebuilt, it returns as a skill, not this page.
- `executive-visibility-os.html` **deleted** (stale sales flyer; the live $347 page is `visibility-playbook.html`).
- 301 redirects for retired free-tool URLs were **removed** — those pages simply 404 now (zero traffic, and Google prefers a clean 404 over a flagged redirect). The one external link to update is the "Passed Over" video description (`/promotion-gap-checklist` → point to the skills instead).
- robots.txt: `/thank-you` is now **indexable** (public skills hub). Paid deliverables `ai-workshop-kit` + `agent-os-reference` stay disallowed (Run AI's bundled content).
