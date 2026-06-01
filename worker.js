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

        // Kit v3 API — public api_key is safe to use server-side for form subscriptions
        const kitPayload = { api_key: env.KIT_API_KEY, email: email };
        if (firstName) kitPayload.first_name = firstName;

        const kitRes = await fetch(
          `https://api.convertkit.com/v3/forms/${KIT_FORM_ID}/subscribe`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(kitPayload),
          }
        );

        if (!kitRes.ok) {
          console.error("Kit API error:", kitRes.status, await kitRes.text());
          return Response.redirect(new URL(ERROR_REDIRECT, url).toString(), 302);
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
