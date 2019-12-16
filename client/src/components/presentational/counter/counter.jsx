import React from "react";
import Button from "@material-ui/core/Button";

const Counter = ({ count, setCount }) => {
  const handleClick = () => {
    const incremenent = Math.random() * 100 > 50 ? 1 : 0;
    setCount(count + incremenent);
  };

  return (
    <Button variant="contained" color="primary" onClick={handleClick}>
      {count}
    </Button>
  );
};

export default React.memo(
  Counter,
  (prevProps, nextProps) => prevProps.count !== nextProps.count
);
