import React, { Component } from 'react';
import { Link } from 'gatsby';
import './styles.sass';
import { FaCalendar, FaClock, FaTimes } from 'react-icons/fa';

class BlogFeed extends Component {
  render() {
    const { posts } = this.props;

    return (
      <div>
        <div className="content" style={{
          // marginRight: 15,
          // marginLeft: 15,
          paddingTop: 7,
          paddingBottom: 7,
        }}>
          {/*<h1 className="has-text-weight-bold is-size-2">Latest Posts</h1>*/}
          {posts
            .map(({ node: post }) => (
              <div
                className="post-card content"
                key={post.id}
              >
                <div style={{paddingBottom: '1rem'}}>
                  <Link className="post-card-link title is-4-mobile is-2-desktop is-uppercase" to={post.fields.slug}>
                    {post.frontmatter.title}
                  </Link>
                  <br/>
                  <small className="is-light has-text-weight-light has-text-grey"><FaClock
                    className="post-date-icon"/>{post.frontmatter.date}</small>
                </div>

                <p>
                  {post.frontmatter.description}
                </p>
                <Link to={post.fields.slug} className="">
                  <button className="button is-fullwidth">Learn more</button>
                </Link>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default BlogFeed;