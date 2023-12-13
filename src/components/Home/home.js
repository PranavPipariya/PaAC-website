import React, { useEffect } from "react";
import Topbar from "../Topbar/Topbar";
import Footer from "../Footer/Footer";
import "./home.css";
import Ellipse from "../assets/Primary.png";
import Planet from "../assets/Planet.png";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Achievement from "../Achievement/Achievement";
import HomeEvents from "./HomeEvents";
import Logo from "./Logo";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  AOS.init({ duration: 1000 });
  return (
    <>
      <div className="logo-div">
        <Logo></Logo>
      </div>
      <div className="home-container">
        <div className="home-topbar">
          <Topbar />
        </div>
        <div className="home-info">
          <img
            src={Ellipse}
            className="ellipse"
            alt=""
            width="30vw"
            height="30vw"
          ></img>
          <div
            className="home-title"
          >
            <h1 className="club">PHYSICS AND ASTRONOMY CLUB</h1>
            <h3 className="iitr">IIT ROORKEE</h3>
          </div>
          <img
            src={Planet}
            className="planet"
            alt=""
            height="50vw"
          ></img>
        </div>
        <div className="home-body">
          <div className="know-paac-container">
            <div
              className="paac-desc"
              data-aos="fade-up"
              data-aos-once="false"
              data-aos-easing="ease-in-out"
            >
              <NavLink to="/about-us">
                <h1 className="know-header">What do we do at PaAC?</h1>
              </NavLink>
              {/* <p className="know-body">
              Formerly known as the Star-gazing section, our group directly
              operates under the Student Technical Council of IITR and Office of
              Dean-sponsored research and industrial consultancy. The group is a
              student club that has a core executive team. However volunteering
              and even membership is open to all UG, PG, and Ph.D. students.
              Every year, we engage in several physics and astronomy outreach
              events and short and long-term technical projects. The club as its
              normal functioning engages in various activities, A Physics and
              Astronomy Journal Club is also a subset of our group. This Journal
              club frequently engages in research paper discussions and also in
              open informal group discussions on various mathematical and
              physical science topics.
            </p> */}
            </div>
            <div
              className="paac-gp"
              data-aos="fade-up"
              data-aos-once="false"
              data-aos-easing="ease-in-out"
            >
              Group Photo
              <img src="" alt=""></img>
            </div>
          </div>
          <div
            className="home-achievement"
            data-aos="fade-up"
            data-aos-once="false"
            data-aos-easing="ease-in-out"
          >
            <Achievement />
          </div>

          {/* ---------Home Events------------ */}
          <div
            className="home-events-section"
            data-aos="fade-up"
            data-aos-once="false"
            data-aos-easing="ease-in-out"
          >
            <div className="home-events-heading-container">
              <NavLink to="/events" className="home-events-link">
                <h1 className="home-events-heading">
                  Exploring the Cosmos: Engaging Events conducted by PaAC
                </h1>
              </NavLink>
            </div>

            <div className="home-events-carousel">
              <HomeEvents />
            </div>
          </div>
          {/* ------------Home Events Finishes------------ */}
          <Footer />
        </div>
      </div>
    </>
  );
}
