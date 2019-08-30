import React, { useContext } from 'react';
import { PageContext } from './PageContext';
import { Spring } from 'react-spring/renderprops';

const Content = () => {
  const [pageInfo] = useContext(PageContext);

  return (
    <main className='main-container'>
      <div className={pageInfo.pageTitle}>
        <Spring
          from={{ opactiy: 0, marginLeft: -1000 }}
          to={{ opacity: 1, marginLeft: 0 }}
          config={{ delay: 5, duration: 500 }}
        >
          {props => (
            <div style={props}>
              {pageInfo.primaryContent}
              {pageInfo.secondaryContent}
            </div>
          )}
        </Spring>
      </div>
    </main>
  );
};

export default Content;
