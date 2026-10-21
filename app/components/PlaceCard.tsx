import Link from "next/link";
import Image from "next/image";
import { Place } from "../data/places";

type Props = {
  place: Place;
};

export default function PlaceCard({ place }: Props) {
  return (
    <Link
      href={`/places/${place.id}`}
      data-testid={`place-card-${place.id}`}
      className="group block h-full"
    >
      <article className="flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-sea/10 transition duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
        <div className="relative h-56 overflow-hidden">
          <Image
            src={place.image}
            alt={place.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />

          <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-sea">
            {place.region}
          </span>

          {place.hometown && (
            <span className="absolute right-4 top-4 rounded-full bg-terracotta px-3 py-1 text-xs font-semibold text-white">
              📍 My hometown
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col p-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-terracotta">
            {place.city}
          </p>
          <h2 className="mt-1 font-display text-2xl text-sea">{place.name}</h2>
          <p className="mt-2 flex-1 text-sm text-muted">{place.shortDescription}</p>

          <div className="mt-4 flex items-center justify-between border-t border-sea/10 pt-4 text-sm">
            <span className="font-semibold text-ink">★ {place.rating}</span>
            <span className="text-muted">Budget: {place.budget}</span>
          </div>
        </div>
      </article>
    </Link>
  );
}