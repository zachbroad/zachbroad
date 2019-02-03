import React, { Component } from "react";
import { Link } from "gatsby";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="content has-text-centered">
          <p>Copyright © 2019 Zach Broad</p>
          <Link to="/privacy">Privacy Policy</Link>
        </div>
      </footer>
    );
  }
}

export default Footer;