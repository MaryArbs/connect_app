import React, { Component } from 'react'
import { Container } from 'semantic-ui-react';
import Service from '../Services/Service'
import { connect } from 'react-redux';
import Category from './Category';
import { Card, Image} from 'semantic-ui-react';
import './categoryCard.css'


class CategoryShowPage extends Component {


    renderCategory = () => {
        console.log(this.props.categories)
        return  this.props.categories.filter(category => category.id == this.props.id).map((category) => {
            return (
                <div>
                <h1>{category.name}</h1>
                <div className="category_description" ><h3>{category.description}</h3></div>
                <Image className='category_image' src={category.image} /><br />
                </div>
            )}
        )};

    renderServices = () => {
       let serviceList = this.props.services.filter(service => service.category_id == this.props.id).map((service)=>{
       return <Service key={service.id} service={service} />
       })

       return (
        <ul>
        {serviceList}
        </ul>
      )
    }


    render = () => {
      
         return (
            <div className="grid-container">
            <Container>
                {this.renderCategory()}
                {this.renderServices()}
             </Container>
             </div>
           
        )
    };
}


 const mapStateToProps = (state) => {
    console.log(state)
    return {
        categories: state.categoriesReducer.categories,
        services: state.servicesReducer.services
    }
};
 
export default connect(mapStateToProps)(CategoryShowPage);


