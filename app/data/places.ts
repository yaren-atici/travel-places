export type Place = {
  id: number;
  name: string;
  city: string;
  region: string;
  image: string;
  shortDescription: string;
  description: string;
  bestTime: string;
  budget: "₺" | "₺₺" | "₺₺₺";
  rating: number;
  highlights: string[];
  hometown?: boolean;
};

export const places: Place[] = [
  {
    id: 1,
    name: "Spil Mountain",
    city: "Manisa",
    region: "Aegean",
    image: "/places/spil.jpg",
    shortDescription: "National park above the city, home of the wild tulip.",
    description:
      "Spil Mountain National Park rises right above the city of Manisa. It is known for its pine forests, cool plateaus and the rare Manisa tulip that grows only here. On the way up you can see the famous Weeping Rock, connected to the myth of Niobe.",
    bestTime: "April – June",
    budget: "₺",
    rating: 4.6,
    highlights: ["Manisa tulip", "Weeping Rock (Niobe)", "Spil plateau", "City view at sunset"],
    hometown: true,
  },
  {
    id: 2,
    name: "Sardis",
    city: "Manisa",
    region: "Aegean",
    image: "/places/sardis.jpg",
    shortDescription: "Capital of ancient Lydia, where coins were born.",
    description:
      "Sardis, near Salihli, was the capital of the Lydian Kingdom and the city of the rich King Croesus. The Lydians are known as the first people to mint coins. Today you can walk through the huge gymnasium, the ancient synagogue and the Temple of Artemis.",
    bestTime: "March – May, September – November",
    budget: "₺",
    rating: 4.7,
    highlights: ["Temple of Artemis", "Roman gymnasium", "Ancient synagogue", "Lydian history"],
    hometown: true,
  },
  {
    id: 3,
    name: "Kula Fairy Chimneys",
    city: "Manisa",
    region: "Aegean",
    image: "/places/kula.jpg",
    shortDescription: "Volcanic landscape and a UNESCO geopark.",
    description:
      "Kula is a small town surrounded by young volcanic cones, lava fields and fairy chimneys. The area is part of the Kula-Salihli UNESCO Global Geopark. The old town is also famous for its traditional Ottoman-era houses.",
    bestTime: "April – June, September – October",
    budget: "₺",
    rating: 4.5,
    highlights: ["Fairy chimneys", "Volcanic cones", "Old Kula houses", "UNESCO Geopark"],
    hometown: true,
  },
  {
    id: 4,
    name: "Cappadocia",
    city: "Nevşehir",
    region: "Central Anatolia",
    image: "/places/cappadocia.jpg",
    shortDescription: "Hot air balloons over fairy chimneys.",
    description:
      "Cappadocia is known for its unique rock formations, underground cities and cave hotels. Early in the morning, hundreds of hot air balloons rise over the valleys, creating one of the most famous views in Turkey.",
    bestTime: "April – June, September – October",
    budget: "₺₺₺",
    rating: 4.9,
    highlights: ["Hot air balloon ride", "Göreme Open Air Museum", "Derinkuyu Underground City", "Love Valley"],
  },
  {
    id: 5,
    name: "Pamukkale",
    city: "Denizli",
    region: "Aegean",
    image: "/places/pamukkale.jpg",
    shortDescription: "White travertine terraces with warm water.",
    description:
      "Pamukkale, meaning 'cotton castle', is famous for its white terraces formed by mineral-rich thermal water. Above the terraces lies the ancient city of Hierapolis and the Antique Pool, where you can swim among ancient columns.",
    bestTime: "April – June, September – October",
    budget: "₺₺",
    rating: 4.7,
    highlights: ["Travertine terraces", "Hierapolis", "Antique Pool", "Sunset walk"],
  },
  {
    id: 6,
    name: "Ephesus",
    city: "İzmir",
    region: "Aegean",
    image: "/places/ephesus.jpg",
    shortDescription: "One of the best preserved ancient cities.",
    description:
      "Ephesus near Selçuk was one of the largest cities of the Roman Empire. Its marble streets, the Library of Celsus and the Great Theatre make it one of the most impressive ancient sites in the world.",
    bestTime: "March – May, October – November",
    budget: "₺₺",
    rating: 4.8,
    highlights: ["Library of Celsus", "Great Theatre", "Terrace Houses", "House of Virgin Mary"],
  },
  {
    id: 7,
    name: "Istanbul",
    city: "Istanbul",
    region: "Marmara",
    image: "/places/istanbul.jpg",
    shortDescription: "Where Europe meets Asia.",
    description:
      "Istanbul is the largest city in Turkey and the only major city on two continents. It is full of history, from Byzantine churches to Ottoman palaces, and it is also famous for its food, bazaars and the Bosphorus.",
    bestTime: "April – June, September – November",
    budget: "₺₺₺",
    rating: 4.9,
    highlights: ["Hagia Sophia", "Topkapı Palace", "Grand Bazaar", "Bosphorus cruise"],
  },
  {
    id: 8,
    name: "Ölüdeniz",
    city: "Muğla",
    region: "Mediterranean",
    image: "/places/oludeniz.jpg",
    shortDescription: "Turquoise lagoon and paragliding paradise.",
    description:
      "Ölüdeniz near Fethiye is known for its calm turquoise lagoon and long beach. It is one of the best places in the world for paragliding, with flights starting from Babadağ mountain high above the sea.",
    bestTime: "May – October",
    budget: "₺₺",
    rating: 4.8,
    highlights: ["Blue Lagoon", "Paragliding from Babadağ", "Butterfly Valley", "Lycian Way"],
  },
];