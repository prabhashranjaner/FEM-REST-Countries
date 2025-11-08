import { Outlet } from "react-router";
import styled from "styled-components";

import Header from "./Header";

const Main = styled.main`
  padding: 1.5rem;
  margin: 0 auto;
  max-width: 80rem;
`;

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </div>
  );
};

export default AppLayout;
