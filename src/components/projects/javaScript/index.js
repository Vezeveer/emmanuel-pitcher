import React from 'react';
import { Link } from 'react-router-dom'
import './javaScript.css'

export default () => {
  return (
    <div className="js-body">
      <h3 id="projects">JavaScript Projects</h3>
      <section className="p1-wrapper">
        <Link to="/pomodoro">
          <div className="p1 p1-pomodoro">
            <div className="p1-bg"></div>
            <div className="p1-items">
              <img width="50px" src="/imgs/pomo-clock.jpg" alt="" />
              <div className="p1-label">Pomodoro</div>
            </div>
          </div>
        </Link>
        <Link to="/calculator">
          <div className="p1 p1-calc">
            <div className="p1-bg"></div>
            <div className="p1-items">
              <img width="50px" src="/imgs/calc-logo.jpg" alt="" />
              <div className="p1-label">Calculator</div>
            </div>
          </div>
        </Link>
        <Link to="/drum606">
          <div className="p1 p1-drum">
            <div className="p1-bg"></div>
            <div className="p1-items">
              <img width="50px" src="/imgs/Beat-Machine-logo.jpg" alt="" />
              <div className="p1-label">Drum Machine</div>
            </div>
          </div>
        </Link>
        <Link to="/randomquotemachine">
          <div className="p1 p1-rqm">
            <div className="p1-bg"></div>
            <div className="p1-items">
              <img width="50px" src="/imgs/quotes.png" alt="" />
              <div className="p1-label">Random Quote Machine</div>
            </div>
          </div>
        </Link>
        <Link to="/wordbeater">
          <div className="p1 p1-wordbeater">
            <div className="p1-bg"></div>
            <div className="p1-items">
              <img width="50px" src="/imgs/wordbeater-logo.jpg" alt="" />
              <div className="p1-label">Word Beater</div>
            </div>
          </div>
        </Link>
        <div className="p1">
          D3 Barchart
                </div>
        <div className="p1">
          Markdown Previewer
                </div>
      </section>
    </div>
  )
};
