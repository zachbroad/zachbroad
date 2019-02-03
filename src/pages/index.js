import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import phone from "../img/phone.jpg";
import AboutMe from "../components/AboutMe/";
import SlowWebsiteHero from "../components/SlowWebsiteHero";
import BlogFeed from "../components/BlogFeed";
import MobileWorld from "../components/MobileWorld";
import Services from "../components/Services";
import ContactForm from "../components/ContactForm";

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


        <div className="container contact-form">
          <div className="card">
            <div className="card-content">
              <ContactForm/>
            </div>
          </div>
        </div>

        <div className="container">
          <BlogFeed posts={posts}/>
        </div>
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
