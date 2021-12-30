import React from "react";
import ShoppingCard from "../../atoms/Card/ShoppingCard";
import IconButton from "../../atoms/IconButton";
import SectionHeading from "../../atoms/SectionHeading";

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
  {
    id: 3,
    href: "/",
    category: "Running Shoes",
    description: "The best shoes for running your errands, or simply run.",
    imageSrc:
      "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1200,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/carouselCard/en-US/images/3YdziwVyNdpFDs11yrjwSp/2",
    alt: "A person showing his shoes",
  },
  {
    id: 4,
    href: "/",
    category: "Men's Shoes",
    description:
      "We've categorized them under men's but they're actually gender neutral. Wear them without a worry!",
    imageSrc:
      "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1200,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/carouselCard/en-US/images/1pbT8yieU1eVm3Yhjh55vV/1",
    alt: "A person showing his shoes",
  },
  {
    id: 5,
    href: "/",
    category: "Socks",
    description:
      "Who doesn't love a pair of comfy socks? Get your favourite pair(s) within a week.",
    imageSrc:
      "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1200,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/carouselCard/en-US/images/2wZcLJMBdgn9pWXt2rLChu/2",
    alt: "A person showing his shoes",
  },
];

const ShopCollection = () => {
  const [current, setCurrent] = React.useState(2);
  const [prev, setPrev] = React.useState(null);

  const length = items.length;

  if (!Array.isArray(items) || length <= 0) {
    return null;
  }

  const prevSlide = () => {
    setCurrent(current === 2 ? length - 1 : current - 1);
    setPrev("prev");
  };

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 2 : current + 1);
    setPrev("next");
  };

  console.log(current);
  return (
    <div className="container mx-auto my-10 overflow-hidden">
      <SectionHeading className="text-left pl-5">
        Shop The Collections
      </SectionHeading>
      <div className="flex relative justify-between items-center">
        <IconButton
          title="Previous"
          iconClass="arrow-left-circle-fill text-green-500 p-3 bg-white hover:bg-green-500 hover:text-white"
          className={`absolute z-10`}
          onClick={prevSlide}
        />
        {items
          .slice(current - 2, current + 1)
          .map(({ id, href, category, description, imageSrc }) => (
            <ShoppingCard
              key={id}
              href={href}
              category={category}
              description={description}
              imageSrc={imageSrc}
              className={`transition-all ease-in-out duration-1000 transform slide`}
            />
          ))}
        <IconButton
          title="Next"
          iconClass="arrow-right-circle-fill text-green-500  p-3 bg-white hover:bg-green-500 hover:text-white"
          className="absolute z-10 right-0"
          onClick={nextSlide}
        />
      </div>
    </div>
  );
};

export default ShopCollection;
