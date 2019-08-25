import React from 'react';
import Content from './Content';

const About = props => {
  return <Content page={props.location.state.page} />;
};

export default About;
