import React from "react";

export default function Picturesquare({ image }) {
  console.log(image);
  return (
    <div
      className="square"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: '100%'
      }}
    ></div>
  );
}
