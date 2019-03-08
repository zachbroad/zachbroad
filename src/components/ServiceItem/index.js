import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import './styles.sass';
import { FaCode } from 'react-icons/fa';

export const ServiceItem = ({ data }) => (
  <div className="service-container">
    <div className="service-header">
      <div className="service-header-bar">
        <i className={'fas fa-3x ' + data.frontmatter.icon}/>
        <Link to={data.frontmatter.path} className="is-4">
          <h2 className="service-title is-inline">{data.frontmatter.title}</h2>
        </Link>
      </div>
    </div>
    <div className="service-body">
      <p className="sub">{data.frontmatter.description}</p>
      <Link to={data.frontmatter.path} style={{marginTop: 'auto'}}>
        <button className="button">Learn more</button>
      </Link>
    </div>
  </div>
);

ServiceItem.propTypes = {
  data: PropTypes.object,
};

export default ServiceItem;
