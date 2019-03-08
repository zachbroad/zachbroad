import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import AboutMe from '../components/AboutMe/';
import SlowWebsiteHero from '../components/SlowWebsiteHero';
import Services from '../components/Services';
import ContactForm from '../components/ContactForm';
import BlogFeed from '../components/BlogFeed';

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <Layout>
        <AboutMe/>
        <SlowWebsiteHero/>

        <div className="container">
          <Services/>
        </div>

        <div className="blog-feed" style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>
          <div className="container section blog-feed">
            <BlogFeed posts={posts}/>
          </div>
        </div>


        <div className="contact-form-container">
          <div className="container">
            <div className="contact-form">
              <div className="card">
                <div className="card-content">
                  <h1 className="title is-2 has-text-centered">Let's get in touch</h1>
                  <p className="has-text-centered">
                    I offer free in-person consultations to those
                    in the local Orlando area.
                  </p>
                  <ContactForm/>
                </div>
              </div>
            </div>
          </div>
        </div>

      </Layout>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
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
            description
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
