import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import './styles.sass';

export const ServiceItem = ({ data }) => (
  <div className="service-container">
    <div className="service-header">
      <Link to={data.frontmatter.path} className="title is-4">
        <h2 className="service-title">{data.frontmatter.title}</h2>
      </Link>
      <h4 className="sub">{data.frontmatter.description}</h4>
    </div>
    <div className="service-body">
      {/*<Link to={data.frontmatter.path}>*/}
        {/*<button className="button is-fullwidth">Learn more</button>*/}
      {/*</Link>*/}
    </div>
  </div>
);

ServiceItem.propTypes = {
  data: PropTypes.object,
};

export default ServiceItem;
