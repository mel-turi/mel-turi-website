import React, { useContext } from 'react';
import { PageContext } from './PageContext';

const Content = () => {
  const [pageInfo] = useContext(PageContext);

  return (
    <main className='main-container'>
      <div className={pageInfo.pageTitle}>
        <div>{pageInfo.primaryContent}</div>
        <div>{pageInfo.secondaryContent}</div>
      </div>
    </main>
  );
};

export default Content;
