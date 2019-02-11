import React, { Component } from 'react';
import './style.sass';
import { Link, StaticQuery } from 'gatsby';
import { ServiceList } from '../ServiceList';


const LearnMore = ({ url }) => (
  <Link to={url} className="card-footer-item">
    <button className="button is-fullwidth">Learn more</button>
  </Link>
);
export const Services = ({ data }) => {
  return (
    <div id="services" className="services content">
      <h1 className="title is-1 has-text-centered">Services</h1>
      <p className="has-text-centered">
        I offer a wide variety of services to help your business succeed in the online world.
      </p>

      <div className="services-container">
        <div>
          <p>
            It's hard to keep up with the ever-changing digital world. Focus on your business &#45; let me handle your
            online presence.
          </p>
          <p>
            Don't wait.
          </p>

          <blockquote>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aut culpa dolorem et eveniet facere, in iure
            necessitatibus neque nostrum perspiciatis praesentium quae, quasi qui quidem quod sapiente sint voluptas!
          </blockquote>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto asperiores beatae delectus deserunt
            distinctio dolores eos eveniet exercitationem laboriosam libero molestias officiis optio praesentium, quam
            rem similique suscipit tempora voluptates.
          </p>
        </div>
        <ServiceList/>
      </div>
    </div>
  );
};


export default Services;