import React from 'react'
import Button from './button'
import List from "./list";
import arrowDown from '../assets/images/icon-arrow-down.svg'
import Heading from "./heading";
import Logo from './logo';

export default function navbar() {
  return (
    <nav
      className="navbar"
      style={{
        display: "inline-block",
        backgroundImage: "./assets/images",
        color: "white",
        justifyContent: "space-between",
        width: "100%"
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
          width: "100%",
        }}
      >
        <Logo variant="h3">sunnyside</Logo>
        <div style={{ marginLeft: "10%" }}>
          <List />
        </div>

        <Button />
      </div>
      <div
        style={{
          flexGrow: "1",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          textAlign: "center",
          marginTop: "10%",
          margin: "90px",
        }}
      >
        <Heading variant="h2">WE ARE CREATIVES</Heading>
        <img
          src={arrowDown}
          alt="white arrow down"
          style={{
            width: "4%",
            height: "20%",
            animation: "bounce 2s infinite",
            cursor: "pointer",
          }}
        />
      </div>
    </nav>
  );
}
