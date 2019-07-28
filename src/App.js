import React from 'react';
import './App.css';





function App(props) {
  return (
    <div className="App">
      <button onClick={props.onClick}>Click Me!</button>
      <div> Times Clicked: {props.timesClicked}</div>
    </div>
  );
}

export default App;
