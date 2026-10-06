import { europeCountries } from "./europe";

// All unique cities from the Europe menu data, sorted A-Z.
// Later this will come from the backend (/api/stations).
export const cities = [
  ...new Set(europeCountries.flatMap((c) => c.routes.flat())),
].sort();
