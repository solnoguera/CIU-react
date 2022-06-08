import React from "react";
import { Col, Row, Image } from "react-bootstrap";
import logo from "../../assets/Foxlogo.png";
import phone from "../../assets/phone.png";
import location from "../../assets/location.png";
import "./Footer.css";

export default function Footer() {
  return (
    <div>
      {
        <Row className="footer-container">
          <Col sm={6} className="col-img">
            <Image src={logo} width={400} fluid rounded></Image>
          </Col>

          <Col className="col-info">
            <h4>Contactanos</h4>
            <img src={location} alt="celular" width="30px" height="30px" />
            <span>Av. Pte. Perón 1320, San Miguel, Bs. As.</span>
            <br />
            <img src={phone} alt="celular" width="35px" height="35px" />
            <span>1132479932</span>
            <br />
            <img src={phone} alt="celular" width="35px" height="35px" />
            <span>4667-5050</span>
            <br />
            <img src={phone} alt="celular" width="35px" height="35px" />
            <span>4667-4700</span>
          </Col>
          <h5 className="rights">
            All Rights Reserved. © 2022 <span>FOXY!</span>
          </h5>
        </Row>
      }
    </div>
  );
}
