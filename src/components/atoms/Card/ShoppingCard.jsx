const ShoppingCard = ({
  href,
  alt,
  category,
  description,
  imageSrc,
  className = "",
}) => {
  return (
    <div
      className={`flex-col flex-shrink-0 h-auto w-1/4 shadow-lg overflow-hidden ${className}`}
    >
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
