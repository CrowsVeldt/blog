import React from 'react';

import { rhythm } from 'utils/typography';
import { config } from 'config';


export default class Author extends React.Component {
  render() {
    const icon = config.authorIcon;
    const url = config.authorURL;
    const blurb = config.authorBlurb;

    return (
      <div className="author">
        <a href={url}><img
          src={icon}
          style={{
            float: 'left',
            marginRight: rhythm(1/4),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2)
          }}
        /></a>
        <div dangerouslySetInnerHTML={{__html: blurb}} />
      </div>
    );
  }
}
