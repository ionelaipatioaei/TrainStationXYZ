import React, {Component} from "react";
import "./ExtensionOptions.css";

class ExtensionOptions extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">

                    <div className="col s12 m6 l4">
                        <div className="card">
                            <div className="card-image">
                                <img alt="local slot" src="/extensions/localSlot.png" />
                            </div>
                            <div className="card-content options">
                                <span className="card-title ">Slots</span>
                                <p>Slots determine how many trains a player can have running at once(local and international) or stationary(depot).</p>
                            </div>
                            <div className="card-action center-align">
                                <button className="btn btn-custom secondaryColor activator">See Upgrades</button>
                            </div>
                            <div className="card-reveal center-align">
                                <span className="card-title grey-text text-darken-4">Select a Subcategory<i className="material-icons right">close</i></span>
                                <p className="left-align">The more lines you have the better!</p>
                                <a className="btn btn-custom secondaryColor selectSpace" href="/extensions/slots/localSlots">Local Slots</a>
                                <a className="btn btn-custom secondaryColor selectSpace" href="/extensions/slots/internationalSlots">International Slots</a>
                                <a className="btn btn-custom secondaryColor selectSpace" href="/extensions/slots/depotSlots">Depot Slots</a>
                            </div>
                        </div>
                    </div>

                    <div className="col s12 m6 l4">
                        <div className="card">
                            <div className="card-image">
                                <img alt="station" src="/extensions/station.png" />
                            </div>
                            <div className="card-content options">
                                <span className="card-title ">Station Extensions</span>
                                <p>The game starts with one station. You can buy more streets or expand the length of the streets by purchasing extensions.</p>
                            </div>
                            <div className="card-action center-align">
                                <button className="btn btn-custom secondaryColor activator">See Upgrades</button>
                            </div>
                            <div className="card-reveal center-align">
                                <span className="card-title grey-text text-darken-4">Select a Station<i className="material-icons right">close</i></span>
                                <p className="left-align">The first item represents the cost of the station.</p>
                                <a className="btn btn-custom secondaryColor selectSpace" href="/extensions/stations/main">Main Station</a>
                                <a className="btn btn-custom secondaryColor selectSpace" href="/extensions/stations/second">Second Station</a>
                                <a className="btn btn-custom secondaryColor selectSpace" href="/extensions/stations/third">Third Station</a>
                                <a className="btn btn-custom secondaryColor selectSpace" href="/extensions/stations/fourth">Fourth Station</a>
                                <a className="btn btn-custom secondaryColor selectSpace" href="/extensions/stations/fifth">Fifth Station</a>
                            </div>
                        </div>
                    </div>

                    <div className="col s12 m6 l4">
                        <div className="card">
                            <div className="card-image">
                                <img alt="bavaria" src="/extensions/nordicSummer.png" />
                            </div>
                            <div className="card-content options">
                                <span className="card-title ">Technology & Themes</span>
                                <p>New technologies are needed in order to expand your train empire. Themes make your station beautiful!</p>
                            </div>
                            <div className="card-action center-align">
                                <button className="btn btn-custom secondaryColor activator">See Upgrades</button>
                            </div>
                            <div className="card-reveal center-align">
                                <span className="card-title grey-text text-darken-4">Select a Subcategory<i className="material-icons right">close</i></span>
                                <p className="left-align">Some themes are required in order to unlock new buildings!</p>
                                <a className="btn btn-custom secondaryColor selectSpace" href="/extensions/technology/trainRoute">Route Planner</a>
                                <a className="btn btn-custom secondaryColor selectSpace" href="/extensions/technology/other">Other</a>
                                <a className="btn btn-custom secondaryColor selectSpace" href="/extensions/themes/all">Themes</a>
                            </div>
                        </div>
                    </div>

                    <div className="col s12 m6 l4 push-l2">
                        <div className="card">
                            <div className="card-image">
                                <img alt="normal rail" src="/extensions/normalRail.png" />
                            </div>
                            <div className="card-content options">
                                <span className="card-title ">Rails</span>
                                <p>Rails determine how many trains you can have at once in your station. There are 3 types of rails: normal, maglev & hyperloop.</p>
                            </div>
                            <div className="card-action center-align">
                                <a className="btn btn-custom secondaryColor" href="/extensions/rails/all">See Upgrades</a>
                            </div>
                        </div>
                    </div>

                    <div className="col s12 m6 l4 push-m3 push-l2">
                        <div className="card">
                            <div className="card-image">
                                <img alt="storage" src="/extensions/storage.png" />
                            </div>
                            <div className="card-content options">
                                <span className="card-title ">Storage</span>
                                <p>In order to store more items you need to expand your storage space. You can free some up by storing trains in depot!</p>
                            </div>
                            <div className="card-action center-align">
                                <a className="btn btn-custom secondaryColor" href="/extensions/storage/all">See Upgrades</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default ExtensionOptions;
