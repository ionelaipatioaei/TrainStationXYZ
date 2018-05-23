import React, {Component} from "react";
import "./TotalTab.css";

class TotalTab extends Component {
    constructor(props) {
        super(props);

        //Init the state and create the initData used to fill the state when the list is cleared
        this.initData = [];
        this.state = {
            discount: false,
            data: [{mat: "gems", amount: 0, leftAmount: 0}, {mat: "gold", amount: 0, leftAmount: 0}, {mat: "wood", amount: 0, leftAmount: 0}, {mat: "nails", amount: 0, leftAmount: 0}, {mat: "bricks", amount: 0, leftAmount: 0}, {mat: "glass", amount: 0, leftAmount: 0}, {mat: "fuel", amount: 0, leftAmount: 0}, {mat: "steel", amount: 0, leftAmount: 0}, {mat: "gravel", amount: 0, leftAmount: 0}, {mat: "u-235", amount: 0, leftAmount: 0}, {mat: "cement", amount: 0, leftAmount: 0}, {mat: "rubber", amount: 0, leftAmount: 0}, {mat: "carbon", amount: 0, leftAmount: 0}, {mat: "titanium", amount: 0, leftAmount: 0}, {mat: "marble", amount: 0, leftAmount: 0}, {mat: "wires", amount: 0, leftAmount: 0}, {mat: "plastics", amount: 0, leftAmount: 0}, {mat: "silicon", amount: 0, leftAmount: 0}, {mat: "lithium", amount: 0, leftAmount: 0}, {mat: "aerogel", amount: 0, leftAmount: 0}, {mat: "nanotubes", amount: 0, leftAmount: 0}, {mat: "neodymium", amount: 0, leftAmount: 0}, {mat: "wolfram", amount: 0, leftAmount: 0}, {mat: "borax", amount: 0, leftAmount: 0}, {mat: "xenon", amount: 0, leftAmount: 0}, {mat: "bismuth", amount: 0, leftAmount: 0}]
        }
    }

    componentWillMount() {
        const pairs = [];
        //Find all the available items in localStorage and inserts the key into pairs
        for(let i = 0; i < localStorage.length; i++) {
            pairs.push(localStorage.key(i));
        }

        const materials = [];

        pairs.forEach(pair => {
            //Parse the data from localStorage to materials arrat as objects
            if(JSON.parse(localStorage.getItem(pair)).selected) {
                const buffer = JSON.parse(localStorage.getItem(pair));
                const obj = {gPrice: buffer.gPrice, mats: buffer.mats};
                materials.push(obj);
            }
        });
        //^^^TODO: Better way to get the data out from localStorage

        this.setState(prevState => {
            //This is a copy of the previous state of data
            let buffer = prevState.data;

            /*
            Using 3 nested loops the materials are added together
            This only happens when the component will mount
            */
            //Use the previous state to have all the materials to update
            prevState.data.forEach((item, i) => {
                //Now we need to merge the previous state with the materials array
                materials.forEach(dataItem => {
                    /*
                    At this layer data looks like this: {gPrice, mats: [{mat: "ex", amount: 10}, {mat: "ex", amount: 10}, {mat: "ex", amount: 10}]}
                    We need to go deeper into the mats array to be able to merge the state with the materials
                    */
                    //Check the gPrice and merge it with the state
                    if(item.mat === "gems") {
                        item.amount += dataItem.gPrice;
                        //Find the correct spot for the gPrice in buffer and replace the object with the updated one
                        buffer.splice(i, 1, {mat: item.mat, amount: item.amount});
                    }
                    dataItem.mats.forEach(material => {
                        //Check if the mat is the same as the state material type, if so merge the amounts
                        if(item.mat === material.mat) {
                            item.amount += material.amount;
                            buffer.splice(i, 1, {mat: item.mat, amount: item.amount});
                        }
                    });
                });
                /*
                this.initData gets the same form as this.state.state a the beginning,
                this is used when the clear button is presed to force a re-render with the localStorage cleared
                */
                this.initData.push({mat: item.mat, amount: 0, leftAmount: 0});
            });

            //After the buffer is updated it replaces the data state
            return {data: buffer};
        });
    }

    render() {
        //Create the row of the table
        const tableRows = this.state.data.map((item, index) => {
            const formatNumber = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

            let name = item.mat;
            let imgSrc = `/materials/${name}.png`;
            let amount = this.state.discount ? item.amount * 0.8 : item.amount;
            let leftAmount = item.leftAmount;
            if(this.state.discount && !isNaN(leftAmount)) {
                let change = item.amount - leftAmount;
                leftAmount = (item.amount * 0.8) - change;
            }
            amount = formatNumber(amount);

            leftAmount = !isNaN(leftAmount) ? leftAmount > -1 ? formatNumber(leftAmount) : "Enough" : this.state.discount ? formatNumber(item.amount * 0.8) : formatNumber(item.amount);

            return (
                <tr key={index}>
                    <td className="rowSpace"><img className="matItem" alt={name} src={imgSrc} /><span style={{paddingLeft: 4}} className="matItem">{name.charAt(0).toUpperCase() + name.slice(1)}</span></td>
                    <td className="rowSpace">{amount}</td>
                    <td className="materialInput rowSpace"><input type="text" placeholder="I have..." onChange={event => {
                        let change = event.target.value;
                        //Update the state when the this.activeDiscount is true
                        this.setState(prevState => {
                            let buffer = prevState.data;
                            if(buffer[index].mat === item.mat) {
                                buffer.splice(index, 1, {mat: item.mat, amount: item.amount, leftAmount: item.amount - change});
                            }
                            return {data: buffer};
                        });
                    }} /></td>
                    <td className="rowSpace">{leftAmount}</td>
                </tr>
            );
        });

        return (
            <div className="container">
                <div className="row center-align">
                    <div className="col s12">

                    <div className="switch switch-text left-align">
                        <label className="switch-text">
                            <span id="discount">Activate 20% discount
                                <input type="checkbox" value={this.state.discount} onChange={() => this.setState({discount: !this.state.discount})} /><span className="lever"></span>
                            </span>
                        </label>
                    </div>

                        <table className="striped center-align centered">
                            <thead>
                                <tr>
                                    <th>Material</th>
                                    <th>Total</th>
                                    <th>Owned</th>
                                    <th>Needed</th>
                                </tr>
                            </thead>

                            <tbody>
                                {tableRows}
                            </tbody>

                        </table>

                        <button className="btn btn-custom secondaryColor" onClick={() => {
                            //Clear the localStorage and updates the data state with this.initData(all materials have 0 amount)
                            localStorage.clear();
                            this.setState({data: this.initData});
                        }}>CLEAR</button>

                    </div>
                </div>
            </div>
        );
    }
}

export default TotalTab;
