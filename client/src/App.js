import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Homepage from "./Homepage";
import ExtensionList from "./extensions/ExtensionList";
import ExtensionOptions from "./extensions/ExtensionOptions";
import TotalTab from "./total/TotalTab";
import NotFound from "./NotFound";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar />
                    <Switch>
                        <Route path="/" exact component={Homepage} />

                        <Route path="/extensions" exact component={ExtensionOptions} />
                        <Route path="/extensions/:category/:subcategory" exact component={ExtensionList} />

                        <Route path="/total" exact component={TotalTab} />

                        <Route component={NotFound} />
                    </Switch>

                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;
