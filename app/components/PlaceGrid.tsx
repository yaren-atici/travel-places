import { Place } from "../data/places";
import PlaceCard from "./PlaceCard";

type Props = {
  places: Place[];
};

export default function PlaceGrid({ places }: Props) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {places.map((place) => (
        <PlaceCard key={place.id} place={place} />
      ))}
    </div>
  );
}