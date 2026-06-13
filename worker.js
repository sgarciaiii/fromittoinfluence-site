/**
 * fromittoinfluence.com — Cloudflare Worker
 *
 * Handles custom routes, then falls through to static assets.
 *
 * Custom routes:
 *   POST /subscribe  — Executive Lens lead magnet form → Kit v3 API → redirect
 *
 * Uses Kit v3 API (api_key in body). Subscribers land as state:active (no
 * double opt-in confirmation). Requires KIT_API_KEY secret.
 * Form numeric ID: 9509071
 */

const KIT_FORM_ID = "9509071";
const SUCCESS_REDIRECT = "/thank-you";
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

        const kitPayload = { api_key: env.KIT_API_KEY, email };
        if (firstName) kitPayload.first_name = firstName;

        const kitRes = await fetch(
          `https://api.convertkit.com/v3/forms/${KIT_FORM_ID}/subscribe`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(kitPayload),
          }
        );

        if (kitRes.status >= 400) {
          console.error("Kit subscription error:", kitRes.status, await kitRes.text());
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
