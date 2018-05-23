import React, {Component} from "react";
import "./Navbar.css";

class Navbar extends Component {
    render() {
        return (
            <div>
                <div className="navbar-fixed">
                    <nav className="z-depth-3 mainColor">

                        <div className="container nav-wrapper">
                            <a href="/" className="brand-logo left"><span id="pageTitle">TrainStation XYZ</span><span id="pageTitleAlt">TSX</span></a>

                            <ul className="right">
                                <li><a href="/extensions"><i className="material-icons iconPos left large">extension</i><span className="tabText">Extensions</span></a></li>
                                <li><a className="navDisabled" href="/contracts"><i className="material-icons iconPos left large">assignment_ind</i><span className="tabText">Contracts</span></a></li>
                                <li><a className="navDisabled" href="/simulate"><i className="material-icons iconPos left large">trending_up</i><span className="tabText">Simulate</span></a></li>
                                <li><a href="/total"><i className="material-icons iconPos left large">shopping_cart</i><span className="tabText">Total</span></a></li>
                            </ul>

                        </div>
                    </nav>

                </div>
            </div>
        );
    }
}

export default Navbar;
