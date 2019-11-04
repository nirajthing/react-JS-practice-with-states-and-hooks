import React, {Component} from 'react';
import './testing.css';

class Revision extends Component{
    state = {
        name: "Niraj",
        address: "hongkong",
        number: 981123456
    }
render(){
    return(
        <h1>Hello, {this.state.name}. You live in {this.state.address}. and your phone number is {this.state.number} </h1>
    )
}
}
export default Revision;