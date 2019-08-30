import React, { useState, createContext } from 'react';

export const PageContext = createContext();

export const ContentProvider = props => {
  const [pageInfo, setPageInfo] = useState({
    primaryContent: '',
    secondaryContent: ''
  });
  return (
    <PageContext.Provider value={[pageInfo, setPageInfo]}>
      {props.children}
    </PageContext.Provider>
  );
};
