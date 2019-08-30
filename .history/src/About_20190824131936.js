import React, { Component } from 'react';
import Content from './Content';

const About = () => {
  console.log('about', props.location.state);
  return (
    <div>
      <Content />
    </div>
  );
};

export default About;
