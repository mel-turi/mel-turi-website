import React, { useState, createContext } from 'react';

export const SideMenuContext = createContext();

export const SideMenuProvider = props => {
  const [navToggle, setNavToggle] = useState({
    isNavVisible: false
  });

  return (
    <SideMenuContext.Provider value={[navToggle, setNavToggle]}>
      {props.children}
    </SideMenuContext.Provider>
  );
};
