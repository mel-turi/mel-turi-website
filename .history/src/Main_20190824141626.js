import React from 'react';
import Content from './Content';

const Main = props => {
  console.log('State', props.location.state.page);
  return (
    <div>
      <Content page={props.location.state.page} />
    </div>
  );
};

export default Main;
