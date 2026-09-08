import { randomBytes } from "crypto";
import { NextResponse } from "next/server";

const redirectUri = "http://127.0.0.1:3000/api/spotify/callback";

export async function GET() {
  if (process.env.NODE_ENV !== "development") {
    return new NextResponse("Not found", { status: 404 });
  }

  const clientId = process.env.SPOTIFY_CLIENT_ID;

  if (!clientId) {
    return new NextResponse("SPOTIFY_CLIENT_ID is not configured", { status: 503 });
  }

  const state = randomBytes(24).toString("hex");
  const authorizationUrl = new URL("https://accounts.spotify.com/authorize");
  authorizationUrl.search = new URLSearchParams({
    response_type: "code",
    client_id: clientId,
    scope: "user-top-read",
    redirect_uri: redirectUri,
    state,
    show_dialog: "true",
  }).toString();

  const response = NextResponse.redirect(authorizationUrl);
  response.cookies.set("spotify_oauth_state", state, {
    httpOnly: true,
    sameSite: "lax",
    maxAge: 10 * 60,
    path: "/",
  });
  return response;
}
