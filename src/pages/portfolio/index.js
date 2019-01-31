import React, { Component } from "react";
import Layout from "../../components/Layout";
import Portfolio from '../../components/Portfolio'

export default class Index extends Component {
  render() {
    return (
      <Layout>
        <div className="container">
          <h1 className="title is-1">My Portfolio</h1>
          <p>This is a list of the work I have done for clients.</p>
					<Portfolio />
        </div>
      </Layout>
    );
  }
}


