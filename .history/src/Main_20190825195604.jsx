import React, { useEffect, useContext } from 'react';
import Content from './Content';
import { PageContext } from './PageContext';

const Main = () => {
  const [pageInfo, setPageInfo] = useContext(PageContext);
  useEffect(() => {
    setPageInfo({
      primaryContent: (
        <div className='card-1'>
          <div className='card2-contents'>
            <h1>Big Title</h1>
            <p>
              vestibulum mattis ullamcorper velit sed ullamcorper morbi
              tincidunt ornare massa eget egestas purus viverra accumsan in nisl
              nisi scelerisque eu ultrices vitae auctor eu augue ut lectus arcu
              bibendum at varius vel pharetra vel turpis nunc eget lorem dolor
              sed viverra ipsum nunc aliquet bibendum enim facilisis gravida
              neque convallis
            </p>
          </div>
        </div>
      ),
      secondaryContent: (
        <div className='card-2'>
          <div className='card2-contents'>
            <h3>Testimonial</h3>
            <p>
              velit sed ullamcorper morbi tincidunt ornare massa eget egestas
              purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae
              auctor eu augue ut lectus arcu bibendum at varius vel pharetra vel
              turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet
              bibendum enim facilisis
            </p>
          </div>
        </div>
      ),
      pageTitle: 'home'
    });

    // eslint-disable-next-line
  }, []);

  return <Content />;
};

export default Main;
