import { Email, LinkedIn } from "@mui/icons-material";
import Logo from "../assets/iitr_logo.png";
import React from "react";
import "./About.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Card(props) {
    AOS.init({duration : 1000})
    return(
        <div className="card-container" data-aos="fade-up" data-aos-once="false" data-aos-easing="ease-in-out">
            <img className="card-image" src={props.img || Logo} alt=""></img>
            <h1 className="card-name">{props.name}</h1>
            <h2 className="card-position">({props.position})</h2>
            <div className="card-contacts">
                <a href={props.linkedIn}>
                    <LinkedIn fontSize="2vw" className="card-socials"/>
                </a>
                <a href={props.email}>
                    <Email fontSize="2vw" className="card-socials"/>
                </a>
            </div>
        </div>
    )

}