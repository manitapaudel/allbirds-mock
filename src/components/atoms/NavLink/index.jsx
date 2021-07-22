const NavLink = ({ href, children, className }) => {
  return (
    <a className={`font-bold font-mono ${className}`} href={href}>
      {children}
    </a>
  );
};

export default NavLink;
