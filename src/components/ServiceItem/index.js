import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import './styles.sass';

export const ServiceItem = ({ data }) => (
  <div className="service-container">
    <div className="service-header">
      <Link to={data.frontmatter.path} className="title is-4">
        <h3 className="">{data.frontmatter.title}</h3>
      </Link>
      <p className="subtitle">{data.frontmatter.description}</p>
    </div>
    <div className="service-body">
      <Link to={data.frontmatter.path}>
        <button className="button is-fullwidth">Learn more</button>
      </Link>
    </div>
  </div>
);

ServiceItem.propTypes = {
  data: PropTypes.object,
};

export default ServiceItem;
