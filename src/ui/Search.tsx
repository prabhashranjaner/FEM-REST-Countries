import { IoIosSearch } from "react-icons/io";
import styled from "styled-components";

const StyledForm = styled.form`
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 6px;
  box-shadow: var(--shadow);
  margin: 0 auto;
  max-width: 400px;

  @media (min-width: 375px) {
    margin: 0;
  }
`;

const Icon = styled(IoIosSearch)`
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 12px;
  transform: translate(0, -50%);
  color: var(--col-input);
`;

const Input = styled.input`
  outline: none;
  display: block;
  padding: 1.2rem 2rem;
  padding-left: 3.5rem;
  color: var(--col-input);
  width: 100%;
  border: none;
  background-color: var(--col-element);
`;

type PropsType = {
  query: string;
  setQuery: (value: string) => void;
};

const Search = ({ query, setQuery }: PropsType) => {
  return (
    <StyledForm>
      <Icon size={30} />

      <Input
        type="text"
        placeholder="Search for a country"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </StyledForm>
  );
};

export default Search;
