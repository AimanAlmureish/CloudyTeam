import React from 'react';
import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'

export class App extends Component {
  getdata=async(name)=>{
    const promise = await fetch(`http://api.weatherstack.com/current?access_key=35381ddac74e2dbd44ec915bb3e139bb&query=${name}`)
    const data=await promise.json();
    return data;
  }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default App

