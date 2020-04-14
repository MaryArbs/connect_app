import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CategoriesContainer from '../containers/CategoriesContainer'
// import ServicesContainer from '../containers/ServicesContainer'
import Header from '../components/Header'
import Home from '../components/Home'
import ServicesContainer from '../containers/ServicesContainer'
import CategoryShowPage from '../components/Categories/CategoryShowPage'
import Footer from '../components/Footer'
import './Main.css'

class Main extends Component {
    render() {
        return (
     <div>
         <Header/>
         <ServicesContainer />
         <Switch>
            <div>
              <Route exact path="/" component={ Home } />
              <Route exact path="/categories" component={ CategoriesContainer } />
              <Route exact path='/categories/:id' component={({match} ) => < CategoryShowPage match={match} id={match.params.id}/>}/>
           </div>
         </Switch>
         <Footer />
     </div>
    )}
}

//do I need to wrap in Router, if index.js app is wrapped in Router
//switch only allow one route to exist at once 
    
      
   


export default Main;