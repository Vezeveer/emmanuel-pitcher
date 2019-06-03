import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

class UnderConstructionPS extends Component {
  render() {
    return (
      <div className="main-ucps">
        This photoshop section might take upto 5mb of your traffic. Just a heads up. <br /><br />

        <Link to="/photoshopRedirect">
          <button>Continue</button>
        </Link>
      </div>
    )
  }
};

export default UnderConstructionPS;
