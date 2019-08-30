import React, { useEffect, useContext } from 'react';
import Content from './Content';
import { PageContext } from './PageContext';

import { Spring } from 'react-spring/renderprops';

const Main = () => {
  // eslint-disable-next-line
  const [pageInfo, setPageInfo] = useContext(PageContext);
  useEffect(() => {
    setPageInfo({
      primaryContent: (
        <Spring
          from={{ opactiy: 0, marginLeft: -1000 }}
          to={{ opacity: 1, marginLeft: 0 }}
          config={{ delay: 5, duration: 5000 }}
        >
          {props => (
            <div className='home-1'>
              <div className='home1-contents'>
                <h1 style={props}>Big Title</h1>
                <p style={props}>
                  vestibulum mattis ullamcorper velit sed ullamcorper morbi
                  tincidunt ornare massa eget egestas purus viverra accumsan in
                  nisl nisi scelerisque eu ultrices vitae auctor eu augue ut
                  lectus arcu bibendum at varius vel pharetra vel turpis nunc
                  eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim
                  facilisis gravida neque convallis
                </p>
              </div>
            </div>
          )}
        </Spring>
      ),
      secondaryContent: (
        <div className='home-2'>
          <div className='home2-contents'>
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
