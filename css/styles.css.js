
export default `
ol.menu {
  list-style: none;
  margin-left: 0;
}

@media only screen and (min-width: 1200px) {
  html {
    font-size: 125%;
  }
}

@media only screen and (min-width: 481px) {
  ol.menu li {
    display: inline;
    margin-right: 2em;
  }
}

@media only screen and (max-width: 480px) {
  html {
    font-size: 90%;
  }
}

body {
  color: rgb(66,66,66);
}
h1 {
  color: rgb(44,44,44);
}
h2,h3,h4,h5,h6 {
  color: rgb(44,44,44);
  margin-bottom: 0.5rem;
}

img {
  margin-bottom: 0;
  margin-left: auto;
  margin-right: auto;
  display: block;
}

td, th {
  color: rgb(44,44,44);
  line-height: 1rem;
  padding: .5rem;
  text-align: left;
  vertical-align: top;
}
table tbody > tr:nth-child(odd) > th,
table tbody > tr:nth-child(odd) > td {
  background-color: #EEEEEE;
}

a {
  color: rgb(42,93,173);
  text-decoration: none;
  /* thanks to https://eager.io/blog/smarter-link-underlines/ */
  text-shadow: .03em 0 #fff,-.03em 0 #fff,0 .03em #fff,0 -.03em #fff,.06em 0 #fff,-.06em 0 #fff,.09em 0 #fff,-.09em 0 #fff,.12em 0 #fff,-.12em 0 #fff,.15em 0 #fff,-.15em 0 #fff;
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 1px, rgb(42,93,173) 1px, rgb(42,93,173) 2px, rgba(0, 0, 0, 0) 2px);
}

h1 a, h2 a, h3 a, h4 a, h5 a, h6 a {
  background-image: none;
  text-shadow: none;
}

a:hover {
  text-shadow: none;
  background-image: none;
  background-color: rgb(255, 255, 192);
}

a.plain {
  text-shadow: none;
  background-image: none;
  background-color: transparent;
}

::-moz-selection {
  background-color: rgb(255, 255, 192);
  text-shadow: none;
}

::selection {
  background-color: rgb(255, 255, 192);
  text-shadow: none;
}

span.date {
  color: lightgray;
}

.markdown p code, .markdown li code {
  white-space: pre;
  white-space: pre-wrap;
  white-space: pre-line;
  white-space: -pre-wrap;
  white-space: -o-pre-wrap;
  white-space: -moz-pre-wrap;
  white-space: -hp-pre-wrap;
  word-wrap: break-word;
  background: #EEEEEE;
  border: 1px solid #CCCCCC;
  display: inline;
  font-family: Inconsolata, monospace, serif;
  max-width: 100%;
  padding: 0 0.1625rem;
}

.markdown p a code, .markdown li a code {
  text-shadow: none;
  text-decoration: underline;
}

.markdown p a code:hover, .markdown li a code:hover {
  text-shadow: none;
  background-image: none;
  background-color: rgb(255, 255, 192);
  border: 1px solid rgb(255, 255, 192);
}

.markdown pre {
  background: #EEEEEE;
}

.markdown pre code {
  padding: 0.5rem;
  border: none;
  display: inline-block;
  white-space: inherit;
  word-wrap: normal;
  line-height: 1rem;
  background-image: none;
}

blockquote {
  padding-left: 16.875px;
  border-left: 6px solid lightgray;
  margin-left: 10.875px;
  margin-right: 0;
  padding-right: 0;
}
`;
