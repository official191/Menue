import React from 'react';
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import './contact-form.style.css';
const Contact= () => {
  return (
    <div id="contact">
      <h1 className="pt-3 text-center font-details-b pb-3">CONTACT US</h1>
      <Jumbotron className="contact-jumbotron">
        <Row>
          <Col className="d-flex justify-content-center flex-wrap">
            {/* buttons */}
            <div className="m-2">
              <a href="mailto:vibhor.formal@gmail.com" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-danger" title="vibhor.formal@gmail.com">
                  <i className="fas fa-envelope-square"></i> Email Us
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="https://www.facebook.com/vibhu.singh.14811" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-primary" title="Say hello on FB">
                  <i className="fab fa-facebook-square"></i> FaceBook
                </Button>
              </a>
            </div>
          </Col>
        </Row>
      </Jumbotron>
    </div>
  );
}

export default Contact;
