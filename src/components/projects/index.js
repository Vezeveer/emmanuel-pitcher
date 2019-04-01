import React from 'react';
import { Link } from 'react-router-dom'
import './projects.css'

export default () => {
  return (
    <div className="projects-container">
      <div className="p-div-collection">
        <Link to="/javascript">
          <div className="p-div">
            <div className="p-img">
              <img src="/imgs/jslogo.png" alt="" />
            </div>
            JavaScript
        </div>
        </Link>
        <div className="p-div">
          <div className="p-img">
            <img src="/imgs/globe-solid.svg" alt="" />
          </div>
          Web
        </div>
        <div className="p-div">
          <div className="p-img">
            <img src="/imgs/space-invader.svg" alt="" />
          </div>
          Games
        </div>
        <div className="p-div">
          <div className="p-img">
            <img src="/imgs/trash-alt-regular.svg" alt="" />
          </div>
          simple Web
        </div>
      </div>
    </div>
  )
}
