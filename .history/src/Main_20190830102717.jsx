import React, { useEffect, useContext } from 'react';
import Content from './Content';
import { PageContext } from './PageContext';

const Main = () => {
  // eslint-disable-next-line
  const [pageInfo, setPageInfo] = useContext(PageContext);
  useEffect(() => {
    setPageInfo({
      primaryContent: (
        <div className='home-1'>
          <div className='home1-contents'>
            <h1>Big Title</h1>
            <p>
              Mel Turi is a professional voice-over artist, producer, and
              mezzo-soprano vocalist based out of a home studio in North
              Carolina. While her passion is Science Fiction, she is available
              for a variety of projects, as royalty share or PFH.
            </p>
          </div>
        </div>
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
