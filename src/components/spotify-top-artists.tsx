"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Artist = {
  id: string;
  name: string;
  url: string;
  imageUrl: string | null;
};

type SpotifyResponse = {
  configured: boolean;
  artists: Artist[];
  profileUrl: string;
};

const profileUrl = "https://open.spotify.com/user/dannydliu23456?si=461bda07f198425c";

export function SpotifyTopArtists() {
  const [artists, setArtists] = useState<Artist[] | null>(null);

  useEffect(() => {
    let active = true;

    fetch("/api/spotify/top-artists/")
      .then((response) => {
        if (!response.ok) throw new Error("Spotify data is unavailable");
        return response.json() as Promise<SpotifyResponse>;
      })
      .then((data) => {
        if (active) setArtists(data.artists);
      })
      .catch(() => {
        if (active) setArtists([]);
      });

    return () => {
      active = false;
    };
  }, []);

  return (
    <section aria-labelledby="music-heading" className="mt-10">
      <div className="project-sheet">
        <div className="flex items-baseline justify-between gap-6">
          <h2 id="music-heading" className="font-medium text-ink">
            Listening lately
          </h2>
          <span className="text-xs text-soft">last 4 weeks</span>
        </div>
        <p className="mt-2 text-sm leading-6 text-muted">
          I think my music taste is kind of interesting? Here are some of my top artists :)
        </p>

        {artists === null && (
          <div className="mt-5 grid gap-2" aria-label="Loading top artists">
            {Array.from({ length: 5 }, (_, index) => (
              <div key={index} className="h-6 animate-pulse rounded bg-ink/5" />
            ))}
          </div>
        )}

        {artists && artists.length > 0 && (
          <ol className="mt-5 divide-y divide-ink/15 border-y border-ink/15">
            {artists.map((artist, index) => (
              <li key={artist.id}>
                <a
                  href={artist.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 py-2.5 no-underline"
                >
                  <span className="w-5 font-mono text-xs text-soft">0{index + 1}</span>
                  {artist.imageUrl ? (
                    <Image
                      src={artist.imageUrl}
                      alt=""
                      width={40}
                      height={40}
                      className="size-10 rounded-full border border-ink/20 object-cover"
                    />
                  ) : (
                    <span className="size-10 rounded-full border border-ink/20 bg-primary/10" />
                  )}
                  <span className="text-sm font-medium text-ink group-hover:text-primary">
                    {artist.name}
                  </span>
                  <span className="ml-auto text-xs text-primary">↗</span>
                </a>
              </li>
            ))}
          </ol>
        )}

        {artists && artists.length === 0 && (
          <p className="mt-5 text-sm text-muted">
            Spotify is still getting connected. For now, you can{" "}
            <a href={profileUrl} target="_blank" rel="noopener noreferrer" className="text-primary">
              visit my profile ↗
            </a>
          </p>
        )}
      </div>
    </section>
  );
}
