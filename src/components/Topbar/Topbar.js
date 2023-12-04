import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Topbar.css";
import {
  Close,
  DensityMedium,
  KeyboardArrowDown,
  KeyboardArrowUp,
} from "@mui/icons-material";
import Logo from "../assets/iitr_logo.png";
export default function Topbar() {
  const [moreMenu, setMoreMenu] = useState(false);
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
      >
        {toggle ? <DensityMedium></DensityMedium> : <Close />}
      </button>
      <div className="topbar-navs">
        <div className={"nav-btns " + (toggle ? "hide" : "")}>
          <NavLink to="/" className="nav-btn">
            HOME
          </NavLink>
          <button
            className="nav-btn moreMenu"
            onClick={() => {
              setMoreMenu(!moreMenu);
            }}
          >
            ABOUT US
            {moreMenu ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
            {moreMenu ? (
              <div className="expandedMenu">
                <NavLink to="/library" className="nav-btn expandedNavLinks">
                  LIBRARY
                </NavLink>
                <NavLink
                  to="/open-projects"
                  className="nav-btn expandedNavLinks"
                >
                  OPEN PROJECTS
                </NavLink>
                <NavLink
                  to="/people"
                  className="nav-btn expandedNavLinks"
                >
                  OUR TEAM
                </NavLink>
              </div>
            ) : (
              <></>
            )}
          </button>
          <NavLink to="/events" className="nav-btn">
            EVENTS
          </NavLink>
          <NavLink to="/gallery" className="nav-btn">
            GALLERY
          </NavLink>
          <NavLink to="/contact-us" className="nav-btn">
            CONTACT US
          </NavLink>
          <NavLink to="/library" className="nav-btn moreMenuLinks">
            LIBRARY
          </NavLink>
          <NavLink to="/open-projects" className="nav-btn moreMenuLinks">
            OPEN PROJECTS
          </NavLink>
          <NavLink to="/open-projects" className="nav-btn moreMenuLinks">
            OUR TEAM
          </NavLink>
        </div>
      </div>
    </div>
  );
}
