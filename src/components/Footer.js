import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Milka Fasika</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} MF</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            
            <li className="social-icons">
              <a
                href="https://twitter.co"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            
            <li className="social-icons">
              <a
                href="https://www.instagram.com/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>

            <li>
    <a
      href="https://www.facebook.com"
      style={{ color: "white" }}
      target="_blank"
      rel="noopener noreferrer"
    >
      <AiFillFacebook />
    </a>
  </li>
  </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
