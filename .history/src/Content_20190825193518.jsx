import React, { useContext } from 'react';
import { PageContext } from './PageContext';

const Content = () => {
  const [pageInfo] = useContext(PageContext);

  return <main className='main-container'>{pageInfo.primaryContent}</main>;
};

export default Content;
