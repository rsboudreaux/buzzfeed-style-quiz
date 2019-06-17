import React, { Component } from 'react';
import './App.css';

import Strain from './components/strain'
import Song from './components/song'
import Food from './components/food'

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <ul>
            <li><Strain /></li>
            <li><Song /></li>
            <li><Food /></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
