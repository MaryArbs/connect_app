import React, { Component } from 'react'
import { Container } from 'semantic-ui-react';
import Service from './Service'


class Services extends Component {

    renderServices = () => { 
      return this.props.services.map(service => {
        return (
          <Service key={service.id} service={service} />)
      })
    }
  
    render() {
      return (
         <div className="grid-container">
          {this.renderServices()}
        </div>
      
      )
    }
  
  }
  
  
  export default Services