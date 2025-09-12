import React from 'react'

export default function Display( {image} ) {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100%",
        width: '25%'
      }}
    ></div>
  );
}
