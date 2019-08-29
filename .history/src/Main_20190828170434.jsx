import React, { useEffect, useContext } from 'react';
import Content from './Content';
import { PageContext } from './PageContext';

import { Spring, Keyframes, animated, config } from 'react-spring/renderprops';

const Main = () => {
  // eslint-disable-next-line
  const [pageInfo, setPageInfo] = useContext(PageContext);
  useEffect(() => {
    setPageInfo({
      primaryContent: (
        <Spring
          from={{
            color: 'rgba(0,0,0,0)',
            opactiy: 0,
            marginBottom: -100,
            transform: 'translate3d(-1000px,0,0) scale(1) rotateZ(-180deg)'
          }}
          to={{
            color: 'rgba(255, 232, 254,1)',
            opacity: 1,
            marginBottom: 0,
            transform: 'translate3d(0px,0,0) scale(1) rotateX(0deg)'
          }}
          config={{ duration: 300 }}
        >
          {props => (
            <div style={props} className='home-1'>
              <div className='home1-contents'>
                <h1>Big Title</h1>
                <p>
                  Mel Turi is a professional voice-over artist, producer, and
                  mezzo-soprano vocalist based out of a home studio in North
                  Carolina. While her passion is Science Fiction, she is
                  available for a variety of projects, as royalty share or PFH.
                </p>
              </div>
            </div>
          )}
        </Spring>
      ),
      secondaryContent: (
        <Spring
          from={{
            color: 'rgba(0,0,0,0)',
            opactiy: 0,
            marginBottom: -100,
            transform: 'translate3d(1000px,0,0) scale(.5) rotateZ(180deg)'
          }}
          to={{
            color: 'rgba(255, 232, 254,1)',
            opacity: 1,
            marginBottom: 0,
            transform: 'translate3d(0px,0,0) scale(1) rotateX(0deg)'
          }}
          config={{ duration: 300 }}
        >
          {props => (
            <div style={props} className='home-2'>
              <div className='home2-contents'>
                <h3>Testimonial</h3>
                <p>
                  velit sed ullamcorper morbi tincidunt ornare massa eget
                  egestas purus viverra accumsan in nisl nisi scelerisque eu
                  ultrices vitae auctor eu augue ut lectus arcu bibendum at
                  varius vel pharetra vel turpis nunc eget lorem dolor sed
                  viverra ipsum nunc aliquet bibendum enim facilisis
                </p>
              </div>
            </div>
          )}
        </Spring>
      ),
      pageTitle: 'home'
    });

    // eslint-disable-next-line
  }, []);

  return <Content />;
};

export default Main;
