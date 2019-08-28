import React, { useEffect, useContext } from 'react';
import Content from './Content';
import { PageContext } from './PageContext';
import profilePic from './assets/profilepic.png';

const About = () => {
  // eslint-disable-next-line
  const [pageInfo, setPageInfo] = useContext(PageContext);
  useEffect(() => {
    setPageInfo({
      primaryContent: (
        <div className='about-2'>
          <div className='about1-contents'>
            <h1>About me</h1>
            <br />
            <p>
              Mel Turi is a professional voice-over artist, producer, and
              mezzo-soprano vocalist based out of a home studio in North
              Carolina. While her passion is Science Fiction, she is available
              for a variety of projects, as royalty share or PFH. When not
              producing, she is a stay at home mom to an artsy teenager, an
              autistic boy/rocket hybrid, and an infant who doesn't really do
              much yet.
            </p>
          </div>
        </div>
      ),
      secondaryContent: (
        <div className='about-1'>
          <div className='about2-contents'>
            <img src={profilePic} alt='profile pic' />
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
