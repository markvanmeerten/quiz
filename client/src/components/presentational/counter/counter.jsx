import React, { useState, useEffect, useLayoutEffect, useReducer } from "react";
import Button from "@material-ui/core/Button";

function areEqual(prevProps, nextProps) {
  console.log("?", prevProps, nextProps);
  /*
  return true if passing nextProps to render would return
  the same result as passing prevProps to render,
  otherwise return false
  */
  return prevProps.count === nextProps.count;
}

const Counter = ({ count, setCount }) => {
  let color = count === 3 ? "rgb(0,0,255" : "rgb(255,255,255)";
  console.log("rendering counter");
  const handleClick = () => {
    console.log(Math.random() * 100);
    const incremenent = Math.random() * 100 > 50 ? 1 : 0;
    setCount(count + incremenent);
  };

  return (
    <Button
      variant="contained"
      color="primary"
      onClick={handleClick}
      style={{ color: color }}
    >
      {count}
    </Button>
  );
};

export default React.memo(Counter, areEqual);
