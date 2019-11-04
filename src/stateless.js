import React, { useState, useEffect } from 'react';
import randomcolor from 'randomcolor';

function Manager() {
	const [number, changeNumber] = useState(0);
	const [answer, changeAnswer] = useState('');
	const [timer, changeTimer] = useState(999);
	const [color, setColor] = useState('');

	const increaseNum = () => {
		changeNumber(number + 1);
	};

	const decreaseNum = () => {
		changeNumber((prevValue) => prevValue - 1);
	};

	const ChangeValue = () => {
		changeAnswer('No he does not have');
	};

	useEffect(() => {
		setInterval(() => {
			changeTimer((prevCount) => prevCount - 1);
		}, 1000);
	}, []);

	useEffect(
		() => {
			setColor(randomcolor());
		},
		[number]
	);

	return (
		<div>
			<h1 style={{ color: color }}>{number}</h1>

			<button type="button" onClick={increaseNum}>
				increase
			</button>

			<button type="button" onClick={decreaseNum}>
				decrease
			</button>

			<h1>does Deeplove have good handwriting? Click to Know<br />{answer}</h1>

			<button type="button" onClick={ChangeValue}>
				Click
			</button>

			<h2>{timer} : Count Down</h2>

		</div>
	);
}

export default Manager;
