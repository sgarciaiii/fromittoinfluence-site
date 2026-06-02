# GEO Analysis — fromittoinfluence.com
**Generated:** 2026-06-02
**Analyst:** Claude Code / seo-geo skill

---

## GEO Readiness Score: 68/100 → 72/100 (post-fixes applied today)

| Category | Weight | Score | Notes |
|----------|--------|-------|-------|
| Citability | 25% | 18/25 | Good structure; gap: no external-sourced stats |
| Structural Readability | 20% | 17/20 | Clean H hierarchy, FAQ schema; gap: no tables in articles |
| Multi-Modal Content | 15% | 9/15 | Infographics present; gap: no OG images on blog articles |
| Authority & Brand Signals | 20% | 12/20 | Author byline/dates ✅; gap: no Wikipedia, sparse Reddit |
| Technical Accessibility | 20% | 12/20 | SSR ✅, llms.txt ✅, schema ✅; gaps fixed today |

---

## Platform Breakdown

| Platform | Score | Key Driver | Main Gap |
|----------|-------|-----------|----------|
| Google AI Overviews | 75/100 | Solid schema, indexed pages, FAQ markup | No article-specific OG images for rich results |
| Perplexity | 55/100 | Real-time crawl, llms.txt present | Zero Reddit presence (Perplexity sources 46.7% from Reddit) |
| ChatGPT | 40/100 | Site is crawlable, content structured | No Wikipedia entity; low external citations |

---

## AI Crawler Access Status

**Before today:** All AI crawlers technically allowed via `User-agent: * Allow: /` but not explicitly named.
**After today (fixed):** Explicit Allow entries added for:
- GPTBot (ChatGPT)
- OAI-SearchBot (OpenAI search)
- ChatGPT-User (ChatGPT browsing)
- ClaudeBot (Claude)
- anthropic-ai (Anthropic)
- PerplexityBot (Perplexity)
- GoogleOther (Google AI products)

No AI crawlers were blocked before. This change signals explicit intent and future-proofs against accidental glob-pattern blocks.

---

## llms.txt Status: PRESENT ✅

`https://fromittoinfluence.com/llms.txt` exists and is well-structured:
- Descriptive intro with creator credentials
- All 6 blog articles listed with descriptions
- All free tools listed (monday-prompt, political-scan, visibility-sliver-audit, executive-lens, etc.)
- Products listed with prices
- Included in sitemap.xml

**Note per Google's guidance:** llms.txt is not a ranking signal for Google AI Overviews. It benefits Perplexity and other AI crawlers that honor the standard. Treat it as useful but not critical.

---

## Brand Mention Analysis

| Platform | Status | Score Impact |
|----------|--------|-------------|
| YouTube | Active channel ✅ — in sameAs | High |
| LinkedIn | Active personal profile — **added to sameAs today** | Moderate |
| TikTok | Active @fromittoinfluence — **added to sameAs today** | Low-Moderate |
| Instagram | Active @fromittoinfluence — **added to sameAs today** | Low-Moderate |
| Reddit | No presence | Perplexity gap — critical |
| Wikipedia | No entity | ChatGPT gap — high impact |
| Third-party press | Minimal | Low brand authority signals |

**AEO report cross-reference:** LinkedIn scored 88/100 as a Perplexity signal — the strongest source in the entire report. Fixing the schema to include LinkedIn closes the loop between your best AI-visible asset and your site entity.

---

## sameAs Updates Applied Today

**Files modified:** `index.html`, `blog/leadership-cant-see-you.html`, `blog/you-were-playing-the-wrong-game.html`, `blog/your-work-needs-a-return-address.html`, `blog/your-boss-cant-champion.html`, `blog/the-visibility-paradox.html`, `blog/the-ai-communication-gap.html`

**Added to Organization sameAs (index.html):**
- `https://www.linkedin.com/in/santiago-garcia-iii`
- `https://www.tiktok.com/@fromittoinfluence`
- `https://www.instagram.com/fromittoinfluence`

**Added to Person sameAs (index.html + all blog author fields):**
- `https://www.linkedin.com/in/santiago-garcia-iii`
- `https://www.tiktok.com/@fromittoinfluence`
- `https://www.instagram.com/fromittoinfluence`

---

## Passage-Level Citability Analysis

### What's working
- Articles run ~2,100 words — well above the minimum for AI selection
- FAQ sections with proper FAQPage schema on all blog articles — directly matches Q&A query patterns
- Personal data points with specifics: "70% of interactions were terse/directive", "40% reduction in incident resolution time"
- Strong first 60 words in most articles — direct premise statements, not throat-clearing
- Definition blocks present: "The narrative system is the story — what gets said about you in calibration sessions"
- Author byline with job title and date on every article ✅

