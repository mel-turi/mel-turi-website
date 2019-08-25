import React from 'react';
import Content from './Content';

const About = props => {
  console.log('State', props.location.state);
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
