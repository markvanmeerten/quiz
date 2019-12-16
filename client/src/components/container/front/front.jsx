import React, { useState } from "react";
// Components
import Counter from "@presentational/counter/counter";
import Browser from "@container/browser/browser";

export default ({ title }) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{title}</h1>
      <Counter count={count} setCount={setCount} />
      <Browser />
    </div>
  );
};
