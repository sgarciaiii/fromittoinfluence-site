# Beauty Session Brief — fromittoinfluence.com (3rd pass: visual polish)

> Written 2026-06-13 at the end of the consolidation/pruning pass. The site is **deployed and live** — this pass is pure visual/structural polish, not content or strategy. Content, copy, and the product lineup are locked. Don't relitigate them.

## What's already locked (do NOT change)
- **Free lineup:** exactly **2 free skills** — AI Communication Audit (the front-door, email-capture offer) + Visibility Toolkit. Executive Lens was killed (2026-06-13). Paid: $27 Kit (front door) → $147 Run AI → $347 Playbook. $147 Scorecard sells on Gumroad only (no page yet).
- **Voice:** person-first, no guru language, no swipes at competitors. The thank-you origin story is the emotional centerpiece — protect it.
- **Funnel:** homepage hero email form → `/subscribe` → `/thank-you` (the skills hub + origin story). Skills also download directly from `/thank-you` (no email required).

## Design system (already in place)
- Dark theme base `#0c0d14`/`#0a0e1a`, gold accent `#dea01a`/`#f0b428`, green "live" `#34d399`.
- Fonts: Sora (display), DM Sans (body), JetBrains Mono (labels), Instrument Serif (accent).
- Homepage styles: `landing.css` (shared). Thank-you: inline `<style>` in `thank-you.html`.
- Motion: GSAP ScrollTrigger `.reveal` (opacity→in on scroll). Note: this renders blank in non-scrolling/agent contexts — a known tradeoff.

## What needs polish (the actual 3rd-pass work)
1. **Homepage "Two free skills" library** — now 2 cards (was a 3-up grid). Check the `resources-featured` layout holds at 2 cards; it may want a 2-up or centered treatment. Also the AI Communication Audit appears in both the "Start Here" hero-resource block AND the library shelf — reconcile the redundancy (feature once, or differentiate the two placements).
2. **Thank-you page** — the skills grid is `repeat(2,1fr)`; with 2 skills it's now a clean 2-up (good). Earlier lone-3rd-card issue is gone. Do a full visual pass on the origin-story section spacing/typography (it's the centerpiece, currently functional-but-plain).
3. **Accessibility carryover from the audit pass** (not yet fixed — deferred here): mobile nav has no menu (all nav links `display:none`, no hamburger → Blog unreachable on mobile); hero form inputs are placeholder-only (no labels); `#sticky-cta` is `aria-hidden` but contains a focusable link; no `<main>` landmark. These dock the Lighthouse a11y/agentic scores. Good to fold into the beauty pass.
4. **General:** mobile (390px) + landscape pass; the `.reveal` blank-on-load behavior; button-height parity across product cards (the Scorecard wrap issue is gone with the Scorecard off the page, but recheck).

## Verify-live commands
- Homepage hero: `curl -s https://fromittoinfluence.com/ | grep "AI Communication Audit"`
- Deploy: commit + `git push` to `sgarciaiii/fromittoinfluence-site` (Cloudflare auto-builds in ~30s).
