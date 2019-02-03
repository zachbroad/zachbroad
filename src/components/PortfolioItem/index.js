import React from "react";
import { Link } from "gatsby";
import "./style.sass";
import GatsbyImage from "gatsby-image";

export const PortfolioItem = ({ data }) => {
  return (
    <div className={"column is-4"}>
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
          <div className="more-info">
            <Link to={data.node.frontmatter.path}>
              <button className="button is-fullwidth">View</button>
            </Link>
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

export default PortfolioItem;