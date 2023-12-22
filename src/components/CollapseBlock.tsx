import React from "react";
import type { CollapseProps } from "antd";
import { Collapse } from "antd";

interface CollapseBlockProps {
  items: CollapseProps["items"];
}

const CollapseBlock: React.FC<CollapseBlockProps> = ({ items }) => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return <Collapse items={items} onChange={onChange}></Collapse>;
};

export default CollapseBlock;
