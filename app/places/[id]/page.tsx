import Image from "next/image";
import Link from "next/link";
import { places } from "../../data/places";
import PlaceGrid from "../../components/PlaceGrid";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function PlaceDetailPage({ params }: Props) {
  const { id } = await params;
  const place = places.find((p) => p.id === Number(id));

  if (!place) {
    return (
      <main className="mx-auto w-full max-w-3xl px-6 py-24 text-center">
        <h1 className="font-display text-4xl text-sea">Place not found</h1>
        <p className="mt-3 text-muted">We could not find this place.</p>
        <Link
          href="/places"
          className="mt-8 inline-block rounded-full bg-sea px-6 py-3 font-medium text-white hover:bg-terracotta"
        >
          ← Back to all places
        </Link>
      </main>
    );
  }

  const otherPlaces = places.filter((p) => p.id !== place.id).slice(0, 3);

  return (
    <main className="w-full">
      {/* Big photo with title */}
      <section className="relative h-[55vh] min-h-[360px] w-full">
        <Image
          src={place.image}
          alt={place.name}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-6xl px-6 pb-10 text-white">
          <Link href="/places" className="text-sm text-white/80 hover:text-white">
            ← All places
          </Link>

          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold backdrop-blur">
              {place.region}
            </span>
            {place.hometown && (
              <span className="rounded-full bg-terracotta px-3 py-1 text-xs font-semibold">
                📍 My hometown
              </span>
            )}
          </div>

          <h1 className="mt-3 font-display text-4xl sm:text-6xl">{place.name}</h1>
          <p className="mt-2 text-lg text-white/90">{place.city}, Turkey</p>
        </div>
      </section>

      {/* Description + trip info */}
      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-12 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="font-display text-3xl text-sea">About this place</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink/80">{place.description}</p>

          <h2 className="mt-10 font-display text-3xl text-sea">Highlights</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {place.highlights.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 ring-1 ring-sea/10"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sea-light text-sea">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <aside className="h-fit rounded-3xl bg-sea p-6 text-white lg:sticky lg:top-24">
          <h3 className="font-display text-2xl">Trip info</h3>
          <dl className="mt-6 space-y-5">
            <div>
              <dt className="text-xs uppercase tracking-widest text-white/60">Best time to visit</dt>
              <dd className="mt-1 font-medium">{place.bestTime}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-white/60">Budget</dt>
              <dd className="mt-1 font-medium">{place.budget}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-white/60">Rating</dt>
              <dd className="mt-1 font-medium">★ {place.rating} / 5</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-white/60">Region</dt>
              <dd className="mt-1 font-medium">{place.region}</dd>
            </div>
          </dl>
        </aside>
      </section>

      {/* Other places */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <h2 className="font-display text-3xl text-sea">You may also like</h2>
        <div className="mt-6">
          <PlaceGrid places={otherPlaces} />
        </div>
      </section>
    </main>
  );
}