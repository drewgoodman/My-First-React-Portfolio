import React, { Component } from 'react'
import profilePicture from "../../../static/assets/images/bio/profile.jpg";

export default class extends Component {
  constructor(props) {
      super(props)

      this.state = {
          
      }
  }

  render() {
      return (
          <div className="content-page-wrapper">
              <div
                className="left-column"
                style={{
                    background: "url(" + profilePicture + ") no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
                >

                </div>
              <div className="right-column">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam placeat iure enim sapiente ducimus fugit eos tenetur impedit, repudiandae maiores sunt voluptatem mollitia fugiat deserunt cum earum modi a necessitatibus repellat quod iste consequatur aperiam itaque. Nostrum provident facere iste ea officia odit perferendis blanditiis, magni amet ex ipsa aspernatur neque repellendus quo quam sunt praesentium? Sunt necessitatibus facilis reprehenderit ipsum saepe odio quaerat, nemo placeat ducimus aliquid. Corrupti, quisquam.
              </div>
          </div>
      )
  }
}