import { useState } from "react";
import { PiCaretDownBold, PiCaretUpBold } from "react-icons/pi";
import { useSearchParams } from "react-router";
import styled, { css } from "styled-components";

const StyledFilter = styled.div`
  width: 280px;
  position: relative;
  z-index: 50;
`;

const Select = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: var(--shadow);
  border-radius: 6px;
  padding: 20px 28px;
  width: 100%;
  font-size: 14px;
  cursor: pointer;
  color: var(--col-text);
  background-color: var(--col-element);
`;

const List = styled.ul`
  display: block;
  width: 100%;
  margin-top: 10px;
  border-radius: 8px;
  padding: 10px 0;
  box-shadow: var(--shadow);
  background-color: var(--col-element);

  position: absolute;
`;

const Option = styled.li`
  padding: 5px 28px;
  font-size: 14px;
  cursor: pointer;
  color: var(--col-text);

  &:hover {
    background-color: var(--col-hover);
  }

  ${(props) =>
    props.className?.includes("active") &&
    css`
      background-color: var(--col-hover);
    `}

  &.active {
    background-color: var(--col-hover);
  }
`;

type OptionType = {
  value: string;
  label: string;
};

const options: OptionType[] = [
  { value: "all", label: "All" },
  { value: "africa", label: "Africa" },
  { value: "americas", label: "America" },
  { value: "asia", label: "Asia" },
  { value: "europe", label: "Europe" },
  { value: "oceania", label: "Oceania" },
];

const Filter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchParams, setSearchParms] = useSearchParams();

  const [title, setTitle] = useState("Filter by Region");
  const currentFilter = searchParams.get("region") || "all";

  function handleClick(value: string, label: string) {
    searchParams.set("region", value);
    setSearchParms(searchParams);
    toggleFilter();
    if (value === "all") setTitle("Filter by Region");
    else setTitle(label);
  }

  function toggleFilter() {
    setIsOpen((s) => !s);
  }
  return (
    <StyledFilter>
      <Select onClick={toggleFilter}>
        <p>{title}</p>

        {isOpen ? <PiCaretUpBold /> : <PiCaretDownBold />}
      </Select>
      {isOpen && (
        <List>
          {options.map((option) => (
            <Option
              key={option.value}
              onClick={() => handleClick(option.value, option.label)}
              className={`${option.value === currentFilter ? "active" : ""}`}
            >
              {option.label}
            </Option>
          ))}
        </List>
      )}
    </StyledFilter>
  );
};

export default Filter;
