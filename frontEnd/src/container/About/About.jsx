import React, { useState } from 'react';
import {motion} from 'framer-motion';
import {AppWrap, MotionWrap} from "../../wrapper"
import {Person, Personality, Hobbies} from "./index";
import {BsFillArrowLeftSquareFill} from "react-icons/bs";
import {BsFillArrowRightSquareFill} from "react-icons/bs";


import "./About.scss";

function About() {

  const [current, setCurrent] = useState(0);
  const abouts = [<Person />, <Personality />, <Hobbies />];
  const length = abouts.length;

  if(!Array.isArray(abouts) || length <= 0){
    return null;
  }

  const previous = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }

  const next = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }

// Automatically push carousel one forward
  setTimeout(
    next
    , 7000)

  return (
    <>
      <h2 className="head-text">A <span> Little </span> Something <span> About Me </span></h2>

      <div className="app__about-carousel-container">
        <BsFillArrowLeftSquareFill
        className ="app__arrow-left"
        onClick={previous}
        />
        <BsFillArrowRightSquareFill

        className="app__arrow-right"
        onClick={next}
        />
        <motion.div
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, type: "tween" }}
          className="app__about-carousel"
        >
          {abouts.map( (item, index) => {
            return (
              <div 
              className={index === current ? "app__item app__active" : "app__item"} 
              key={index}
              >
                {index === current && (
                  <div className="app__about-carousel-item">
                    {item}
                  </div>
                )}
              </div>
            )
          })}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"  
);