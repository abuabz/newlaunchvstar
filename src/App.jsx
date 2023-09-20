import './App.css';
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import img from './Assets/Images/Webdesk.jpg';
import imgmob from './Assets/Images/Webmob01.png';

function App() {
  // Use a state variable to track the screen width
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Update the screenWidth state when the window is resized
  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  useEffect(() => {
    const imageElement = document.getElementById('image01');
    if (imageElement) {
      imageElement.addEventListener('load', () => {
        setImageLoaded(true);
      });
    }
  }, []);

  // Determine which image source to use based on screen width
  // const imageSource = screenWidth < 800 ? imgmob : img;

  return (
    <div className="App">
      <Navbar></Navbar>

      <div className={`maindiv ${imageLoaded ? 'fade-in' : ''}`}>
        {screenWidth < 800 ?
          <img
            src={imgmob}
            alt=""
            id="image01"
            style={{ visibility: imageLoaded ? 'visible' : 'hidden' }}
          /> :
          <div className="deskmain">
            <div className="comingsoondiv">
              <span id='comingsoontext'>
                COMING <br />
                SOON
              </span>
            </div>
            <div className="imgdivv">
            <img src={img} alt="" id='imagedesk' />

            </div>
            <div className="leftdotdiv">
              <span id='leftdots'>
                . .  . . . . . . . . . .
                . .  . . . . . . . . . .
                . .  . . . . . . . . . .
                . .  . . . . . . . . . .
              </span>
            </div>
            <div className="rightdotdiv">
              <span id='rightdots'>
                . .  . . . . . . . . . .
                . .  . . . . . . . . . .
                . .  . . . . . . . . . .
                . .  . . . . . . . . . .
                . .  . . . . . . . . . .
                . .  . . . . . . . . . .
              </span>
            </div>
          </div>
        }
      </div>
    </div>
  );
}

export default App;
