import React, { Component } from 'react';
import './styles.sass';
import { Link } from 'gatsby';

class SlowWebsiteHero extends Component {
  render() {
    return (
      <section className="hero slow-websites">
        <div className="container content">
          <h1 className="title is-1">Slow websites suck.</h1>
          <h2 className="subtitle is-4 has-text-weight-light">
            It doesn't have to be that way.
          </h2>
          <p className="">
            Did you know that
            <a className="has-text-weight-bold"
               href="https://www.marketingdive.com/news/google-53-of-mobile-users-abandon-sites-that-take-over-3-seconds-to-load/426070/"> 53%
              of users </a>
            will leave your site if it doesn't load in under three seconds?
          </p>
          <p>
            Every second matters. Don't let a slow website bring your business to a halt.
          </p>
          <Link to="/services/design/">
            <button className="button is-light">
              Learn more
            </button>
          </Link>
        </div>
      </section>
    );
  }
}

export default SlowWebsiteHero;