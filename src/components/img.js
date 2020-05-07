import React from "react";

const Img = ({ src, alt, ...props }) => {
  return <img {...props} src={src} alt={alt} className={"img"} />;
};

export default Img;
