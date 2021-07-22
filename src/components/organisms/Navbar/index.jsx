import IconButton from "../../atoms/IconButton";
import NavLink from "../../atoms/NavLink";
import HamburgerMenu from "../../molecules/HamburgerMenu";

const buttons = [
  { iconClass: "user-line", title: "User LogIn" },
  { iconClass: "question-line", title: "Help" },
  { iconClass: "shopping-cart-2-line", title: "Cart" },
];

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-white z-10 px-5 py-3 sticky top-0">
      <div className="grid place-items-start grid-cols-3">
        <NavLink href="/">Men</NavLink>
        <NavLink href="/">Women</NavLink>
        <NavLink href="/">New Arrivals</NavLink>
      </div>
      <div>
        <h1 className="font-bold font-mono">allbirds</h1>
      </div>
      <div className="grid grid-cols-3 place-items-center">
        <NavLink href="/">Sustainability</NavLink>
        <NavLink href="/">Stores</NavLink>
        <div className="grid grid-cols-3 place-items-center gap-4">
          {buttons.map(({ iconClass, title }) => (
            <IconButton title={title} iconClass={iconClass} />
          ))}
        </div>
      </div>
      <HamburgerMenu />
    </nav>
  );
};

export default Navbar;
