import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import Navbar from './Navbar';
import './all.sass';
import Footer from './Footer';

const TemplateWrapper = ({ children }) => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
          site {
            siteMetadata {
              title,
              description,
            }
          }
        }
    `}
    render={data => (
      <div>
        <Helmet>
          <html lang="en"/>
          <title>{data.site.siteMetadata.title}</title>
          <meta name="description" content={data.site.siteMetadata.description}/>

          <link rel="apple-touch-icon" sizes="180x180" href="/img/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" href="/img/favicon-32x32.png" sizes="32x32"/>
          <link rel="icon" type="image/png" href="/img/favicon-16x16.png" sizes="16x16"/>

          <link rel="mask-icon" href="/img/safari-pinned-tab.svg" color="#ff4400"/>
          <meta name="theme-color" content="#fff"/>

          <meta property="og:type" content="business.business"/>
          <meta property="og:title" content={data.site.siteMetadata.title}/>
          <meta property="og:url" content="/"/>
          <meta property="og:image" content="/img/og-image.jpg"/>


          <link href='https://fonts.googleapis.com/css?family=Merriweather+Sans:800' rel='stylesheet' type='text/css'/>
          <link href='https://fonts.googleapis.com/css?family=Merriweather:400,400italic,700,200,700italic,200italic'
                rel='stylesheet'
                type='text/css'/>
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css"/>
        </Helmet>
        <Navbar/>
        <div>{children}</div>
        <Footer/>
      </div>
    )}
  />
);

export default TemplateWrapper;
