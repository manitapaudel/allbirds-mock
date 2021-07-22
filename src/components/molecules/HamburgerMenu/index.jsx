import React from "react";
import IconButton from "../../atoms/IconButton";

const HamburgerMenu = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <IconButton
      onClick={handleOpen}
      title="menu"
      iconClass={open ? "close-line" : "menu-line"}
    />
  );
};

export default HamburgerMenu;
