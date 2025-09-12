import React from 'react'

export default function Testimonials({ image, description, name, role}) {
  return (
    <div
      style={{
        width: "33%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "15%",
        alignItems: "center",
        padding: "0% 7% 2%",
        fontFamily: "sans-serif",
      }}
    >
      <img src={image} alt="client image" style={{ borderRadius: "50%", width: '20%'}} />
      <p>{description}</p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "end",
          alignItems: "center",
          padding: "0% 6% 2%",
        }}
      >
        <h5>{name}</h5>
        <span style={{ color: "#a9a9a9" }}>{role}</span>
      </div>
    </div>
  );
}

