import React from "react";

const Circle = ({ cell }) => {
  let color = "#000000";
  if (cell === 1) {
    color = "#eea915";
  } else if (cell === 2) {
    color = "#00bfff";
  }

  var style = {
    backgroundColor: color
  };

  return <div id="circles" className="circle" style={style} />;
};

export default Circle;

