import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Topbar.css";
import {
  Close,
  DensityMedium,
} from "@mui/icons-material";
import Logo from "../assets/iitr_logo.webp";
export default function Topbar() {
  // const [moreMenu, setMoreMenu] = useState(false);
  const [eventMenu, setEventMenu] = useState(false);
  const [toggle, setToggle] = useState(true);
  function handleToggle() {
    setToggle(!toggle);
  }
  return (
    <div className="topbar-container">
      <div className="topbar-top">
        <NavLink to="/" onClick={() => setToggle(false)}>
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
          <NavLink to="/" className="nav-btn" onClick={() => setToggle(false)}>
            Home
          </NavLink>
          <NavLink
            to="/people"
            className="nav-btn"
            onClick={() => setToggle(false)}
          >
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
            Our Work
          </button>

          {/* {eventMenu ? <KeyboardArrowUp /> : <KeyboardArrowDown />} */}

          <div className="expandedMenu">
            <NavLink
              to="/library"
              className="nav-btn expandedNavLinks"
              onClick={() => setToggle(false)}
            >
              Library
            </NavLink>
            <NavLink
              to="/Events"
              className="nav-btn expandedNavLinks"
              onClick={() => setToggle(false)}
            >
              Events
            </NavLink>
            <NavLink
              to="/open-projects"
              className="nav-btn expandedNavLinks"
              onClick={() => setToggle(false)}
            >
              Open Projects
            </NavLink>
            <NavLink
              to="/jc"
              className="nav-btn expandedNavLinks"
              onClick={() => setToggle(false)}
            >
              Journal Club
            </NavLink>
          </div>
          <NavLink
            to="/gallery"
            className="nav-btn"
            onClick={() => setToggle(false)}
          >
            Gallery
          </NavLink>
          {/* <NavLink to="/contact-us" className="nav-btn">
            Contact us
          </NavLink> */}
          <NavLink
            to="/inventory"
            className="nav-btn"
            onClick={() => setToggle(false)}
          >
            Inventory
          </NavLink>
          <NavLink
            to="/library"
            className="nav-btn responsiveMenuLinks"
            onClick={() => setToggle(false)}
          >
            Library
          </NavLink>
          <NavLink
            to="/Events"
            className="nav-btn responsiveMenuLinks"
            onClick={() => setToggle(false)}
          >
            Events
          </NavLink>
          <NavLink
            to="/open-projects"
            className="nav-btn responsiveMenuLinks"
            onClick={() => setToggle(false)}
          >
            Open Projects
          </NavLink>
          <NavLink
            to="/jc"
            className="nav-btn responsiveMenuLinks"
            onClick={() => setToggle(false)}
          >
            Journal Club
          </NavLink>
          {/* <NavLink to="/people" className="nav-btn responsiveMenuLinks">
            Our Team
          </NavLink> */}
        </div>
      </div>
    </div>
  );
}