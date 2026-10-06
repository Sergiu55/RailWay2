// Duratele sunt EXEMPLE, ca să arate real. Mai târziu vin din baza de date (trips).
export const featuredCountries = [
  {
    slug: "moldova",
    name: "Moldova",
    image: "/images/moldova.jpg",
    routes: [
      { from: "Chișinău", to: "Bălți", duration: "3 h 20 m" },
      { from: "Chișinău", to: "Ungheni", duration: "2 h 10 m" },
      { from: "Chișinău", to: "Iași", duration: "6 h 30 m" },
      { from: "Chișinău", to: "Bucharest", duration: "13 h 15 m" },
      { from: "Bălți", to: "Chișinău", duration: "3 h 20 m" },
    ],
  },
  {
    slug: "romania",
    name: "Romania",
    image: "/images/romania.jpg",
    routes: [
      { from: "Bucharest", to: "Brașov", duration: "2 h 40 m" },
      { from: "Bucharest", to: "Cluj-Napoca", duration: "6 h 30 m" },
      { from: "Bucharest", to: "Constanța", duration: "2 h 20 m" },
    ],
  },
  {
    slug: "ukraine",
    name: "Ukraine",
    image: "/images/ukraine.jpg",
    routes: [
      { from: "Kyiv", to: "Lviv", duration: "5 h 30 m" },
      { from: "Kyiv", to: "Odesa", duration: "6 h 40 m" },
      { from: "Lviv", to: "Chernivtsi", duration: "5 h 10 m" },
    ],
  },
  {
    slug: "bulgaria",
    name: "Bulgaria",
    image: "/images/bulgaria.jpg",
    routes: [
      { from: "Sofia", to: "Plovdiv", duration: "2 h 15 m" },
      { from: "Sofia", to: "Varna", duration: "7 h 30 m" },
      { from: "Sofia", to: "Burgas", duration: "7 h 10 m" },
    ],
  },
  {
    slug: "hungary",
    name: "Hungary",
    image: "/images/hungary.jpg",
    routes: [
      { from: "Budapest", to: "Vienna", duration: "2 h 40 m" },
      { from: "Budapest", to: "Debrecen", duration: "2 h 10 m" },
      { from: "Budapest", to: "Szeged", duration: "2 h 15 m" },
    ],
  },
];
