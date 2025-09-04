import React from "react";
import Heading from "./heading";

export default function textsquare() {
  return (
    <div
      className="squares"
      style={{
        width: "50%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: 'center',
        gap: "20px",
        alignItems: 'start',
        padding: '7%'
      }}
    >
      <Heading variant="h2">WE ARE CREATIVES</Heading>

      <Heading variant="p">
        We are a full-service creative agency specializing in helping brands
        grow fast. Engage your clients through compelling visuals that do most
        of the marketing for you.
      </Heading>

      <Heading variant="a">learn more</Heading>
    </div>
  );
}
