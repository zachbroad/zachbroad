import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Content, { HTMLContent } from "../components/Content";
import Layout from "../components/Layout";
import GatsbyImage from "gatsby-image";

export const PortfolioTemplate = ({
                                    content,
                                    title,
                                    description,
                                    url,
                                    image
                                  }) => {
  return (
    <div>
      <div className="card portfolio-item">
        <div className="card-header">
          <div className="card-header-title">
            {title}
          </div>
        </div>
        <div className="card-content">
          <div className="description">
            {description}
          </div>
        </div>
        <footer className="card-footer">
          <a href={url} className="card-footer-item">Visit Site</a>
          <a href="#" className="card-footer-item">More info</a>
        </footer>
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
        helmet={
          <Helmet
            titleTemplate="%s | Portfolio"
          >
            <title>{`${obj.frontmatter.title}`}</title>
            <meta name="description" content={`${obj.frontmatter.description}`}/>
          </Helmet>
        }
        title={obj.frontmatter.title}
        description={obj.frontmatter.description}
        url={obj.frontmatter.url}
        image={obj.frontmatter.image.childImageSharp.fluid}
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
