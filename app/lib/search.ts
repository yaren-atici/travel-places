import { Place } from "../data/places";

export const MAX_QUERY_LENGTH = 50;

export function cleanQuery(query: string): string {
  return query.slice(0, MAX_QUERY_LENGTH).trim();
}

/** Makes Turkish letters simple: "İzmir" -> "izmir", "Ölüdeniz" -> "oludeniz" */
export function normalizeText(text: string): string {
  return text
    .replace(/[İIı]/g, "i")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

/**
 * v2: Turkish characters fixed, searches also in highlights,
 * and supports more than one word (e.g. "manisa tulip").
 */
export function searchPlaces(places: Place[], query: string): Place[] {
  const words = normalizeText(cleanQuery(query)).split(/\s+/).filter(Boolean);
  if (words.length === 0) return places;

  return places.filter((place) => {
    const text = normalizeText(
      [place.name, place.city, place.region, place.shortDescription, ...place.highlights].join(" ")
    );
    return words.every((word) => text.includes(word));
  });
}