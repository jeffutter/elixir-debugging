import React from "react";

const outerStyle = {
  width: "100vw",
  height: "100%",
  maxHeight: "calc(100vw / (16 / 9))",
  display: "flex",
};

const leftStyle = {
  width: "85%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  position: "relative",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "white",
};

const rightStyle = {
  display: "flex",
  width: "15%",
  backgroundColor: "white",
};

export default ({ children }) => (
  <div style={outerStyle}>
    <div style={leftStyle}>{children}</div>
    <div style={rightStyle}></div>
  </div>
);
