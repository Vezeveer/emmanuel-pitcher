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

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="bg">
          <img className="left" src="/imgs/left-part.jpg" alt="" />
          <img className="right" src="/imgs/right-part.jpg" alt="" />
          <div className="bg-gradient"></div>
        </div>
        <Router>
          <div className="container">
            <div className="menu-container">
              <div className="menu-position">
                <Link to="/"><div className="menu">Home</div></Link>
                <Link to="/about"><div className="menu">About</div></Link>
                <Link to="/projects"><div className="menu">Projects</div></Link>
                <Link to="/photoshop"><div className="menu">Photoshop</div></Link>
                <Link to="/contact"><div className="menu">Contact</div></Link>
              </div>
            </div>
            <div className="display-container">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/photoshop" component={Photoshop} />
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
