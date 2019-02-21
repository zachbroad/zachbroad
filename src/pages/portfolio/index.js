import React, { Component } from 'react';
import Layout from '../../components/Layout';
import Portfolio from '../../components/Portfolio';
import { Helmet } from 'react-helmet';

export default class Index extends Component {
  render() {
    return (
      <Layout>
        <Helmet
          titleTemplate="%s"
        >
          <title>My Portfolio | Zach Broad - Alafaya, FL Websites</title>
          <meta name="description" content={`Check out portfolio and see some of the work I've done for past clients`}/>
        </Helmet>
        <section className="section section--gradient">
          <div className="container">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <h2 className="title is-size-3 has-text-weight-bold is-bold-light">My Portfolio</h2>
                <p>This is a list of the work I have done for clients.</p>
                <Portfolio/>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}


