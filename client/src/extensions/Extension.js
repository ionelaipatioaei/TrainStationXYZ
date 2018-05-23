import React, {Component} from "react";
import "./Extension.css";

class Extension extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeDiscount: false,
            selected: false
        }
    }

    //The two functions are used to update the state of the extension
    updateTotalMaterials() {
        this.setState({selected: !this.state.selected}, () => {this.checkForUpdates()});
    }

    updateDiscount() {
        this.setState({activeDiscount: !this.state.activeDiscount}, () => {this.checkForUpdates()});
    }

    getName() {
        return `${this.props.category}_${this.props.subCategory}${this.props.id}`;
    }

    checkForUpdates() {
        if(this.state.selected || this.state.activeDiscount) {
            const info = {gPrice: this.props.gPrice, mats: this.props.mats, selected: this.state.selected, discount: this.state.activeDiscount};
            //Save the data of the specific extension with a unique key and the specific value to localStorage
            //TODO: Make an option to select between localStorage and sessionStorage
            localStorage.setItem(this.getName(), JSON.stringify(info));
        }

        if(!this.state.selected && !this.state.activeDiscount) {
            //Remove the specific item from the localStorage
            localStorage.removeItem(this.getName());
        }
    }

    //If the user has saved data in localStorage for the specific extension it is restored to state
    componentWillMount() {
        const data = JSON.parse(localStorage.getItem(this.getName()));
        if(data !== null) {
            this.setState({activeDiscount: data.discount, selected: data.selected});
        }
    }

    render() {
        const gPrice = this.state.activeDiscount ? this.props.gPrice - (this.props.gPrice * 0.2) : this.props.gPrice;
        let discountBtnClasses = this.state.activeDiscount ? "btn-small btn-custom waves-effect waves-light discountOnColor" : "btn-small btn-custom waves-effect waves-light discountOffColor";
        let selectedCardClass = this.state.selected ? "card selected z-depth-3" : "card z-depth-3";
        let selectedStatus = this.state.selected ? "RMV" : "ADD";

        const formatNumber = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

        //Create array of <li> elements to render the materials required
        const matList = this.props.mats.map((material, index) => {
            const matAmount = this.state.activeDiscount ? material.amount - (material.amount * 0.2) : material.amount;

            if(material.amount !== 0) {
                const matImg = `/materials/${material.mat}.png`;
                return <li key={index}><img className="matItem" alt={material.mat} src={matImg} /><span className="matItem" style={{paddingLeft: 4}}>{formatNumber(matAmount)}</span></li>;
            } else {
                return <li key={index}><img className="matItem" alt="filler" src="/materials/filler.png" /></li>;
            }
        });

        return (
            <div className="col s12 m4 l3">
                <div className={selectedCardClass}>

                    <div className="card-content">
                        <p>{this.props.desc}</p>

                        <hr className="line" />
                        <p>Level: {formatNumber(this.props.gLevel)}</p>
                        <p>Xp: {formatNumber(this.props.gXp)}</p>
                        <p className="matItem">Price: <img className="matItem" alt="gems" src="/materials/gems.png" /><span style={{paddingLeft: 4}}>{formatNumber(gPrice)}</span></p>

                        <hr className="line" />
                        <p>Level: {formatNumber(this.props.level)}</p>
                        <p>Xp: {formatNumber(this.props.xp)}</p>
                        <p>Materials:</p>
                        <ul id="matList">
                            {matList}
                        </ul>
                    </div>

                    <div className="card-action center-align">
                        <button className="btn-small btn-custom secondaryColor waves-effect waves-light" onClick={this.updateTotalMaterials.bind(this)}>{selectedStatus}</button>
                        <button className={discountBtnClasses} onClick={this.updateDiscount.bind(this)}>DISCOUNT</button>
                    </div>

                </div>
            </div>
        );
    }
}

export default Extension;
