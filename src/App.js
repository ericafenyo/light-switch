import React, { Component } from 'react';
import './App.css';
import LightContainer from './LightContainer';

const appStyle = { width: "100px", margin: "48px auto", textAlign: "center" };

class App extends Component {
  render() {
    return (
      <div style={appStyle}>
        <LightContainer />
      </div>
    );
  }
}

export default App;
