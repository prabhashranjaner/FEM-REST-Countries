import styled from "styled-components";
import { useCountry } from "../hooks/useCountry";
import InlineDetail from "../ui/InlineDetail";
import LinkButton from "../ui/LinkButton";
import Loader from "../ui/Loader";
import { numberWithCommas } from "../utils";

const StyledDetails = styled.section`
  padding: 0.5rem 1rem;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin: 0 auto;
  gap: 2rem;
  margin-top: 3rem;
  max-width: 80%;

  @media (min-width: 1080px) {
    grid-template-columns: 500px 1fr;
    gap: 6rem;
    max-width: 100%;
  }
`;

const ImageWrapper = styled.div`
  height: 12rem;

  @media (min-width: 376px) {
    height: 21rem;
  }
`;

const DetailsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1;
  gap: 2.5rem;

  @media (min-width: 1080px) {
    padding-top: 2rem;
  }
`;

const NameText = styled.div`
  font-weight: 800;
  font-size: 1.5rem;
`;

const SubDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media (min-width: 1080px) {
    flex-direction: row;
    gap: 2rem;
    justify-content: space-between;
  }
`;

const DetailGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const BorderDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h4 {
    min-width: 180px;
    font-size: 18px;
  }

  @media (min-width: 1080px) {
    flex-direction: row;
    align-items: center;
    gap: 2rem;
    justify-content: space-between;
  }
`;

const BorderList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  & span {
    font-size: 14px;
  }
`;

const Details = () => {
  const { isPending, error, country } = useCountry();

  let capitals = "";
  let nativeName = "";
  let currencies = "";
  let languages = "";

  if (country) {
    capitals = country.capital.join(" ");
    const nativeNameKey = Object.keys(country.name.nativeName)[0];

    nativeName = country.name.nativeName[nativeNameKey].official;

    for (const key in country.currencies) {
      currencies += country.currencies[key].name;
    }

    languages = Object.values(country.languages).join(" ");
  }

  return (
    <StyledDetails>
      <LinkButton to="/">
        <>
          <span className="text-xl font-bold">&#x2190;</span>
          <span className="ml-2">Back</span>
        </>
      </LinkButton>
      <Container>
        {isPending && <Loader />}
        {error && <h3>{error.name}</h3>}
        {!isPending && (
          <>
            <ImageWrapper>
              <img alt="country flag" src={country.flags.png} />
            </ImageWrapper>
            <DetailsWrapper>
              <NameText>{country.name.common}</NameText>
              <SubDetail>
                <DetailGroup>
                  <InlineDetail label="Native Name" value={nativeName} />
                  <InlineDetail
                    label="Population"
                    value={numberWithCommas(country.population)}
                  />
                  <InlineDetail label="Region" value={country.region} />
                  <InlineDetail label="Sub Region" value={country.subregion} />
                  <InlineDetail label="Capitals" value={capitals} />
                </DetailGroup>
                <DetailGroup>
                  <InlineDetail
                    label="Area"
                    value={numberWithCommas(country.area)}
                  />
                  <InlineDetail label="Currencies" value={currencies} />
                  <InlineDetail label="Language" value={languages} />
                </DetailGroup>
              </SubDetail>
              {/* BORDER LIST */}
              {country.borders && (
                <BorderDetails>
                  <h4>Border Countries:</h4>
                  <BorderList>
                    {country.borders.map((border: string) => (
                      <LinkButton key={border} to={`/country/${border}`}>
                        <span>{border}</span>{" "}
                      </LinkButton>
                    ))}
                  </BorderList>
                </BorderDetails>
              )}
            </DetailsWrapper>
          </>
        )}
      </Container>
    </StyledDetails>
  );
};

export default Details;
