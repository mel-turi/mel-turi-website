import React from 'react';
import Content from './Content';

const item1 = {
  title: <h1>Big Title</h1>,
  content: <p>vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu augue ut lectus arcu bibendum at varius vel pharetra vel turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis</p>,
  class: 'big-title',
  animated: true
};
const item2 = {
  title: <h3>Testimonial</h3>,
  content: <p>velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu augue ut lectus arcu bibendum at varius vel pharetra vel turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis</p>,
  class: 'testimonial1',
  animated: true
};
const item3 = {
  title: <h3> </h3>,
  content: <p> </p>,
  class: 'hide',
  animated: false
};
const pageInfo = {
  class: 'home-primary',
  secondary: 'home-secondary'
};

const Main = () => {
  return (
    <Content item1={item1} item2={item2} item3={item3} pageInfo={pageInfo} />
  );
};

export default Main;