### Citability gaps
- **No statistics with external sources** — all stats are from Jimmy's personal experience. Valid for E-E-A-T, but AI models prefer citations to studies. Adding even one third-party stat per article (MIT Sloan, McKinsey, Gallup — leadership/career domain) strengthens AI's confidence in quoting the piece.
- **Some articles start with narrative, not a direct answer** — "I got a performance review..." is engaging but buries the core answer. Ideal: a 40-60 word direct-answer lede, then the story.

---

## Technical Gaps Remaining (Not Fixed Today)

### Medium effort

**1. OG images missing on all 6 blog articles**
Blog articles have no `<meta property="og:image">` tags. Social shares and AI rich-result previews fall back to nothing. Article-specific infographics exist in `blog/images/` but need 1200×630 crops for OG use.
- Suggested mapping:
  - leadership-cant-see-you → `three-modes-diagram.png`
  - you-were-playing-the-wrong-game → `two-systems.png`
  - your-work-needs-a-return-address → `attribution-flow.png`
  - your-boss-cant-champion → `three-things-boss.png`
  - the-visibility-paradox → `recency-bias-timeline.png`
  - the-ai-communication-gap → `cognitive-load.png`
- Also missing from BlogPosting `image` property (currently uses logo for all articles)
- Fix when batch-processing articles next — not blocking

**2. No `twitter:image` on blog articles**
Same issue as OG image — social card previews are broken for Twitter/X on all articles. Fix same time as OG images.

**3. `dateModified` is identical to `datePublished` on all articles**
If articles are ever updated, schema should reflect the modification date. Currently `dateModified` is hardcoded to publish date. Low urgency until articles are actually updated.

### High effort (separate workstream)

**4. Reddit presence = zero**
Perplexity sources 46.7% of citations from Reddit. FITI has no Reddit presence at all. This is the single biggest gap for Perplexity AI visibility. Options:
- Participate in r/ITCareerQuestions, r/sysadmin, r/managers — answer real questions, link to articles where genuinely relevant
- Post excerpts from articles as standalone Reddit posts in career-focused subs
- This cannot be automated — it requires authentic participation

**5. No Wikipedia/Wikidata entity**
ChatGPT sources 47.9% from Wikipedia. No Wikipedia article exists for Jimmy Garcia or From IT to Influence. Notability threshold may not be met yet — this is a future-state goal once press mentions, speaking appearances, or industry recognition exist.

**6. No external press/citation coverage**
The brand mentions in the AEO report are thin because no third-party sites have written about FITI. Getting a guest post on a career blog, a mention in an IT leadership newsletter, or a podcast appearance generates the external citations AI models use to build confidence in brand authority.

---

## Top 5 Highest-Impact Changes (Ranked)

| Priority | Change | Effort | Impact |
|----------|--------|--------|--------|
| 1 | **LinkedIn/TikTok/Instagram in sameAs** | Done ✅ | Closes entity graph gap; LinkedIn is highest AI signal per AEO report |
| 2 | **Explicit AI crawlers in robots.txt** | Done ✅ | Future-proofing; minor signal |
| 3 | **OG images on blog articles** | 2–3 hours | Unlocks rich results in Google AI Overviews; improves social sharing |
| 4 | **Reddit presence** | Ongoing | Biggest Perplexity gap; no shortcut |
| 5 | **One external-sourced stat per article** | 30 min/article | Improves AI confidence in quoting content |

---

## Schema Health Summary

| Schema Type | Present | Quality |
|-------------|---------|---------|
| WebSite | ✅ | Good — has SearchAction |
| Organization | ✅ | Good — logo, sameAs (now 4 platforms) |
| Person | ✅ | Good — credentials, knowsAbout, sameAs (now 4 platforms) |
| BlogPosting | ✅ | Solid — datePublished, author ref, publisher |
| FAQPage | ✅ | Strong — 4 Q&A pairs per article, all in schema |
| BreadcrumbList | ✅ | Present on all articles |
| Article image | ⚠️ | Uses logo instead of article-specific image on all posts |
| Product schema | ✗ | Product pages have no schema — low priority for now |

---

## What Was Deployed Today

- `robots.txt` — Added explicit Allow entries for 7 AI crawlers
- `index.html` — LinkedIn, TikTok, Instagram added to Organization and Person sameAs
- `blog/*.html` (6 files) — LinkedIn, TikTok, Instagram added to author sameAs in all BlogPosting schemas
- **Deploy required** — push to Cloudflare Workers to go live

---

## Done When (per backlog)

- [x] Report generated
- [x] Critical findings logged (sameAs entity gap, AI crawler access, llms.txt confirmed)
- [x] Quick-win fixes applied (sameAs x7 files, robots.txt)
- [ ] **Deploy to production** — run deploy script or `wrangler deploy` from `projects/landing-page/`
- [ ] OG images added to blog articles (medium effort, separate session)
- [ ] Reddit presence started (ongoing, separate workstream)
