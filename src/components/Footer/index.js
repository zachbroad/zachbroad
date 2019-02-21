import React, { Component } from 'react';
import { Link } from 'gatsby';
import './styles.sass'

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="content has-text-centered">
          <p>Copyright © 2019 Zach Broad</p>

          <div className="footer-links">
            <Link to="/contact">Contact Me</Link>
            <Link to="/privacy">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;