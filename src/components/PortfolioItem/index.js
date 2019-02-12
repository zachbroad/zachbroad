import React from 'react';
import { Link } from 'gatsby';
import './style.sass';
import GatsbyImage from 'gatsby-image';

export const PortfolioItem = ({ data }) => {
  console.dir(data.node);
  return (
    <div className={'column is-4 is-flex'}>
      <div className="card portfolio-item">
        <div className="card-header">
          <div className="card-header-title">
            {/*<Link to={data.node.frontmatter.path}>*/}
            {/*{data.node.frontmatter.title}*/}
            {/*</Link>*/}
            <a href={data.node.frontmatter.url}>
              {data.node.frontmatter.title}
            </a>
          </div>
        </div>
        <div>
          <GatsbyImage fluid={data.node.frontmatter.image.childImageSharp.fluid}/>
        </div>
        <div className="card-content">
          <div className="description">
            {data.node.frontmatter.description}
          </div>
        </div>
        <footer className="card-footer">
          <a href={data.node.frontmatter.url} className="card-footer-item">Visit Site</a>
          {/*<Link to={data.node.frontmatter.path} className="card-footer-item">More info</Link>*/}
        </footer>
      </div>
    </div>
  );
};

export default PortfolioItem;