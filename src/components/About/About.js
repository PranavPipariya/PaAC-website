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
                <p className="intro-para" data-aos="fade-up-left" data-aos-once="false" data-aos-easing="ease-in-out">
                    Formerly known as the Star-gazing section, our group directly operates under the Student Technical Council of IITR and Office of Dean-sponsored research and industrial consultancy. The group is a student club that has a core executive team. However volunteering and even membership is open to all UG, PG, and Ph.D. students. In the academic year 2021-2022, we engaged in several physics and astronomy outreach events and short and long-term technical projects.
                    The club as its normal functioning engages in various activities, A Physics and Astronomy Journal Club is also a subset of our group. This Journal club frequently engages in research paper discussions and also in open informal group discussions on various mathematical and physical science topics.
                </p>
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