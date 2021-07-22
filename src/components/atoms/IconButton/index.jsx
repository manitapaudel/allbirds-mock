const IconButton = ({ title, iconClass, onClick }) => {
  return (
    <button onClick={onClick} title={title} className="text-3xl">
      <i className={`ri-${iconClass}`}></i>
    </button>
  );
};

export default IconButton;
