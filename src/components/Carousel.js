import React, { useState } from "react";
import { Carousel, ResponsiveEmbed } from "react-bootstrap";
import SourceCode from "../styles/images/source_code.mp4";
import Office from "../styles/images/office.mp4";
import Laptop from "../styles/images/laptop.mp4";
import Keyboard from "../styles/images/keyboard.mp4";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <Carousel
        interval={5000}
        controls={false}
        slide={false}
        activeIndex={index}
        onSelect={handleSelect}
        className="car-wid mx-auto bg-blend"
      >
        <Carousel.Item>
          <ResponsiveEmbed aspectRatio="16by9">
            <video autoPlay={true} loop muted>
              <source type="video/mp4" src={SourceCode} />
            </video>
          </ResponsiveEmbed>
          <Carousel.Caption>
            <h3 className="animated rotateInUpRight">
              Banyan Labs brings your solution to life.
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ResponsiveEmbed aspectRatio="16by9">
            <video autoPlay={true} loop muted>
              <source type="video/mp4" src={Office} />
            </video>
          </ResponsiveEmbed>
          <Carousel.Caption>
            <h3 className="animated rotateInUpRight">
              Front- and Back-end development. Design
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ResponsiveEmbed aspectRatio="16by9">
            <video autoPlay={true} loop muted>
              <source type="video/mp4" src={Laptop} />
            </video>
          </ResponsiveEmbed>
          <Carousel.Caption>
            <h3 className="animated rotateInUpRight">
              Say what we do. Do what we say.
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ResponsiveEmbed aspectRatio="16by9">
            <video autoPlay={true} loop muted>
              <source type="video/mp4" src={Keyboard} />
            </video>
          </ResponsiveEmbed>
          <Carousel.Caption>
            <h3 className="animated rotateInUpRight">
              Let us help you make your best impression online.
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ControlledCarousel;
