import React from "react";

export default function List() {
  return (
    <div className="list">
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          flexDirection: 'row',
          gap: "20px",
        }}
      >
        <li>About</li>
        <li>Services</li>
        <li>Projects</li>
      </ul>
    </div>
  );
}
