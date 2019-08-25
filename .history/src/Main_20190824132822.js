import React from 'react';
import Content from './Content';

const Main = props => {
  return (
    <div>
      {props.location.state === 'main' ? <Content page='main' /> : <Content />}
    </div>
  );
};

export default Main;
