import React from "react";
import { StaticQuery, graphql } from "gatsby";
import PortfolioItem from "../PortfolioItem";


export const Portfolio = () => {
  return (
    <StaticQuery query={graphql`
			query Portfolio {
      allMarkdownRemark(filter: {frontmatter: {templateKey:{eq:"portfolio"}}}){
          edges{
            node{
              html
              frontmatter {
                title
                description
                url
                path
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
        }
			}
		`}
                 render={(data) => {
                   console.dir(data);
                   const { edges: items } = data.allMarkdownRemark;

                   const portfolioItems = items.map((item, index) => (
                     <PortfolioItem data={item} key={index}/>
                   ));
                   return (
                     <div className="section columns">
                       {portfolioItems}
                     </div>
                   );
                 }
                 }/>
  );
};

export default Portfolio;