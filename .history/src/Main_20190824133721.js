import React from 'react';
import Content from './Content';

const Main = props => {
  console.log('Main', props.location.state);
  return (
    <div>
      {props.location.state.page === 'home' ? (
        <Content page='home' />
      ) : (
        <Content />
      )}
    </div>
  );
};

export default Main;
