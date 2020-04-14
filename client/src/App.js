import React, { Component } from 'react'
import './App.css';
import Main from './containers/Main'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


class App extends Component {

  render() {

    return (
    <div className="App">
     <Main />
    </div>

    )
  }
};

export default App;
