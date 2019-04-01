
import React from 'react'
import './home.css'

const Home = () => {
  return (
    <div className="home-position">
      <header className="home-container">
        <div className="logo-lvl-1">
          <div className="logo-lvl-2">
            <h4>Hi, I'm</h4>
            <img className="ep-logo" src="./imgs/ep_logo.svg" alt="logo" />
            <h4>And I am A Web Developer</h4>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Home