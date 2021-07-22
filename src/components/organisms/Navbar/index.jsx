import React from "react";
import IconButton from "../../atoms/IconButton";
import NavLink from "../../atoms/NavLink";

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
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <>
      <nav className="flex justify-between items-center bg-white z-10 px-5 py-3 shadow-md sticky top-0">
        <div className="grid place-items-start grid-cols-3 hidden lg:grid">
          {navLinks.slice(0, 3).map(({ id, label, href }) => (
            <NavLink href={href} className="hidden lg:block" key={id}>
              {label}
            </NavLink>
          ))}
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
              <IconButton title={title} iconClass={iconClass} />
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
        {buttons.slice(0, 2).map(({title}) => (
          <div className="flex justify-start py-6 px-10 border-solid border-b-2 border-gray-300" key={title}>
          {title}
        </div>
        ))}
      </div>
    </>
  );
};

export default Navbar;
