import styled from "styled-components";

const Label = styled.span`
  margin-right: 1rem;
  font-weight: 600;
  @media (min-width: 896px) {
    font-size: 18px;
  }
`;

const Value = styled.span`
  font-weight: 300;
  font-size: 16px;
  @media (min-width: 896px) {
    font-size: 18px;
  }
`;

type PropsType = {
  label: string;
  value: string;
};
const InlineDetail = ({ label, value }: PropsType) => {
  return (
    <p>
      <Label>{label}:</Label>
      <Value>{value}</Value>
    </p>
  );
};

export default InlineDetail;
