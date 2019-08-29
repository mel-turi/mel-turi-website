import React, { useEffect, useContext } from 'react';
import Content from './Content';
import { PageContext } from './PageContext';
import profilePic from './assets/profilepic.png';
import { Spring } from 'react-spring/renderprops';

const About = () => {
  // eslint-disable-next-line
  const [pageInfo, setPageInfo] = useContext(PageContext);
  useEffect(() => {
    setPageInfo({
      primaryContent: (
        <Spring
          from={{
            color: 'rgba(0,0,0,0)',
            opactiy: 0,
            marginBottom: -100,
            transform: 'translate3d(-1000px,0,0) scale(1) rotateZ(-90deg)'
          }}
          to={{
            color: 'rgba(255, 232, 254,1)',
            opacity: 1,
            marginBottom: 0,
            transform: 'translate3d(0px,0,0) scale(1) rotateX(0deg)'
          }}
          config={{ duration: 300 }}
        >
          {props => (
            <div style={props} className='about-2'>
              <div className='about1-contents'>
                <h1>About me</h1>
                <br />
                <p>
                  Ever since Mel was a young girl she had a passion for
                  literature and a natural ability to narrate a good story. With
                  the innate ability to produce a multitude of voices and
                  portray emotion through the spoken word she took to narrating
                  like a duck to water.
                </p>
                <p>
                  When not producing, she is a stay at home mom to an artsy
                  teenager, an autistic boy/rocket hybrid, and an infant who
                  doesn't really do much yet.
                </p>
              </div>
            </div>
          )}
        </Spring>
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
