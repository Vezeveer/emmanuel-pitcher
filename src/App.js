import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Home from './components/home'
import About from './components/about'
import Projects from './components/projects'
import Photoshop from './components/photoshop'
import Contact from './components/contact'
import './css/App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="bg">
          <img className="left" src="/imgs/left-part.jpg" alt="" />
          <img className="right" src="/imgs/right-part.jpg" alt="" />
        </div>
        <Router>
          <div className="container">
            <div className="menu-container">
              <div className="menu-position">
                <Link to="/"><div className="menu">Home</div></Link>
                <Link to="/about"><div className="menu">About</div></Link>
                <div className="menu">Projects</div>
                <div className="menu">Photoshop</div>
                <div className="menu">Contact</div>
              </div>
            </div>
            <div className="display-container">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/photoshop" component={Photoshop} />
                <Route exact path="/contact" component={Contact} />
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
