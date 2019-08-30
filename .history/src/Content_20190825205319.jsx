import React, { useContext } from 'react';
import { PageContext } from './PageContext';
import { Spring } from 'react-spring/renderprops';

const Content = () => {
  const [pageInfo] = useContext(PageContext);

  return (
    <main className='main-container'>
      <div className={pageInfo.pageTitle}>
        {pageInfo.primaryContent}
        {pageInfo.secondaryContent}
      </div>
    </main>
  );
};

export default Content;
