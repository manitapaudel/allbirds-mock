import React from "react";
import IconButton from "../../atoms/IconButton";

const HamburgerMenu = ({ className }) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <IconButton
      onClick={handleOpen}
      title="menu"
      iconClass={open ? "close-line" : "menu-line"}
      className={`lg:hidden ${className}`}
    />
  );
};

export default HamburgerMenu;
