import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let timesClicked = 0;



function addOne() {
  console.log('Adding one to the timesClicked variable');
timesClicked++;
render();
}

function render() {
ReactDOM.render(<App timesClicked={timesClicked} onClick={addOne}/>,
document.getElementById('root'));
}

render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
