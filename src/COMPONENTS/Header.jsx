// Header.js
import React, { useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { BsFillSunFill, BsMoonStarsFill } from 'react-icons/bs'; // Sun and Moon Icons
import './Header.css'; // Import CSS for custom spacing

function Header() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.style.backgroundColor = darkMode ? '#fff' : '#333';
  };

  return (
    <Navbar bg={darkMode ? 'dark' : 'light'} expand="lg" className="shadow-sm header-navbar">
      <Container fluid>
        <Navbar.Brand href="#" className="fs-4 ">
           PORTFOLIO
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
        <Nav className="ms-auto nav-links">
            <Nav.Link href="#home" className="px-2">Home</Nav.Link>
            <Nav.Link href="#about" className="px-2">About</Nav.Link>
            <Nav.Link href="#skills" className="px-2">Skills</Nav.Link>
            <Nav.Link href="#projects" className="px-2">Works</Nav.Link>
            <Nav.Link href="#contact" className="px-2">Contact</Nav.Link>
          </Nav>
          <Button
            variant="outline-secondary"
            onClick={toggleTheme}
            className="theme-toggle-button ms-3"
          >
            {darkMode ? <BsFillSunFill /> : <BsMoonStarsFill />}
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
