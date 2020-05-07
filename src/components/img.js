import React, { useEffect, createRef } from "react";

const Img = ({ src, alt, lazy = true, ...props }) => {
  const imageRef = createRef();

  useEffect(() => {
    if (imageRef.current && window.observer && lazy) {
      window.observer.observe(imageRef.current);
    }
  });

  return (
    <img ref={imageRef} {...props} data-src={src} alt={alt} className={"img"} />
  );
};

export default Img;
