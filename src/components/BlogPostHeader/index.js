import React from 'react';
import './styles.sass';

export const BlogPostHeader = ({ title, description, date, timeToRead }) => (
  <div className="blog-post-header">
    <h1 className="title is-size-2 has-text-weight-bold is-bold-light is-uppercase">
      {title}
    </h1>
    <p className="blog-post-header-description subtitle">{description}</p>
    <small className={'has-text-weight-light has-text-grey'}>~ {timeToRead} minute read</small>
    <br/>
    <small className={'has-text-weight-light has-text-grey'}>posted on {date}</small>
  </div>
);

export default BlogPostHeader;
