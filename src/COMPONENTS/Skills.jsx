import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './Skills.css'; // Import the CSS file for styling

function Skills() {
  const skills = [
    { name: 'HTML', percent: 95, color: '#4caf50' },
    { name: 'CSS', percent: 95, color: '#2196f3' },
    { name: 'Tailwind', percent: 80, color: '#ff80ab' },
    { name: 'JavaScript', percent: 80, color: '#ffeb3b' },
    { name: 'React', percent: 40, color: '#f44336' },
    { name: 'C++', percent: 85, color: '#ff9800' },
  ];

  return (
    <div>
      <Row>
      <h1 className="d-flex justify-content-center align-items-center my-4 py-3">
  SKILLS
</h1>

        <div className="skills-container">
          {skills.map(skill => (
            <Col key={skill.name} className="skill">
              <div
                className="circle"
                style={{
                  background: `conic-gradient(${skill.color} ${skill.percent}%, #e0e0e0 ${skill.percent}%)`
                }}
              >
                <span>{skill.percent}%</span>
              </div>
              <p>{skill.name}</p>
            </Col>
          ))}
        </div>
    
      </Row>
      <hr></hr>

    </div>
  );
}

export default Skills;
