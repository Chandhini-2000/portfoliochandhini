import React, { useState } from 'react';
import { Row, Col, Container, Modal, Button } from 'react-bootstrap';
import './Home.css';

function Home() {
  // State to control the modal
  const [show, setShow] = useState(false);

  // Handlers to open and close the modal
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="home-section bg-transparent">
      <Container fluid className="vh-100 d-flex flex-column align-items-center justify-content-center">
        {/* Main Content Row */}
        <Row className="w-100 align-items-center mb-3" style={{ maxWidth: '1200px' }}>
          {/* Text Column */}
          <Col md={6} className="text-start p-3">
            <h6 className=" display-5 mb-3" style={{ whiteSpace: 'nowrap' }}>
              CHANDHINI M PRAKASH
            </h6>
            <p className="fs-5">
              I am a MERN stack developer intern at Luminar Technolab. I hold a Master of Computer 
              Applications (MCA) degree, which has honed my skills in web development and software engineering. 
              Passionate about building dynamic, user-friendly applications, I am committed to continuous learning 
              and collaboration to create impactful digital solutions.
            </p>
          </Col>

          {/* Image Column */}
          <Col md={6} className="text-center p-0">
          <img
  src="src/assets/sraee1.jpg"
  alt="Profile"
  className="img-fluid rounded"
  style={{ width: '400px', maxHeight: '400px', objectFit: 'cover' }}
/>

          </Col>
        </Row>

        {/* Button Row */}
        <Row className="mt-3">
          <Col className="text-center">
       
<button class="button" onClick={handleShow}>
  View More....
</button>
          </Col>
        </Row>

        {/* Modal */}
        <Modal className='bg-transparent' show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>About Me</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              I am a passionate MERN stack developer intern at Luminar Technolab, where I have been honing 
              my skills in building modern web applications. My technical background is supported by a 
              Master of Computer Applications (MCA) degree, which has provided me with a solid foundation 
              in web development, software engineering principles, and the latest industry tools and practices. 
              I have a deep interest in creating dynamic, interactive, and user-friendly applications, 
              focusing on delivering seamless digital experiences.
            </p>
            <p>
              Beyond my professional interests, I am an advocate of continuous learning and thrive in collaborative 
              environments where knowledge sharing is encouraged. I enjoy working with diverse teams and contributing 
              to projects that make a meaningful impact.
            </p>
            <p>
              When I’m not working on code, I like to immerse myself in creative hobbies, such as paper crafting and 
              stitching. These activities not only help me unwind but also enhance my attention to detail and 
              patience—qualities that translate well into my development work.
            </p>
            <h6>Paper Crafting:</h6>
            <p>
              I enjoy creating handmade greeting cards, origami, and decorative pieces. Crafting allows me to express 
              my artistic side, experiment with colors and shapes, and develop fine motor skills. It’s a process that 
              combines creativity with precision, much like programming.
            </p>
            <h6>Stitching:</h6>
            <p>
              I love stitching and embroidery, which teaches me the importance of planning, patience, and precision. 
              It’s a hobby that has sharpened my problem-solving skills, as I often have to find innovative ways to 
              correct mistakes or design intricate patterns.
            </p>
            <p>
              Whether it’s coding a new feature, folding paper into an intricate design, or stitching a beautiful pattern, 
              I am driven by the desire to create and improve. These activities reflect my passion for building things 
              from scratch, whether in the digital world or in creative arts.
            </p>
          </Modal.Body>
          <Modal.Footer>
        
<button id="btn" onClick={handleClose}>
    Close
</button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
}

export default Home;
