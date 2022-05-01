import React, {Component} from "react";

export default class PersonCard extends Component {
    render() {
        const {first_name, last_name, age, hairColor} = this.props;
        return(
            <div>
                <h1>{last_name}, {first_name}</h1>
                <p>Age: {age}</p>
                <p>Hair Color: {hairColor}</p>
            </div>
        );
    }
}