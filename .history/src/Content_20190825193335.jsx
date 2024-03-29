import React, { useContext } from 'react';
import { PageContext } from './PageContext';

const Content = () => {
  const [pageInfo] = useContext(PageContext);

  return <main className='main-container'>{pageInfo}</main>;
};

export default Content;
