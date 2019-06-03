import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Home from './components/home'
import About from './components/about'
import Projects from './components/projects'
import Photoshop from './components/photoshop'
import Contact from './components/contact'
import Javascript from './components/projects/javaScript'

import Pomodoro from './components/projects/javaScript/pomodoro'
import Calculator from './components/projects/javaScript/calculator'
import Drum606 from './components/projects/javaScript/drum606'
import RandomQuoteMachine from './components/projects/javaScript/randomQuoteMachine'
import WordBeater from './components/projects/javaScript/wordbeater'
import './css/App.css'

import UnderConstructionPS from './components/underconstructionps'
import UnderConstructionAbout from './components/under_construction_about'

class App extends Component {

  state = {
    toggleName: null
  }

  toggleMenuClass = (e) => {
    function checkIfToggled(bName) {
      switch (bName) {
        case `${bName}`:
          document.querySelector(`.${bName.toLowerCase()}`)
            .classList = `menu ${bName.toLowerCase()}`;
          break;
        default:
          break;
      }
    }
    if (this.state.toggleName !== '') {
      checkIfToggled(this.state.toggleName)
    }
    this.setState({
      toggleName: e.target.innerHTML
    })
    e.target.classList.toggle('menu-active')
  }

  render() {
    return (
      <div className="App">
        <div className="bg">
          <img className="left" src="/imgs/left-part.jpg" alt="" />
          <img className="right" src="/imgs/right-part.jpg" alt="" />
          <div className="bg-gradient"></div>
        </div>
        <Router>
          <div className="menu-and-bg-container">
            <div className="menu-container">
              <div className="menu-position">
                {/*<Link to="/"><div onClick={this.toggleMenuClass} className="menu home">Home</div></Link>*/}
                <Link to="/about"><div onClick={this.toggleMenuClass} className="menu about">About</div></Link>
                <Link to="/projects"><div onClick={this.toggleMenuClass} className="menu projects">Projects</div></Link>
                <Link to="/photoshop"><div onClick={this.toggleMenuClass} className="menu photoshop">Photoshop</div></Link>
                <Link to="/contact"><div onClick={this.toggleMenuClass} className="menu contact">Contact</div></Link>
              </div>
              <div className="menu-footer">
                <p>2019 &copy; Emmanuel Pitcher | mortalmanny@live.com</p>
              </div>
            </div>
            <div className="display-container">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={UnderConstructionAbout} /> {/*under construction*/}
                <Route exact path="/aboutRedirect" component={About} /> {/*delete later*/}
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/photoshop" component={UnderConstructionPS} /> {/*under construction*/}
                <Route exact path="/photoshopRedirect" component={Photoshop} /> {/*delete later */}
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/javascript" component={Javascript} />
                <Route exact path="/pomodoro" component={Pomodoro} />
                <Route exact path="/calculator" component={Calculator} />
                <Route exact path="/drum606" component={Drum606} />
                <Route exact path="/randomquotemachine" component={RandomQuoteMachine} />
                <Route exact path="/wordbeater" component={WordBeater} />
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
