import React, { Component } from "react";
import Layout from "../../components/Layout";
import BlogFeed from "../../components/BlogFeed";
import { graphql } from "gatsby";

class BlogIndex extends Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <Layout>
        <div className="container">
          <div className="content">
            <h1>Blog index</h1>
            <p>Welcome to my blog!</p>
            <BlogFeed posts={posts}/>
          </div>
        </div>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
query BlogIndexQuery {
  allMarkdownRemark(
    sort: { order: DESC, fields: [frontmatter___date] },
    filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
  ) {
    edges {
      node {
        excerpt(pruneLength: 400)
        id
        fields {
          slug
        }
        frontmatter {
          title
          templateKey
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
}
`;

export default BlogIndex;