const NavLink = ({ href, children, className = "" }) => {
  return (
    <a
      className={`font-bold font-mono py-4 px-5 ${className}`}
      href={href}
    >
      {children}
    </a>
  );
};

export default NavLink;
