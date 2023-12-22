import React from "react";
import { Drawer } from "antd";

interface DivederProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  size: "default" | "large";
}

const CustomDrawer: React.FC<DivederProps> = ({
  open,
  onClose,
  children,
  size,
}) => {
  return (
    <Drawer
      title="All filters"
      placement="left"
      size={size}
      onClose={onClose}
      open={open}
    >
      {children}
    </Drawer>
  );
};

export default CustomDrawer;
