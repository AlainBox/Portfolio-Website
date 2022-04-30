/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from "react";

import "./Navbar.scss"

function Navbar() {

    const [isOpen, setIsOpen] = useState("");

  return (
    <nav className="app__navbar">
        <a href="/" style={{textDecoration: "none"}}><div className="app__navbar-logo">
            <h1> AKB </h1>
        </div></a>

        <div className="app__navbar-menu">
            <div id="wrapper" onClick={() => setIsOpen(!isOpen)}>
                <div className="circle">
                    <span className={`line-top top ${isOpen && "rotate-top"}`}></span>
                    <span className={`line-bottom bottom ${isOpen && "rotate-bottom"}`}></span>
                </div>
            </div>
    
        {isOpen && (
            <div className="app__navbar-dropdown">
                <div className="app__navbar-ul">
                    <ul>
                        {['home', 'about', 'work', 'skills', 'contact'].map(item => (
                        <li key={item}>
                            <a
                            href={`#${item}`}
                            onClick={() => setIsOpen(!isOpen)}
                            >{item}</a>
                        </li>
                        ))}
                    </ul>
                </div>


                <div className="app__navbar-cards">
                    <div className="app__navbar-card">
                    <a
                    href="mailto:alainkeesbox@gmail.com"
                    className="p-text"
                    > alainkeesbox@gmail.com
                    </a>
                    </div>

                    <div className="app__navbar-card">
                    <a href="tel:+31 636013381" className="p-text">+31 636013381</a>
                    </div>
                </div>
                <div className="app__navbar-social">
                    <div className="app__navbar-social-item">
                        <a href="https://github.com/AlainBox">GH</a>
                        <a href="https://nl.linkedin.com/in/alain-box-a0a9431b4">LI</a>
                        <a href="https://www.instagram.com/alain_box/">IG</a>
                    </div>
                </div>
            </div>
            )}
        </div>
    </nav>
  );
};

export default Navbar;