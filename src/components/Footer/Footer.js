import React from "react";
import "./Footer.css";
import { Email, Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Footer(){
    AOS.init({duration:1000})
    return(
        <div className="footer-container">
            <div className="footer-main">
                <div className="footer-div-left" data-aos="fade-up" data-aos-once="false" data-aos-easing="ease-in-out">
                <div className="footer-div address">
                    <h1 className="footer-headings">Address</h1>
                    <h2 className="footer-body">Student Activity Center(SAC), Room No. 116, Indian Institute of Technology Roorkee, Roorkee, Uttarakhand 247667</h2>
                </div>
                <div className="footer-div contact">
                    <h1 className="footer-headings">Contact</h1>
                    <h2 className="footer-body">Simardeep Singh Sandhu : +91-9899882259</h2>
                    <h2 className="footer-body">Ratul Thakur : +91-7018044835</h2>
                    <h2 className="footer-body">Kriti : +91-9886800307</h2>
                </div>
                </div>
                <div className="footer-div-right" data-aos="fade-up" data-aos-once="false" data-aos-easing="ease-in-out">
                <div className="footer-div email">
                    <h1 className="footer-headings">Email</h1>
                    <h2 className="footer-body">paac@iitr.ac.in</h2>
                </div>
                <div className="footer-div social">
                    <div className="footer-socials"><Instagram className="socials-icon" fontSize="2vw"/>Instagram</div>
                    <div className="footer-socials"><Facebook className="socials-icon" fontSize="2vw"/>Facebook</div>
                    <div className="footer-socials"><Twitter className="socials-icon" fontSize="2vw"/>Twitter</div>
                    <div className="footer-socials"><LinkedIn className="socials-icon" fontSize="2vw"/>LinkedIn</div>
                    <div className="footer-socials"><Email className="socials-icon" fontSize="2vw"/>Email</div>
                </div>
                </div>
            </div>
        </div>
    )
}