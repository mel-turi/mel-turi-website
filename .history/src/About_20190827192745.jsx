import React, { useEffect, useContext } from 'react';
import Content from './Content';
import { PageContext } from './PageContext';

const About = () => {
  // eslint-disable-next-line
  const [pageInfo, setPageInfo] = useContext(PageContext);
  useEffect(() => {
    setPageInfo({
      primaryContent: (
        <div className='about-2'>
          <div className='about1-contents'>
            <h1>About me</h1>
            <p>Bio goes here.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium harum obcaecati ullam, officia debitis voluptatum
              laborum quos hic incidunt facere error ipsum iste similique
              repudiandae consequatur, laudantium itaque perferendis magni.
            </p>
          </div>
        </div>
      ),
      secondaryContent: (
        <div className='about-1'>
          <div className='about2-contents'>
            <img
              src='localhost:3000/src/assets/profilepic.png'
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
