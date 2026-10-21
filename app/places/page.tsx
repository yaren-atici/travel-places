import PlaceSearch from "../components/PlaceSearch";
import { places } from "../data/places";

export default function PlacesPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-12">
      <p className="text-sm font-semibold uppercase tracking-widest text-terracotta">
        Explore
      </p>
      <h1 className="mt-2 font-display text-4xl text-sea sm:text-5xl">All places</h1>
      <p className="mt-3 max-w-2xl text-muted">
        {places.length} places across Turkey, from my hometown Manisa to the
        Mediterranean coast.
      </p>

      <div className="mt-10">
        <PlaceSearch places={places} />
      </div>
    </main>
  );
}