import React from "react";
import IconButton from "../../atoms/IconButton";
import NavLink from "../../atoms/NavLink";

const navLinks = [
  { id: 0, label: "Men", href: "/" },
  { id: 1, label: "Women", href: "/" },
  { id: 2, label: "New Arrivals", href: "/" },
  { id: 3, label: "Sustainability", href: "/" },
  { id: 4, label: "Stores", href: "/" },
];

const HamburgerMenu = ({ className }) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <>
      <IconButton
        onClick={handleOpen}
        title="menu"
        iconClass={open ? "close-line" : "menu-line"}
        className={`lg:hidden ${className}`}
      />
      <div className={`container ${open ? "block" : "hidden"}`}>
        {navLinks.map(({ id, label, href }) => (
          <div className="flex justify-between p-3 border-solid border-b-2 border-gray-300" key={id}>
            <NavLink href={href}>{label}</NavLink>
            <IconButton title="View More" iconClass="arrow-right-s-line"/>
          </div>
        ))}
      </div>
    </>
  );
};

export default HamburgerMenu;
