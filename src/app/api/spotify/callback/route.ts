import { NextRequest, NextResponse } from "next/server";

const redirectUri = "http://127.0.0.1:3000/api/spotify/callback";

function escapeHtml(value: string) {
  const entities: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  };

  return value.replace(/[&<>"']/g, (character) => entities[character]);
}

function page(content: string, status = 200) {
  return new NextResponse(
    `<!doctype html>
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Spotify setup</title>
          <style>
            body { max-width: 680px; margin: 64px auto; padding: 0 24px; color: #17131b; background: #f7f5ee; font: 16px/1.6 system-ui, sans-serif; }
            code { display: block; padding: 16px; overflow-wrap: anywhere; border: 1px solid #17131b; border-radius: 5px; background: #fffdf8; }
            button { margin-top: 16px; padding: 8px 12px; cursor: pointer; border: 1px solid #17131b; border-radius: 5px; background: #e8daf4; }
          </style>
        </head>
        <body>${content}</body>
      </html>`,
    {
      status,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "no-store",
      },
    }
  );
}

export async function GET(request: NextRequest) {
  if (process.env.NODE_ENV !== "development") {
    return new NextResponse("Not found", { status: 404 });
  }

  const code = request.nextUrl.searchParams.get("code");
  const state = request.nextUrl.searchParams.get("state");
  const expectedState = request.cookies.get("spotify_oauth_state")?.value;
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

  if (!code || !state || !expectedState || state !== expectedState) {
    return page("<h1>Spotify authorization failed</h1><p>The request state was invalid or expired. Start the connection again.</p>", 400);
  }

  if (!clientId || !clientSecret) {
    return page("<h1>Spotify is not configured</h1><p>The Client ID or Client Secret is missing.</p>", 503);
  }

  const tokenResponse = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      code,
      redirect_uri: redirectUri,
    }),
    cache: "no-store",
  });

  const tokenData = (await tokenResponse.json()) as {
    refresh_token?: string;
    error_description?: string;
  };

  if (!tokenResponse.ok || !tokenData.refresh_token) {
    const errorMessage = escapeHtml(
      tokenData.error_description ?? "Spotify did not return a refresh token."
    );
    return page(
      `<h1>Spotify authorization failed</h1><p>${errorMessage}</p>`,
      502
    );
  }

  const refreshToken = escapeHtml(tokenData.refresh_token);
  const response = page(`
    <h1>Spotify is authorized</h1>
    <p>Copy this value into <code>.env.local</code> as <strong>SPOTIFY_REFRESH_TOKEN</strong>. Treat it like a password.</p>
    <code id="token">${refreshToken}</code>
    <button type="button" onclick="navigator.clipboard.writeText(document.getElementById('token').textContent).then(() => this.textContent = 'Copied')">Copy token</button>
  `);
  response.cookies.delete("spotify_oauth_state");
  return response;
}
