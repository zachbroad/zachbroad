import React, { Component } from "react";
import "./style.sass";
import { Link } from "gatsby";


const LearnMore = ({url}) => (
  <Link to={url}>
    <button className="button is-fullwidth">Learn more</button>
  </Link>
);

class Services extends Component {
  render() {
    return (
      <div id="services" className={"services content"}>
        <h1 className="title is-1">Services</h1>

        <div className="tile is-ancestor">
          <div className="tile is-vertical is-8">
            <div className="tile">
              <div className="tile is-parent is-vertical">
                <article className="tile is-child design-dev notification is-dark">
                  <p className="title">Web Design and Development</p>
                  <p className="subtitle"></p>
                  <div className="content">
                    I can do anything from basic WordPress sites to custom solutions
                    specifically designed for your business.
                  </div>
                  <LearnMore url="/design/"/>
                </article>
                <article className="tile is-child notification is-warning">
                  <p className="title">Content Management</p>
                  <div className="content">
                    <p>
                      I offer content production and management services for new and existing websites.
                    </p>
                    <p>
                      Keeping your website up-to-date with the freshest content in your
                      industry can be a lot of work.
                    </p>
                  </div>
                  <LearnMore url="/content/"/>
                </article>
              </div>
              <div className="tile is-parent is-vertical">
                <article className="tile is-child notification is-info">
                  <p className="title">Logo Design</p>
                  <p className="subtitle">
                    First impressions matter.
                  </p>
                  <div className="content">
                    Our highly skilled team of designers can help you prepare your brand
                    for its digital presence with a beautiful, eye-catching logo.
                  </div>
                  <LearnMore url="/logo/"/>
                </article>
                <article className="tile is-child notification is-dark">
                  <p className="title">Search Engine Optimization</p>
                  <p className="subtitle">Stand out among your competitors on Google</p>
                  <div className="content">
                    Search engine optimization
                  </div>
                  <LearnMore url="/logo/"/>
                </article>
              </div>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child notification is-success">
                <p className="title">Email Marketing</p>
                <p className="subtitle"></p>
                <div className="content">
                  <p>
                    If your business doesn't have a newsletter, you're missing out.
                  </p>
                  <p>
                    I can show you how to grow your email list, as well as the best
                    strategies for reaching out to existing customers.
                  </p>
                </div>
                <LearnMore url="/email/"/>
              </article>
            </div>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child notification is-brand">
              <div className="content">
                <p className="title">Taking your business to next level</p>
                <p className="subtitle">A solid online presence is essential in today's market.</p>
                <div className="content">
                  <p>
                    Let me help your business enter the digital world.
                  </p>
                  <p>
                    Transitioning your business to the online world can be daunting.
                    I can help you with the following
                  </p>
                  <ul>
                    <li>Yelp!</li>
                    <li>Google MyBusiness</li>
                    <li>Social Media</li>
                  </ul>
                </div>
              </div>
              <LearnMore url="/presence/"/>
            </article>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;