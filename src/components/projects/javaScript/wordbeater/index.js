import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './css/styles.css'

class WordBeater extends Component {

  state = {
    words: [],
    difficulty: 10,
    score: 0,
    isPlaying: true,
    currentWord: '',
    isEmpty: true,
    winner: false,
    lose: false,
    timeLeft: 10,
    highestScore: 0,
  }

  componentWillMount() {
    if (this.state.isEmpty) {
      fetch('/data/words.json')
        .then(res => res.json())
        .then(data => {
          this.setState({
            words: data,
            isEmpty: false
          })
          this.getRandomWord()
        })
    }
  }

  componentDidMount() {
    this.countDown()
  }

  handleChange = (e) => {
    e.preventDefault()
    if (e.target.value === this.state.randomWord) {
      this.wordMatch()
      this.getRandomWord()
      e.target.value = ''
    }
    this.setState({
      currentWord: e.target.value
    })

  }

  wordMatch = () => {
    if (this.state.isPlaying) {
      this.setState({
        winner: true,
        timeLeft: this.state.difficulty,
        score: this.state.score + 1
      })
    } else {
      this.setState({
        timeLeft: this.state.difficulty,
        isPlaying: true
      })
    }
    setTimeout(() => this.setState({
      winner: false
    }), 3000)
  }

  getRandomWord = (e) => {
    let randomIndex = Math.floor(Math.random() * this.state.words.length);
    this.setState({
      randomWord: this.state.words[randomIndex]
    })
  }

  countDown = () => {
    setInterval(() => {
      let { score, highestScore, timeLeft } = this.state
      if (timeLeft > 0) {
        this.setState({
          timeLeft: timeLeft - 1
        })
      }
      if (timeLeft === 0) {
        if (score > highestScore) {
          this.setState({
            highestScore: score
          })
        }
        if (this.state.score > 0) {
          this.setState({
            lose: true,
            score: 0,
            isPlaying: false
          })
        }
        setTimeout(() => this.setState({
          lose: false
        }), 3000)
      }
    }, 1000)
  }

  handleDifficulty = (e) => {
    let difficulty = 10
    switch (e.target.innerHTML) {
      case 'Easy':
        difficulty = 10;
        break;
      case 'Medium':
        difficulty = 6;
        break;
      case 'Hard':
        difficulty = 3;
        break;
      default:
        break;
    }
    this.setState({
      difficulty: difficulty
    })
  }

  render() {
    const { difficulty } = this.state
    return (
      <div className="word-beater-container">
        <div className="main-container">
          <div className="wb-container">
            <h1>Word Beater</h1>
          </div>
          <p>Type The Given Word Within <span className="time-left">{difficulty}</span> Seconds</p>
          <h1 className="word">{this.state.randomWord}</h1>
          <form>
            <input onChange={this.handleChange}
              value={this.state.currentWord}
              className="word-input"
              type="text"
              placeholder="start typing..."
              autoFocus />
          </form>
          <div className="msg-container">
            {this.state.winner && <div className="message">Correct!</div>}
            {this.state.lose && <div className="message">GameOver!</div>}
          </div>
          <p>Time Left: <span className="time">{this.state.timeLeft}</span></p>
          <p>Score: <span className="score">{this.state.score}</span></p>
          <p>High Score: {this.state.highestScore}</p>

          <h6>Difficulty:</h6>
          <button onClick={this.handleDifficulty}>Easy</button>
          <button onClick={this.handleDifficulty}>Medium</button>
          <button onClick={this.handleDifficulty}>Hard</button>
          <div className="instruct-container">
            <h3>Instructions</h3>
            <p>Type each word in the given amount of seconds to score.
              To play again just type the current word.
        Your score will reset.</p>
            <br />
            <Link to="/javascript"><button>Exit</button></Link>
          </div>

        </div>
      </div>
    );
  }
}



export default WordBeater;
