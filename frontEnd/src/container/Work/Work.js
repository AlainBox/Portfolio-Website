import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import {motion} from "framer-motion";

import {AppWrap, MotionWrap} from "../../wrapper";
import {urlFor, client} from "../../client";
import "./Work.scss";

function Work() {

  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [isRotated, setIsRotated] = useState("");

  useEffect(() => {
    const query = '*[_type == "works"]';


    client.fetch(query)
    .then( (data) => {
      setWorks(data);
      setFilterWork(data);
    })
  }, [])

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{y: 100, opacity: 0}]);

    setTimeout(() => {
      setAnimateCard([{y: 0, opacity: 1}]);

      if(item === "All"){
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text"> My creative <span> Portfolio </span> Section </h2>
      
      <div className="app__work-infotext">
        <p className="p-text">Click once to open card info, click twice to close it up again</p>
      </div>

      <div className="app__work-filter">
        {["Components", "Websites", "Web 3.0", "All"].map( (item, index) => (
          <div
            key={index}
            onClick={() => {handleWorkFilter(item); setIsRotated("")}}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? "item-active" : "" }`}
          >
            {item}
          </div>
          ))}
      </div>

          <motion.div
            animate={animateCard}
            transition={{ duration: 0.5, delayChildren: 0.5 }}
            className="app__work-portfolio"
          >
            {filterWork.map( (work, index) => (
              <div
              className={` ${ isRotated === index ?  "app__work-item app__flex app__rotate" : "app__work-item app__flex"}`}
              key={index} 
              onClick={(e) => {
                const click = e.detail;
                if (click === 1){
                  setIsRotated(index)
                } else if (click === 2){
                  setIsRotated("")
                }
              }}
              >
                
                <div className="app__work-item-front">
                  <div className="app__work-img app__flex">
                    <img src={urlFor(work.imgUrl)} alt={work.name} />
                  </div>

                  <div className="app__work-content app__flex">
                    <h4 className="bold-text">{work.title}</h4>
                    <p  className="app__work-description" style={{marginTop: 10}}>{work.description}</p>
                    <div className="app__work-tag app__flex">
                      <p>{work.tags[0]}</p>
                    </div>
                  </div>
                </div>

                <div className="app__work-item-back">
                  <div className="app__work-item-back-content">
                    <a href={work.projectLink} target="_blank" rel="noreferrer"> <AiFillEye /> </a>
                    <a href={work.projectLink} target="_blank" rel="noreferrer"> <AiFillGithub /> </a>
                  </div>
                  
                  <div className="app__work-content app__flex">
                    <h4 className="bold-text">{work.title}</h4>
                    <p  className="app__work-description" style={{marginTop: 10}}>{work.description}</p>
                    <div className="app__work-tag app__flex">
                      <p>{work.tags[0]}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "work",
  "app__primarybg"  
);