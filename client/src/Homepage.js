import React, {Component} from "react";
import "./Homepage.css";

class Homepage extends Component {
    render() {
        return (
            <div>
                <div className="bg">
                    <h2 className="center-align title">Welcome!</h2>
                    <p className="center-align txt">
                        Plan you actions ahead easily using TSXYZ! <br />
                        You only need to select the items which you want to buy <br />
                        and then you can see the total cost in the Total tab.
                    </p>
                </div>

                <div className="container">
                    <h3 className="center-align">What is TSXYZ?</h3>
                    <p className="center-align txt-2">TrainStation XYZ is a modern, mobile friendly website which aims to change the way you play Train Station by helping you with the extensions and -maybe in the future- contracts planning.</p>

                    <h4 className="center-align PTitle">How does it work?</h4>
                    <p className="center-align">TSXYZ uses localStorage to store the items which you selected meaning that if you close your browser and/or PC, when you visit the website again the same items will remain checked. Because of this you can use the website like a check list for the extensions which you want to buy. Pressing the CLEAR button from the Total tab will clear everything which was stored in localStorage. <br />
                        <em>Note: If you use a browser which doesn't keep track of your history(eg: Firefox Focus), incognito mode or you open the website in other broswer than the one when you selected the items, the website won't be able to load the items saved previously.</em>
                    </p>

                    <h4 className="center-align PTitle">Why aren't the contracts available?</h4>
                    <p className="center-align">It takes time to make a project like this. Only this simple version took over 50 hours of work. To just add the >1100 contracts(at the moment) in the database will take me a week and that's without any coding. Programming the way contracts are going to "stack" together will also take some time. I don't have any plans to add them in the next months, the only update which I do want to finish is the Simulate tab.
                    </p>

                    <h4 className="center-align PTitle">How can I help?</h4>
                    <p className="center-align">If you are interested in supporting this project please send me an email at: <em>lionel.developer72@gmail.com</em></p>
                </div>
            </div>
        );
    }
}

export default Homepage;
