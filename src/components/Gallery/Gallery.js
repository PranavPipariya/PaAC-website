import React, { useRef, useLayoutEffect } from "react";
import "./Gallery.css";
// import Topbar from "../Topbar/Topbar";
// import Footer from "../Footer/Footer";
// import { data } from "./Images.js";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Gallery() {
  const comp = useRef();
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let sections = gsap.utils.toArray(".panel");
      gsap.to(
        sections,
        {
          xPercent: -100 * (sections.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: ".gallery-body",
            pin: true,
            scrub: 1,
            snap: 1 / (sections.length - 1),
            markers: true, // remove later
            end: "+=3500",
          },
        },
        []
      );
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <div className="gallery-container" ref={comp}>
      {/* <div className="gallery-topbar">
        <Topbar />
      </div> */}
      <div className="gallery-body">
        <div className="panel a">
          <div className="panel-content">
            <h1>PaAC at udaipur</h1>
            <p>kya matlab ham sote hi nhi</p>
          </div>
        </div>
        <div className="panel b">
        <div className="panel-content">
            <h1>PaAC at udaipur</h1>
            <p>kya matlab ham sote hi nhi</p>
          </div>
        </div>
        <div className="panel c">
        <div className="panel-content">
            <h1>PaAC at udaipur</h1>
            <p>kya matlab ham sote hi nhi</p>
          </div>
        </div>
        <div className="panel d">
        <div className="panel-content">
            <h1>PaAC at udaipur</h1>
            <p>kya matlab ham sote hi nhi</p>
          </div>
        </div>
        <div className="panel e">
        <div className="panel-content">
            <h1>PaAC at udaipur</h1>
            <p>kya matlab ham sote hi nhi</p>
          </div>
        </div>
        <div className="panel f">
        <div className="panel-content">
            <h1>PaAC at udaipur</h1>
            <p>kya matlab ham sote hi nhi</p>
          </div>
        </div>
      </div>

      {/* <div className="gallery-footer">
        <Footer />
      </div> */}
    </div>
  );
}
