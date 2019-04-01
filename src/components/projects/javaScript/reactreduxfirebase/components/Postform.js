import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createPost } from '../../../../actions/postActions'

class Postform extends Component {
  state = {
    title: '',
    body: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const post = {
      title: this.state.title,
      body: this.state.body
    }

    this.props.createPost(post)
  }

  render() {
    return (
      <div>
        <h3>Add Post</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Title: </label>
          <input type="text" name="title" onChange={this.handleChange}></input>
          <br />
          <br />
          <label>Body: </label>
          <textarea type="text" name="body" onChange={this.handleChange}></textarea>
          <br />
          <button type="submit">submit</button>
        </form>
      </div>
    )
  }
}

Postform.propTypes = {
  createPost: PropTypes.func.isRequired,
}

export default connect(null, { createPost })(Postform)