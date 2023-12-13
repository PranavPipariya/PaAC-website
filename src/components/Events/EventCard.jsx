import React from "react";
import "./Events.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function EventCard(props){
    AOS.init({duration : 1000})
    return(
       
   
        <div className="EventCard-container" data-aos="fade-up" data-aos-once="false" data-aos-easing="ease-in-out">
            <h1 className="event-title">{props.title} 1</h1>
            <div className="event-info">
            <h2 className="event-time">  <i className="icon-clock"></i> {props.date}</h2>
            <h2 className="event-location">  <i className="icon-location"></i> {props.location}</h2>
            <hr className="divider" />
            <p className="event-details">{props.details}</p>
        </div>
        <button className="event-share-button">Share</button>
        </div>
    )
}