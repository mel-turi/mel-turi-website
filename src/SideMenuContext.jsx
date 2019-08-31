import React, { useState, createContext } from 'react';

export const SideMenuContext = createContext();

export const SideMenuProvider = props => {
  const [navToggle, setNavToggle] = useState(false);

  const toggleNav = isNavVisible => {
    setNavToggle(!navToggle);
  };

  return (
    <SideMenuContext.Provider value={{ navToggle, toggleNav }}>
      {props.children}
    </SideMenuContext.Provider>
  );
};
