import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import './styles.sass'


class Logo extends Component {
  render() {
    return (
      <Link to="/" className="navbar-item" title="Go home">
        <h1 className="logo">Z</h1>
      </Link>
    );
  }
}

Logo.propTypes = {};

export default Logo;
