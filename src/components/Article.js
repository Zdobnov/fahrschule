import React from 'react';

const Article = props => (
  <article className={`article ${props.className}`}>
    <h3 className="article__title">{props.title}</h3>
    {props.children}
  </article>
);

Article.defaultProps = {
  className: '',
  title: '',
};

export default Article;
