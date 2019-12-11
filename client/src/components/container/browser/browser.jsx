import React, { useState, useEffect } from "react";
import axios from "axios";
// Material UI
import Button from "@material-ui/core/Button";

const Browser = props => {
  const [nodes, setNodes] = useState([]);
  const [activeNode, setActiveNode] = useState();

  useEffect(() => {
    console.log("NEW ACTIVE: ", activeNode);
    const fetchData = async parentId => {
      console.log("fetching..");
      const result = await axios(
        `http://localhost:4000/node/parent/${parentId}`
      );
      setNodes(result.data);
    };
    if (activeNode) {
      fetchData(activeNode._id);
    } else {
      fetchData("5df107c920fddd221bb352e1");
    }
  }, [activeNode]);

  const nodeClick = (event, node) => {
    console.log(node);
    setActiveNode(node);
  };

  const renderNode = node => {
    return (
      <li key={node._id}>
        <Button
          variant="contained"
          color="primary"
          onClick={event => nodeClick(event, node)}
        >
          {node.value}({node._id})
        </Button>
      </li>
    );
  };

  return <ul>{nodes.map(node => renderNode(node))}</ul>;
};

export default React.memo(
  Browser,
  (prev, next) => prev.activeNode !== next.activeNode
);
