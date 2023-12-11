import React, { useState, useEffect } from "react";
import "./People.css";
import Topbar from "../Topbar/Topbar.js";
import Footer from "../Footer/Footer.js";
import { Secy, Head, Member, alums } from "./Data.js";
import Card from "./Card.js";
// import axios from "axios";   for strapi testing
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";

export default function People() {
  const [displayAlums, setDisplayAlums] = useState(false);
  /* Strapi testing code
  const [userData, setUserData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      let fetched_data = await axios
        .get("http://localhost:1337/api/members")
      console.log(fetched_data.data.data)
      setUserData(fetched_data.data.data)
    }
    fetchData()
  }, [])
  */
  const [year, setYear] = useState(4);
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
            className={"members-btn-year " + (year === 1 ? "active-year" : "")}
            onClick={() => setYear(1)}
          >
            1st Y
          </button>
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

          {/*  Strapi testing code
           {
            userData.map((person) => {
              return (
                <img src={person.attributes.Profile_link}/>
              )
            })
          } */}
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
      <div
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
            {displayAlums == false ? (
              <KeyboardArrowDown />
            ) : (
              <KeyboardArrowUp />
            )}
          </button>
        </button>
        <div
          className={`alums ${displayAlums == false ? "hide" : ""}`}
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
      </div>
      <div className="about-footer">
        <Footer />
      </div>
    </div>
  );
}
