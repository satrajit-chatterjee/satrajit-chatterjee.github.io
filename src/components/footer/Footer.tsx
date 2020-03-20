import React from "react";
import "./Footer.css";
import { pickNextTheme } from "../../context/ThemeContext";

export default function Footer() {
  return (
    <div className={"footer-container"}>
      <div className={"footer floating"} onClick={pickNextTheme}>
        By Satrajit Chatterjee
      </div>
    </div>
  );
}
