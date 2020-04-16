import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'semantic-ui-react'
import Category from '../components/Categories/Category'
import '../components/Categories/categoryCard.css'


class CategoriesContainer extends Component {

    renderCategories = () => { 
        return this.props.categories.map(category => {
            return ( 
                <Category key={category.id} category={category} />)  // pass to category page where the category cards are rendered
        })
    };


    render = () => {
        console.log(this.props)
        return (
            <div className="grid-container">
              {this.renderCategories()}
            </div>
        )
    };
}

    const mapStateToProps = (state) => {
        console.log(state)
        return {
            categories: state.categoriesReducer.categories,
            services: state.servicesReducer.services,
        }
    };


export default connect(mapStateToProps)(CategoriesContainer);



    
 
