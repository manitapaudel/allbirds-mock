import ShoppingCard from "../../atoms/Card/ShoppingCard";

const items = [
  {
    id: 0,
    href: "/",
    category: "Neutrals",
    description:
      "Our neutral shades go with whatever you like, wherever you like. You could say they're...pretty neutral.",
    imageSrc:
      "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1200,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/carouselCard/en-US/images/1WXyUaqpiFC7Gxjo1UvtHF/1",
    alt: "A person walking on grass with allbirds shoes on",
  },
  {
    id: 1,
    href: "/",
    category: "New Arrivals",
    description:
      "The latest styles and limited edition colors that you can only find here (while they last, that is).",
    imageSrc:
      "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1200,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/carouselCard/en-US/images/263ZlEg4JBDHU7kmH4Hjlg/2",
    alt: "A happy person wearing allbirds shoes",
  },
  {
    id: 2,
    href: "/",
    category: "Travel Essentials",
    description:
      "Dreaming of someplace new? So are these easy, pack-and-go picks.",
    imageSrc:
      "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1200,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/carouselCard/en-US/images/22CPK93OfWiUuMT9t07ITw/2",
    alt: "A person showing his shoes",
  },
];

const ShopCollection = () => {
  return (
    <div className="container mx-auto my-10">
      <h2 className="text-left font-bold font-mono pl-5 mb-5">
        Shop The Collections
      </h2>
      <div className="flex justify-between">
        {items.map(({ id, href, category, description, imageSrc }) => (
          <ShoppingCard
            key={id}
            href={href}
            category={category}
            description={description}
            imageSrc={imageSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default ShopCollection;
