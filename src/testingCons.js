import React, { Component } from 'react'
class Student extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: "Niraj",
            roll: 12,
            address: this.props.addr,
            message: "welcome user"
        };
    }
    changeMessage(){
        this.setState({
            message: 'thank your for subscribing'
        })
    }

    render(){

        setTimeout(() => {
            this.setState({name:"nototious"});
            
        }, 5000);
        return(
            <div>
            <h1>Hello, {this.state.name}. Your Roll no is {this.state.roll} and your address is {this.state.address} </h1>
            <h2>{this.state.message}</h2>
            <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
            );
    }
}
export default Student;