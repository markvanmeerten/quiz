import React, { useState } from "react";
// Components
import Counter from "../../presentational/counter/counter";
import Browser from "./../browser/browser";

export default ({ title }) => {
  const [count, setCount] = useState(0);
  console.log("rendering front");
  return (
    <div>
      <h1>{title}</h1>
      <Counter count={count} setCount={setCount} />
      <Browser />
    </div>
  );
};
