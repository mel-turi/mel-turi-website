import React, { Component } from 'react';
import Content from './Content';

export class About extends Component {
  render(props) {
    console.log('about', props.location.state);
    return (
      <div>
        <Content />
      </div>
    );
  }
}

export default About;
