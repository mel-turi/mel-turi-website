import React, { useState, useEffect, useContext } from 'react';
import { PageContext } from './PageContext';

const Content = () => {
  const [pageInfo, setPageInfo] = useContext(PageContext);

  return <main className='main-container'>{pageInfo}</main>;
};

export default Content;
