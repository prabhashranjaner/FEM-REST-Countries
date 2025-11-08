import { useState } from "react";
import styled from "styled-components";

import CountriesList from "../ui/CountriesList";
import Search from "../ui/Search";
import Filter from "../ui/Filter";

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const Options = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 786px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const Home = () => {
  const [query, setQuery] = useState("");
  return (
    <StyledHome>
      <Options>
        <Search query={query} setQuery={setQuery} />
        <Filter />
      </Options>
      <div>
        <CountriesList query={query} />
      </div>
    </StyledHome>
  );
};

export default Home;
