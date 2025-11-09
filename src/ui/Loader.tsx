import styled from "styled-components";

const StyledLoder = styled.div`
  position: relative;
  width: 48px;
  height: 48px;
  background: #fff;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: var(--shadow);

  @media (min-width: 786px) {
    width: 64px;
    height: 64px;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 8px;
    margin: auto;
    background: #222b32;
    border-radius: 50%;
  }

  &:before {
    content: "";
    position: absolute;
    inset: 0px;
    margin: auto;
    background: gray;
    animation: crlMugLoader 2s linear infinite alternate;
  }

  @keyframes crlMugLoader {
    0%,
    10% {
      transform: translateY(64px);
    }
    90%,
    100% {
      transform: translateY(0px);
    }
  }
`;

const Loader = () => {
  return <StyledLoder></StyledLoder>;
};

export default Loader;
