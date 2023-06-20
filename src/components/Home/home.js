import React, { useEffect } from "react";
import Topbar from "../Topbar/Topbar";
import Footer from "../Footer/Footer";
import "./home.css";
import Ellipse from "../assets/Primary.png";
import Planet from "../assets/Planet.png";
import Gallery from "../assets/Gallery.png";
import { NavLink } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Achievement from "../Achievement/Achievement";

export default function Home(){
    useEffect(() => {
        window.scrollTo(0,0);
    }, []);
    AOS.init({ duration : 1000});
    return(
        <div className="home-container">
            <div className="home-topbar">
                <Topbar/>
            </div>
            <div className="home-info">
            <img src={Ellipse} className="ellipse" alt="" data-aos="fade-right" data-aos-once="false" data-aos-easing="ease-in-out"></img>
            <div className="home-title" data-aos="fade-up" data-aos-easing="ease-in-out"data-aos-once="false">
                <h1 className="club">Physics And Astronomy Club</h1>
                <h2 className="iitr">IIT Roorkee</h2>
            </div>
            <img src={Planet} className="planet" alt="" data-aos="fade-left" data-aos-once="false" data-aos-easing="ease-in-out"></img>
            </div>
            <div className="home-body">
                <div className="know-paac-container">
                    <div className="paac-desc" data-aos="fade-up" data-aos-once="false" data-aos-easing="ease-in-out">
                        <h1 className="know-header">Know PaAC</h1>
                        <p className="know-body">lorem ipsum dolor sit amet, consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing v</p>
                    </div>
                    <div className="paac-gp" data-aos="fade-up" data-aos-once="false" data-aos-easing="ease-in-out">
                        Group Photo
                        <img src="" alt=""></img>
                    </div>
                </div>
                <div className="home-achievement" data-aos="fade-up" data-aos-once="false" data-aos-easing="ease-in-out">
                    <Achievement />
                </div>
                <div className="home-events" data-aos="fade-up" data-aos-once="false" data-aos-easing="ease-in-out">
                    <div className="home-events-photo">Event ka Photo</div>
                    <div className="home-events-upcoming">
                        <h1 className="home-events-title">Upcoming Events</h1>
                        <ul className="home-events-list">
                            <li className="home-events-item">lorem ipsum dolor sit amet, consectetur adipiscing</li>
                            <li className="home-events-item">lorem ipsum dolor sit amet, consectetur adipiscing</li>
                            <li className="home-events-item">lorem ipsum dolor sit amet, consectetur adipiscing</li>
                            <li className="home-events-item">lorem ipsum dolor sit amet, consectetur adipiscing</li>
                        </ul>
                    </div>
                </div>
                <div className="home-gallery" data-aos="fade-up" data-aos-once="false" data-aos-easing="ease-in-out">
                    <div className="home-gallery-top">
                        <h1 className="home-gallery-text">Photos</h1>
                        <NavLink to="/gallery" className="home-gallery-text">More</NavLink>
                    </div>
                    <img className="home-gallery-img" src={Gallery} alt=""></img>
                </div>
                <Footer />
            </div>
        </div>
    );
}