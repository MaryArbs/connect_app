import React, { Component } from 'react'
import { Container } from 'semantic-ui-react';
import Service from '../Services/Service'



class CategoryShowPage extends Component {

    render = () => { 
       let listOfServices = this.props.services.filter(service => service.category_id === this.props.serviceId).map((service) => {
           return <Service key={service.id} service={service} />
       })

       return (
           <ul>
            {listOfServices}
           </ul>
       )
      };
    
 }
    
 export default CategoryShowPage

