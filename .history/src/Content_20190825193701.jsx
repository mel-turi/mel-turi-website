import React, { useContext } from 'react';
import { PageContext } from './PageContext';

const Content = () => {
  const [pageInfo] = useContext(PageContext);

  return (
    <main className='main-container'>
      <div>{pageInfo.primaryContent}</div>
      <div>{pageInfo.secondaryContent}</div>
    </main>
  );
};

export default Content;
