import React from "react";

import Img from "components/img";
import pokemon from "pokemon";

const Grid = () => (
  <div className="grid">
    {pokemon.slice(0, 350).map(({ name, imageUrl }, index) => {
      const className = [
        "grid-item",
        index % 3 === 0 && "grid-span-3",
        index % 5 === 0 && index % 3 !== 0 && "grid-span-2",
      ];

      return (
        <div key={name} className={className.filter(Boolean).join(" ")}>
          <Img src={imageUrl} />
        </div>
      );
    })}
  </div>
);

export default Grid;
