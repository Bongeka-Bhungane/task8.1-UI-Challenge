import React from "react";

export default function textsquare({ title, description, alt, font}) {
  return (
    <div
      className="squares"
      style={{
        width: "50%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "20px",
        alignItems: "start",
        padding: "7%",
        fontFamily: font
      }}
    >
      <h2>{title}</h2>
      <p>{description}</p>
      <a href="">{alt}</a>
      
    </div>
  );
}
