import React from "react";

const Map2 = () => {
  const input = "amphi";
  const arr = [...input];
  return <div>Map2: {arr.map((ele) => ele + "a ")}</div>;
};

export default Map2;
