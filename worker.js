/**
 * fromittoinfluence.com — Cloudflare Worker
 *
 * Handles custom routes, then falls through to static assets.
 *
 * Custom routes:
 *   POST /subscribe  — Executive Lens lead magnet form → Kit API → redirect
 *
 * Environment variables (set in Worker dashboard → Settings → Variables and Secrets):
 *   KIT_API_KEY  — Kit secret API key (Settings > Developer > API Keys)
 */

const KIT_FORM_ID = "9509071";
const SUCCESS_REDIRECT = "/executive-lens";
const ERROR_REDIRECT = "/?subscribe_error=1";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // ── POST /subscribe ──────────────────────────────────────────────────────
    if (url.pathname === "/subscribe" && request.method === "POST") {
      try {
        const formData = await request.formData();
        const email = (formData.get("email") || "").trim().toLowerCase();
        const firstName = (formData.get("first_name") || "").trim();

        if (!email || !email.includes("@")) {
          return Response.redirect(new URL(ERROR_REDIRECT, url).toString(), 302);
        }

        const payload = { email_address: email };
        if (firstName) payload.first_name = firstName;

        const kitRes = await fetch(
          `https://api.kit.com/v4/forms/${KIT_FORM_ID}/subscribers`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${env.KIT_API_KEY}`,
            },
            body: JSON.stringify(payload),
          }
        );

        if (!kitRes.ok) {
          const errBody = await kitRes.text();
          console.error("Kit API error:", kitRes.status, errBody);
          return Response.redirect(
            new URL(`${ERROR_REDIRECT}&kit_status=${kitRes.status}&has_key=${!!env.KIT_API_KEY}`, url).toString(),
            302
          );
        }

        return Response.redirect(new URL(SUCCESS_REDIRECT, url).toString(), 302);
      } catch (err) {
        console.error("subscribe handler error:", err);
        return Response.redirect(new URL(ERROR_REDIRECT, url).toString(), 302);
      }
    }

    // ── Everything else → static assets ─────────────────────────────────────
    return env.ASSETS.fetch(request);
  },
};
