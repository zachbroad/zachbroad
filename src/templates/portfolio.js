import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { HTMLContent } from '../components/Content';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import GatsbyImage from 'gatsby-image';

export const PortfolioPageTemplate = ({
                                    content,
                                    title,
                                    description,
                                    url,
                                    image,
                                  }) => {
  return (
    <section className="section">
      <div className="container content">
        <h1>
          {title}
        </h1>
        <div>
          <GatsbyImage fluid={image} style={{
            maxWidth: 300,
            maxHeight: 300,
          }}/>
        </div>
        <p>
          {description}
        </p>
      </div>
    </section>
  );
};

PortfolioPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  image: PropTypes.object,
}

const PortfolioPage = ({ data }) => {
  const { markdownRemark: obj } = data;

  return (
    <Layout>
      <PortfolioPageTemplate
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

PortfolioPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};


export default PortfolioPage;

export const pageQuery = graphql`
  query PortfolioObjects($id: String!) {
    markdownRemark(id: { eq: $id }) {
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

