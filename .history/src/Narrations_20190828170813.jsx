import React, { useEffect, useContext } from 'react';
import Content from './Content';
import { PageContext } from './PageContext';
import { Spring } from 'react-spring/renderprops';

const Narrations = () => {
  // eslint-disable-next-line
  const [pageInfo, setPageInfo] = useContext(PageContext);
  useEffect(() => {
    setPageInfo({
      primaryContent: (
        <Spring
          from={{
            color: 'rgba(0,0,0,0)',
            opactiy: 0,
            marginBottom: -10,
            transform: 'translate3d(-1000px,0,0) scale(5) rotateX(90deg)'
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
            <div style={props} className='narrations-1'>
              <div className='narrations1-content'>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://www.audible.com/pd/Fatal-Pure-Simple-Audiobook/B07QMXN6XM?qid=1566766198&sr=1-2&pf_rd_p=e81b7c27-6880-467a-b5a7-13cef5d729fe&pf_rd_r=90J2AJP8GABRKWY40A08&ref=a_search_c3_lProduct_1_2'
                >
                  <img
                    alt='book1'
                    src='https://m.media-amazon.com/images/I/51+g6IoLlmL._SL500_.jpg'
                  />
                </a>
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
            marginBottom: -10,
            transform: 'translate3d(-1000px,0,0) scale(5) rotateX(90deg)'
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
            <div style={props} className='narrations-2'>
              <div className='narrations2-content'>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://www.audible.com/pd/Bringing-Them-Back-Audiobook/B07PMT936P?qid=1566766198&sr=1-1&pf_rd_p=e81b7c27-6880-467a-b5a7-13cef5d729fe&pf_rd_r=90J2AJP8GABRKWY40A08&ref=a_search_c3_lProduct_1_1'
                >
                  <img
                    alt='book2'
                    src='https://m.media-amazon.com/images/I/41H4KQommgL._SL500_.jpg'
                  />
                </a>
              </div>
            </div>
          )}
        </Spring>
      ),
      pageTitle: 'narrations'
    });

    // eslint-disable-next-line
  }, []);

  return <Content />;
};

export default Narrations;
