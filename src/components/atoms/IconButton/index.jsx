const IconButton = ({ title, iconClass, onClick, className = "" }) => {
  return (
    <button onClick={onClick} title={title} className={`text-3xl ${className}`}>
      <i className={`ri-${iconClass}`}></i>
    </button>
  );
};

export default IconButton;
