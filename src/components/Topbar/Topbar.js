import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Topbar.css";
import { Close, DensityMedium } from "@mui/icons-material";
import Logo from "../assets/iitr_logo.png";
export default function Topbar() {
  const [toggle, setToggle] = useState(true);
  function handleToggle() {
    setToggle(!toggle);
  }
  return (
    <div className="topbar-container">
      <div className="topbar-top">
        <NavLink to="/">
          <img src={Logo} className="small-screen-logo" alt=""></img>
        </NavLink>
      </div>
      <button
        className={"toggle-btn " + (toggle ? "closed" : "")}
        onClick={handleToggle}
      >{
        toggle ? <DensityMedium></DensityMedium> : <Close/>
      }
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
