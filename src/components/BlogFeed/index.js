import React, { Component } from "react";
import { Link } from "gatsby";

class BlogFeed extends Component {
  render() {
    const { posts } = this.props;

    return (
      <div>
        <div className="content">
          <h1 className="has-text-weight-bold is-size-2">Latest Stories</h1>
        {posts
          .map(({ node: post }) => (
            <div
              className="content"
              style={{ border: "1px solid #333", padding: "2em 4em" }}
              key={post.id}
            >
              <p>
                <Link className="has-text-primary" to={post.fields.slug}>
                  {post.frontmatter.title}
                </Link>
                <span> &bull; </span>
                <small>{post.frontmatter.date}</small>
              </p>
              <p>
                {post.excerpt}
                <br/>
                <br/>
                <Link className="button is-small" to={post.fields.slug}>
                  Keep Reading →
                </Link>
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default BlogFeed;