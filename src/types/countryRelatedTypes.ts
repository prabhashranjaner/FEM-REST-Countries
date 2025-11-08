export type CountryType = {
  name: { common: string };
  capital: string;
  region: string;
  flags: {
    svg: string;
    png: string;
  };
  cca3: string;
  population: number;
};
