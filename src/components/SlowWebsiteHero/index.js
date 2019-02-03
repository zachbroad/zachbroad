import React, { Component } from "react";

class SlowWebsiteHero extends Component {
  render() {
    return (
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title has-text-white">Slow websites suck.</h1>
            <h2 className="subtitle has-text-white">
              It doesn't have to be that way.
            </h2>
            <p className="has-text-white">Did you know that <a className="has-text-weight-bold has-text-link"
                                                               href="https://www.marketingdive.com/news/google-53-of-mobile-users-abandon-sites-that-take-over-3-seconds-to-load/426070/">53%
              of users</a> will leave your site if it doesn't load in under three seconds?</p>
            <p>
              Don't let your website slow your business to a halt.
            </p>
          </div>
          <button className="button is-pulled-right">
            <a href="">Get started</a>
          </button>
        </div>
      </section>
    );
  }
}

export default SlowWebsiteHero;