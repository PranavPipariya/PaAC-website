import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Topbar.css";
import Logo from "../assets/iitr_logo.webp";
export default function Topbar() {
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
        {toggle ? open : close}
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
          <NavLink
            to="/activities"
            className="nav-btn"
            onClick={() => setToggle(false)}

          >
            Activities
          </NavLink>
          <NavLink
            to="/gallery"
            className="nav-btn"
            onClick={() => setToggle(false)}
          >
            Gallery
          </NavLink>

          <NavLink
            to="/contact-us"
            className="nav-btn"
            onClick={() => setToggle(false)}
          >
            Contact us
          </NavLink>
          {/* <NavLink
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
          <NavLink
            to="/contact-us"
            className="nav-btn responsiveMenuLinks"
            onClick={() => setToggle(false)}
          >
            Contact us
          </NavLink> */}
        </div>
      </div>
    </div>
  );
 }
// <div className="expandedMenu">
//             <NavLink
//               to="/library"
//               className="nav-btn expandedNavLinks"
//               onClick={() => setToggle(false)}
//             >
//               Library
//             </NavLink>
//             <NavLink
//               to="/Events"
//               className="nav-btn expandedNavLinks"
//               onClick={() => setToggle(false)}
//             >
//               Events
//             </NavLink>
//             <NavLink
//               to="/open-projects"
//               className="nav-btn expandedNavLinks"
//               onClick={() => setToggle(false)}
//             >
//               Open Projects
//             </NavLink>
//             <NavLink
//               to="/jc"
//               className="nav-btn expandedNavLinks"
//               onClick={() => setToggle(false)}
//             >
//               Journal Club
//             </NavLink>
//           </div>