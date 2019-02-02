import React from "react";


export const PortfolioItem = ({ data }) => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-header-title">
          {data.node.frontmatter.title}
        </div>
      </div>
      <div className="card-content">
        {data.node.frontmatter.description}
      </div>
    </div>
  );
};

export default PortfolioItem;