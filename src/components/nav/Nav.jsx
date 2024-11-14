import React, { useEffect, useState } from "react";
import "./nav.css";
import Logo from "../../assets/nav-logo.png";
import Menu from "../../assets/menu-icon.png";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ============= END OF ONSCROLL ===============

  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  // ============= END OF ONCLICK ===============

  return (
    <nav id="nav">
      <div
        className={`container nav__content ${
          scrolled ? "navbar-scrolled" : ""
        }`}
      >
        <img src={Logo} alt="company logo" className="logo" />

        <ul className={`nav__links ${isActive ? "" : "nav__links-hidden"}`}>
          <li>
            <a href="#header">Home</a>
          </li>
          <li>
            <a href="#offerings">Porgram</a>
          </li>
          <li>
            <a href="#about">About us</a>
          </li>
          <li>
            <a href="#gallery">Campus</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
          <li>
            <a href="#contact" className="btn">
              Contact us
            </a>
          </li>
        </ul>
        <img
          src={Menu}
          alt="menu"
          className="nav__icon"
          onClick={handleClick}
        />
      </div>
    </nav>
  );
};

export default Nav;
