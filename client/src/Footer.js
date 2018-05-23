import React, {Component} from "react";
import "./Footer.css";

class Footer extends Component {
    render() {
        return (
            <footer className="page-footer mainColor">
                <div className="container">
                    <div className="row">
                        <div className="col s12 center-align">
                            <h5>TrainStation website for dedicated players</h5>
                            <a className="btn btn-custom secondaryColor waves-effect waves-light" href="https://portal.pixelfederation.com/trainstation/" target="_blank" rel="noopener noreferrer">Play TrainStation</a>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container">
                        <div className="no-margin center-align">
                            Created by Ionel Aipatioaei
                            <p className="no-margin"><a href="http://www.ionelaipatioaei.com">portfolio</a> | <a href="https://github.com/ionelaipatioaei/TrainStationXYZ">github</a></p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
