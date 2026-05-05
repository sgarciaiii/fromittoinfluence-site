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

1. Create the HTML file (e.g., `new-page.html`)
2. Add a redirect in `netlify.toml` → **no, use `_redirects` instead:**

Add a line to `_redirects`:
```
/new-page  /new-page.html  200
```

3. `git push` — done.

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
