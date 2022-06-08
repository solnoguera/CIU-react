import React from "react";
import { Carousel } from "react-bootstrap";
import slider1 from "../../assets/ropa.jpg";
import slider2 from "../../assets/ropa_en_tienda.jpg";
import slider3 from "../../assets/percha.jpg";

export default function Slider() {
  return (
    <Carousel fade>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={slider1} alt="First slide" />
        <Carousel.Caption>
          <h3>FOXY!</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={slider2} alt="Second slide" />
        <Carousel.Caption>
          <h3>FOXY!</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={slider3} alt="Third slide" />
        <Carousel.Caption>
          <h3>FOXY!</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
