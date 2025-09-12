import React from "react";

export default function Picturetextsquare({ image, title, description, color}) {
  return (
    <div
      className="square"
      style={{
        backgroundImage: `url(${image})`,
        display: "flex",
        flexDirection: "column",
        justifyContent: "end",
        alignItems: "center",
        padding: '0% 7% 2%'
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: '10px',
          color: color
        }}
      >
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
