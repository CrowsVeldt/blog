import React from 'react';
import { Link } from 'react-router';
import moment from 'moment';
import DocumentTitle from 'react-document-title';

import map from 'lodash/map';
import { prefixLink } from 'gatsby-helpers';

import { rhythm } from 'utils/typography';
import intersperse from 'utils/intersperse';

import ReadMore from 'components/ReadMore';
import Author from 'components/Author';
import { config } from 'config';

import '../css/solarized-light.less';


export default class MarkdownWrapper extends React.Component {
  static propTypes = {
    route: React.PropTypes.object.isRequired,
  }

  componentDidMount() {
    setTimeout(this.scroll, 0);
  }

  componentWillReceiveProps() {
    setTimeout(this.scroll, 0);
  }

  scroll() {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView();
      }
    }
  }

  render() {
    const post = this.props.route.page;
    const data = post.data;
    const tags = data.tags;
    const tagLinks = map(tags, tag => (
      <Link key={tag} to={prefixLink(`/tags/${tag}/`)}>{tag}</Link>
    ));

    let tagSection;
    if (tagLinks.length) {
      tagSection = <div><em>Tags:</em> {intersperse(tagLinks, ', ')}</div>;
    }

    return (
      <DocumentTitle title={`${data.title} | ${config.blogTitle}`}>
        <div className="post">
          <h1>{data.title}</h1>
          <div className="markdown" dangerouslySetInnerHTML={{ __html: data.body }} />
          <hr
            style={{
              marginTop: rhythm(2),
              marginBottom: rhythm(1),
            }}
          />
          <div className="metadata"
            style={{
              display: 'block',
              marginTop: rhythm(1),
              marginBottom: rhythm(1),
            }}
          >
            <div><em>Posted:</em> {moment(data.date).format('MMMM D, YYYY')}</div>
            {tagSection}
          </div>
          <hr
            style={{
              marginTop: rhythm(1),
              marginBottom: rhythm(1),
            }}
          />
          <Author {...this.props} />
          <hr
            style={{
              marginTop: rhythm(1),
              marginBottom: rhythm(2),
            }}
          />
          <ReadMore post={data} posts={this.props.route.pages} />
        </div>
      </DocumentTitle>
    );
  }
}
