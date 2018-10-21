import React, { Component } from 'react';
import './App.css';
import Header from './containers/Header'
import Screen from './containers/Screen'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Screen/>
        <Header bottom/>
      </div>
    );
  }
}

export default App;
