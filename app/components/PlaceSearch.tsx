"use client";

import { useState } from "react";
import { Place } from "../data/places";
import { MAX_QUERY_LENGTH, searchPlaces } from "../lib/search";
import PlaceGrid from "./PlaceGrid";

type Props = {
  places: Place[];
};

export default function PlaceSearch({ places }: Props) {
  const [query, setQuery] = useState("");
  const results = searchPlaces(places, query);

  return (
    <div>
      <form
        role="search"
        onSubmit={(e) => e.preventDefault()}
        className="mb-8 rounded-3xl bg-white p-5 ring-1 ring-sea/10"
      >
        <label htmlFor="place-search" className="block text-sm font-semibold text-sea">
          Search places
        </label>

        <div className="mt-2 flex gap-2">
          <input
            id="place-search"
            type="text"
            placeholder="Try: Manisa, Aegean, balloon..."
            value={query}
            maxLength={MAX_QUERY_LENGTH}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-full border border-sea/20 bg-sand px-5 py-3 focus:border-sea focus:outline-none"
          />

          {query && (
            <button
              id="clear-search"
              type="button"
              onClick={() => setQuery("")}
              className="rounded-full px-5 py-3 text-sm font-medium text-sea ring-1 ring-sea/30 hover:bg-sea-light"
            >
              Clear
            </button>
          )}
        </div>

        <p id="results-count" className="mt-3 text-sm text-muted">
          Found: {results.length} {results.length === 1 ? "place" : "places"}
        </p>
      </form>

      {results.length > 0 ? (
        <PlaceGrid places={results} />
      ) : (
        <div id="no-results" className="rounded-3xl bg-white px-6 py-12 text-center ring-1 ring-sea/10">
          <p className="font-display text-2xl text-sea">No places found</p>
          <p className="mt-2 text-muted">Try another name, city or region.</p>
        </div>
      )}
    </div>
  );
}