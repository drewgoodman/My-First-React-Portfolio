import React, { Component } from 'react'

import PortfolioContainer from '../portfolio/portfolio-container';

export default class extends Component {
  constructor(props) {
      super(props)

      this.state = {
          
      }
  }

  render() {
      return (
          <div>
             {/* <h2>Homepage</h2> */}
             <PortfolioContainer />
          </div>
      );
  }
}