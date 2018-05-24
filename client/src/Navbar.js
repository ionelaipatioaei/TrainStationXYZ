import React, {Component} from "react";
import "./Navbar.css";

import {Link} from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <div>
                <div className="navbar-fixed">
                    <nav className="z-depth-3 mainColor">

                        <div className="container nav-wrapper">
                            {/* Very important! Use <Link> instead of <a>! */}

                            {/* <a href="/" className="brand-logo left"><span id="pageTitle">TrainStation XYZ</span><span id="pageTitleAlt">TSX</span></a> */}
                            <Link className="brand-logo left" to="/"><span id="pageTitle">TrainStation XYZ</span><span id="pageTitleAlt">TSX</span></Link>

                            <ul className="right">
                                {/* <li><a href="/extensions"><i className="material-icons iconPos left large">extension</i><span className="tabText">Extensions</span></a></li> */}
                                <li><Link to="/extensions"><i className="material-icons iconPos left large">extension</i><span className="tabText">Extensions</span></Link></li>
                                {/* <li><a className="navDisabled" href="/contracts"><i className="material-icons iconPos left large">assignment_ind</i><span className="tabText">Contracts</span></a></li> */}
                                <li><Link className="navDisabled" to="/contracts"><i className="material-icons iconPos left large">assignment_ind</i><span className="tabText">Contracts</span></Link></li>
                                {/* <li><a className="navDisabled" href="/simulate"><i className="material-icons iconPos left large">trending_up</i><span className="tabText">Simulate</span></a></li> */}
                                <li><Link className="navDisabled" to="/simulate"><i className="material-icons iconPos left large">trending_up</i><span className="tabText">Simulate</span></Link></li>
                                {/* <li><a href="/total"><i className="material-icons iconPos left large">shopping_cart</i><span className="tabText">Total</span></a></li> */}
                                <li><Link to="/total"><i className="material-icons iconPos left large">shopping_cart</i><span className="tabText">Total</span></Link></li>
                            </ul>

                        </div>
                    </nav>

                </div>
            </div>
        );
    }
}

export default Navbar;
