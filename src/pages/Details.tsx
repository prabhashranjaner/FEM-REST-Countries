import { useCountry } from "../hooks/useCountry";

const Details = () => {
  const res = useCountry();
  return <div>Details</div>;
};

export default Details;
