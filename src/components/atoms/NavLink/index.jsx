const NavLink = ({ href, children, className = "" }) => {
  return (
    <a
      className={`font-bold font-mono hover:bg-green-500 py-4 px-5 ${className}`}
      href={href}
    >
      {children}
    </a>
  );
};

export default NavLink;
