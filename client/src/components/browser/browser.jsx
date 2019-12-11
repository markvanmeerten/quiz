import React, { useState } from "react";
import axios from "axios";

const Browser = props => {
  const [nodes, setNodes] = useState([]);
  const [activeNode, setActiveNode] = useState("1");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`/nodes/${activeNode._id}`);
      setNodes(result.data);
    };
    fetchData();
  }, [activeNode]);

  const nodeClick = node => {
    setActiveNode(node);
  };

  const renderNode = node => {
    return <li onClick={node => nodeClick(node)}>{node.value}</li>;
  };

  return <ul>{nodes.map(node => renderNode(node))}</ul>;
};

export default React.memo(
  Browser,
  (prev, next) => prev.activeNode !== next.activeNode
);
