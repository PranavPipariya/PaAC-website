import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Topbar.css";
import Logo from "../assets/iitr_logo.png";
import {DensityMedium} from "@mui/icons-material";

export default function Topbar(){
    const [toggle, setToggle] = useState(true);
    function handleToggle(){
        setToggle(!toggle);
    }
    return (
        <div className="topbar-container">
            <div className="topbar-top">
            <NavLink to="/">
                <img src={Logo} className="logo" alt=""></img>
            </NavLink>
            </div>
            <button className = {"toggle-btn " + (toggle ? "closed" : "")} onClick={handleToggle}><DensityMedium></DensityMedium></button>
            <div className="topbar-navs">
                <div className={"nav-btns " + (toggle ? "hide" : "")}>
                    <NavLink to="/" className="nav-btn">Home</NavLink>
                    <NavLink to="/about-us" className="nav-btn">About Us</NavLink>
                    <NavLink to="/events" className="nav-btn">Events</NavLink>
                    <NavLink to="/gallery" className="nav-btn">Gallery</NavLink>
                    <NavLink to="/contact-us" className="nav-btn">Contact Us</NavLink>
                </div>
            </div>
        </div>
    );
} 