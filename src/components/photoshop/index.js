import React, { Component } from 'react';
import './photoshop.css';

export default class Photoshop extends Component {
  state = {
    tSmall: null,
    tMedium: 'toggled',
    tLarge: null,
    pAnime: 'p-md',
    imgSize: 'iMedium'
  }

  // REFACTOR these please...

  toggleSmall = () => {
    this.setState({
      tSmall: 'toggled',
      tMedium: null,
      tLarge: null,
      pAnime: 'p-sm',
      imgSize: 'iSmall'
    })
  }
  toggleMedium = () => {
    this.setState({
      tSmall: null,
      tMedium: 'toggled',
      tLarge: null,
      pAnime: 'p-md',
      imgSize: 'iMedium'
    })
  }
  toggleLarge = () => {
    this.setState({
      tSmall: null,
      tMedium: null,
      tLarge: 'toggled',
      pAnime: 'p-lg',
      imgSize: 'iLarge'
    })
  }

  render() {
    return (
      <div className="photoshop-container">
        <div className="toggles">
          <div>
            <svg onClick={this.toggleLarge} className={`small ${this.state.tLarge}`} width="24" height="24">
              <rect x="0" y="0" width="24" height="24" />
            </svg>
          </div>
          <div>
            <svg onClick={this.toggleMedium} className={`medium ${this.state.tMedium}`} width="24" height="24">
              <rect x="0" y="0" width="24" height="24" />
              <line x1="12" y1="0" x2="12" y2="24" />
              <line x1="0" y1="12" x2="24" y2="12" />
            </svg>
          </div>
          <div>
            <svg onClick={this.toggleSmall} className={`large ${this.state.tSmall}`} width="24" height="24">
              <rect x="0" y="0" width="24" height="24" />
              <line x1="0" y1="8" x2="24" y2="8" />
              <line x1="0" y1="16" x2="24" y2="16" />
              <line x1="8" y1="0" x2="8" y2="24" />
              <line x1="16" y1="0" x2="16" y2="24" />
            </svg>
          </div>
          <p className={this.state.pAnime}></p>
        </div>
        <div className={`image-collection ${this.state.imgSize}`}>
          <div className="column">
            <img src="/imgs/photoshop/1.jpg" alt="" />
            <img src="/imgs/photoshop/2.jpg" alt="" />
            <img src="/imgs/photoshop/3.jpg" alt="" />
            <img src="/imgs/photoshop/4.jpg" alt="" />
            <img src="/imgs/photoshop/5.png" alt="" />
            <img src="/imgs/photoshop/6.jpg" alt="" />
          </div>
          <div className="column">
            <img src="/imgs/photoshop/7.jpg" alt="" />
            <img src="/imgs/photoshop/8.jpg" alt="" />
            <img src="/imgs/photoshop/9.jpg" alt="" />
            <img src="/imgs/photoshop/10.jpg" alt="" />
            <img src="/imgs/photoshop/11.jpg" alt="" />
            <img src="/imgs/photoshop/12.jpg" alt="" />
          </div>
          <div className="column">
            <img src="/imgs/photoshop/13.jpg" alt="" />
            <img src="/imgs/photoshop/14.jpg" alt="" />
            <img src="/imgs/photoshop/15.jpg" alt="" />
            <img src="/imgs/photoshop/16.jpg" alt="" />
            <img src="/imgs/photoshop/17.jpg" alt="" />
            <img src="/imgs/photoshop/18.jpg" alt="" />
          </div>
        </div>
      </div>
    )
  }
}
