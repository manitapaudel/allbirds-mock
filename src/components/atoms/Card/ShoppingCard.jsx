const ShoppingCard = ({ href, alt, category, description, imageSrc }) => {
  return (
    <div className="flex-col h-auto w-1/4 shadow-lg overflow-hidden">
      <a href={href}>
        <img
          src={imageSrc}
          alt={alt}
          height="385px"
          width="385px"
          className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
        />
        <div className="p-5 text-left">
          <h3 className="font-bold">{category}</h3>
          {description}
        </div>
      </a>
    </div>
  );
};

export default ShoppingCard;
