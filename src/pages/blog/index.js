import React, { Component } from 'react';
import Layout from '../../components/Layout';
import BlogFeed from '../../components/BlogFeed';
import { graphql } from 'gatsby';

class BlogIndex extends Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <Layout>

        <div className="container is-fluid section">
          <h1>My Blog</h1>
          <p>
            This is where I post helpful information on web development, SEO, affiliate marketing,
            and other digital marketing strategies to grow your business.
          </p>
          <BlogFeed posts={posts}/>
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
          description
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
}
`;

export default BlogIndex;