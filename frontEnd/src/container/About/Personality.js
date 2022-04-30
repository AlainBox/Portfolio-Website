import React from "react";

const Personality = () => {
  return (
    <>
        <div className="app__about-object">
            <pre>
              <span className="app__about-object-const">const</span> <span className="app__about-object-key"> personalityTraits </span> = <span className="app__about-object-curly">[</span> <br />
              &nbsp;<span className="app__about-object-value">"outgoing"</span>, <br />
              &nbsp;<span className="app__about-object-value">"creative"</span>, <br />
              &nbsp;<span className="app__about-object-value">"organized"</span>, <br />
              &nbsp;<span className="app__about-object-value">"funny"</span> <br />
              &nbsp;<span className="app__about-object-curly">]</span>;
            </pre>
        </div>

        <div className="app__about-content">
            <p>
            I would describe myself as a creative, driven and outgoing person. I love a challenge and I never back down from helping others.
            I'm also very passionate about my work and always strive for greatness. Motivation is not an issue, since I love what I do.
            For me the most important thing in this world is efficiency. That's why I love to be organised both at the job and in my personal life.
            <br />
            Or in short: You can always count on me!
            </p>
        </div>
    </>
  )
}

export default Personality;