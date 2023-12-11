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
  const [eventMenu, setEventMenu] = useState(false);
  const [toggle, setToggle] = useState(false);
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
            Home
          </NavLink>
          <NavLink to="/people" className="nav-btn">
            About Us
          </NavLink>
          {/* <button
            className="nav-btn moreMenu"
            onClick={() => {
              setMoreMenu(!moreMenu);
            }}
          >
            About us
            {moreMenu ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
            {moreMenu ? (
              <div className="expandedMenu">
                <NavLink to="/library" className="nav-btn expandedNavLinks">
                  Library
                </NavLink>
                <NavLink
                  to="/open-projects"
                  className="nav-btn expandedNavLinks"
                >
                  Open Projects
                </NavLink>
                <NavLink to="/people" className="nav-btn expandedNavLinks">
                  Our Team
                </NavLink>
              </div>
            ) : (
              <></>
            )}
          </button> */}
          {/* <NavLink to="/events" className="nav-btn">
            Events
          </NavLink> */}
          <button
            className="nav-btn moreMenu"
            onClick={() => {
              setEventMenu(!eventMenu);
            }}
          >
            Events
            {eventMenu ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
            {eventMenu ? (
              <div className="expandedMenu">
                <NavLink to="/library" className="nav-btn expandedNavLinks">
                  Library
                </NavLink>
                <NavLink
                  to="/open-projects"
                  className="nav-btn expandedNavLinks"
                >
                  Open Projects
                </NavLink>
                <NavLink
                  to="/jc"
                  className="nav-btn expandedNavLinks"
                >
                  JC Discussions
                </NavLink>
              </div>
            ) : (
              <></>
            )}
          </button>
          <NavLink to="/gallery" className="nav-btn">
            Gallery
          </NavLink>
          {/* <NavLink to="/contact-us" className="nav-btn">
            Contact us
          </NavLink> */}
          <NavLink to="/inventory" className="nav-btn">
            Inventory
          </NavLink>
          <NavLink to="/library" className="nav-btn responsiveMenuLinks">
            Library
          </NavLink>
          <NavLink to="/open-projects" className="nav-btn responsiveMenuLinks">
            Open Projects
          </NavLink>
          <NavLink to="/people" className="nav-btn responsiveMenuLinks">
            Our Team
          </NavLink>
        </div>
      </div>
    </div>
  );
}
