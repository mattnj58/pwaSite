import React, { Component } from 'react';
import './App.css';
import Welcome from '../Welcome/welcome';
import Education from '../Education/education';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Welcome/>
          <Education/>
      </div>
    );
  }
}

export default App;
