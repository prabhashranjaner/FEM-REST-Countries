import type { ReactNode } from "react";
import { Link } from "react-router";
import styled from "styled-components";

const StyledButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  padding: 8px 1.6rem;
  border-radius: 8px;
  box-shadow: var(--shadow);
  background-color: var(--col-element);
  transition: all 500 ease-in-out;
  cursor: pointer;
  gap: 0.5rem;
  font-weight: 600;

  &:hover {
    transform: scale(1.03);
  }
`;

type PropsType = {
  to: string;
  children: ReactNode;
};
const LinkButton = ({ to, children }: PropsType) => {
  return <StyledButton to={to}>{children}</StyledButton>;
};

export default LinkButton;
