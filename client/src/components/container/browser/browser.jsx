import React, { useState, useEffect } from "react";
// Utils
import axios from "axios";
import { apiURL } from "@config";
// Material UI
import Button from "@material-ui/core/Button";

const Browser = props => {
  const [nodes, setNodes] = useState([]);
  const [activeNode, setActiveNode] = useState();

  const fetchData = async parentId => {
    const result = await axios(`${apiURL}/node/parent/${parentId}`);
    setNodes(result.data);
  };

  useEffect(() => {
    if (activeNode) {
      fetchData(activeNode._id);
    } else {
      fetchData("5df107c920fddd221bb352e1");
    }
  }, [activeNode]);

  const nodeClick = (event, node) => {
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
