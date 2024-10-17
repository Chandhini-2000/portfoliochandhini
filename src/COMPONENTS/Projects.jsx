import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import './Projects.css'; // Import the CSS file for hover effect styling

function Projects() {
  return (
    <div>
      <Row>
        <h1 className="d-flex justify-content-center align-items-center my-4 py-3">
          PROJECTS
        </h1>
        <Col md={4}>
          <div className="card-container">
            <Card className="project-card" style={{ width: '19rem', height: '450px' }}> {/* Increased height */}
              <Card.Img
                variant="top"
                className="m-0" // Remove extra margins for better alignment
                src="https://res.cloudinary.com/enchanting/q_70,f_auto,w_1440,h_810,c_fill,g_face/enchanting-web/2023/09/sudindien-rundreise-die-schonsten-unternehmungen.jpg"
                style={{ objectFit: 'cover', height: '450px' }} // Set image height to match card height
              />
              <div className="card-overlay" style={{ height: '100%' }}> {/* Ensure overlay covers full card height */}
          <h5>TRAVEL BLOG</h5>
          <h6>A basic site which shows the travel blog developed using html css applying cards,modal video favicon and font awesome 
            also use uiverse components
          </h6>
                <a
                  href="https://dashing-mousse-e13c82.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer" // Security feature for links
                  className="live-link text-decoration-none"
                >
                Live Link
                </a>
              </div>
            </Card>
          </div>
        </Col>

        <Col md={4}>
          <div className="card-container">
            <Card className="project-card" style={{ width: '19rem', height: '450px' }}> {/* Increased height */}
              <Card.Img
                variant="top"
                className="m-0" // Remove extra margins for better alignment
                src="https://cdn.pixabay.com/photo/2015/09/04/23/29/minimal-923194_640.jpg"
                style={{ objectFit: 'cover', height: '450px' }} // Set image height to match card height
              />
              <div className="card-overlay" style={{ height: '100%' }}> {/* Ensure overlay covers full card height */}
          <h5>FURNITURE</h5>
          <h6>A basic furniture site created using html and css applying cards ,modals,video,favicon and fontawesome .Also implement 
            components from uiverse.io
          </h6>
                <a
                  href="https://furnituresite000.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer" // Security feature for links
                  className="live-link text-decoration-none"
                >
                Live Link
                </a>
              </div>
            </Card>
          </div>
        </Col>

        <Col md={4}>
          <div className="card-container">
            <Card className="project-card" style={{ width: '19rem', height: '450px' }}> {/* Increased height */}
              <Card.Img
                variant="top"
                className="m-0" // Remove extra margins for better alignment
                src="https://cdn.pixabay.com/photo/2015/02/13/21/24/finance-635805_640.jpg"
                style={{ objectFit: 'cover', height: '450px' }} // Set image height to match card height
              />
              <div className="card-overlay" style={{ height: '100%' }}> {/* Ensure overlay covers full card height */}
          <h5>CALCULATOR</h5>
          <h6>A simple calculator with basic arithmetic operation designed using html,css,bootstrap and logic implemented using 
            javascript.
          </h6>
                <a
                  href="https://furnituresite000.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer" // Security feature for links
                  className="live-link text-decoration-none"
                >
                Live Link
                </a>
              </div>
            </Card>
          </div>
        </Col>
      </Row>

      





      <Row className='mt-5'>
        <h1></h1>
        <Col md={4}>
          <div className="card-container">
            <Card className="project-card" style={{ width: '19rem', height: '450px' }}> {/* Increased height */}
              <Card.Img
                variant="top"
                className="m-0" // Remove extra margins for better alignment
                src="https://cdn.pixabay.com/photo/2016/08/15/17/38/piggy-bank-1595992_1280.jpg"
                style={{ objectFit: 'cover', height: '450px' }} // Set image height to match card height
              />
              <div className="card-overlay" style={{ height: '100%' }}> {/* Ensure overlay covers full card height */}
          <h5>BANK APP</h5>
          <h6>A simple site for performing basic banking operations such as money deposit and withdrawal.
          </h6>
                <a
                  href="https://chandhini-2000.github.io/Bank-App/"
                  target="_blank"
                  rel="noopener noreferrer" // Security feature for links
                  className="live-link text-decoration-none"
                >
                Live Link
                </a>
              </div>
            </Card>
          </div>
        </Col>

        <Col md={4}>
          <div className="card-container">
            <Card className="project-card" style={{ width: '19rem', height: '450px' }}> {/* Increased height */}
              <Card.Img
                variant="top"
                className="m-0" // Remove extra margins for better alignment
                src="https://cdn.pixabay.com/photo/2017/05/09/15/17/money-2298511_640.jpg"
                style={{ objectFit: 'cover', height: '450px' }} // Set image height to match card height
              />
              <div className="card-overlay" style={{ height: '100%' }}> {/* Ensure overlay covers full card height */}
          <h5>BUDGET CALCULATOR</h5>
          <h6>The development of the budget calculator help us to get an idea about our income and expenses.
          </h6>
                <a
                  href="https://famous-parfait-153aa0.netlify.app/login.html"
                  target="_blank"
                  rel="noopener noreferrer" // Security feature for links
                  className="live-link text-decoration-none"
                >
                Live Link
                </a>
              </div>
            </Card>
          </div>
        </Col>

        <Col md={4}>
          <div className="card-container">
            <Card className="project-card" style={{ width: '19rem', height: '450px' }}> {/* Increased height */}
              <Card.Img
                variant="top"
                className="m-0" // Remove extra margins for better alignment
                src="https://cdn.pixabay.com/photo/2020/06/01/13/02/mountains-5246545_640.jpg"
                style={{ objectFit: 'cover', height: '450px' }} // Set image height to match card height
              />
              <div className="card-overlay" style={{ height: '100%' }}> {/* Ensure overlay covers full card height */}
          <h5>WEATHER APP</h5>
          <h6>Created using react which helps to fetch the weather of the area which we give
            in the input box using API fetching in react.
          </h6>
                <a
                  href="https://chandhiniweatherapp.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer" // Security feature for links
                  className="live-link text-decoration-none"
                >
                Live Link
                </a>
              </div>
            </Card>
          </div>
        </Col>
      </Row><br />
    <hr />

     
    </div>
    
  );
}

export default Projects;
