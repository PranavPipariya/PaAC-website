import React from "react";
import { home_events } from "./HomeEventsData";

const HomeEvents = () => {
  return (
    <>
      {home_events.map((home_event) => (
        <div className="home-event-card">
          <h1 className="home-event-time">{home_event.date}</h1>
          <div>
            <img className="home-events-photo" src={home_event.image} alt="" />
          </div>
          <p className="home-event-title">{home_event.title}</p>
          <p className="home-event-description">{home_event.desc}</p>
        </div>
      ))}
    </>
  );
};

export default HomeEvents;
