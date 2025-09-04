import React from 'react'
import Logo from './logo'
import List from "./list"
import Icons from './icons'

export default function footer() {
  return (
    <div
      className="footer"
      style={{
        width: "33%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "15%",
        alignItems: "center",
        padding: "0% 7% 2%",
      }}
    >
      <Logo variant="h3">sunnyside</Logo>
      <List />
      <Icons />
    </div>
  );
}
