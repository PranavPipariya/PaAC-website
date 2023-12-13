import React, { useState } from "react";
import "./People.css";
import Topbar from "../Topbar/Topbar";
import Footer from "../Footer/Footer";
import { Secy, Head, Member} from "./Data.js";
import Card from "./Card";
// import axios from "axios";   for strapi testing
// import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";

export default function People() {
  // const [displayAlums, setDisplayAlums] = useState(false);

  const [year, setYear] = useState(2);
  return (
    <div className="about-container">
      <div className="about-topbar">
        <Topbar />
      </div>

      <div className="members">
        <div
          className="members-secys"
          data-aos="fade-up"
          data-aos-once="false"
          data-aos-easing="ease-in-out"
        >
          {Secy.map((value) => (
            <Card
              id={value.name}
              name={value.name}
              img={value.image}
              position={value.position}
              linkedIn={value.linkedIn}
              email={value.email}
              blurhash={value.blurhash}
            />
          ))}
        </div>
        <div
          className="line-container"
          data-aos="fade-up"
          data-aos-once="false"
          data-aos-easing="ease-in-out"
        >
          <div className="horizontal-line"></div>
        </div>
        <div
          className="members-heads"
          data-aos="fade-up"
          data-aos-once="false"
          data-aos-easing="ease-in-out"
        >
          {Head.map((value) => (
            <Card
              id={value.name}
              name={value.name}
              img={value.image}
              position={value.position}
              linkedIn={value.linkedIn}
              email={value.email}
              blurhash={value.blurhash}
            />
          ))}
        </div>
        <div
          className="line-container"
          data-aos="fade-up"
          data-aos-once="false"
          data-aos-easing="ease-in-out"
        >
          <div className="horizontal-line"></div>
        </div>
        <div
          className="members-btn"
          data-aos="fade-up"
          data-aos-once="false"
          data-aos-easing="ease-in-out"
        >
          <button
            className={"members-btn-year " + (year === 2 ? "active-year" : "")}
            onClick={() => setYear(2)}
          >
            2nd Y
          </button>
          <button
            className={"members-btn-year " + (year === 3 ? "active-year" : "")}
            onClick={() => setYear(3)}
          >
            3rd Y
          </button>
          <button
            className={"members-btn-year " + (year === 4 ? "active-year" : "")}
            onClick={() => setYear(4)}
          >
            4th Y
          </button>
          <button
            className={"members-btn-year " + (year === 5 ? "active-year" : "")}
            onClick={() => setYear(5)}
          >
            5th Y
          </button>
        </div>
        <div
          className="members-members"
          data-aos="fade-up"
          data-aos-once="false"
          data-aos-easing="ease-in-out"
        >
          {Member.map((value) => {
            if (value.year === year) {
              return (
                <Card
                  id={value.name}
                  name={value.name}
                  img={value.image}
                  position={value.position}
                  linkedIn={value.linkedIn}
                  email={value.email}
                  blurhash={value.blurhash}
                />
              );
            }
            return null;
          })}
        </div>
        <div
          className="line-container"
          data-aos="fade-up"
          data-aos-once="false"
          data-aos-easing="ease-in-out"
        >
          <div className="horizontal-line"></div>
        </div>
      </div>
      {/* <div
        className="alum-container"
        data-aos="fade-up"
        data-aos-once="false"
        data-aos-easing="ease-in-out"
      >
        <button
          className="alum-btn"
          onClick={() => {
            setDisplayAlums(!displayAlums);
          }}
        >
          <span>Meet our Alums</span>
          <button
          >
            {displayAlums === false ? (
              <KeyboardArrowDown />
            ) : (
              <KeyboardArrowUp />
            )}
          </button>
        </button>
        <div
          className={`alums ${displayAlums === false ? "hide" : ""}`}
          data-aos="fade-up"
          data-aos-once="false"
          data-aos-easing="ease-in-out"
        >
          {alums.map((value) => (
            <Card
              id={value.name}
              name={value.name}
              img={value.image}
              position={value.position}
              linkedIn={value.linkedIn}
              email={value.email}
            />
          ))}
        </div>
      </div> */}
      <div className="about-footer">
        <Footer />
      </div>
    </div>
  );
}
