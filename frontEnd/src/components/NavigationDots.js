/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";

const NavigationDots = ({ active }) => (
  <div className="app__navigation">
      {['home', 'about', 'work', 'skills', 'contact'].map( (item, index) => (
              <a
              href={`#${item}`}
              style={ active === item ? {backgroundColor: "var(--tertiary-color)"} : {} }
              key={ item + index }
              className="app__navigation-dot"
              />
      ))}      
  </div>
);

export default NavigationDots;