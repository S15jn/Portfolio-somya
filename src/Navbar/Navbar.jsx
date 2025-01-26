import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import Home from '../Home/Home';
import Contact from '../Contact/Contact';
import About from '../About/About';
import Skill from '../skill/skill';
import Project from '../Projects.jsx/Project';
import Certificateroot from '../Certificate/Certificateroot';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="Navbar bg-transparent">
      <nav className="nav-container">
        
        <div className="hamburger" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

    
        <ul className={`nav-items ${isOpen ? 'show' : ''}`}>
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="active"
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="skill"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="active"
              onClick={closeMenu}
            >
              Skill
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="active"
              onClick={closeMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="project"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="active"
              onClick={closeMenu}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="certificate"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="active"
              onClick={closeMenu}
            >
              Certificates
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="active"
              onClick={closeMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Sections */}
      <div id="home">
        <Home />
      </div>
      <div id="skill">
        <Skill />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="project">
        <Project />
      </div>
      <div id="certificate">
        <Certificateroot />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}
