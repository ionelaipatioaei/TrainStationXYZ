import React, {Component} from "react";
import "./NotFound.css";

import {Link} from "react-router-dom";

class NotFound extends Component {
    render() {
        return (
            <div>
                <div className="imgBg">
                    <div className="container">
                        <h2 className="center-align notFoundTxt">The page which you requested was not found or there was a network error!</h2>
                        <p className="center-align txt">
                            Go back to the homepage <br />
                            {/* <a className="btn btn-custom btn-large secondaryColor waves-effect waves-light" href="/">Homepage</a> */}
                            <Link className="btn btn-custom btn-large secondaryColor waves-effect waves-light" to="/">Homepage</Link>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default NotFound;