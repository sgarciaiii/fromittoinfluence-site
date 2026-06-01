/**
 * fromittoinfluence.com — Cloudflare Worker
 *
 * Handles custom routes, then falls through to static assets.
 *
 * Custom routes:
 *   POST /subscribe  — Executive Lens lead magnet form → Kit hosted form → redirect
 *
 * No API key required — uses Kit's public form subscription endpoint (same one
 * their embed JS uses). Form UID: 8c8653ea8d
 */

const KIT_FORM_UID = "8c8653ea8d";
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

        // Kit public form endpoint — no API key needed, same endpoint their embed JS uses
        const kitPayload = { email_address: email };
        if (firstName) kitPayload.first_name = firstName;

        const kitRes = await fetch(
          `https://app.convertkit.com/forms/${KIT_FORM_UID}/subscriptions`,
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
