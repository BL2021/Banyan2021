import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import BackgroundImage from "../styles/images/aboutBackground.jpg";
import "../pages/About/about.css";

function Carousel2() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      className="car-wid mx-auto"
      controls={false}
      indicators={false}
    >
      <Carousel.Item>
        <img
          className="d-block c-image w-100"
          src={BackgroundImage}
          alt="First slide"
        />
        <Carousel.Caption className="carousel-caption">
          <h1 style={{ color: "#1b723f" }} className="display-3">
            About Us
          </h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousel2;
