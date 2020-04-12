import React, { Component } from 'react'
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import CategoriesContainer from './containers/CategoriesContainer'
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// import { Divider } from 'semantic-ui-react'

class App extends Component {

  render() {

    return (
    <div className="App">
     <Header />
     <Home />
     <CategoriesContainer />
    </div>

    )
  }
};

export default App;
