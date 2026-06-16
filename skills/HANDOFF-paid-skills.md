# HANDOFF: convert the remaining 3 paid products to skills

> ✅ **COMPLETE 2026-06-14.** All 3 converted — AI Career Scorecard (`skills/ai-career-scorecard/`), Run AI (`deliverables/run-ai-starter/` bundled into `run-ai.zip`), Executive Visibility Playbook (`skills/executive-visibility-playbook/`). All show `✅ Skill` in the `work.md` Format column; 3 zips in `workspace/gumroad/deliverables/`; manifest + decision log updated. Only open item: Jimmy re-uploads the 3 zips to Gumroad (todo in `todos.md`). Brief below kept for reference.

> Cold-start brief for a new session. Goal: finish enforcing the **product format standard** (`context/work.md` → "PRODUCT FORMAT STANDARD") by converting the last 3 paid products from HTML documents into Claude skills / skill-bundles. Two are already done as the pattern; copy it.

## Why
Every product must be a **skill or skill-bundle, not a static document** (a buyer should never feel paying got them fewer capabilities, just more pages). The `Format` column in the `work.md` paid ladder flags what's left: anything `⚠️ HTML → convert` is owed. Archetypes + per-product rebuild notes: `projects/landing-page/skills/PAID-REBUILD-NOTES.md`.

## The proven pattern (already done — copy it exactly)
- **Free skills** (`projects/landing-page/skills/ai-communication-audit/`, `.../visibility-toolkit/`) — structural templates.
- **Career Visibility Kit** (`projects/landing-page/skills/career-visibility-kit/`) — the most recent worked example: a *router skill* (SKILL.md `name`/`description`/`when_to_use` frontmatter → intro in Jimmy's voice → "How to run this" router → one play per moment, each with inputs-to-ask + output rules → pay-it-forward close) + a `README.md` (60-sec install for Claude Code AND browser + a from-Jimmy note).

**Build steps per product:**
1. Write `projects/landing-page/skills/<name>/SKILL.md` + `README.md`.
2. Zip: `cd projects/landing-page/skills && zip -rq "$REPO/workspace/gumroad/deliverables/<name>.zip" <name> -x "*.DS_Store"`.
3. Update `context/work.md` Format column: `⚠️ HTML → convert` → `✅ Skill` (+ note the deliverable path).
4. Update `workspace/gumroad/README.md` (the manifest) deliverable row.
5. Jimmy re-uploads the zip to Gumroad (Content tab) — not automatable.

`skills/` is excluded from deploy (`.assetsignore`), so building there is safe.

## The 3 to convert (source material already rethemed + in the repo)

### 1. AI Career Scorecard ($147) — MOST TRACTABLE, do first
- **Shape:** a scored skill (Likert/scored, 18 questions × 5 dimensions → tier band + per-category verdict + one Monday action). Same archetype as the retired Executive Lens.
- **Source of all logic:** `workspace/gumroad/deliverables/ai-career-scorecard.html` — the 5 dimensions (AI Fluency, AI Visibility, AI Communication, AI Workflow Integration, AI Leadership Positioning), all 18 questions with their 1–4 scored options, the band thresholds (≥75 high / ≥45 mid / else low), the verdicts, and the per-band "this week" actions are ALL in the `CATEGORIES` JS array. The skill asks the questions conversationally, scores them, returns the banded report. Bands: AI Leader / AI Adopter / AI Spectator.
- Keep semantic scoring; the skill should feel like a coach walking them through it, not a form.

### 2. Run AI ($147) — course; ship a starter skill in the box
- **Shape:** the course/teaching stays, but bundle a working **`run-ai-starter`** installable skill — "here's a real Agent OS skill you now own and can extend" — that's the proof justifying $147, not a PDF about building one.
- **Source:** `workspace/gumroad/deliverables/{ai-workshop-kit.html, agent-os-reference.html}` (both rethemed). The deliverable is `run-ai.zip` (those 2 files) — add the starter skill to it and rebuild the zip.

### 3. Executive Visibility Playbook ($347) — biggest build, do last
- **Shape:** a skill suite. The free Visibility Toolkit is the base; the paid premium = the 12 AI templates as runnable skills + a **30-day orchestrator skill** that sequences the moves day by day and adapts to the user's situation. Premium = orchestration + templates, not more reading.
- **Source:** `projects/landing-page/visibility-playbook.html` (dual-use site page — has the 12 templates `t1`–`t12`, the 5 signals, 4 frameworks). ⚠️ This page ALSO still needs its missing Gumroad buy button fixed (separate audit item) — note it but the skill conversion is the focus here.

## Design system (if any preview/HTML is touched)
Firelit purple: base `#0B0A14` · purple `#9D86FF` (→`#7C5CF0`, light `#C9A9FF`) · cyan `#2BDBD0` · ink `#EDEAF5`/`#9A93AE`/`#6E6982` · Space Grotesk + Hanken Grotesk + Newsreader · logo `projects/landing-page/knight-mark.png`. Never recolor semantic score colors (green/amber/red) to purple.

## Done when
All 3 show `✅ Skill` in the `work.md` Format column, 3 zips in `workspace/gumroad/deliverables/`, manifest updated, and a decision logged. Then the format-standard hole is fully closed in practice, not just on paper.
