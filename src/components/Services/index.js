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
      <ServiceList/>
    </div>
  );
};


export default Services;