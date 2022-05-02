import React, {Component} from "react";

export default function PersonCard(props) {
    const {first_name, last_name, age, hairColor} = props;
    return(
        <div>
            <h1>{last_name}, {first_name}</h1>
            <p>Age: {age}</p>
            <p>Hair Color: {hairColor}</p>
        </div>
    );
}