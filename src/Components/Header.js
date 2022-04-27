import React from "react";
import logo from "../Assets/logo.png";

const Header = () => {
  return (
    <header className="header container">
      <img src={logo} alt="DOwn logo" className="logo" />
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#" className="nav__link nav__link-active">
              Home
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              FAQ
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Dating Advice
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              DOWN Wiki
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Careers
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
