import React, { useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Spring } from 'react-spring/renderprops';
import { SideMenuContext } from './SideMenuContext';

const Header = () => {
  // eslint-disable-next-line
  const [navToggle, setNavToggle] = useContext(SideMenuContext);
  useEffect(() => {
    setNavToggle({
      isNavVisible: false
    });
    // eslint-disable-next-line
  }, []);

  const handleChange = () => {
    navToggle.isNavVisible = !navToggle.isNavVisible;
    console.log(navToggle.isNavVisible);
  };

  return (
    <nav className='nav-wrapper'>
      <Spring
        from={{ opactiy: 0, marginLeft: -1000 }}
        to={{ opacity: 1, marginLeft: 0 }}
        config={{ delay: 5, duration: 500 }}
      >
        {props => (
          <div style={props} onClick={handleChange} className='title'>
            Mel Turi
          </div>
        )}
      </Spring>

      <Spring
        from={{ opactiy: 0, marginRight: -1000 }}
        to={{ opacity: 1, marginRight: 0 }}
        config={{ delay: 97, duration: 500 }}
      >
        {props => (
          <div style={props} className='main-navigation'>
            <ul>
              <li>
                <NavLink
                  to={{
                    pathname: '/',
                    state: { page: 'home' }
                  }}
                  exact={true}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: '/about',
                    state: { page: 'about' }
                  }}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to='/narrations'>Narrations</NavLink>
              </li>

              <li>
                <NavLink to='/contact'>Contact</NavLink>
              </li>
              <div className='button nav-button'>
                <li>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://www.acx.com/narrator?p=AI0XTZMVU6YKG'
                  >
                    ACX Page
                  </a>
                </li>
              </div>
            </ul>
          </div>
        )}
      </Spring>
    </nav>
  );
};

export default Header;
