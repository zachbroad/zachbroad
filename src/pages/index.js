import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import phone from "../img/phone.jpg";
import AboutMe from "../components/AboutMe";

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <Layout>
        <section className="section">
          <AboutMe/>
          <div className="container">
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
                </div>
                <button className="button is-pulled-right">
                  <a href="">Get started</a>
                </button>
              </div>
            </section>
            <section>
              <div className="container" style={{ backgroundImage: phone.url }}>
                {/*<img src={phone} alt="Guy on phone"/>*/}
                <div className="container is-overlay">
                  <h1>We live in a mobile world</h1>
                  <p>Your business should too.</p>
                </div>
              </div>
            </section>
            <div className="content">
              <h1 className="has-text-weight-bold is-size-2">Latest Stories</h1>
            </div>
            {posts
              .map(({ node: post }) => (
                <div
                  className="content"
                  style={{ border: "1px solid #333", padding: "2em 4em" }}
                  key={post.id}
                >
                  <p>
                    <Link className="has-text-primary" to={post.fields.slug}>
                      {post.frontmatter.title}
                    </Link>
                    <span> &bull; </span>
                    <small>{post.frontmatter.date}</small>
                  </p>
                  <p>
                    {post.excerpt}
                    <br/>
                    <br/>
                    <Link className="button is-small" to={post.fields.slug}>
                      Keep Reading →
                    </Link>
                  </p>
                </div>
              ))}
          </div>
        </section>
      </Layout>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query IndexQuery {
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
