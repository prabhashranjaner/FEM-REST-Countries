import { IoMdMoon } from "react-icons/io";
import styled from "styled-components";
import { IoSunny } from "react-icons/io5";

import { useDarkMode } from "../contexts/DarkModeContext";

const StyledHeader = styled.header`
  box-shadow: var(--shadow);
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 2rem;
  margin: 0 auto;
  max-width: 80rem;
`;

const Text = styled.h1`
  font-size: 1rem;
  font-weight: 800;

  @media (min-width: 786px) {
    font-size: 1.3rem;
  }

  @media (min-width: 1440px) {
    font-size: 1.5rem;
  }
`;

const Right = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 1%.1;

  @media (min-width: 1440px) {
    font-size: 1.3rem;
  }
`;

const Header = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode()!;
  return (
    <StyledHeader>
      <Container>
        <Text>Where in the world?</Text>
        <Right role="button" onClick={toggleDarkMode}>
          {isDarkMode ? <IoSunny /> : <IoMdMoon />}

          <span>{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
        </Right>
      </Container>
    </StyledHeader>
  );
};

export default Header;
