import React, { Component } from 'react';
import './App.css';
import Welcome from '../Welcome/welcome';
import Education from '../Education/education';
import Skills from '../Skills/skills';
import Projects from '../Projects/projects';

class App extends Component {
  render() {
    return (
        <div className='App'>
            <Welcome/>
            <Skills/>
            <Projects/>
            <Education/>
        </div>
    );
  }
}

export default App;
