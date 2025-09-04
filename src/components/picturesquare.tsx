import React from "react";

export default function picturesquare({ image }) {
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
