import React from "react";

const Img = ({ src, alt, lazy = true, ...props }) => {
  return (
    <img
      {...props}
      src={src}
      alt={alt}
      className={"img"}
      loading={lazy ? "lazy" : "eager"}
    />
  );
};

export default Img;
