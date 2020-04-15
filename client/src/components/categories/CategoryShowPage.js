import React, { Component } from 'react'
import { Container } from 'semantic-ui-react';
import Service from '../Services/Service'
import { connect } from 'react-redux';
import Category from './Category'



class CategoryShowPage extends Component {

    renderCategoryServices = () => {
        console.log(this.props) 
       let listOfServices = this.props.services.filter(service => service.category_id === this.props.categories.id).map((service) => {
           return <Service key={service.id} service={service} />
       })

       return (
           <ul>
            {listOfServices}
           </ul>
       )
      };


    // renderCategories = () => { 
    //     return this.props.categories.map(category => {
    //         return ( 
    //             <Category key={category.id} category={category} />)  // pass to category page where the category cards are rendered
    //     })
    // };
      
    
    render = () => {
        return (
            <Container>
              {this.renderCategoryServices()}
            </Container>
        )
    }
    
 }

 const mapStateToProps = (state) => {
    console.log(state)
    return {
        categories: state.categoriesReducer.categories,
        services: state.servicesReducer.services
    }
};
    
 
export default connect(mapStateToProps)(CategoryShowPage);
// export default CategoryShowPage

