const NavLink = ({ href, children }) => {
  return (
    <a className="font-bold font-mono" href={href}>
      {children}
    </a>
  );
};

export default NavLink;
