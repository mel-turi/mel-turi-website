import React from 'react';
import Content from './Content';

const About = props => {
  console.log('State', props.location.state);
  return <Content page={props.location.state.page} />;
};

export default About;
