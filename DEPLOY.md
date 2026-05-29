# Deploy Instructions
## fromittoinfluence.com → Cloudflare Pages

---

## Normal Deploy (Day-to-Day)

```bash
cd "/Users/santiagogarciaiii/Documents/Claude Executive Assistant/projects/landing-page"
git add -A
git commit -m "your message"
git push
```

That's it. Cloudflare Pages auto-deploys on every push to `main`. No CLI, no credits, no dashboard.

---

## GitHub Repo

https://github.com/sgarciaiii/fromittoinfluence-site

- Branch: `main`
- Auto-deploy: every push triggers a Cloudflare Pages build
- Build config: static site, no build command, publish directory = `.`

---

## Cloudflare Pages Setup (One-Time — Already Done)

Connected via Cloudflare Dashboard → Workers & Pages → fromittoinfluence-site → GitHub → sgarciaiii/fromittoinfluence-site

Domain: `fromittoinfluence.com` — managed at Cloudflare Registrar. DNS wired automatically.

---

## Adding a New Page

HTML files ship with their video — not during pre-production. The file lives in the video's `pre-production/` folder until the video uploads, then gets added here and pushed.

1. Copy the HTML file into this directory (e.g., `monday-prompt.html`)
2. Add the filename to `_live-pages.txt` — this is the gate. Push will be blocked without it.
3. `git push` — done.

The pre-push hook (`.githooks/pre-push`) enforces this automatically.

---

## Approving a Page for Production

Edit `_live-pages.txt` and add the filename. Root files: `filename.html`. Blog files: `blog/filename.html`.

---

## Re-clone Setup (One-Time)

After cloning the repo fresh, run once to activate the pre-push hook:
```bash
git config core.hooksPath .githooks
```

---

## Redirects

Cloudflare Pages reads `_redirects` (same syntax as Netlify). The `netlify.toml` file is kept for reference but Cloudflare ignores it.

Current `_redirects` file covers:
- `/influence-audit`
- `/ai-communication-audit`
- `/ai-cheatsheet`
- `/champion-brief`
- `/hybrid-visibility-checklist`
- `/ai-workshop-kit`
- `/thank-you`
- `/credit-checklist`
- `/strategic-assignment`
- `/*` → `/index.html` (SPA fallback)

---

## Cloudflare MCP (DNS & Pages Management)

Cloudflare MCP is wired in `.mcp.json`. After restarting Claude Code, you can manage DNS records, Pages deployments, and domain settings through natural language.

---

## Historical: Netlify (Retired 2026-05-05)

Previously hosted on Netlify. Retired due to credit limits on free tier. Config preserved in `netlify.toml` for reference.
