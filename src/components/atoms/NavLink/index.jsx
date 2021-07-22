const NavLink = ({ href, onMouseEnter="", onMouseLeave="", children, className = "" }) => {
  return (
    <a onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={`font-bold font-mono hover:bg-green-500 py-4 px-5 ${className}`} href={href}>
      {children}
    </a>
  );
};

export default NavLink;
