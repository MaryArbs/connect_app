import React, { Component } from 'react'
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import { Route } from 'react-router-dom';

// import { Divider } from 'semantic-ui-react'

class App extends Component () {

  render() {

    return (
    <Router>
    <div className="App">
     <Header />
     <Route exact path="/" component={ Home } />
    </div>
    </Router>
    )
  }
};

export default App;
