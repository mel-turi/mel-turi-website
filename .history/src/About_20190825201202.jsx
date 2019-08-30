import React, { useEffect, useContext } from 'react';
import Content from './Content';
import { PageContext } from './PageContext';

const About = () => {
  // eslint-disable-next-line
  const [pageInfo, setPageInfo] = useContext(PageContext);
  useEffect(() => {
    setPageInfo({
      primaryContent: (
        <div>
          <h1>About me</h1>
          <p>Bio goes here</p>
        </div>
      ),
      secondaryContent: (
        <img
          src='https://images.unsplash.com/photo-1468327768560-75b778cbb551?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'
          alt='profile pic'
        />
      )
    });

    // eslint-disable-next-line
  }, []);

  return <Content />;
};

export default About;
