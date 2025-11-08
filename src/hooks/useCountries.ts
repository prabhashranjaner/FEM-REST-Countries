import { useQuery } from "@tanstack/react-query";
import { getAllCountries } from "../apis/utils";

export function useCountries() {
  const { isPending, data, error } = useQuery({
    queryKey: ["countries"],
    queryFn: getAllCountries,
    retry: 0,
  });

  return { isPending, countries: data?.data, error };
}
