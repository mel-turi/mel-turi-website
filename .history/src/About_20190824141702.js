import React from 'react';
import Content from './Content';

const About = props => {
  console.log('State', props.location.state);
  return (
    <div>
      <div>
        <Content page={props.location.state.page} />
      </div>
    </div>
  );
};

export default About;
