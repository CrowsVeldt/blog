import fs from 'fs';
import path from 'path';

import _ from 'lodash';
import frontMatter from 'front-matter';
import markdownIt from 'markdown-it';

const md = markdownIt({
  html: true,
  linkify: true,
  typographer: false
});

export default function loadPosts(options) {
  options = options || {};

  const limit = options.limit || Infinity;
  const markdown = typeof options.markdown === 'undefined' ? true : options.markdown;

  const postsPath = path.join(__dirname, '../pages/posts');
  const postFiles = fs.readdirSync(postsPath);

  return _.chain(postFiles)
    .sortBy()
    .reverse()
    .take(limit)
    .map(function(file) {
      const filePath = path.join(postsPath, file);
      const contents = fs.readFileSync(filePath).toString();
      const metadata = frontMatter(contents);

      return {
        path: filePath,
        contents: contents,
        body: markdown ? md.render(metadata.body) : null,
        data: metadata.attributes
      };
    })
    .value();
}

