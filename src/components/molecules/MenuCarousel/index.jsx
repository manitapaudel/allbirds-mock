import HamburgerMenu from "../HamburgerMenu";

const categories = [
  { id: 0, label: "Men", href: "/" },
  { id: 1, label: "Women", href: "/" },
  { id: 2, label: "New Arrivals", href: "/" },
  { id: 3, label: "Sustainability", href: "/" },
  { id: 4, label: "Stores", href: "/" },
];

const MenuCarousel = () => {
  return (
    <HamburgerMenu categories={categories}/>
  );
};

export default MenuCarousel;
