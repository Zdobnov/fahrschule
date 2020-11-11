import React from 'react';

const Article = props => (
  <article className={`article ${props.className}`}>
    {props.children}
  </article>
);

Article.defaultProps = {
  className: '',
};

export default Article;
