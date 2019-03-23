import React, { Component } from "react";
import "./styles.sass";
import { graphql, StaticQuery, Link } from "gatsby";
import Zach from '../Zach';


const AboutMe = () => (
  <div className="about-container">
    <div className="container is-fluid" style={{ marginBottom: "2rem", textAlign: "center" }}>
      <div>
        <Zach />
        <h1 className="title is-1">Zach Broad</h1>
        <h2 className="subtitle is-3">Orlando, FL</h2>

        <div className="about-content">
          <p>
            I am a freelance software developer with over ten years of experience
            doing just about anything you can imagine with computers.
          </p>
          <p>
            I specialize in web development, design, and digital marketing.
            Let me help bring your business to the next level.
          </p>
        </div>

        <div className="about-container-buttons">
          <Link to="/portfolio">
            <button className="button is-light" style={{ marginTop: "1rem" }}>
              Check out my portfolio!
            </button>
          </Link>

          <Link to="/contact">
            <button className="button is-brand" style={{ marginTop: "1rem" }}>
              Let's get in touch
            </button>
          </Link>
        </div>

      </div>
    </div>
  </div>
);

export default AboutMe;