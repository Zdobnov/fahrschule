import React from 'react';

const Section = props => (
  <section className={`section ${props.className}`}>
    <div className="wrapper">
      {props.children}
    </div>
  </section>
);

Section.defaultProps = {
  className: '',
};

export default Section;
