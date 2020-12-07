import React from 'react';

// styles
import './Section.scss';

const Section = props => (
  <section className={`section ${props.className}`} style={props.style}>
    <div className="wrapper">
      {props.children}
    </div>
  </section>
);

Section.defaultProps = {
  className: '',
};

export default Section;
