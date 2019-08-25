import React from 'react';
import Content from './Content';

const About = props => {
  console.log('about', props.location.state);
  return (
    <div>
      {props.location.state.page === 'about' ? (
        <Content page='about' />
      ) : (
        <Content />
      )}
    </div>
  );
};

export default About;
