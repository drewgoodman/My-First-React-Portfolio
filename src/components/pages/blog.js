import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class extends Component {
  constructor(props) {
      super(props)

      this.state = {
          
      }
  }

  render() {
      return (
          <div>
            <h2>My Blog</h2>
              <div>
                  <Link to="/about-me">Read more about myself</Link>
              </div>
          </div>
      );
  }
}