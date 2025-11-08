import { useQuery } from "@tanstack/react-query";
import { getCountry } from "../apis/utils";
import { useParams } from "react-router";

export function useCountry() {
  const id = useParams();
  console.log(id);
  const query = useQuery({
    queryKey: ["country", id],
    queryFn: () => getCountry(id),
  });
  console.log(query);
  return query;
}
