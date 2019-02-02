
import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Content, { HTMLContent } from '../components/Content'
import Layout from '../components/Layout'

export const PortfolioTemplate = ({data}) => {
	return (
		<div>
		<h1>Portfolio Heading</h1>
		</div>
	)
}

export default PortfolioTemplate

const PortfolioObject = ({data}) => {
	const { markdownRemark: obj } = data

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
            <meta name="description" content={`${obj.frontmatter.description}`} />
          </Helmet>
        }
        title={obj.frontmatter.title}
      />
    </Layout>
  )
}

PortfolioObject.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export const pageQuery = graphql`
  query PortfolioObjects {
    markdownRemark {
			id
			frontmatter {
				title
			}
		}
  }
`
