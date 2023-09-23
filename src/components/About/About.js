import React, { useRef } from "react";
import "./About.css";
import Topbar from "../Topbar/Topbar";
// import Footer from "../Footer/Footer";
// import { Secy, Head, Member } from "./Data.js";
// import Card from "./Card";
import Spline from "@splinetool/react-spline";

export default function About() {
  const model = useRef(null);
  function onLoad(spline) {
    const obj = spline.findObjectByName("einstein");
    model.current = obj;
  }

  // const [year, setYear] = useState(4);
  return (
    <div className="about-container">
      <div className="about-topbar">
        <Topbar />
      </div>
      <div className="about-parent">
        <div className="about-text">
          <div className="about-panel">
            <div className="spline-text">
              <div className="about-spline">
                <Spline
                  scene="https://prod.spline.design/p5QUEugrUKi3Nm20/scene.splinecode"
                  onLoad={onLoad}
                />
              </div>
              <h1>Physics and Astronomy Outreach Events</h1>
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
              harum natus cum quia necessitatibus alias magni, assumenda
              distinctio earum unde atque magnam obcaecati delectus laborum
              voluptatibus officia! Tempora, neque deleniti!
            </p>
          </div>
          <div className="about-panel">
            <h1>Stargazing sessions and Astrophotography</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
              harum natus cum quia necessitatibus alias magni, assumenda
              distinctio earum unde atque magnam obcaecati delectus laborum
              voluptatibus officia! Tempora, neque deleniti!
            </p>
          </div>
          <div className="about-panel">
            <h1>Journal club discussions</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
              harum natus cum quia necessitatibus alias magni, assumenda
              distinctio earum unde atque magnam obcaecati delectus laborum
              voluptatibus officia! Tempora, neque deleniti!
            </p>
          </div>
        </div>
      </div>

      <div className="members">
        {/* <div className="members-secys" data-aos="fade-up" data-aos-once="false" data-aos-easing="ease-in-out">
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
                </div> */}
      </div>
      {/* <div className="about-footer">
        <Footer />
      </div> */}
    </div>
  );
}
