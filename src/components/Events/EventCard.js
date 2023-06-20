import React from "react";
import "./Events.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function EventCard(props){
    AOS.init({duration : 1000})
    return(
        <div className="EventCard-container" data-aos="fade-up" data-aos-once="false" data-aos-easing="ease-in-out">
            <h1 className="event-title">{props.title}</h1>
            <h2 className="event-time">{props.date}</h2>
            <h2 className="event-location">{props.location}</h2>
            <p className="event-details">{props.details}</p>
        </div>
    )
}