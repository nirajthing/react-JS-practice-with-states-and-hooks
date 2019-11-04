import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Revision from './testingState';
import Student from './testingCons';
import Teacher from './propsEG';
import Manager from './stateless'
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<Revision />, document.getElementById('root'));
ReactDOM.render(<Student addr="satungal" />, document.getElementById('root'));
ReactDOM.render(<Teacher name="niraj" roll={12} addr="satungal" />, document.getElementById('root'));
ReactDOM.render(<Manager name="Conor" />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
