import React from 'react';
import './about.css'

export default (params) => {
  return (
    <div className="about-container">
      <div>
        <h4>What Does a Web Developer Do?</h4>
        <p>
          Web developers are responsible for designing and developing websites and website applications. Using a variety of programming languages and web technologies, web developers manage site functionality, implement application features, and integrate security measures.
        <br /> (I will update this part soon...)
      </p>
      </div>
      <div>
        <h4>Experience with...</h4>
        <p>
          HTML5 CSS3 ReactJS Redux React-Router nodeJS React-Native D3
          HTML CSS nodejs APIs Ajax json Git Router Redux D3.js Bootstrap ExpressJS Photoshop
      </p>
      </div>
      <div>
        <h4>Downloads.</h4>
        <p>
          Download my <a className="resume" href="/pdf/Resume Final Final v2.pdf" target="_blank">Resume &#8595;</a>

        </p>
      </div>
    </div>
  )
}
