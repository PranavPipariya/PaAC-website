import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Topbar.css";
import { DensityMedium } from "@mui/icons-material";

export default function Topbar() {
  const [toggle, setToggle] = useState(true);
  function handleToggle() {
    setToggle(!toggle);
  }
  return (
    <div className="topbar-container">
      <div className="topbar-top">

      </div>
      <button
        className={"toggle-btn " + (toggle ? "closed" : "")}
        onClick={handleToggle}
      >
        <DensityMedium></DensityMedium>
      </button>
      <div className="topbar-navs">
        <div className={"nav-btns " + (toggle ? "hide" : "")}>
          <NavLink to="/" className="nav-btn">
            HOME
          </NavLink>
          <NavLink to="/about-us" className="nav-btn">
            ABOUT US
          </NavLink>
          <NavLink to="/events" className="nav-btn">
            EVENTS
          </NavLink>
          <NavLink to="/gallery" className="nav-btn">
            GALLERY
          </NavLink>
          <NavLink to="/contact-us" className="nav-btn">
            CONTACT US
          </NavLink>
        </div>
      </div>
    </div>
  );
}
