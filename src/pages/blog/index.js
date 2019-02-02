import React, { Component } from "react";
import Layout from "../../components/Layout";

class BlogIndex extends Component {
  render() {
    return (
      <Layout>
        <div className="container">
          <div className="content">
            <h1>Blog index</h1>
            <p>Welcome to my blog!</p>
          </div>
        </div>
      </Layout>
    );
  }
}

export default BlogIndex;