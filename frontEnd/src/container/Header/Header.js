/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/anchor-is-valid */
import {React, useState, useRef} from 'react';
import {motion} from "framer-motion";
import {AppWrap} from "../../wrapper";
import {images, audio} from "../../constants/index";
import {GiMusicalNotes} from "react-icons/gi";
import ThemeToggle from './ThemeToggle';
import "./Header.scss";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
};

function Header() {
// Play smooth Jazz
  const [isJazzPlaying, setIsJazzPlaying] = useState(false);
  const audioRefJazz = useRef(new Audio(audio.jazz));
  
  function playJazz(){
    setIsJazzPlaying(true);
    audioRefJazz.current.play();
  };
  
  function stopJazz(){
    setIsJazzPlaying(false);
    audioRefJazz.current.pause();
    audioRefJazz.current.currentTime = 0;
  }

// Click sound on theme toggle
  function playSound(){
    const clickSound = new Audio((audio.click))
    clickSound.play();
  }

// Toggling different themes
  function setTheme(e){
    const eId = e.target.id;
    const root = document.documentElement;

    eId === "one" && root.setAttribute("data-theme", "theme-1");
    eId === "two" && root.setAttribute("data-theme", "theme-2");
    eId === "three" && root.setAttribute("data-theme", "theme-3");
    eId === "four" && root.setAttribute("data-theme", "theme-4");
    eId === "five" && root.setAttribute("data-theme", "theme-5");
  };

  return (
    <>
    <div className="app__header">
      <motion.div
        whileInView={{x: [-100, 0], opacity: [0, 1]}}
        transition={{duration: 1}}
        className="app__header-headertext"
      >
        <div>
          <h1> Hi, my
            <br /> 
            name is <span> Alain </span>
          </h1>
          <p> I am a <span style={{color: "var(--quaternary-color)"}}>Web Developer</span> based in
            Haarlem, The Netherlands
          </p>
          </div>
      </motion.div>
      
      <div className="app__header-profile"> 
        <img src={images.Alain} alt="profile"/>
      </div>
    </div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-scroll"
      >
        <p> 
          <span>Scroll down</span>
         
          <div className="app__header-scroll-messages">
            <div className="app__header-scroll-message-1">to find out more</div>
            <div className="app__header-scroll-message-2">'cause it's cool</div>
            <div className="app__header-scroll-message-3">for a great time</div>
            <div className="app__header-scroll-message-4">if you dare</div>
            <div className="app__header-scroll-message-5">when you're ready</div>
          </div>
        </p>
      </motion.div>

        <div className="app__header-themetoggle-wrapper">
          <ThemeToggle
            setTheme={setTheme}  
            playSound={playSound}
          />
        </div>

        <div className="app__header-music-wrapper">
          <div
          id="jazz"
          className="app__header-music"
          onClick={ () => {
            !isJazzPlaying ? playJazz() : stopJazz()
          }}
          >
            <div className="app__header-music-content">
              <h1 style={{fontSize: "1.5rem"}}>Toggle Jazz &nbsp;</h1>
              <GiMusicalNotes style={{fontSize: "1.5rem"}} />
            </div>
          </div>
        </div>

        <div className="app__header-music-wrapper-smallscreen">
          <div
          id="jazz"
          className="app__header-music"
          onClick={ () => {
            !isJazzPlaying ? playJazz() : stopJazz()
          }}
          >
            <div className="app__header-music-content">
              <GiMusicalNotes style={{fontSize: "1.5rem"}} />
            </div>
          </div>
        </div>

      <motion.div
        whileInView={{x: [-100, 0], opacity: [0, 1]}}
        transition={{duration: 1}}
      >
        
      </motion.div>
    </>
  );
};

export default AppWrap(Header, "home");