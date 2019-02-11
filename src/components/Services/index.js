import React, { Component } from 'react';
import './style.sass';
import { Link, StaticQuery } from 'gatsby';
import { ServiceList } from '../ServiceList';
import ContactForm from '../ContactForm';


const LearnMore = ({ url }) => (
  <Link to={url} className="card-footer-item">
    <button className="button is-fullwidth">Learn more</button>
  </Link>
);

export const Services = ({ data }) => {
  return (
    <div id="services" className="services content">
      <h1 className="title is-1 has-text-centered">Services</h1>

      <div className="services-container">
        <div>
          <p>
            I offer a wide variety of services to help your business succeed in the online world.
          </p>

          <blockquote>
            It's hard to keep up with the ever-changing digital world. Focus on your business &#45; let me handle your
            online presence.
          </blockquote>
        </div>
        <ServiceList/>
      </div>
    </div>
  );
};


export default Services;