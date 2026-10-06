// Sample data for the Europe menu. Later this can come from the database (/api/stations).
export const europeCountries = [
  {
    slug: "moldova",
    name: "Moldova",
    routes: [
      ["Chișinău", "Bălți"],
      ["Bălți", "Chișinău"],
      ["Chișinău", "Ungheni"],
      ["Ungheni", "Chișinău"],
      ["Chișinău", "Iași"],
      ["Iași", "Chișinău"],
      ["Chișinău", "Bucharest"],
      ["Bucharest", "Chișinău"],
    ],
  },
  {
    slug: "romania",
    name: "Romania",
    routes: [
      ["Bucharest", "Brașov"],
      ["Brașov", "Bucharest"],
      ["Bucharest", "Cluj-Napoca"],
      ["Cluj-Napoca", "Bucharest"],
      ["Bucharest", "Iași"],
      ["Iași", "Bucharest"],
      ["Bucharest", "Constanța"],
      ["Constanța", "Bucharest"],
    ],
  },
  {
    slug: "ukraine",
    name: "Ukraine",
    routes: [
      ["Kyiv", "Lviv"],
      ["Lviv", "Kyiv"],
      ["Kyiv", "Odesa"],
      ["Odesa", "Kyiv"],
      ["Kyiv", "Chernivtsi"],
      ["Chernivtsi", "Kyiv"],
    ],
  },
  {
    slug: "bulgaria",
    name: "Bulgaria",
    routes: [
      ["Sofia", "Plovdiv"],
      ["Plovdiv", "Sofia"],
      ["Sofia", "Varna"],
      ["Varna", "Sofia"],
      ["Sofia", "Burgas"],
      ["Burgas", "Sofia"],
    ],
  },
  {
    slug: "hungary",
    name: "Hungary",
    routes: [
      ["Budapest", "Vienna"],
      ["Vienna", "Budapest"],
      ["Budapest", "Debrecen"],
      ["Debrecen", "Budapest"],
      ["Budapest", "Szeged"],
      ["Szeged", "Budapest"],
    ],
  },
];
