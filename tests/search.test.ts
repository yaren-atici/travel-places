import { describe, it, expect } from "vitest";
import { places } from "../app/data/places";
import { searchPlaces, cleanQuery, MAX_QUERY_LENGTH } from "../app/lib/search";

describe("searchPlaces", () => {
  // ---------- POSITIVE ----------
  it("finds a place by name", () => {
    const result = searchPlaces(places, "Cappadocia");
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe("Cappadocia");
  });

  it("finds places by city", () => {
    expect(searchPlaces(places, "Manisa")).toHaveLength(3);
  });

  it("is case-insensitive", () => {
    expect(searchPlaces(places, "AEGEAN")).toHaveLength(5);
  });

  it("ignores spaces around the text", () => {
    expect(searchPlaces(places, "   Ephesus   ")).toHaveLength(1);
  });

  it("finds places written without Turkish characters", () => {
    expect(searchPlaces(places, "izmir")).toHaveLength(1);
    expect(searchPlaces(places, "oludeniz")).toHaveLength(1);
  });

  // ---------- EMPTY INPUT ----------
  it("returns all places for empty input", () => {
    expect(searchPlaces(places, "")).toHaveLength(places.length);
    expect(searchPlaces(places, "     ")).toHaveLength(places.length);
  });

  // ---------- NEW IN v2 ----------
  it("searches in highlights (v2)", () => {
    expect(searchPlaces(places, "Artemis")).toHaveLength(1);
  });

  it("supports more than one word (v2)", () => {
    expect(searchPlaces(places, "manisa tulip")).toHaveLength(1);
  });

  // ---------- NEGATIVE ----------
  it("returns nothing for a place that does not exist", () => {
    expect(searchPlaces(places, "Paris")).toHaveLength(0);
  });

  it("returns nothing for special characters", () => {
    expect(searchPlaces(places, "<script>%$#")).toHaveLength(0);
  });
});

describe("cleanQuery - boundary values", () => {
  it("accepts a single character", () => {
    expect(cleanQuery("a")).toBe("a");
  });

  it("keeps a query of exactly 50 characters", () => {
    expect(cleanQuery("a".repeat(50))).toHaveLength(MAX_QUERY_LENGTH);
  });

  it("cuts a 51 character query to 50", () => {
    expect(cleanQuery("a".repeat(51))).toHaveLength(MAX_QUERY_LENGTH);
  });
});