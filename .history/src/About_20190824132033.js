import React from 'react';
import Content from './Content';

const About = props => {
  console.log('about', props.location.state);
  return (
    <div>
      <Content />
    </div>
  );
};

export default About;
