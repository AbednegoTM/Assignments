import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import New from './new.js';
import Welcome from "./welcome";
import {Subheading } from "./welcome";
import  Components  from  "./content";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Components />
        <Subheading />
        <Welcome />
        <New />  
      </div>
    );
  }
}

export default App;
