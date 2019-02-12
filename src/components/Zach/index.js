import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery, Link } from "gatsby";
import GatsbyImage from "gatsby-image";

class Zach extends Component {
  render() {
    return (
      <StaticQuery query={graphql`
      query MyPicture {
        allFile(filter: {name: {eq:"me"}}) {
          edges {
            node {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
      `}
                   render={(d) => {
                     const fluidImage = d.allFile.edges[0].node.childImageSharp.fluid;
                     return (
                       <GatsbyImage
                         fluid={fluidImage}
                         placeholderClassName='image zach is-small is-centered is-vcentered'
                         className="image zach is-small is-centered is-vcentered"/>
                     );
                   }}
      />
    );
  }
}

Zach.propTypes = {};

export default Zach;
