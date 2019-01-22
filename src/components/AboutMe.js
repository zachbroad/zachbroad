import React, { Component } from "react";
import Zach from "../img/me.jpeg";
import GatsbyImage from "gatsby-image";

class AboutMe extends Component {
  render() {
    return (
      <div className="container" style={{ marginBottom: "2rem", textAlign: "center" }}>
        <img
          src={Zach}
          alt=""
          className="image is-128x128 is-small is-centered is-vcentered"
          style={{
            borderRadius: 64,
            marginRight: "auto",
            marginLeft: "auto",
            marginTop: "2rem",
            marginBottom: "2rem"
          }}/>
        <div>
          <h1 className="title is-1">Zach Broad</h1>
          <h2 className="subtitle is-3">Orlando, FL</h2>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium ad dolore enim et expedita
            fugiat hic in, inventore iusto magnam magni nemo numquam quisquam quo quod ratione recusandae tempora.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad architecto delectus dolorum earum et eum
            impedit incidunt libero minus mollitia, numquam obcaecati possimus quam quasi repudiandae totam vero
            vitae. Commodi!
          </div>

          <a href="/portfolio">
            <button className="button is-link" style={{ marginTop: "1rem" }}>
              Check out my portfolio!
            </button>
          </a>

          <div className="is-clearfix"/>
        </div>
      </div>
    );
  }
}

export default AboutMe;