import styled from "styled-components";
import { useCountries } from "../hooks/useCountries";
import type { CountryType } from "../types/countryRelatedTypes";
import PreviewCard from "./PreviewCard";
import { useSearchParams } from "react-router";

const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin: 0 auto;
`;

const NoCountryText = styled.h3`
  font-weight: 600;
  font-size: 1.2rem;

  @media (min-width: 786px) {
    font-size: 2rem;
  }
`;

type PropsType = {
  query: string;
};

const CountriesList = ({ query }: PropsType) => {
  const {
    countries,
    isPending,
  }: { countries: CountryType[]; isPending: boolean } = useCountries();

  const [searchParams] = useSearchParams();
  let visibleCountries: CountryType[];

  // 1) FILTER
  const filterValue = searchParams.get("region") || "all";

  if (filterValue === "all") visibleCountries = countries;
  else {
    visibleCountries = countries?.filter(
      (country) => country.region.toLowerCase() === filterValue.toLowerCase()
    );
  }

  //! 2 Search
  visibleCountries = visibleCountries.filter((country) =>
    country.name.common.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Container>
      {!isPending &&
        visibleCountries?.map((country) => (
          <PreviewCard country={country} key={country.cca3} />
        ))}

      {!isPending && visibleCountries.length === 0 && (
        <NoCountryText>No country Found. Try again!</NoCountryText>
      )}
    </Container>
  );
};

export default CountriesList;
