import React from "react";
import { home_events } from "./HomeEventsData";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

// add a better ease function for the hover effect
// and the movement animation
const HomeEvents = () => {
  return (
    <>
      <Splide
        options={{
          type: "loop",
          width: "100vw",
          perPage: 4,
          breakpoints: {
            1024: {
              perPage: 2
            },
            768: {
              perPage: 1
            }
          },
          gap: "1rem",
          autoScroll: {
            speed: 2,
            pauseOnFocus: false,
          },
          arrows: false,
          pagination: false,
        }}
        extensions={{ AutoScroll }}
      >
        {home_events.map((home_event) => (
          <SplideSlide>
            <div className="home-event-card">
              <h1 className="home-event-time">{home_event.date}</h1>
              <div className="home-events-photo-container">
                <img
                  className="home-events-photo"
                  src={home_event.image}
                  alt=""
                />
              </div>
              <p className="home-event-title">{home_event.title}</p>
              <p className="home-event-description">{home_event.desc}</p>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </>
  );
};

export default HomeEvents;
