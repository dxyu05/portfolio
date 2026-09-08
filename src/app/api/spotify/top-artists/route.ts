import { NextResponse } from "next/server";

type SpotifyArtist = {
  id: string;
  name: string;
  external_urls: { spotify: string };
  images: { url: string; width: number | null; height: number | null }[];
};

type SpotifyTopArtistsResponse = {
  items: SpotifyArtist[];
};

const spotifyProfileUrl =
  "https://open.spotify.com/user/dannydliu23456?si=461bda07f198425c";

export async function GET() {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) {
    return NextResponse.json(
      { configured: false, artists: [], profileUrl: spotifyProfileUrl },
      { status: 503 }
    );
  }

  try {
    const tokenResponse = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString("base64")}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: refreshToken,
      }),
      cache: "no-store",
    });

    if (!tokenResponse.ok) {
      throw new Error("Unable to refresh Spotify access token");
    }

    const { access_token: accessToken } = (await tokenResponse.json()) as {
      access_token: string;
    };

    const artistsResponse = await fetch(
      "https://api.spotify.com/v1/me/top/artists?time_range=short_term&limit=5",
      {
        headers: { Authorization: `Bearer ${accessToken}` },
        cache: "no-store",
      }
    );

    if (!artistsResponse.ok) {
      throw new Error("Unable to load Spotify top artists");
    }

    const data = (await artistsResponse.json()) as SpotifyTopArtistsResponse;
    const response = NextResponse.json({
      configured: true,
      artists: data.items.map((artist) => ({
        id: artist.id,
        name: artist.name,
        url: artist.external_urls.spotify,
        imageUrl: artist.images[0]?.url ?? null,
      })),
      profileUrl: spotifyProfileUrl,
    });

    response.headers.set("Cache-Control", "public, s-maxage=3600, stale-while-revalidate=86400");
    return response;
  } catch {
    return NextResponse.json(
      { configured: true, artists: [], profileUrl: spotifyProfileUrl },
      { status: 502 }
    );
  }
}
