import React from 'react';
import DocumentTitle from 'react-document-title';

import sortBy from 'lodash/collection/sortBy';
import map from 'lodash/collection/map';
import filter from 'lodash/collection/filter';
import { link } from 'gatsby-helpers';

import getPosts from 'utils/getPosts';
import { rhythm } from 'utils/typography'

import Author from 'components/Author';
import PostListEntry from 'components/PostListEntry';


export default class extends React.Component {
  render() {
    const title = 'Popular Posts';

    let posts = getPosts(this.props.pages);

    posts = filter(posts, post => Boolean(post.data.hits));
    posts = sortBy(posts, post => post.data.hits);
    posts = posts.reverse();
    posts = posts.slice(0, 10);

    const pageLinks = map(posts, post => (
      <PostListEntry key={post.path} post={post} />
    ));

    return (
      <DocumentTitle title={`${title} | ${this.props.config.blogTitle}`}>
        <div>
          <h1>{title}</h1>
          <ol>
            {pageLinks}
          </ol>
          <hr
            style={{
              marginTop: rhythm(1),
              marginBottom: rhythm(1)
            }}
          />
          <Author {...this.props} />
        </div>
      </DocumentTitle>
    )
  }
}