import React from "react";
import { Link } from "react-router-dom";
import ResumeFile from "../../assets/Resume.pdf";

import "./Header.css";

export default function Header() {
  return (
    <div className={"header-container"}>
      <div className={"menu-links"}>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/resume">Resume</Link>
      </div>
      <div className={"icon-links"}>
        <a href={ResumeFile} download="Satrajit Chatterjee Resume.pdf">
          <i className={"fas fa-file-pdf fa-lg"}></i>
        </a>
        <a href="https://www.linkedin.com/in/satrajit-chatterjee" target="_blank" rel="noopener noreferrer">
          <i className={"fab fa-linkedin fa-lg"}></i>
        </a>
        <a href="https://github.com/satrajit-chatterjee" target="_blank" rel="noopener noreferrer">
          <i className={"fab fa-github fa-lg"}></i>
        </a>
        <a href="mailto:satrajitdchatterjee@gmail.com" target="_blank" rel="noopener noreferrer">
          <i className={"fas fa-envelope fa-lg"}></i>
        </a>
      </div>
    </div>
  );
}
