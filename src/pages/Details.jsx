import React from "react";
import { useParams } from "react-router-dom";

export const Details = () => {
  const x = useParams();
  console.log(x);
  return <div>Details</div>;
};
export default Details;
