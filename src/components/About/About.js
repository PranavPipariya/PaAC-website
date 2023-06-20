import React, { useEffect, useState } from "react";
import "./About.css";
import Topbar from "../Topbar/Topbar";
import Footer from "../Footer/Footer";
import {Secy, Head, Member} from "./Data.js";
import Card from "./Card";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About(){
    useEffect(() => {
        window.scrollTo(0,0);
    }, []);
    AOS.init({ duration : 600});
    const [year, setYear] = useState(4);
    return(
        <div className="about-container">
            <div className="about-topbar">
                <Topbar />
            </div>
            <div className="about-intro" >
                <span className="intro-title" data-aos="fade-up-right" data-aos-once="false" data-aos-easing="ease-in-out">About Us</span>

                <div className="intro-para" data-aos="fade-up-left" data-aos-once="false" data-aos-easing="ease-in-out">
                    <p>The people at PaAC are usually a part of 4 clusters.</p>
                    <div className="intro-vertical-parent">
                    <div className="intro-vertical">
                        <h2>Physics Nebula</h2>
                        <p className="intro-vertical-text">These are people who love discussing anything theoretical physics.
                        We organise  group discussions, lectures and open projects (even the pandemic could not stop us from launching a 5-part zoom lecture series).
                        We have had some of the most prominent names in the field of physics and world-renowned speakers present talks where the participants get a chance to interact with some of the best minds in physics of our time.
                        Being science enthusiasts, we also organise fun quizzes and contests.</p>
                    </div>
                    <div className="intro-vertical">
                        <h2>Mathematics Nebula</h2>
                        <p className="intro-vertical-text">We love sharing our love for mathematics and our goal is to foster a community of like-minded individuals.
                        We have organised gruelling integration tournaments in which teams have had to battle through 7 consecutive tie-breakers to get to the finals.
                        If this sounds like a dream come true, well, hop on aboard!</p>
                    </div>
                    <div className="intro-vertical">
                        <h2>Astronomy Nebula</h2>
                        <p className="intro-vertical-text">We are intrepid minds, undeterred by Roorkee's frigid winters, drawn to the enchanting night skies.
                        With cameras in hand, we capture celestial marvels and process them.
                        We also organise star-gazing and telescope handling sessions for the IITR junta. </p>
                    </div>
                    <div className="intro-vertical">
                        <h2>Operations Nebula</h2>
                        <p className="intro-vertical-text">The lovely people at operations are responsible for the beautiful designs and for managing all these events and sessions to fruition.</p>
                    </div>
                    </div>
                </div>
            </div>
            <div className="members">
                <div className="members-secys" data-aos="fade-up" data-aos-once="false" data-aos-easing="ease-in-out">
                    {Secy.map((value) => ( 
                    <Card 
                    id = {value.name}
                    name={value.name} 
                    img = {value.image}
                    position ={value.position}
                    linkedIn = {value.linkedIn}
                    email = {value.email}
                    /> ))}
                </div>
                <div className="line-container" data-aos="fade-up" data-aos-once="false" data-aos-easing="ease-in-out">
                    <div className="horizontal-line"></div>
                </div>
                <div className="members-heads" data-aos="fade-up" data-aos-once="false" data-aos-easing="ease-in-out">
                {Head.map((value) => ( 
                    <Card 
                    id = {value.name}
                    name={value.name} 
                    img = {value.image}
                    position ={value.position}
                    linkedIn = {value.linkedIn}
                    email = {value.email} 
                    /> ))}
                </div>
                <div className="line-container" data-aos="fade-up" data-aos-once="false" data-aos-easing="ease-in-out">
                    <div className="horizontal-line"></div>
                </div>
                <div className="members-btn" data-aos="fade-up" data-aos-once="false" data-aos-easing="ease-in-out">
                    <button className={"members-btn-year " + (year === 1? "active-year":"") } onClick={() => setYear(1)}>1st Y</button>
                    <button className={"members-btn-year " + (year === 2? "active-year":"") } onClick={() => setYear(2)}>2nd Y</button>
                    <button className={"members-btn-year " + (year === 3? "active-year":"") } onClick={() => setYear(3)}>3rd Y</button>
                    <button className={"members-btn-year " + (year === 4? "active-year":"") } onClick={() => setYear(4)}>4th Y</button>
                </div>
                <div className="members-members" data-aos="fade-up" data-aos-once="false" data-aos-easing="ease-in-out">
                {Member.map((value) =>{
                    if (value.year === year){
                        return <Card 
                        id = {value.name}
                        name={value.name} 
                        img = {value.image}
                        position ={value.position}
                        linkedIn = {value.linkedIn}
                        email = {value.email}
                    />
                    }
                    return null;
                })}
                </div>
            </div>
            <div className="about-footer">
            <Footer />
            </div>
        </div>
    )
}