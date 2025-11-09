import { useQuery } from "@tanstack/react-query";
import { getCountry } from "../apis/utils";
import { useParams } from "react-router";

export function useCountry() {
  const { id } = useParams();
  const { isPending, data, error } = useQuery({
    queryKey: ["country", id],
    queryFn: () => getCountry(id!),
  });

  return { isPending, country: data?.data[0], error };
}
