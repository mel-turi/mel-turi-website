import React, { useEffect, useContext } from 'react';
import Content from './Content';
import { PageContext } from './PageContext';

const [pageInfo, setPageInfo] = useContext(PageContext);
useEffect(() => {
  setPageInfo({
    primaryContent: (
      <div>
        <h1>Big Title</h1>
        <p>
          vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt
          ornare massa eget egestas purus viverra accumsan in nisl nisi
          scelerisque eu ultrices vitae auctor eu augue ut lectus arcu bibendum
          at varius vel pharetra vel turpis nunc eget lorem dolor sed viverra
          ipsum nunc aliquet bibendum enim facilisis gravida neque convallis
        </p>
      </div>
    ),
    secondaryContent: (
      <div>
        <h3>Testimonial</h3>
        <p>
          velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus
          viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu
          augue ut lectus arcu bibendum at varius vel pharetra vel turpis nunc
          eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim
          facilisis
        </p>
      </div>
    )
  });

  // eslint-disable-next-line
}, []);

const Main = () => {
  return <Content />;
};

export default Main;
