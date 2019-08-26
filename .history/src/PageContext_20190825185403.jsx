import React, { useState, createContext } from 'react';

export const PageContext = createContext();

export const ContentProvider = props => {
  const [pageInfo, setPageInfo] = useState({
    primaryContent: '',
    secondaryContent: ''
  });
  return <PageContext.Provider>{props.children}</PageContext.Provider>;
};
