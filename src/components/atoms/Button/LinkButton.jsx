const LinkButton = ({ children, className = "" }) => {
  return (
    <button
      className={`uppercase font-medium font-courier text-lg text-gray-400 text-center border-b-2 hover:text-black focus:text-black focus:border-black py-4 px-6 -mb-0.5 ${className}`}
    >
      {children}
    </button>
  );
};

export default LinkButton;
