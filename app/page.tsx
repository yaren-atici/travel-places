import Image from "next/image";
import Link from "next/link";
import PlaceGrid from "./components/PlaceGrid";
import { places } from "./data/places";

export default function Home() {
  const hometownPlaces = places.filter((p) => p.hometown);
  const topPlaces = [...places].sort((a, b) => b.rating - a.rating).slice(0, 3);
  const regionCount = new Set(places.map((p) => p.region)).size;

  return (
    <main className="w-full">
      {/* Hero */}
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-12 md:grid-cols-2 md:py-20">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-terracotta">
            Travel guide
          </p>
          <h1 className="mt-3 font-display text-5xl leading-tight text-sea sm:text-6xl">
            Discover the beauty of Turkey
          </h1>
          <p className="mt-5 max-w-md text-lg text-muted">
            From ancient cities to turquoise lagoons – a personal guide to places
            worth visiting, starting from my hometown Manisa.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/places"
              className="rounded-full bg-sea px-6 py-3 font-medium text-white transition hover:bg-terracotta"
            >
              Explore places →
            </Link>
            <Link
              href="/about"
              className="rounded-full px-6 py-3 font-medium text-sea ring-1 ring-sea/30 transition hover:bg-sea-light"
            >
              About the project
            </Link>
          </div>
        </div>

        <div className="relative h-80 overflow-hidden rounded-[2rem] shadow-xl sm:h-[28rem]">
          <Image
            src="/places/cappadocia.jpg"
            alt="Cappadocia"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute bottom-4 left-4 rounded-2xl bg-white/90 px-4 py-3 backdrop-blur">
            <p className="text-xs uppercase tracking-widest text-muted">Top rated</p>
            <p className="font-display text-lg text-sea">Cappadocia ★ 4.9</p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-3 divide-x divide-sea/10 rounded-3xl bg-white py-6 text-center ring-1 ring-sea/10">
          <div>
            <p className="font-display text-3xl text-sea">{places.length}</p>
            <p className="text-sm text-muted">Places</p>
          </div>
          <div>
            <p className="font-display text-3xl text-sea">{regionCount}</p>
            <p className="text-sm text-muted">Regions</p>
          </div>
          <div>
            <p className="font-display text-3xl text-sea">{hometownPlaces.length}</p>
            <p className="text-sm text-muted">In Manisa</p>
          </div>
        </div>
      </section>

      {/* My hometown */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-terracotta">
          📍 My hometown
        </p>
        <h2 className="mt-2 font-display text-4xl text-sea">Start in Manisa</h2>
        <p className="mt-3 max-w-xl text-muted">
          Manisa is my hometown, a city in the Aegean region famous for its tulips,
          the Mesir festival and thousands of years of history. These are my
          favourite places there.
        </p>
        <div className="mt-8">
          <PlaceGrid places={hometownPlaces} />
        </div>
      </section>

      {/* Top rated */}
      <section className="bg-sea-light py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <h2 className="font-display text-4xl text-sea">Most loved places</h2>
            <Link href="/places" className="font-medium text-terracotta hover:underline">
              See all places →
            </Link>
          </div>
          <div className="mt-8">
            <PlaceGrid places={topPlaces} />
          </div>
        </div>
      </section>
    </main>
  );
}