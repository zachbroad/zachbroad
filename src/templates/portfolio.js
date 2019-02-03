import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Content, { HTMLContent } from "../components/Content";
import Layout from "../components/Layout";

export const PortfolioTemplate = ({ data }) => {
  return (
    <div>
      <div className="card portfolio-item">
        <div className="card-header">
          <div className="card-header-title">
            {data.node.frontmatter.title}
          </div>
        </div>
        <div>
          <GatsbyImage fluid={data.node.frontmatter.image.childImageSharp.fluid}/>
        </div>
        <div className="card-content">
          <div className="description">
            {data.node.frontmatter.description}
          </div>
          <div className="visit-site">
            <a href={data.node.frontmatter.url}>
              <button className="button is-fullwidth">
                Visit site
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioTemplate;

const PortfolioObject = ({ data }) => {
  const { markdownRemark: obj } = data;

  return (
    <Layout>
      <PortfolioTemplate
        content={obj.html}
        contentComponent={HTMLContent}
        description={obj.frontmatter.description}
        helmet={
          <Helmet
            titleTemplate="%s | Portfolio"
          >
            <title>{`${obj.frontmatter.title}`}</title>
            <meta name="description" content={`${obj.frontmatter.description}`}/>
          </Helmet>
        }
        title={obj.frontmatter.title}
      />
    </Layout>
  );
};

PortfolioObject.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export const pageQuery = graphql`
  query PortfolioObjects {
    markdownRemark {
			id
			html
			frontmatter {
        title
        description
        url
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
			}
		}
  }
`;
