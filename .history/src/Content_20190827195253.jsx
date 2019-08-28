import React, { useContext } from 'react';
import { PageContext } from './PageContext';
import { Spring } from 'react-spring/renderprops';

const Content = () => {
  const [pageInfo] = useContext(PageContext);

  return (
    <main className='main-container'>
      <Spring
        from={{
          color: 'rgba(0,0,0,0)',
          opactiy: 0,
          marginBottom: -100,
          transform: 'translate3d(400px,0,0) scale(2) rotateX(90deg)'
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
          <div className={pageInfo.pageTitle}>
            {pageInfo.primaryContent}
            {pageInfo.secondaryContent}
          </div>
        )}
      </Spring>
    </main>
  );
};

export default Content;
