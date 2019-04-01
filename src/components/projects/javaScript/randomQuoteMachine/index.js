import React, { Component } from 'react';
import './rqm.css'
import { Link } from 'react-router-dom'

class RandomQuoteMachine extends Component {
  state = {
    quote: 'Getting quote from server...',
    author: '',
    colors: [
      'primary', 'secondary', 'success', 'danger', 'warning', 'info'
    ],
    currentColor: 'primary'
  }
  getQuote = () => {
    fetch("https://api.myjson.com/bins/l8o22")
      .then(res => res.json())
      .then((data) => {
        const quote = data.quotes[Math.floor(Math.random() * 100)];
        this.setState({
          author: quote.author,
          quote: quote.quote
        });
      });

  }
  handleClick = () => {
    this.getQuote()
    this.colorChange()
  }
  componentDidMount() {
    this.getQuote()
    this.colorChange()
  }
  colorChange = () => {
    const color = this.state.colors[Math.floor(Math.random() * 5)]
    this.setState({
      currentColor: color
    })
  }
  render() {
    return (
      <div className="rqm-position">
        <div className="rqm-container" id="quote-box" className={"col-md-6 card bg-" + this.state.currentColor}>
          <div className="rqm-quote">
            <p id="text" className="blockquote card-text text-quote"><span id="span-qt">"</span>{this.state.quote}
            </p>
            <p id="author" className="text-right card-subtitle">- {this.state.author}</p>
          </div>
          <p className="btnRQM text-center mt-3 pb-4">
            <button id="new-quote" onClick={this.handleClick} className="btn btn-primary">Next Quote</button>
            <br />
            <br />
            <Link to="/javascript"><button className="btn btn-danger">EXIT</button></Link>
          </p>
        </div>
      </div>
    )
  }
}

export default RandomQuoteMachine