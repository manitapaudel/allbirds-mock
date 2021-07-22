import React from "react";
import IconButton from "../../atoms/IconButton";
import NavLink from "../../atoms/NavLink";
import MegaMenu from "../../organisms/MegaMenu";

const buttons = [
  { iconClass: "user-line", title: "Account" },
  { iconClass: "question-line", title: "Help" },
  { iconClass: "shopping-cart-2-line", title: "Cart" },
];
const navLinks = [
  { id: 0, label: "Men", href: "/" },
  { id: 1, label: "Women", href: "/" },
  { id: 2, label: "New Arrivals", href: "/" },
  { id: 3, label: "Sustainability", href: "/" },
  { id: 4, label: "Stores", href: "/" },
];

const Navbar = () => {
  const [megaMenu, setMegaMenu] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleMegaMenu = () => {
    setMegaMenu(!megaMenu);
  };

  return (
    <>
      <nav className="flex justify-between items-center bg-white z-10 px-5 py-1 shadow-md sticky top-0">
        <div className="grid place-items-start grid-cols-3 hidden lg:grid">
          <div onMouseEnter={handleMegaMenu} onMouseLeave={handleMegaMenu}>
            <NavLink
              href="/"
              className={`hidden lg:block ${megaMenu ? "bg-green-500" : ""}`}
            >
              Men
            </NavLink>
            <MegaMenu className={megaMenu ? "flex" : "hidden"} />
          </div>
          <div>
            <NavLink href="/" className="hidden lg:block">
              Women
            </NavLink>
          </div>
          <div>
            <NavLink href="/" className="hidden lg:block">
              New Arrivals
            </NavLink>
          </div>
          {/* {navLinks.slice(0, 3).map(({ id, label, href }) => (
            <div
              key={id}
              onMouseEnter={label === "Men" ? handleMegaMenu : ""}
              onMouseLeave={label === "Men" ? handleMegaMenu : ""}
            >
              <NavLink href={href} className="hidden lg:block">
                {label}
              </NavLink>
              <MegaMenu className={megaMenu ? "flex" : "hidden"} />
            </div>
          ))} */}
        </div>
        <h1 className="font-bold font-mono">allbirds</h1>
        <div className="grid grid-cols-3 place-items-center">
          {navLinks.slice(3, 5).map(({ id, label, href }) => (
            <NavLink href={href} className="hidden lg:block" key={id}>
              {label}
            </NavLink>
          ))}
          <div className="grid grid-cols-3 place-items-center gap-4 hidden lg:grid">
            {buttons.map(({ iconClass, title }) => (
              <IconButton key={title} title={title} iconClass={iconClass} />
            ))}
          </div>
        </div>
        <IconButton
          title="Cart"
          iconClass="shopping-cart-2-line"
          className="lg:hidden"
        />
        <IconButton
          onClick={handleOpen}
          title="menu"
          iconClass={open ? "close-line" : "menu-line"}
          className={`lg:hidden order-first`}
        />
      </nav>
      <div className={`lg:hidden ${open ? "block" : "hidden"}`}>
        {navLinks.map(({ id, label, href }) => (
          <div
            className="flex justify-between items-center py-3 px-10 border-solid border-b-2 border-gray-300"
            key={id}
          >
            <NavLink href={href}>{label}</NavLink>
            <IconButton title="View More" iconClass="arrow-right-s-line" />
          </div>
        ))}
        {buttons.slice(0, 2).map(({ title }) => (
          <div
            className="flex justify-start py-6 px-10 border-solid border-b-2 border-gray-300"
            key={title}
          >
            {title}
          </div>
        ))}
      </div>
      {/* <MegaMenu className={megaMenu ? "flex" : "hidden"} /> */}
    </>
  );
};

export default Navbar;
