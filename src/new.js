import React, { useState } from 'react';

export default function Manager() {

	const [ answer, changeAnswer ] = useState('');

	const ChangeValue = () => {
		changeAnswer('No. He does not.');
    };
    
    return (
		<div>
			<h1 style={{color:"red"}}>Does Alex speaks spanish  Click to Know<br/>{answer}</h1>

            <button type="button" onClick={ChangeValue}>Click</button>
        </div>
    )

}

 