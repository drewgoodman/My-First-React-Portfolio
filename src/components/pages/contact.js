import React, { Component } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import contactPicture from "../../../static/assets/images/contact/contact.png";

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
                        background: "url(" + contactPicture + ") no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}
                >
                </div>
                <div className="right-column">

                    <div className="contact-bullet-points">
                        <div className="bullet-point-group">
                            <div className="icon">
                                <FontAwesomeIcon icon="phone" />
                            </div>
                            <div className="text">
                                555-555-5555
                            </div>
                        </div>
                        <div className="bullet-point-group">
                            <div className="icon">
                                <FontAwesomeIcon icon="envelope" />
                            </div>
                            <div className="text">
                                email12345@gmail.com
                            </div>
                        </div>
                        <div className="bullet-point-group">
                            <div className="icon">
                                <FontAwesomeIcon icon="map-marked-alt" />
                            </div>
                            <div className="text">
                                Portland, OR
                            </div>
                        </div>
                    </div>

                    {/* <div className="contact-type-wrapper">
                    <FontAwesomeIcon className="contact-icon" icon="phone-square" fixedWidth />
                    555-555-5555
                    </div>
                    <div className="contact-type-wrapper">
                    <FontAwesomeIcon className="contact-icon" icon="envelope-square" fixedWidth />
                    email@gmail.com
                    </div>
                    <div className="contact-spacer" />
                    <div className="contact-type-wrapper">
                    <FontAwesomeIcon className="contact-icon" icon={['fab', 'facebook-square']} fixedWidth />
                    Facebook Profile
                    </div>
                    <div className="contact-type-wrapper">
                    <FontAwesomeIcon className="contact-icon" icon={['fab', 'linkedin']} fixedWidth />
                    LinkedIn Profile
                    </div>
                    <div className="contact-spacer" />
                    <div className="contact-type-wrapper">
                    <FontAwesomeIcon className="contact-icon" icon={['fab', 'github-square']} fixedWidth />
                    Github Account
                    </div> */}
                </div>
            </div>
        )
    }
}

// TO IMPORT 
import {
    faLinkedin
} from "@fortawesome/free-brands-svg-icons";

// TO USE
<FontAwesomeIcon icon={['fab', 'linkedin']} />