import React, { Component } from "react";
import Zach from "../../img/me.jpeg";
import "./styles.sass";
import GatsbyImage from "gatsby-image";
import { graphql, StaticQuery } from "gatsby";

const AboutMe = () => (
  <div className="about-container">
    <div className="container" style={{ marginBottom: "2rem", textAlign: "center" }}>
      <StaticQuery query={graphql`
      query MyPicture {
        allFile(filter: {name: {eq:"me"}}) {
          edges {
            node {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
      `}
                   render={(d) => {
                     const fluidImage = d.allFile.edges[0].node.childImageSharp.fluid;
                     return (
                       <GatsbyImage
                         fluid={fluidImage}
                         className="image zach is-small is-centered is-vcentered"/>
                     );
                   }}
      />
      <div>
        <h1 className="title is-1">Zach Broad</h1>
        <h2 className="subtitle is-3">Orlando, FL</h2>

        <p>
          I am a freelance software developer with over ten years of experience
          doing just about anything you can imagine with computers.
        </p>
        <p>
          I specialize in web development, design, and digital marketing.
        </p>

        <a href="/portfolio">
          <button className="button is-link" style={{ marginTop: "1rem" }}>
            Check out my portfolio!
          </button>
        </a>
      </div>
    </div>
  </div>
);

export default AboutMe;