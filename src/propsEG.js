import React from 'react';

const Teacher = props => {
    return(
        <div>
            <h1>name: {props.name}</h1>
            <h2>your roll:{props.roll} </h2>
            <h3>address: {props.addr} </h3>
        </div>
    )
}

export default Teacher
