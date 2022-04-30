import React from "react";

const Hobbies = () => {
  return (
    <>
        <div className="app__about-object">
            <pre>
              <span className="app__about-object-const">const</span> <span className="app__about-object-key"> hobbies </span> = <span className="app__about-object-curly">&#123;</span><br />
              &nbsp;&nbsp;&nbsp; <span className="app__about-object-key">travelling</span>: &#123; rating: <span className="app__about-object-value-age">9</span>, isInteresting: <span className="app__about-object-value">true</span> &#125;, <br />
              &nbsp;&nbsp;&nbsp; <span className="app__about-object-key">reading</span>: &#123; rating: <span className="app__about-object-value-age">7</span>, isInteresting: <span className="app__about-object-value">true</span> &#125;, <br />
              &nbsp;&nbsp;&nbsp; <span className="app__about-object-key">going out</span>: &#123; rating: <span className="app__about-object-value-age">8.5</span>, isInteresting: <span className="app__about-object-value">true</span> &#125;, <br />
              &nbsp;&nbsp;&nbsp; <span className="app__about-object-key">coding</span>: &#123; rating: <span className="app__about-object-value-age">10</span>, isInteresting: <span className="app__about-object-value"> super true</span> &#125;, <br />
              &nbsp;<span className="app__about-object-curly">&#125;</span>;
            </pre>
        </div>

        <div className="app__about-content">
            <p>
            Whenever I am not working, sleeping or eating (&larr; love this) I like to read, hit the gym or go out with friends.
            I also love to travel and learn new languages.
            I speak 4 languages and at the moment I am learning Spanish.
            I have a cat (Tom) and a girlfriend (Julia), with whom I spend a lot of time.
            <br />
            Lastly, I, of course, LOVE to code!
            </p>
        </div>
    </>
  )
  }

export default Hobbies;