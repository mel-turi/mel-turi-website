import React from 'react';
import Content from './Content';

const Main = props => {
  console.log('main', props.location.state);
  return (
    <div>
      <Content />
    </div>
  );
};

export default Main;
