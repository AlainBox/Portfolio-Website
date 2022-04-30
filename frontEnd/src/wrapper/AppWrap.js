import React from "react";
import {NavigationDots} from "../components";

// Render current year, so page is always up to date
const currentYear = new Date().getFullYear();

const AppWrap = (Component, idName, classNames) => function HOC() {
  return (
    <div id={idName} className={`app__container ${classNames}`}>

        <div className="app__wrapper app__flex">
            <Component />

            <div className={idName === "home" ? "app__display-none" : "app__display"}>
                <p className="copyright-text"> &copy; {currentYear} </p>
            </div>
        </div>
        <NavigationDots active={idName} />
    </div>
  )
}

export default AppWrap