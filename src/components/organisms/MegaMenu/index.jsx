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
      { name: "Sandals", href: "/" },
      { name: "Slippers", href: "/" },
      { name: "Crocs", href: "/" },
    ],
  },
  {
    title: "Casual Wear",
    items: [
      { name: "Sandals", href: "/" },
      { name: "Slippers", href: "/" },
      { name: "Crocs", href: "/" },
    ],
  },
  {
    title: "Formal Wear",
    items: [
      { name: "Sandals", href: "/" },
      { name: "Slippers", href: "/" },
      { name: "Crocs", href: "/" },
    ],
  },
];

const MegaMenu = ({ className }) => {
  return (
    <div className={`bg-green-500 text-white flex justify-evenly p-10 w-full h-auto absolute top-14 right-0 z-20 ${className}`}>
      
      {categories.map(({ title, items }) => (
        <div key={title} className="flex-col justify-between items-center">
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
