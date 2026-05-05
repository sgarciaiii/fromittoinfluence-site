# Deploy & DNS Instructions
## fromittoinfluence.com → Netlify (Static HTML)

---

## Step 1 — Deploy to Netlify

**Option A: Drag and drop (fastest)**
1. Go to [app.netlify.com](https://app.netlify.com)
2. Log in (or create a free account)
3. From the Sites dashboard, drag the entire `landing-page/` folder onto the drop zone
4. Netlify assigns a random URL (e.g. `random-name-123.netlify.app`) — note it
5. Rename the site: Site Settings → Site name → `fromittoinfluence`
   - This gives you `fromittoinfluence.netlify.app` as the staging URL

**Option B: Netlify CLI**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy from the landing-page directory
cd "Documents/Claude Executive Assistant/projects/landing-page"
netlify deploy --prod --dir .
```

---

## Step 2 — Add Custom Domain in Netlify

1. In Netlify → your site → **Domain settings**
2. Click **Add a domain** → enter `fromittoinfluence.com`
3. Also add `www.fromittoinfluence.com`
4. Netlify shows you the DNS records to add — copy them

You'll see something like:
```
Type: A      Name: @    Value: 75.2.60.5
Type: CNAME  Name: www  Value: fromittoinfluence.netlify.app
```

---

## Step 3 — Configure DNS in Cloudflare

> You purchased fromittoinfluence.com through Cloudflare Registrar.
> Cloudflare is already your DNS provider — no nameserver changes needed.

1. Go to [dash.cloudflare.com](https://dash.cloudflare.com)
2. Select the `fromittoinfluence.com` zone
3. Click **DNS** → **Records**
4. Add the records Netlify gave you:

| Type  | Name | Content                          | Proxy  | TTL  |
|-------|------|----------------------------------|--------|------|
| A     | @    | 75.2.60.5                        | OFF ❌ | Auto |
| CNAME | www  | fromittoinfluence.netlify.app    | OFF ❌ | Auto |

   **Important:** Set proxy to OFF (grey cloud) for the Netlify records.
   Netlify manages its own CDN and TLS — Cloudflare proxying conflicts with Netlify's SSL provisioning.

5. Save. DNS propagation: 5–30 minutes typically.

---

## Step 4 — Enable HTTPS in Netlify

1. Back in Netlify → Domain settings → HTTPS
2. Click **Verify DNS configuration**
3. If DNS has propagated, click **Provision certificate**
4. Netlify auto-renews the cert — no action needed after this

---

## Optional: Systeme.io Subdomain

If you want `go.fromittoinfluence.com` to point to your Systeme.io funnel pages:

| Type  | Name | Content                          | Proxy  |
|-------|------|----------------------------------|--------|
| CNAME | go   | [your-account].systeme.io        | OFF ❌ |

Get the exact CNAME target from Systeme.io → Account → Custom domain settings.

---

## Step 5 — Connect Systeme.io Form

Once your Systeme.io opt-in form is created:
1. In Systeme.io, copy the embed code for your form
2. Open `projects/landing-page/index.html`
3. Find the comment block: `<!-- SYSTEME.IO FORM EMBED -->`
4. Replace the `<form class="form-placeholder">...</form>` block with the Systeme.io embed code
5. Redeploy to Netlify (drag-drop again, or `netlify deploy --prod`)

---

## Verification Checklist

- [ ] `https://fromittoinfluence.com` loads the landing page
- [ ] `https://www.fromittoinfluence.com` redirects to apex (set up in Netlify domain settings)
- [ ] HTTPS certificate is green (no browser warnings)
- [ ] "Get the Pack" button links to working Systeme.io form
- [ ] YouTube link in nav goes to `@FromITtoInfluence`
- [ ] Mobile layout looks correct (test in browser DevTools)
