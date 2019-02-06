import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { HTMLContent } from '../components/Content';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';

export const ServicePageTemplate = ({
                                      content,
                                      title,
                                      description,
                                    }) => {
  return (
    <section className="section">
      <div className="container content">
        <h1>
          {title}
        </h1>
        <p>
          {description}
        </p>
        <HTMLContent content={content}/>
      </div>
    </section>
  );
};

ServicePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  image: PropTypes.object,
};

const ServicePage = ({ data }) => {
  const { markdownRemark: obj } = data;

  return (
    <Layout>
      <ServicePageTemplate
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
      />
    </Layout>
  );
};

ServicePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};


export default ServicePage;

export const pageQuery = graphql`
  query ServiceQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
			html
			frontmatter {
        title
			}
		}
  }
`;
