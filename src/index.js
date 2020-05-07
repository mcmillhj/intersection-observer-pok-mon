import React from "react";
import ReactDOM from "react-dom";

import "index.css";
import Grid from "components/grid";

if ("IntersectionObserver" in window) {
  window.observer = new IntersectionObserver(
    (entries, self) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log(entry);
          // load image
          const img = entry.target;
          const src = img.getAttribute("data-src");
          if (!src) {
            return;
          }
          img.src = src;

          // stop observing after image begins to load
          self.unobserve(entry.target);
        }
      });
    },
    {
      threshold: [0.2, 1],
    }
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Grid />
  </React.StrictMode>,
  document.getElementById("root")
);
