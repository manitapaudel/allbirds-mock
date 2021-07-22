import IconButton from "../../atoms/IconButton";
import NavLink from "../../atoms/NavLink";
import HamburgerMenu from "../../molecules/HamburgerMenu";

const buttons = [
  { iconClass: "user-line", title: "User LogIn" },
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
  return (
    <nav className="flex justify-between items-center bg-white z-10 px-5 py-3 sticky top-0">
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
      <IconButton title="Cart" iconClass="shopping-cart-2-line lg:hidden" />
      <HamburgerMenu className="order-first" />
    </nav>
  );
};

export default Navbar;
