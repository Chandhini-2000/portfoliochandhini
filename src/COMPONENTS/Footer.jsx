import React from 'react';
import { Row, Col } from 'react-bootstrap'; // Import Col for layout
import './Footer.css';

function Footer() {
  return (
    <div className="footer-container bg-transparent">
      <Row className="justify-content-center">
        <Col md={6}> {/* Adjusted width for better centering */}
          <form className="contact-form bg-transparent">
            <h1 className="d-flex justify-content-center align-items-center my-4 py-3">
              CONTACT ME
            </h1>
            <input type="text" placeholder='First Name' className="form-input form-control mb-3 bg-transparent" />
            <input type="text" placeholder='Second Name' className="form-input form-control mb-3 bg-transparent" />
            <input type="text" placeholder='Subject' className="form-input form-control mb-3 bg-transparent" />
            <textarea placeholder='Message' className="form-input form-control mb-3 bg-transparent" rows="4" />
            <div className="text-center buttons">
              <button className="btn bg-transparent">Submit</button>
            </div>
          </form>
        </Col>
      </Row>
    </div>
  );
}

export default Footer;
