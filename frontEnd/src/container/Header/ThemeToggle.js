import {React, useState} from "react"

const ThemeToggle = (props) => {
// Setting active themebutton to opacity 1
    const [activeThemeButton, setActiveThemeButton] = useState("one");
    const activeStyle = {opacity: 1};

  return (
    <div className="app__header-themetoggle">
        <button onClick={ (e) => {props.setTheme(e); props.playSound(); setActiveThemeButton("one");}}
        id="one"
        className="app__header-themetoggle-button"
        style={activeThemeButton === "one" ? activeStyle : null}
        />
        <button onClick={ (e) => {props.setTheme(e); props.playSound(); setActiveThemeButton("two");}}
        id="two"
        className="app__header-themetoggle-button"
        style={activeThemeButton === "two" ? activeStyle : null}
        />
        <button onClick={ (e) => {props.setTheme(e); props.playSound(); setActiveThemeButton("three");}}
        id="three"
        className="app__header-themetoggle-button"
        style={activeThemeButton === "three" ? activeStyle : null}
        />
        <button onClick={ (e) => {props.setTheme(e); props.playSound(); setActiveThemeButton("four");}}
        id="four"
        className="app__header-themetoggle-button"
        style={activeThemeButton === "four" ? activeStyle : null}
        />
        <button onClick={ (e) => {props.setTheme(e); props.playSound(); setActiveThemeButton("five");}}
        id="five"
        className="app__header-themetoggle-button"
        style={activeThemeButton === "five" ? activeStyle : null}
        />
    </div>
  )
}

export default ThemeToggle;