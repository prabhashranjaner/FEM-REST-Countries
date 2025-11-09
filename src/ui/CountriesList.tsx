import { useSearchParams } from "react-router";
import styled from "styled-components";

import PreviewCard from "./PreviewCard";

import { useCountries } from "../hooks/useCountries";
import type {
  CountriesQueryType,
  CountryType,
} from "../types/countryRelatedTypes";
import Loader from "./Loader";

const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.3rem;
  margin: 0 auto;
`;

const NoCountryText = styled.h3`
  font-weight: 600;
  font-size: 1.2rem;

  @media (min-width: 786px) {
    font-size: 2rem;
  }
`;

const LoaderContainer = styled.div`
  margin: 0 auto;
  margin-top: 5rem;
  @media (min-width: 786px) {
    margin-top: 10rem;
  }
`;

type PropsType = {
  query: string;
};

// !==============COMPONENT ================
const CountriesList = ({ query }: PropsType) => {
  const { countries, isPending, error }: CountriesQueryType = useCountries();

  // ! Getting filter parameter from URL
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
  if (query && visibleCountries.length) {
    visibleCountries = visibleCountries.filter((country) =>
      country.name.common.toLowerCase().includes(query.toLowerCase())
    );
  }

  if (error) return <NoCountryText>{error.message}</NoCountryText>;

  return (
    <Container>
      {/* For Loading State */}
      {isPending && (
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      )}
      {!isPending &&
        visibleCountries?.map((country) => (
          <PreviewCard country={country} key={country.cca3} />
        ))}
      {/*  When no countries to show */}
      {!isPending && visibleCountries.length === 0 && (
        <NoCountryText>No country Found. Try again!</NoCountryText>
      )}
    </Container>
  );
};

export default CountriesList;
