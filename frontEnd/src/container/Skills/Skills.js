import React, { useState, useEffect } from "react";
import {motion} from "framer-motion";
import { Tooltip } from "@mui/material";

import {AppWrap, MotionWrap} from "../../wrapper";
import {urlFor, client} from "../../client";

import "./Skills.scss";

function Skills() {

  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query)
    .then( (experienceData) => {
      setExperiences(experienceData);
    })

    client.fetch(skillsQuery)
    .then( (skillsData) => {
      setSkills(skillsData);
    })
  }, [])

  return (
    <>
      <h2 className="head-text">Skills <span>&</span> Experience</h2>

      <div className="app__skills-infotext">
        <p className="p-text">Hover skills to view proficiency, hover experiences to view info</p>
      </div>

      <div className="app__skills-container">
      <motion.div className="app__skills-list">
        {skills.map( (skill) => (
          <>
            <Tooltip 
            title={<h1 style={{fontSize: "1rem", padding: ".3rem"}}>{skill.proficiency}</h1>}
            placement="top"
            arrow
            enterDelay={500}
            >
              <motion.div
              whileInView={{opacity: [0, 1]}}
              transition={{duration: 0.5}}
              className="app__skills-item app__flex"
              data-tip
              data-for={skill.name}
              key={skill.name}
              >
                <div className="app__flex" style={{backgroundColor: skill.bgColor}}>
                  <img src={urlFor(skill.icon)} alt={skill.name} />
                </div>
                <p className="app__skills-text">{skill.name}</p>
              </motion.div>
            </Tooltip>
          </>
        ))}
      </motion.div>

      <motion.div className="app__skills-exp">
      {experiences.map((experience) => (
        <motion.div
        className="app__skills-exp-item"
        key={experience.year}
        >
          <div className="app__skills-exp-year">
            <p className="bold-text">{experience.year}</p>
          </div>

          <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <>
                    <Tooltip
                      title={<h1 style={{fontSize: "1rem", padding: ".3rem"}}>{work.desc}</h1>}
                      placement="top"
                      arrow
                      enterDelay={500}
                    >
                      <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}
                        className="app__skills-exp-work"
                        key={work.name}
                      >
                        <h4 className="bold-text">{work.name}</h4>
                        <p className="p-text">{work.company}</p>
                      </motion.div>
                    </Tooltip>
                  </>
                ))}
              </motion.div>
        </motion.div>
      ))}
      </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"  
);