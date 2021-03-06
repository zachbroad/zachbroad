import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import { ServiceItem } from '../ServiceItem';


const query = graphql`
  query ServiceListQuery {
    allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "service"}}}, sort: {fields: frontmatter___title, order:DESC}) {
      edges {
        node {
          html
          id
          frontmatter {
            title
            path
            description
            icon 
          }
        }
      }
    }
  }
`;

export const ServiceList = () => {
  return (
    <StaticQuery
      query={query}
      render={data => {
        const serviceItems = data.allMarkdownRemark.edges.map((d, index) => (
          <ServiceItem key={index} data={d.node}/>
        ));
        return (
          <div className="services-list-container">
            {serviceItems}
          </div>
        );
      }}
    />
  );
};

export default ServiceList;
