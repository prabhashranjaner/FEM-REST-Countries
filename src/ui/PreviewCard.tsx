import { Link } from "react-router";
import styled from "styled-components";

import type { CountryType } from "../types/countryRelatedTypes";
import { numberWithCommas } from "../utils";

const PreviewCardLink = styled(Link)`
  display: block;
  overflow: hidden;
  cursor: pointer;
  transition: transform 5000 ease-in-out;
  background-color: var(--col-element);
  border-radius: 6px;
  box-shadow: var(--shadow);
  max-width: 280px;
  justify-self: center;

  &:hover {
    transform: scale(1.01);
  }
`;

const Top = styled.div`
  height: 180px;
`;

const Bottom = styled.div`
  padding: 1.5rem;
  padding-bottom: 3rem;

  & h2 {
    font-size: 18px;
    font-weight: bold;
    font-weight: 800;
    margin-bottom: 1rem;
  }

  & p {
    margin-bottom: 0.3rem;
  }

  & span {
    font-weight: 600;
  }
`;

type PropsType = {
  country: CountryType;
};
const PreviewCard = ({ country }: PropsType) => {
  const { name, population, region, capital, flags, cca3 } = country;
  return (
    <PreviewCardLink to={`/country/${cca3} `}>
      <Top>
        <img alt="country-flag-thumbnail" src={flags.png} />
      </Top>
      <Bottom>
        <h2>{name.common}</h2>
        <p>
          <span>Population: </span>
          {numberWithCommas(population)}
        </p>
        <p>
          <span>Region: </span>
          {region}
        </p>
        <p>
          <span>Capital: </span>
          {capital}
        </p>
      </Bottom>
    </PreviewCardLink>
  );
};

export default PreviewCard;
