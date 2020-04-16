import React, { Component } from 'react'
import { Container } from 'semantic-ui-react';
import Service from '../Services/Service'
import { connect } from 'react-redux';
import Category from './Category';
import './categoryCard.css'
// import { fetchCategory } from './actions/index';



class CategoryShowPage extends Component {


    renderCategory = () => {
        console.log(this.props.categories)
        return  this.props.categories.filter(category => category.id == this.props.id).map((category) => {
            return (
                <div>
                <h1>{category.name}</h1>
                <p>{category.description}</p>
                </div>
            )}
        )};
    // need to connect current category with service 

    renderServices = () => {
        console.log(this.props.services)
       return this.props.services.filter(service => service.category_id == this.props.id).map((service)=>{
           return (
               <div>
                   <p>{service.name}</p>
               </div>
           )
       })
    }


    render = () => {
      
         return (
            <Container>
                {this.renderCategory()}
                {this.renderServices()}
            </Container>
        )
    };

    //when use find it comes back undefined for name 

        
        

    // renderCategoryServices = () => {
    //     // console.log(this.props.match.params.categoryId) 
    //    let listOfServices = this.props.services.filter(service => service.category_id === this.props.categories.id).map((service) => {
    //        return <Service key={service.id} service={service} />

    //    })

    //    return (
    //        <ul>
    //         {matchCategory}
    //         {listOfServices}
    //        </ul>
    //    )
    //   };
      
    
    // render = () => {
    //     return (
    //         <Container>
    //           {/* {this.renderCategoryServices()} */}
    //           <h1>HI</h1>
    //         </Container>
    //     )
    // };
}

 const mapStateToProps = (state) => {
    console.log(state)
    return {
        categories: state.categoriesReducer.categories,
        services: state.servicesReducer.services
    }
};
 
export default connect(mapStateToProps)(CategoryShowPage);


