import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import Header from "./Header";

class App extends Component {
  render() {
    return (
    <div>
    <Header/>
      <button>Add</button>
      <div>
         <span>Name</span><br/>
         <span>Phone</span>
    </div>
     
    </div> 
    );
    
  }
}
// <label htmlFor = "name"> Name:</label>
//    <input id = "name" type= "text" placeholder="type here"  defaultValue = "Deepa"/>



export default App;
