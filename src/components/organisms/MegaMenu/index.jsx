const categories = [
  {
    title: "Summer",
    items: [
      { name: "Sandals", href: "/" },
      { name: "Slippers", href: "/" },
      { name: "Crocs", href: "/" },
    ],
  },
  {
    title: "Winter",
    items: [
      { name: "AB", href: "/" },
      { name: "CD", href: "/" },
      { name: "EF", href: "/" },
    ],
  },
  {
    title: "Formal Wear",
    items: [
      { name: "GH", href: "/" },
      { name: "IJ", href: "/" },
      { name: "KL", href: "/" },
    ],
  },
  {
    title: "Casual Wear",
    items: [
      { name: "MN", href: "/" },
      { name: "OP", href: "/" },
      { name: "QR", href: "/" },
    ],
  },
];

const MegaMenu = ({ className }) => {
  return (
    <div className={`bg-white flex justify-evenly p-10 w-full h-auto absolute ${className}`}>
      {categories.map(({ title, items }) => (
        <div id={title} className="flex-col justify-between items-center">
          <h2>{title}</h2>
          <div className="grid grid-col-1 place-items-center">
            {items.map(({ name, href }) => (
              <a className="py-3" key={name} href={href}>
                {name}
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MegaMenu;
