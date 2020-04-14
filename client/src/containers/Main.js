import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import CategoriesContainer from '../containers/CategoriesContainer'
import ServicesContainer from '../containers/ServicesContainer'
import Header from '../components/Header'
import './Main.css'

class Main extends Component {
    render() {
        return (
     <div>
      <Header/>
      <CategoriesContainer />
      <ServicesContainer />
     </div>
        
  
     
    
   

        )}
}
    
      
   


export default Main;