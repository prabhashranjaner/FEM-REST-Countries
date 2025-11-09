import api from "./api";

export async function getAllCountries() {
  const res = await api.get("/all", {
    params: {
      fields: "capital,name,alpha3Code,population,region,flags,cca3",
    },
  });

  return res;
}

export async function getCountry(id: string) {
  const res = await api.get(`/alpha/${id}`);

  return res;
}
