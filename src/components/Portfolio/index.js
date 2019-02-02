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

              }
            }
          }
        }
			}
		`}
                 render={(data) => {
                   console.dir(data);
                   const { edges: items } = data.allMarkdownRemark;

                   const portfolioItems = items.map(item => (
                     <PortfolioItem data={item} key={item.id}/>
                   ));
                   return (
                     <div className="section">
                       {portfolioItems}
                     </div>
                   );
                 }
                 }/>
  );
};

export default Portfolio;