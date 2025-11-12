import React from "react";
import "../styles/navbar.css";
export default function Navbar() {
  return (
    <nav className="navbar glassy-navbar">
      <div className="logo">Praveen</div>
      <ul>
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
