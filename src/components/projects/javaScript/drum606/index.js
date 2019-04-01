import React, { Component } from 'react';
import './drum606.css'
import { Link } from 'react-router-dom'

class DrumMachine606 extends Component {

  state = {
    q: 'cymbal8',
    w: 'kick1',
    e: 'kick2',
    a: 'snare1',
    s: 'snare2',
    d: 'tom1',
    z: 'tom2',
    x: 'tom3',
    c: 'tom4',
  }

  handleKeyDown = (key) => {
    if (/[qweasdzxc]/.test(key.key)) {
      if (/[qweasdzxc]/.test(key.key.toLowerCase())) {
        document.getElementById(key.key.toUpperCase()).play();
        document.getElementById('displayDrum').innerHTML = (this.state[key.key]);
      }
    }
  }

  handleClick = (e) => {
    document.getElementById(e.target.id.toUpperCase()).play();
    document.getElementById('displayDrum').innerText = this.state[e.target.id.toLowerCase()];
  }

  render() {
    return (
      <div className="drum-position">
        <div className="drum-container" id="drum-machine">
          <h1>Drum Machine 606 classic</h1>

          <button autoFocus onClick={this.handleClick} onKeyDown={this.handleKeyDown} className="drum-pad" id="q">
            <audio id="Q" className="clip" src="https://firebasestorage.googleapis.com/v0/b/drum-machine-a70b0.appspot.com/o/606-cymbal8.mp3?alt=media&token=734e48bf-3b57-4128-bbdd-673cee84da68" >
            </audio>
            Q</button>
          <button onClick={this.handleClick} onKeyDown={this.handleKeyDown} className="drum-pad" id="w">
            <audio id="W" className="clip" src="https://firebasestorage.googleapis.com/v0/b/drum-machine-a70b0.appspot.com/o/606-kick1.mp3?alt=media&token=17eb844a-1e05-4a25-8d71-6d1e38bd7125" >
            </audio>W</button>
          <button onClick={this.handleClick} onKeyDown={this.handleKeyDown} className="drum-pad" id="e">
            <audio id="E" className="clip" src="https://firebasestorage.googleapis.com/v0/b/drum-machine-a70b0.appspot.com/o/606-kick2.mp3?alt=media&token=055a3e5b-c30e-40cf-a079-25dfe6f662a1" >
            </audio>E</button>
          <button onClick={this.handleClick} onKeyDown={this.handleKeyDown} className="drum-pad" id="a">
            <audio id="A" className="clip" src="https://firebasestorage.googleapis.com/v0/b/drum-machine-a70b0.appspot.com/o/606-snare1.mp3?alt=media&token=fc7dda54-e1c4-4d72-8ebf-70718798ff44" >
            </audio>A</button>
          <button onClick={this.handleClick} onKeyDown={this.handleKeyDown} className="drum-pad" id="s">
            <audio id="S" className="clip" src="https://firebasestorage.googleapis.com/v0/b/drum-machine-a70b0.appspot.com/o/606-snare2.mp3?alt=media&token=091d7a72-8f97-48f3-9330-16928f3d98a5" >
            </audio>S</button>
          <button onClick={this.handleClick} onKeyDown={this.handleKeyDown} className="drum-pad" id="d">
            <audio id="D" className="clip" src="https://firebasestorage.googleapis.com/v0/b/drum-machine-a70b0.appspot.com/o/606-tom1.mp3?alt=media&token=1949ccb5-904a-41cf-86c6-f8df086ab629" >
            </audio>D</button>
          <button onClick={this.handleClick} onKeyDown={this.handleKeyDown} className="drum-pad" id="z">
            <audio id="Z" className="clip" src="https://firebasestorage.googleapis.com/v0/b/drum-machine-a70b0.appspot.com/o/606-tom2.mp3?alt=media&token=42791ff1-c32b-4dee-b2cb-b01f9c153bab" >
            </audio>Z</button>
          <button onClick={this.handleClick} onKeyDown={this.handleKeyDown} className="drum-pad" id="x">
            <audio id="X" className="clip" src="https://firebasestorage.googleapis.com/v0/b/drum-machine-a70b0.appspot.com/o/606-tom3.mp3?alt=media&token=db57206c-ec1a-484d-8ba7-fd464fc6eacf" >
            </audio>X</button>
          <button onClick={this.handleClick} onKeyDown={this.handleKeyDown} className="drum-pad" id="c">
            <audio id="C" className="clip" src="https://firebasestorage.googleapis.com/v0/b/drum-machine-a70b0.appspot.com/o/606-tom4.mp3?alt=media&token=6e26913e-f946-4f0c-a5bf-ca1fddf1785b" >
            </audio>C</button>

          <div id="displayDrum"></div>
          <div className="text-center mt-3 pb-4">
            <button className="btnDrumExit"><Link to="/javascript">EXIT</Link></button>
          </div>
        </div>
      </div>
    )
  }
}


export default DrumMachine606
