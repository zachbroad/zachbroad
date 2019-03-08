import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import './styles.sass'
import LogoImg from '../../../static/img/logo_transparent.png'

class Logo extends Component {
  render() {
    return (
      <Link to="/" className="navbar-item" title="Go home">
        <img src={LogoImg} alt=""/>
        {/*<h1 className="logo">Z</h1>*/}
      </Link>
    );
  }
}

Logo.propTypes = {};

export default Logo;
