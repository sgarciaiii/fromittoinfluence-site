/**
 * Cloudflare Pages Function — /subscribe
 *
 * Receives the Executive Lens lead magnet form POST, subscribes
 * the email to Kit form 9509071 (Executive Lens), then redirects
 * to the thank-you page.
 *
 * Environment variables required (set in Cloudflare Pages → Settings → Variables):
 *   KIT_API_KEY  — Kit API key (Settings > Developer > API Keys in Kit dashboard)
 */

const KIT_FORM_ID = "9509071";
const SUCCESS_REDIRECT = "/executive-lens";
const ERROR_REDIRECT = "/?subscribe_error=1";

export async function onRequestPost(context) {
  const { request, env } = context;

  try {
    const formData = await request.formData();
    const email = (formData.get("email") || "").trim().toLowerCase();
    const firstName = (formData.get("first_name") || "").trim();

    if (!email || !email.includes("@")) {
      return Response.redirect(new URL(ERROR_REDIRECT, request.url).toString(), 302);
    }

    const payload = { email_address: email };
    if (firstName) payload.first_name = firstName;

    const kitRes = await fetch(
      `https://api.kit.com/v4/forms/${KIT_FORM_ID}/subscribers`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Kit-Api-Key": env.KIT_API_KEY,
        },
        body: JSON.stringify(payload),
      }
    );

    // Kit returns 200/201 on success; anything else is an error
    if (!kitRes.ok) {
      console.error("Kit API error:", kitRes.status, await kitRes.text());
      return Response.redirect(new URL(ERROR_REDIRECT, request.url).toString(), 302);
    }

    return Response.redirect(new URL(SUCCESS_REDIRECT, request.url).toString(), 302);
  } catch (err) {
    console.error("subscribe function error:", err);
    return Response.redirect(new URL(ERROR_REDIRECT, request.url).toString(), 302);
  }
}
