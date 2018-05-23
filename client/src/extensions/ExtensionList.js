import React, {Component} from "react";
import Extension from "./Extension";
import NotFound from "../NotFound";
import "./ExtensionList.css";

class ExtensionList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            dataError: false
        }
    }

    //Gets data from the API
    componentDidMount() {
        const url = `/api/extensions/${this.props.match.params.category}/${this.props.match.params.subcategory}/`;

        fetch(url)
        .then((res) => {
            if(!res.ok) {
                throw Error(res.status);
            }
            return res.json();
        })
        //Set the new data to data state
        .then(dt => this.setState({data: dt}))
        .catch(error => this.setState({dataError: true}));
    }

    render() {
        /*
        Mapping over the state using a pure fuction
        Transfers data as a prop
        Each element from array is render as an Extension component
        */
        let extensions;
        //Checking if the data was found or if there was a network error
        if(this.state.data && !this.state.dataError) {
            extensions = this.state.data.map((dt, index) => (
                <Extension key={index} category={dt.category} subCategory={dt.subCategory} desc={dt.desc} gLevel={dt.gLevel} gXp={dt.gXp} gPrice={dt.gPrice} level={dt.level} xp={dt.xp} mats={dt.mats} id={index}/>
            ));
        } else {
            extensions = undefined;
        }

        return extensions !== undefined ? (
            <div className="container">
                <div className="row">
                    {extensions}
                </div>
            </div>
        ) : (<NotFound />);
    }
}

export default ExtensionList;
