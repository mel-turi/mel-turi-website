import React, { useContext } from 'react';
import { PageContext } from './PageContext';

const Content = () => {
  const [pageInfo] = useContext(PageContext);

  return (
    <main className='main-container'>
      <div style={props} className={pageInfo.pageTitle}>
        {pageInfo.primaryContent}
        {pageInfo.secondaryContent}
      </div>
    </main>
  );
};

export default Content;
