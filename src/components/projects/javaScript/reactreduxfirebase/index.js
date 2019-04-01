import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux'
import store from './store'

import Posts from '../../Posts'
import Postform from '../../Postform'


class Firebase extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Postform />
          <br />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default Firebase;