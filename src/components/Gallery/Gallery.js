import React, { useEffect } from "react";
import "./Gallery.css";
import Topbar from "../Topbar/Topbar";
import Footer from "../Footer/Footer";
import { Carousel } from 'react-carousel-minimal';
import {data} from "./Images.js";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Gallery() {
  AOS.init({duration:1000})
  useEffect(() => {
    window.scrollTo(0,0);
  }, []);
  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div className="gallery-container" >
        <div className="gallery-topbar">
            <Topbar />
        </div>
      <div data-aos="fade-up" data-aos-once="false" data-aos-easing="ease-in-out" style={{ textAlign: "center" }}>
        <div style={{
          padding: "0 20px"
        }}>
          <Carousel
            data={data}
            time={2000}
            width="850px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="transparent"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
      <div className="gallery-footer">
        <Footer />
      </div>
    </div>
  );
}
