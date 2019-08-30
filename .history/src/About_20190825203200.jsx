import React, { useEffect, useContext } from 'react';
import Content from './Content';
import { PageContext } from './PageContext';

const About = () => {
  // eslint-disable-next-line
  const [pageInfo, setPageInfo] = useContext(PageContext);
  useEffect(() => {
    setPageInfo({
      primaryContent: (
        <div className='card-1'>
          <div className='card1-contents'>
            <h1>About me</h1>
            <p>Bio goes here</p>
          </div>
        </div>
      ),
      secondaryContent: (
        <div className='card-2'>
          <div className='card2-contents'>
            <img
              src='https://images.unsplash.com/photo-1468327768560-75b778cbb551?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'
              alt='profile pic'
            />
          </div>
        </div>
      ),
      pageTitle: 'about'
    });

    // eslint-disable-next-line
  }, []);

  return <Content />;
};

export default About;
