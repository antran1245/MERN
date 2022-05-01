import React, {Component} from "react";

export default class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        }
    }
    increaseAge = () => {this.setState({age: this.state.age += 1})};
    render() {
        const {first_name, last_name, hairColor} = this.props;
        return(
            <div>
                <h1>{last_name}, {first_name}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick={this.increaseAge}>Birthday for {first_name} {last_name}</button>
            </div>
        );
    }
}