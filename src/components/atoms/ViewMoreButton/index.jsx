import React from "react";
import IconButton from "../IconButton";

const ViewMoreButton = ({ onClick, iconClass }) => {
  return (
    <IconButton iconClass={iconClass} title="View More" onClick={onClick} />
  );
};

export default ViewMoreButton;
