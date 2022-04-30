import React from "react";

const Person = () => {
  return (
    <>
        <div className="app__about-object">
            <pre>
              <span className="app__about-object-const">let</span> <span className="app__about-object-key"> person </span> = <span className="app__about-object-curly"> new </span> <span className="app__about-object-key">Object()</span> ;<br />
              <span className="app__about-object-key">person.firstName</span> = <span className="app__about-object-value">"alain"</span> ; <br />
              <span className="app__about-object-key">person.lastName</span> = <span className="app__about-object-value">"box"</span> ; <br />
              <span className="app__about-object-key">person.age</span> = <span className="app__about-object-value-age">25</span> ; <br />
              <span className="app__about-object-key">person.gender</span> = <span className="app__about-object-value">"male"</span> ; <br />
              <span className="app__about-object-key">person.favoriteFood</span> = <span className="app__about-object-value">"indian"</span> ; <br />
            </pre>
        </div>

        <div className="app__about-content">
            <p>
            My name is Alain Box, I am 25 years old and live in Haarlem, The Netherlands.
            I am an enthusiastic, spontaneous guy with a lot of perseverance and ambition.
            I come from a background of hospitality, but in the summer of 2021, I decided to take the leap and become a Full-Stack Web Developer.
            <br />
            Now that I am done, I am ready to take on the first adventure!
            </p>
        </div>
    </>
  )
}

export default Person;