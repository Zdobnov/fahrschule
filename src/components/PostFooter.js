import React from 'react';

// Styles
import './PostFooter.scss';

const PostFooter = () => (
  <section className="post-footer">
    <div className="wrapper">
      <p className="post-footer__copyright">Copyright © 2020 Alle Rechte vorbehalten 2Drive fahrschule. Datenschutz</p>
      <ul className="social">
        <li className="social__item social__item--facebook"><a href="#" /></li>
        <li className="social__item social__item--instagram"><a href="#" /></li>
        <li className="social__item social__item--youtube"><a href="#" /></li>
      </ul>
    </div>
  </section>
);

export default PostFooter;
